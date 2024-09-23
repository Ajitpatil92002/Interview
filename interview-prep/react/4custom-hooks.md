### Understanding Custom Hooks in React: What, Why, When, and How

Custom Hooks in React allow developers to **extract reusable logic** from components, helping to reduce code duplication and make the code more readable and maintainable. They are essentially JavaScript functions that can use React’s built-in hooks like `useState`, `useEffect`, `useContext`, etc.

In this blog, we’ll dive into **what custom hooks are**, **why and when you should use them**, **how to create them**, and provide a **real-world example**.

---

## **What Are Custom Hooks?**

A **custom hook** is a JavaScript function that starts with the word "use" and allows you to encapsulate and reuse common logic between components. Custom hooks can contain stateful logic, side effects, and other functionality that can be shared across multiple components without rewriting the same code.

Custom hooks are not part of React itself—they're simply **JavaScript functions** that can use React hooks internally.

---

## **Why Use Custom Hooks?**

### 1. **Reusability of Logic**

Custom hooks allow you to encapsulate and share **reusable logic** across different components. If you find yourself repeating the same stateful logic, data fetching, or effect logic across different components, a custom hook can simplify your code.

### 2. **Separation of Concerns**

By moving logic into custom hooks, you keep your components clean and focused on rendering UI. The logic is extracted into a hook, making your code **modular** and **easier to test**.

### 3. **Cleaner Code**

Custom hooks reduce duplication and can drastically **simplify** your components, especially when handling complex logic like data fetching, form handling, or subscriptions.

---

## **When to Use Custom Hooks?**

- **Repetitive Logic**: When you notice that multiple components are sharing the same logic (e.g., fetching data, handling timers, managing forms, etc.), it’s a good idea to move that logic into a custom hook.
- **Separation of UI and Logic**: When you want to keep your UI components clean and only focused on rendering, while moving the logic into a custom hook.
- **Handling Side Effects**: If you need to handle complex side effects like data fetching, subscriptions, or interacting with external services, custom hooks can help organize this code effectively.

### Examples of When You’d Use Custom Hooks:

- Fetching data from APIs.
- Handling authentication logic.
- Form state management (e.g., validation).
- Managing browser events like scrolling or resizing.
- Working with local storage or other browser APIs.

---

## **How to Create a Custom Hook?**

### Steps to Create a Custom Hook:

1. **Start with a Function**: Create a function that starts with the word `use`. This helps React identify it as a custom hook.
2. **Use Built-in Hooks Inside**: Inside the function, you can use React’s built-in hooks like `useState`, `useEffect`, or `useContext` to create logic that can be shared across components.
3. **Return Values**: Return any state, values, or functions from the custom hook that you want your components to use.

### Custom Hook Example:

Let’s walk through a real-world example to understand how custom hooks work.

---

## **Real-World Example: Fetching Data with a Custom Hook**

Imagine you have multiple components in your app that need to fetch data from an API. Instead of writing the data-fetching logic in every component, you can create a custom hook to handle it.

### Step 1: Create the Custom Hook

```javascript
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

### Explanation:

- **`useState`**: Manages `data`, `loading`, and `error` states.
- **`useEffect`**: Performs the side effect of fetching data from the provided `url`.
- The hook **returns** an object containing the `data`, `loading` status, and any potential `error` that occurred during the fetch.

### Step 2: Use the Custom Hook in Components

Now that we have a custom `useFetch` hook, we can use it in any component where we need to fetch data.

```javascript
import React from "react";
import useFetch from "./useFetch";

const UserList = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
```

### Step 3: Use the Same Hook in Another Component

You can now reuse this `useFetch` hook in another component, without rewriting the fetch logic.

```javascript
import React from "react";
import useFetch from "./useFetch";

const PostList = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
```

### Benefits of Using the Custom Hook:

- **Reusability**: The data-fetching logic is now reusable across multiple components.
- **Separation of Concerns**: The component’s responsibility is only to render UI, while the fetching logic is abstracted into the custom hook.
- **Simplified Code**: Both `UserList` and `PostList` are clean and simple, with no repetitive fetching logic.

---

## **Additional Real-World Examples of Custom Hooks**

### 1. **Custom Hook for Authentication**

You might create a custom hook for checking if the user is authenticated:

```javascript
import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;
```

You can now use this custom hook in any component that needs to check if the user is authenticated:

```javascript
import React from "react";
import useAuth from "./useAuth";

const Dashboard = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <p>Please log in to access the dashboard</p>;
  }

  return <h1>Welcome to your Dashboard</h1>;
};

export default Dashboard;
```

### 2. **Custom Hook for Debouncing Input**

A common pattern is to debounce an input to prevent too many updates when typing. You can create a custom `useDebounce` hook.

```javascript
import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
```

Now, you can use this hook in an input field to debounce the search query:

```javascript
import React, { useState } from "react";
import useDebounce from "./useDebounce";

const Search = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      // Perform search with debounced query
      console.log("Search for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default Search;
```

---

### Conclusion

Custom hooks are a powerful way to **reuse logic** across multiple components, **separate concerns**, and keep your codebase **clean and maintainable**. They can be used to handle a variety of tasks, including data fetching, form handling, authentication, debouncing, and much more.

By learning how to create and use custom hooks effectively, you'll enhance your ability to build **modular, scalable applications** and write **cleaner, more maintainable code**.

---

### Practice Questions for Interviews:

1. What is a custom hook in React, and why would you use one?
2. How do you create a custom hook for data fetching

? 3. When would you prefer using a custom hook over repeating logic in components? 4. Can you explain a scenario where you used custom hooks in a real project? 5. How would you handle authentication or form validation using custom hooks?

By mastering custom hooks, you'll be well-prepared for React-related questions in coding interviews.
