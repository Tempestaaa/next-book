import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  MailIcon,
  PhoneCallIcon,
  SendIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8">
        {/* Logo */}
        <section>
          <Logo />
        </section>

        {/* Socials links */}
        <section className="space-y-2">
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

        {/* Contacts */}
        <section className="flex-1 space-y-2">
          <h1 className="text-xl font-bold">Contacts</h1>
          <div className="flex items-center gap-4 justify-between *:flex-1">
            <div className="flex items-center gap-2">
              <MailIcon size={16} />
              <span>Email</span>
            </div>
            <p>tantrungnguyen2001@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 justify-between *:flex-1">
            <div className="flex items-center gap-2">
              <PhoneCallIcon size={16} />
              <span>Phone</span>
            </div>
            <p>0123456789</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
