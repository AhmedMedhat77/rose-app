import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Combobox } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations();
  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana", disabled: true },
    { value: "cherry", label: "Cherry" },
    { value: "option4", label: "Option4" },
    { value: "option5", label: "option5" },
    { value: "option6", label: "option6" },
    { value: "option7", label: "option7" },
    { value: "option8", label: "option8" },
    { value: "option9", label: "option9" },
    { value: "option10", label: "option10" },
    { value: "option11", label: "option11" },
    { value: "option12", label: "option12" },
    { value: "option13", label: "option13" },
    { value: "option14", label: "option14" },
    { value: "option15", label: "option15" },
    { value: "option16", label: "option16" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex w-50 flex-col justify-center space-y-1.5">
        <label className="text-sm font-normal"></label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder={t("select.placeholder")} />
          </SelectTrigger>

          <SelectContent>
            {/* <SelectItem value="placeholder" disabled>{t("select.placeholder")} </SelectItem>          <SelectItem value="option1">Option</SelectItem> */}
            <SelectItem value="option2">Option</SelectItem>
            <SelectItem value="option3">Option</SelectItem>
            <SelectItem value="option4">Option</SelectItem>
            <SelectItem value="option5">Option</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline">Open</Button>}
          />
          <DropdownMenuContent className="w-65">
            <DropdownMenuRadioGroup>
              {/* <DropdownMenuRadioItem value="select" disabled>
        select
      </DropdownMenuRadioItem> */}
              <DropdownMenuRadioItem value="profile">
                Profile
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="settings">
                Settings
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="about">About</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-50">
        <Combobox
          options={fruits}
          placeholder={t("select.placeholder")}
          searchPlaceholder={t("select.search")}
          loadingMessage={t("select.loading")}
          emptyMessage={t("select.noOptions")}
          errorMessage={t("select.error")}
        />
      </div>
    </div>
  );
}
