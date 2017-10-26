casper.options.viewportSize = { width: 1280, height: 720 }

casper.test.begin('Test ingatlan.com', 1, function (test) {
  casper
    .start('https://ingatlan.com', function () {
      test.assertTitle('ingatlan.com - A legtöbb ingatlan egy helyen.')
      casper.capture('images/test/start.png')
    })
    .run(function () {
      test.done()
    })
})
