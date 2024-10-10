import BookCover from "@/app/books/[id]/_components/book-cover";
import BookDetails from "@/app/books/[id]/_components/book-details";
import Reviews from "@/app/books/[id]/_components/reviews";
import { Separator } from "@/components/ui/separator";

export default function BookDetailsPage() {
  return (
    <section className="h-full pt-20">
      <div className="container mx-auto flex gap-8 *:h-full">
        {/* Book's cover */}
        <BookCover />

        {/* Book's details & reviews */}
        <div className="flex-1 h-full">
          <BookDetails />
          <Separator className="my-4" />
          <Reviews />
        </div>
      </div>
    </section>
  );
}
