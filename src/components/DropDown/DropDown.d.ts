export interface DropDownItem {
  name: string;
  value: string;
}
export interface DropDownProps {
  placeholder: string;
  items?: DropDownItem[];
}
