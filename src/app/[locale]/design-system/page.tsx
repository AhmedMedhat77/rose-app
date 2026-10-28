import { ThemeMode } from "@/components/theme-mode";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function page() {
  return (
    <div className="flex h-screen items-center justify-center gap-6">
      <ThemeMode />
      <div className="flex flex-col gap-2">
        <Button variant="primary">primary</Button>

        <Button variant="primary" disabled>
          disabled
        </Button>

        <Button variant="primary" loading>
          loading
        </Button>

        <Button variant="secondary">secondary</Button>
        <Button variant="subtle">subtle</Button>

        <Button variant="ghost">ghost</Button>
        <Button variant="outline">outline</Button>

        <Button variant="destructive">destructive</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Checkbox label="checkbox" />
        <Checkbox
          label={"error checked"}
          error="You must accept terms and conditions"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Badge> Badge primary </Badge>
        <Badge variant="secondary"> Badge Scandry</Badge>
        <Badge variant="subtle"> Badge subtle</Badge>
      </div>
    </div>
  );
}
