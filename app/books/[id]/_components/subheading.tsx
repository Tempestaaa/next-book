interface Props {
  title: string;
}

export default function Subheading({ title }: Props) {
  return (
    <h3 className="text-xl font-semibold border-b-2 border-foreground w-fit mb-2">
      {title}
    </h3>
  );
}
