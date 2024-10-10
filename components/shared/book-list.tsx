import { Button } from "@/components/ui/button";
import { ShoppingBagIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  length: number;
}

export default function BookList({ length }: Props) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
      {[...Array(length)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Link href={`/books/${i}`}>
            <div className="overflow-hidden">
              <Image
                src="/test-image.jpg"
                alt="testing image"
                width={400}
                height={400}
                className="hover:scale-110 duration-300 transition-transform"
              />
            </div>
          </Link>

          <div className="flex flex-col gap-1">
            <div className="flex gap-2 justify-between items-end">
              <Link href={`/books/${i}`}>
                <h1 className="text-lg font-semibold">
                  This is book's title {i + 1}
                </h1>
              </Link>
              <p className="text-2xl font-bold">$25.99</p>
            </div>
            <p className="text-foreground/50">by Author</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  size={18}
                  fill="#facc15"
                  className="text-yellow-400"
                />
              ))}
            </div>
            <Button className="rounded-none px-10 h-12 text-base font-normal mt-6 flex items-center gap-2 self-start">
              <span>Add</span>
              <ShoppingBagIcon size={16} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
