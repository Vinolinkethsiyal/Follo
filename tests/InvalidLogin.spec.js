import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Enter email address')).toBeVisible();
  await expect(page.getByText('Enter password')).toBeVisible();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestuser7@yopmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Enter password')).toBeVisible();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestuser7@yopail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('.card-body > div').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('alert', { name: 'User not found' }).click();
});