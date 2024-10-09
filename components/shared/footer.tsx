import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  SendIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-50 py-10">
      <div className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8">
        {/* Logo */}
        <section>
          <Logo />
        </section>

        {/*  */}
        <section className="space-y-4">
          <h1 className="text-xl font-bold">Socials</h1>
          <div className="flex gap-4">
            <Button size="icon" className="rounded-full text-background">
              <GithubIcon size={18} />
            </Button>
            <Button size="icon" className="rounded-full text-background">
              <FacebookIcon size={18} />
            </Button>
            <Button size="icon" className="rounded-full text-background">
              <InstagramIcon size={18} />
            </Button>
          </div>
        </section>

        {/*  */}
        <section>
          <form className="space-y-2">
            <Label className="space-y-1">
              <span>Email</span>
              <Input placeholder="Email me" />
            </Label>
            <Button className="flex items-center gap-2">
              <SendIcon size={16} />
              <span>Send</span>
            </Button>
          </form>
        </section>
      </div>
    </footer>
  );
}
