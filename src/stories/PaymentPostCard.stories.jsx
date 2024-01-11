import React from 'react';
import PaymentPostCard from '../components/home/PaymentPostCard/PaymentPostCard';

export default {
  title: 'Home/PaymentPostCard',
  component: PaymentPostCard
};

function Template(args) {
  return <PaymentPostCard {...args} />;
}

export const Card1 = Template.bind({});