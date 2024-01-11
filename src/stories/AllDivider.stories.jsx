import React from 'react';
import AllDivider from '../components/common/AllDivider/AllDivider';

export default {
  title: 'Common/AllDivider',
  component: AllDivider,
  argTypes: {},
};

function Template(args) {
  return <AllDivider {...args} />;
}

export const Divider = Template.bind({});

Divider.args = {};
