import Link from "next/link";

interface Props {
  changePageHref: string;
  changePageTitle: string;
}

export default function ChangePage({ changePageHref, changePageTitle }: Props) {
  return (
    <Link
      href={changePageHref}
      className="text-foreground/60 text-sm hover:underline underline-offset-2"
    >
      <p>{changePageTitle}</p>
    </Link>
  );
}
