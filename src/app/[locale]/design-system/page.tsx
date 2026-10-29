import { ThemeMode } from "@/components/theme-mode";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function page() {
  return (
    <div className="flex h-screen items-center justify-center gap-6">
      <section>
        {" "}
        <ThemeMode />{" "}
      </section>

      <section className="flex flex-col items-start justify-center gap-2">
        {/* primary */}
        <div className="primary flex gap-2">
          <Button variant="primary">primary</Button>
          <Button variant="primary" disabled>
            primary disabled
          </Button>
          <Button variant="primary" loading>
            primary loading
          </Button>
        </div>

        {/* secondry */}
        <div className="secondry flex gap-2">
          <Button variant="secondary">secondary</Button>
          <Button variant="secondary" disabled>
            secondary disabled
          </Button>
          <Button variant="secondary" loading>
            secondary loading
          </Button>
        </div>

        {/* outline */}
        <div className="outLine flex gap-2">
          <Button variant="outline">outline</Button>
          <Button variant="outline" disabled>
            outline disabled
          </Button>
          <Button variant="outline" loading>
            outline loading
          </Button>
        </div>

        {/* subtle */}
        <div className="subtle flex gap-2">
          <Button variant="subtle">subtle</Button>
          <Button variant="subtle" disabled>
            subtle disabled
          </Button>
          <Button variant="subtle" loading>
            subtle loading
          </Button>
        </div>

        {/* gost */}
        <div className="gost flex gap-2">
          <Button variant="ghost">ghost</Button>
          <Button variant="ghost" disabled>
            ghost disabled
          </Button>
          <Button variant="ghost" loading>
            ghost loading
          </Button>
        </div>

        {/* gost */}
        <div className="gost flex gap-2">
          <Button variant="ghost">ghost</Button>
          <Button variant="ghost" disabled>
            ghost disabled
          </Button>
          <Button variant="ghost" loading>
            ghost loading
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <Checkbox label="checkbox" />
        <Checkbox
          label="error checked"
          error="You must accept terms and conditions"
        />
      </section>
      <div className="flex flex-col gap-2">
        <Badge> Badge primary </Badge>
        <Badge variant="secondary"> Badge Scandry</Badge>
        <Badge variant="subtle"> Badge subtle</Badge>
      </div>
    </div>
  );
}
