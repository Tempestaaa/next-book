"use client";

import Logo from "@/components/shared/logo";
import NavLinks from "@/components/shared/nav-links";
import SignInButton from "@/components/shared/sign-in-button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 64) setIsSticky(true);
      else setIsSticky(false);
    };

    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 ${
        isSticky ? "bg-foreground text-background" : "bg-transparent"
      } z-[99] transition-all duration-300`}
    >
      <nav className="container mx-auto flex items-center justify-between h-full">
        <section className="flex items-center gap-8">
          <Logo />
          <NavLinks />
        </section>

        <section className="flex items-center gap-6 h-full">
          <div
            className={`flex items-center ${
              isSticky ? "border-b-background" : "border-b-foreground"
            } border-b-2 `}
          >
            <div className="px-1">
              <SearchIcon size={16} />
            </div>
            <Input
              placeholder="Search book..."
              className="w-[200px] border-transparent outline-none focus-visible:ring-transparent shadow-none rounded-none"
            />
          </div>

          <Link href="/cart">
            <ShoppingCartIcon size={18} />
          </Link>

          <Separator
            orientation="vertical"
            className={`${
              isSticky ? "bg-background" : "bg-foreground"
            } w-[1.5px] h-1/3`}
          />

          <SignInButton />
        </section>
      </nav>
    </header>
  );
}
