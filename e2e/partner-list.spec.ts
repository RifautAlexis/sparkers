import { test, expect } from '@playwright/test';

test('As a user, I want to see a table displaying a default list of 10 partners when I access the partners page', async ({ page }) => {
    await page.goto('http://localhost:4200/partners');
  
    const totalRows = page.locator('tbody tr');
    await expect(totalRows).toHaveCount(10);
});