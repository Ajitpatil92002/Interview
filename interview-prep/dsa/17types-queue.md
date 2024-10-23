## 1. Circular Queue

### Definition:

A circular queue is a linear data structure that uses a fixed-size array and connects the last position back to the first position, thus forming a circle. This allows for efficient utilization of space as it can wrap around when reaching the end.

### Operations:

- **Enqueue**: Adds an element to the rear of the queue.
- **Dequeue**: Removes an element from the front of the queue.
- **Peek**: Retrieves the front element without removing it.
- **IsEmpty**: Checks if the queue is empty.
- **IsFull**: Checks if the queue is full.

### C++ Implementation:

```cpp
#include <iostream>
using namespace std;

class CircularQueue {
    int *arr;
    int front, rear, size;

public:
    CircularQueue(int s) {
        size = s;
        arr = new int[size];
        front = rear = -1;
    }

    void enqueue(int value) {
        if ((rear + 1) % size == front) {
            cout << "Queue is full!" << endl;
            return;
        }
        if (front == -1) front = 0;
        rear = (rear + 1) % size;
        arr[rear] = value;
    }

    void dequeue() {
        if (front == -1) {
            cout << "Queue is empty!" << endl;
            return;
        }
        cout << "Dequeued: " << arr[front] << endl;
        if (front == rear) front = rear = -1; // Reset queue
        else front = (front + 1) % size;
    }

    void peek() {
        if (front == -1) {
            cout << "Queue is empty!" << endl;
            return;
        }
        cout << "Front element: " << arr[front] << endl;
    }

    bool isEmpty() {
        return front == -1;
    }

    bool isFull() {
        return (rear + 1) % size == front;
    }
};
```

### Explanation:

1. **Initialization**: The queue is initialized with a specified size, and the front and rear pointers are set to -1.
2. **Enqueue Operation**: Before adding an element, we check if the queue is full. If not, we update the rear pointer circularly and add the new value.
3. **Dequeue Operation**: We check if the queue is empty. If not, we remove the front element and update the front pointer circularly.
4. **Peek Operation**: It retrieves the front element without removing it.
5. **IsEmpty and IsFull Operations**: Check the status of the queue.

### Java Implementation:

```java
class CircularQueue {
    private int[] arr;
    private int front, rear, size;

    public CircularQueue(int s) {
        size = s;
        arr = new int[size];
        front = rear = -1;
    }

    public void enqueue(int value) {
        if ((rear + 1) % size == front) {
            System.out.println("Queue is full!");
            return;
        }
        if (front == -1) front = 0;
        rear = (rear + 1) % size;
        arr[rear] = value;
    }

    public void dequeue() {
        if (front == -1) {
            System.out.println("Queue is empty!");
            return;
        }
        System.out.println("Dequeued: " + arr[front]);
        if (front == rear) front = rear = -1; // Reset queue
        else front = (front + 1) % size;
    }

    public void peek() {
        if (front == -1) {
            System.out.println("Queue is empty!");
            return;
        }
        System.out.println("Front element: " + arr[front]);
    }

    public boolean isEmpty() {
        return front == -1;
    }

    public boolean isFull() {
        return (rear + 1) % size == front;
    }
}
```

### Python Implementation:

```python
class CircularQueue:
    def __init__(self, size):
        self.size = size
        self.queue = [0] * size
        self.front = self.rear = -1

    def enqueue(self, value):
        if (self.rear + 1) % self.size == self.front:
            print("Queue is full!")
            return
        if self.front == -1:
            self.front = 0
        self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = value

    def dequeue(self):
        if self.front == -1:
            print("Queue is empty!")
            return
        print("Dequeued:", self.queue[self.front])
        if self.front == self.rear:  # Reset queue
            self.front = self.rear = -1
        else:
            self.front = (self.front + 1) % self.size

    def peek(self):
        if self.front == -1:
            print("Queue is empty!")
            return
        print("Front element:", self.queue[self.front])

    def is_empty(self):
        return self.front == -1

    def is_full(self):
        return (self.rear + 1) % self.size == self.front
```

---

## 2. Double-Ended Queue (Deque)

### Definition:

A double-ended queue (Deque) is a linear data structure that allows insertion and deletion of elements from both ends (front and rear).

### Operations:

- **Add First**: Adds an element at the front of the deque.
- **Add Last**: Adds an element at the rear of the deque.
- **Remove First**: Removes an element from the front of the deque.
- **Remove Last**: Removes an element from the rear of the deque.
- **Peek First**: Retrieves the front element without removing it.
- **Peek Last**: Retrieves the rear element without removing it.

### C++ Implementation:

```cpp
#include <iostream>
#include <deque>
using namespace std;

class Deque {
    deque<int> dq;

public:
    void addFirst(int value) {
        dq.push_front(value);
    }

    void addLast(int value) {
        dq.push_back(value);
    }

    void removeFirst() {
        if (dq.empty()) {
            cout << "Deque is empty!" << endl;
            return;
        }
        cout << "Removed from front: " << dq.front() << endl;
        dq.pop_front();
    }

    void removeLast() {
        if (dq.empty()) {
            cout << "Deque is empty!" << endl;
            return;
        }
        cout << "Removed from rear: " << dq.back() << endl;
        dq.pop_back();
    }

    void peekFirst() {
        if (dq.empty()) {
            cout << "Deque is empty!" << endl;
            return;
        }
        cout << "Front element: " << dq.front() << endl;
    }

    void peekLast() {
        if (dq.empty()) {
            cout << "Deque is empty!" << endl;
            return;
        }
        cout << "Rear element: " << dq.back() << endl;
    }

    bool isEmpty() {
        return dq.empty();
    }
};
```

