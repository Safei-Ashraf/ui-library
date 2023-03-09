import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropDown from './index';
import dummyData from './dummyData';
describe('DropDown', () => {
  const placeholderText = 'Select...';
  const id = 'dd1';
  const label = 'dd label';
  it('renders the dropdown with placeholder text', () => {
    render(
      <DropDown
        options={dummyData}
        label={label}
        id={id}
        value=""
        defaultValue={{ label: 'select', value: '' }}
        onChange={() => {}}
      />
    );
    expect(screen.getByText(placeholderText)).toBeInTheDocument();
  });
});
