export interface DropDownItem {
  label: string;
  value: string;
  id: string;
  isDisabled: boolean;
}
export type DropDownProps = {
  defaultValue?: { label: string; value: string };
  label: string;
  options: DropDownItem[];
  id: string;
  value: string;
  onChange: (value: string) => void;
};
