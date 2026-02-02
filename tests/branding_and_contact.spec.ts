import { test, expect } from '@playwright/test';

test('verify branding logo and favicon', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Verify Header Logo
  const headerLogo = page.locator('header img[alt="Ecifa.id Logo"]');
  await expect(headerLogo).toBeVisible();
  const headerLogoSrc = await headerLogo.getAttribute('src');
  expect(headerLogoSrc).toContain('storage-mubarokah.s3.ap-southeast-3.amazonaws.com');

  // Verify Footer Logo
  const footerLogo = page.locator('footer img[alt="Ecifa.id Logo"]');
  await expect(footerLogo).toBeVisible();

  // Verify Hero Image
  const heroImage = page.locator('section img[alt="Kolaborasi riset pendidikan modern"]');
  await expect(heroImage).toBeVisible();
});

test('verify contact form submission call', async ({ page }) => {
  // Intercept the API call
  await page.route('**/api/contact', async route => {
    const json = { success: true };
    await route.fulfill({ json });
  });

  await page.goto('http://localhost:3000/kontak');

  await page.fill('input[placeholder="Nama Anda"]', 'Test User');
  await page.fill('input[placeholder="email@contoh.com"]', 'test@example.com');
  await page.fill('input[placeholder="Topik pesan Anda"]', 'Testing Contact Form');
  await page.fill('textarea[placeholder="Ceritakan detail pertanyaan atau peluang kolaborasi Anda..."]', 'This is a test message for the contact form.');

  await page.click('button:has-text("Kirim Pesan")');

  // Check for success toast
  await expect(page.locator('text=Pesan Terkirim!')).toBeVisible();
});
