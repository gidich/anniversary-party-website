import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CreeveyStory, CSFStory } from "creevey";

import "../App.css";
import { DatePickerComponent } from "./date-picker";

export default {
  title: "Example/DatePickerComponent",
  component: DatePickerComponent,
} as ComponentMeta<typeof DatePickerComponent>;

const Template: ComponentStory<typeof DatePickerComponent> &
  CreeveyStory = () => <DatePickerComponent />;

export const DateSelect = Template.bind({});

DateSelect.parameters = {
  creevey: {
    captureElement: "#root",
    delay: 3000,
    tests: {
      async pickYesterday() {
        const datePickerElement = await this.browser.findElement({
          id: "datepickercomponent",
        });
        const empty = await this.takeScreenshot();
        await this.browser
          .actions()
          .click(datePickerElement)
          .pause(2000)
          .sendKeys(this.keys.TAB)
          .sendKeys(this.keys.ARROW_LEFT)
          .sendKeys(this.keys.ENTER)
          .perform();
        const submitted = await this.takeScreenshot();
        await this.expect({ empty, submitted }).to.matchImages();
      },
      async pickLastWeek() {
        const datePickerElement = await this.browser.findElement({
          id: "datepickercomponent",
        });
        const empty = await this.takeScreenshot();
        await this.browser
          .actions()
          .click(datePickerElement)
          .pause(2000)
          .sendKeys(this.keys.TAB)
          .sendKeys(this.keys.ARROW_UP)
          .sendKeys(this.keys.ENTER)
          .perform();
        const submitted = await this.takeScreenshot();
        await this.expect({ empty, submitted }).to.matchImages();
      },
      async pickToday() {
        const datePickerElement = await this.browser.findElement({
          id: "datepickercomponent",
        });
        const empty = await this.takeScreenshot();
        await this.browser
          .actions()
          .click(datePickerElement)
          .pause(2000)
          .sendKeys(this.keys.TAB)
          .sendKeys(this.keys.ARROW_LEFT)
          .sendKeys(this.keys.ARROW_RIGHT)
          .sendKeys(this.keys.ENTER)
          .perform();
        const submitted = await this.takeScreenshot();
        await this.expect({ empty, submitted }).to.matchImages();
      },
    },
  },
};
