import ReactDOM from 'react-dom';
import { ModalProps } from './Modal.d';
import './Modal.css';
import { useEffect } from 'react';

export const Modal = ({ isDisplayed, handleDisplay,actionBar, children,...props }: ModalProps): JSX.Element => {
    useEffect(() => {
    if (isDisplayed) {
    document.body.style.overflow = 'hidden';
    }
   
    return ()=>{
       document.body.style.overflow = 'unset';
    }

  }, [isDisplayed])
return ReactDOM.createPortal(
    <>
      <div className='overlay'></div>
      <div className="modal-container" {...props}>
        <div className="modal-content">
          {children}
          <button  className='close-button' onClick={handleDisplay}>Close</button>
        </div>
        <div className="action-bar">
          {actionBar}
        </div>
      </div>
    </>
  ,document.querySelector('#portal')!);
};
