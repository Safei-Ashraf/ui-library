import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropDown from './index';
import { options } from './mockData';
describe('DropDown', () => {
  const placeholderText = 'Select...';
  const label = 'dd label';
  it('renders the dropdown with placeholder text', () => {
    render(
      <DropDown
        options={options}
        label={label}
        value={{
          label: '',
          value: '',
          id: '',
          isDisabled: false,
        }}
        defaultValue={{ label: 'select', value: '' }}
        onSelect={() => {}}
      />
    );
    expect(screen.getByText(placeholderText)).toBeInTheDocument();
  });
  it('checks value', () => {
    render(
      <DropDown
        options={options}
        label={label}
        value={options[0]}
        defaultValue={{ label: 'select', value: '' }}
        onSelect={() => {}}
      />
    );
    expect(screen.getByText(options[0].label)).toBeInTheDocument();
  });
});
