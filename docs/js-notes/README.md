# ***JS quick notes***

[[toc]]

## JavaScript Types

array and object are non-primitive

-> **number/string and others are primitive type (including symbol)**

***Primitive type varible cannot be modified!!!***    

But it's ok to change an array or an object:

> for example:
>
> `let a = 'nihao'`, then `a[0] = 'N'` is useless, a would not be changed, it's still `'nihao'`
>
> but for array:
>
> `let b = [1,2,3]`, it's ok to run `b[1] = 'abc'`, then b is now `[1,'abc',3]`
>
> and for an object:
>
> `let c = {name:'WYF', age:25, gender:true}`, directly do `c.age = 21` is ok to make the object c's age 21.  

To check a variable 's type, just use `typeof a`

For primitive type casting, use `parseInt('114514')`  or `parseInt(114.514)` or `parseFloat('114.5')`



Note: string format uses `${x}` and the backquote



## How to run JavaScript in html

To run js script in a html, you can use:

1. inline js, for example:

    `<button onclick="alter('Notifications here!');">Click me</button>`

2. internal js, for example:

```html
<script>
    let a = 'hello'
    console.log(a)
</script>
```

3. external js, for example:

`<script src="./helloworld.js"></script>`

4. mutiple external js, for example:

```html
	<script src="./helloworld.js"></script>
	<script src="./introduction.js"></script>
	<script src="./variable.js"></script>
	<script src="./main.js"></script>
```

Of course certain html knowledge is needed.



## Some functions[math and string]

`Math.random()` generates a random float number

`'some string'.toUpperCase()` and so on makes a string upper or lower case

> and for string there are many built-in functions, e.g. match/split/replace and so on



##  Window Methods

1. alert(): `alter('show some message')`
2. prompt(): `prompt('Please enter info here:', 'e.g. 张三')`
3. confirm(): `const res = confirm('Are u sure to close?')` it returns a boolean value.

## Date Object

`const now = new Date()` will generate a date object referring the present time.

```javascript
const now = new Date()
now.getFullYear() // return value is 2022
now.getMonth() // return value: [0,11], not [1,12]
now.getDate() // return [1,31], for 11.20 it returns 20
now.getDay()	//which day in a week from 0 to 6
now.getHours()
now.getMinutes()
now.getSeconds()
now.getMilliseconds() // all those above begins from 0
getTime() // return time stamp
```

## Conditionals

`if (condition) {}` is the basic conditional. Condition should be a boolean value, literally `if (true){}` and `if(condition_varible){}` are both ok.

Yet `if(condition){}else{}` is the same.

And multiple else, and `else if (conditon2)` is ok too.

Like java, switch is provided:

```java
switch(caseValue) {
    case 1:
        // code
        break
    case 2:
        // code
        break
    default:
        // code
}
```

Case value can be number, string, and like this:

```javascript
let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}
```

JavaScript also supports our favorite syntax: 

```javascript
let condition = true
condition
	? console.log('true')
	: console.log('false')
	
let str = true ? 'str1' : 'str2'
```

## Array

An array has a reference in memory address for each index. We can access the value at the address by index.

***To create an empty array***, use `const arr = Array()` or `const arr = []`

Note that an array can have items of ***different data types***:

```javascript
const arr = ['hello', 123, 114.514, {name:'n', age:12}]
arr[3].name = 'm'	// object can be accessed by index
```

And `split()` can make an array from a string:

```javascript
let js = 'python'
const charsInJs = js.split('') // val is ['p','y'...]
let companies = 'apple,ms,mi'
const company = companies.split(',') // val is ['apple',...]
```

To fill an array with one static value, use `fill`:

```javascript
const arr = Array(4).fill('m')	// arr = ['m','m','m','m']
```

To make two array together, use `concat`:

```javascript
const a = ['a','b','c']
const d = ['d','e','f']
const aTof = a.concat(d)
// aTof = ['a', 'b', 'c', 'd', 'e', 'f']
```

* To get the length of the array, use `arr.length`

