import React from 'react';
import MaterialSellerProfile from '../components/home/MaterialSellerProfile/MaterialSellerProfile';

export default {
  title: 'Home/MaterialSellerProfile',
  component: MaterialSellerProfile
};

function Template(args) {
  return <MaterialSellerProfile {...args} />;
}

export const Profile1 = Template.bind({});

