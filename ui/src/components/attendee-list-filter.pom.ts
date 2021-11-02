import { Page } from "@playwright/test";

export class AttendeeListFilterPage {
  readonly page: Page;
  readonly filterDropdown: string;
  readonly filterDropdownOptionRegistered: string;
  readonly filterDropdownOptionNotRegistered: string;
  readonly filterDropdownOptionAll: string;

  constructor(page: Page) {
    this.page = page;
    this.filterDropdown = 'span[title="Registered"]';
    this.filterDropdownOptionRegistered = '#filter-registered';
    this.filterDropdownOptionNotRegistered = '#filter-notregistered';
    this.filterDropdownOptionAll = '#filter-all';
   
  }
  async goto() {
    await this.page.goto(
      "http://localhost:8081/?path=/story/example-attendeelistfilter--registered", {
        waitUntil: "domcontentloaded"
      }
    );
  }

  async getStorybookFrame() {
    const iframeHandle = await this.page.$("#storybook-preview-iframe");
    const iframe = await iframeHandle!.contentFrame();
    return iframe!;
  }

  async selectRegistered() {
    const frame = await this.getStorybookFrame();
    await frame.click(this.filterDropdown);
    await frame.click(this.filterDropdownOptionRegistered);
    await frame.waitForTimeout(500);
  }
  async selectNotRegistered() {
    const frame = await this.getStorybookFrame();
    await frame.click(this.filterDropdown);
    await frame.click(this.filterDropdownOptionNotRegistered);
    await frame.waitForTimeout(500);
  }
  async selectAll() {
    const frame = await this.getStorybookFrame();
    await frame.click(this.filterDropdown);
    await frame.click(this.filterDropdownOptionAll);
    await frame.waitForTimeout(500);
    }
}
