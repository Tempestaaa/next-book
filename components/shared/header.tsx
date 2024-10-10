import Link from "next/link";

interface Props {
  title: string;
  isSeeAll?: boolean;
}

export default function Header({ title, isSeeAll = false }: Props) {
  return (
    <div className="flex justify-between items-end gap-4">
      <h1 className="text-5xl font-bold capitalize">{title}</h1>
      {isSeeAll && (
        <Link
          href="/books"
          className="hover:underline underline-offset-2 cursor-pointer"
        >
          See all
        </Link>
      )}
    </div>
  );
}
