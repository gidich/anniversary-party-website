import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AuthorityCardList } from "./authority-card-list";

export default {
  title: "Example/Authority Card List",
  component: AuthorityCardList,
} as ComponentMeta<typeof AuthorityCardList>;

const Template: ComponentStory<typeof AuthorityCardList> = (args) => (
  <AuthorityCardList {...args} />
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  authorities: [
    {
      __typename: "authority card",
      _id: "1",
      data: {
        regulatoryAuthorityRef: {
          _id: "11",
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
    {
      __typename: "authority card",

      _id: "2",
      data: {
        regulatoryAuthorityRef: {
          _id: "22",
          orgName: "asdf",
          countryName: "asdf",
        },
        licenseIssueDate: new Date(),
        licenseExpiryDate: new Date(),
        isCurrentlyLicensed: true,
        hasDisciplinaryAction: false,
        licensureDocumentStatus: "fsdf",
      },
    },
    {
      __typename: "authority card",
      _id: "3",
      data: {
        regulatoryAuthorityRef: {
          _id: "33",
          orgName: "asdf",
          countryName: "asdf",
        },
        licenseIssueDate: new Date(),
        licenseExpiryDate: new Date(),
        isCurrentlyLicensed: true,
        hasDisciplinaryAction: false,
        licensureDocumentStatus: "fsdf",
      },
    },
    {
      __typename: "authority card",
      _id: "4",
      data: {
        regulatoryAuthorityRef: {
          _id: "44",
          orgName: "asdf",
          countryName: "asdf",
        },
        licenseIssueDate: new Date(),
        licenseExpiryDate: new Date(),
        isCurrentlyLicensed: true,
        hasDisciplinaryAction: false,
        licensureDocumentStatus: "fsdf",
      },
    },
  ],
};
