import React, { FC } from 'react';
import styled from 'styled-components';
import '../App.css';
export interface CustomButtomProps {
  icon?: string;
  onClick: () => void;
  text?: string;
  typeButtom?: string;
}

export interface customTypeProps {
  background: string;
  borderRadius: string;
  fontSize: string;
  color: string;
  border: string;
  opacity: string;
  font: string;
  backgroundActive: string;
}
//Todo Create palete
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

const customType: Record<string, customTypeProps> = {
  primary: {
    background: primary,
    borderRadius: defaultBorderRadius,
    fontSize: '14px',
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    font: 'normal normal medium 14px/22px Rubik',
    backgroundActive: '',
  },

  primaryHighlight: {
    background: '#FFF',
    borderRadius: defaultBorderRadius,
    fontSize: '14px',
    color: light,
    border: `solid 1px ${primary}`,
    opacity: '0.8',
    font: 'normal normal medium 14px/22px Rubik',
    backgroundActive: '',
  },

  dangerHighlight: {
    background: '#FFF',
    borderRadius: defaultBorderRadius,
    fontSize: '14px',
    color: danger,
    border: `solid 1px ${danger}`,
    opacity: '0.8',
    font: 'normal normal medium 14px/22px Rubik',
    backgroundActive: '',
  },
  danger: {
    background: danger,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    borderRadius: defaultBorderRadius,
    backgroundActive: '',
  },

  dangerRounded: {
    background: danger,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: white,
    border: 'none',
    borderRadius: roundedBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },
  onHold: {
    background: onHold,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: white,
    border: 'none',
    borderRadius: roundedBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },

  hardOnHold: {
    background: hardOnHold,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: white,
    border: 'none',
    borderRadius: roundedBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },

  lightRounded: {
    background: white,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: fontColorPrymaryLight,
    border: 'none',
    borderRadius: roundedBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },

  light: {
    background: white,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: fontColorPrymaryLight,
    border: 'none',
    borderRadius: defaultBorderRadius,
    opacity: '1',
    backgroundActive: info,
  },

  green: {
    background: green,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: defaultBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },

  info: {
    background: info,
    fontSize: '14px',
    font: 'normal normal medium 14px/22px Rubik',
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    borderRadius: roundedBorderRadius,
    backgroundActive: '',
  },
};

const Button = styled.button<{ typeButtom: string }>`
  font-size: ${(props) => customType[props.typeButtom].fontSize};
  min-width: 80px;
  margin: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  background: ${(props) => customType[props.typeButtom].background};
  border: ${(props) => customType[props.typeButtom].border};
  border-radius: ${(props) => customType[props.typeButtom].borderRadius};
  color: ${(props) => customType[props.typeButtom].color};
  min-height: 30px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    background: ${(props) => customType[props.typeButtom].backgroundActive};
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
  icon,
  text,
}: CustomButtomProps) => {
  return (
    <Button typeButtom={typeButtom} onClick={onClick}>
      <Container>
        {icon} <span> {text} </span>
      </Container>
    </Button>
  );
};

export default CustomButtom;
