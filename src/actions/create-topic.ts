"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { z } from "zod";
import { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from "@/paths";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Must be at least 3 characters" })
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  description: z
    .string()
    .min(10, { message: "Must be at least 10 characters" }),
});

interface createTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}
export async function createTopic(
  formState: createTopicFormState,
  formData: FormData
): Promise<createTopicFormState> {
  const session = await auth();

  const name = formData.get("name");
  const description = formData.get("description");
  const result = createTopicSchema.safeParse({ name, description });

  // Validate user
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["Please Sign in to create a Topic"],
      },
    };
  }

  let topic: Topic;

  // Validate form
  if (!result.success) {
    return {
      errors: result.error?.flatten().fieldErrors,
    };
  }

  // Work with Data
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong!"],
        },
      };
    }
  }
  //? Revalidate the homepage and show the topic
  revalidatePath("/");
  console.log(paths.showTopic, topic.slug);
  redirect(paths.showTopic(topic.slug));
}
