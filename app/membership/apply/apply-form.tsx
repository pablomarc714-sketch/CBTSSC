"use client";

import * as React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const schema = z.object({
  // Step 1
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  city: z.string().min(1, "Required"),
  // Step 2
  tier: z.enum(["Professional", "Student", "Affiliate"], {
    errorMap: () => ({ message: "Choose a tier" }),
  }),
  credential: z.string().min(1, "Required"),
  licenseNumber: z.string().optional(),
  affiliation: z.string().optional(),
  // Step 3
  agree: z.literal(true, { errorMap: () => ({ message: "Please agree to continue" }) }),
});

type FormData = z.infer<typeof schema>;

const STEPS = ["Personal info", "Credentials", "Review & submit"];

export function ApplyForm() {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { tier: "Professional" as const },
  });

  const values = watch();

  async function next() {
    const fields: (keyof FormData)[][] = [
      ["firstName", "lastName", "email", "city"],
      ["tier", "credential"],
    ];
    const valid = await trigger(fields[step] ?? []);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }
  const onSubmit: SubmitHandler<FormData> = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-secondary/40 bg-accent/40 p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <Check className="h-7 w-7" />
        </span>
        <h2 className="mt-6 font-serif text-3xl text-foreground">
          Application received.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
          Thank you, {values.firstName}. We will follow up at {values.email} within five business
          days. In the meantime, you can browse our upcoming events.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Steps indicator */}
      <ol className="flex items-center gap-2 mb-10" aria-label="Application progress">
        {STEPS.map((label, i) => {
          const active = i === step;
          const done = i < step;
          return (
            <li key={label} className="flex items-center gap-3">
              <span
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full text-xs font-semibold transition-colors",
                  done
                    ? "bg-secondary text-secondary-foreground"
                    : active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                )}
                aria-current={active ? "step" : undefined}
              >
                {done ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span
                className={cn(
                  "text-xs sm:text-sm font-medium hidden sm:inline",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
              {i < STEPS.length - 1 ? (
                <span className="h-px w-6 sm:w-10 bg-border" aria-hidden />
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
        {step === 0 ? (
          <div className="space-y-5">
            <Field label="First name" error={errors.firstName?.message} id="firstName">
              <Input id="firstName" autoComplete="given-name" {...register("firstName")} />
            </Field>
            <Field label="Last name" error={errors.lastName?.message} id="lastName">
              <Input id="lastName" autoComplete="family-name" {...register("lastName")} />
            </Field>
            <Field label="Email" error={errors.email?.message} id="email">
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Phone (optional)" id="phone">
                <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
              </Field>
              <Field label="City" error={errors.city?.message} id="city">
                <Input id="city" autoComplete="address-level2" {...register("city")} />
              </Field>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-5">
            <div>
              <span className="text-sm font-medium text-foreground">Membership tier</span>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {(["Professional", "Student", "Affiliate"] as const).map((t) => (
                  <label
                    key={t}
                    className={cn(
                      "cursor-pointer rounded-xl border bg-card px-4 py-3 text-sm text-center transition-colors",
                      values.tier === t
                        ? "border-secondary ring-2 ring-secondary/30 text-foreground"
                        : "border-border hover:border-secondary/40"
                    )}
                  >
                    <input type="radio" value={t} {...register("tier")} className="sr-only" />
                    {t}
                  </label>
                ))}
              </div>
              {errors.tier ? (
                <p role="alert" className="mt-2 text-xs text-destructive">
                  {errors.tier.message}
                </p>
              ) : null}
            </div>
            <Field
              label="Highest credential (e.g. PhD, PsyD, MD, LCSW, LMFT, Doctoral Student)"
              error={errors.credential?.message}
              id="credential"
            >
              <Input id="credential" {...register("credential")} />
            </Field>
            <Field
              label="California license number (Professional only)"
              id="licenseNumber"
            >
              <Input id="licenseNumber" {...register("licenseNumber")} />
            </Field>
            <Field label="Affiliation or training program" id="affiliation">
              <Input id="affiliation" {...register("affiliation")} />
            </Field>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl text-foreground">Review your application</h3>
              <dl className="mt-4 space-y-3 rounded-2xl bg-muted/60 p-5 text-sm">
                <Row label="Name" value={`${values.firstName ?? ""} ${values.lastName ?? ""}`} />
                <Row label="Email" value={values.email} />
                {values.phone ? <Row label="Phone" value={values.phone} /> : null}
                <Row label="City" value={values.city} />
                <Row label="Tier" value={values.tier} />
                <Row label="Credential" value={values.credential} />
                {values.licenseNumber ? (
                  <Row label="License" value={values.licenseNumber} />
                ) : null}
                {values.affiliation ? (
                  <Row label="Affiliation" value={values.affiliation} />
                ) : null}
              </dl>
            </div>
            <label className="flex items-start gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-input text-secondary focus:ring-secondary"
                {...register("agree")}
              />
              <span className="text-foreground/85">
                I agree to the Society's{" "}
                <a href="/terms" className="underline text-secondary">
                  terms of membership
                </a>
                . I understand that membership fees are billed annually and that license
                verification will be completed before activation.
              </span>
            </label>
            {errors.agree ? (
              <p role="alert" className="text-xs text-destructive">
                {errors.agree.message}
              </p>
            ) : null}
            <p className="text-xs text-muted-foreground">
              Payment information will be collected on the next page after we verify your
              eligibility.
            </p>
          </div>
        ) : null}

        <div className="mt-10 flex items-center justify-between gap-3 border-t border-border pt-6">
          <Button type="button" variant="ghost" onClick={back} disabled={step === 0}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={next}>
              Continue <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit">Submit application</Button>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-1.5 block">
        {label}
      </Label>
      {children}
      {error ? (
        <p role="alert" aria-live="polite" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3">
      <dt className="w-32 shrink-0 text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  );
}
