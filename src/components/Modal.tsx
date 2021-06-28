import React, { FC } from 'react';
import { ContainerModal } from './Modal.styled';

export interface ModalProps {
  open: boolean;
  title: string;
  text: string;
  children: ChildNode;
  witchClose: boolean;
  handleClose?: () => void;
}

export interface ContainerModalProps {
  open: boolean;
}

const Modal: FC<ModalProps> = ({ open, title, text, children, witchClose, handleClose }) => {
  return (
    <ContainerModal open={open}>
      {witchClose && <div onClick={handleClose}>Close X</div>}
      <h2>{title}</h2>
      {children ? children : <span> {text} </span>}
    </ContainerModal>
  );
};

export default Modal;
