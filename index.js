const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const countLetters = require("./countLetters")
const countOnly = require("./countOnly")
const findKey = require("./findkey")
const findKeyByValue = require("./findKeyByValue")
const letterPositions = require("./letterPositions")
const map = require("./map")
const takeUntil = require("./takeUntil")
const without = require("./without");
const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const eqObjects = require("./eqObjects");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqObjects: eqObjects,

};