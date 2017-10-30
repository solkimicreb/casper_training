// object properties can be functions, we call these functions methods
var person = {
  name: 'Bob',
  prefix: 'Mr.',
  greet: function () {
    // every method has a 'this' inside it, which points to the containing object
    // imagine a hidden line with 'var this = person' here
    console.log('Hello ' + this.prefix + ' ' + this.name + '!')
  }
}

// this logs 'Hello Mr. Bob!'
person.greet()

person.name = 'Ann'
person.prefix = 'Ms.'

// this logs 'Hello Ms. Ann'
person.greet()
