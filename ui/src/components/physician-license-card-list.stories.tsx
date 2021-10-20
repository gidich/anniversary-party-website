import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LicenseCardList } from "./physician-license-card-list";

export default {
  title: "Example/License Card List",
  component: LicenseCardList,
} as ComponentMeta<typeof LicenseCardList>;

const Template: ComponentStory<typeof LicenseCardList> = (args) => (
  <LicenseCardList {...args} />
);

let licenses = [
  {
    licenseNumber: "121",
    orgName: "Drexel Authority",
    physicianRegAuthorityRef: 1,
  },
];

export const OneLicense = Template.bind({});
OneLicense.args = {
  isEditable: true,
  licenses: licenses,
  onListChangedCallback: (newLicenses) => {
    licenses = newLicenses;
  },
};