* `arr.indexOf(x)` returns the index whose value is x, and -1 while not a such value x in the array.
* `Array.isArray(arr)` returns true iff arr is an array
* `arr.toString()` makes the array a string, seperated by ','
* `arr.join('*')` or `arr.join('#')` makes a string ,and seperated by the given argument string
*  `arr.slice(a, b)` returns a slice indexed [a,b)
* `arr.splice(a, b, c)` takes 3 arguments: a is necessary, determine the   start index of the function, b and c are optional: b says how many items to be deleted; c is Variable-Length arguments, they says the items to be added.
* `arr.push(x)` and `arr.pop()` Obviously 
* `arr.shift()` and `arr.unshift(x)` remove or add a value at the very beginning of arr.
* `arr.reverse()` changes the orginal array, make it reversed.
* `arr.sort()` sort the array, changing the original array.

## loops

`for` loop:

```javascript
for(let i = 0; i <= 5; i++){
  console.log(i)
}
```

`while` loop:

```javascript
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
```

`do while` loop:

```javascript
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)
```

`for of` loop (equals to foreach in C++ and Java):

```javascript
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}
```

Note that the temporay varible should be const, which means you cannot change it in the `for of` loop

> And like any C -like language, in a loop you can use `break` and `continue` to contorl your loop.

## Functions

A function can be declared in these ways:

- _Declaration function_
- _Expression function_
- _Anonymous function_
- _Arrow function_

`Function Declaration`:

```javascript
function func(parm1, parm2) {
	ret = parm1 + parm2
    return ret
}
// And it can have a default argument value:
function func2(parm = 0) {
	return parm ** 2
}
```

`Arrow function`:

```javascript
const square = n => {
	return n * n
}
```

If we don't know how many arguments will be passed to our function, we can use the `arguments` array:

```javascript
function sum() {
    let sum = 0
	for (const i of arguments) {
    	sum += i
    }
    return sum
}

sum(1,2,3,4,5,6)
```

But for an `arrow function`, there is no such thing as `arguments`, to enable it to process unlimited arguments:

```javascript
const sum = (...args) => {
	let sum = 0
	for (const i of args) {
    	sum += i
    }
    return sum
}
```

And a `anonymous function` does not have a name:

```javascript
const someFun = function() {
	console.log('hello!')
}
```

Yet a `expression function` is an `anonymous function`, but it has arguments:

```javascript
const square = function(n) {
	return n * n
}
```

Based on `anonymous functions`, `self invoking functions` comes into being. A `self invoking function` is a anonymous function without even be assigned to a const variable. It is just be called like:

```javascript
let squaredNum = (function(n) {
  return n * n
})(10)
```

The anonymous function really does not have a name.

## Scope

Variables are declared at different scopes. If a variable is decalred with `var` or `let` or `const`, it can be `global` or `local`, but if without using those key words, variable is simply global.

 Note that `let` and `var` have different local scope:

```javascript
function test() {
	if (true) {
    	var a = 'xxxx'
    	let b = 'yyyy'
        console.log(a,b)	// xxxxyyyy is printed
    }
    console.log(a,b) 	// undefined variable b
    //but a is ok to print
    console.log(a)
}
```

Note that `var` is ES5's usage, but ES6 purposed `let` and `const`, thus we can simply pass `var`

## Object

In JavaScript, an object is a set of key-value pair, `const person={}` defines an empty object, and:

```javascript
const rectangle = {
	length: 20,
    width: 20,
    'rec_name': 'oh~my-dir'
}
```

defines a non-empty object.

To access a value in an object:

1. rectangle.length
2. rectangle['rec_name']

```
console.log(rectangle.length, rectangle.rec_name, rectangle['length'], rectangle['rec_name'])
// prints: 20 oh~my-dir 20 oh~my-dir
```

Like any variable in an object, to define a function for an object, use the `anonymous function` style:

```javascript
const person = {
	name: 'Wang',
	getName: function() {
    	return this.name
    }
}
```

Unlike C++, it's easy to add a key-value pair for a js object: 

```javascript
person.age = 22
person.getInfo = function() {
	return this.name + ' ' + this.age
}
```

To manipulate an object, we can use those built-in methods:

* `Object.assign(target, obj1, obj2, ...)`: copy objects without modifying the orginal objects. Return the target(always put '{}' here) 
* `Object.keys(obj)`: get all keys of the object as an array
* `Object.values(obj)`: get all values of the object as an array
* `Object.entries(obj)`: get all key-value pairs as an array
* `obj.hasOwnProperty(x)`: check whether or not obj has a key named x

 ## Higher Order Function

