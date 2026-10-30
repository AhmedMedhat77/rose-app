"use client"

import * as React from "react"
import { cn } from "cn"

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string
  errorMessage?: string
}

function Textarea({
  className,
  label,
  errorMessage,
  id,
  maxLength,
  value,
  defaultValue,
  disabled,
  onChange,
  ...props
}: TextareaProps) {
  const generatedId = React.useId()
  const fieldId = id ?? generatedId
  const errorId = errorMessage ? `${fieldId}-error` : undefined
  const describedBy =
    [props["aria-describedby"], errorId].filter(Boolean).join(" ") || undefined
  const invalid =
    Boolean(errorMessage) ||
    props["aria-invalid"] === true ||
    props["aria-invalid"] === "true"

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (maxLength != null && event.currentTarget.value.length > maxLength) {
      event.currentTarget.value = event.currentTarget.value.slice(0, maxLength)
    }
    onChange?.(event)
  }

  return (
    <div
      data-slot="textarea-field"
      data-disabled={disabled ? "" : undefined}
      data-invalid={invalid ? "" : undefined}
      className="flex w-full flex-col gap-1.5 text-start"
    >
      {label ? (
        <label
          htmlFor={fieldId}
          className={cn(
            "text-sm",
            disabled
              ? "text-text-muted"
              : invalid
                ? "text-text-danger"
                : "text-text-default",
          )}
        >
          {label}
        </label>
      ) : null}
      <textarea
        {...props}
        id={fieldId}
        data-slot="textarea"
        disabled={disabled}
        maxLength={maxLength}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onChange={handleChange}
        {...(value === undefined ? { defaultValue } : { value })}
        className={cn(
          "field-sizing-content min-h-37.5 max-h-60 w-full resize-y overflow-y-auto rounded-lg border border-border-soft bg-bg-plain px-3 py-2.5 text-sm break-words text-text-plain transition-colors outline-none placeholder:text-text-muted",
          "hover:border-border-default",
          "focus:border-border-primary focus-visible:border-border-primary",
          "aria-invalid:border-border-danger aria-invalid:hover:border-border-danger aria-invalid:focus:border-border-danger aria-invalid:focus-visible:border-border-danger",
          "disabled:cursor-not-allowed disabled:border-transparent disabled:bg-bg-muted disabled:text-text-muted disabled:placeholder:text-text-muted",
          className,
        )}
      />
      {errorMessage ? (
        <p id={errorId} role="alert" className="text-sm text-text-danger">
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

export { Textarea }
