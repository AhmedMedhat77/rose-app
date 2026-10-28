import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Textarea } from "@/components/ui/textarea";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations();
  return (
    <div>
      {t("welcome")}
      <Button>Primary</Button>

      <Input label="Name" variant="disabled" />

      <div>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot isDisabled={true} index={0} />
            <InputOTPSlot isError={true} index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>

          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Textarea variant="default" label="Hello" placeholder="Welcom" />
    </div>
  );
}
