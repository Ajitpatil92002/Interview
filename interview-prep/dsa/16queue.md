## Course Content: Queue Data Structure

### 1. **What is a Queue?**

A Queue is a linear data structure that follows the First In First Out (FIFO) principle. In a queue, the element added first will be the one to be removed first. It is analogous to a real-life queue, such as a line of people waiting for service.

### 2. **Operations on Queue**

The following operations can be performed on a queue:

#### **2.1 Enqueue**

- **Description**: Adds an element to the rear (end) of the queue.
- **Time Complexity**: O(1)

**C++ Implementation:**

```cpp
void enqueue(int element) {
    if (isFull()) {
        cout << "Queue is full!" << endl;
        return;
    }
    rear++;
    queue[rear] = element;
}
```

**Java Implementation:**

```java
public void enqueue(int element) {
    if (isFull()) {
        System.out.println("Queue is full!");
        return;
    }
    rear++;
    queue[rear] = element;
}
```

**Python Implementation:**

```python
def enqueue(self, element):
    if self.is_full():
        print("Queue is full!")
        return
    self.rear += 1
    self.queue[self.rear] = element
```

#### **2.2 Dequeue**

- **Description**: Removes and returns the element from the front of the queue.
- **Time Complexity**: O(1)

**C++ Implementation:**

```cpp
int dequeue() {
    if (isEmpty()) {
        cout << "Queue is empty!" << endl;
        return -1; // or throw an exception
    }
    return queue[front++];
}
```

**Java Implementation:**

```java
public int dequeue() {
    if (isEmpty()) {
        System.out.println("Queue is empty!");
        return -1; // or throw an exception
    }
    return queue[front++];
}
```

**Python Implementation:**

```python
def dequeue(self):
    if self.is_empty():
        print("Queue is empty!")
        return -1  # or raise an exception
    element = self.queue[self.front]
    self.front += 1
    return element
```

#### **2.3 Peek**

- **Description**: Retrieves the front element of the queue without removing it.
- **Time Complexity**: O(1)

**C++ Implementation:**

```cpp
int peek() {
    if (isEmpty()) {
        cout << "Queue is empty!" << endl;
        return -1; // or throw an exception
    }
    return queue[front];
}
```

**Java Implementation:**

```java
public int peek() {
    if (isEmpty()) {
        System.out.println("Queue is empty!");
        return -1; // or throw an exception
    }
    return queue[front];
}
```

**Python Implementation:**

```python
def peek(self):
    if self.is_empty():
        print("Queue is empty!")
        return -1  # or raise an exception
    return self.queue[self.front]
```

#### **2.4 IsEmpty**

- **Description**: Checks if the queue is empty.
- **Time Complexity**: O(1)

**C++ Implementation:**

```cpp
bool isEmpty() {
    return front > rear;
}
```

**Java Implementation:**

```java
public boolean isEmpty() {
    return front > rear;
}
```

**Python Implementation:**

```python
def is_empty(self):
    return self.front > self.rear
```

#### **2.5 IsFull**

- **Description**: Checks if the queue is full.
- **Time Complexity**: O(1)

**C++ Implementation:**

```cpp
bool isFull() {
    return rear == MAX_SIZE - 1;
}
```

**Java Implementation:**

```java
public boolean isFull() {
    return rear == MAX_SIZE - 1;
}
```

**Python Implementation:**

```python
def is_full(self):
    return self.rear == self.max_size - 1
```

### 3. **Types of Queue**

- **Circular Queue**: In a circular queue, the last element connects back to the first element, making it efficient in terms of space.

  **C++ Implementation:**

  ```cpp
  int next(int index) {
      return (index + 1) % MAX_SIZE;
  }
  ```

- **Double-Ended Queue (Deque)**: Allows insertion and deletion of elements from both ends (front and rear).

- **Priority Queue**: Elements are arranged based on their priority rather than their order of insertion. Higher priority elements are dequeued before lower priority elements.

### 4. **Applications of Queue**

- **Job Scheduling**: Queues are used in CPU scheduling and job scheduling systems.
- **Message Queuing**: Used in communication systems for managing messages.
- **Simulation Modeling**: Used in scenarios where entities wait in line, like ticket counters.
- **Data Buffering**: Queues are used in buffering scenarios, such as IO Buffers.

