import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AuthorityCard } from "./authority-card";

export default {
  title: "Example/Authority Card",
  component: AuthorityCard,
} as ComponentMeta<typeof AuthorityCard>;

const Template: ComponentStory<typeof AuthorityCard> = (args) => (
  <AuthorityCard {...args} />
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  displayValues: {
    __typename: "authority card",
    _id: "79",
    data: {
      regulatoryAuthorityRef: {
        _id: "798",
        orgName: "gu",
        countryName: "jh",
      },
      licenseIssueDate: new Date(),
      licenseExpiryDate: new Date(),
      isCurrentlyLicensed: true,
      hasDisciplinaryAction: false,
      licensureDocumentStatus: "gkjk",
    },
  },
};
