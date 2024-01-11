import React from "react";
import AllCheckbox from "../components/common/AllCheckbox/AllCheckbox";

export default {
  title: 'Common/AllCheckbox',
  component: AllCheckbox,
  argTypes: {
    checked: { control: 'boolean' }
  }
};

function Templete(args) {
  return <AllCheckbox {...args} />;
}

export const Checkbox = Templete.bind({});

Checkbox.args = {
  checked: true
};