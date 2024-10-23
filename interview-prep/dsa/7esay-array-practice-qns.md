### 1. Find the Largest Three Elements in an Array

**Explanation:**

1. Initialize three variables (`first`, `second`, `third`) to store the largest three elements.
2. Traverse the array and compare each element with these three variables to update their values.

**C++ Code:**

```cpp
#include <iostream>
#include <limits.h>
using namespace std;

void findLargestThree(int arr[], int n) {
    if (n < 3) {
        cout << "Not enough elements" << endl;
        return;
    }
    int first = INT_MIN, second = INT_MIN, third = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            third = second;
            second = arr[i];
        } else if (arr[i] > third && arr[i] != second) {
            third = arr[i];
        }
    }
    cout << "Largest three elements are: " << first << ", " << second << ", " << third << endl;
}

int main() {
    int arr[] = {12, 35, 1, 10, 34, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    findLargestThree(arr, n);
    return 0;
}
```

**Java Code:**

```java
public class LargestThree {
    public static void findLargestThree(int[] arr) {
        if (arr.length < 3) {
            System.out.println("Not enough elements");
            return;
        }
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE, third = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                third = second;
                second = first;
                first = num;
            } else if (num > second && num != first) {
                third = second;
                second = num;
            } else if (num > third && num != second) {
                third = num;
            }
        }
        System.out.println("Largest three elements are: " + first + ", " + second + ", " + third);
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        findLargestThree(arr);
    }
}
```

**Python Code:**

```python
def find_largest_three(arr):
    if len(arr) < 3:
        print("Not enough elements")
        return
    first, second, third = float('-inf'), float('-inf'), float('-inf')
    for num in arr:
        if num > first:
            third = second
            second = first
            first = num
        elif num > second and num != first:
            third = second
            second = num
        elif num > third and num != second:
            third = num
    print(f"Largest three elements are: {first}, {second}, {third}")

arr = [12, 35, 1, 10, 34, 1]
find_largest_three(arr)
```

---

### 2. Find Second Largest Element in an Array

**Explanation:**

1. Traverse the array and keep track of the largest and second largest elements.
2. Update these values as you find larger elements.

**C++ Code:**

```cpp
#include <iostream>
#include <limits.h>
using namespace std;

int findSecondLargest(int arr[], int n) {
    if (n < 2) {
        return -1;  // Not enough elements
    }
    int first = INT_MIN, second = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    return second == INT_MIN ? -1 : second;  // No second largest
}

int main() {
    int arr[] = {12, 35, 1, 10, 34};
    int n = sizeof(arr) / sizeof(arr[0]);
    int second_largest = findSecondLargest(arr, n);
    if (second_largest == -1) {
        cout << "No second largest element" << endl;
    } else {
        cout << "Second largest element is: " << second_largest << endl;
    }
    return 0;
}
```

**Java Code:**

```java
public class SecondLargest {
    public static int findSecondLargest(int[] arr) {
        if (arr.length < 2) {
            return -1;  // Not enough elements
        }
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return second == Integer.MIN_VALUE ? -1 : second;  // No second largest
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34};
        int secondLargest = findSecondLargest(arr);
        if (secondLargest == -1) {
            System.out.println("No second largest element");
        } else {
            System.out.println("Second largest element is: " + secondLargest);
        }
    }
}
```

**Python Code:**

```python
def find_second_largest(arr):
    if len(arr) < 2:
        return -1  # Not enough elements
    first, second = float('-inf'), float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    return -1 if second == float('-inf') else second  # No second largest

arr = [12, 35, 1, 10, 34]
second_largest = find_second_largest(arr)
if second_largest == -1:
    print("No second largest element")
else:
    print(f"Second largest element is: {second_largest}")
```

---

### 3. Move All Zeroes to End of Array

**Explanation:**

1. Traverse the array and keep track of the position to place non-zero elements.
2. Once a non-zero element is found, swap it with the next zero position.

**C++ Code:**

