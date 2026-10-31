"use client";

import { Button } from "@/shared/components/ui/button";
import { addToast } from "@/shared/components/ui/toast";
import { TOAST_STATE } from "@/shared/constants/toast-states";

export function ToastDemo() {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          addToast(TOAST_STATE.Informative, "You have 12 new messages")
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => addToast(TOAST_STATE.Successful)}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          addToast(TOAST_STATE.Unsuccessful, "This item is out of stock")
        }
      >
        Error
      </Button>
    </div>
  );
}
