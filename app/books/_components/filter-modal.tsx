import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { mock_genres } from "@/lib/placeholders";
import { FilterIcon } from "lucide-react";

export default function FilterModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button asChild size="icon" className="rounded-full p-2">
          <FilterIcon />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form>
          <DialogHeader className="space-y-4">
            <DialogTitle>
              Select genres to filter out your desired books
            </DialogTitle>

            <DialogDescription className="grid grid-cols-3 gap-3">
              {mock_genres.map((item) => (
                <Label className="flex items-center gap-2">
                  <Input
                    type="checkbox"
                    name="genre"
                    value={item}
                    className="sr-only peer"
                  />
                  <span className="p-2 peer-checked:text-background peer-checked:bg-foreground w-full rounded-md">
                    {item}
                  </span>
                </Label>
              ))}
            </DialogDescription>
          </DialogHeader>

          <Separator className="my-4" />

          <DialogFooter>
            <div className="flex justify-between gap-4 w-full">
              <Button variant="destructive" type="reset">
                Clear
              </Button>

              <DialogClose asChild>
                <Button>Save</Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
