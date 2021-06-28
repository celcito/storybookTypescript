import React, { FC } from 'react';
import styled from 'styled-components';
import '../App.css';
import {
  primary,
  white,
  danger,
  secondaryWarning,
  primaryWarning,
  info,
  success,
  fontColorPrymaryLight,
  defaultBorderRadius,
  roundedBorderRadius,
  fontFamily,
  primaryVariant,
} from './config';
export interface CustomButtonProps {
  icon?: any;
  onClick: () => void;
  text: string;
  typeButton?: string;
  size: string;
  disable?: boolean;
  children?: any;
  subtype: string;
  opacity: string;
  width: string;
  height: string;
  padding: string;
  focusColor: string;
}

export interface customTypeProps {
  background: string;
  color: string;
  border: string;
  opacity?: string;
  fontFamily: string;
  backgroundActive?: string;
  size?: string;
  padding?: string;
  subtype?: string;
  width?: string;
}

export interface customButtonSize {
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
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    fontFamily: fontFamily,
    backgroundActive: '',
  },

  primaryOutline: {
    background: '#FFF',
    color: primary,
    border: `1px solid ${primary}`,
    opacity: '1',
    fontFamily: fontFamily,
    backgroundActive: '',
  },

  danger: {
    background: danger,
    fontFamily: fontFamily,
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    backgroundActive: '',
  },

  dangerOutline: {
    background: '#FFF',
    color: danger,
    border: `1px solid ${danger}`,
    opacity: '1',
    fontFamily: fontFamily,
    backgroundActive: '',
  },

  primaryWarning: {
    background: primaryWarning,
    fontFamily: fontFamily,
    color: white,
    border: 'none',
    opacity: '1',
    backgroundActive: '',
  },

  primaryWarningOutline: {
    background: '#FFF',
    fontFamily: fontFamily,
    color: primaryWarning,
    border: `1px solid ${primaryWarning}`,
    opacity: '1',
    backgroundActive: '',
  },

  secondaryWarning: {
    background: secondaryWarning,
    fontFamily: fontFamily,
    color: white,
    border: 'none',
    opacity: '1',
    backgroundActive: '',
  },

  secondaryWarningOutline: {
    background: '#FFF',
    fontFamily: fontFamily,
    color: secondaryWarning,
    border: `1px solid ${secondaryWarning}`,
    opacity: '1',
    backgroundActive: '',
  },

  light: {
    background: white,
    fontFamily: fontFamily,
    color: fontColorPrymaryLight,
    border: 'none',
    opacity: '1',
    backgroundActive: info,
  },

  success: {
    background: success,
    fontFamily: fontFamily,
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    backgroundActive: '',
  },

  successOutline: {
    background: '#FFF',
    fontFamily: fontFamily,
    color: success,
    border: `1px solid ${success}`,
    opacity: '1',
    backgroundActive: '',
  },

  //todo make custom css
  custom: {
    background: success,
    fontFamily: fontFamily,
    color: '#FFFFFF',
    border: 'none',
    opacity: '1',
    backgroundActive: '',
  },

  info: {
    background: info,
    fontFamily: fontFamily,
    color: primaryVariant,
    border: 'none',
    opacity: '1',
    backgroundActive: '',
  },

  infoOutline: {
    background: '#FFF',
    fontFamily: fontFamily,
    color: primaryVariant,
    border: `1px solid ${info}`,
    opacity: '1',
    backgroundActive: '',
  },
};

const Button = styled.button<{
  typeButton: string;
  subtype: string;
  size: string;
  width: string;
  padding: string;
  height: string;
  focusColor: string;
}>`
  font-size: ${(props) =>
    props.size === 'medium'
      ? '14px'
      : props.size === 'large'
      ? '16px'
      : '12px'};
  padding: ${(props) => buttonSize[props.size]};
  cursor: pointer;
  background: ${(props) => customType[props.typeButton].background};
  border: ${(props) => customType[props.typeButton].border};
  color: ${(props) => customType[props.typeButton].color};

  &:hover {
    opacity: 0.9;
  }
  &:active {
    background: ${(props) => customType[props.typeButton].backgroundActive};
  }
  &:disabled {
    opacity: 0.4;
  }
  &:focus {
    outline: none;
    font-weight: bold;
    background: ${(props) => props.focusColor};
  }

  img {
    width: ${(props) =>
      props.size === 'medium'
        ? '16px'
        : props.size === 'large'
        ? '18px'
        : '15px'};

    padding-right: 5px;
  }

  height: ${(props) => (props.height ? props.height : '')};
  padding: ${(props) => props.padding};
  width: ${(props) => (props.width ? props.width : ' ')};
  border-radius: ${(props) =>
    props.subtype === 'rounded' ? roundedBorderRadius : defaultBorderRadius};
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
`;

const handleClick = (e: any) => {
  if (typeof e === 'function') e();
};

const CustomButton: FC<CustomButtonProps> = ({
  typeButton = 'primary',
  onClick,
  icon,
  size = 'small',
  text,
  disable,
  children,
  focusColor,
  subtype,
  width,
  height,
  padding,
}) => {
  return (
    <Button
      disabled={disable}
      typeButton={typeButton}
      padding={padding}
      subtype={subtype}
      size={size}
      width={width}
      height={height}
      focusColor={focusColor}
      onClick={() => {
        handleClick(onClick);
      }}
    >
      <Container>
        {icon && icon} {text && <span> {text} </span>}
        {children && children}
      </Container>
    </Button>
  );
};

export default CustomButton;
