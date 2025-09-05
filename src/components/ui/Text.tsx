import { cn } from "@/lib/utils";
const sizes = {
  xl: "text-lg lg:text-xl",
  lg: "text-base lg:text-lg",
  md: "text-sm lg:text-base",
  sm: "text-xs lg:text-sm",
  xs: "text-xs",
  xxs: "text-2xs",
} as const;

type TextProps = {
  className?: string;
  children?: React.ReactNode;
  size?: keyof typeof sizes;
};

export const Text: React.FC<TextProps> = ({ children, className, size = "md", ...rest }) => {
  return (
    <span className={cn(sizes[size], className)} {...rest}>
      {children}
    </span>
  );
};
