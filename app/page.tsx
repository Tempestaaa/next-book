import Introduction from "@/components/home/introduction";
import Slider from "@/components/home/slider";

export default function HomePage() {
  return (
    <section className="h-full">
      <div className="h-[600px] bg-amber-50">
        <section className="container mx-auto py-20 flex flex-col md:flex-row gap-12 *:flex-1 h-full">
          {/* Heading & Description */}
          <Introduction />

          {/* Slider */}
          <Slider />
        </section>
      </div>
    </section>
  );
}
