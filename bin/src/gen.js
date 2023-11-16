const crypto = require('crypto').webcrypto;

const lists = require('./lists')
const digits = '0123456789'
const symbols = '-_.,; /`~!@#$%^&*()+=<>?:|[]{}'
const defaultSymbol = '-'

function getWordList (name) {
    if (['small', 'large'].includes(name)) {
        return lists[name]
    }
    throw new Error('invalid option: ', name);
}

// Only works when the maximum possible value in indices is divisible by list.length.
function getWords (list, indices) {
  return Array.from(indices).map(index => list[index % list.length])
}

function capitalize (string) {
  return string[0].toUpperCase() + string.slice(1)
}

// Only works on power-of-two sized lists.
function pickWords (list, number) {
  const array = new Uint16Array(number)
  crypto.getRandomValues(array)
  return getWords(list, array)
}

// Only works when the maximum possible value of index is divisible by choices.length.
function getChar (choices, index) {
  return choices[index % choices.length]
}

function pickChar (choices) {
  const array = new Uint32Array(1)
  const maxValid = Math.floor(4294967296 / choices.length) * choices.length;
  do {
    crypto.getRandomValues(array)
  } while (array[0] >= maxValid)
  return getChar(choices, array[0])
}

function generate (options) {
  let words = pickWords(getWordList(options.list), options.count)

  if (options.capitalize) {
    words = words.map(capitalize)
  }

  if (options.digit) {
    words.push(pickChar(digits))
  }

  return words.join(options.symbol ? options.separator : '')
}

module.exports = {
  getWords, capitalize, generate, getChar,
  symbols, defaultSymbol, pickChar
}