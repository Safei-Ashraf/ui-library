import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
//import renderer from 'react-test-renderer';
import { Modal } from './Modal';
import userEvent from '@testing-library/user-event';
const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.body.appendChild(modalRoot)

describe('modal', () => {
  
  const handleClose = jest.fn()
  const text = 'Welcome to modal Component'
  const portalRoot = document.createElement('div')
  portalRoot.setAttribute('id', 'portal')
  document.body.appendChild(portalRoot);
  
  it('render modal with default text content', () => {
    render(<Modal isDisplayed={true} handleDisplay={handleClose}>{text} </Modal>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  
  it('close is called on click', () => {
    const text = 'Welcome to modal Component'
    render(<Modal isDisplayed={true} handleDisplay={handleClose}>{text} </Modal>);
    userEvent.click(screen.queryByText('Close')!);
    expect(handleClose).toBeCalled();
 });

});


//snapshot
/*
describe('renders correctly', () => {
  const tree = renderer.create(<modal />).toJSON();
  expect(tree).toMatchSnapshot();
});
*/