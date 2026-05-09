import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-medium tracking-widest uppercase transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-foreground/15 bg-transparent text-foreground/70",
        line:
          "border-foreground/30 bg-transparent text-foreground",
        solid:
          "border-foreground bg-foreground text-background",
        sand:
          "border-sand/40 bg-sand/10 text-sand-deep dark:text-sand-light",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
