# Effect Hooks

Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

## useEffect

`useEffect` is a hook that allows you to perform side effects in function components.It run after every render by default but can be configured to run only when specific dependencies change.

In React, the primary Effect Hook is `useEffect`, which replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` that are used in class components.

### Basic Syntax

```javascript
useEffect(() => {
  // Code to run after the component renders or updates
  return () => {
    // Optional cleanup function
  };
}, [dependencies]);
```

### How It Works

1. **Effect Function**: The function you pass to `useEffect` contains the side effect you want to perform. This could be data fetching, manually updating the DOM, subscribing to events, etc.

2. **Cleanup Function** (optional): If your effect requires cleanup (like removing event listeners or canceling network requests), you return a cleanup function from the effect function. This cleanup function runs before the component is unmounted or before the effect is re-run due to a dependency change.

3. **Dependencies Array** (optional): You can provide an array of dependencies as the second argument. The effect will only run if one of the dependencies has changed since the last render. If you omit the array, the effect runs after every render. If you pass an empty array `[]`, the effect runs only once after the initial render.

### Example: Fetching Data

Here’s how you might use `useEffect` to fetch data from an API when the component mounts:

```javascript
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Effect to fetch data
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    // Cleanup function (if needed)
    return () => {
      // Example: cancel network request or remove event listeners
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### Example: Subscribing to Events

If you want to add an event listener to the window and clean it up when the component unmounts:

```javascript
useEffect(() => {
  function handleResize() {
    console.log("Window resized:", window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  // Cleanup the event listener when the component unmounts
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // Empty array ensures this effect runs only once
```

### Common Uses of `useEffect`

- **Fetching data from an API**
- **Subscribing to or unsubscribing from events (e.g., WebSocket)**
- **Directly interacting with the DOM (e.g., managing focus)**
- **Setting up intervals or timeouts**
- **Cleaning up resources when a component unmounts**

## useLayoutEffect

useLayoutEffect fires before the browser repaints the screen. You can measure layout here.
