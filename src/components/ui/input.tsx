"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Eye, EyeOff, Search, Upload } from "lucide-react";
import { Button } from "@base-ui/react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const defaultInputStyle = cn(
  "rounded-lg",
  "border",
  "p-4",
  "gap-2",
  "opacity-100",
  "border-input",
  "focus-visible:ring-ring",
  "hover:border-[var(--border-primary-fade)]",
  "focus:border-[var(--border-primary)]",
  "dark:bg-[var(--bg-soft)]",
);

const errorInputStyle = cn(
  "text-text-danger border-border-danger shadow-[0_0_0_3px_var(--border-danger-faint)] dark:shadow-[0_0_0_3px_var(--border-danger-faint)]",
);

const inputVariants = cva(
  "flex w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: defaultInputStyle,

        disabled: cn("disabled:bg-bg-muted text-text-muted"),

        error: errorInputStyle,

        search: defaultInputStyle,

        number: defaultInputStyle,

        upload: defaultInputStyle,

        password: defaultInputStyle,

        phoneNumber: defaultInputStyle,
      },
      inputSize: {
        default: "w-[327px] h-[49px]",
        sm: "w-[327px] h-[49px]",
        lg: "w-[327px] h-[49px]",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  },
);

export interface InputProps
  extends
    React.ComponentProps<"input">,
    VariantProps<typeof inputVariants>,
    sideEffect {}

interface sideEffect {
  label?: string;
  isError?: boolean;
}

function Input({
  className,
  type,
  variant,
  inputSize,
  label,
  isError,

  ...props
}: InputProps) {
  const fileRef = React.useRef<HTMLInputElement>(null);

  const [passwordInput, setPasswordInput] = React.useState<string>("password");

  return (
    <>
      {label && (
        <p
          className={cn(
            variant === "error"
              ? "text-text-danger"
              : variant === "disabled"
                ? "text-text-muted"
                : "text-text-default dark:text-text-soft",
            "py-2 text-[14px] leading-[100%] font-medium tracking-[0%]",
          )}
        >
          {label}
        </p>
      )}

      <div className="relative">
        {variant === "search" && (
          <Search
            size={18}
            className="text-text-muted absolute top-1/2 left-4 -translate-y-1/2"
          />
        )}

        {variant === "upload" ? (
          <div
            className={cn(
              defaultInputStyle,
              "relative h-12.25 w-81.75 cursor-pointer text-right",
              isError === true && errorInputStyle,
            )}
          >
            <input
              ref={fileRef}
              type="file"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                console.log(file);
              }}
            />

            <Button
              type="button"
              className="text-text-primary absolute top-2.5 left-52 flex cursor-pointer items-center gap-2"
              onClick={() => fileRef.current?.click()}
            >
              <Upload size={18} />
              Upload File
            </Button>
          </div>
        ) : (
          <div className="relative w-full">
            <input
              type={
                variant === "number"
                  ? "number"
                  : variant === "phoneNumber"
                    ? "tel"
                    : variant === "password"
                      ? passwordInput
                      : type
              }
              data-slot="input"
              disabled={variant === "disabled"}
              placeholder={
                variant === "search"
                  ? "Search..."
                  : variant === "number"
                    ? "Select Number"
                    : variant === "phoneNumber"
                      ? "Entry Phone Number"
                      : undefined
              }
              className={cn(
                inputVariants({ variant, inputSize }),
                variant === "search" && "ps-11",
                variant === "password" && "pe-10",
                "placeholder:text-text-muted",
                isError === true && errorInputStyle,
                className,
              )}
              {...props}
            />

            {variant === "password" && (
              <button
                type="button"
                onClick={() =>
                  setPasswordInput((prev) =>
                    prev === "password" ? "text" : "password",
                  )
                }
                className="absolute inset-s-75 top-1/2 flex -translate-y-1/2 items-center justify-center"
                aria-label={
                  passwordInput === "password"
                    ? "Show password"
                    : "Hide password"
                }
              >
                {passwordInput === "password" ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function PhoneNumberInput() {
  return (
    <div className="p-1.25">
      <PhoneInput
        country="us"
        placeholder="Enter phone number"
        containerClass="!w-full"
        inputClass="!w-20.4 !h-10 !pl-12 !pr-3 !text-sm !rounded-md !border !border-input !bg-background !text-foreground focus:!border-ring focus:!outline-none focus:!ring-[3px] focus:!ring-ring/50"
        buttonClass="!h-10 !rounded-l-md !border-0 !border-r !border-input !bg-transparent hover:!bg-accent"
        dropdownClass="!bg-background !text-foreground"
      />
    </div>
  );
}

export { Input, inputVariants, PhoneNumberInput };
