## 1. Implement Stack using Arrays

### Definition:

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements are added and removed from the top of the stack.

### Operations:

- **Push**: Adds an element to the top of the stack.
- **Pop**: Removes the top element from the stack.
- **Peek**: Retrieves the top element without removing it.
- **IsEmpty**: Checks if the stack is empty.

### C++ Implementation:

```cpp
#include <iostream>
using namespace std;

class Stack {
    int *arr;
    int top;
    int capacity;

public:
    Stack(int size) {
        capacity = size;
        arr = new int[capacity];
        top = -1; // Indicates an empty stack
    }

    void push(int value) {
        if (top == capacity - 1) {
            cout << "Stack Overflow!" << endl;
            return;
        }
        arr[++top] = value; // Increment top and add value
    }

    void pop() {
        if (isEmpty()) {
            cout << "Stack Underflow!" << endl;
            return;
        }
        top--; // Decrease top to remove the element
    }

    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty!" << endl;
            return -1; // Or any other error value
        }
        return arr[top]; // Return the top element
    }

    bool isEmpty() {
        return top == -1; // Check if top is -1
    }
};
```

### Explanation:

1. **Initialization**: The stack is initialized with a specified size and the top pointer is set to -1, indicating the stack is empty.
2. **Push Operation**: Before adding an element, we check if the stack is full (i.e., if `top` equals `capacity - 1`). If not, we increment `top` and assign the new value to `arr[top]`.
3. **Pop Operation**: We check if the stack is empty. If not, we simply decrement `top`, effectively removing the top element.
4. **Peek Operation**: This retrieves the top element without modifying the stack.
5. **IsEmpty Operation**: It checks if `top` is -1.

### Java Implementation:

```java
class Stack {
    private int[] arr;
    private int top;
    private int capacity;

    public Stack(int size) {
        capacity = size;
        arr = new int[capacity];
        top = -1;
    }

    public void push(int value) {
        if (top == capacity - 1) {
            System.out.println("Stack Overflow!");
            return;
        }
        arr[++top] = value;
    }

    public void pop() {
        if (isEmpty()) {
            System.out.println("Stack Underflow!");
            return;
        }
        top--;
    }

    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack is empty!");
            return -1;
        }
        return arr[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }
}
```

### Python Implementation:

```python
class Stack:
    def __init__(self, size):
        self.capacity = size
        self.stack = []

    def push(self, value):
        if len(self.stack) == self.capacity:
            print("Stack Overflow!")
            return
        self.stack.append(value)  # Add value to the stack

    def pop(self):
        if self.is_empty():
            print("Stack Underflow!")
            return
        return self.stack.pop()  # Remove and return the top value

    def peek(self):
        if self.is_empty():
            print("Stack is empty!")
            return None
        return self.stack[-1]  # Return the top value without removing it

    def is_empty(self):
        return len(self.stack) == 0
```

---

## 2. Implement Queue using Arrays

### Definition:

A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front.

### Operations:

- **Enqueue**: Adds an element to the rear of the queue.
- **Dequeue**: Removes the front element from the queue.
- **Peek**: Retrieves the front element without removing it.
- **IsEmpty**: Checks if the queue is empty.

### C++ Implementation:

```cpp
#include <iostream>
using namespace std;

class Queue {
    int *arr;
    int front, rear, capacity;

public:
    Queue(int size) {
        capacity = size;
        arr = new int[capacity];
        front = rear = -1;
    }

    void enqueue(int value) {
        if (rear == capacity - 1) {
            cout << "Queue Overflow!" << endl;
            return;
        }
        if (front == -1) front = 0; // If it's the first element
        arr[++rear] = value; // Increment rear and add value
    }

    void dequeue() {
        if (isEmpty()) {
            cout << "Queue Underflow!" << endl;
            return;
        }
        cout << "Dequeued: " << arr[front] << endl;
        if (front == rear) front = rear = -1; // Reset queue
        else front++; // Increment front
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return -1; // Or any other error value
        }
        return arr[front]; // Return the front element
    }

    bool isEmpty() {
        return front == -1; // Check if front is -1
    }
};
```

### Explanation:

