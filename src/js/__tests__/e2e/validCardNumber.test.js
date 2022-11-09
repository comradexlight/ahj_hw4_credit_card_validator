import puppeteer from 'puppeteer';

jest.setTimeout(8000);

describe('Input valid card number', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });

    page = await browser.newPage();
  });

  test('Div valid-widget-check should as checked class if card number is valid by pressing the button  ', async () => {
    await page.goto('http:localhost:9000');

    const form = await page.$('.vailid-widget-form');
    const input = await form.$('.valid-number');
    const btn = await form.$('.valid-btn');

    await input.type('348302403735658');
    await btn.click();

    await page.waitForSelector('.checked');
  });

  test('Div valid-widget-check should as checked class if card number is valid by pressing the button  ', async () => {
    await page.goto('http:localhost:9000');

    const form = await page.$('.vailid-widget-form');
    const input = await form.$('.valid-number');
    const btn = await form.$('.valid-btn');

    await input.type('348302403735657');
    await btn.click();

    await page.waitForSelector('.unchecked');
  });

  afterEach(async () => {
    await browser.close();
  });
});
