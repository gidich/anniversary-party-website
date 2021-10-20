import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IAuthority } from "./authority-card";
import {
  AuthorityCardContainer,
  AUTHORITY_QUERY,
} from "./authority-card-container";

const SampleData = {
  applicantPortal: {
    authorities: [
      {
        __typename: "authority",
        _id: "1",
        // data: {
        //   regulatoryAuthorityRef: {
        //     _id: "11",
        //     orgName: "gu",
        //     countryName: "jh",
        //   },
        //   licenseIssueDate: new Date(),
        //   licenseExpiryDate: new Date(),
        //   isCurrentlyLicensed: true,
        //   hasDisciplinaryAction: false,
        //   licensureDocumentStatus: "gkjk",
        // },
      },
      // {
      //   _id: "2",
      //   data: {
      //     regulatoryAuthorityRef: {
      //       _id: "22",
      //       orgName: "asdf",
      //       countryName: "asdf",
      //     },
      //     licenseIssueDate: new Date(),
      //     licenseExpiryDate: new Date(),
      //     isCurrentlyLicensed: true,
      //     hasDisciplinaryAction: false,
      //     licensureDocumentStatus: "fsdf",
      //   },
      // },
      // {
      //   _id: "3",
      //   data: {
      //     regulatoryAuthorityRef: {
      //       _id: "33",
      //       orgName: "asdf",
      //       countryName: "asdf",
      //     },
      //     licenseIssueDate: new Date(),
      //     licenseExpiryDate: new Date(),
      //     isCurrentlyLicensed: true,
      //     hasDisciplinaryAction: false,
      //     licensureDocumentStatus: "fsdf",
      //   },
      // },
      // {
      //   _id: "4",
      //   data: {
      //     regulatoryAuthorityRef: {
      //       _id: "44",
      //       orgName: "asdf",
      //       countryName: "asdf",
      //     },
      //     licenseIssueDate: new Date(),
      //     licenseExpiryDate: new Date(),
      //     isCurrentlyLicensed: true,
      //     hasDisciplinaryAction: false,
      //     licensureDocumentStatus: "fsdf",
      //   },
      // },
    ],
  },
};

export default {
  title: "Example/Authority Card Container",
  component: AuthorityCardContainer,
} as ComponentMeta<typeof AuthorityCardContainer>;

const Template: ComponentStory<typeof AuthorityCardContainer> = (args) => (
  <AuthorityCardContainer {...args} />
);

export const DefaultView = Template.bind({});
DefaultView.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: AUTHORITY_QUERY,
        },
        result: {
          data: SampleData,
        },
      },
    ],
  },
};
