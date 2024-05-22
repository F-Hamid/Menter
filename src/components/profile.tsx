"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  {
    return session.data?.user ? (
      <div className=" center flex-col">Client : User Sign In</div>
    ) : (
      <div className="center">Client : PLease Sign in!</div>
    );
  }
};

export default Profile;
