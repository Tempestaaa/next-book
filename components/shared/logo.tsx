import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-extrabold h-full">
      <span>Next.</span>
      <span>Book</span>
    </Link>
  );
}
