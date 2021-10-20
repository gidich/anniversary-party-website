import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  AUTHORITIES_QUERY,
  AuthorityCardListContainer,
} from "./authority-card-list-container";

const SampleData = {
  applicantPortal: {
    authorities: [
      {
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
  },
};

export default {
  title: "Example/Authority Card List Container",
  component: AuthorityCardListContainer,
} as ComponentMeta<typeof AuthorityCardListContainer>;

const Template: ComponentStory<typeof AuthorityCardListContainer> = (args) => (
  <AuthorityCardListContainer {...args} />
);

export const DefaultView = Template.bind({});
DefaultView.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: AUTHORITIES_QUERY,
        },
        result: {
          data: SampleData,
        },
      },
    ],
  },
};
