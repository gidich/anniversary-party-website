import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GET_LEAVES_QUERY, LeafBagContainer } from "./leaf-bag-container";

const SampleData = {
  leaves: [
    {
      name: "Maple",
      color: "brown",
    },
    {
      name: "Blueberry",
      color: "blue",
    },
    {
      name: "Strawberry",
      color: "orange",
    },
    {
      name: "Lavender",
      color: "green",
    },
  ],
};

export default {
  title: "Example/Leaf Bag Container",
  component: LeafBagContainer,
} as ComponentMeta<typeof LeafBagContainer>;

const Template: ComponentStory<typeof LeafBagContainer> = (args) => (
  <LeafBagContainer {...args} />
);

export const DefaultView = Template.bind({});
DefaultView.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_LEAVES_QUERY,
        },
        result: {
          data: { leafPortal: { leaves: SampleData.leaves } },
        },
      },
    ],
  },
};

export const EmptyView = Template.bind({});
EmptyView.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_LEAVES_QUERY,
        },
        result: {
          data: { leafPortal: { leaves: [] } },
        },
      },
    ],
  },
};

export const LoadingView = Template.bind({});
LoadingView.parameters = {
  apolloClient: {
    mocks: [
      {
        delay: 2000,
        request: {
          query: GET_LEAVES_QUERY,
        },
        result: {
          data: { leafPortal: { leaves: [] } },
        },
      },
    ],
  },
};
