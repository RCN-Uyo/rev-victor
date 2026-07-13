"use client";

import {
  forwardRef,
  type ReactNode,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type SelectHTMLAttributes,
  useState,
  useId,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ========================================================================
   FORM FIELD
   Wrapper for label + input + error message
   ======================================================================== */

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function FormField({
  label,
  htmlFor,
  error,
  required = false,
  children,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="font-body text-sm text-secondary uppercase tracking-wider select-none"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
        {required && (
          <span className="text-gold ml-1" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only">(required)</span>}
      </label>

      {children}

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-sm flex items-center gap-1.5"
            style={{ color: "#E5484D" }}
            role="alert"
            aria-live="polite"
          >
            {/* Error icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 4.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
            </svg>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ========================================================================
   INPUT
   Text input with luxury styling
   ======================================================================== */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, icon, className = "", style, ...rest }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <span
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <input
          ref={ref}
          className={`
            w-full rounded-lg bg-surface border text-foreground
            font-body text-base
            placeholder:text-secondary placeholder:opacity-50
            transition-all
            disabled:opacity-50 disabled:cursor-not-allowed
            focus-visible:outline-none
            ${icon ? "pl-12 pr-4" : "px-4"}
            ${error ? "border-[#E5484D]" : "border-border"}
            ${className}
          `}
          style={{
            fontFamily: "var(--font-body)",
            height: "3.125rem", /* 50px */
            transitionProperty: "border-color, box-shadow",
            transitionDuration: "var(--duration-fast)",
            transitionTimingFunction: "var(--ease-out-expo)",
            boxShadow: error
              ? "0 0 0 3px rgba(229, 72, 77, 0.15)"
              : undefined,
            ...style,
          }}
          aria-invalid={error || undefined}
          onFocus={(e) => {
            if (!error) {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.boxShadow =
                "0 0 0 3px var(--color-gold-muted), 0 0 20px var(--color-gold-glow)";
            }
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error
              ? "#E5484D"
              : "var(--color-border)";
            e.currentTarget.style.boxShadow = error
              ? "0 0 0 3px rgba(229, 72, 77, 0.15)"
              : "none";
            rest.onBlur?.(e);
          }}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

/* ========================================================================
   TEXTAREA
   Multi-line input with luxury styling
   ======================================================================== */

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error = false, className = "", style, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`
          w-full rounded-lg bg-surface border text-foreground
          font-body text-base
          placeholder:text-secondary placeholder:opacity-50
          transition-all resize-y
          disabled:opacity-50 disabled:cursor-not-allowed
          focus-visible:outline-none
          px-4 py-3
          ${error ? "border-[#E5484D]" : "border-border"}
          ${className}
        `}
        style={{
          fontFamily: "var(--font-body)",
          minHeight: "120px",
          transitionProperty: "border-color, box-shadow",
          transitionDuration: "var(--duration-fast)",
          transitionTimingFunction: "var(--ease-out-expo)",
          boxShadow: error
            ? "0 0 0 3px rgba(229, 72, 77, 0.15)"
            : undefined,
          ...style,
        }}
        aria-invalid={error || undefined}
        onFocus={(e) => {
          if (!error) {
            e.currentTarget.style.borderColor = "var(--color-gold)";
            e.currentTarget.style.boxShadow =
              "0 0 0 3px var(--color-gold-muted), 0 0 20px var(--color-gold-glow)";
          }
          rest.onFocus?.(e);
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error
            ? "#E5484D"
            : "var(--color-border)";
          e.currentTarget.style.boxShadow = error
            ? "0 0 0 3px rgba(229, 72, 77, 0.15)"
            : "none";
          rest.onBlur?.(e);
        }}
        {...rest}
      />
    );
  }
);

Textarea.displayName = "Textarea";

/* ========================================================================
   SELECT
   Custom dropdown with luxury styling
   ======================================================================== */

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error = false, options, placeholder, className = "", style, ...rest }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={`
            w-full rounded-lg bg-surface border text-foreground
            font-body text-base appearance-none
            transition-all
            disabled:opacity-50 disabled:cursor-not-allowed
            focus-visible:outline-none
            pl-4 pr-12
            ${error ? "border-[#E5484D]" : "border-border"}
            ${className}
          `}
          style={{
            fontFamily: "var(--font-body)",
            height: "3.125rem", /* 50px */
            transitionProperty: "border-color, box-shadow",
            transitionDuration: "var(--duration-fast)",
            transitionTimingFunction: "var(--ease-out-expo)",
            boxShadow: error
              ? "0 0 0 3px rgba(229, 72, 77, 0.15)"
              : undefined,
            ...style,
          }}
          aria-invalid={error || undefined}
          onFocus={(e) => {
            if (!error) {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.boxShadow =
                "0 0 0 3px var(--color-gold-muted), 0 0 20px var(--color-gold-glow)";
            }
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error
              ? "#E5484D"
              : "var(--color-border)";
            e.currentTarget.style.boxShadow = error
              ? "0 0 0 3px rgba(229, 72, 77, 0.15)"
              : "none";
            rest.onBlur?.(e);
          }}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom chevron */}
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary"
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </span>
      </div>
    );
  }
);

