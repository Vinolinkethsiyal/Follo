import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestusersc7@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('alert', { name: 'Let\'s get to work!' })).toBeVisible();
  await page.locator('a').filter({ hasText: 'All Bookings' }).click();
  await page.getByRole('link', { name: 'Delivery Bookings', exact: true }).click();
  await page.getByRole('button', { name: 'Create New' }).click();
  await page.getByText('Select Template').click();
  await page.getByText('Delivery Booking Template Sc').click();
  await page.getByRole('switch').click();
  await page.locator('tr:nth-child(49) > .fc-timegrid-slot.fc-timegrid-slot-lane').click();
  await page.getByText('Does Not Repeat').first().click();
  await page.getByText('Daily').click();
  await page.locator('span').filter({ hasText: 'Choose Truck Type' }).first().click();
  await page.getByText('Flatbed Truck').click();
  await page.getByRole('button', { name: 'Submit' }).click();

});