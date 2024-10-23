## Basic Operations on Arrays

### 1. Searching in Array

#### a. Linear Search

**Definition**: Linear search is a straightforward algorithm that checks every element in the array until the desired element is found or the end of the array is reached.

#### Steps:

1. Start from the first element of the array.
2. Compare the current element with the target element.
3. If they match, return the index of the current element.
4. If they do not match, move to the next element.
5. Repeat steps 2-4 until the target is found or the end of the array is reached.
6. If the element is not found, return -1.

**Python Example**:

```python
def linear_search(arr, target):
    for index, value in enumerate(arr):  # Loop through the array
        if value == target:               # Compare current value with target
            return index                  # Return index if found
    return -1                             # Return -1 if not found

# Example usage
arr = [5, 2, 8, 1, 3]
target = 8
print(linear_search(arr, target))  # Output: 2
```

**C++ Example**:

```cpp
#include <iostream>
using namespace std;

int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {   // Loop through the array
        if (arr[i] == target) {         // Compare current value with target
            return i;                   // Return index if found
        }
    }
    return -1;                         // Return -1 if not found
}

int main() {
    int arr[] = {5, 2, 8, 1, 3};
    int target = 8;
    cout << linearSearch(arr, 5, target) << endl;  // Output: 2
    return 0;
}
```

**Java Example**:

```java
public class LinearSearch {
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {  // Loop through the array
            if (arr[i] == target) {              // Compare current value with target
                return i;                         // Return index if found
            }
        }
        return -1;                               // Return -1 if not found
    }

    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 3};
        int target = 8;
        System.out.println(linearSearch(arr, target));  // Output: 2
    }
}
```

#### b. Binary Search

**Definition**: Binary search is an efficient algorithm for finding an item from a sorted array. It works by repeatedly dividing the search interval in half.

#### Steps:

1. Start with two pointers: one at the beginning (left) and one at the end (right) of the array.
2. Calculate the middle index: `mid = (left + right) / 2`.
3. Compare the middle element with the target:
   - If it equals the target, return the mid index.
   - If the target is less than the middle element, adjust the right pointer: `right = mid - 1`.
   - If the target is greater than the middle element, adjust the left pointer: `left = mid + 1`.
4. Repeat steps 2-3 until the target is found or the left pointer exceeds the right pointer.
5. If the element is not found, return -1.

**Python Example**:

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1  # Initialize pointers
    while left <= right:            # Loop until pointers cross
        mid = (left + right) // 2   # Calculate mid index
        if arr[mid] == target:      # Check if mid is the target
            return mid               # Return mid index if found
        elif arr[mid] < target:      # Adjust pointers
            left = mid + 1          # Search right half
        else:
            right = mid - 1         # Search left half
    return -1                        # Return -1 if not found

# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8]
target = 5
print(binary_search(arr, target))  # Output: 4
```

**C++ Example**:

```cpp
#include <iostream>
using namespace std;

