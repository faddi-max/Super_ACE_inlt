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
}: FormFieldConfig) {
  const id = useId();
  const hintId = `${id}-hint`;
  const shared = {
    "aria-describedby": hint ? hintId : undefined,
    id,
    name,
    required,
  };

  return (
    <div className={cn("group min-w-0", full && "sm:col-span-2")}>
      <label
        className="mb-1.5 block font-sans text-[8px] font-bold uppercase leading-3 tracking-[0.14em] text-mist transition-colors duration-300 group-focus-within:text-white motion-reduce:transition-none"
        htmlFor={id}
      >
        {label}
        {required && <span className="text-electric"> *</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          {...shared}
          className={cn(control, "h-32 resize-none py-3 leading-[18px]")}
          placeholder={placeholder}
        />
      ) : type === "select" ? (
        <div className="relative">
          <select
            {...shared}
            className={cn(
              control,
              "h-10 cursor-pointer appearance-none pr-9 invalid:text-mist/60 [&>option]:bg-navy [&>option]:text-white",
            )}
            defaultValue=""
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
          className={cn(control, "h-10")}
          placeholder={placeholder}
          type={type}
        />
      )}

      {hint && (
        <p
          className="mt-1.5 font-sans text-[8px] leading-3 text-mist/60"
          id={hintId}
        >
          {hint}
        </p>
      )}
    </div>
  );
}