casper.test.begin('Test correct sign in', 4, function (test) {
  casper
    .start('http://192.168.0.104:5000/signInJQ.html', function () {
      test.assertExists('#signIn', 'Sign in form exists')
      test.assertExists('.display', 'Page display exists')

      var text = casper.getHTML('.display')
      test.assertEqual(text, 'No one signed in yet!', 'Correct text before login')
    })
    .then(function () {
      casper.fill('#signIn', {
        name: 'Chuck Norris',
        psw: 'I am awesome!'
      }, false)

      casper.click('#signIn button')

      var text = casper.getHTML('.display')
      test.assertEqual(text, 'Hello Chuck Norris!', 'Correct text after login')
    })
    .run(function () {
      test.done()
    })
})

casper.test.begin('Test invalid sign in', 1, function (test) {
  casper
    .start('http://192.168.0.104:5000/signInJQ.html', function () {
      casper.fill('#signIn', {
        name: 'Chuck Norris',
        psw: 'psw'
      }, false)

      casper.click('#signIn button')
    })
    .waitForAlert(function (resp) {
      test.assertEqual(resp.data, 'Your password is invalid!', 'Correct alert text')
    })
    .run(function () {
      test.done()
    })
})
