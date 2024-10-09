import HeadingDescription from "@/components/home/heading-description";
import Slider from "@/components/home/slider";

export default function Introduction() {
  return (
    <div className="h-[750px] bg-amber-50">
      <section className="container mx-auto py-20 flex flex-col md:flex-row gap-12 h-full">
        {/* Heading & Description */}
        <HeadingDescription />

        {/* Slider */}
        <Slider />
      </section>
    </div>
  );
}
