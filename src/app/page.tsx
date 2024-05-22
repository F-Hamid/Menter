import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div className="w-full h-screen center flex-col">
      <form action={session?.user ? actions.signOut : actions.signIn}>
        <Button type="submit">
          {session?.user ? "Sign out!" : "Sign in!"}
        </Button>
      </form>
      <Profile />
    </div>
  );
}
