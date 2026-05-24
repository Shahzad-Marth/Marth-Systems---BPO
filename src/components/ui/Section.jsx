import { cn } from "../../utils/cn";
import Container from "./Container";

const backgrounds = {
  surface: "bg-surface",
  alt: "bg-surface-alt",
  "blue-soft": "bg-surface-blue-soft",
  ink: "bg-ink text-white",
};

export default function Section({
  children,
  className,
  containerClassName,
  background = "surface",
  containerSize = "md",
  id,
  as: Tag = "section",
  ...props
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "section-padding",
        backgrounds[background] || backgrounds.surface,
        className
      )}
      {...props}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </Tag>
  );
}
