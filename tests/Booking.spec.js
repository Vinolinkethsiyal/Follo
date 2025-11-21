import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestuser7@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('alert', { name: 'Let\'s get to work!' })).toBeVisible();
  //Error after release (Booking filkar)
  await page.locator('a').filter({ hasText: 'All Bookings' }).click();
});