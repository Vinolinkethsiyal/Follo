import { defineConfig } from '@playwright/test';
 
export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 15000
  },
  fullyParallel: false,
  retries: 2,
  workers: 3,
 
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
 
  use: {
    actionTimeout: 0,
    baseURL: 'https://staging.folloit.com',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: {
      args: ["--start-maximized"]
    }
  },
 
  projects: [
    {
      name: 'chromium',
      use: {
        headless: false,
        viewport: null,
        // maxConcurrency: 10,
      },
    }
  ]
});