import * as puppeter from 'puppeteer';
import * as cron from 'node-cron';

(() => {
  cron.schedule('* * * * *', async () => {
    console.log('running a task every minute');
    const browser = await puppeter.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.pdf({ path: `google${Date.now()}.pdf` });

    await browser.close();
  });
})();
