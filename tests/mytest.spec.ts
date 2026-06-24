import {test,expect} from "@playwright/test";

test("verify page title",async ({page})=>
{
    await page.goto("https://www.google.com");
    let title:string=await page.title();
    console.log("Title:",title);
    await expect(page).toHaveTitle("Google");


})