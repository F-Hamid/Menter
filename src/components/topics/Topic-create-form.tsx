"use client";

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { createTopic } from "@/actions";
import { useFormState } from "react-dom";

const TopicCreateForm = () => {
  const [formState, action] = useFormState(createTopic, { errors: {} });

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />

            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Description for your Topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />
            {formState.errors._form && (
              <div className="text-sm px-4 py-2 bg-red-200 text-red-700 rounded-md">
                {formState.errors._form?.join(", ")}
              </div>
            )}

            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
