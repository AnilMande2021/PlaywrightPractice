import {test,expect} from "@playwright/test";

test("verify page title",async ({page})=>
{
    await page.goto("https://www.google.com");
    let title:string=await page.title();
    console.log("Title:",title);
    await expect(page).toHaveTitle("Google");


})
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});