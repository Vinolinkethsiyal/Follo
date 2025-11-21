import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestuser7@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('img', { name: 'Down Arrow' }).nth(1).click();
  await page.locator('span').filter({ hasText: 'Select Template' }).first().click();
  await page.getByText('October').click();
  await page.locator('#company-select8').getByText('Definable Feature Of Work', { exact: true }).click();
  await page.getByText('Choose Definable Feature Of').click();
  await page.getByRole('listitem').filter({ hasText: 'concante' }).click();
  await page.getByText('Concrete', { exact: true }).click();
  await page.locator('div').filter({ hasText: 'Responsible Person * Escort' }).nth(5).click();
  await page.getByRole('dialog').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('alert', { name: 'Delivery Booking Created' }).click();
});
