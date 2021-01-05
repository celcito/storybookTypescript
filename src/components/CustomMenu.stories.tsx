import React, { FC } from 'react';
import CustomMenu, { CustomObjectsProps } from './CustomMenu';
import { Story, Meta } from '@storybook/react/types-6-0';
const Home: FC = () => <div> teste0 </div>;
const Uma: FC = () => <div> teste1 </div>;
const Duas: FC = () => <div> teste2 </div>;
const Tres: FC = () => <div> teste3 </div>;
const Quatro: FC = () => <div> teste4 </div>;
const Cinco: FC = () => <div> teste5 </div>;

const objects: Array<CustomObjectsProps> = [
  {
    icon: '',
    text: 'Todas',
    customFunction: () => console.log('mys custom function '),
    onClick: () => {
      console.log('Clicklll');
    },
    component: Home,
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
    component: Uma,
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
    component: Duas,
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
    component: Tres,
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
    component: Quatro,
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
    component: Cinco,
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
