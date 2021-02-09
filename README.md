# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software. Please don't use it for production-grade software.**

This project was created and published by Molly Trepanier as one of my projects at [Lighthouse Labs](https://www.lighthouselabs.ca/). 

## Usage

**Install it:**

`npm install @mollyet/lotide`

**Require it:**

`const _ = require('@mollyet/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays()`: compares two arrays to determine if they are equal 
* `eqObjects()`: takes in two objects to determine in they are equal
* `findKey`: takes in an object and callback function to find a specific key
* `findKeyByValue`: takes in an object and value, returns corresponding key
* `head`: returns first value of an array
* `letterPositions`: takes in a string and returns and object with the positon of each letter relative to the string's length
* `map`: takes in an array and callback function and applies the callback function to each element in the given array
* `middle`: returns the middle element(s) of a given array
* `tail`: returns all elements but the first element of an array
* `takeUntl`: takes in an array and callback function, returns array elements until call function condition is rendered true
* `without`: takes in an array and something to remove, returns new array without removed elements. 

Original Unit Testing Functions: 

* used these prior to implementng unit testing with Mocha and Chai
* `assertEqual`: rakes in two cases, and displays message if they are equal or not. 
* `assertArraysEqual`: takes in two arrays and compares them, displays message if they are equal or not
* `assertObjectsEqual`: takes in two objects and compares them, displays message if they are equal or not. 