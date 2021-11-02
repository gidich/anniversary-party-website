import { test, expect } from "@playwright/test";
import { AttendeeListFilterPage } from "./attendee-list-filter.pom";

test("Select Registered", async({ page }) => {
  const attendeeListFilterPage = new AttendeeListFilterPage(page);
  await attendeeListFilterPage.goto();
  await attendeeListFilterPage.selectRegistered();
  expect(
    await page.screenshot()
  ).toMatchSnapshot("reg.png");
});

test("Select Not Registered", async ({ page }) => {
  const attendeeListFilterPage = new AttendeeListFilterPage(page);
  await attendeeListFilterPage.goto();
  await attendeeListFilterPage.selectNotRegistered();
  expect(
    await page.screenshot()
  ).toMatchSnapshot("notreg.png");
});

test("Select All", async ({ page }) => {
  const attendeeListFilterPage = new AttendeeListFilterPage(page);
  await attendeeListFilterPage.goto();
  await attendeeListFilterPage.selectAll();
  expect(
    await page.screenshot()
  ).toMatchSnapshot("all.png");
});
