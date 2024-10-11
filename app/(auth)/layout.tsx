export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" h-full pt-20">{children}</div>;
}
