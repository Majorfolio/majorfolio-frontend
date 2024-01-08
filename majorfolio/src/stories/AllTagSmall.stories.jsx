import React from 'react';
import AllTagSmall from '../components/common/AllTagSmall/AllTagSmall';

export default {
  title: 'All/AllTagSmall',
  component: AllTagSmall,
  argTypes: {
    text: { control: 'text' },
  },
};

function Template(args) {
  return <AllTagSmall {...args} />;
}

export const GrayTag = Template.bind({});

GrayTag.args = {
  text: 'PDF',
};
