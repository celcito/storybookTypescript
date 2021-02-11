import React, { FC } from 'react';
import styled from 'styled-components';
import '../App.css';
export interface CustomButtomProps {
  icon?: any;
  onClick: () => void;
  text?: string;
  typeButtom?: string;
  size?: string;
  disable?: boolean;
}

export interface customTypeProps {
  background: string;
  borderRadius: string;
  color: string;
  border: string;
  opacity?: string;
  font: string;
  backgroundActive?: string;
  size?: string;
}
//Todo Create palete
const primary = '#2699FB'; //também fonte color atendimento
const white = '#fff';
const danger = '#FF2424';
const hardOnHold = '#FF8721';
const onHold = '#FFB324';
//const light = '#F1F4F6';
const info = '#e3ebf2';
const green = '#33AC2E';
const fontColorPrymaryLight = '#6B7786';
const defaultBorderRadius = '4px';
const roundedBorderRadius = '50px';

export interface customButtomSize {
  small: string;
  medium: string;
  large: string;
}
const buttonSize: Record<string, string> = {
  small: '2px 6px',
  medium: '4px 14px',
  large: '8px 25px',
};

const customType: Record<string, customTypeProps> = {
  primary: {
    background: primary,
    borderRadius: defaultBorderRadius,
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    font: 'normal normal medium 14px/22px Rubik',
    backgroundActive: '',
  },

  primaryHighlight: {
    background: '#FFF',
    borderRadius: defaultBorderRadius,
    color: primary,
    border: `solid 1px ${primary}`,
    opacity: '0.8',
    font: 'normal normal medium 14px/22px Rubik',
    backgroundActive: '',
  },

  dangerHighlight: {
    background: '#FFF',
    borderRadius: defaultBorderRadius,
    color: danger,
    border: `solid 1px ${danger}`,
    opacity: '0.8',
    font: 'normal normal medium 14px/22px Rubik',
    backgroundActive: '',
  },
  danger: {
    background: danger,
    font: 'normal normal medium 14px/22px Rubik',
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    borderRadius: defaultBorderRadius,
    backgroundActive: '',
  },

  dangerRounded: {
    background: danger,
    font: 'normal normal medium 14px/22px Rubik',
    color: white,
    border: 'none',
    borderRadius: roundedBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },
  onHold: {
    background: onHold,
    font: 'normal normal medium 14px/22px Rubik',
    color: white,
    border: 'none',
    borderRadius: roundedBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },

  hardOnHold: {
    background: hardOnHold,
    font: 'normal normal medium 14px/22px Rubik',
    color: white,
    border: 'none',
    borderRadius: roundedBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },

  lightRounded: {
    background: white,
    font: 'normal normal medium 14px/22px Rubik',
    color: fontColorPrymaryLight,
    border: 'none',
    borderRadius: roundedBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },

  light: {
    background: white,
    font: 'normal normal medium 14px/22px Rubik',
    color: fontColorPrymaryLight,
    border: 'none',
    borderRadius: defaultBorderRadius,
    opacity: '1',
    backgroundActive: info,
  },

  green: {
    background: green,
    font: 'normal normal medium 14px/22px Rubik',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: defaultBorderRadius,
    opacity: '1',
    backgroundActive: '',
  },

  info: {
    background: info,
    font: 'normal normal medium 14px/22px Rubik',
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    borderRadius: defaultBorderRadius,
    backgroundActive: '',
  },
};

const Button = styled.button<{ typeButtom: string; size: string }>`
  font-size: ${(props) =>
    props.size === 'medium'
      ? '14px'
      : props.size === 'large'
      ? '16px'
      : '12px'};
  padding: ${(props) => buttonSize[props.size]};
  cursor: pointer;
  background: ${(props) => customType[props.typeButtom].background};
  border: ${(props) => customType[props.typeButtom].border};
  border-radius: ${(props) => customType[props.typeButtom].borderRadius};
  color: ${(props) => customType[props.typeButtom].color};

  &:hover {
    opacity: 0.9;
  }

  &:active {
    background: ${(props) => customType[props.typeButtom].backgroundActive};
  }

  &:focus {
    outline: none;
    border-radius: ${(props) => customType[props.typeButtom].borderRadius};
    box-shadow: -1px 2px 13px 1px #2699fb;
    font-weight: bold;
  }

  img {
    width: ${(props) =>
      props.size === 'medium'
        ? '16px'
        : props.size === 'large'
        ? '18px'
        : '15px'};

    padding-bottom: 1px;
    opacity: ${(props) => props.opacity};
  }
`;
const Container = styled.div`
  display: flex;
  span {
    padding: 6px;
  }
`;

const handleClick = (e: any) => {
  if (typeof e === 'function') e();
};

const CustomButtom: FC<CustomButtomProps> = ({
  typeButtom = 'primary',
  onClick,
  icon,
  size = 'small',
  text,
  disable,
  opacity,
}: CustomButtomProps) => {
  return (
    <Button
      disabled={disable}
      opacity={disable ? '0.4' : '1'}
      typeButtom={typeButtom}
      size={size}
      onClick={() => {
        handleClick(onClick);
      }}
    >
      <Container>
        {icon} <span> {text} </span>
      </Container>
    </Button>
  );
};

export default CustomButtom;
