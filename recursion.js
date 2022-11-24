/** product: calculate the product of an array of numbers. */

function product(nums, i=0) { 
  if(nums.length === i) return 1; 

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestWord=0) {
  if(words.length === i) return longestWord;

  if(words[i].length > longestWord){
    longestWord = words[i].length;
  }
  return longest(words, i+1, longestWord); 
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr='') {
  if(str.length <= i) return newStr;
  newStr += str[i]; 

  return everyOther(str, i+2, newStr); 
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  revStr = str.split('').reverse().join(''); 
  
  if(str.length === i) return true; 
  if(revStr[i] !== str[i]) return false; 

  return isPalindrome(str, i+1); 
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(arr.length === i) return -1; 
  if(arr[i] === val) return i; 

  return findIndex(arr, val, i+1); 
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1, revStr='') {
  if(i < 0) return revStr; 

  revStr += str[i]; 
  return revString(str, i - 1, revStr); 
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArr = []; 
  for(let k in obj){
    if(typeof obj[k] === 'object') {
      strArr.push(...gatherStrings(obj[k]));
    } else {
      if(typeof obj[k] === 'string') strArr.push(obj[k]); 
    }
  }
  return strArr; 
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings
};
