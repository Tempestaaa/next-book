import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignInButton() {
  return (
    <Link href="/sign-in">
      <Button>Sign In</Button>
    </Link>
  );
}
