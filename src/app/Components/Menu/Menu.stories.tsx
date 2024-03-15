// components/Menu.stories.tsx

import { StoryFn, Meta } from '@storybook/react';
import Menu from './Menu';
import MenuProps from "./Menu";

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof MenuProps> = (args) => <Menu {...args} />;

export const Menus = Template.bind({});
Menus.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { 
      label: 'Services',
      href: '/services',
      subMenu: [
        { label: 'Submenu Item 1', href: '/submenu1' },
        { label: 'Submenu Item 2', href: '/submenu2' },
      ]
    },
    { label: 'Contact', href: '/contact' },
  ],
};
