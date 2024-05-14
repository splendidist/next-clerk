import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <h2>Sign In</h2>
      <SignIn />;
    </div>
  );
}
