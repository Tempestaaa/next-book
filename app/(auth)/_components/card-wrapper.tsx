import ChangePage from "@/app/(auth)/_components/change-page";
import Socials from "@/app/(auth)/_components/socials";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
  changePageHref: string;
  changePageTitle: string;
  showSocials?: boolean;
  children: React.ReactNode;
}

export default function CardWrapper({
  children,
  title,
  desc,
  changePageTitle,
  changePageHref,
  showSocials = false,
}: Props) {
  return (
    <Card className="w-[500px]">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-extrabold">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>

      {showSocials && (
        <div className="relative">
          <Separator className="mb-6 w-[90%] mx-auto" />
          <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-foreground/60 bg-background px-2 font-bold text-sm">
            OR
          </span>
        </div>
      )}

      <CardFooter className="flex flex-col gap-3">
        <div className="w-full">{showSocials && <Socials />}</div>
        <ChangePage
          changePageHref={changePageHref}
          changePageTitle={changePageTitle}
        />
      </CardFooter>
    </Card>
  );
}