A `higher order function` is a function which takes other function as a parameter, or returns a function:

```javascript
const callback = n => {
	return n ** 2
}
function cube(callback,n) {
	return callback(n) * n
}

// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```

In js there is a global method `setTimeout()` to make a function execute in some time, it takes a callback function, and a time interval:

```javascript
function hello() {
	console.log('Hello!!!')
}
setTimeout(hello, 2000)
```



## Functional Programming

Lastest version of JavaScript introduced lots of built-in methods to solve complicated problems. They take a callback function as arguments:

* `forEach()`: do f() for each item in array

```javascript
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

The most simple example:

```javascript
let a = [1,2,3]
a.forEach(x => console.log(x ** 2))
```

* `map()`: returns a new array where each item is generated by one arr item, done some function

```javascript
let a = [1,2,3]
let b = a.map(x => x ** 2)
//b = [1,4,9]
let c = ['a','b','c']
let d = c.map(x => x.toUpperCase())
//d = ['A','B','C']
```

* `filter()`: returns a new array which satisfy given condition

```javascript
let a = [1,2,4,8,9]
let b = a.filter(x => x % 2 === 0)
// b = [2,4,8]
```

* `reduce()`: from the beginning, pass x to the function

```javascript
let a = [1,2,3]
let b = a.reduce((x,y) => x + y, 0)
// 0 is the init value passed to (x,y) => x + y
```

* `every()`: check whether or not every item satisfy some condition

```javascript
let a = [1,'a', 'b']
let b = a.every(x => typeof x === 'string')
//b = false
a[0] = 'mm'
b = a.every(x => typeof x === 'string')
//b = true
```

* `find()`: return the first item satisfy given condition

```javascript
let a = [1,2,3,999,210]
let b = a.find(x => x > 200)
//b=999
```

* `findIndex()`: like `find()`, but return the item's index

* `some()`: if any item of the arr meets the given condition, return true

```javascript
let a = [false,false,true]
let b = a.some(x => x===true)
```

* `sort()`: the method will modify the original array

```javascript
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})
```

## Set and Map

To create an empty set, use `const s = new Set()`

Or you can create a set from an array: `const x = new Set(arr)`

To add some element into the set: use `s.add(x)`

To check whether some item is in a set: use `s.has(x)`

To remove all elements in the set: use `s.clear()`

### Set ∩ ∪ -：

∪: `let c = [...a, ...b]`

∩: `let c = a.fliter(x => B.has(x))`

diff: `let c = a.fliter(x => !B.has(x))`

### Map:

Likely, `const map = new Map()` will generate an empty map

and `const map = new Map(arr)` will generate a map from an array:

```javascript
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
```

will prints:

> Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
> 3

`m.set('key', 'value')` to modify or add a key-value map

`m.has('key')` to check whether or not a key is in the map

`for i of m`  returns  an array of array:

```javascript
for (const country of countriesMap) {
  console.log(country)
}
```

```javascript
(2) ["Finland", "Helsinki"]
(2) ["Sweden", "Stockholm"]
(2) ["Norway", "Oslo"]
```

## Destructing

```javascript
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
let [n1, , n2] = numbers // 2 is omitted
let [,ntwo, nthree] = numbers	// 1 is omitted
let [num1,num2, ...rest] = [1,2,3,4,5,6,7] // rest=[3,4,5,6,7]
```

The procedure is automatic.

And in an array, if we temporarily have not ensured the value of some index(but the index should be in accord with some value), we can use `undefined` as a  placeholder:

```javascript
const a = [undefined, 'a', 'b']
let [m,n,p] = a	// In this case m is undefined
let [m = 'q', n, p] = a // In this case m has a default value 'p'
```

Specially, in for of loop, destructing can be used so:

```javascript
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third] of fullStack) {
console.log(first, second, third)
}
```

And an object can be destructed too:

```javascript
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle
let { width: w, height: h, area: a, perimeter: p } = rectangle
console.log(width, height, area, perimeter)
console.log(w, h, a, p)
```

Note that the left keys should be the same as the object's keys, or we can use the syntax in line 7 to rename the keys. If the key is not found in the object, then it will be `undefined`, like the `perimeter` in line 6

Interestingly, when defining a function, object destructing is useful:

```javascript
const f = ({width:w, height:h}) => {
    return 2 * (w + h)
}

