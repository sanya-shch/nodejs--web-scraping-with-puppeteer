const puppeteer = require('puppeteer');

async function scrapeWeathers(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el_1] = await page.$x('//*[@id="bd1"]/div[1]/img');
    const src = await el_1.getProperty('src');
    const imgURL = await src.jsonValue();

    const [el_2] = await page.$x('//*[@id="bd1c"]/div[3]/div[2]/div[1]');
    const txt = await el_2.getProperty('textContent');
    const text = await txt.jsonValue();

    console.log({imgURL, text});

    browser.close();
}

scrapeWeathers('https://ua.sinoptik.ua/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0-%D0%B2%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F');
