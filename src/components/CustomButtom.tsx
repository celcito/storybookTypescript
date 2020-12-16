import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import '../App.css';

export interface CustomButtomProps {
  icon?: ReactNode;
  onClick: () => void;
  text?: string;
  typeButtom?: string;
  alt?: string;
}

const primary = '#2699FB'; //também fonte color atendimento
const white = '#fff';
const danger = '#FF2424';
const hardOnHold = '#FF8721';
const onHold = '#FFB324';
const light = '#F1F4F6';
const info = '#2699FB';
const green = '#33AC2E';
const fontColorPrymaryLight = '#6B7786';

const defaultBorderRadius = '4px';
const roundedBorderRadius = '50px';

const customType: Record<string, unknown> = {
  primary: {
    background: primary,
    borderRadius: defaultBorderRadius,
    fontSize: '14px',
    color: '#FFFFFF',
    border: 'none',
  },

  primaryHighlight: {
    background: '#FFF',
    borderRadius: defaultBorderRadius,
    fontSize: '14px',
    color: light,
    border: `solid 1px ${primary}`,
    opacity: '0.8',
  },

  dangerHighlight: {
    background: '#FFF',
    borderRadius: defaultBorderRadius,
    fontSize: '14px',
    color: danger,
    border: `solid 1px ${danger}`,
    opacity: '0.8',
  },

  danger: {
    background: danger,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: defaultBorderRadius,
  },

  dangerRounded: {
    background: danger,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: white,
    border: 'none',
    borderRadius: roundedBorderRadius,
  },
  onHold: {
    background: onHold,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: white,
    border: 'none',
    borderRadius: roundedBorderRadius,
  },

  hardOnHold: {
    background: hardOnHold,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: white,
    border: 'none',
    borderRadius: roundedBorderRadius,
  },

  lightRounded: {
    background: white,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: fontColorPrymaryLight,
    border: 'none',
    borderRadius: roundedBorderRadius,
  },

  light: {
    background: white,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: fontColorPrymaryLight,
    border: 'none',
    borderRadius: defaultBorderRadius,
    backgroundActive: info,
  },

  green: {
    background: green,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: defaultBorderRadius,
  },

  info: {
    background: info,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: roundedBorderRadius,
  },
};

const Button = styled.button`
  font-size: ${(props: { typeButtom: string }) =>
    customType[props.typeButtom].fontSize};
  min-width: 80px;
  margin: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  background: ${(props: { typeButtom: string }) =>
    customType[props.typeButtom].background};
  border: ${(props: { typeButtom: string }) =>
    customType[props.typeButtom].border};
  border-radius: ${(props: { typeButtom: string }) =>
    customType[props.typeButtom].borderRadius};
  color: ${(props: { typeButtom: string }) =>
    customType[props.typeButtom].color};
  min-height: 30px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    background: ${(props: { typeButtom: string }) =>
      customType[props.typeButtom].backgroundActive};
  }
  &focus {
    outline: none;
    border-radius: 55px;
    border: 1px solid #fff;
  }
`;
const Container = styled.div`
  display: flex;
  span {
    padding: 6px;
  }
`;

const CustomButtom: FC<CustomButtomProps> = ({
  typeButtom = 'primary',
  onClick,
  alt,
  icon,
  text,
}: CustomButtomProps) => {
  return (
    <Button typeButtom={typeButtom} onClick={onClick} alt={alt}>
      <Container>
        {icon} <span> {text} </span>
      </Container>
    </Button>
  );
};

export default CustomButtom;
