"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CalendarCheck, CheckCircle2, RotateCcw } from "lucide-react";
import { clinic } from "@/config/clinic";
import { whatsappUrl } from "@/lib/whatsapp";
import { useI18n } from "@/components/I18nProvider";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { btn } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Values = { name: string; phone: string; date: string; time: string; service: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const NOT_SURE = "general";

/** Today's date in the clinic's timezone as YYYY-MM-DD (client only). */
function todayISO() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: clinic.timezone }).format(new Date());
}
const noop = () => () => {};

export function normalisePhone(raw: string) {
  let d = raw.replace(/[^\d]/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
}

export function BookingForm({ defaultService = "" }: { defaultService?: string }) {
  const { locale, t } = useI18n();
  const uid = useId();
  const today = useSyncExternalStore(noop, todayISO, () => "");
  const maxDate = today ? new Date(new Date(today).getTime() + 92 * 864e5).toISOString().slice(0, 10) : "";

  const empty: Values = { name: "", phone: "", date: "", time: "", service: defaultService, message: "" };
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState<string | null>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const validate = (v: Values): Errors => {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = t.booking.errors.name;
    if (!/^[6-9]\d{9}$/.test(normalisePhone(v.phone))) e.phone = t.booking.errors.phone;
    if (!v.date || (today && v.date < today)) e.date = t.booking.errors.date;
    else if (maxDate && v.date > maxDate) e.date = t.booking.errors.dateFar;
    if (!v.time) e.time = t.booking.errors.time;
    if (!v.service) e.service = t.booking.errors.service;
    return e;
  };

  const update = (k: keyof Values, val: string) => {
    const next = { ...values, [k]: val };
    setValues(next);
    if (submitted) setErrors(validate(next));
  };

  useEffect(() => {
    if (waLink) successRef.current?.focus();
  }, [waLink]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      summaryRef.current?.focus();
      return;
    }

    const service =
      values.service === NOT_SURE ? t.booking.serviceNotSure : clinic.services.find((s) => s.slug === values.service)?.name[locale] ?? values.service;
    const slot = clinic.timeSlots.find((s) => s.value === values.time)?.label[locale] ?? values.time;
    const date = new Date(`${values.date}T00:00:00`).toLocaleDateString(locale === "kn" ? "kn-IN" : "en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const lines = [
      `*${t.booking.waIntro}*`,
      "",
      `${t.booking.waName}: ${values.name.trim()}`,
      `${t.booking.waPhone}: ${normalisePhone(values.phone)}`,
      `${t.booking.waDate}: ${date}`,
      `${t.booking.waTime}: ${slot}`,
      `${t.booking.waService}: ${service}`,
    ];
    if (values.message.trim()) lines.push(`${t.booking.waMessage}: ${values.message.trim()}`);

    const url = whatsappUrl(lines.join("\n"));
    setWaLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const reset = () => {
    setValues(empty);
    setErrors({});
    setSubmitted(false);
    setWaLink(null);
  };

  if (waLink) {
    return (
      <div className="card p-8 text-center sm:p-12" role="status">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
          <CheckCircle2 className="h-9 w-9" aria-hidden />
        </span>
        <h3 ref={successRef} tabIndex={-1} className="mt-6 text-2xl font-extrabold tracking-tight outline-none">
          {t.booking.successTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">{t.booking.successText}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className={btn("whatsapp", "lg")}>
            <BrandIcon name="whatsapp" className="h-5 w-5" />
            {t.booking.successRetry}
          </a>
          <button type="button" onClick={reset} className={btn("outline", "lg")}>
            <RotateCcw className="h-5 w-5" aria-hidden />
            {t.booking.successAnother}
          </button>
        </div>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;
  const id = (k: string) => `${uid}-${k}`;

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8" aria-describedby={id("privacy")}>
      <div
        ref={summaryRef}
        tabIndex={-1}
        aria-live="assertive"
        className={cn("outline-none", errorCount > 0 && "mb-6 flex items-center gap-2 rounded-2xl bg-rose-50 p-3 text-sm font-medium text-rose-800 ring-1 ring-rose-200")}
      >
        {errorCount > 0 && (
          <>
            <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
            {t.booking.errors.summary}
          </>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id("name")} label={t.booking.name} error={errors.name}>
          <input
            id={id("name")}
            name="name"
            autoComplete="name"
            placeholder={t.booking.namePlaceholder}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls(errors.name)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? id("name-err") : undefined}
          />
        </Field>
        <Field id={id("phone")} label={t.booking.phone} error={errors.phone}>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder={t.booking.phonePlaceholder}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls(errors.phone)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? id("phone-err") : undefined}
          />
        </Field>
        <Field id={id("date")} label={t.booking.date} error={errors.date}>
          <input
            id={id("date")}
            name="date"
            type="date"
            min={today || undefined}
            max={maxDate || undefined}
            value={values.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputCls(errors.date)}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? id("date-err") : undefined}
          />
        </Field>
        <Field id={id("time")} label={t.booking.time} error={errors.time}>
          <select
            id={id("time")}
            name="time"
            value={values.time}
            onChange={(e) => update("time", e.target.value)}
            className={inputCls(errors.time)}
            aria-invalid={!!errors.time}
            aria-describedby={errors.time ? id("time-err") : undefined}
          >
            <option value="">{t.booking.timePlaceholder}</option>
            {clinic.timeSlots.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label[locale]}
              </option>
            ))}
          </select>
        </Field>
        <Field id={id("service")} label={t.booking.service} error={errors.service} className="sm:col-span-2">
          <select
            id={id("service")}
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputCls(errors.service)}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? id("service-err") : undefined}
          >
            <option value="">{t.booking.servicePlaceholder}</option>
            {clinic.services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name[locale]}
              </option>
            ))}
            <option value={NOT_SURE}>{t.booking.serviceNotSure}</option>
          </select>
        </Field>
        <Field id={id("message")} label={t.booking.message} className="sm:col-span-2">
          <textarea
            id={id("message")}
            name="message"
            rows={3}
            maxLength={500}
            placeholder={t.booking.messagePlaceholder}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(inputCls(), "h-auto resize-y py-3")}
          />
        </Field>
      </div>

      <button type="submit" className={btn("whatsapp", "lg", "mt-6 w-full")}>
        <BrandIcon name="whatsapp" className="h-5 w-5" />
        {t.booking.submit}
      </button>
      <p id={id("privacy")} className="mt-3 flex items-start justify-center gap-1.5 text-center text-xs text-slate-500">
        <CalendarCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
        {t.booking.privacyNote}
      </p>
    </form>
  );
}

function inputCls(error?: string) {
  return cn(
    "h-12 w-full rounded-2xl bg-slate-50 px-4 text-base text-ink ring-1 transition outline-none placeholder:text-slate-500 focus:bg-white focus:ring-2",
    error ? "ring-rose-400 focus:ring-rose-500" : "ring-slate-200 focus:ring-brand-500"
  );
}

function Field({ id, label, error, children, className }: { id: string; label: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 flex items-center gap-1 text-sm text-rose-700">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}
