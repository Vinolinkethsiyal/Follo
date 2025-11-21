import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.folloit.com/home');
  await page.getByRole('button', { name: 'Get Started Get Arrow' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('kethsiyal@yopmail.com');
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('(987) 654-3210');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('kethsiyal');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('test');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Project Name' }).click();
  await page.getByRole('textbox', { name: 'Project Name' }).fill('Test data project');
  await page.getByRole('textbox', { name: 'Enter a location' }).click();
  await page.getByText('USA').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div').filter({ hasText: /^Billed Annual$/ }).click();
  await expect(page.getByRole('heading', { name: 'Choose the appropriate plan' })).toBeVisible();
  await page.getByText('Billed Monthly').click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});