1. **Initialization**: The queue is initialized with a specified size, and both `front` and `rear` are set to -1.
2. **Enqueue Operation**: We check if the queue is full. If not, we set `front` to 0 if it's the first element, increment `rear`, and assign the new value.
3. **Dequeue Operation**: We check if the queue is empty. If not, we display the dequeued element, and if `front` equals `rear`, we reset both to -1.
4. **Peek Operation**: Retrieves the front element without removing it.
5. **IsEmpty Operation**: Checks if the queue is empty.

### Java Implementation:

```java
class Queue {
    private int[] arr;
    private int front, rear, capacity;

    public Queue(int size) {
        capacity = size;
        arr = new int[capacity];
        front = rear = -1;
    }

    public void enqueue(int value) {
        if (rear == capacity - 1) {
            System.out.println("Queue Overflow!");
            return;
        }
        if (front == -1) front = 0;
        arr[++rear] = value;
    }

    public void dequeue() {
        if (isEmpty()) {
            System.out.println("Queue Underflow!");
            return;
        }
        System.out.println("Dequeued: " + arr[front]);
        if (front == rear) front = rear = -1;
        else front++;
    }

    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return -1;
        }
        return arr[front];
    }

    public boolean isEmpty() {
        return front == -1;
    }
}
```

### Python Implementation:

```python
class Queue:
    def __init__(self, size):
        self.capacity = size
        self.queue = []

    def enqueue(self, value):
        if len(self.queue) == self.capacity:
            print("Queue Overflow!")
            return
        self.queue.append(value)  # Add value to the queue

    def dequeue(self):
        if self.is_empty():
            print("Queue Underflow!")
            return
        return self.queue.pop(0)  # Remove and return the front value

    def peek(self):
        if self.is_empty():
            print("Queue is empty!")
            return None
        return self.queue[0]  # Return the front value without removing it

    def is_empty(self):
        return len(self.queue) == 0
```

---

## 3. Implement Stack using Queue (using a single queue)

### Definition:

A stack can be implemented using a single queue by utilizing the queue's enqueue and dequeue operations to manage the order of elements.

### Operations:

- **Push**: Adds an element to the top of the stack.
- **Pop**: Removes the top element from the stack.
- **Peek**: Retrieves the top element without removing it.

### C++ Implementation:

```cpp
#include <iostream>
#include <queue>
using namespace std;

class Stack {
    queue<int> q;

public:
    void push(int value) {
        q.push(value); // Add value to the queue
        // Rotate the queue to maintain stack order
        for (int i = 0; i < q.size() - 1; i++) {
            q.push(q.front());
            q.pop();
        }
    }

    void pop() {
        if (q.empty()) {
            cout << "Stack is empty!" << endl;
            return;
        }
        q.pop(); // Remove the front element
    }

    int peek() {
        if (q.empty()) {
            cout << "Stack is empty!" << endl;


            return -1;
        }
        return q.front(); // Return the front element
    }

    bool isEmpty() {
        return q.empty(); // Check if queue is empty
    }
};
```

### Explanation:

1. **Push Operation**: When pushing an element, it is added to the queue. To maintain stack order, we rotate the queue, moving all elements before the new element to the back.
2. **Pop Operation**: Removes the front element, which represents the top of the stack.
3. **Peek Operation**: Retrieves the front element without removing it.
4. **IsEmpty Operation**: Checks if the queue is empty.

### Java Implementation:

```java
import java.util.LinkedList;
import java.util.Queue;

class Stack {
    private Queue<Integer> q;

    public Stack() {
        q = new LinkedList<>();
    }

    public void push(int value) {
        q.add(value);
        for (int i = 0; i < q.size() - 1; i++) {
            q.add(q.poll()); // Rotate the queue
        }
    }

    public void pop() {
        if (q.isEmpty()) {
            System.out.println("Stack is empty!");
            return;
        }
        q.poll(); // Remove the front element
    }

    public int peek() {
        if (q.isEmpty()) {
            System.out.println("Stack is empty!");
            return -1;
        }
        return q.peek(); // Return the front element
    }

    public boolean isEmpty() {
        return q.isEmpty();
    }
}
```

### Python Implementation:

```python
from queue import Queue

class Stack:
    def __init__(self):
        self.q = Queue()

    def push(self, value):
        self.q.put(value)
        # Rotate the queue to maintain stack order
        for _ in range(self.q.qsize() - 1):
            self.q.put(self.q.get())  # Move the front to the back

    def pop(self):
        if self.q.empty():
            print("Stack is empty!")
            return
        self.q.get()  # Remove the front element

    def peek(self):
        if self.q.empty():
            print("Stack is empty!")
            return None
        return self.q.queue[0]  # Return the front element

    def is_empty(self):
        return self.q.empty()
```

