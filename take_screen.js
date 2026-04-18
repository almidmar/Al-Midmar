const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'navbar_issue.png', fullPage: true });
    await browser.close();
    console.log('Screenshot done.');
})();
