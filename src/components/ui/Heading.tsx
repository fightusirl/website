import { cn } from "@/lib/utils";
const sizes = {
  title: "text-heading-lg",
  xl: "text-heading-lg lg:text-heading-xl",
  lg: "text-heading-md lg:text-heading-lg",
  md: "text-heading-sm lg:text-heading-md",
  sm: "text-heading-xs lg:text-heading-sm",
  xs: "text-heading-xs",
  xxs: "text-heading-2xs",
} as const;

type HeadingProps = {
  className?: string;
  tag?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  size?: keyof typeof sizes;
};

export const Heading: React.FC<HeadingProps> = ({ children, className, size = "title", tag: Tag = "h2", ...rest }) => {
  return (
    <Tag className={cn(`heading-${Tag}`, sizes[size], "font-bold", className)} {...rest}>
      {children}
    </Tag>
  );
};
