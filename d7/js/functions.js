/*
  js/functions.js
  =================
  Write your solutions in this file.
*/

/**
 * isPalindrome(str) → Boolean
 * Return true if the cleaned text (lower-case, alphanumeric only) reads the same forwards and backwards.
 * Examples: "racecar" → true, "A man, a plan, a canal: Panama" → true, "hello" → false, "" or non-string → false
 */

//isPalindrome - code here ↓

function isPalindrome(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let arr = str.toLowerCase().split('')
  
  let forwardArr = []
  let reveresdArr = []

  for (let i = 0; i < arr.length; i++) {
    if (alphabet.includes(arr[i])) {
      forwardArr[i] = arr[i]
      reveresdArr[(arr.length - 1) - i] = arr[i]
    }
  }

  return forwardArr.join('') == reveresdArr.join('')
}

/**
 * sum(a, b) → number
 * Add two values and return a number. Accept numeric strings and negatives.
 * Examples: (2,3) → 5, ("5","10") → 15, (-5,10) → 5
 */

//sum - code here ↓

function sum(a, b) {
  return Number(a) + Number(b)
}

/**
 * isEven(n) → Boolean
 * Return true if n is an integer evenly divisible by 2.
 * Examples: 8 → true, 7 → false, 0 → true, -4 → true, non-integer or NaN → false
 */

//isEven - code here ↓

function isEven(n) {
  return n % 2 == 0
}

/**
 * initials(fullName) → string
 * Return uppercase initials with dots. Ignore extra spaces.
 * Examples: "John Doe" → "J.D.", "Grace Murray Hopper" → "G.M.H.", "Cher" → "C."
 */

//initials - code here ↓

function initials(fullName) {
  let names = fullName.split(' ')

  let initals = []

  for (let i = 0; i < names.length; i++) {
    initals[i] = names[i][0]
  }
  
  return `${initals.join('.')}.`
}

/**
 * reverseWords(sentence) → string
 * Return the sentence with words in reverse order, trimming extra spaces.
 * Examples: "one two three" → "three two one", " hello world " → "world hello"
 */

//reverseWords - code here ↓

function reverseWords(sentence) {
  let split = sentence.split(' ')

  let words = []
  let reversed = []

  for (let i = 0; i < split.length; i++) {
    if (split[i] != '')
      words.push(split[i])
  }

  for (let i = 0; i < words.length; i++) {
    reversed[(words.length - 1) - i] = words[i]
  }

  return reversed.join(' ')
}

// DO NOT MODIFY BELOW THIS LINE - It's make functions available to the test harness
// ----------------------------------------------------------------------------------
if (typeof window !== 'undefined') {
  if (typeof isPalindrome === 'function') window.isPalindrome = isPalindrome;
  if (typeof sum === 'function') window.sum = sum;
  if (typeof isEven === 'function') window.isEven = isEven;
  if (typeof initials === 'function') window.initials = initials;
  if (typeof reverseWords === 'function') window.reverseWords = reverseWords;
}
