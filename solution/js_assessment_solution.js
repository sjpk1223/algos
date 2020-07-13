// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 9 (i.e. more than one digit), sum the 
// digits of the resulting number. Keep repeating until there is only one digit 
// in the result, called the "digital root". 
// **Do not use string conversion within your method.** 
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.
function digitalRoot(num) {
  while (num > 10) {
    num = digitalRootStep(num);
  }

  return num;
}

function digitalRootStep(num) {
  let root = 0;

  while (num > 0) {
    root += num % 10;
    num = Math.floor(num/10);
  }

  return root;
}

// Alternate Solution
function digitalRoot(num) {
  const digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num/10);
  }

  const digitSum = digits.reduce((sum, digit) => sum + digit);

  return digitSum > 10 ? digitalRoot(digitSum) : digitSum;
}

// Magical one - line solution
function digitalRoot(num) {
  return num < 10 ? num : digitalRoot(digitalRoot(Math.floor(num / 10)) + (num % 10));
}

function digitalRoot(num) {
  return num > 10 ? num : digitalRoot(digitalRoot(Math.floor(num/10) + (num %10)))
}

// Write an `Array.prototype.dups` method that will return an object containing
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }
Array.prototype.dups = function() {
  const count = {};
  const dups = {};

  this.forEach( (el, idx) => {
    count[el] = count[el] || [];
    count[el].push(idx);
  });

  const keys = Object.keys(count).filter(el => count[el].length > 1);
  keys.forEach( (key) => {
    dups[key] = count[key];
  });

  return dups;
};

Array.prototype.dups = function() {
  
  const count = {};
  const dups = {};

  this.forEach((key, idx) => {
    count[key] = count[key] || [];
    count[key].push(idx);
  })

  Validkeys = Object.keys(count).filter(key => count[key].length > 1);
  Validkeys.forEach(key => {
    dups[key] = count[key];
  });
  return dups;
}






















// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]
function titleize(title) {
  const littleWords = ['a', 'and', 'of', 'over', 'the'];

  const words = title.split(' ');
  const titleizedWords = words.map( (word, idx) => {
    if (idx !== 0 && littleWords.indexOf(word) >= 0) {
      return word.toLowerCase();
    } else {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    }
  });

  return titleizedWords.join(' ');
}


function titleize(str) {
  const littleWords = ['a', 'and', 'of', 'over', 'the'];
  upcased = []
  strarr = str.split(" ");
  strarr.forEach((word, idx) => {
    if (idx === 0 || !littleWords.includes(word)) {
      upcased.push(word[0].toUpperCase() + word.slice(1));
    } else {
      upcased.push(word);
    }
  })
  return upcased.join(" ");
}
// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.
Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

// Write an `Array.prototype.myFilter(callback)` that takes a callback and
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.
Array.prototype.myFilter = function (callback) {
  const result = [];

  this.myEach((el) => {
    if (callback(el)) result.push(el)
  });
  
  return result;
};

// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// **Do NOT use the built-in `Array.prototype.sort` in your implementation.**
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'
function jumbleSort(str, alphabet = null) {
  alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
  str = str.split('');

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 1) break;
      let current = str[i];
      let next = str[i + 1];
      if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
        str[i] = next;
        str[i + 1] = current;
        sorted = false;
      }
    }
  }

  return str.join('');
}

// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**
Function.prototype.inherits = function(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};



// Write a `Function.prototype.myApply(context, argsArr)` method that accepts an
// object and an array of additional arguments. It should call the function with 
// the passed-in object as `this`, also passing the arguments array. Do NOT use 
// the built-in `Function.prototype.apply` or `Function.prototype.call` methods
// in your implementation.
Function.prototype.myApply = function (context, args = []) {
  return this.bind(context)(...args);
};

// Also works (passing arguments at bind-time vs call-time)
Function.prototype.myApply = function (context, args = []) {
  return this.bind(context, ...args)();
};

Function.prototype.myApply = function(context, args = []) {
  return this.bind(context)(...args);
}
// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.
Function.prototype.myBind = function (context, ...bindArgs) {
  const that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

Function.prototype.mybind = function(context, ...bindArgs) {
  const that = this;
  return function(...callArgs) {
    that.apply(context, bindArgs.concat(callArgs));
  }
}
