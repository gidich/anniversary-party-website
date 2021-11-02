import { Page } from "@playwright/test";

export class AntdInputsPage {
  readonly page: Page;
  readonly textarea: string;
  readonly usernameinput: string;
  readonly usernametooltip: string;
  readonly passwordinput: string;

  constructor(page: Page) {
    this.page = page;
    this.textarea = "#textarea";
    this.usernameinput = "#username";
    this.usernametooltip = ".anticon-info-circle";
    this.passwordinput = "#password";
  }

  async goto() {
    await this.page.goto(
      "http://localhost:8081/?path=/story/example-antdinputs--default",
      { waitUntil: "domcontentloaded" }
    );
  }

  async getStorybookFrame() {
    const iframeHandle = await this.page.$("#storybook-preview-iframe");
    const iframe = await iframeHandle!.contentFrame();
    return iframe!;
  }
  async typeTextarea(text: string) {
    const frame = await this.getStorybookFrame();
    await frame.type(this.textarea, text);
  }
  async typeUsername(text: string) {
    const frame = await this.getStorybookFrame();
    await frame.type(this.usernameinput, text);
  }
  async hoverTooltip() {
    const frame = await this.getStorybookFrame();
    await frame.hover(this.usernametooltip);
    await frame.waitForTimeout(500);

  }
  async typePassword(text: string) {
    const frame = await this.getStorybookFrame();
    await frame.type(this.passwordinput, text);
  }
}
