### Differences between `setTimeout` and `setInterval`

Both `setTimeout` and `setInterval` are asynchronous JavaScript functions used for managing delays or repeated actions, but they serve different purposes:

---

### 1. **`setTimeout()`**

- **Purpose**: Executes a function **once** after a specified delay (in milliseconds).

  ```javascript
  setTimeout(() => {
    console.log("Executed after 2 seconds");
  }, 2000);
  ```

- **Parameters**:

  - **Callback Function**: The function to be executed.
  - **Delay (ms)**: The time to wait before executing the function (in milliseconds).

- **Use Case**: When you need to execute a function **after a certain delay**, but only once.

- **Example**: Triggering an event or API call after a delay, such as showing a notification to a user after they log in:

  ```javascript
  setTimeout(() => {
    console.log("Your session will expire soon!");
  }, 5000);
  ```

- **Execution Flow**:

  1. JavaScript schedules the execution of the function after the delay.
  2. The function is executed **once**, and that's it.

- **Cancellation**: You can cancel the scheduled execution using `clearTimeout()` by passing the ID returned by `setTimeout`.

  ```javascript
  const timeoutId = setTimeout(() => {
    console.log("This won't be executed");
  }, 3000);

  clearTimeout(timeoutId); // Cancels the scheduled task
  ```

---

### 2. **`setInterval()`**

- **Purpose**: Executes a function **repeatedly** at a specified interval (in milliseconds).

  ```javascript
  setInterval(() => {
    console.log("Executed every 2 seconds");
  }, 2000);
  ```

- **Parameters**:

  - **Callback Function**: The function to be executed.
  - **Interval (ms)**: The time between each execution of the function (in milliseconds).

- **Use Case**: When you need to execute a function **repeatedly** at regular intervals.

- **Example**: Running a task repeatedly, such as updating a countdown timer or polling for data:

  ```javascript
  setInterval(() => {
    console.log("Checking for new messages every 5 seconds");
  }, 5000);
  ```

- **Execution Flow**:

  1. JavaScript schedules the function to run **repeatedly** at the defined interval.
  2. The function continues to run indefinitely (or until manually stopped).

- **Cancellation**: You can stop the repeated execution using `clearInterval()` by passing the ID returned by `setInterval`.

  ```javascript
  const intervalId = setInterval(() => {
    console.log("This will keep logging every second");
  }, 1000);

  clearInterval(intervalId); // Stops the repeated task
  ```

---

### Key Differences

| Feature          | `setTimeout()`                               | `setInterval()`                             |
| ---------------- | -------------------------------------------- | ------------------------------------------- |
| **Purpose**      | Executes a function once after a delay       | Repeatedly executes a function at intervals |
| **Execution**    | Single execution after delay                 | Repeated execution until stopped            |
| **Use Case**     | Delayed actions like animations or API calls | Repeated actions like timers or polling     |
| **Cancellation** | `clearTimeout()`                             | `clearInterval()`                           |

---

### When to Use

#### **Use `setTimeout()` when**:

- You need to delay an action or function **only once**.
- Example: Show a message or make an API request after a certain delay (e.g., displaying a welcome message 3 seconds after a user logs in).

```javascript
setTimeout(() => {
  console.log("Welcome to our site!");
}, 3000);
```

#### **Use `setInterval()` when**:

- You need to execute an action **repeatedly** at fixed intervals.
- Example: Running a timer or checking for updates every few seconds (e.g., polling an API every 10 seconds for new data).

```javascript
setInterval(() => {
  console.log("Fetching new data every 10 seconds...");
}, 10000);
```

### Performance Considerations:

- **setInterval** should be used cautiously in cases where repeated tasks may pile up if the previous execution hasn’t finished. Use `setTimeout` within the callback of a task for **dynamic intervals**, where the delay depends on when the previous task completes.

  ```javascript
  function pollData() {
    setTimeout(() => {
      console.log("Fetching data...");
      pollData(); // Schedule next polling only after the current one finishes
    }, 5000);
  }

  pollData();
  ```

This technique avoids overlapping tasks and is preferable for operations that involve network calls or heavy computation.
