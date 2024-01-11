import React from "react";
import PaymentSelectAllBar from "../components/home/PaymentSelectAllBar/PaymentSelectAllBar";

export default {
  title: 'Home/PaymentSelectAllBar',
  component: PaymentSelectAllBar
}

function Template(args) {
  return <PaymentSelectAllBar {...args} />;
}

export const SelectAll = Template.bind({});