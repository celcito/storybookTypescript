import React from 'react';
import DefaultMenu, { DefaultObjectsProps } from './DefaultMenu';
import { ReactComponent as One } from '../assets/icons/acionamentos.svg';
import { ReactComponent as Two } from '../assets/icons/agendamentos.svg';
import { ReactComponent as Three } from '../assets/icons/hitstorico.svg';
import { ReactComponent as Support } from '../assets/icons/support.svg';
import { ReactComponent as Activity } from '../assets/icons/activity.svg';
import { ReactComponent as Last } from '../assets/icons/gerenciar_cancelamentos.svg';
import { Story, Meta } from '@storybook/react/types-6-0';

const objects = [
  {
    path: '/home',
    name: 'Acionamentos',
    icon: One,
    alt: 'menu1',
  },

  {
    path: '/home',
    name: 'Agendamentos',
    icon: Two,
    alt: 'Agendamentos',
  },

  {
    path: '/home',
    name: 'Histórico',
    icon: Three,
    alt: 'historico',
  },

  {
    path: '/home',
    name: 'Support',
    icon: Support,
    alt: 'Suporte Técnico',
  },
  {
    path: '/home',
    name: 'Gestao de escalas',
    icon: Activity,
    alt: 'menu1',
  },
  {
    path: '/',
    name: 'Gerenciar Cancelamentos',
    icon: Last,
    alt: 'Gerenciar Cancelamentos',
  },
];

export default {
  component: DefaultMenu,
  title: 'DefaultMenu',
} as Meta;

const Template: Story<DefaultObjectsProps> = (args) => (
  <DefaultMenu {...args} />
);
export const Vertical = Template.bind({});

Vertical.args = {
  typeMenu: 'vertical',
  objects: objects,
};
