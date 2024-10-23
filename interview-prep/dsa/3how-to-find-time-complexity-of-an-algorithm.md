### How to Find the Time Complexity of an Algorithm

Time complexity is an estimate of the number of operations an algorithm performs as a function of the size of its input. To calculate time complexity, you analyze the number of operations each part of the algorithm performs relative to the input size, often denoted as **n**.

#### **Steps to Find Time Complexity:**

1. **Identify the Loops**: Most time complexity comes from loops in the code. A single loop iterating through `n` elements usually results in O(n) complexity. Nested loops often result in O(n²), O(n³), etc.

2. **Recursive Functions**: When a function calls itself, you need to count how many times the function runs in total. Divide-and-conquer algorithms (like merge sort) typically result in O(n log n).

3. **Constant-Time Operations**: Any operation that does not depend on the size of the input (e.g., accessing an array element) has O(1) complexity.

4. **Additive vs Multiplicative Complexity**: When two loops are independent, their complexities add (O(n) + O(m)). When nested, they multiply (O(n) \* O(m)).

5. **Worst Case Analysis**: Always consider the worst-case scenario unless asked otherwise. For example, searching for an element that doesn’t exist in an unsorted list would take O(n) time.

---

### **10 Example Questions with Code to Determine Time Complexity**

---

#### **1. Example (C++): Simple For Loop**

```cpp
void printNumbers(int n) {
    for (int i = 0; i < n; i++) {
        cout << i << endl;
    }
}
```

- **Time Complexity**: O(n)
  - **Explanation**: The loop runs `n` times, so the complexity is linear with the input size.

---

#### **2. Example (Java): Nested Loop**

```java
void nestedLoop(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            System.out.println(i + ", " + j);
        }
    }
}
```

- **Time Complexity**: O(n²)
  - **Explanation**: The outer loop runs `n` times, and for each iteration of the outer loop, the inner loop runs `n` times. Hence, the total number of iterations is `n * n = n²`.

---

#### **3. Example (Python): Logarithmic Growth**

```python
def logarithmic_example(n):
    i = 1
    while i < n:
        print(i)
        i *= 2
```

- **Time Complexity**: O(log n)
  - **Explanation**: The variable `i` doubles each time, which means the loop runs logarithmically relative to `n` (specifically log base 2 of `n`).

---

#### **4. Example (C++): Constant Time Operation**

```cpp
int accessArray(int arr[], int n) {
    return arr[0];  // Access the first element
}
```

- **Time Complexity**: O(1)
  - **Explanation**: Accessing an element in an array takes constant time regardless of the size of the array.

---

#### **5. Example (Java): Nested Loops with Different Bounds**

```java
void mixedLoop(int n, int m) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            System.out.println(i + ", " + j);
        }
    }
}
```

- **Time Complexity**: O(n \* m)
  - **Explanation**: The outer loop runs `n` times, and the inner loop runs `m` times for each iteration of the outer loop. Therefore, the complexity is O(n \* m).

---

#### **6. Example (Python): Recursive Function**

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
```

- **Time Complexity**: O(n)
  - **Explanation**: The function calls itself `n` times before reaching the base case, so the complexity is linear.

---

#### **7. Example (C++): Multiple Independent Loops**

```cpp
void independentLoops(int n) {
    for (int i = 0; i < n; i++) {
        cout << i << endl;
    }
    for (int j = 0; j < n; j++) {
        cout << j << endl;
    }
}
```

- **Time Complexity**: O(n)
  - **Explanation**: The two loops run independently, so their complexities are added. Each loop runs `n` times, but since they are independent, the overall complexity is O(n) + O(n) = O(n).

---

#### **8. Example (Java): Quadratic Growth with Nested Loops**

```java
void quadraticExample(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            System.out.println(i + ", " + j);
        }
    }
}
```

- **Time Complexity**: O(n²)
  - **Explanation**: The outer loop runs `n` times, and the inner loop runs `n - i` times, which results in a quadratic time complexity.

---

#### **9. Example (Python): Linear Search**

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```

- **Time Complexity**: O(n)
  - **Explanation**: In the worst case, you might have to search through all `n` elements to find the target, resulting in linear time complexity.

---

#### **10. Example (C++): Divide and Conquer (Merge Sort)**

```cpp
void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
```

- **Time Complexity**: O(n log n)
  - **Explanation**: Merge Sort divides the array into two halves recursively (log n times) and merges them, each merge operation taking O(n) time. Thus, the overall complexity is O(n log n).

---

### General Guidelines for Time Complexity

- **Single Loops**: O(n)
- **Nested Loops**: O(n²), O(n³), etc., depending on the depth of nesting.
- **Divide and Conquer Algorithms**: O(n log n) (like Merge Sort or Quick Sort).
- **Recursive Functions**: Varies, often depends on the number of recursive calls and the size reduction (e.g., O(2^n) for naive Fibonacci).

---
