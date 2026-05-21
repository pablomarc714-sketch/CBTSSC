"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
};

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid gap-10 sm:grid-cols-3 sm:gap-8">
      {stats.map((s) => (
        <StatItem key={s.label} stat={s} />
      ))}
    </dl>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, stat.value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [inView, mv, stat.value]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <dd className="flex items-baseline justify-center sm:justify-start gap-1 font-serif text-5xl text-primary md:text-6xl">
        <motion.span>{rounded}</motion.span>
        {stat.suffix ? <span>{stat.suffix}</span> : null}
      </dd>
      <dt className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
        {stat.label}
      </dt>
      {stat.description ? (
        <p className="mt-2 text-sm text-muted-foreground max-w-[28ch] mx-auto sm:mx-0">
          {stat.description}
        </p>
      ) : null}
    </div>
  );
}
