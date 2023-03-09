import { DropDownProps } from './DropDown.d';
import './DropDown.css';

export const DropDown = ({
  label,
  options,
  value,
  onChange,
  id,
  defaultValue,
  ...props
}: DropDownProps): JSX.Element => {
  return (
    <>
      <label htmlFor={id} {...props}>
        {label}
      </label>
      <select
        id={id}
        onChange={e => {
          onChange(e.target.value);
        }}
        value={value}
      >
        {defaultValue && (
          <option value={defaultValue.value}>{defaultValue.label}</option>
        )}
        {options?.map(
          option =>
            option.value !== defaultValue?.value && (
              <option
                value={option.value}
                key={option.id}
                disabled={option.isDisabled}
              >
                {option.label}
              </option>
            )
        )}
      </select>
    </>
  );
};
