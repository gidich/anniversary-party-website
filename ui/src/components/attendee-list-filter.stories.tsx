import React from 'react';
import { ComponentStory, ComponentMeta} from '@storybook/react';

import '../App.css';
import { AttendeeListFilter } from './attendee-list-filter';

export default {
  title: 'Example/AttendeeListFilter',
  component: AttendeeListFilter,
  argTypes: {
    filter : { 
      options: ['registered','notregistered','all'],
      control: 'select'
    },
    onFilterChange: {action: 'Filter Changed'},
  },
} as ComponentMeta<typeof AttendeeListFilter>;

const Template: ComponentStory<typeof AttendeeListFilter> = (args) => <AttendeeListFilter {...args} />;

export const Registered = Template.bind({});
Registered.args = {
  filter: "registered"
};

// export const NotRegistered = Template.bind({});
// NotRegistered.args = {
//   filter: "notregistered"
// };

// Registered.parameters = {
//   async test(){
//     for (const browserType of [playwright.chromium, playwright.firefox]) {
//       const browser = await browserType.launch();
//       const context = await browser.newContext();
//       const page = await context.newPage();
//       await page.goto('http://localhost:8081/?path=/story/example-attendeelistfilter--registered');
//       await page.locator()
//       await page.screenshot({ path: `${browserType.name()}.png` });
//       await browser.close();
//     }
//   }
// }

// async function test(browser: playwright.Browser){
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto('http://localhost:8081/?path=/story/example-attendeelistfilter--registered');
//   await page.screenshot({ path: 'chromium.png' });
// }

// NotRegistered.parameters = {
//   test: test
// }