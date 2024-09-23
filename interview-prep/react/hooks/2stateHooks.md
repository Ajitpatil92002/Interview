# Hooks

Hooks let us to use different React features from your components. We can either use the built-in hooks or combine them to build our own.

## State Hooks

State lets a component "remember" information like user input.

To add state to a component

## useState : declares a state variable that we can update directly

Call useState at the top level of your component to declare a state variable.

useState returns an array with exactly two items:

- The current state of this state variable, initially set to the initial state you provided.
- The set function that lets you change it to any other value in response to interaction.

```javascript
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());

```

when ever the new State depends on the previous state. Insted of passing the new state value directly,we pass a function that receives the current state as an argument and returns the updated state.

This approach ensures that the state update is based on the most recent state,especially when multiple state updates might be batched together.

React batches state updates : It updates the screen after all the event handlers have run and have called their set functions. This prevents multiple re-renders during a single event.

Here, a => a + 1 is your updater function. It takes the pending state and calculates the next state from it.

React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:

a => a + 1 will receive 42 as the pending state and return 43 as the next state.
a => a + 1 will receive 43 as the pending state and return 44 as the next state.
a => a + 1 will receive 44 as the pending state and return 45 as the next state.
There are no other queued updates, so React will store 45 as the current state in the end.

## useReducer :

It is react hook that provider an alternative to `useState` for managing complex state logic.It's especially useful when the state involves multiple sub-values or when the next state depends on the previous state.It's similar to how Redux works but it used locally within a component.

useReducer takes 2 arguments :

1. Reducer function : that determines how the state should change based on the action. It takes the current state and an action as argument and return the new state.
2. Initial state : The initial value of the state, which can be a simple value, an object.

UseReducer return a array with two elements:

1. State: the current state, which is the result of the latest call to the reducer function.
2. Dispatch function: A function that we call to dispatch an action.When we call this fucntion and pass it an action object, React will pass that action and the current state to the reducer function, and then updates the based on the return value of the reducer.

```javascript
import React, { useReducer } from "react";

function Counter() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
```

`type` and `payload` are common properties of an action object that is dispatched to the reducer function.

- The type property is a string that describes the kind of action that is being performed.
- The payload is an optional property that carries the data needed to perform the action. It is the information required to update the state.

```javascript
import React, { useReducer, useEffect } from "react";
import axios from "axios";

// Define the initial state
const initialState = [];

// Define the reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Fetch todos from the API on component mount
  useEffect(() => {
    axios
      .get("/api/todos")
      .then((response) => {
        dispatch({ type: "FETCH_TODOS", payload: response.data });
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  // Add a new todo
  const addTodo = (newTodo) => {
    axios
      .post("/api/todos", newTodo)
      .then((response) => {
        dispatch({ type: "ADD_TODO", payload: response.data });
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  // Update an existing todo
  const updateTodo = (updatedTodo) => {
    axios
      .put(`/api/todos/${updatedTodo.id}`, updatedTodo)
      .then((response) => {
        dispatch({ type: "UPDATE_TODO", payload: response.data });
      })
      .catch((error) => console.error("Error updating todo:", error));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(() => {
        dispatch({ type: "DELETE_TODO", payload: id });
      })
      .catch((error) => console.error("Error deleting todo:", error));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            {todo.value}
            <button
              onClick={() => updateTodo({ ...todo, value: "Updated Value" })}
            >
              Update
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo({ id: Date.now(), value: "New Todo" })}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoList;
```
