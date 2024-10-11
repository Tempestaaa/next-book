import { Button } from "@/components/ui/button";
import { HeartIcon, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";

export default function BookCover() {
  return (
    <div className="w-1/4 flex flex-col items-center">
      <figure>
        <Image
          src="/test-image.jpg"
          alt="testing image"
          width={400}
          height={400}
        />
      </figure>

      <div className="flex flex-col gap-4 mt-4 items-stretch w-full">
        <Button
          variant="destructive"
          className="rounded-none h-12 text-base font-normal flex items-center gap-2"
        >
          <span>Favourites</span>
          <HeartIcon size={16} fill="#fff" />
        </Button>

        <Button className="rounded-none h-12 text-base font-normal flex items-center gap-2">
          <span>Add</span>
          <ShoppingBagIcon size={16} />
        </Button>
      </div>
    </div>
  );
}
