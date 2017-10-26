casper.options.viewportSize = { width: 1280, height: 720 }

casper.test.begin('Test ingatlan.com', 1, function (test) {
  casper
    .start('https://ingatlan.com', function () {
      test.assertTitle('ingatlan.com - A legtöbb ingatlan egy helyen.')
      casper.capture('images/test/start.png')
    })
    .then(function () {
      casper.click('[href="#belepes"]')
    })
    .waitUntilVisible('.login-popup', function () {
      casper.capture('images/test/login.png')
    })
    .then(function () {
      casper.fill('#loginform', {
        'signin[username]': 'miklos.bertalan1@gmail.com',
        'signin[password]': '0476Ceasar'
      }, true)
    })
    .waitWhileVisible('.login-popup', function () {
      casper.capture('images/test/main.png')
    })
    .then(function () {
      casper.sendKeys('#sf_query', 'Budapest')
      casper.sendKeys('#sf_price_sale_min', '20')
      casper.sendKeys('#sf_area_size_min', '30')
      casper.click('#results-filter-submit')
    })
    .wait(5000, function () {
      casper.click('#results-filter-submit')
    })
    .wait(5000, function () {
      casper.capture('images/test/search.png')
    })
    .run(function () {
      test.done()
    })
})