---

## 4. Implement Queue using Stack (0(1) amortized method)

### Definition:

A queue can be implemented using two stacks, allowing amortized O(1) complexity for enqueue and dequeue operations.

### Operations:

- **Enqueue**: Adds an element to the rear of the queue.
- **Dequeue**: Removes the front element from the queue.

### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
using namespace std;

class Queue {
    stack<int> s1, s2;

public:
    void enqueue(int value) {
        s1.push(value); // Push to stack 1
    }

    void dequeue() {
        if (s2.empty()) {
            while (!s1.empty()) {
                s2.push(s1.top()); // Move elements to stack 2
                s1.pop();
            }
        }
        if (s2.empty()) {
            cout << "Queue is empty!" << endl;
            return;
        }
        cout << "Dequeued: " << s2.top() << endl;
        s2.pop(); // Pop from stack 2
    }

    int peek() {
        if (s2.empty()) {
            while (!s1.empty()) {
                s2.push(s1.top()); // Move elements to stack 2
                s1.pop();
            }
        }
        if (s2.empty()) {
            cout << "Queue is empty!" << endl;
            return -1;
        }
        return s2.top(); // Return the top of stack 2
    }

    bool isEmpty() {
        return s1.empty() && s2.empty(); // Check if both stacks are empty
    }
};
```

### Explanation:

1. **Enqueue Operation**: Simply push the element onto the first stack.
2. **Dequeue Operation**: If the second stack is empty, we transfer all elements from the first stack to the second stack, reversing their order. The top of the second stack represents the front of the queue.
3. **Peek Operation**: Similar to dequeue, but only retrieves the element without removing it.
4. **IsEmpty Operation**: Checks if both stacks are empty.

### Java Implementation:

```java
import java.util.Stack;

class Queue {
    private Stack<Integer> s1;
    private Stack<Integer> s2;

    public Queue() {
        s1 = new Stack<>();
        s2 = new Stack<>();
    }

    public void enqueue(int value) {
        s1.push(value); // Push to stack 1
    }

    public void dequeue() {
        if (s2.isEmpty()) {
            while (!s1.isEmpty()) {
                s2.push(s1.pop()); // Move elements to stack 2
            }
        }
        if (s2.isEmpty()) {
            System.out.println("Queue is empty!");
            return;
        }
        System.out.println("Dequeued: " + s2.pop()); // Pop from stack 2
    }

    public int peek() {
        if (s2.isEmpty()) {
            while (!s1.isEmpty()) {
                s2.push(s1.pop()); // Move elements to stack 2
            }
        }
        if (s2.isEmpty()) {
            System.out.println("Queue is empty!");
            return -1;
        }
        return s2.peek(); // Return the top of stack 2
    }

    public boolean isEmpty() {
        return s1.isEmpty() && s2.isEmpty(); // Check if both stacks are empty
    }
}
```

### Python Implementation:

```python
class Queue:
    def __init__(self):
        self.s1 = []
        self.s2 = []

    def enqueue(self, value):
        self.s1.append(value)  # Push to stack 1

    def dequeue(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())  # Move elements to stack 2
        if not self.s2:
            print("Queue is empty!")
            return
        return self.s2.pop()  # Pop from stack 2

    def peek(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())  # Move elements to stack 2
        if not self.s2:
            print("Queue is empty!")
            return None
        return self.s2[-1]  # Return the top of stack 2

    def is_empty(self):
        return not self.s1 and not self.s2  # Check if both stacks are empty
```

---

## 5. Check for Balanced Parentheses

### Definition:

To check for balanced parentheses, we need to ensure that every opening parenthesis has a corresponding closing parenthesis in the correct order.

### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
using namespace std;

bool areParenthesesBalanced(const string &expr) {
    stack<char> s;
    for (char ch : expr) {
        if (ch == '(') {
            s.push(ch); // Push opening parenthesis
        } else if (ch == ')') {
            if (s.empty()) return false; // No matching opening
            s.pop(); // Pop matching opening
        }
    }
    return s.empty(); // Check if stack is empty
}
```

### Explanation:

