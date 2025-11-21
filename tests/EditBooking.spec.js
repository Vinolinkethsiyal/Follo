import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestuser7@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('alert', { name: 'Let\'s get to work!' }).click();
  await page.locator('a').filter({ hasText: 'All Bookings' }).click();
  await page.getByRole('link', { name: 'Delivery Bookings', exact: true }).click();
  await page.locator('.icon').first().click();
  await page.locator('.icon').first().click();
  await page.getByRole('textbox', { name: 'What are you looking for?' }).click();
  await page.getByRole('textbox', { name: 'What are you looking for?' }).fill('testing');
  await page.getByRole('link', { name: 'edit' }).first().click();
  await expect(page.getByRole('heading', { name: 'DeliveryEdit Delivery Booking' })).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
});