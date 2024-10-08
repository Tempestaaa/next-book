import Logo from "@/components/shared/logo";
import NavLinks from "@/components/shared/nav-links";
import Search from "@/components/shared/search";
import SignInButton from "@/components/shared/sign-in-button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={`fixed top-0 left-0 right-0 h-16 bg-transparent`}>
      <nav className="container mx-auto flex items-center justify-between h-full">
        <section className="flex items-center gap-8">
          <Logo />
          <NavLinks />
        </section>

        <section className="flex items-center gap-6 h-full">
          <Search />
          <Link href="/cart">
            <ShoppingBagIcon size={18} />
          </Link>
          <Separator
            orientation="vertical"
            className="bg-foreground w-[1.5px] h-1/3"
          />
          <SignInButton />
        </section>
      </nav>
    </header>
  );
}
