import * as React from "react";
import { cn } from "cn";
import { cva, type VariantProps } from "class-variance-authority";

const errorInputStyle = cn(
  "text-text-danger",
  "border-border-danger",
  "shadow-[0_0_0_3px_var(--border-danger-faint)]",
);

const inputVariants = cva(
  [
    "flex",
    "rounded-lg",
    "border",
    "p-4",
    "gap-2",
    "opacity-100",
    "border-input",
    "transition-colors",
    "placeholder:text-text-muted",
    "focus-visible:outline-none",
    "focus-visible:ring-3",
    "focus-visible:ring-ring/50",
    "hover:border-[var(--border-primary-fade)]",
    "focus:border-[var(--border-primary)]",
    "disabled:cursor-not-allowed",
    "disabled:bg-bg-muted",
    "disabled:opacity-50",
    "disabled:border-0",
    "resize-none",
    "dark:bg-[var(--bg-soft)]",
  ],
  {
    variants: {
      variant: {
        default: "",
        disabled: "bg-[var(--bg-muted)] text-text-muted",
        error: errorInputStyle,
      },

      inputSize: {
        default: "w-[315.2px] h-[150px]",
        sm: "w-[250px] h-[100px]",
        lg: "w-[400px] h-[200px]",
      },
    },

    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  },
);

export interface TextAreaProps
  extends React.ComponentProps<"textarea">, VariantProps<typeof inputVariants> {
  isError?: boolean;
  isDisabled?: boolean;
  label?: string;
}

function Textarea({
  className,
  variant,
  inputSize,
  label,
  isError = false,
  isDisabled = false,
  disabled,
  ...props
}: TextAreaProps) {
  const currentVariant = isError ? "error" : variant;
  const isTextareaDisabled = isDisabled || variant === "disabled" || disabled;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          className={cn(
            "py-2 text-[14px] leading-[100%] font-medium",
            currentVariant === "error"
              ? "text-text-danger"
              : isTextareaDisabled
                ? "text-text-muted"
                : "text-text-default dark:text-text-soft",
          )}
        >
          {label}
        </label>
      )}

      <textarea
        data-slot="textarea"
        aria-invalid={currentVariant === "error" || undefined}
        disabled={isTextareaDisabled}
        className={cn(
          inputVariants({
            variant: currentVariant,
            inputSize,
          }),
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Textarea };