```cpp
#include <iostream>
using namespace std;

void moveZeroes(int arr[], int n) {
    int count = 0;  // Count of non-zero elements
    for (int i = 0; i < n; i++) {
        if (arr[i] != 0) {
            arr[count++] = arr[i];  // Move non-zero elements to front
        }
    }
    while (count < n) {
        arr[count++] = 0;  // Fill remaining positions with zeroes
    }
}

int main() {
    int arr[] = {0, 1, 0, 3, 12};
    int n = sizeof(arr) / sizeof(arr[0]);
    moveZeroes(arr, n);
    for (int num : arr) {
        cout << num << " ";  // Output: 1 3 12 0 0
    }
    return 0;
}
```

**Java Code:**

```java
public class MoveZeroes {
    public static void moveZeroes(int[] arr) {
        int count = 0;  // Count of non-zero elements
        for (int num : arr) {
            if (num != 0) {
                arr[count++] = num;  // Move non-zero elements to front
            }
        }
        while (count < arr.length) {
            arr[count++] = 0;  // Fill remaining positions with zeroes
        }
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 3, 12};
        moveZeroes(arr);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 1 3 12 0 0
        }
    }
}
```

**Python Code:**

```python
def move_zeroes(arr):
    count = 0  # Count of non-zero elements
    for num in arr:
        if num != 0:
            arr[count] = num  # Move non-zero elements to front
            count += 1
    while count < len(arr):
        arr[count] = 0  # Fill remaining positions with zeroes
        count += 1

arr = [0, 1, 0, 3, 12]
move_zeroes(arr)
print(arr)  # Output: [1, 3, 12, 0, 0]
```

---

### 4. Rearrange Array Such That Even Positioned Are Greater Than Odd

**Explanation:**

1. Sort the array.
2. Rearrange elements by swapping the even and odd indexed elements.

**C++ Code:**

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

void rearrangeArray(int arr[], int n

) {
    sort(arr, arr + n);
    for (int i = 1; i < n; i += 2) {
        if (i < n && arr[i] < arr[i - 1]) {
            swap(arr[i], arr[i - 1]);
        }
    }
}