int binarySearch(int arr[], int size, int target) {
    int left = 0, right = size - 1;  // Initialize pointers
    while (left <= right) {           // Loop until pointers cross
        int mid = left + (right - left) / 2; // Calculate mid index
        if (arr[mid] == target) {     // Check if mid is the target
            return mid;                // Return mid index if found
        }
        if (arr[mid] < target) {      // Adjust pointers
            left = mid + 1;           // Search right half
        } else {
            right = mid - 1;          // Search left half
        }
    }
    return -1;                        // Return -1 if not found
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};
    int target = 5;
    cout << binarySearch(arr, 8, target) << endl;  // Output: 4
    return 0;
}
```

**Java Example**:

```java
public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;  // Initialize pointers
        while (left <= right) {                 // Loop until pointers cross
            int mid = left + (right - left) / 2; // Calculate mid index
            if (arr[mid] == target) {           // Check if mid is the target
                return mid;                      // Return mid index if found
            }
            if (arr[mid] < target) {             // Adjust pointers
                left = mid + 1;                 // Search right half
            } else {
                right = mid - 1;                // Search left half
            }
        }
        return -1;                               // Return -1 if not found
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8};
        int target = 5;
        System.out.println(binarySearch(arr, target));  // Output: 4
    }
}
```

---

### 2. Write a Program to Reverse an Array

Reversing an array involves swapping elements from the start with elements from the end.

#### Steps:

1. Initialize two pointers: one at the beginning (`start`) and one at the end (`end`) of the array.
2. While the `start` pointer is less than the `end` pointer:
   - Swap the elements at the `start` and `end` indices.
   - Increment the `start` pointer and decrement the `end` pointer.
3. Continue until all elements are swapped.

**Python Example**:

```python
def reverse_array(arr):
    start, end = 0, len(arr) - 1  # Initialize pointers
    while start < end:             # Loop until pointers meet
        arr[start], arr[end] = arr[end], arr[start]  # Swap elements
        start += 1                 # Move start forward
        end -= 1                   # Move end backward
    return arr                     # Return reversed array

# Example usage
arr = [1, 2, 3, 4, 5]
print(reverse_array(arr))  # Output: [5, 4, 3, 2, 1]
```

**C++ Example**:

```cpp
#include <iostream>
using namespace std;

void reverseArray(int arr[], int size) {
    int start = 0, end = size - 1;  // Initialize pointers
    while (start < end) {            // Loop until pointers meet
        swap(arr[start], arr[end]);  // Swap elements
        start++;                      // Move start forward
        end--;                        // Move end backward
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    reverseArray(arr, size);
    for (int i : arr) {
        cout << i << " ";            // Output: 5 4 3 2 1
    }
    return 0;
}
```

**Java Example**:

```java
public class ReverseArray {
    public static void reverseArray(int[] arr) {
        int start = 0, end = arr.length - 1;  // Initialize pointers
        while (start < end) {                  // Loop until pointers meet
            int temp = arr[start];             // Swap elements
            arr[start] = arr[end];
            arr[end] = temp;
            start++;                           // Move start forward
            end--;                             // Move end backward
        }
    }



    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        reverseArray(arr);
        for (int num : arr) {
            System.out.print(num + " ");      // Output: 5 4 3 2 1
        }
    }
}
```

---

### 3. Complete Guide On Array Rotations

Array rotation involves shifting elements of the array to the left or right by a certain number of positions.

#### Steps for Right Rotation:

1. Reverse the entire array.
2. Reverse the first `k` elements (where `k` is the number of positions to rotate).
3. Reverse the remaining elements.

#### Steps for Left Rotation:

1. Reverse the first `n-k` elements (where `k` is the number of positions to rotate).
2. Reverse the last `k` elements.
3. Reverse the entire array.

**Python Example (Right Rotation)**:

```python
def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]  # Swap elements
        start += 1
        end -= 1

def rotate_right(arr, k):
    n = len(arr)
    k = k % n  # Handle rotations greater than array size
    reverse(arr, 0, n - 1)        # Reverse the entire array
    reverse(arr, 0, k - 1)        # Reverse first k elements
    reverse(arr, k, n - 1)        # Reverse remaining elements

# Example usage
arr = [1, 2, 3, 4, 5]
rotate_right(arr, 2)
print(arr)  # Output: [4, 5, 1, 2, 3]
```

**C++ Example (Right Rotation)**:

```cpp
#include <iostream>
using namespace std;

void reverse(int arr[], int start, int end) {
    while (start < end) {
        swap(arr[start], arr[end]);  // Swap elements
        start++;
        end--;
    }
}

