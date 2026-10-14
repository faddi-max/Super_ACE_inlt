import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FormField } from "@/components/ui/FormField";
import { contactInquiryContent as c } from "@/content/contactInquiry";
import {
  inquiriesService,
  type InquiryPayload,
  type InquiryValidationErrors,
} from "@/api";

const initialFormData: InquiryPayload = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  product_line: "",
  quantity: "",
  destination_country: "",
  customisation: "",
  message: "",
  source_url: "",
};

export function ContactInquiry() {
  const [formData, setFormData] = useState<InquiryPayload>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<InquiryValidationErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    } else if (formData.name.trim().length > 120) {
      errors.name = "Name must not exceed 120 characters.";
    }

    if (formData.company && formData.company.trim().length > 150) {
      errors.company = "Company must not exceed 150 characters.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please add your email so we can send the quote.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    } else if (formData.email.trim().length > 180) {
      errors.email = "Email must not exceed 180 characters.";
    }

    if (formData.whatsapp && formData.whatsapp.trim()) {
      const cleanWa = formData.whatsapp.trim();
      const waRegex = /^[0-9+()\-\s.]{6,40}$/;
      if (!waRegex.test(cleanWa)) {
        errors.whatsapp =
          "Please enter a valid WhatsApp number including country code (6-40 chars).";
      }
    }

    if (!formData.product_line.trim()) {
      errors.product_line = "Please choose a product line.";
    } else if (formData.product_line.trim().length > 120) {
      errors.product_line = "Product line must not exceed 120 characters.";
    }

    if (formData.quantity && formData.quantity.trim().length > 60) {
      errors.quantity = "Quantity must not exceed 60 characters.";
    }

    if (!formData.destination_country.trim()) {
      errors.destination_country = "Please tell us where the order ships.";
    } else if (formData.destination_country.trim().length > 120) {
      errors.destination_country =
        "Destination country must not exceed 120 characters.";
    }

    if (formData.customisation && formData.customisation.trim().length > 255) {
      errors.customisation = "Customisation must not exceed 255 characters.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please describe what you need made.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "The message field must be at least 10 characters.";
    } else if (formData.message.trim().length > 5000) {
      errors.message = "Message must not exceed 5000 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerMessage(null);

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      const res = await inquiriesService.submitInquiry({
        ...formData,
        source_url: typeof window !== "undefined" ? window.location.href : null,
      });

      console.log("Inquiry submission response:", res);

      if (res.success) {
        setStatus("success");
        setServerMessage(res.message);
        setFieldErrors({});
      } else {
        setStatus("error");
        setServerMessage(res.message);
        if (res.errors) {
          setFieldErrors(res.errors);
        }
      }
    } catch (err: unknown) {
      console.error("Inquiry submission error:", err);
      setStatus("error");
      setServerMessage(
        (err as Error)?.message ||
          "Failed to send inquiry. Please try again later.",
      );
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setFieldErrors({});
    setStatus("idle");
    setServerMessage(null);
  };

  return (
    <section
      aria-labelledby="inquiry-title"
      className="bg-white py-14 text-navy sm:py-16 xl:py-20"
      id="inquiry"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 xl:grid-cols-[608px_minmax(0,1fr)] xl:gap-6 xl:px-0">
        {/* Form card: 608 wide, padding 35, radius 3, 0.71px border */}
        <Reveal className="motion-reveal--zoom">
          <div
            className="rounded-[3px] border-[0.71px] border-white/12 p-5 sm:p-[35px]"
            style={{
              backgroundColor: "var(--color-navy)",
              backgroundImage:
                "linear-gradient(222.74deg, var(--color-electric) -54.38%, var(--color-navy) 53.22%)",
            }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center py-6 text-center sm:py-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-electric/15 text-electric ring-1 ring-electric/30">
                  <CheckCircle2 className="h-7 w-7" />
                </div>

                <h3 className="mt-5 font-display text-[22px] font-bold uppercase tracking-[0.04em] text-white sm:text-[26px]">
                  {c.form.successTitle}
                </h3>

                <p className="mt-4 max-w-[420px] font-sans text-[12px] leading-5 text-silver">
                  {serverMessage || c.form.successSubtitle}
                </p>

                <p className="mt-2 max-w-[420px] font-sans text-[10px] leading-4 text-mist/60">
                  {c.form.note}
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="group/btn relative mt-7 inline-flex h-9 items-center justify-center gap-2 rounded-[2px] border border-white/15 bg-white/5 px-5 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 ease-smooth hover:border-electric hover:bg-electric hover:text-white motion-reduce:transition-none"
                >
                  <RefreshCw
                    size={12}
                    className="transition-transform duration-500 ease-smooth group-hover/btn:rotate-180 motion-reduce:transition-none"
                  />
                  <span>{c.form.resetButton}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {serverMessage && status === "error" && (
                  <div
                    role="alert"
                    className="mb-6 flex items-start gap-2.5 rounded-[2px] border border-speed-red/30 bg-speed-red/10 p-3.5 text-speed-red"
                  >
                    <AlertCircle className="mt-0.5 shrink-0" size={14} />
                    <p className="font-sans text-[11px] leading-[17px]">
                      {serverMessage}
                    </p>
                  </div>
                )}

                <div className="grid gap-x-3.5 gap-y-[30px] sm:grid-cols-2">
                  {c.form.fields.map((field) => (
                    <FormField
                      key={field.name}
                      {...field}
                      value={
                        (formData as unknown as Record<string, string | null>)[
                          field.name
                        ] ?? ""
                      }
                      onChange={(e) =>
                        handleFieldChange(field.name, e.target.value)
                      }
                      error={fieldErrors[field.name]}
                      disabled={status === "submitting"}
                    />
                  ))}
                </div>

                <button
                  className="group/btn relative mt-[18px] inline-flex h-9 w-full items-center justify-center gap-2.5 overflow-hidden rounded-[2px] bg-electric font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.7px] text-white transition-[background-color,color,transform] duration-300 ease-smooth hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60 motion-reduce:transition-none"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="animate-spin" size={13} />
                      <span className="relative">{c.form.submitting}</span>
                    </>
                  ) : (
                    <>
                      {/* Light sweep across the button on hover */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 opacity-0 transition-[transform,opacity] duration-700 ease-smooth group-hover/btn:translate-x-[500%] group-hover/btn:opacity-100 motion-reduce:hidden"
                      />
                      <span className="relative">{c.form.submit}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="relative transition-transform duration-300 ease-smooth group-hover/btn:translate-x-1 motion-reduce:transition-none"
                        size={12}
                        strokeWidth={2.5}
                      />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center font-sans text-[8px] leading-3 text-mist/60">
                  {c.form.note}
                </p>
              </form>
            )}
          </div>
        </Reveal>

        {/* Right column */}
        <div className="xl:pt-5" id="locations">
          <Reveal>
            <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
              {c.eyebrow}
            </Eyebrow>

            <h2
              className="mt-5 font-display text-[32px] font-bold uppercase leading-[32px] tracking-[0.3px] sm:mt-[22px] sm:text-[38px] sm:leading-[36px] xl:text-[44px] xl:leading-[39.16px] xl:tracking-[0.44px]"
              id="inquiry-title"
            >
              {c.titleLines.map((line, i) => (
                <span className="motion-mask" key={i}>
                  <span
                    className="motion-mask__line"
                    style={{ transitionDelay: `${120 + i * 110}ms` }}
                  >
                    {line.map((part) => (
                      <span
                        className={part.accent ? "text-electric" : undefined}
                        key={part.text}
                      >
                        {part.text}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </h2>

            <p className="mt-4 max-w-[500px] font-sans text-[12px] leading-5 text-steel sm:text-[13px] sm:leading-[22px]">
              {c.description}
            </p>
          </Reveal>

          <ul className="mt-8 xl:mt-7">
            {c.contacts.map((item, i) => (
              <li
                className="border-t-[0.67px] border-navy/10 last:border-b-[0.67px]"
                key={item.label}
              >
                <Reveal delay={260 + i * 100}>
                  <div className="group relative cursor-default pb-6 pt-[22px]">
                    {/* Accent line sweeps along the top on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                    />
                    <p className="font-sans text-[8px] font-extrabold uppercase leading-3 tracking-[0.14em] text-electric">
                      {item.label}
                    </p>
                    {item.phone && (
                      <a
                        className="mt-2 inline-block font-sans text-[13px] font-bold leading-4 text-navy transition-colors duration-300 ease-smooth hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none"
                        href={item.phoneHref}
                      >
                        {item.phone}
                      </a>
                    )}
                    <p className="mt-1.5 font-sans text-[11px] font-medium leading-4 text-navy transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                      {item.address}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
