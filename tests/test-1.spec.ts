import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestuser7@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('alert', { name: 'Let\'s get to work!' })).toBeVisible();
  await page.locator('app-all-calendar section').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('a').filter({ hasText: 'All Bookings' }).click();
  await page.getByRole('link', { name: 'Delivery Bookings', exact: true }).click();
  await page.getByRole('button', { name: 'Create New' }).click();
  await page.locator('span').filter({ hasText: 'Select Template' }).first().click();
  await page.getByText('New Template').click();
  await page.getByRole('switch').click();
  await page.getByText('Choose Definable Feature Of').click();
  await page.getByText('Concrete', { exact: true }).click();
  await page.locator('div').filter({ hasText: 'Crane Pick Booking ID' }).nth(5).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});