void rotateRight(int arr[], int size, int k) {
    k = k % size;  // Handle rotations greater than array size
    reverse(arr, 0, size - 1);  // Reverse entire array
    reverse(arr, 0, k - 1);      // Reverse first k elements
    reverse(arr, k, size - 1);   // Reverse remaining elements
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    rotateRight(arr, size, 2);
    for (int i : arr) {
        cout << i << " ";          // Output: 4 5 1 2 3
    }
    return 0;
}
```

**Java Example (Right Rotation)**:

```java
public class RotateArray {
    public static void reverse(int[] arr, int start, int end) {
        while (start < end) {               // Reverse elements
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    public static void rotateRight(int[] arr, int k) {
        int n = arr.length;
        k = k % n;  // Handle rotations greater than array size
        reverse(arr, 0, n - 1);  // Reverse entire array
        reverse(arr, 0, k - 1);   // Reverse first k elements
        reverse(arr, k, n - 1);    // Reverse remaining elements
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        rotateRight(arr, 2);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 4 5 1 2 3
        }
    }
}
```

---

### 4. Search, Insert and Delete in an Unsorted Array

#### a. Search

Searching can be done using linear search (as previously explained).

#### b. Insert

To insert an element, we need to:

1. Check if there is space in the array (if the array is not full).
2. Shift elements to the right from the insert position.
3. Place the new element in the desired position.

**Python Example (Insert)**:

```python
def insert_element(arr, element, position):
    arr.append(0)  # Increase the size by one
    for i in range(len(arr) - 1, position, -1):  # Shift elements to the right
        arr[i] = arr[i - 1]
    arr[position] = element  # Insert the new element
    return arr

# Example usage
arr = [1, 2, 3, 4]
print(insert_element(arr, 5, 2))  # Output: [1, 2, 5, 3, 4]
```

**C++ Example (Insert)**:

```cpp
#include <iostream>
using namespace std;

void insertElement(int arr[], int &size, int element, int position) {
    for (int i = size; i > position; i--) {  // Shift elements to the right
        arr[i] = arr[i - 1];
    }
    arr[position] = element;  // Insert the new element
    size++;                   // Increase the size
}

int main() {
    int arr[6] = {1, 2, 3, 4};  // Size is initially 4
    int size = 4;
    insertElement(arr, size, 5, 2);
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";  // Output: 1 2 5 3 4
    }
    return 0;
}
```

**Java Example (Insert)**:

```java
import java.util.Arrays;

public class UnsortedArray {
    public static int[] insertElement(int[] arr, int element, int position) {
        arr = Arrays.copyOf(arr, arr.length + 1);  // Increase size by one
        for (int i = arr.length - 1; i > position; i--) {  // Shift elements to the right
            arr[i] = arr[i - 1];
        }
        arr[position] = element;  // Insert the new element
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};
        arr = insertElement(arr, 5, 2);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 1 2 5 3 4
        }
    }
}
```

#### c. Delete

To delete an element, we need to:

1. Find the index of the element to delete.
2. Shift all subsequent elements to the left.

**Python Example (Delete)**:

```python
def delete_element(arr, element):
    if element in arr:  # Check if element exists
        arr.remove(element)  # Remove the element
    return arr

# Example usage
arr = [1, 2, 3, 4, 5]
print(delete_element(arr, 3))  # Output: [1, 2, 4, 5]
```

**C++ Example (Delete)**:

```cpp
#include <iostream>
using namespace std;

void deleteElement(int arr[], int &size, int element) {
    int index = -1;
    for (int i = 0; i < size; i++) {  // Search for the element
        if (arr[i] == element) {
            index = i;
            break;
        }
    }
    if (index != -1) {  // If element is found
        for (int i = index; i < size - 1; i++) {  // Shift elements to the left
            arr[i] = arr[i + 1];
        }
        size--;  // Decrease size
    }
}

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int size = 5;
    deleteElement(arr, size, 3);
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";  // Output: 1 2 4 5
    }
    return 0;
}
```

**Java Example (Delete)**:

```java
public class UnsortedArray {
    public static int[] deleteElement(int[] arr, int element) {
        int index = -1;
        for (int i = 0; i < arr.length; i++) {  // Search for the element
            if (arr[i] == element) {
                index = i;
                break;
            }
        }
        if (index != -1) {  // If element is found
            int[] newArr = new int[arr.length - 1];
            for (int i = 0, j = 0; i < arr.length; i++) {
                if (i != index) {  // Copy all elements except the one to delete
                    newArr[j++] = arr[i];
                }
            }
            return newArr;
        }
        return arr;  // Return original array if element not found
    }



