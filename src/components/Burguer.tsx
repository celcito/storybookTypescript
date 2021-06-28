import React, { FC } from 'react';
import '../App.css';
import { ContainerBurguer } from './Burguer.styled';

export interface BurguerProps {
  open: boolean;
  size: string;
  setOpen: any;
}

//todo fix  type open
const Burguer: FC<BurguerProps> = ({ open, size, setOpen }) => {
  const isExpanded = open ? true : false;
  return (
    <ContainerBurguer
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      size={size}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </ContainerBurguer>
  );
};

export default Burguer;
