# How JavaScript Code is Executed

- When JavaScript code is run, memory is allocated for all variables and functions. Variables are initialized with the special value `undefined`, while functions are stored as their entire code.
- This process allows us to access `var` variables and invoke functions before they are declared—a behavior known as hoisting.
- All of this happens within the **Execution Context**, specifically the **Global Execution Context**. The Global Execution Context is the first item pushed onto the **Call Stack**.
- Whenever a function is invoked or a block is executed, a new execution context is created and pushed onto the call stack.
- If any Web APIs are invoked (such as `setTimeout`, DOM manipulation, or `fetch`), the callback provided to them is placed into the **Callback Queue** once the task is completed.
- Promises, on the other hand, are placed in the **Microtask Queue**, which has a higher priority than the Callback Queue. The **Event Loop** continuously monitors the Microtask Queue and the Callback Queue. If the call stack is empty, tasks from the Microtask Queue are executed first, followed by those in the Callback Queue.
