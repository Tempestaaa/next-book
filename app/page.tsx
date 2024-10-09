import BestSellers from "@/components/home/best-sellers";
import Introduction from "@/components/home/introduction";
import RandomBook from "@/components/home/random-book";

export default function HomePage() {
  return (
    <section className="h-full">
      <Introduction />
      <BestSellers />
      <RandomBook />
    </section>
  );
}
