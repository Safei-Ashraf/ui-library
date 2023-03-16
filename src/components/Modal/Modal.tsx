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
  let portalRoot = document.getElementById("portal")
if (!portalRoot) {
  portalRoot = document.createElement('div')
  portalRoot.setAttribute('id', 'portal')
  document.body.appendChild(portalRoot)
  }
  const Overlay = () => <div className='overlay'></div>
  const CloseButton = () => <button  className='close-button' onClick={handleDisplay}>Close</button>
  
return ReactDOM.createPortal(
  <>
    <Overlay/>
    <div className="modal-container" {...props}>
      <div className="modal-content">
        {children}
        <CloseButton/>
      </div>
      <div className="action-bar">
        {actionBar}
      </div>
    </div>
    </>
  , document.querySelector('#portal')!);
};
