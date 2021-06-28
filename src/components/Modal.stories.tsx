import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    open: { setOpen: () => {}, size: '' },
  },
} as Meta;

const Template: Story<Modal> = (args) => <Modal {...args} />;

export const Modal = Template.bind({});

let open = true;
Modal.args = {
  open: open,
  title: 'ASDDDDDDDDDDDDD',
  text: 'sdaaaaaaaaaa',
  witchClose: true,
  handleClose: () => console.log('clickou'),
};
