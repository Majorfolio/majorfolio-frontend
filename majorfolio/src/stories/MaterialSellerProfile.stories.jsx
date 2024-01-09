import React from 'react';
import MaterialSellerProfile from '../components/home/MaterialSellerProfile/MaterialSellerProfile';

export default {
  title: 'Home/MaterialSellerProfile',
  component: MaterialSellerProfile,
  argTypes: {
    
  },
};

function Template(args) {
  return <MaterialSellerProfile {...args} />;
}

export const Post1 = Template.bind({});

Post1.args = {
  
};
