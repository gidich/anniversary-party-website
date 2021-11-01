import { expect, Locator, Page } from "@playwright/test";

export class AttendeeListFilterPage {
  readonly page: Page;
  readonly tab: Locator;
  readonly filterDropdown: Locator;
  readonly filterDropdownOptionRegistered: Locator;
  readonly filterDropdownOptionNotRegistered: Locator;
  readonly filterDropdownOptionAll: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tab = this.page.locator('#example-attendeelistfilter--registered');
    this.filterDropdown = this.page.locator("#attendee-list-filter");
    this.filterDropdownOptionRegistered = page.locator("#filter-registered");
    this.filterDropdownOptionNotRegistered = page.locator(
      "#filter-not-registered"
    );
    this.filterDropdownOptionAll = page.locator("#filter-all");
  }

  async goto() {
    await this.page.goto(
      "http://localhost:3000/Schedule"
  );
  //const docs = await this.page.waitForSelector("#root > div > div.css-sqdry3 > div > div.css-sqdry3 > div.os-host.os-host-foreign.os-theme-dark.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.os-host-scrollbar-vertical-hidden.css-6cn5u7.os-host-transition > div.os-padding > div > div > div > div.css-11sh1n2 > div.css-1tgscux > a:nth-child(2) > button")
  //await docs.click();
  }
  async selectRegistered() {
    console.log("before");
    const dropdown = await this.page.waitForSelector("#attendee-list-filter");
    console.log("dropdown: ", dropdown);
    await this.filterDropdown.click();
    await expect(this.filterDropdownOptionRegistered).toBeVisible();
    await this.filterDropdownOptionRegistered.click();
  }
  async selectNotRegistered() {
    await this.filterDropdown.click();
    await expect(this.filterDropdownOptionNotRegistered).toBeVisible();
    await this.filterDropdownOptionNotRegistered.click();
  }
  async selectAll() {
    await this.filterDropdown.click();
    await expect(this.filterDropdownOptionAll).toBeVisible();
    await this.filterDropdownOptionAll.click();
  }
  async clickButton() {
    const button = await this.page.locator('#button-id')
    console.log("button: ", button)
    await button.waitFor();
    await button.hover();
    await button.click();
    console.log("after");
  }
}
