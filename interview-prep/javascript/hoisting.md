# Explain hoisting and is let, const are also hoisted and difference between let,cont adn var

- when we console.log for any var vairable or invoke the function its get executed for var its undefined and funtion get executed.
- this happen becoz of when we run the code memory is allocated for all variables and functions. Variables are initialized with the special value `undefined`, while functions are stored as their entire code and it is attached to window
- and in case of let and const it also hoisted but it is not attached to window thats why we cant access the let and const befoer initialising them. the memory is allocated in different context.
- they remain in a "temporal dead zone" (TDZ) from the start of the block until their declaration is encountered. This is why accessing them before initialization results in a `ReferenceError`.
- thats why the let and cont are called block scope (block scope means where the variable can be accecssed).
- the let and const with the same variable name cannot be redecalred in same scope
- but let can be reinitialsed with another value.
- the const cannot be redeclared and reinitialsed in same scope.
- we can shodow the var variable with let and also let with let and var with var.
- but not let with var this is illegal shadowing, the scope of variable should not go out of the bouandry

# Hoisting Explained: Are `let` and `const` Also Hoisted? Differences Between `let`, `const`, and `var`

### What is Hoisting?

- When we use `console.log` for any `var` variable or invoke a function before its declaration, the `var` variable returns `undefined`, and the function is executed successfully.
- This occurs because, when the code runs, memory is allocated for all variables and functions. Variables are initialized with the special value `undefined`, while functions are stored with their entire code and are attached to the `window` object.

### Example of Hoisting with `var` and Functions

```javascript
console.log(myVar); // Outputs: undefined
myFunction(); // Outputs: "Hello, World!"

var myVar = 10;

function myFunction() {
  console.log("Hello, World!");
}
```

### What About `let` and `const`?

- `let` and `const` are also hoisted, but they are not initialized with `undefined` and are not attached to the global `window` object. Instead, they remain in a "temporal dead zone" (TDZ) from the start of the block until their declaration is encountered. This is why accessing them before initialization results in a `ReferenceError`.
- The memory for `let` and `const` is allocated differently, which is why they cannot be accessed before they are declared.

### Example of Hoisting with `let` and `const`

```javascript
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization

let myLet = 20;
const myConst = 30;
```

### Block Scope

- `let` and `const` are block-scoped, meaning they are only accessible within the block (i.e., `{}`) in which they are declared. In contrast, `var` is function-scoped, meaning it is accessible within the entire function.

### Differences Between `let`, `const`, and `var`

- **Redeclaration**:

  - `var` can be redeclared in the same scope.
  - `let` and `const` cannot be redeclared in the same scope.

- **Reinitialization**:
  - `var` can be reinitialized.
  - `let` can also be reinitialized within the same scope.
  - `const` cannot be reinitialized once assigned.

### Example of Redeclaration and Reinitialization

```javascript
var myVar = 10;
var myVar = 20; // Valid

let myLet = 10;
// let myLet = 20; // Invalid: SyntaxError

myLet = 30; // Valid: Reinitialization is allowed for let

const myConst = 10;
// myConst = 20; // Invalid: TypeError: Assignment to constant variable.
```

### Shadowing

- You can shadow a `var` variable with `let`, or shadow a `let` variable with another `let` within a nested block.
- However, shadowing a `let` variable with `var` within the same block is considered **illegal shadowing**.
- the scope of variable should not go out of the bouandry

### Example of Shadowing

```javascript
var myVar = 10;

if (true) {
  let myVar = 20; // Valid: Shadowing var with let
  console.log(myVar); // Outputs: 20
}

let myLet = 30;

if (true) {
  let myLet = 40; // Valid: Shadowing let with let
  console.log(myLet); // Outputs: 40
}

// var myLet = 50; // Invalid: SyntaxError - Illegal shadowing
```
