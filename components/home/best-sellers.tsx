import Header from "@/components/shared/header";
import BookList from "@/components/shared/book-list";

export default function BestSellers() {
  return (
    <div className="container mx-auto py-20 space-y-8">
      <Header title="Bestsellers" isSeeAll />
      <BookList length={4} />
    </div>
  );
}