int main() {
    int arr[] = {1, 3, 2, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    rearrangeArray(arr, n);
    for (int num : arr) {
        cout << num << " ";  // Output: 2 4 1 5 3
    }
    return 0;
}
```

**Java Code:**

```java
import java.util.Arrays;

public class RearrangeArray {
    public static void rearrangeArray(int[] arr) {
        Arrays.sort(arr);
        for (int i = 1; i < arr.length; i += 2) {
            if (i < arr.length && arr[i] < arr[i - 1]) {
                int temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 4, 5};
        rearrangeArray(arr);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 2 4 1 5 3
        }
    }
}
```

**Python Code:**

```python
def rearrange_array(arr):
    arr.sort()
    for i in range(1, len(arr), 2):
        if i < len(arr) and arr[i] < arr[i - 1]:
            arr[i], arr[i - 1] = arr[i - 1], arr[i]

arr = [1, 3, 2, 4, 5]
rearrange_array(arr)
print(arr)  # Output: [2, 4, 1, 5, 3]
```

---

### 5. Rearrange an Array in Maximum Minimum Form Using Two Pointer Technique

**Explanation:**

1. Sort the array.
2. Use two pointers to fill a new array: one from the beginning for the maximum and one from the end for the minimum.

**C++ Code:**

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

void rearrangeMaxMin(int arr[], int n) {
    sort(arr, arr + n);
    int result[n];
    int start = 0, end = n - 1;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) {
            result[i] = arr[end--];  // Place max
        } else {
            result[i] = arr[start++];  // Place min
        }
    }
    for (int i = 0; i < n; i++) {
        arr[i] = result[i];
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    rearrangeMaxMin(arr, n);
    for (int num : arr) {
        cout << num << " ";  // Output: 5 1 4 2 3
    }
    return 0;
}
```

**Java Code:**

```java
import java.util.Arrays;

public class RearrangeMaxMin {
    public static void rearrangeMaxMin(int[] arr) {
        Arrays.sort(arr);
        int[] result = new int[arr.length];
        int start = 0, end = arr.length - 1;
        for (int i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                result[i] = arr[end--];  // Place max
            } else {
                result[i] = arr[start++];  // Place min
            }
        }
        System.arraycopy(result, 0, arr, 0, arr.length);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        rearrangeMaxMin(arr);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 5 1 4 2 3
        }
    }
}
```

**Python Code:**

```python
def rearrange_max_min(arr):
    arr.sort()
    result = []
    start, end = 0, len(arr) - 1
    for i in range(len(arr)):
        if i % 2 == 0:
            result.append(arr[end])  # Place max
            end -= 1
        else:
            result.append(arr[start])  # Place min
            start += 1
    return result

arr = [1, 2, 3, 4, 5]
arr = rearrange_max_min(arr)
print(arr)  # Output: [5, 1, 4, 2, 3]
```

---

### 6. Segregate Even and Odd Numbers

**Explanation:**

1. Use two pointers to traverse the array and swap even and odd elements.

**C++ Code:**

```cpp
#include <iostream>
using namespace std;

void segregateEvenOdd(int arr[], int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        while (arr[left] % 2 == 0 && left < right) {
            left++;
        }
        while (arr[right] % 2 == 1 && left < right) {
            right--;
        }
        if (left < right) {
            swap(arr[left], arr[right]);
        }
    }
}

int main() {
    int arr[] = {12, 34, 45, 9, 8, 90, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    segregateEvenOdd(arr, n);
    for (int num : arr) {
        cout << num << " ";  // Output: 12 34 90 3 8 45 9
    }
    return 0;
}
```

**Java Code:**

```java
public class SegregateEvenOdd {
    public static void segregateEvenOdd(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            while (arr[left] % 2 == 0 && left < right) {
                left++;
            }
            while (arr[right] % 2 == 1 && left < right) {
                right--;
            }
            if (left < right) {
                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 34, 45, 9, 8, 90, 3};
        segregateEvenOdd(arr);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 12 34 90 3 8 45 9
        }
    }
}
```

**Python Code:**

```python
def segregate_even_odd(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        while arr[left] % 2 == 0 and left < right:
            left += 1
        while arr[right] % 2 == 1 and left < right:
            right -= 1
        if left < right:
            arr[left], arr[right] = arr[right], arr[left]

arr = [12, 34, 45, 9, 8, 90, 3]
segregate_even_odd(arr)
print(arr)  # Output: [12, 34, 90, 3, 8, 45, 9]
```

---

### 7. Reversal Algorithm for Array Rotation

**Explanation:**

1. Reverse the whole array.
2. Reverse the first `k` elements.
3. Reverse the last `n-k` elements.

**C++ Code:**

```cpp
#include <iostream>
using namespace std;

void reverse(int arr[], int start, int end) {
    while (start < end) {
        swap(arr[start++], arr[end--]);
    }
}

void rotateArray(int arr[], int n, int k) {
    k = k % n;  // Handle k greater than n
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 3;  // Rotate by 3 positions
    rotateArray(arr, n, k);
    for (int num : arr) {
        cout << num << " ";  // Output: 5 6 7 1 2 3 4
    }
    return 0;
}
```

**Java Code:**

```java
public class RotateArray {
    public static void reverse(int[] arr, int start, int end) {
        while (start < end) {


            int temp = arr[start];
            arr[start++] = arr[end];
            arr[end--] = temp;
        }
    }

    public static void rotateArray(int[] arr, int k) {
        int n = arr.length;
        k = k % n;  // Handle k greater than n
        reverse(arr, 0, n - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int k = 3;  // Rotate by 3 positions
        rotateArray(arr, k);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 5 6 7 1 2 3 4
        }
    }
}
```

**Python Code:**

```python
def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

def rotate_array(arr, k):
    n = len(arr)
    k = k % n  # Handle k greater than n
    reverse(arr, 0, n - 1)
    reverse(arr, 0, k - 1)
    reverse(arr, k, n - 1)

arr = [1, 2, 3, 4, 5, 6, 7]
k = 3  # Rotate by 3 positions
rotate_array(arr, k)
print(arr)  # Output: [5, 6, 7, 1, 2, 3, 4]
```

---

### 8. Print Left Rotation of Array in O(n) Time and O(1) Space

**Explanation:**

1. Reverse the whole array.
2. Reverse the first `n-k` elements.
3. Reverse the last `k` elements.

**C++ Code:**

```cpp
#include <iostream>
using namespace std;

void reverse(int arr[], int start, int end) {
    while (start < end) {
        swap(arr[start++], arr[end--]);
    }
}

void leftRotate(int arr[], int n, int k) {
    k = k % n;  // Handle k greater than n
    reverse(arr, 0, n - 1);
    reverse(arr, 0, n - k - 1);
    reverse(arr, n - k, n - 1);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 3;  // Rotate left by 3 positions
    leftRotate(arr, n, k);
    for (int num : arr) {
        cout << num << " ";  // Output: 4 5 6 7 1 2 3
    }
    return 0;
}
```

**Java Code:**

```java
public class LeftRotateArray {
    public static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start++] = arr[end];
            arr[end--] = temp;
        }
    }

    public static void leftRotate(int[] arr, int k) {
        int n = arr.length;
        k = k % n;  // Handle k greater than n
        reverse(arr, 0, n - 1);
        reverse(arr, 0, n - k - 1);
        reverse(arr, n - k, n - 1);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int k = 3;  // Rotate left by 3 positions
        leftRotate(arr, k);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 4 5 6 7 1 2 3
        }
    }
}
```

**Python Code:**

```python
def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

def left_rotate(arr, k):
    n = len(arr)
    k = k % n  # Handle k greater than n
    reverse(arr, 0, n - 1)
    reverse(arr, 0, n - k - 1)
    reverse(arr, n - k, n - 1)

arr = [1, 2, 3, 4, 5, 6, 7]
k = 3  # Rotate left by 3 positions
left_rotate(arr, k)
print(arr)  # Output: [4, 5, 6, 7, 1, 2, 3]
```

---

### 9. Sort an Array in Wave Form

**Explanation:**

1. Sort the array.
2. Swap every pair of elements to create the wave form.

**C++ Code:**

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

void sortInWave(int arr[], int n) {
    sort(arr, arr + n);
    for (int i = 0; i < n - 1; i += 2) {
        swap(arr[i], arr[i + 1]);
    }
}

int main() {
    int arr[] = {1, 3, 2, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    sortInWave(arr, n);
    for (int num : arr) {
        cout << num << " ";  // Output: 2 1 4 3 5
    }
    return 0;
}
```

**Java Code:**

```java
import java.util.Arrays;

public class WaveSort {
    public static void sortInWave(int[] arr) {
        Arrays.sort(arr);
        for (int i = 0; i < arr.length - 1; i += 2) {
            int temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 4, 5};
        sortInWave(arr);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 2 1 4 3 5
        }
    }
}
```

**Python Code:**

```python
def sort_in_wave(arr):
    arr.sort()
    for i in range(0, len(arr) - 1, 2):
        arr[i], arr[i + 1] = arr[i + 1], arr[i]

arr = [1, 3, 2, 4, 5]
sort_in_wave(arr)
print(arr)  # Output: [2, 1, 4, 3, 5]
```

---

### 10. Sort an Array Which Contains 1 to n Values

**Explanation:**

1. Use the index of the elements to place them in the correct position.

**C++ Code:**

```cpp
#include <iostream>
using namespace std;

void sortArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        while (arr[i] != i + 1) {
            swap(arr[i], arr[arr[i] - 1]);
        }
    }
}

