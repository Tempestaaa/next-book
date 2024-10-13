import Subheading from "@/app/books/[id]/_components/subheading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StarIcon } from "lucide-react";

export default function WrittingReview() {
  return (
    <form className="space-y-2">
      <Subheading title="Your review" />
      <Label>
        <span className="sr-only">Your review</span>
        <Textarea
          rows={4}
          placeholder="How's your opinion on this book?"
          className="resize-none"
        />
      </Label>

      <div className="flex items-center gap-4 justify-between">
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

        <Button>Submit</Button>
      </div>
    </form>
  );
}
