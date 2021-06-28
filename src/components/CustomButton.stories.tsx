import React from 'react';
import CustomButton, { CustomButtonProps } from './CustomButton';
import Plus from '../assets/icons/plus.svg';
import Video from '../assets/icons/video.svg';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'CustomButton',
  component: CustomButton,
  argTypes: {
    typeButton: { typeButton: 'primary', size: 'small' },
  },
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  typeButton: 'primary',
  text: 'Primary',
  size: 'large',
  onClick: () => {
    console.log('dsad');
  },
  icon: <img src={Video} alt="Icon Plus" />,
};

export const PrimaryOutline = Template.bind({});

PrimaryOutline.args = {
  typeButton: 'primaryOutline',
  text: 'Primary',
  size: 'large',
  onClick: () => {
    console.log('dsad');
  },
};

export const PrimaryOutlineRounded = Template.bind({});

PrimaryOutlineRounded.args = {
  typeButton: 'primaryOutline',
  subtype: 'rounded',
  text: 'Primary',
  size: 'large',
  onClick: () => {
    console.log('dsad');
  },
};

export const PrimaryRounded = Template.bind({});

PrimaryRounded.args = {
  typeButton: 'primary',
  text: 'Primary',
  size: 'large',
  subtype: 'rounded',
  onClick: () => {
    console.log('dsad');
  },
  icon: <img src={Video} alt="Icon Plus" />,
};

export const Danger = Template.bind({});

Danger.args = {
  typeButton: 'danger',
  text: 'danger',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const DangerOutline = Template.bind({});

DangerOutline.args = {
  typeButton: 'dangerOutline',
  text: 'danger',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const DangerOutlineRounded = Template.bind({});

DangerOutlineRounded.args = {
  typeButton: 'dangerOutline',
  text: 'danger',
  subtype: 'rounded',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const DangerRounded = Template.bind({});

DangerRounded.args = {
  typeButton: 'danger',
  subtype: 'rounded',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const PrimaryWarning = Template.bind({});

PrimaryWarning.args = {
  typeButton: 'primaryWarning',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const PrimaryWarningRounded = Template.bind({});

PrimaryWarningRounded.args = {
  typeButton: 'primaryWarning',
  text: '7 min',
  focusColor: '#cccc',
  size: 'medium',
  subtype: 'rounded',
  onClick: () => {
    console.log('dsad');
  },
};

export const PrimaryWarningOutline = Template.bind({});

PrimaryWarningOutline.args = {
  typeButton: 'primaryWarningOutline',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const PrimaryWarningOutlineRounded = Template.bind({});

PrimaryWarningOutlineRounded.args = {
  typeButton: 'primaryWarningOutline',
  text: '7 min',
  size: 'medium',
  subtype: 'rounded',
  onClick: () => {
    console.log('dsad');
  },
};

export const secondaryWarning = Template.bind({});

secondaryWarning.args = {
  typeButton: 'secondaryWarning',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const secondaryWarningOutline = Template.bind({});

secondaryWarningOutline.args = {
  typeButton: 'secondaryWarningOutline',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const secondaryWarningOutlineRounded = Template.bind({});

secondaryWarningOutlineRounded.args = {
  typeButton: 'secondaryWarningOutline',
  text: '7 min',
  subtype: 'rounded',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const secondaryWarningRounded = Template.bind({});

secondaryWarningRounded.args = {
  typeButton: 'secondaryWarning',
  text: '7 min',
  subtype: 'rounded',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const Light = Template.bind({});

Light.args = {
  typeButton: 'light',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};
export const LightRounded = Template.bind({});

LightRounded.args = {
  typeButton: 'light',
  subtype: 'rounded',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const success = Template.bind({});

success.args = {
  typeButton: 'success',
  text: 'video conferencia',
  size: 'medium',
  icon: <img src={Video} alt="Icon Video" />,
  onClick: () => {
    console.log('dsad');
  },
};

export const successOutline = Template.bind({});

successOutline.args = {
  typeButton: 'successOutline',
  text: 'video conferencia',
  size: 'medium',
  icon: <img src={Video} alt="Icon Video" />,
  onClick: () => {
    console.log('dsad');
  },
};

export const successOutlineRounded = Template.bind({});

successOutlineRounded.args = {
  typeButton: 'successOutline',
  text: 'video conferencia',
  size: 'medium',
  subtype: 'rounded',
  icon: <img src={Video} alt="Icon Video" />,
  onClick: () => {
    console.log('dsad');
  },
};

export const successRounded = Template.bind({});

successRounded.args = {
  typeButton: 'success',
  text: 'video conferencia',
  subtype: 'rounded',
  size: 'medium',
  icon: <img src={Video} alt="Icon Video" />,
  onClick: () => {
    console.log('dsad');
  },
};

export const info = Template.bind({});

info.args = {
  typeButton: 'info',
  text: '0990',
  size: 'medium',

  onClick: () => {
    console.log('dsad');
  },
};

export const infoOutline = Template.bind({});

infoOutline.args = {
  typeButton: 'infoOutline',
  text: '0990',
  size: 'medium',

  onClick: () => {
    console.log('dsad');
  },
};

export const infoRoundedOutlineRounded = Template.bind({});

infoRoundedOutlineRounded.args = {
  typeButton: 'infoOutline',
  subtype: 'rounded',
  text: '0990',
  size: 'medium',

  onClick: () => {
    console.log('dsad');
  },
};

export const infoRounded = Template.bind({});

infoRounded.args = {
  typeButton: 'info',
  subtype: 'rounded',
  text: '0990',
  size: 'medium',

  onClick: () => {
    console.log('dsad');
  },
};
