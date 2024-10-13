import Subheading from "@/app/books/[id]/_components/subheading";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { mock_description, mock_genres } from "@/lib/placeholders";
import { StarIcon } from "lucide-react";

export default function BookDetails() {
  return (
    <div className="flex flex-col gap-1">
      {/* Titles and author */}
      <section className="space-y-1">
        <h3 className="text-xl italic text-foreground/50">
          This is the <strong>original title</strong> of the book
        </h3>
        <h1 className="text-3xl">
          This is the <strong>title</strong> of the book
        </h1>
        <h2 className="text-foreground/50 text-2xl">
          By <strong>author</strong>
        </h2>
      </section>

      {/* Rating */}
      <div className="flex gap-1 items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            size={20}
            fill="#facc15"
            className="text-yellow-400"
          />
        ))}
        <span className="text-lg ml-1">5/5</span>
      </div>

      {/* Genres */}
      <section className="flex flex-wrap gap-2 mt-2">
        {mock_genres.slice(0, 5).map((item, i) => (
          <Badge key={i} variant="secondary">
            {item}
          </Badge>
        ))}
      </section>

      <Separator className="my-3" />

      {/* Description */}
      <fieldset className="border rounded-md py-2 px-4 bg-secondary backdrop-blur-md">
        <legend className="font-bold text-lg">Description</legend>
        <p className="line-clamp-5">{mock_description}</p>
        <span className="cursor-pointer hover:underline underline-offset-2 font-bold">
          More...
        </span>
      </fieldset>

      <Separator className="my-4" />

      {/* More information */}
      <div className="text-sm">
        <Subheading title="More information" />
        <div className="flex items-center gap-4 justify-between *:flex-1 hover:bg-secondary duration-300 py-2 px-4">
          <p>Original title</p>
          <p>This is the book's original title</p>
        </div>
        <div className="flex items-center gap-4 justify-between *:flex-1 hover:bg-secondary duration-300 py-2 px-4">
          <p>Series</p>
          <p>This is the book's series</p>
        </div>
        <div className="flex items-center gap-4 justify-between *:flex-1 hover:bg-secondary duration-300 py-2 px-4">
          <p>Format</p>
          <p>Hardcover</p>
        </div>
        <div className="flex items-center gap-4 justify-between *:flex-1 hover:bg-secondary duration-300 py-3 px-4">
          <p>Pages</p>
          <p>200</p>
        </div>
        <div className="flex items-center gap-4 justify-between *:flex-1 hover:bg-secondary duration-300 py-3 px-4">
          <p>Published</p>
          <p>{new Date().toISOString().split("T")[0]}</p>
        </div>
        <div className="flex items-center gap-4 justify-between *:flex-1 hover:bg-secondary duration-300 py-3 px-4">
          <p>Language</p>
          <p>English</p>
        </div>
      </div>
    </div>
  );
}
