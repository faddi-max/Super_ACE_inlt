import type { ChangeEvent } from "react";
import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type FormFieldConfig = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  hint?: string;
  options?: string[];
  /** Spans both columns */
  full?: boolean;
  value?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  error?: string;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
};

const control =
  "w-full rounded-[2px] border border-white/10 bg-white/5 px-3.5 font-sans text-[11px] text-white outline-none transition-[border-color,background-color,box-shadow] duration-300 ease-smooth placeholder:text-mist/60 focus:border-electric focus:bg-electric/5 focus:shadow-[0_0_0_3px] focus:shadow-electric/15 motion-reduce:transition-none";

export function FormField({
  name,
  label,
  placeholder,
  type = "text",
  required,
  hint,
  options,
  full,
  value,
  onChange,
  error,
  disabled,
  minLength,
  maxLength,
}: FormFieldConfig) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  const ariaDescribedBy =
    [error ? errorId : undefined, hint ? hintId : undefined]
      .filter(Boolean)
      .join(" ") || undefined;

  const shared = {
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": error ? true : undefined,
    id,
    name,
    required,
    disabled,
    minLength,
    maxLength,
    ...(value !== undefined ? { value, onChange } : {}),
  };

  const fieldControlClass = cn(
    control,
    error &&
      "border-speed-red/70 bg-speed-red/[0.04] focus:border-speed-red focus:shadow-[0_0_0_3px] focus:shadow-speed-red/20",
    disabled && "cursor-not-allowed opacity-60",
  );

  return (
    <div className={cn("group min-w-0", full && "sm:col-span-2")}>
      <label
        className={cn(
          "mb-1.5 block font-sans text-[8px] font-bold uppercase leading-3 tracking-[0.14em] text-mist transition-colors duration-300 motion-reduce:transition-none",
          error ? "text-speed-red" : "group-focus-within:text-white",
        )}
        htmlFor={id}
      >
        {label}
        {required && <span className="text-electric"> *</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          {...shared}
          className={cn(
            fieldControlClass,
            "h-32 resize-none py-3 leading-[18px]",
          )}
          placeholder={placeholder}
        />
      ) : type === "select" ? (
        <div className="relative">
          <select
            {...shared}
            className={cn(
              fieldControlClass,
              "h-10 cursor-pointer appearance-none pr-9 invalid:text-mist/60 [&>option]:bg-navy [&>option]:text-white",
            )}
            defaultValue={value === undefined ? "" : undefined}
          >
            <option disabled value="">
              {placeholder}
            </option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-mist transition-colors duration-300 group-focus-within:text-electric"
            size={14}
          />
        </div>
      ) : (
        <input
          {...shared}
          autoComplete={type === "email" ? "email" : undefined}
          className={cn(fieldControlClass, "h-10")}
          placeholder={placeholder}
          type={type}
        />
      )}

      {error ? (
        <p
          className="mt-1.5 font-sans text-[9px] font-medium leading-3 text-speed-red"
          id={errorId}
          role="alert"
        >
          {error}
        </p>
      ) : hint ? (
        <p
          className="mt-1.5 font-sans text-[8px] leading-3 text-mist/60"
          id={hintId}
        >
          {hint}
        </p>
      ) : null}
    </div>
  );
}
