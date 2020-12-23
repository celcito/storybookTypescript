import React from 'react';
import CustomButtom, { CustomButtomProps } from './CustomButtom';
import Plus from '../assets/icons/plus.svg';
import Video from '../assets/icons/video.svg';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'CustomButtom',
  component: CustomButtom,
  argTypes: {
    typeButtom: { typeButtom: 'primary', size: 'small' },
  },
} as Meta;

const Template: Story<CustomButtomProps> = (args) => <CustomButtom {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  typeButtom: 'primary',
  text: 'Primary',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
  icon: <img src={Plus} alt="Icon Plus" />,
};

export const Danger = Template.bind({});

Danger.args = {
  typeButtom: 'danger',
  text: 'danger',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const DangerRounded = Template.bind({});

DangerRounded.args = {
  typeButtom: 'dangerRounded',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const OnHold = Template.bind({});

OnHold.args = {
  typeButtom: 'onHold',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const hardOnHold = Template.bind({});

hardOnHold.args = {
  typeButtom: 'hardOnHold',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const LightRounded = Template.bind({});

LightRounded.args = {
  typeButtom: 'lightRounded',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const Light = Template.bind({});

Light.args = {
  typeButtom: 'light',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const primaryHighlight = Template.bind({});

primaryHighlight.args = {
  typeButtom: 'primaryHighlight',
  size: 'medium',
  text: '7 min',
  onClick: () => {
    console.log('dsad');
  },
};

export const dangerHighlight = Template.bind({});

dangerHighlight.args = {
  typeButtom: 'dangerHighlight',
  text: '7 min',
  size: 'medium',
  onClick: () => {
    console.log('dsad');
  },
};

export const green = Template.bind({});

green.args = {
  typeButtom: 'green',
  text: 'video conferencia',
  size: 'medium',
  icon: <img src={Video} alt="Icon Video" />,
  onClick: () => {
    console.log('dsad');
  },
};

export const info = Template.bind({});

info.args = {
  typeButtom: 'info',
  text: '0990',
  size: 'medium',

  onClick: () => {
    console.log('dsad');
  },
};
