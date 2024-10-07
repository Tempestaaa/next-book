import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="flex items-center border-b-foreground border-b-2">
      <div className="px-1">
        <SearchIcon size={16} />
      </div>
      <Input
        placeholder="Search book..."
        className="w-[200px] border-transparent outline-none focus-visible:ring-transparent shadow-none rounded-none"
      />
    </div>
  );
}
