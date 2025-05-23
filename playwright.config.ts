

const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests/',
  /* Maximum time one test can run for. */
  timeout: 60000,

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 3000
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,

  outputDir: "trace-report",
  use: {
    actionTimeout: 0,
    trace: 'off',
    video: 'on',
    screenshot: 'only-on-failure',
    headless: false,
    
  },
  globalSetup: "src/lib/globalSetup.ts",
  reporter: [['html', { open: 'never' }], ['list'], ['json', { outputFile: 'results.json' }]],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'test tags',
      use: { ...devices['Desktop Chrome'],
      launchOptions:{args:['--deny-permission-prompts']},
    }, 
    },
  ],
});

