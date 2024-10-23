### Time and Space Complexities in DSA

Understanding time and space complexities helps you measure how efficiently an algorithm performs, especially with increasing input size.

#### **Time Complexity**

Time complexity indicates how the runtime of an algorithm grows with the size of the input. It is expressed in **Big O notation** which classifies algorithms based on their worst-case performance.

Here are some common time complexities, along with their behavior and examples:

1. **O(1) - Constant Time**

   - The execution time is constant and does not depend on the input size.
   - Example: Accessing an element from an array by its index.
   - **Graph**: Horizontal line showing no change in time as input increases.

2. **O(log n) - Logarithmic Time**

   - The execution time grows logarithmically as the input size increases. This occurs when the problem size reduces significantly with each step.
   - Example: Binary Search.
   - **Graph**: A curve that flattens out as input increases.

3. **O(n) - Linear Time**

   - The execution time grows directly in proportion to the input size.
   - Example: Iterating through an array of size `n`.
   - **Graph**: A straight line rising diagonally as input increases.

4. **O(n log n) - Linearithmic Time**

   - A combination of linear and logarithmic growth, common in efficient sorting algorithms.
   - Example: Merge Sort, Quick Sort (average case).
   - **Graph**: Slightly steeper than O(n), but still a gradual rise.

5. **O(n²) - Quadratic Time**

   - The execution time grows proportionally to the square of the input size. This happens when you have a nested loop.
   - Example: Bubble Sort, Selection Sort.
   - **Graph**: Steep upward curve, indicating slower performance for larger inputs.

6. **O(2^n) - Exponential Time**

   - The execution time doubles with each additional input. This occurs in algorithms that solve problems by dividing them into multiple subproblems.
   - Example: Solving the Fibonacci sequence using recursion.
   - **Graph**: Sharp exponential rise, unsuitable for large input sizes.

7. **O(n!) - Factorial Time**
   - The execution time grows factorially with the input size. It is usually seen in brute-force algorithms that generate permutations or combinations.
   - Example: Solving the Traveling Salesman Problem via brute force.
   - **Graph**: Extremely steep rise, practically unusable for large inputs.

---

#### **Space Complexity**

Space complexity measures the amount of memory an algorithm uses relative to the input size.

1. **O(1) - Constant Space**

   - The algorithm uses a fixed amount of space regardless of input size.
   - Example: Reversing a string in-place.

2. **O(n) - Linear Space**

   - The algorithm’s space usage grows linearly with the input size.
   - Example: Storing a list of `n` elements.

3. **O(n²) - Quadratic Space**
   - The algorithm’s space usage grows with the square of the input size.
   - Example: A 2D matrix to store distances between `n` points.

---

### **Practice Questions**

- **Q1:** What is the time complexity of accessing an element from an array by index?

  - **Answer:** O(1).
  - **Explanation:** In an array, each element is indexed, so accessing an element by its index (e.g., `array[5]`) takes constant time regardless of the size of the array. The operation is direct and does not depend on the number of elements in the array, hence O(1).

- **Q2:** What is the time complexity of finding an element in a sorted array using Binary Search?
  - **Answer:** O(log n).
  - **Explanation:** Binary Search works by dividing the search space in half after each comparison. Given a sorted array, you compare the middle element to the target, and if it's not a match, you eliminate half of the remaining elements. This process continues, reducing the search space logarithmically. Therefore, Binary Search has a time complexity of O(log n).

### **Calculating Time Complexity**

- **Q3:** What is the time complexity of this code?
  ```javascript
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  ```
  - **Answer:** O(n²).
  - **Explanation:** The outer loop runs `n` times, and for each iteration of the outer loop, the inner loop also runs `n` times. This results in `n * n = n²` iterations in total, giving a time complexity of O(n²). This is common in cases where there are nested loops that depend on the size of the input.

### **Space Complexity Examples**

- **Q4:** What is the space complexity of an algorithm that only uses a fixed number of variables, regardless of input size?

  - **Answer:** O(1).
  - **Explanation:** Space complexity measures the amount of memory used by an algorithm. If an algorithm uses a fixed number of variables (e.g., 5 variables) and doesn’t create new variables based on the input size, the space usage remains constant, resulting in O(1) space complexity.

- **Q5:** What is the space complexity of storing all elements in an array of size `n`?
  - **Answer:** O(n).
  - **Explanation:** If you store `n` elements in an array, the space needed grows linearly with the number of elements. Hence, the space complexity is O(n).

### **Algorithmic Comparison**

- **Q6:** Which sorting algorithm has a time complexity of O(n log n) on average?
  - **Answer:** Merge Sort and Quick Sort (average case).
  - **Explanation:** Both Merge Sort and Quick Sort (in the average case) have time complexities of O(n log n).
    - **Merge Sort**: Always divides the array in half and performs a merge operation, resulting in a time complexity of O(n log n).
    - **Quick Sort**: On average, Quick Sort partitions the array into two halves, and in the average case, it requires O(log n) partitioning steps, with each step requiring O(n) work, leading to an overall complexity of O(n log n). However, in the worst case (when the partitioning is unbalanced), Quick Sort can have O(n²) complexity.

### **Recursive Algorithm Complexity**

- **Q7:** What is the time complexity of finding the nth Fibonacci number using a naive recursive approach?
  - **Answer:** O(2^n).
  - **Explanation:** In the naive recursive approach, each Fibonacci number calculation recursively calls the function twice (once for `Fib(n-1)` and once for `Fib(n-2)`). This leads to a binary tree of recursive calls, and the number of function calls grows exponentially with `n`, resulting in a time complexity of O(2^n). The same subproblems are solved multiple times, which leads to exponential growth.

---

### **Additional Practice Problems**

1. **Q8:** What is the time complexity of finding the minimum element in an unsorted array?

   - **Answer:** O(n).
   - **Explanation:** To find the minimum element, you have to iterate through all the elements in the array to ensure you’ve found the smallest one. Therefore, the time complexity is O(n).

2. **Q9:** Calculate the time complexity for this code:

   ```javascript
   for (let i = 1; i < n; i *= 2) {
     console.log(i);
   }
   ```

   - **Answer:** O(log n).
   - **Explanation:** The loop starts at 1 and doubles the value of `i` with each iteration. This means the number of iterations is logarithmic in the size of `n`. Therefore, the time complexity is O(log n).

3. **Q10:** What is the time complexity of an algorithm that sorts an array using Bubble Sort?
   - **Answer:** O(n²).
   - **Explanation:** Bubble Sort compares each element with its neighbor and swaps them if necessary. This process is repeated `n` times for each element, leading to `n * n = n²` comparisons in total. Therefore, its time complexity is O(n²).

---
