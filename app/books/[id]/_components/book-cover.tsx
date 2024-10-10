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
          width={250}
          height={400}
        />
      </figure>

      <div className="space-y-2">
        <Button
          variant="destructive"
          className="rounded-none px-10 h-12 text-base font-normal mt-6 flex items-center gap-2 w-[250px]"
        >
          <span>Favourites</span>
          <HeartIcon size={16} fill="#fff" />
        </Button>

        <Button className="rounded-none px-10 h-12 text-base font-normal mt-6 flex items-center gap-2 w-[250px]">
          <span>Add</span>
          <ShoppingBagIcon size={16} />
        </Button>
      </div>
    </div>
  );
}
