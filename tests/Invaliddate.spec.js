import { test, expect } from '@playwright/test';

//Invalid date scenarios
test('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestusersc7@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('img', { name: 'Follo' })).toBeVisible();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('span').filter({ hasText: 'Select Template' }).first().click();
  await page.getByText('Delivery Booking Template Sc').click();
  await page.getByRole('switch').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('alert', { name: 'Delivery start date and time' }).click();
  await page.locator('tr:nth-child(26) > .fc-timegrid-slot.fc-timegrid-slot-lane').click();
  await page.getByRole('dialog').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('img', { name: 'Next Day' }).click();
  await page.getByRole('img', { name: 'Next Day' }).click();
  await page.getByRole('img', { name: 'Next Day' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Today' }).click();
  await page.getByRole('img', { name: 'Next Day' }).dblclick();
  await page.locator('tr:nth-child(5) > .fc-timegrid-slot.fc-timegrid-slot-lane').click();
  await page.locator('span').filter({ hasText: 'Choose Truck Type' }).first().click();
  await page.getByRole('listitem').filter({ hasText: 'Flatbed Truck' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});