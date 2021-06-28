import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Burguer, { BurguerProps } from './Burguer';

export default {
  title: 'Burguer',
  component: Burguer,
  argTypes: {
    open: { setOpen: () => {}, size: '' },
  },
} as Meta;

const Template: Story<BurguerProps> = (args) => <Burguer {...args} />;

export const BurguerOpen = Template.bind({});

let open = false;
BurguerOpen.args = {
  open: open,
  size: '',
  setOpen: () => {
    console.log('dsad');
  },
};

export const BurguerClosed = Template.bind({});

open = true;
BurguerClosed.args = {
  open: true,
  size: '',
  setOpen: () => {
    console.log('dsad');
  },
};
