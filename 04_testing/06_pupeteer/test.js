const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setViewport({ width: 1280, height: 720 })

  await page.goto('https://ingatlan.com')
  await page.screenshot({ path: 'images/test/start.png' })

  browser.close()
}

run()
