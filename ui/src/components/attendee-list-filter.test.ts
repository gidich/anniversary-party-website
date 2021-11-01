import { test, expect } from "@playwright/test";
import { AnyAaaaRecord } from "dns";
import { AttendeeListFilterPage } from "./attendee-list-filter.pom";

// test('Select Registered', async ({ page }) => {
//   const attendeeListFilterPage = new AttendeeListFilterPage(page);
//   await attendeeListFilterPage.goto();
//   await page.screenshot({ path: 'after-goto.png' });

//   await attendeeListFilterPage.selectRegistered();
//   await page.screenshot({ path: 'after-select-reg.png' });
//   //compare screenshot HERE
//   });
test("click button", async ({ page }) => {

  const attendeeListFilterPage = new AttendeeListFilterPage(page);
  await attendeeListFilterPage.goto();
  const fs = require("fs");
  fs.writeFile("Output.txt", await page.content() , (err: any) => {
    if (err) throw err;
  });
  await page.screenshot({ path: "after-goto.png" });

  await attendeeListFilterPage.clickButton();
  await page.screenshot({ path: "after-button-click.png" });
  //compare screenshot HERE
});
