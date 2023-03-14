export interface DropDownItem {
  id: string;
  value: string;
  label: string;
  isDisabled: boolean;
}
export type DropDownProps = {
  defaultValue?: { label: string; value: string };
  label: string;
  options: DropDownItem[];
  value: DropDownItem;
  onSelect: (value: DropDownItem) => void;
};
