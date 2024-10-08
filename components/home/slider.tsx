import Image from "next/image";

export default function Slider() {
  return (
    <div className="flex gap-4 items-center">
      {/* Slider */}
      <section className="h-full flex items-center gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            data-slider="slider"
            className="flex-1 h-3/4 flex flex-col gap-2 odd:rounded-t-full even:flex-col-reverse even:rounded-b-full overflow-hidden"
          >
            <div className="h-3/4">
              <Image
                src="/test-image.jpg"
                alt="testing image"
                width={300}
                height={400}
                className="h-full"
              />
            </div>
            <div className="flex-1 px-2">
              <p className="text-lg font-bold line-clamp-2">
                This is the title of this {i + 1} book
              </p>
              <p className="text-foreground/50">This is the author name</p>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <section className="space-y-1">
        {[...Array(3)].map((_, i) => (
          <button
            key={i}
            className="aspect-square w-3 bg-foreground/50 rounded-full first:bg-foreground"
          />
        ))}
      </section>
    </div>
  );
}
