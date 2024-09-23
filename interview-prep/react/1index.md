# React

React is javascript library used to build user interfaces for web, it is component based library which make easy to create complex ui using reusable components, and it update the ui efficiently when ever the data changes.It has a special syntax called JSX, which looks similar to HTML but written in javascript (JavaScript XML)

React supports which are built wiht ES5 methods like Google Chrome, Firefox, Mozilla, Microsoft Edge, etc.

## How JSX differs from HTML:

- Embedded in JavaScript:
  JSX is written within JavaScript code, so you can use JavaScript logic directly inside JSX. For example, you can include variables, functions, and expressions.

- Custom Elements:
  In JSX, you can create custom components that look like HTML elements but are actually JavaScript functions .
  For example, `<MyComponent />` is a custom component in JSX.

- Case Sensitivity:
  In HTML, tags are not case-sensitive (`<div>` is the same as `<DIV>`). In JSX, they are case-sensitive, and custom components must start with an uppercase letter (e.g., `<MyComponent />`).

- Attributes:
  JSX uses camelCase for attributes instead of the kebab-case used in HTML. For example, `className` instead of `class`, and `onClick` instead of `onclick`.

- Self-Closing Tags:
  In JSX, all tags must be closed, even self-closing ones like `<img />` or `<br />`.

- JSX Transpilation:
  Before JSX can be used in a browser, it needs to be transpiled (usually by Babel) into regular JavaScript. During this process, JSX is converted into `React.createElement()` calls.

## Advantages of react.js

1. Component-Based Architecture: Reusable components enhance code reusability and maintainability.
2. Virtual DOM: Efficient updates and rendering lead to improved performance.
3. Declarative Syntax: Simplifies code by allowing developers to describe what the UI should look like.
4. SEO-Friendly: Server-side rendering and fast load times help with search engine optimization
5. Cross-Platform Development: React Native allows the use of React to build mobile applications.

## what is Create React App ?

It supports development setting configuration winimal setup.

- it involves ES6 and JSX transpilation
- consists of a Dev server with hot module reloading
- it can develop the script with JS,CSS,picture packaging.
- it also has jest testing system

## What is DOM (Document Object Model)?

The DOM is a programming interface for web documents. It represents the structure of a web page as a tree of objects, where each node corresponds to an element or attribute in the HTML.

It allows JavaScript to manipulate the content, structure, and style of a webpage dynamically.

## What is Virtula DOM?

Virtual DOM is a lightweight, in-memory representation of the actual DOM, used by libraries like React. It's a copy of the real DOM that can be updated without affecting the actual DOM.

When the state of an application changes, the Virtual DOM updates, and React compares this updated Virtual DOM with a pre-update version (diffing). Then, it efficiently updates the real DOM with only the changes.

## Differences Between DOM and Virtual DOM

1.  Performance:
    DOM: Direct manipulation of the DOM can be slow because it updates the entire tree, leading to reflow and repaint.
    Virtual DOM: Updates are faster as only the necessary changes are computed and applied to the actual DOM.

2.  Efficiency:
    DOM: Inefficient when frequent updates occur, as each change can trigger a complete re-render of the UI.
    Virtual DOM: Efficient because it minimizes the number of operations by batching updates and applying only the differences.

3.  State Management:
    DOM: State management is typically done manually, which can be cumbersome in large applications.
    Virtual DOM: Integrated with state management, making it easier to track and update the UI based on state changes.

## Use of KEY in ReactJS

keys are special attributes used to help identify which items in a list have changed, are added, or are removed. They are crucial for optimizing performance and maintaining the correct state of components.

## what are State in React ?

State is value or object whihc is dynamic data that affect the component rendering and behavior of components.
It allows React components to create and manage their own data, which can change over time .

## Are states mutable or immutable?

we can decide to use mutability or immutability, but React requires state to be immutable. In other words, we don't mutate state if we want to change it, instead we make a copy of it and replace the old state with the new copy - that's immutability.

## React Props

Props are inputs to components. They are read-only components that should be kept immutable.

ReactJS Props are used to pass information and methods from a parentcomponent to a child component.