1. Traverse each character in the expression.
2. If it's an opening parenthesis, push it onto the stack.
3. If it's a closing parenthesis, check if the stack is empty (indicating no matching opening parenthesis). If not, pop the top.
4. At the end, if the stack is empty, parentheses are balanced.

### Java Implementation:

```java
import java.util.Stack;

class ParenthesesChecker {
    public static boolean areParenthesesBalanced(String expr) {
        Stack<Character> stack = new Stack<>();
        for (char ch : expr.toCharArray()) {
            if (ch == '(') {
                stack.push(ch);
            } else if (ch == ')') {
                if (stack.isEmpty()) return false;
                stack.pop();
            }
        }
        return stack.isEmpty();
    }
}
```

### Python Implementation:

```python
def are_parentheses_balanced(expr):
    stack = []
    for ch in expr:
        if ch == '(':
            stack.append(ch)  # Push opening parenthesis
        elif ch == ')':
            if not stack:  # No matching opening
                return False
            stack.pop()  # Pop matching opening
    return not stack  # Check if stack is empty
```

---

## 6. Next Greater Element

### Definition:

For each element in an array, find the next greater element to the right. If there is no greater element, output -1.

### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
#include <vector>
using namespace std;

vector<int> nextGreaterElement(const vector<int> &arr) {
    stack<int> s;
    vector<int> result(arr.size(), -1);
    for (int i = 0; i < arr.size(); i++) {
        while (!s.empty() && arr[s.top()] < arr[i]) {
            result[s.top()] = arr[i]; // Update the result for the index
            s.pop(); // Remove the index
        }
        s.push(i); // Push current index
    }
    return result;
}
```

###

Explanation:

1. Iterate through each element in the array.
2. Use a stack to store indices of elements.
3. If the current element is greater than the element at the index on top of the stack, update the result for that index and pop it from the stack.
4. Push the current index onto the stack.
5. Any indices remaining in the stack at the end will have no next greater element, so they remain -1.

### Java Implementation:

```java
import java.util.Stack;

class NextGreaterElement {
    public static int[] nextGreaterElement(int[] arr) {
        Stack<Integer> stack = new Stack<>();
        int[] result = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {
                result[stack.pop()] = arr[i]; // Update the result for the index
            }
            stack.push(i); // Push current index
        }
        while (!stack.isEmpty()) {
            result[stack.pop()] = -1; // No greater element
        }
        return result;
    }
}
```

### Python Implementation:

```python
def next_greater_element(arr):
    stack = []
    result = [-1] * len(arr)
    for i in range(len(arr)):
        while stack and arr[stack[-1]] < arr[i]:
            result[stack.pop()] = arr[i]  # Update the result for the index
        stack.append(i)  # Push current index
    return result
```

---

## 7. Sort a Stack

### Definition:

To sort a stack, we can use an auxiliary stack to hold elements in sorted order.

### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
using namespace std;

void sortStack(stack<int> &s) {
    stack<int> aux;
    while (!s.empty()) {
        int temp = s.top();
        s.pop();
        while (!aux.empty() && aux.top() > temp) {
            s.push(aux.top());
            aux.pop();
        }
        aux.push(temp);
    }
    // Transfer sorted elements back to the original stack
    while (!aux.empty()) {
        s.push(aux.top());
        aux.pop();
    }
}
```

### Explanation:

1. Create an auxiliary stack.
2. While the original stack is not empty, pop the top element.
3. Move elements from the auxiliary stack back to the original stack while they are greater than the popped element.
4. Push the popped element onto the auxiliary stack.
5. Finally, move elements back to the original stack, which will now be sorted.

### Java Implementation:

```java
import java.util.Stack;

class SortStack {
    public static void sort(Stack<Integer> stack) {
        Stack<Integer> aux = new Stack<>();
        while (!stack.isEmpty()) {
            int temp = stack.pop();
            while (!aux.isEmpty() && aux.peek() > temp) {
                stack.push(aux.pop());
            }
            aux.push(temp);
        }
        while (!aux.isEmpty()) {
            stack.push(aux.pop());
        }
    }
}
```

### Python Implementation:

```python
def sort_stack(stack):
    aux = []
    while stack:
        temp = stack.pop()
        while aux and aux[-1] > temp:
            stack.append(aux.pop())
        aux.append(temp)
    while aux:
        stack.append(aux.pop())
```
