import { cn } from "../../utils/cn";

const sizes = {
  sm: "max-w-5xl",
  md: "max-w-container",
  lg: "max-w-[90rem]",
  full: "max-w-full",
};

export default function Container({
  className,
  children,
  as: Tag = "div",
  size = "md",
  ...props
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 md:px-8 lg:px-10",
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
