import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  tone?: "info" | "warning";
  className?: string;
};

export function DisclaimerBanner({ children, tone = "info", className }: Props) {
  return (
    <aside
      role="note"
      className={cn(
        "flex items-start gap-3 rounded-2xl border p-5",
        tone === "info"
          ? "border-secondary/30 bg-accent/50 text-foreground"
          : "border-destructive/30 bg-destructive/5 text-foreground",
        className
      )}
    >
      <Info
        className={cn(
          "h-5 w-5 shrink-0 mt-0.5",
          tone === "info" ? "text-secondary" : "text-destructive"
        )}
        aria-hidden
      />
      <div className="text-sm leading-relaxed">{children}</div>
    </aside>
  );
}
