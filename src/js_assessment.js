// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 9 (i.e. more than one digit), sum the 
// digits of the resulting number. Keep repeating until there is only one digit 
// in the result, called the "digital root". 
// **Do not use string conversion within your method.** 
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.
function digitalRootStep(num){
    let remainder = num % 10; // 2, 4, 7, 1 
    let whole = Math.floor(num / 10); // 4432, 443, 51, 5
    return remainder + whole;
}
function digitalRoot(num) {
   
    if (num > 10){
        let ans = digitalRootStep(num);
        return digitalRoot(ans);
    }   else {
        return num;
    }
}

console.log(digitalRoot(44322));

// Write an `Array.prototype.dups` method that will return an object containing
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }


// Write an `Array.prototype.myFilter(callback)` that takes a callback and 
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.

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

// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

// Write a `Function.prototype.myApply(context, argsArr)` method that accepts an
// object and an array of additional arguments. It should call the function with 
// the passed-in object as `this`, also passing the arguments array. Do NOT use 
// the built-in `Function.prototype.apply` or `Function.prototype.call` methods
// in your implementation.

// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.

// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]
function new_word(word) {
    return word[0].toUpperCase() + word.slice(1, word.length)
}
function titleize(str) {
    let words = str.split(" ");
    let safe = ["a", "and", "of", "over", "the"];
    let result = [];

    words.forEach(word => {
       if (safe.includes(word) && words.indexOf(word) !== 0) {
            result.push(word);
        } else {
            result.push(new_word(word));
        }
    });

    return result.join(" ");
}

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}