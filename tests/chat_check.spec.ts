import { test, expect } from '@playwright/test';

test('verify chat assistant interaction', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Wait for the button to be stable
  const chatToggle = page.locator('button:has(svg.lucide-message-circle), button:has(svg.lucide-x)');
  await chatToggle.waitFor({ state: 'visible' });
  await chatToggle.click();

  // Wait for the chat window to be visible
  const chatWindow = page.locator('div.font-semibold:has-text("Asisten Riset Ecifa")').first();
  await chatWindow.waitFor({ state: 'visible' });

  // Find the input and type
  const input = page.locator('input[placeholder="Tanyakan sesuatu..."]');
  await input.waitFor({ state: 'visible' });
  await input.fill('Apa itu Ecifa?');
  await page.keyboard.press('Enter');

  // Wait for the message to appear in the list
  // The user message should appear immediately
  await expect(page.locator('text=Apa itu Ecifa?')).toBeVisible();

  // Wait for response (the fallback message)
  await page.waitForTimeout(3000);

  // Screenshot chat interaction
  await page.screenshot({ path: 'chat_interaction.png' });
});
