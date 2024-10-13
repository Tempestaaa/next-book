import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Props {
  links: {
    name: string;
    href: string;
  }[];
}

export default function MyBreadCrumb({ links }: Props) {
  const firstItem = links[0];
  const secondItem = links[1];
  const lastItem = links.pop();

  const content = () => {
    if (links.length > 3) {
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={firstItem.href}>
              {firstItem.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={secondItem.href}>
              {secondItem.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{lastItem?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>;
    } else {
      <Breadcrumb>
        <BreadcrumbList>
          {links.map((item, i) => (
            <BreadcrumbItem key={i}>
              <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>;
    }
  };

  return <>{content()}</>;
}
