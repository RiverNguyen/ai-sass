import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LadingPage = () => {
  return (
    <div>
      LadingPage
      <div className="">
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LadingPage;
