# Performance Hooks

Performance hooks in React, specifically `useMemo` and `useCallback`, are used tp optimize the performance of our components by memoizing(caching) values or functions.

This prevents unnecessary re-renders or recalculations, which can be particularly beneficial in complex or large applications where performance is a concern.

### `useMemo`

`useMemo` is a hook that memoizes the result of a calculation or computation. It only recomputes the result when one of its dependencies changes, allowing you to avoid expensive calculations on every render.

#### How It Works

1. **Computation Function**: The first argument to `useMemo` is a function that performs a calculation or returns a value.
2. **Dependencies Array**: The second argument is an array of dependencies. The computation function only re-runs if one of these dependencies changes.
3. **Memoized Value**: The result of the computation is cached (memoized) and returned on subsequent renders, as long as the dependencies haven't changed.

#### Example: Expensive Calculation

```javascript
import React, { useState, useMemo } from "react";

function ExpensiveCalculationComponent({ a, b }) {
  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    return a * b;
  }, [a, b]);

  return <div>Result: {expensiveResult}</div>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveCalculationComponent a={5} b={10} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
}
```

- **In this example**: The expensive calculation (`a * b`) is only recomputed when `a` or `b` changes. This prevents unnecessary calculations when the component re-renders due to changes in unrelated state (`count`).

### `useCallback` Explained

`useCallback` is a hook that memoizes a function definition so that the same function instance is returned across renders, unless its dependencies change.
This is particularly useful when passing callback functions to child components that depend on reference equality to avoid unnecessary re-renders.

#### Basic Syntax

```javascript
const memoizedCallback = useCallback(() => {
  // function logic
}, [dependencies]);
```

#### How It Works

1. **Callback Function**: The first argument is the function you want to memoize.
2. **Dependencies Array**: The second argument is an array of dependencies. The function is re-created only if one of these dependencies changes.
3. **Memoized Function**: The same function instance is returned on subsequent renders as long as the dependencies haven't changed.

#### Example: Memoized Callback for Event Handler

```javascript
import React, { useState, useCallback } from "react";

function Button({ onClick }) {
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Button onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}
```

- **In this example**: The `handleClick` function is memoized with `useCallback`, so the `Button` component does not re-render unnecessarily when `App` re-renders. The callback is recreated only if the dependencies change (in this case, there are no dependencies, so it's stable across renders).

### Key Differences Between `useMemo` and `useCallback`

- **`useMemo`**:

  - Memoizes the _result_ of a function or computation.
  - Used to avoid expensive calculations on every render.
  - Returns the memoized value.

- **`useCallback`**:
  - Memoizes the _function itself_.
  - Used to prevent unnecessary re-creation of functions, especially when passing them as props.
  - Returns the memoized function.

### When to Use `useMemo` and `useCallback`

- **`useMemo`**:

  - When you have an expensive calculation that shouldn’t run on every render.
  - Example: Complex data processing, filtering large lists, or calculating derived state.

- **`useCallback`**:
  - When you need to pass a stable reference to a callback function, especially to child components that rely on `React.memo` or similar optimizations.
  - Example: Event handlers passed down as props to optimize child component rendering.