 public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        arr = deleteElement(arr, 3);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 1 2 4 5
        }
    }
}
```

---

### 5. Search, Insert and Delete in a Sorted Array

For a sorted array, we can use binary search for efficient searching, and the insertion/deletion operations need to maintain the sorted order.

#### a. Search (Binary Search)

1. Start with the left and right pointers at the beginning and end of the array, respectively.
2. Calculate the mid-point.
3. If the element at mid is the target, return the mid index.
4. If the target is smaller, repeat the search on the left half.
5. If larger, repeat on the right half.

**Python Example (Search)**:

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid  # Element found
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  # Element not found

# Example usage
arr = [1, 2, 3, 4, 5]
print(binary_search(arr, 3))  # Output: 2
```

**C++ Example (Search)**:

```cpp
#include <iostream>
using namespace std;

int binarySearch(int arr[], int size, int target) {
    int left = 0, right = size - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target)
            return mid;  // Element found
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;  // Element not found
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    cout << binarySearch(arr, size, 3);  // Output: 2
    return 0;
}
```

**Java Example (Search)**:

```java
public class SortedArray {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target)
                return mid;  // Element found
            else if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;  // Element not found
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(binarySearch(arr, 3));  // Output: 2
    }
}
```

#### b. Insert

1. Find the appropriate index to maintain the sorted order using binary search.
2. Shift elements to the right from the insertion point.
3. Insert the new element.

**Python Example (Insert)**:

```python
def insert_element_sorted(arr, element):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] < element:
            left = mid + 1
        else:
            right = mid - 1
    arr.insert(left, element)  # Insert at the correct position
    return arr

# Example usage
arr = [1, 2, 3, 5]
print(insert_element_sorted(arr, 4))  # Output: [1, 2, 3, 4, 5]
```

**C++ Example (Insert)**:

```cpp
#include <iostream>
using namespace std;

void insertElementSorted(int arr[], int &size, int element) {
    int index = size;  // Start with the last position
    for (int i = 0; i < size; i++) {
        if (arr[i] > element) {  // Find the position
            index = i;
            break;
        }
    }
    for (int i = size; i > index; i--) {  // Shift elements to the right
        arr[i] = arr[i - 1];
    }
    arr[index] = element;  // Insert the new element
    size++;  // Increase size
}

int main() {
    int arr[6] = {1, 2, 3, 5};  // Size is initially 4
    int size = 4;
    insertElementSorted(arr, size, 4);
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";  // Output: 1 2 3 4 5
    }
    return 0;
}
```

**Java Example (Insert)**:

```java
import java.util.Arrays;

public class SortedArray {
    public static int[] insertElementSorted(int[] arr, int element) {
        int index = arr.length;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > element) {
                index = i;
                break;
            }
        }
        arr = Arrays.copyOf(arr, arr.length + 1);  // Increase size
        for (int i = arr.length - 1; i > index; i--) {  // Shift elements to the right
            arr[i] = arr[i - 1];
        }
        arr[index] = element;  // Insert the new element
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 5};
        arr = insertElementSorted(arr, 4);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 1 2 3 4 5
        }
    }
}
```

#### c. Delete

1. Search for the element using binary search.
2. If found, shift all subsequent elements to the left.

**Python Example (Delete)**:

