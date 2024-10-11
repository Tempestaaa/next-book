import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { MessageSquareTextIcon, StarIcon } from "lucide-react";
import React from "react";

export default function Reviews() {
  return (
    <section className="px-4 py-2 bg-background text-foreground rounded-md">
      <div className="flex gap-4 items-center">
        <h1 className="text-xl font-bold border-b-2 border-foreground">
          Reviews
        </h1>
        <div className="flex items-center gap-1">
          <MessageSquareTextIcon size={14} />
          <span>5</span>
        </div>
      </div>

      <div className="">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="my-4 flex gap-4">
            <Avatar>
              <AvatarImage src="/user-profile.jpg" alt="user image" />
              <AvatarFallback>TT</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <div className="flex items-center gap-4 justify-between">
                <h1 className="font-bold hover:underline underline-offset-2 cursor-pointer truncate">
                  @Username
                </h1>
                <div className="flex items-center gap-1">
                  <StarIcon
                    size={12}
                    fill="#facc15"
                    className="text-yellow-400"
                  />
                  <span className="text-sm text-foreground/80">5/5</span>
                </div>
              </div>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus exercitationem eaque molestias praesentium omnis
                dolorum nemo pariatur consectetur unde tempore aspernatur ex
                dicta error, commodi sed? Voluptatum, libero. Itaque,
                reiciendis.
              </p>
            </div>
          </div>
        ))}

        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