int main() {
    int arr[] = {3, 1, 2, 5, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    sortArray(arr, n);
    for (int num : arr) {
        cout << num << " ";  // Output: 1 2 3 4 5
    }
    return 0;
}
```

**Java Code:**

```java
public class SortArray {
    public static void sortArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            while (arr[i] != i + 1) {
                int temp = arr[i];
                arr[i] = arr[temp - 1];
                arr[temp - 1] = temp;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {3, 1, 2, 5, 4};
        sortArray(arr);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 1 2 3 4 5
        }
    }
}
```

**Python Code:**

```python
def sort_array(arr):
    n = len(arr)
    for i in range(n):
        while arr[i] != i + 1:
            arr[arr[i] - 1], arr[i] = arr[i], arr[arr[i] - 1]

arr = [3, 1, 2, 5, 4]
sort_array(arr)
print(arr)  # Output: [1, 2, 3, 4, 5]
```

---

### 11. Count the Number of Possible Triangles

**Explanation:**

1. Sort the array.
   2

. For each element, use two pointers to find pairs that can form a triangle.

**C++ Code:**

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int countTriangles(int arr[], int n) {
    sort(arr, arr + n);
    int count = 0;
    for (int i = n - 1; i >= 2; i--) {
        int left = 0, right = i - 1;
        while (left < right) {
            if (arr[left] + arr[right] > arr[i]) {
                count += (right - left);
                right--;
            } else {
                left++;
            }
        }
    }
    return count;
}

int main() {
    int arr[] = {10, 21, 22, 100, 101, 200, 300};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << countTriangles(arr, n);  // Output: 6
    return 0;
}
```

