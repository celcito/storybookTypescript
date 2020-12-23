import React, { FC } from 'react';
import CustomMenu, { CustomObjectsProps } from './CustomMenu';
import { Story, Meta } from '@storybook/react/types-6-0';
const Todas: FC = () => <div> teste </div>;

const objects: Array<CustomObjectsProps> = [
  {
    icon: '',
    text: 'Todas',
    customFunction: () => console.log('mys custom function '),
    onClick: () => {
      console.log('Clicklll');
    },
    component: Todas,
  },
  {
    icon: '',
    text: 'Pa Virtual',
    customFunction: () => {
      console.log('mys custom function ');
    },
    onClick: () => {
      console.log('Clicklll');
    },
    component: Todas,
  },

  {
    icon: '',
    text: 'Premium',
    customFunction: () => {
      console.log('mys custom function ');
    },
    onClick: () => {
      console.log('Clicklll');
    },
    component: Todas,
  },

  {
    icon: '',
    text: 'Teletriagem',
    customFunction: () => {
      console.log('mys custom function ');
    },
    onClick: () => {
      console.log('Clicklll');
    },
    component: Todas,
  },

  {
    icon: '',
    text: 'Hematologia',
    customFunction: () => {
      console.log('mys custom function ');
    },
    onClick: () => {
      console.log('Clicklll');
    },
    component: Todas,
  },
  {
    icon: '',
    text: 'COVID-19',
    customFunction: () => {
      console.log('mys custom function ');
    },
    onClick: () => {
      console.log('Clicklll');
    },
    component: Todas,
  },
];

export default {
  title: 'CustomMenu',
  component: CustomMenu,
} as Meta;

export interface customMenuProps {
  typeMenu: string;
  objects: Array<CustomObjectsProps>;
  onClick?: () => void;
  text: string;
}

const Template: Story<customMenuProps> = (args) => <CustomMenu {...args} />;

export const Horizontal = Template.bind({});

Horizontal.args = {
  typeMenu: 'horizontal',
  objects: objects,
  onClick: () => {
    console.log('dsad');
  },
};
