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
    delay: 3000,
    tests: {
      async textbox() {
        const inputElement = await this.browser.findElement({
          css: ".ant-input",
        });
        const empty = await this.takeScreenshot();
        await this.browser
          .actions()
          .click(inputElement)
          .sendKeys("Hello World 1 2 3 4 5 6 !@#$%")
          .perform();

        const submitted = await this.takeScreenshot();
        await this.expect({ empty, submitted }).to.matchImages();
      },
      async combo() {
        const inputElement = await this.browser.findElement({
          css: ".ant-input",
        });
        const selectElement = await this.browser.findElement({
          id: "selectAttendeeList",
        });
        const empty = await this.takeScreenshot();
        await this.browser
          .actions()
          .click(inputElement)
          .sendKeys("Hello World 1 2 3 4 5 6 !@#$%")
          .perform();
        await this.browser
          .actions()
          .click(selectElement).pause(1000)
          .sendKeys(this.keys.ARROW_DOWN)
          .sendKeys(this.keys.ENTER)
          .perform();

        const submitted = await this.takeScreenshot();
        await this.expect({ empty, submitted }).to.matchImages();
      },

      async registered() {
        const selectElement = await this.browser.findElement({
          css: ".ant-select",
        });
        const empty = await this.takeScreenshot();

        await this.browser
          .actions()
          .click(selectElement).pause(1000)

          .sendKeys(this.keys.ENTER)
          .perform();

        const submitted = await this.takeScreenshot();
        await this.expect({ empty, submitted }).to.matchImages();
      },
      async notregistered() {
        const selectElement = await this.browser.findElement({
          css: ".ant-select",
        });
        const empty = await this.takeScreenshot();

        await this.browser
          .actions()
          .click(selectElement).pause(1000)
          .sendKeys(this.keys.ARROW_DOWN)
          .sendKeys(this.keys.ENTER)
          .perform();

        const submitted = await this.takeScreenshot();
        await this.expect({ empty, submitted }).to.matchImages();
      },
      async all() {
        const selectElement = await this.browser.findElement({
          css: ".ant-select",
        });
        const empty = await this.takeScreenshot();

        await this.browser
          .actions()
          .click(selectElement).pause(1000)
          .sendKeys(this.keys.ARROW_DOWN)
          .sendKeys(this.keys.ARROW_DOWN)
          .sendKeys(this.keys.ENTER)
          .perform();

        const submitted = await this.takeScreenshot();
        await this.expect({ empty, submitted }).to.matchImages();
      },
    },
  },
};
