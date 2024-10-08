"use client";

import { navLinks } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const active = (href: string) => pathname === href;

  return (
    <menu className="flex h-full">
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`capitalize px-4 py-2 h-full relative duration-300 ${
            active(item.href) &&
            "font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-[20%] after:bg-foreground after:duration-300"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </menu>
  );
}
