import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MessageSquareTextIcon, ShoppingBagIcon, StarIcon } from "lucide-react";
import Image from "next/image";

export default function RandomBook() {
  return (
    <div className="h-[600px] bg-foreground text-background">
      <article className="container mx-auto py-20 flex flex-col md:flex-row gap-10 md:gap-20 h-full">
        {/* Book's cover */}
        <section className="w-1/4">
          <Image
            src="/test-image.jpg"
            alt="testing image"
            width={400}
            height={400}
            className="-rotate-2 border-b-2 border-l-2 shadow-md shadow-background"
          />
        </section>

        {/* Book's description */}
        <section className="flex-1 flex flex-col gap-2 p-4">
          <h1 className="text-4xl font-bold line-clamp-2">
            This is title of this book
          </h1>
          <p className="text-2xl text-background/50">by Author</p>

          <div className="flex gap-1 items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                size={20}
                fill="#facc15"
                className="text-yellow-400"
              />
            ))}
            <span className="text-xl">5/5</span>
          </div>

          <Separator className="my-2" />

          <p className="text-lg line-clamp-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, sit dignissimos voluptas, accusamus nobis quia
            tempore dolores nostrum fugit id harum dicta? Excepturi ab quibusdam
            quas hic eius vero quisquam? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nesciunt harum amet ratione consequatur commodi
            ipsa repudiandae nulla, animi minus molestiae. Temporibus voluptatum
            dignissimos id nulla, corrupti nihil quibusdam blanditiis debitis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quibusdam ut eius, reprehenderit aliquam eaque, similique asperiores
            dignissimos voluptates quo saepe quasi impedit? Soluta quisquam aut
            architecto perferendis ullam molestiae.
          </p>

          <Button
            variant="secondary"
            className="rounded-none px-10 h-12 text-base font-normal flex items-center gap-2 self-start mt-auto"
          >
            <span>Add</span>
            <ShoppingBagIcon size={16} />
          </Button>
        </section>

        {/* Book's reviews */}
        <section className="w-1/4 h-full px-4 py-2 bg-background text-foreground rounded-md">
          <div className="flex gap-4 justify-between items-center">
            <h1 className="text-xl font-bold">Reviews</h1>
            <div className="flex items-center gap-1">
              <MessageSquareTextIcon size={14} />
              <span className="text-xs">15</span>
            </div>
          </div>
          <Separator className="my-2" />
          <ScrollArea className="h-[calc(100%-44px)] pr-6">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="my-4 flex gap-4">
                <Avatar>
                  <AvatarImage src="/user-profile.jpg" alt="user image" />
                  <AvatarFallback>TT</AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                  <div className="flex items-center gap-4 justify-between">
                    <h1 className="text-sm font-bold hover:underline underline-offset-2 cursor-pointer truncate">
                      @Username
                    </h1>
                    <div className="flex items-center gap-1">
                      <StarIcon
                        size={12}
                        fill="#facc15"
                        className="text-yellow-400"
                      />
                      <span className="text-xs text-foreground/80">5/5</span>
                    </div>
                  </div>
                  <p className="text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus exercitationem eaque molestias praesentium
                    omnis dolorum nemo pariatur consectetur unde tempore
                    aspernatur ex dicta error, commodi sed? Voluptatum, libero.
                    Itaque, reiciendis.
                  </p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </section>
      </article>
    </div>
  );
}
