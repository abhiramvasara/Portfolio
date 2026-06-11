import puppeteer from 'puppeteer';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  console.log('Navigating to local preview...');
  try {
    await page.goto('http://localhost:4173/Portfolio/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    console.log('Waiting 8 seconds for all animations to complete...');
    await new Promise(resolve => setTimeout(resolve, 8000));

    console.log('Taking full page screenshot...');
    await page.screenshot({ path: 'screenshot_mobile_full.png', fullPage: true });
    console.log('Screenshot saved as screenshot_mobile_full.png.');

  } catch (err) {
    console.error('Error during navigation:', err);
  } finally {
    await browser.close();
    console.log('Done.');
  }
})();