**Java Code:**

```java
import java.util.Arrays;

public class TriangleCount {
    public static int countTriangles(int[] arr) {
        Arrays.sort(arr);
        int count = 0;
        for (int i = arr.length - 1; i >= 2; i--) {
            int left = 0, right = i - 1;
            while (left < right) {
                if (arr[left] + arr[right] > arr[i]) {
                    count += (right - left);
                    right--;
                } else {
                    left++;
                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int[] arr = {10, 21, 22, 100, 101, 200, 300};
        System.out.println(countTriangles(arr));  // Output: 6
    }
}
```

**Python Code:**

```python
def count_triangles(arr):
    arr.sort()
    count = 0
    n = len(arr)
    for i in range(n - 1, 1, -1):
        left, right = 0, i - 1
        while left < right:
            if arr[left] + arr[right] > arr[i]:
                count += (right - left)
                right -= 1
            else:
                left += 1
    return count

arr = [10, 21, 22, 100, 101, 200, 300]
print(count_triangles(arr))  # Output: 6
```

---

### 12. Find the Majority Element

**Explanation:**

1. Use a hash map to count the occurrences of each element.
2. Check if any element's count exceeds `n/2`.

**C++ Code:**

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

int findMajorityElement(int arr[], int n) {
    unordered_map<int, int> count;
    for (int i = 0; i < n; i++) {
        count[arr[i]]++;
        if (count[arr[i]] > n / 2) {
            return arr[i];
        }
    }
    return -1;  // No majority element
}

int main() {
    int arr[] = {1, 2, 3, 1, 1, 1, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << findMajorityElement(arr, n);  // Output: 1
    return 0;
}
```

**Java Code:**

```java
import java.util.HashMap;

public class MajorityElement {
    public static int findMajorityElement(int[] arr) {
        HashMap<Integer, Integer> count = new HashMap<>();
        for (int num : arr) {
            count.put(num, count.getOrDefault(num, 0) + 1);
            if (count.get(num) > arr.length / 2) {
                return num;
            }
        }
        return -1;  // No majority element
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 1, 1, 1, 2};
        System.out.println(findMajorityElement(arr));  // Output: 1
    }
}
```

**Python Code:**

```python
def find_majority_element(arr):
    count = {}
    n = len(arr)
    for num in arr:
        count[num] = count.get(num, 0) + 1
        if count[num] > n // 2:
            return num
    return -1  # No majority element

arr = [1, 2, 3, 1, 1, 1, 2]
print(find_majority_element(arr))  # Output: 1
```

---

### 13. Find the First Repeating Element

**Explanation:**

1. Use a hash map to track the indices of elements.
2. Traverse the array to find the minimum index of the repeating element.

**C++ Code:**

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

int findFirstRepeating(int arr[], int n) {
    unordered_map<int, int> index;
    int minIndex = -1;
    for (int i = 0; i < n; i++) {
        if (index.find(arr[i]) != index.end()) {
            if (minIndex == -1 || index[arr[i]] < minIndex) {
                minIndex = index[arr[i]];
            }
        } else {
            index[arr[i]] = i;
        }
    }
    return minIndex == -1 ? -1 : arr[minIndex];
}

int main() {
    int arr[] = {1, 2, 3, 1, 2, 3, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << findFirstRepeating(arr, n);  // Output: 1
    return 0;
}
```

