var counter = {
  num: 0,
  tick: function (amount) {
    this.num = this.num + amount
    return this
  },
  log: function () {
    console.log('Counter is at: ' + this.num)
    return this
  }
}

counter
  .tick(5)
  .log()
  .tick(2)
  .log()
