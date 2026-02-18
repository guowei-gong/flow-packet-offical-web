import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = "#06b6d4",
  colorTo = "#10b981",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={
        {
          "--border-beam-size": `${size}px`,
          "--border-beam-duration": `${duration}s`,
          "--border-beam-delay": `${delay}s`,
          "--border-beam-color-from": colorFrom,
          "--border-beam-color-to": colorTo,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
        <div className="absolute -inset-[1px] animate-border-beam rounded-[inherit] border border-transparent [background:linear-gradient(to_left,var(--border-beam-color-from),var(--border-beam-color-to),transparent)_no-repeat] [background-size:var(--border-beam-size)_var(--border-beam-size)] [offset-path:rect(0_auto_auto_0_round_calc(var(--border-beam-size)))]" />
      </div>
    </div>
  );
}
