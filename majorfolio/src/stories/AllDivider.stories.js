import AllDivider from "../components/AllDivider/AllDivider";

export default {
  title: "All/AllDivider",
  component: AllDivider,
  argTypes: {},
};

const Template = (args) => <AllDivider {...args} />;

export const Divider = Template.bind({});

Divider.args = {};