let rect = {
    width: 114,
    height: 514,
    name: 'some rect'
}

console.log(f(rect))
// output is 1256
```

Similarily in for of loop, object can be destructed:

```javascript
const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}

//output:
//Prepare JS Test 4/1/2020 8:30 true
//Give JS Test 4/1/2020 10:00 false
//Assess Test Result 4/1/2020 1:00 false
```

## Spread

`...` is the so called `spread operator`, it can make an array unfold, which means:

```javascript
const somefunction = (x,y,z) => {return x+y+z}
let arr = [1,2,3]
//without spread operator
res1 = somefunction.apply(null, arr)
res2 = somefunction(arr[0],arr[1],arr[2])
//with spread operator
res3 = somefunction(...arr)
```

As having seen before(set's ∪ calculate),  spread is also useful in generating a new array with two or more original arrays.For example:

```javascript
let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]
let all = [...a, ...b, ...c]
```

And `spread operator` can be used to copy an object too (although so far i don't know what's the point):

```javascript
const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user, title:'instructor'}
```

The most important usage of `spread operator` may be used as a arrow function's parameters, which means if the number of parameters is unlimited, `...args` maybe useful:

```javascript
const f = (...x) => {
	return x.reduce((x,y) => x + y)
}
```

## Regular Expression

> A regular expression or RegExp is a small programming language that helps to find pattern in data

To generate a regex, use `new RegExp(pattern, flag)`, in which `pattern` is to be matched, and `flag` is also a string composed of [g,i,m,s,u,y] :

- g: a global flag which means looking for a pattern in whole text
- i: case insensitive flag(it searches for both lowercase and uppercase)
- m: multiline

Thus this is an example:

```javascript
let regex = new RegExp('love','gi')
```

And it's equivlent with:

```javascript
let regex = /love/gi
```

Note that pattern object is not the same as a  RegExp object, a pattern can be like: `const p = /love/`, and can invoke `test()` method:

```javascript
const s = 'ilovetheworld'
const pattern = /love/
assert(pattern.test(s) === true)
```

But for a RegExp object, it can only be  invoked the `match()` method of strings as the parameter, which returns all matches as an array, or `null` if no match is found. If a `global` flag is used, then there will not be index, input, gourps in the output.

```javascript
const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)
//output:[ 'love', index: 2, input: 'I love JavaScript', groups: undefined ]
//if g is flaged, the output would be: ["love"]
```

And a string can invoke `search(pattern)` method, it will return the first match's index, or -1 if no match.

```javascript
console.log(('I love JavaScript').search(/love/g))
//output: 2
```

A `replace()` method (for string) is useful, when a match is found, it replace the match with ohter string:

```javascript
const txt = 'test replace'
replaced_txt = txt.replace(/ replace/,'')
// the replaced_txt is : 'test'
```

Some pattern syntax:

* `[]`: a set of characters, like:
    * `[a-c]`: contains: a, b, c
    * `[0-3]`: contains: 0, 1, 2, 3
    * `[A-Za-Z0-9]`:contains A-Z, a-z, and 0-9
* `\`: used to escape some special characters
    * `\d`: matches digits(0-9)
    * `\D`: matches non-digits
* `.`: any character expect `'\n'` the newline character
* `^`: means starts with the parttern to be matched ***or*** negation (in a set's beginning)
    * r'^love' means the text to be matched starts with 'love'
    * `r'[^abc]'` means starts with not one of a or b or c
* `$`: means ends with
    * e.g., `r'love$'  means ends with 'love'`
* `*`: means some character occurs zero or many times
* `+`: means occur one or more times

> Note that x+ or x* or x? is the format, which means in regex like /[a].+/, what is be described is the `.`

* `?`: means zero or one times
* `\b`: word bounder, matches with the beginning or ending of a word
    * always double used to describe a exact word, 

* {3}: Exactly 3 characters
* {3,}: At least 3 characters
* {3,8}: 3 to 8 characters
* |: Either or
    * r'apple|banana' mean either of an apple or a banana
* (): Capture and group

Examples in real JavaScript programming listed here:

```javascript
const p1 = /[Aa]pple/g	// matches both apple and Apple
const p2 = /[Aa]pple|[Bb]anana/g	//mathes apple/Apple/banana/Banana
const p3 = /\d+/g //matches 0-9	//one or more digits
const p4 = /[a]./g // in 'banana apple',it matches 'an'/'an'/'a '/'ap'
const p5 = /[a].+/g // matches one time of 'a', and no matter what's followed, matches
//'2132a13 32a1313'.match(p3) => [ 'a13 32a1313' ]
const p6 = /[aA]?px/g	//matches 'px' or 'apx' or 'Apx'
const p7 = /\bA.{3}e\b/	//matches 'Apple' 'Allle' 'Amlee' or something else
// in this case, two `\b` infer the bound of a word, and in this word, A should be at the beginning, e at the end, and in the middle, `.` is described by `{3}`, means 3 any characters.
const p8 = /\b[a-zA-Z]{4}\b/g	//matches any word lengthed 4
const p9 = /^\d{5,6}$/g // matches any number lengthed 5 or 6(described by ^ and $)
//in this case '11451' and '114514' matches, but '1919810' will not 
//if not described by ^ and $, '1919810' matches too
const p10 = /[^123]/g	//any character except '1' '2' '3' matches
//'114514'.match(p10) => ['4','5','4']
```

Note that if one regex is described by both `^` at the beginning and `$` at the end, we call it an `exact match`, we hope the input string to be absolutely the same as the pattern described by our regex.

## Console Object Methods

We use Console object  and document object method only for `testing and debugging` purposes. We are familar with the console object and its log method, but we know little about `document`. It enables us to directly inertact with  the DOM. We wiil meet the document object latter.

* `console.log()`: 

    ```javascript
    console.log('%d %s of JavaScript', 30, 'Days')	//output: 30 Days of JavaScript
    ```

    And it can use `css` style:

    ```javascript
    console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
    console.log(
      '%c30 Days%c %cOf%c %cJavaScript%c',
      'color:green',
      '',
      'color:red',
      '',
      'color:yellow'
    ) // log output green red and yellow text
    ```

* `console.warn()`: log infomation with a `⚠️` emoji(or something else)

    * > inform or warn deprecation of version of a package or bad practices

* `console.error()`: show an error message with a `ⓧ`

* `console.table()`: display data as a table, it accepts an array or an object

```javascript
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(user)
```

* `console.time(x)` and `console.timeEnd(x)`: used for time counting, the same name x is needed.

    * ```javascript
        const countries = [
          ['Finland', 'Helsinki'],
          ['Sweden', 'Stockholm'],
          ['Norway', 'Oslo']
        ]
        
        console.time('Regular for loop')
        for (let i = 0; i < countries.length; i++) {
          console.log(countries[i][0], countries[i][1])
        }
        console.timeEnd('Regular for loop')
        ```

* `console.info()`: just like console.log()

* `console.assert()`: write an error message when the assertion is false, but if true, nothing happens.

    * ```javascript
        console.assert(4 < 3, '4 is greater than 3')
        //output: Assertion failed: 4 is greater than 3
        ```

* `console.group(x)` and `console.groupEnd(x)`: it groupps different log groups, `x` the parameter is like a tag for the `console.log()` invokes inside the group.

* `console.count()`: it prints num of times the `count()` has been called. This helps to count how many times a function has been counted:

```javascript
const func = () => {
  console.count('Function has been called')
}
func()
func()
func()
//Function has been called: 1
//Function has been called: 2
//Function has been called: 3
```

* `console.clear()`: it clears the console.

## Error Handling

JavaScript uses `try-catch-finally` blocks to handle errors like this:

```javascript
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
```

In JavaScript, these types of errors always occurs:

* `ReferenceError`: occurs if an variable is used, but has not been defined.
* `SyntaxError`: if a wrong syntax is used, the error occurs, such as `let a = 2 x 2` but not `let a = 2 * 2`
* `TypeError`: for example a number typed variable try to invoke a string's `match()` method, in this case a `TypeError` will occur.

## Classes

We have seen how to create an singleton object, but it's hard to get a similar one. We use `class` keyword like in python or Java to create a class.

```javascript
class Person {
	constructor(firstName, lastName) {
    	this.firstname = firstName
        this.lastname = lastName
        this.gender = '阿帕奇直升机'	// initial value
    }
    getFullName() {
    	return this.firstname + ' ' + this.lastname
    }
    // getters and setters can be adder here, but i don't like to write them
    // ↓ is an example of static method
    static possibleSkills(){
    	const skills = ['html','css','js','python','C/C++']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    
}

// Inheritance
class Student extends Person {
	dosomething() {
    	console.log('Students do nothing')
    }
   	// example of override
    getFullName() {
    	return 'Student: ' + this.firstname + ' ' + this.lastname
    }
}

const person = new Person('Wang', 'YiFei')
person.age =21	//can directly add a member named age to the created object
console.log(person.getFullName())
const s = new Student('Li','Lei')
s.dosomething()
```

## JSON

JSON is JavaScript's object natation's String expression. JSON is a light weight data format for storing and transporting, specially in a traditional C/S mode app. Its syntax is derived from js's object and array.

> The only difference is that, the key of an object in JSON should be a string with double quotes.

* To make a JSON string an object, use `JSON.parse(some_json_format_string)`
* To make an object to JSON, use `JSON.stringify(obj, replacer, space)`

A `reviver function` can be used as a formatter, see this example:

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)
```

The reviver function turn all member except 'email' to upper cases.

The `JSON.stringify()` method, accepts 3 parameters, the obj is necessary, the other two are optional. The replacer is an array of which we are interested, and the space is a int number(say, the spaces for indentation)

```js
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt)
```

> {
>     "firstName": "Asabeneh",
>     "lastName": "Yetayeh",
>     "country": "Finland",
>     "city": "Helsinki",
>     "age": 250
> }

## Web Storage

> Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies. Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. The data storage limit of cookies in many web browsers is about 4 KB per cookie. Web Storages can store far larger data (at least 5MB) and never transferred to the server. All sites from the same or one origin can store and access the same data.

By using the two js object `sessionStorage` and `localStorage`, js can do mang things on the client-side, which was the rule of the server-side. The two storage objects are similar, the differenct is that the `localStorage` does not have a expiration time, while the `sessionStorage` will be cleared when the page is closed.

### localStorage

> sessionStorage is only available within the browser tab or window session. It’s designed to store data in a single web page session. That means if the window is closed the session data will be removed. Since sessionStorage and localStorage has similar methods, we will focus only on localStorage.

The H5 localStorage will not be cleared even after the browser is closed. 

And sadly, the data of web storage cannot be accessed by different browsers. If the storage object is created in Firefox, then it cannot be accessed in IE, like cookies.

There are 5 methods on local storage:

* `setIten()`: statements like `localStorage.setItem('firstname','Wang')`
    * if an array or an object is the value, it should be transformed by `JSON.stringify(x,undefined,4)`
* `getIten()`:  it takes a key as the parameter and returns the value
* `removeIten()`: it takes the key as a parameter and remove the stored key-value pair
* `clear()`: removes all key-value pair int he localStorage
* `key()`: it takes an index as the parameter, returns the key accordingly.

## Promise

In JavaScript, `promise` is used to  handle asynchronous operations.It allows the asynchronous methods returns values just like synchronous methods which immediately returning the final value, or blocked. The async methods return a `promise` to supply the value latter.

A promise returned by a async method has three possible states:

1. pending: this is the initial state
2. fulfilled: which means the async operation completed successfully
3. rejected: meaning the async operation failed

If a promise is pending, it can be fulfilled with a value, or be rejected with a reason out of which is rejected. While the promised is not fulfilled nor rejected, its associated handlers are queued, waiting for fulfilling or rejecting, then run the handler.

### callback

A callback is a function, which will be executed by others. It's of course a high order function, but it's more than so, it should be invoked by another high order function (latter).

```javascript
//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)
```

### Promise constructor

A promise can be created with `new Promise(f)`, in which the `f` should be a function accepting two parameters, and the two parameters are functions too, one is the `resolve` function, and the other is the `reject` function, such as:

```js
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
```

In practice, as the callback of the promise, the anonymous function always has a `setTimeut()` function:

```js
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)	//skills become the value of result
    } else {
      reject('Something wrong has happened')	//or if rejected, the string becomes the value of the error
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
```

