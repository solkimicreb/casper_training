var person = {
  name: 'Bob',
  prefix: 'Mr.',
  greet: function () {
    console.log('Hello ' + this.prefix + ' ' + this.name + '!')
  }
}

person.greet()

person.name = 'Ann'
person.prefix = 'Ms.'

person.greet()