Implementation of a Queue data structure using a class in C++, Java, and Python. Each implementation includes all the basic operations: `enqueue`, `dequeue`, `peek`, `isEmpty`, and `isFull`.

### C++ Implementation

```cpp
#include <iostream>
using namespace std;

class Queue {
private:
    int front, rear, maxSize;
    int* queue;

public:
    Queue(int size) {
        maxSize = size;
        front = 0;
        rear = -1;
        queue = new int[maxSize];
    }

    ~Queue() {
        delete[] queue;
    }

    // Enqueue operation
    void enqueue(int element) {
        if (isFull()) {
            cout << "Queue is full!" << endl;
            return;
        }
        rear = (rear + 1) % maxSize; // Circular increment
        queue[rear] = element;
    }

    // Dequeue operation
    int dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return -1; // or throw an exception
        }
        return queue[front++];
    }

    // Peek operation
    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return -1; // or throw an exception
        }
        return queue[front];
    }

    // Check if queue is empty
    bool isEmpty() {
        return front > rear;
    }

    // Check if queue is full
    bool isFull() {
        return (rear + 1) % maxSize == front;
    }

    // Print the queue
    void display() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return;
        }
        for (int i = front; i <= rear; i++) {
            cout << queue[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Queue q(5);
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    cout << "Front element: " << q.peek() << endl; // Output: 10
    q.display(); // Output: 10 20 30
    q.dequeue();
    q.display(); // Output: 20 30
    return 0;
}
```

### Java Implementation

```java
public class Queue {
    private int front, rear, maxSize;
    private int[] queue;

    public Queue(int size) {
        maxSize = size;
        front = 0;
        rear = -1;
        queue = new int[maxSize];
    }

    // Enqueue operation
    public void enqueue(int element) {
        if (isFull()) {
            System.out.println("Queue is full!");
            return;
        }
        rear = (rear + 1) % maxSize; // Circular increment
        queue[rear] = element;
    }

    // Dequeue operation
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return -1; // or throw an exception
        }
        return queue[front++];
    }

    // Peek operation
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return -1; // or throw an exception
        }
        return queue[front];
    }

    // Check if queue is empty
    public boolean isEmpty() {
        return front > rear;
    }

    // Check if queue is full
    public boolean isFull() {
        return (rear + 1) % maxSize == front;
    }

    // Print the queue
    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty!");
            return;
        }
        for (int i = front; i <= rear; i++) {
            System.out.print(queue[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Queue q = new Queue(5);
        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        System.out.println("Front element: " + q.peek()); // Output: 10
        q.display(); // Output: 10 20 30
        q.dequeue();
        q.display(); // Output: 20 30
    }
}
```

### Python Implementation

```python
class Queue:
    def __init__(self, size):
        self.maxSize = size
        self.front = 0
        self.rear = -1
        self.queue = [None] * self.maxSize

    # Enqueue operation
    def enqueue(self, element):
        if self.is_full():
            print("Queue is full!")
            return
        self.rear = (self.rear + 1) % self.maxSize  # Circular increment
        self.queue[self.rear] = element

    # Dequeue operation
    def dequeue(self):
        if self.is_empty():
            print("Queue is empty!")
            return -1  # or raise an exception
        element = self.queue[self.front]
        self.front += 1
        return element

    # Peek operation
    def peek(self):
        if self.is_empty():
            print("Queue is empty!")
            return -1  # or raise an exception
        return self.queue[self.front]

    # Check if queue is empty
    def is_empty(self):
        return self.front > self.rear

    # Check if queue is full
    def is_full(self):
        return (self.rear + 1) % self.maxSize == self.front

    # Print the queue
    def display(self):
        if self.is_empty():
            print("Queue is empty!")
            return
        for i in range(self.front, self.rear + 1):
            print(self.queue[i], end=" ")
        print()

# Example usage
if __name__ == "__main__":
    q = Queue(5)
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)
    print("Front element:", q.peek())  # Output: 10
    q.display()  # Output: 10 20 30
    q.dequeue()
    q.display()  # Output: 20 30
```
