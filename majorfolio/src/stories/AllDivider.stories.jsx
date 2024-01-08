import React from 'react';
import AllDivider from '../components/AllDivider/AllDivider';

export default {
  title: 'All/AllDivider',
  component: AllDivider,
  argTypes: {},
};

function Template(args) {
  return <AllDivider {...args} />;
}

export const Divider = Template.bind({});

Divider.args = {};
