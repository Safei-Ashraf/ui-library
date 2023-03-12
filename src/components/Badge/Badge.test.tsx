import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
//import renderer from 'react-test-renderer';
import { Badge } from './index';

describe('Badge', () => {
  it('render Badge with default text content', () => {
    const text = 'Welcome to Badge Component';
    render(<Badge size={24} name="star" color="red" />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});

//snapshot
/*
describe('renders correctly', () => {
  const tree = renderer.create(<Badge />).toJSON();
  expect(tree).toMatchSnapshot();
});
*/
