import { test, expect } from '@playwright/test';

test('verify mobile view and contact page', async ({ page }) => {
  // Set to mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // Screenshot mobile home
  await page.screenshot({ path: 'mobile_home.png', fullPage: true });

  // Navigate to contact page
  await page.goto('http://localhost:3000/kontak');
  await page.waitForLoadState('networkidle');

  // Verify contact form existence
  const nameInput = page.locator('input[placeholder="Nama Anda"]');
  await expect(nameInput).toBeVisible();

  // Screenshot contact page
  await page.screenshot({ path: 'contact_page.png', fullPage: true });
});

test('verify chat assistant interaction', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click on chat toggle
  const chatToggle = page.locator('button:has(svg.lucide-message-circle), button:has(svg.lucide-x)');
  await chatToggle.click();

  // Verify chat window is visible - use a more specific selector
  const chatHeader = page.locator('div.font-semibold:has-text("Asisten Riset Ecifa")').first();
  await expect(chatHeader).toBeVisible();

  // Type a message
  await page.fill('input[placeholder="Tanyakan sesuatu..."]', 'Apa itu Ecifa?');
  await page.keyboard.press('Enter');

  // Wait for response (the fallback message)
  // Our fallback logic is almost immediate in the API route when no key is present
  await page.waitForTimeout(3000);

  // Screenshot chat interaction
  await page.screenshot({ path: 'chat_interaction.png' });
});
