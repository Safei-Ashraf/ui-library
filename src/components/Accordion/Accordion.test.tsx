/* eslint-disable testing-library/no-unnecessary-act */
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import userEvent from '@testing-library/user-event';
import Accordion from './index';

const items = [
  { id: '1', heading: '1st Heading here', content: '1st content here' },
  { id: '2', heading: '2nd Heading here', content: '2nd content here' },
  { id: '3', heading: '3rd Heading here', content: '3rd content here' },
];

//Snapshot
describe('renders correctly', () => {
  const tree = renderer.create(<Accordion items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});

//Unit
describe('Accordion', () => {
  it('render Accordion with all items heading displayed', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText(items[0].heading)).toBeInTheDocument();
    expect(screen.getByText(items[1].heading)).toBeInTheDocument();
    expect(screen.getByText(items[2].heading)).toBeInTheDocument();
  });
  it('opens accordion tab on click', () => {
    render(<Accordion items={items} />);
    act(() => {
      userEvent.click(screen.getByText(items[0].heading));
    });
    expect(screen.getByText(items[0].content)).toBeInTheDocument();
  });

  it('closes open tab on heading 2nd click', () => {
    render(<Accordion items={items} />);
    act(() => {
      userEvent.click(screen.getByText(items[0].heading));
    });
    act(() => {
      userEvent.click(screen.getByText(items[0].heading));
    });
    expect(screen.queryByText(items[0].content)).not.toBeInTheDocument();
  });
});
