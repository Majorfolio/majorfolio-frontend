import React from 'react';
import MaterialDetailPreview from '../components/home/MaterialDetailPreview/MaterialDetailPreview';

export default {
  title: 'Home/MaterialDetailPreview',
  component: MaterialDetailPreview
}

function Template(args) {
  return <MaterialDetailPreview {...args} />;
}

export const Preview1 = Template.bind({});