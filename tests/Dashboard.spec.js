import { test, expect } from '@playwright/test';
//dashboard scenarios
test('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestuser7@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('alert', { name: 'Let\'s get to work!' })).toBeVisible();
  await page.getByRole('link', { name: 'ActiveDashboard Dashboard' }).click();
  await expect(page.getByText('Deliveries')).toBeVisible();
  await expect(page.getByRole('paragraph').filter({ hasText: 'Companies' })).toBeVisible();
  await expect(page.getByRole('paragraph').filter({ hasText: 'Equipment' })).toBeVisible();
  await expect(page.getByRole('paragraph').filter({ hasText: 'Members' })).toBeVisible();
  await page.getByRole('img', { name: 'bluetruck' }).first().click();
  await expect(page.getByLabel('Details').getByText('test', { exact: true })).toBeVisible();
  await page.getByRole('tab', { name: 'Attachments' }).click();
  await page.getByRole('tab', { name: 'Comments' }).click();
  await page.getByRole('tab', { name: 'History' }).click();
  await expect(page.getByText('Project Admins Created')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
});