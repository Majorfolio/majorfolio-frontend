import AllTagSmall from "./AllTagSmall";

export default {
  title: "All/AllTagSmall",
  component: AllTagSmall,
  argTypes: {
    text: { control: "text" },
  },
};

const Template = (args) => <AllTagSmall {...args} />;

export const GrayTag = Template.bind({});

GrayTag.args = {
  text: "PDF",
};