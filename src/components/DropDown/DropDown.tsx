import { useState, useRef, useEffect } from 'react';
import { DropDownProps, DropDownItem } from './DropDown.d';
import './DropDown.css';
import ChevronIcon from '../ChevronIcon';

export const DropDown = ({
  label,
  options,
  value,
  onSelect,
  id,
  defaultValue,
  ...props
}: DropDownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const handleOptionClick = (option: DropDownItem) => {
    setIsOpen(false);
    onSelect(option);
  };
  useEffect(() => {
    const handler = (event: Event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as HTMLDivElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return document.removeEventListener('click', handler);
  }, []);
  return (
    <div className="select-container" {...props} ref={dropDownRef}>
      <div
        className="select-head"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="label">{value?.label || 'Select...'}</span>
        <span className="icon">
          <ChevronIcon direction="down" size="md" />
        </span>
      </div>
      {isOpen && (
        <ul className="select-body">
          {options.map(option => (
            <li
              className={
                option.isDisabled ? 'disabled select-option' : 'select-option'
              }
              value={option.value}
              key={option.id}
              onClick={() => {
                handleOptionClick(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