- State is internal and managed by the component itself.
- Props are external and managed by whatever renders the component.
- The child component cannot access states becoz it is block scope but can access by props.

React's `setState()` calls are not guaranteed to be atomic, meaning that multiple calls might be batched together, potentially leading to unexpected behavior.

To avoid issues, especially when relying on the previous state, it's advisable to use the functional form of `setState()` to ensure updates are applied correctly.

### Example of Potential Issue:

```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Twice</button>
    </div>
  );
}
```

### Expected vs. Actual Outcome:

- **Expected**: After clicking the button, you might expect `count` to increase by 2.
- **Actual**: The `count` might only increase by 1. This happens because React may batch the `setCount(count + 1)` calls, and since both use the same initial `count` value (0), they overwrite each other.

### Correct Handling:

To avoid this issue, you can use the functional form of `setState()` that takes the previous state as an argument:

```javascript
const handleClick = () => {
  setCount((prevCount) => prevCount + 1);
  setCount((prevCount) => prevCount + 1);
};
```

## Is there any difference in components with arrow functions and function statements?

## Is there any difference in with arrow functions and function statements?

Arrow functions and regular function statements (also known as function declarations) in JavaScript have some key differences that stem from how they handle `this`, arguments, syntax, and more. Here's a breakdown of those differences:

### 1. **`this` Binding**

- **Arrow Functions**:

  - Arrow functions do not have their own `this` context. Instead, they lexically bind `this` based on the context in which they were defined. This means that `this` inside an arrow function is the same as `this` in the surrounding code.
  - Arrow functions are particularly useful in situations where you want to retain the `this` value from the enclosing context, such as in event handlers within class components or closures.

  ```javascript
  const obj = {
    name: "Arrow",
    arrowFunc: () => {
      console.log(this.name); // 'this' refers to the global object (window in browsers)
    },
  };

  obj.arrowFunc(); // Outputs: undefined (or might refer to a different context depending on the enclosing code)
  ```

- **Function Statements**:

  - Function statements have their own `this` context, which depends on how the function is called. If a function is called as a method of an object, `this` refers to that object. If a function is called in the global context, `this` refers to the global object (e.g., `window` in browsers).

  ```javascript
  const obj = {
    name: "Function",
    funcStatement: function () {
      console.log(this.name); // 'this' refers to obj
    },
  };

  obj.funcStatement(); // Outputs: 'Function'
  ```

### 2. **Hoisting**

- **Arrow Functions**:

  - Arrow functions are not hoisted. They behave like variables defined with `let` or `const`, so they are not available before their definition in the code.

  ```javascript
  console.log(arrowFunc); // ReferenceError: Cannot access 'arrowFunc' before initialization
  const arrowFunc = () => {};
  ```

- **Function Statements**:

  - Function statements are hoisted to the top of their scope. This means you can call the function before its definition in the code.

  ```javascript
  console.log(funcStatement()); // Outputs: 'Function statement called'

  function funcStatement() {
    return "Function statement called";
  }
  ```

### 3. **Syntax and Readability**

- **Arrow Functions**:

  - Arrow functions often have a more concise syntax, especially for one-liners or functions that return a value directly. They can be written in a single line if there is a simple return value.

  ```javascript
  const sum = (a, b) => a + b;
  ```

- **Function Statements**:

  - Function statements tend to be more verbose but can be more readable for more complex functions or when you need a traditional function syntax.

  ```javascript
  function sum(a, b) {
    return a + b;
  }
  ```

### 4. **Method Definitions in Objects**

- **Arrow Functions**:

  - When using arrow functions as methods in objects, `this` refers to the enclosing context, which can lead to unexpected results if you expect `this` to refer to the object itself.

  ```javascript
  const obj = {
    name: "My Object",
    arrowMethod: () => {
      console.log(this.name); // 'this' does not refer to the object
    },
  };

  obj.arrowMethod(); // Outputs: undefined or refers to the global context
  ```

- **Function Statements**:

  - When using function statements as methods in objects, `this` correctly refers to the object itself.

  ```javascript
  const obj = {
    name: "My Object",
    method() {
      console.log(this.name); // 'this' refers to the object
    },
  };

  obj.method(); // Outputs: 'My Object'
  ```