```python
def delete_element_sorted(arr, element):
    index = binary_search(arr, element)  # Use binary search
    if index != -1:
        arr.pop(index)  # Remove the element
    return arr

# Example usage
arr = [1, 2, 3, 4, 5]
print(delete_element_sorted(arr, 3))  # Output: [1, 2, 4, 5]
```

**C++ Example (Delete)**:

```cpp
#include <iostream>
using namespace std;

void deleteElementSorted(int arr[], int &size, int element) {
    int index = binarySearch(arr, size, element);  // Use binary search
    if (index != -1) {
        for (int i = index; i < size - 1; i++) {  // Shift elements to the left
            arr[i] = arr[i + 1];
        }
        size--;  // Decrease size
    }
}

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int size = 5;
    deleteElementSorted(arr, size, 3);
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";  // Output: 1 2 4 5
    }
    return 0;
}
```

**Java Example (Delete)**:

```java
public class SortedArray {
    public static int[] deleteElementSorted(int[] arr, int element) {
        int index = binarySearch(arr, element);  // Use binary search
        if (index != -1) {
            int[] newArr = new int[arr.length - 1];
            for (int i = 0, j = 0; i < arr.length; i++) {
                if (i != index) {  // Copy all elements except the one to delete
                    newArr[j++] = arr[i];
                }
            }
            return newArr;
        }
        return arr;  // Return original array if element not found
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        arr = deleteElementSorted(arr, 3);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 1 2 4 5
        }
    }
}
```

---

### 6. Sort an Array

Various algorithms can sort an array. Below, we cover two common algorithms: **Bubble Sort** and **Insertion Sort**.

#### a. Bubble Sort

1. Traverse the array multiple times.
2. In each pass, compare adjacent elements and swap them if they are in the wrong order.
3. Repeat until no swaps are needed.

**Python Example (Bubble Sort)**:

```python
def bubble_sort(arr):
    n = len(arr)


    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # Swap
                swapped = True
        if not swapped:  # Stop if already sorted
            break
    return arr

# Example usage
arr = [5, 3, 4, 1, 2]
print(bubble_sort(arr))  # Output: [1, 2, 3, 4, 5]
```

**C++ Example (Bubble Sort)**:

```cpp
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);  // Swap
                swapped = true;
            }
        }
        if (!swapped)  // Stop if already sorted
            break;
    }
}

int main() {
    int arr[] = {5, 3, 4, 1, 2};
    int size = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, size);
    for (int num : arr) {
        cout << num << " ";  // Output: 1 2 3 4 5
    }
    return 0;
}
```

**Java Example (Bubble Sort)**:

```java
public class SortArray {
    public static int[] bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];  // Swap
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped)  // Stop if already sorted
                break;
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {5, 3, 4, 1, 2};
        arr = bubbleSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 1 2 3 4 5
        }
    }
}
```

#### b. Insertion Sort

1. Divide the array into a sorted and an unsorted region.
2. Take one element from the unsorted region and insert it into the correct position in the sorted region.

**Python Example (Insertion Sort)**:

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:  # Shift larger elements
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key  # Insert the key
    return arr

# Example usage
arr = [5, 3, 4, 1, 2]
print(insertion_sort(arr))  # Output: [1, 2, 3, 4, 5]
```

**C++ Example (Insertion Sort)**:

```cpp
#include <iostream>
using namespace std;

void insertionSort(int arr[], int size) {
    for (int i = 1; i < size; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {  // Shift larger elements
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;  // Insert the key
    }
}

int main() {
    int arr[] = {5, 3, 4, 1, 2};
    int size = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, size);
    for (int num : arr) {
        cout << num << " ";  // Output: 1 2 3 4 5
    }
    return 0;
}
```

**Java Example (Insertion Sort)**:

```java
public class SortArray {
    public static int[] insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {  // Shift larger elements
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;  // Insert the key
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {5, 3, 4, 1, 2};
        arr = insertionSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");  // Output: 1 2 3 4 5
        }
    }
}
```

---
