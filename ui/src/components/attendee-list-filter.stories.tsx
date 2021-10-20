import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CreeveyStory, CSFStory } from "creevey";

import "../App.css";
import { AttendeeListFilter } from "./attendee-list-filter";

export default {
  title: "Example/AttendeeListFilter",
  component: AttendeeListFilter,
  argTypes: {
    filter: {
      options: ["registered", "notregistered", "all"],
      control: "select",
    },
    onFilterChange: { action: "Filter Changed" },
  },
} as ComponentMeta<typeof AttendeeListFilter>;

const Template: ComponentStory<typeof AttendeeListFilter> & CreeveyStory = (
  args
) => <AttendeeListFilter {...args} />;

export const Registered = Template.bind({});
Registered.args = {
  filter: "registered",
};

Registered.parameters = {
  creevey: {
    captureElement: "#root",
    tests: {
      async click() {
        const selectElement = await this.browser.findElement({
          css: ".ant-select",
        });
        const empty = await this.takeScreenshot();

        await this.browser
          .actions()
          .click(selectElement)
          .sendKeys(this.keys.ARROW_DOWN)
          .sendKeys(this.keys.ENTER)
          .perform();

        const submitted = await this.takeScreenshot();
        await this.expect({ empty, submitted }).to.matchImages();
      },
    },
  },
};