**Java Code:**

```java
import java.util.HashMap;

public class FirstRepeatingElement {
    public static int findFirstRepeating(int[] arr) {
        HashMap<Integer, Integer> index = new HashMap<>();
        int minIndex = -1;
        for (int i = 0; i < arr.length; i++) {
            if (index.containsKey(arr[i])) {
                if (minIndex == -1 || index.get(arr[i]) < minIndex) {
                    minIndex = index.get(arr[i]);
                }
            } else {
                index.put(arr[i], i);
            }
        }
        return minIndex == -1 ? -1 : arr[minIndex];
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 1, 2, 3, 4};
        System.out.println(findFirstRepeating(arr));  // Output: 1
    }
}
```

**Python Code:**

```python
def find_first_repeating(arr):
    index = {}
    min_index = float('inf')
    for i in range(len(arr)):
        if arr[i] in index:
            min_index = min(min_index, index[arr[i]])
        else:
            index[arr[i]] = i
    return arr[min_index] if min_index != float('inf') else -1

arr = [1, 2, 3, 1, 2, 3, 4]
print(find_first_repeating(arr))  # Output: 1
```

---

### 14. Find All Pairs With a Given Sum

**Explanation:**

1. Use a hash map to store the elements and check for the complement.

**C++ Code:**

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

void findPairs(int arr[], int n, int sum) {
    unordered_map<int, int> map;
    for (int i = 0; i < n; i++) {
        int complement = sum - arr[i];
        if (map[complement] > 0) {
            cout << "Pair: (" << arr[i] << ", " << complement << ")" << endl;
        }
        map[arr[i]]++;
    }
}

int main() {
    int arr[] = {1, 5, 7, -1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int sum = 6;
    findPairs(arr, n, sum);
    return 0;
}
```

**Java Code:**

```java
import java.util.HashMap;

public class PairWithSum {
    public static void findPairs(int[] arr, int sum) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int num : arr) {
            int complement = sum - num;
            if (map.containsKey(complement)) {
                System.out.println("Pair: (" + num + ", " + complement + ")");
            }
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 5, 7, -1, 5};
        int sum = 6;
        findPairs(arr, sum);
    }
}
```

**Python Code:**

```python
def find_pairs(arr, sum):
    map = {}
    for num in arr:
        complement = sum - num
        if complement in map:
            print(f"Pair: ({num}, {complement})")
        map[num] = map.get(num, 0) +

1

arr = [1, 5, 7, -1, 5]
sum = 6
find_pairs(arr, sum)
```

---

### 15. Check for Anagram

**Explanation:**

1. Sort both strings and compare them or use a frequency count.

**C++ Code:**

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

bool areAnagrams(string str1, string str2) {
    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());
    return str1 == str2;
}

int main() {
    string str1 = "listen";
    string str2 = "silent";
    cout << areAnagrams(str1, str2);  // Output: 1 (true)
    return 0;
}
```

**Java Code:**

```java
import java.util.Arrays;

public class AnagramCheck {
    public static boolean areAnagrams(String str1, String str2) {
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);
        return Arrays.equals(charArray1, charArray2);
    }

    public static void main(String[] args) {
        String str1 = "listen";
        String str2 = "silent";
        System.out.println(areAnagrams(str1, str2));  // Output: true
    }
}
```

**Python Code:**

```python
def are_anagrams(str1, str2):
    return sorted(str1) == sorted(str2)

str1 = "listen"
str2 = "silent"
print(are_anagrams(str1, str2))  # Output: True
```

---

### 16. Find Missing Number in Array

**Explanation:**

1. Calculate the expected sum of the first `n` numbers.
2. Subtract the actual sum from the expected sum.

**C++ Code:**

```cpp
#include <iostream>
using namespace std;

int findMissingNumber(int arr[], int n) {
    int expectedSum = (n * (n + 1)) / 2;
    int actualSum = 0;
    for (int i = 0; i < n - 1; i++) {
        actualSum += arr[i];
    }
    return expectedSum - actualSum;
}

int main() {
    int arr[] = {1, 2, 4, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]) + 1;
    cout << findMissingNumber(arr, n);  // Output: 3
    return 0;
}
```

