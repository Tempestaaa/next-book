import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex gap-4 *:flex-1 w-full *:text-xl">
      <Button>
        <FaFacebook />
      </Button>
      <Button>
        <FcGoogle />
      </Button>
    </div>
  );
}
