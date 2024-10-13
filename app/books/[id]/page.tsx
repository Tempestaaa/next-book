import BookCover from "@/app/books/[id]/_components/book-cover";
import BookDetails from "@/app/books/[id]/_components/book-details";
import Reviews from "@/app/books/[id]/_components/reviews";
import WrittingReview from "@/app/books/[id]/_components/writting-review";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export default function BookDetailsPage() {
  return (
    <section className="h-full pt-20">
      <div className="container mx-auto space-y-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/books">Books</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Book's title</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex gap-8 *:h-full">
          {/* Book's cover */}
          <BookCover />

          {/* Book's details & reviews */}
          <div className="flex-1 h-full">
            <BookDetails />
            <Separator className="my-4" />
            <WrittingReview />
            <Separator className="my-4" />
            <Reviews />
          </div>
        </div>
      </div>
    </section>
  );
}
