import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropDown from './index';
import dummyData from './dummyData';
describe('DropDown', () => {
  const placeholderText = 'Select...';
  it('renders the dropdown with placeholder text', () => {
    render(<DropDown items={dummyData} placeholder={placeholderText} />);
    expect(screen.getByText(placeholderText)).toBeInTheDocument();
  });
});
