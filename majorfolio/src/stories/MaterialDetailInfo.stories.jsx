import React from 'react';
import MaterialDetailInfo from '../components/home/MaterialDetailInfo/MaterialDetailInfo';

export default {
  title: 'Home/MaterialDetailInfo',
  component: MaterialDetailInfo
}

function Template(args) {
  return <MaterialDetailInfo {...args} />;
}

export const Info1 = Template.bind({});