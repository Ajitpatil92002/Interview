# Contexts Hook

Context Hooks in React allow components to share data without having to explicitly pass props down through every level of the component tree.
This is particularly useful for global or shared state, like yser authentication, theme settigs or language preferences.

## useContext Hook

`useContext` is a hook that allows a component to consume the value from a React Context. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

```javascript
import React, { createContext, useContext, useState } from "react";

// Create a context with a default value
const ThemeContext = createContext("light");

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
```

### What Are Context Hooks?

Context Hooks in React allow components to share data without having to explicitly pass props down through every level of the component tree. This is particularly useful for global or shared state, like user authentication, theme settings, or language preferences.

The main hook related to context is `useContext`, which enables function components to access the nearest value provided by a `Context.Provider`.

### `useContext` Explained

`useContext` is a hook that allows a component to consume the value from a React Context. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### Basic Syntax

```javascript
const value = useContext(SomeContext);
```

### How It Works

1. **Create a Context**:
   - First, you create a context using `React.createContext()`. This context object comes with a `Provider` component and a `Consumer` component.
2. **Provide a Value**:

   - Wrap the components that need access to the context value with the `Context.Provider`. The `Provider` component takes a `value` prop that will be available to any component in the tree that consumes the context.

3. **Consume the Context**:
   - Use the `useContext` hook within a component to access the value provided by the nearest `Context.Provider`.

### Example: Theme Context

Let's say you have a theme (dark or light) that you want to apply across your application:

#### 1. Create the Context

```javascript
import React, { createContext, useContext, useState } from "react";

// Create a context with a default value
const ThemeContext = createContext("light");
```

#### 2. Provide the Context Value

```javascript
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

#### 3. Consume the Context Value

```javascript
function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

#### 4. Use the Provider in Your App

```javascript
function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
```

### Explanation

- **Creating Context**: `ThemeContext` is created using `createContext('light')`, which provides a default value of `'light'`.
- **Providing Context Value**: The `ThemeProvider` component wraps the part of the app where the theme context should be available. The `value` prop of `ThemeContext.Provider` provides the current theme and a function to update it.
- **Consuming Context**: The `useContext(ThemeContext)` hook inside `ThemedComponent` allows the component to read the current theme and update it using `setTheme`.

### Why Use `useContext`?

- **Avoid Prop Drilling**: `useContext` helps you avoid passing props down through many layers of components, simplifying your code and making it easier to maintain.
- **Centralized State Management**: For certain types of state (like themes, user settings, or authenticated user information), it’s more efficient and clean to manage this state centrally using context rather than passing it through props.

- **Global Access**: Any component within the `Provider` tree can access the context, making it easy to share data globally across your application.

### Common Use Cases for `useContext`

- **Theme Management**: Sharing light/dark mode across the app.
- **Authentication**: Managing the logged-in user's information and access rights.
- **Language Preferences**: Providing internationalization (i18n) settings across the app.
- **Configuration Settings**: Centralizing app-wide configuration, like API base URLs or feature flags.
