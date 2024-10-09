import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeadingDescription() {
  return (
    <div className="h-full flex flex-col gap-6 justify-center w-1/3">
      <div className="text-8xl font-extrabold *:tracking-wider capitalize">
        <p>Find your</p>
        <p>Next book</p>
      </div>
      <p className="w-4/5 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        eligendi suscipit! Quo, ipsam. Tempora, possimus? Nemo recusandae
        necessitatibus soluta vel, laudantium beatae repellendus doloremque,
        nostrum, at atque quia qui autem.
      </p>
      <Link href="/books" className="self-start">
        <Button className="rounded-none px-12 h-12 text-base font-normal">
          Explore Now
        </Button>
      </Link>
    </div>
  );
}
