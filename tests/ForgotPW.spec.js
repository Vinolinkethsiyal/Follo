import { test, expect } from '@playwright/test';

//Forgot password , Negative login testcases
test('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestusersc7@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@124');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('alert', { name: 'Incorrect Password.' })).toBeVisible();
  await page.getByRole('link', { name: 'Forgot Password?' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestusersc7@yopmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Success! Your new password')).toBeVisible();
});