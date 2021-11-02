import { test, expect } from "@playwright/test";
import { AntdInputsPage } from "./antd-inputs.pom";


test("Single line type in TextArea", async({ page }) => {
    const antdInputsPage = new AntdInputsPage(page);
    await antdInputsPage.goto();
    await antdInputsPage.typeTextarea("single line goes here");
    expect(
        await page.screenshot()
    ).toMatchSnapshot("singleline.png", {threshold: 0.2});
});

test("Multi line type in TextArea", async({ page }) => {
    const antdInputsPage = new AntdInputsPage(page);
    await antdInputsPage.goto();
    await antdInputsPage.typeTextarea("first line goes here" + "\n" + "second line goes here");
    expect(
        await page.screenshot()
    ).toMatchSnapshot("doubleline.png", {threshold: 0.2});
});

test("Type username", async({ page }) => {
    const antdInputsPage = new AntdInputsPage(page);
    await antdInputsPage.goto();
    await antdInputsPage.typeUsername("username");
    expect(
        await page.screenshot()
    ).toMatchSnapshot("username.png", {threshold: 0.2});
});

test("Hover tooltip", async({ page }) => {
    const antdInputsPage = new AntdInputsPage(page);
    await antdInputsPage.goto();
    await antdInputsPage.hoverTooltip();
    expect(
        await page.screenshot()
    ).toMatchSnapshot("tooltip.png");
});

test("Type password", async({ page }) => {
    const antdInputsPage = new AntdInputsPage(page);
    await antdInputsPage.goto();
    await antdInputsPage.typePassword("password");
    expect(
        await page.screenshot()
    ).toMatchSnapshot("password.png");
});