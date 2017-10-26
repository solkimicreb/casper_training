casper.test.begin('Test correct sign in', 1, function (test) {
  casper
    .start('https://google.com', function () {
      test.assertTitle('Google', 'Google has correct title')
      casper.capture('images/test/google.png')
    })
    .run(function () {
      test.done()
    })
})
