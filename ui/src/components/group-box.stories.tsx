import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GroupBox } from "./group-box";

export default {
  title: "Example/Group Box",
  component: GroupBox,
  argTypes: {
    titleBackground: { control: "color" }, // control: "color" means the property can be set by using color palette
    titleColor: { control: "color" },
  },
} as ComponentMeta<typeof GroupBox>;

const Template: ComponentStory<typeof GroupBox> = (args) => (
  <GroupBox {...args}>
    <div>
      If you do not wish to serve as a physician evaluator for applicants to
      Pathway 6, or if you do not meet the{" "}
      <a
        target="_bank"
        href="https://www.ecfmg.org/certification-requirements-2022-match/info-p6-evaluators.html#physician-evals"
      >
        {" "}
        Criteria for Acceptable Physician Evaluators
      </a>{" "}
      , you can <a href="opt-out">opt out</a> of this process.
    </div>
  </GroupBox>
);

export const Normal = Template.bind({});
Normal.args = {
  title: "Opt Out",
};