 The meaning of Promise is that, if a promise is fulfilled, the then function goes successfully, while if it is rejected, the function got an error, thrown by reject.

As all programmers know, I/O operations are the most slow, especially the Network I/O. This is where the promise or say asynchronous functions are useful. An example is the `Fetch API`, it is a built-in promise:

```js
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
```

### Async and Await

With `async` and `await` it will be elegant to handle promises.

```js
const square = async function (n) {
  return n * n
}

square(2)	//output:Promise {<resolved>: 4}
```

The key word `async` defines a function which returns a promise, the the return value of `square(2)` is not 4, but a promise with a value 4. 4 is easy, but if it takes time to get, we should use `await` to get the value.

```js
const value = await square(2)
```

`async` and `await` should always occur together.

## Closure

In a function, we can write another function, and the inner function can access the outer one's varibles, this is called closure. For example:

```js
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())	//output: 1
console.log(innerFunc())	//output: 2
console.log(innerFunc())	//output: 3
```

## Write clean code

This is a js style guide.

See day_20

## DOM--Document Object Model

The html document is structured as a js object. Each html element has a different properties, thus we can manipulate it with js. We can access it by tag name, the return value is a `HTMLCollection`:

```js
document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

Or get by class name:

```js
const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

Or get by id:

```js
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>
```

And `querySelector()` gets the first elements by tag name, or id or class; while the `querySelectorAll()` select elements by tag name or class(but no id), the return value is a so called Nodelist.

### adding attribute

The method `setAttribute()` can set any html attribute. For example, use `document.querySelectorAll('a').forEach(x => x.setAttribute('href','https://baidu.com'))` to make all link refer to `baidu.com`

use `element.classList.add()` to append additional class, and it would not override the original one; and use`element.classList.remove()` to remove a existed class.

To add text to html element, make use of the `textContext` property:

```js
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
```

Or if we hope to add something as childs, but not only text, use the `innerHTML`:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    </script>
  </body>
</html>
```

In this example, the lists variable of the script become the `<ul></ul> `tag's child, this cannot be achieved by textContent

And a style can be add likely:

```js
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})
```

### CreateElement

`document.createElement('tagname')` 

```js
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        let title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = 'Creating HTML element DOM Day 2'

        console.log(title)
    </script>