### Explanation:

1. **Initialization**: A `deque` from the STL is used to implement the deque operations.
2. **Add First and Add Last Operations**: Add elements at the front or back of the deque.
3. **Remove First and Remove Last Operations**: Remove elements from either end and check if the deque is empty.
4. **Peek Operations**: Retrieve the front or rear element without removal.
5. **IsEmpty Operation**: Check if the deque is empty.

### Java Implementation:

```java
import java.util.ArrayDeque;

class Deque {
    private ArrayDeque<Integer> deque;

    public Deque() {
        deque = new ArrayDeque<>();
    }

    public void addFirst(int value) {
        deque.addFirst(value);
    }

    public void addLast(int value) {
        deque.addLast(value);
    }

    public void removeFirst() {
        if (deque.isEmpty()) {
            System.out.println("Deque is empty!");
            return;
        }
        System.out.println("Removed from front: " + deque.removeFirst());
    }

    public void removeLast() {
        if (deque.isEmpty()) {
            System.out.println("Deque is empty!");
            return;
        }
        System.out.println("Removed from rear: " + deque.removeLast());
    }

    public void peekFirst() {
        if (deque.isEmpty()) {
            System.out.println("Deque is empty!");
            return;
        }
        System.out.println("Front element: " + deque.getFirst());
    }

    public void peekLast() {
        if (deque.isEmpty()) {
            System.out.println("Deque is empty!");
            return;
        }
        System.out.println("Rear element: " + deque.getLast());
    }

    public boolean isEmpty() {
        return deque.isEmpty();
    }
}
```

### Python Implementation:

```python
from collections import deque

class Deque:
    def __init__(self):
        self.deque = deque()

    def add_first(self, value):
        self.deque.appendleft(value)

    def add_last(self, value):
        self.deque.append(value)

    def remove_first(self):
        if not self.deque:
            print("Deque is empty!")
            return
        print("Removed from front:", self.deque.popleft())



    def remove_last(self):
        if not self.deque:
            print("Deque is empty!")
            return
        print("Removed from rear:", self.deque.pop())

    def peek_first(self):
        if not self.deque:
            print("Deque is empty!")
            return
        print("Front element:", self.deque[0])

    def peek_last(self):
        if not self.deque:
            print("Deque is empty!")
            return
        print("Rear element:", self.deque[-1])

    def is_empty(self):
        return len(self.deque) == 0
```

---

## 3. Priority Queue

### Definition:

A priority queue is an abstract data type where each element has a priority assigned to it. Elements are removed from the queue based on their priority rather than their order of insertion.

### Operations:

- **Insert**: Adds an element with a given priority.
- **Extract Max/Min**: Removes and returns the element with the highest/lowest priority.
- **Peek**: Retrieves the highest/lowest priority element without removing it.

### C++ Implementation:

```cpp
#include <iostream>
#include <queue>
using namespace std;

class PriorityQueue {
    priority_queue<int> pq; // Max-Heap

public:
    void insert(int value) {
        pq.push(value);
    }

    void extractMax() {
        if (pq.empty()) {
            cout << "Priority Queue is empty!" << endl;
            return;
        }
        cout << "Extracted max: " << pq.top() << endl;
        pq.pop();
    }

    void peek() {
        if (pq.empty()) {
            cout << "Priority Queue is empty!" << endl;
            return;
        }
        cout << "Max element: " << pq.top() << endl;
    }

    bool isEmpty() {
        return pq.empty();
    }
};
```

### Explanation:

1. **Initialization**: The priority queue uses the STL `priority_queue`, which is a max-heap by default.
2. **Insert Operation**: Adds an element to the queue.
3. **Extract Max Operation**: Removes and returns the maximum element. Checks if the queue is empty before extracting.
4. **Peek Operation**: Retrieves the maximum element without removing it.
5. **IsEmpty Operation**: Checks if the queue is empty.

### Java Implementation:

```java
import java.util.PriorityQueue;

class PriorityQueueExample {
    private PriorityQueue<Integer> pq;

    public PriorityQueueExample() {
        pq = new PriorityQueue<>(Collections.reverseOrder()); // Max-Heap
    }

    public void insert(int value) {
        pq.add(value);
    }

    public void extractMax() {
        if (pq.isEmpty()) {
            System.out.println("Priority Queue is empty!");
            return;
        }
        System.out.println("Extracted max: " + pq.poll());
    }

    public void peek() {
        if (pq.isEmpty()) {
            System.out.println("Priority Queue is empty!");
            return;
        }
        System.out.println("Max element: " + pq.peek());
    }

    public boolean isEmpty() {
        return pq.isEmpty();
    }
}
```

### Python Implementation:

```python
import heapq

class PriorityQueue:
    def __init__(self):
        self.pq = []

    def insert(self, value):
        heapq.heappush(self.pq, -value)  # Max-Heap

    def extract_max(self):
        if not self.pq:
            print("Priority Queue is empty!")
            return
        max_value = -heapq.heappop(self.pq)
        print("Extracted max:", max_value)

    def peek(self):
        if not self.pq:
            print("Priority Queue is empty!")
            return
        max_value = -self.pq[0]
        print("Max element:", max_value)

    def is_empty(self):
        return len(self.pq) == 0
```

---

### Summary

- **Circular Queue**: Efficiently manages space by wrapping around and supports basic queue operations.
- **Double-Ended Queue (Deque)**: Provides flexibility to insert and remove elements from both ends.
- **Priority Queue**: Orders elements based on priority, allowing for efficient retrieval of the highest or lowest priority elements.
