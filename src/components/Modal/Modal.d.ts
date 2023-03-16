import { ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  actionBar?: ReactNode;
  isDisplayed: boolean;
  handleDisplay: () => voidl;
}