</body>

</html>
```

### append child

To make created elements on the html document, we should append it to some parent as a child element. The html document's body tag can be accessed by `document.body` and append a child by `document.body.appendChild(someElement)`.

Likely, a tag's child can be removed by `element.removeChold(x)`. But it's said to do this by `innerHtml` is better.

## Event Listeners

HTML events：`onclick`, `onchange`, `onmouseover`, `onkeydown`, `onkeyup`, `onload`. The `onclick` has been used to alter a message. And by manipulating the DOM, an event linstener can be added.

```js
selectedElement.addEventListener('eventlistner', function(e) {
  // the activity you want to occur after the event will be in here
})
// or

selectedElement.addEventListener('eventlistner', e => {
  // the activity you want to occur after the event will be in here
})
```

For example:

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>

    <script>
      const button = document.querySelector('button')
      button.addEventListener('click', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })
    </script>
  </body>
</html>
```

or:

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button onclick="clickMe()">Click Me</button>
    <script>
      const clickMe = () => {
        alert('We can attach event on HTML element')
      }
    </script>
  </body>
</html>
```

There are lots of events:

- click - when the element clicked
- dblclick - when the element double clicked
- mouseenter - when the mouse point enter to the element
- mouseleave - when the mouse pointer leave the element
- mousemove - when the mouse pointer move on the element
- mouseover - when the mouse pointer move on the element
- mouseout -when the mouse pointer out from the element
- input -when value enter to input field
- change -when value change on input field
- blur -when the element is not focused
- keydown - when a key is down
- keyup - when a key is up
- keypress - when we press any key
- onload - when the browser has finished loading a page

### input event

In a website, we always fulfill forms, the data should be pocessed. Html has a `input` element, and its data can be access by the elements's `value` field.

We can invoke our process function when some button is clicked, we can also create a event listener for our input element:

```js
 <input type="text" placeholder="say something" />
    <p></p>

    <script>
      const input = document.querySelector('input')
      const p = document.querySelector('p')

      input.addEventListener('input', e => {
        p.textContent = e.target.value
      })
    </script>
```

Likely, the `blur` event occurs when the input field is not on focus, which means we clicked somewhere else, or other windows.

The `keypress` event listen for any key. We can access the key code with `e.keyCode`

```js
    <h1>Key events: Press any key</h1>

    <script>
      document.body.addEventListener('keypress', e => {
        alert(e.keyCode)
      })
    </script>
```

