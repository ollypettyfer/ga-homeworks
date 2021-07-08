/*
Create an object that defines a laptop. It should have the following properties:

make (string)
model (string)
ram (number)
storage (number)
*/

const laptop = {
  make: "apple",
  model: "macbook",
  ram: 1,
  storage: 500,
}

/*
Create an object that defines a bottle of wine. It should have the following properties:
name (string)
grape (string, eg: Merlot)
vintage (number, eg: 2017)
volume (number, eg: 750)
amountRemaining (number, eg: 750)

It should have the following methods:

drink(amount) - removes the `amount` from the `amountRemaining`
refill(amount) - adds the `amount` to the amountRemaining

*/

const wineBottle = {
  name: "white",
  grape: "sweet",
  vintage: 2020,
  volume: 750,
  amountRemaining: 750,

  drink(amount) {
    this.amountRemaining = this.amountRemaining - amount
  },
  refill(amount) {
    this.amountRemaining = amount + this.amountRemaining

  }
}

/*
write a Product class that has the following properties:

name (string)
description (string)
price (number)
*/

class Product {
constructor (name, description, price) {
  this.name = name
  this.description = description
  this.price = 500
}
}

/*
Write a Cart class that has the following properties:

contents (array)

and the following methods:

addItem(item) - adds the given item into the contents array
removeItem(item) - removes the given item from the contents array
empty() - removes all items from the contents array
getTotal() - returns the total price of all items in the contents array
*/

class Cart {
  constructor() {
    this.contents = []
  }
addItem (item) {
  this.contents.push(item)
}
removeItem (item) {
  this.contents.pop(item)
}
empty() {
  this.contents.splice(array.length)
}
getTotal() {
  this.contents.total

}
}

/*
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the shape
getPerimeter() - calculates the total length of all sides of the shape
*/

class Shape {

}



// ! please do not alter below ✋

module.exports = {
  laptop,
  wineBottle,
  Product,
  Cart,
  Shape
}
