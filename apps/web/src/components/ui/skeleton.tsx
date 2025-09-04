import { cn } from "@/lib/static/shadcnUtils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent-foreground animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
