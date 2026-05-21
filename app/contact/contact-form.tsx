"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Please choose a topic"),
  message: z.string().min(15, "Please add a little more detail"),
});

type FormData = z.infer<typeof schema>;

const TOPICS = [
  "Membership question",
  "Event registration",
  "Therapist directory",
  "Press / media",
  "Partnerships",
  "Other",
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

  function onSubmit() {
    // Placeholder — wire to your backend / Resend / form service
    reset(undefined, { keepIsSubmitted: true, keepIsSubmitSuccessful: true });
  }

  if (isSubmitSuccessful) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-secondary/40 bg-accent/40 p-8 text-center"
      >
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-serif text-2xl text-foreground">Thanks for writing.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We will reply within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name?.message}>
          <Input id="name" autoComplete="name" {...register("name")} />
        </Field>
        <Field id="email" label="Email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </Field>
      </div>
      <Field id="subject" label="Topic" error={errors.subject?.message}>
        <select
          id="subject"
          {...register("subject")}
          className="h-11 w-full rounded-lg border border-input bg-card px-3.5 text-sm shadow-sm focus-visible:outline-none focus-visible:border-secondary focus-visible:ring-2 focus-visible:ring-secondary/30"
        >
          <option value="">Choose a topic…</option>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label="Message" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell us how we can help."
          {...register("message")}
        />
      </Field>
      <Button type="submit" size="lg">
        Send message
      </Button>
      <p className="text-xs text-muted-foreground">
        We will only use your email to respond. See our{" "}
        <a href="/privacy" className="underline text-secondary">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
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
