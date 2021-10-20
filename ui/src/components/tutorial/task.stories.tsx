import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Task, TASK_STATES } from "./task";

export default {
  title: "Task",
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: TASK_STATES.TASK_INBOX,
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task!,
    state: TASK_STATES.TASK_PINNED,
  },
};
