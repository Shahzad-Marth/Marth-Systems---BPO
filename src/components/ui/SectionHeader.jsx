import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { headerReveal } from "../../utils/animations";
import Badge from "./Badge";

export default function SectionHeader({
  badge,
  title,
  description,
  badgeClassName,
  className,
}) {
  return (
    <motion.div
      {...headerReveal}
      className={cn("mx-auto max-w-2xl text-center", className)}
    >
      {badge && (
        <Badge className={badgeClassName}>{badge}</Badge>
      )}
      <h2 className={cn("text-2xl sm:text-3xl lg:text-section-heading text-ink", badge ? "mt-5" : "")}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-body text-ink-secondary">{description}</p>
      )}
    </motion.div>
  );
}
