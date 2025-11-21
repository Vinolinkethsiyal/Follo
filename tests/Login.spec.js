import { test, expect } from '@playwright/test';

//Positive login scenario
//test(test case name)
test.only('test', async ({ page }) => {
  //wait mode
  await page.goto('https://test.folloit.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  //Testdatas or test values
  await page.getByRole('textbox', { name: 'Email address' }).fill('anithatestuser7@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('img', { name: 'Follo' }).click();
});