**Java Code:**

```java
public class MissingNumber {
    public static int findMissingNumber(int[] arr) {
        int n = arr.length + 1;
        int expectedSum = (n * (n + 1)) / 2;
        int actualSum = 0;
        for (int num : arr) {
            actualSum += num;
        }
        return expectedSum - actualSum;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5, 6};
        System.out.println(findMissingNumber(arr));  // Output: 3
    }
}
```

**Python Code:**

```python
def find_missing_number(arr):
    n = len(arr) + 1
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum

arr = [1, 2, 4, 5, 6]
print(find_missing_number(arr))  # Output: 3
```

---

### 17. Reverse a String

**Explanation:**

1. Use two pointers to swap characters.

**C++ Code:**

```cpp
#include <iostream>
using namespace std;

void reverseString(string &str) {
    int left = 0, right = str.length() - 1;
    while (left < right) {
        swap(str[left], str[right]);
        left++;
        right--;
    }
}

int main() {
    string str = "Hello, World!";
    reverseString(str);
    cout << str;  // Output: !dlroW ,olleH
    return 0;
}
```

**Java Code:**

```java
public class ReverseString {
    public static void reverseString(StringBuilder str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            char temp = str.charAt(left);
            str.setCharAt(left, str.charAt(right));
            str.setCharAt(right, temp);
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        StringBuilder str = new StringBuilder("Hello, World!");
        reverseString(str);
        System.out.println(str);  // Output: !dlroW ,olleH
    }
}
```

**Python Code:**

```python
def reverse_string(s):
    return s[::-1]

s = "Hello, World!"
print(reverse_string(s))  # Output: !dlroW ,olleH
```

---

### 18. Check if a String is a Palindrome

**Explanation:**

1. Use two pointers to check characters from both ends.

**C++ Code:**

```cpp
#include <iostream>
using namespace std;

bool isPalindrome(string str) {
    int left = 0, right = str.length() - 1;
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

int main() {
    string str = "racecar";
    cout << isPalindrome(str);  // Output: 1 (true)
    return 0;
}
```

**Java Code:**

```java
public class PalindromeCheck {
    public static boolean isPalindrome(String str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        String str = "racecar";
        System.out.println(isPalindrome(str));  // Output: true
    }
}
```

**Python Code:**

```python
def is_palindrome(s):
    return s == s[::-1]

s = "racecar"
print(is_palindrome(s))  # Output: True
```

---

### 19. Find the Largest Element in an Array

**Explanation:**

1. Traverse the array while keeping track of the maximum element.

**C++ Code:**

```cpp
#include <iostream>
using namespace std;

int findLargest(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    int arr[] = {1, 5, 3, 9, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << findLargest(arr, n);  // Output: 9
    return 0;
}
```

**Java Code:**

```java
public class LargestElement {
    public static int findLargest(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] arr = {1, 5, 3, 9, 2};
        System.out.println(findLargest(arr));  // Output: 9
    }
}
```

**Python Code:**

```python
def find_largest(arr):
    return max(arr)

arr = [1, 5, 3, 9, 2]
print(find_largest(arr))  # Output: 9
```

---

### 20. Sort an Array

**Explanation:**

1. Use any sorting algorithm (like Quick Sort, Merge Sort, or built-in sort).

**C++ Code:**

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

void sortArray(int arr[], int n) {
    sort(arr, arr + n);
}

int main() {
    int arr[] = {5, 2, 9, 1, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);
    sortArray(arr, n);
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";  // Output: 1 2 5 5 6 9
    }
    return 0;
}
```

**Java Code:**

```java
import java.util.Arrays;

public class SortArray {
    public static void sortArray(int[] arr) {
        Arrays.sort(arr);
    }

    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 5, 6};
        sortArray(arr);
        System.out.println(Arrays.toString(arr));  // Output: [1, 2, 5, 5, 6, 9]
    }
}
```

**Python Code:**

```python


def sort_array(arr):
    return sorted(arr)

arr = [5, 2, 9, 1, 5, 6]
print(sort_array(arr))  # Output: [1, 2, 5, 5, 6, 9]
```

---
