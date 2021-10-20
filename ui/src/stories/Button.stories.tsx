import React from 'react';
import { Story } from '@storybook/react';
import { CreeveyStory } from 'creevey';
import { Button } from './Button';

export default { title: 'Example/Button' };

export const Basic: Story & CreeveyStory = () => <Button label="Button" />;

Basic.parameters = {
  creevey: {
    captureElement: '#root',
    tests: {
      async click() {
        await this.browser.actions().click(this.captureElement).perform();
        await this.expect(await this.takeScreenshot()).to.matchImage('buttonClicked');
      },
      // async hover() {
      //   //hover
      //   await this.expect(await this.takeScreenshot()).to.matchImage('buttonHover');

      // }

    }
  }
}



/*
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters:
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/