Select.displayName = "Select";

/* ========================================================================
   CHECKBOX
   Custom styled checkbox with gold accent
   ======================================================================== */

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  name?: string;
}

export function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = "",
  name,
}: CheckboxProps) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={`
        inline-flex items-center gap-3 select-none
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      <span className="relative flex-shrink-0">
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only peer"
          aria-checked={checked}
        />
        <span
          className="
            flex items-center justify-center w-5 h-5
            border rounded-sm transition-all
            peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background
          "
          style={{
            backgroundColor: checked ? "var(--color-gold)" : "var(--color-surface)",
            borderColor: checked ? "var(--color-gold)" : "var(--color-border)",
            borderRadius: "var(--radius-sm)",
            transitionDuration: "var(--duration-fast)",
            transitionTimingFunction: "var(--ease-out-expo)",
          }}
          aria-hidden="true"
        >
          {/* Checkmark */}
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            initial={false}
            animate={checked ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <path
              d="M2.5 6L5 8.5L9.5 3.5"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </span>
      </span>
      <span
        className="text-foreground text-sm"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </span>
    </label>
  );
}

/* ========================================================================
   RADIO GROUP
   Custom styled radio button group
   ======================================================================== */

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  className = "",
  disabled = false,
}: RadioGroupProps) {
  return (
    <fieldset
      className={`flex flex-col gap-3 ${className}`}
      disabled={disabled}
      role="radiogroup"
    >
      {options.map((opt) => {
        const id = `${name}-${opt.value}`;
        const isSelected = value === opt.value;

        return (
          <label
            key={opt.value}
            htmlFor={id}
            className={`
              inline-flex items-center gap-3 select-none
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            <span className="relative flex-shrink-0">
              <input
                id={id}
                type="radio"
                name={name}
                value={opt.value}
                checked={isSelected}
                disabled={disabled}
                onChange={() => onChange?.(opt.value)}
                className="sr-only peer"
              />
              <span
                className="
                  flex items-center justify-center w-5 h-5
                  rounded-full border transition-all
                  peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background
                "
                style={{
                  borderColor: isSelected ? "var(--color-gold)" : "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  transitionDuration: "var(--duration-fast)",
                  transitionTimingFunction: "var(--ease-out-expo)",
                }}
                aria-hidden="true"
              >
                <motion.span
                  initial={false}
                  animate={
                    isSelected
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: "var(--color-gold)" }}
                />
              </span>
            </span>
            <span
              className="text-foreground text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {opt.label}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}

/* ========================================================================
   SEARCH INPUT
   Search-specific input with icon and clear button
   ======================================================================== */

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onClear, value, className = "", style, ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState(value ?? "");
    const displayValue = value !== undefined ? value : internalValue;
    const hasValue = String(displayValue).length > 0;

    return (
      <div className="relative">
        {/* Search icon */}
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </span>

        <input
          ref={ref}
          type="search"
          value={displayValue}
          className={`
            w-full rounded-lg glass border-border text-foreground
            font-body text-base
            placeholder:text-secondary placeholder:opacity-50
            transition-all
            disabled:opacity-50 disabled:cursor-not-allowed
            focus-visible:outline-none
            pl-12
            ${hasValue && onClear ? "pr-12" : "pr-4"}
            ${className}
          `}
          style={{
            fontFamily: "var(--font-body)",
            height: "3.125rem", /* 50px */
            transitionProperty: "border-color, box-shadow",
            transitionDuration: "var(--duration-fast)",
            transitionTimingFunction: "var(--ease-out-expo)",
            ...style,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--color-gold)";
            e.currentTarget.style.boxShadow =
              "0 0 0 3px var(--color-gold-muted), 0 0 20px var(--color-gold-glow)";
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.boxShadow = "none";
            rest.onBlur?.(e);
          }}
          onChange={(e) => {
            if (value === undefined) {
              setInternalValue(e.target.value);
            }
            rest.onChange?.(e);
          }}
          {...rest}
        />

        {/* Clear button */}
        <AnimatePresence>
          {hasValue && onClear && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              onClick={() => {
                if (value === undefined) {
                  setInternalValue("");
                }
                onClear?.();
              }}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                flex items-center justify-center w-6 h-6
                rounded-full text-secondary
                transition-colors
                hover:text-foreground hover:bg-surface-hover
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
              "
              aria-label="Clear search"
              style={{
                transitionDuration: "var(--duration-fast)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
