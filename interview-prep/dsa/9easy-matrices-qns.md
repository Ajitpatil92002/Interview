### 1. Print Matrix in Zag-Zag Fashion

**Description**: In a zigzag fashion, the elements of the matrix are printed in a zigzag manner. For example, for a 3x3 matrix, the output should be like:

```
1 2 3
6 5 4
7 8 9
```

**Algorithm**:

1. Iterate through each row of the matrix.
2. If the row index is even, print the elements from left to right.
3. If the row index is odd, print the elements from right to left.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
using namespace std;

void printZigZag(const vector<vector<int>>& matrix) {
    int rows = matrix.size();
    for (int i = 0; i < rows; i++) {
        if (i % 2 == 0) {
            for (int j = 0; j < matrix[i].size(); j++) {
                cout << matrix[i][j] << " ";
            }
        } else {
            for (int j = matrix[i].size() - 1; j >= 0; j--) {
                cout << matrix[i][j] << " ";
            }
        }
        cout << endl;
    }
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    printZigZag(matrix);
    return 0;
}
```

**Java Code**:

```java
public class ZigZagMatrix {
    public static void printZigZag(int[][] matrix) {
        int rows = matrix.length;
        for (int i = 0; i < rows; i++) {
            if (i % 2 == 0) {
                for (int j = 0; j < matrix[i].length; j++) {
                    System.out.print(matrix[i][j] + " ");
                }
            } else {
                for (int j = matrix[i].length - 1; j >= 0; j--) {
                    System.out.print(matrix[i][j] + " ");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        printZigZag(matrix);
    }
}
```

**Python Code**:

```python
def print_zigzag(matrix):
    for i in range(len(matrix)):
        if i % 2 == 0:
            print(" ".join(map(str, matrix[i])))
        else:
            print(" ".join(map(str, matrix[i][::-1])))

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print_zigzag(matrix)
```

---

### 2. Program for Scalar Multiplication of a Matrix

**Description**: Multiply each element of the matrix by a scalar value.

**Algorithm**:

1. Iterate through each element of the matrix.
2. Multiply the element by the scalar value.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
using namespace std;

void scalarMultiply(const vector<vector<int>>& matrix, int scalar, vector<vector<int>>& result) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            result[i][j] = matrix[i][j] * scalar;
        }
    }
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}};
    int scalar = 2;
    vector<vector<int>> result(2, vector<int>(3, 0));

    scalarMultiply(matrix, scalar, result);

    for (const auto& row : result) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    return 0;
}
```

**Java Code**:

```java
public class ScalarMultiplication {
    public static void scalarMultiply(int[][] matrix, int scalar, int[][] result) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = matrix[i][j] * scalar;
            }
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}};
        int scalar = 2;
        int[][] result = new int[2][3];

        scalarMultiply(matrix, scalar, result);

        for (int[] row : result) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
```

**Python Code**:

```python
def scalar_multiply(matrix, scalar):
    result = [[0] * len(matrix[0]) for _ in range(len(matrix))]
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            result[i][j] = matrix[i][j] * scalar
    return result

matrix = [[1, 2, 3], [4, 5, 6]]
scalar = 2
result = scalar_multiply(matrix, scalar)

for row in result:
    print(" ".join(map(str, row)))
```

---

### 3. Print a Given Matrix in Spiral Form

**Description**: Print the elements of the matrix in a spiral order.

**Algorithm**:

1. Define boundaries for rows and columns.
2. Iterate through the matrix in the spiral order:
   - Move right across the top row.
   - Move down the last column.
   - Move left across the bottom row.
   - Move up the first column.
3. Update boundaries after each direction change.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
using namespace std;

void printSpiral(const vector<vector<int>>& matrix) {
    int top = 0, bottom = matrix.size() - 1;
    int left = 0, right = matrix[0].size() - 1;

    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++) cout << matrix[top][i] << " ";
        top++;
        for (int i = top; i <= bottom; i++) cout << matrix[i][right] << " ";
        right--;
        if (top <= bottom) {
            for (int i = right; i >= left; i--) cout << matrix[bottom][i] << " ";
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) cout << matrix[i][left] << " ";
            left++;
        }
    }
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
    printSpiral(matrix);
    return 0;
}
```

**Java Code**:

```java
public class SpiralMatrix {
    public static void printSpiral(int[][] matrix) {
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {
            for (int i = left; i <= right; i++) System.out.print(matrix[top][i] + " ");
            top++;
            for (int i = top; i <= bottom; i++) System.out.print(matrix[i][right] + " ");
            right--;
            if (top <= bottom) {
                for (int i = right; i >= left; i--) System.out.print(matrix[bottom][i] + " ");
                bottom--;
            }
            if (left <= right) {
                for (int i = bottom; i >= top; i--) System.out.print(matrix[i][left] + " ");
                left++;
            }
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
        printSpiral(matrix);
    }
}
```

**Python Code**:

```python
def print_spiral(matrix):
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1

    while top <= bottom and left <= right:
        for i in range(left, right + 1):
            print(matrix[top][i], end=" ")
        top += 1
        for i in range(top, bottom + 1):
            print(matrix[i][right], end=" ")
        right -= 1
        if top <= bottom:
            for i in range(right, left - 1, -1):
                print(matrix[bottom][i], end=" ")
            bottom -= 1
        if left <=

 right:
            for i in range(bottom, top - 1, -1):
                print(matrix[i][left], end=" ")
            left += 1

matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
print_spiral(matrix)
```

---

### 4. Find Distinct Elements Common to All Rows of a Matrix

**Description**: Identify elements that are present in every row of the matrix.

**Algorithm**:

1. Use a hash set to store the first row's elements.
2. For each subsequent row, retain only those elements that are also present in the current row.
3. At the end, the set will contain only distinct elements common to all rows.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

unordered_set<int> commonElements(const vector<vector<int>>& matrix) {
    unordered_set<int> result(matrix[0].begin(), matrix[0].end());

    for (int i = 1; i < matrix.size(); i++) {
        unordered_set<int> currentRow(matrix[i].begin(), matrix[i].end());
        for (auto it = result.begin(); it != result.end();) {
            if (currentRow.find(*it) == currentRow.end()) {
                it = result.erase(it);
            } else {
                ++it;
            }
        }
    }
    return result;
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {2, 3, 4}, {3, 4, 5}};
    unordered_set<int> result = commonElements(matrix);

    for (int num : result) {
        cout << num << " ";
    }
    return 0;
}
```

**Java Code**:

```java
import java.util.*;

public class CommonElements {
    public static Set<Integer> findCommonElements(int[][] matrix) {
        Set<Integer> result = new HashSet<>();
        for (int num : matrix[0]) {
            result.add(num);
        }

        for (int i = 1; i < matrix.length; i++) {
            Set<Integer> currentRow = new HashSet<>();
            for (int num : matrix[i]) {
                currentRow.add(num);
            }
            result.retainAll(currentRow);
        }
        return result;
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {2, 3, 4}, {3, 4, 5}};
        Set<Integer> result = findCommonElements(matrix);

        for (int num : result) {
            System.out.print(num + " ");
        }
    }
}
```

**Python Code**:

```python
def common_elements(matrix):
    result = set(matrix[0])
    for row in matrix[1:]:
        result.intersection_update(row)
    return result

matrix = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
result = common_elements(matrix)

print(" ".join(map(str, result)))
```

---

### 5. Find Unique Elements in a Matrix

**Description**: Find all elements that appear exactly once in the matrix.

**Algorithm**:

1. Use a frequency map to count occurrences of each element.
2. Iterate through the map to collect elements that appear exactly once.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> findUniqueElements(const vector<vector<int>>& matrix) {
    unordered_map<int, int> frequency;
    for (const auto& row : matrix) {
        for (int num : row) {
            frequency[num]++;
        }
    }

    vector<int> uniqueElements;
    for (const auto& [key, value] : frequency) {
        if (value == 1) {
            uniqueElements.push_back(key);
        }
    }
    return uniqueElements;
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {2, 3, 4}, {5, 6, 1}};
    vector<int> uniqueElements = findUniqueElements(matrix);

    for (int num : uniqueElements) {
        cout << num << " ";
    }
    return 0;
}
```

**Java Code**:

```java
import java.util.*;

public class UniqueElements {
    public static List<Integer> findUniqueElements(int[][] matrix) {
        Map<Integer, Integer> frequency = new HashMap<>();
        for (int[] row : matrix) {
            for (int num : row) {
                frequency.put(num, frequency.getOrDefault(num, 0) + 1);
            }
        }

        List<Integer> uniqueElements = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() == 1) {
                uniqueElements.add(entry.getKey());
            }
        }
        return uniqueElements;
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {2, 3, 4}, {5, 6, 1}};
        List<Integer> uniqueElements = findUniqueElements(matrix);

        for (int num : uniqueElements) {
            System.out.print(num + " ");
        }
    }
}
```

**Python Code**:

```python
def find_unique_elements(matrix):
    frequency = {}
    for row in matrix:
        for num in row:
            frequency[num] = frequency.get(num, 0) + 1

    unique_elements = [key for key, value in frequency.items() if value == 1]
    return unique_elements

matrix = [[1, 2, 3], [2, 3, 4], [5, 6, 1]]
unique_elements = find_unique_elements(matrix)

print(" ".join(map(str, unique_elements)))
```

---

### 6. Find Maximum Element of Each Row in a Matrix

**Description**: Identify the maximum element in each row of the matrix.

**Algorithm**:

1. Iterate through each row of the matrix.
2. Keep track of the maximum element found in each row.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
using namespace std;

void findMaxInRows(const vector<vector<int>>& matrix) {
    for (const auto& row : matrix) {
        int maxElement = row[0];
        for (int num : row) {
            if (num > maxElement) {
                maxElement = num;
            }
        }
        cout << maxElement << " ";
    }
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    findMaxInRows(matrix);
    return 0;
}
```

**Java Code**:

```java
public class MaxInRows {
    public static void findMaxInRows(int[][] matrix) {
        for (int[] row : matrix) {
            int maxElement = row[0];
            for (int num : row) {
                if (num > maxElement) {
                    maxElement = num;
                }
            }
            System.out.print(maxElement + " ");
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        findMaxInRows(matrix);
    }
}
```

**Python Code**:

```python
def find_max_in_rows(matrix):
    for row in matrix:
        max_element = max(row)
        print(max_element, end=" ")

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
find_max_in_rows(matrix)
```

---

### 7. Shift Matrix Elements Row-Wise by K

**Description**: Shift the elements of the matrix to the right by k positions, wrapping around.

**Algorithm**:

1. For each row, shift the elements by k positions.
2. Use modulo to handle cases where k is greater than the number of columns.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
using namespace std;

void shiftRowWise(vector<vector<int>>& matrix, int k) {
    for (auto& row : matrix) {
        int cols = row.size();
        k = k % cols; // Handle cases where k > cols
        vector<int> temp(row.end() - k, row.end());
        for (int i = cols - 1; i >= k; i--) {
            row[i] = row[i - k];
        }
        for (int i = 0; i < k; i++) {
            row[i] = temp[i];
        }
    }
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}};
    int k = 2;

    shiftRowWise(matrix, k);

    for (const auto& row : matrix) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    return 0;
}
```

**Java Code**:

```java
public class ShiftMatrix {
    public static void shiftRowWise(int[][] matrix, int k) {
        for (int[] row : matrix) {
            int cols = row.length;
            k = k % cols; // Handle cases

 where k > cols
            int[] temp = new int[k];
            System.arraycopy(row, cols - k, temp, 0, k);
            for (int i = cols - 1; i >= k; i--) {
                row[i] = row[i - k];
            }
            System.arraycopy(temp, 0, row, 0, k);
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}};
        int k = 2;

        shiftRowWise(matrix, k);

        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
```

**Python Code**:

```python
def shift_row_wise(matrix, k):
    for row in matrix:
        cols = len(row)
        k = k % cols  # Handle cases where k > cols
        temp = row[-k:]  # Store the last k elements
        for i in range(cols - 1, k - 1, -1):
            row[i] = row[i - k]
        row[:k] = temp  # Place the stored elements at the front

matrix = [[1, 2, 3], [4, 5, 6]]
k = 2

shift_row_wise(matrix, k)

for row in matrix:
    print(" ".join(map(str, row)))
```

---

### 8. Swap Major and Minor Diagonals of a Square Matrix

**Description**: Swap the elements on the major diagonal with those on the minor diagonal.

**Algorithm**:

1. Iterate through each element of the matrix using the index.
2. For each element at (i, i), swap it with the element at (i, n-i-1) where n is the size of the matrix.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
using namespace std;

void swapDiagonals(vector<vector<int>>& matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; i++) {
        swap(matrix[i][i], matrix[i][n - i - 1]);
    }
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    swapDiagonals(matrix);

    for (const auto& row : matrix) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    return 0;
}
```

**Java Code**:

```java
public class SwapDiagonals {
    public static void swapDiagonals(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n; i++) {
            int temp = matrix[i][i];
            matrix[i][i] = matrix[i][n - i - 1];
            matrix[i][n - i - 1] = temp;
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        swapDiagonals(matrix);

        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
```

**Python Code**:

```python
def swap_diagonals(matrix):
    n = len(matrix)
    for i in range(n):
        matrix[i][i], matrix[i][n - i - 1] = matrix[i][n - i - 1], matrix[i][i]

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
swap_diagonals(matrix)

for row in matrix:
    print(" ".join(map(str, row)))
```

---

### 9. Squares of Matrix Diagonal Elements

**Description**: Square each element on the major diagonal of the matrix.

**Algorithm**:

1. Iterate through the matrix.
2. Square the elements at (i, i) positions.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
using namespace std;

void squareDiagonalElements(vector<vector<int>>& matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; i++) {
        matrix[i][i] *= matrix[i][i];
    }
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    squareDiagonalElements(matrix);

    for (const auto& row : matrix) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    return 0;
}
```

**Java Code**:

```java
public class SquareDiagonal {
    public static void squareDiagonalElements(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n; i++) {
            matrix[i][i] *= matrix[i][i];
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        squareDiagonalElements(matrix);

        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
```

**Python Code**:

```python
def square_diagonal_elements(matrix):
    n = len(matrix)
    for i in range(n):
        matrix[i][i] **= 2

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
square_diagonal_elements(matrix)

for row in matrix:
    print(" ".join(map(str, row)))
```

---

### 10. Sum of Middle Row and Column in Matrix

**Description**: Compute the sum of elements in the middle row and the middle column of the matrix.

**Algorithm**:

1. Identify the middle index based on the number of rows and columns.
2. Sum the elements of the middle row and column.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
using namespace std;

void sumMiddleRowAndColumn(const vector<vector<int>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    int midRow = rows / 2;
    int midCol = cols / 2;

    int rowSum = 0, colSum = 0;

    for (int i = 0; i < cols; i++) {
        rowSum += matrix[midRow][i];
    }
    for (int i = 0; i < rows; i++) {
        colSum += matrix[i][midCol];
    }

    cout << "Sum of middle row: " << rowSum << endl;
    cout << "Sum of middle column: " << colSum << endl;
}

int main() {
    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    sumMiddleRowAndColumn(matrix);
    return 0;
}
```

**Java Code**:

```java
public class SumMiddleRowAndColumn {
    public static void sumMiddleRowAndColumn(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int midRow = rows / 2;
        int midCol = cols / 2;

        int rowSum = 0, colSum = 0;

        for (int i = 0; i < cols; i++) {
            rowSum += matrix[midRow][i];
        }
        for (int i = 0; i < rows; i++) {
            colSum += matrix[i][midCol];
        }

        System.out.println("Sum of middle row: " + rowSum);
        System.out.println("Sum of middle column: " + colSum);
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        sumMiddleRowAndColumn(matrix);
    }
}
```

**Python Code**:

```python
def sum_middle_row_and_column(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    mid_row = rows // 2
    mid_col = cols // 2

    row_sum = sum(matrix[mid_row])
    col_sum = sum(row[mid_col] for row in matrix)

    print(f"Sum of middle row: {row_sum}")
    print(f"Sum of middle column: {col_sum}")

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
sum_middle_row_and_column(matrix)
```

---

### 11. Program to Check Idempotent Matrix

**Description**: Check if a matrix is idempotent, meaning that when it is multiplied by itself, it returns the same matrix.

**Algorithm**:

1. Create a function to multiply two matrices.
2. Compare the original matrix with the

result of multiplying it by itself.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
using namespace std;

bool isIdempotent(const vector<vector<int>>& matrix) {
    int n = matrix.size();
    int m = matrix[0].size();
    vector<vector<int>> product(n, vector<int>(m, 0));

    // Matrix multiplication
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            for (int k = 0; k < m; k++) {
                product[i][j] += matrix[i][k] * matrix[k][j];
            }
        }
    }

    // Check if the product is equal to the original matrix
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (product[i][j] != matrix[i][j]) {
                return false;
            }
        }
    }

    return true;
}

int main() {
    vector<vector<int>> matrix = {{1, 0}, {0, 1}};
    cout << "Is the matrix idempotent? " << (isIdempotent(matrix) ? "Yes" : "No") << endl;
    return 0;
}
```

**Java Code**:

```java
public class IdempotentMatrix {
    public static boolean isIdempotent(int[][] matrix) {
        int n = matrix.length;
        int m = matrix[0].length;
        int[][] product = new int[n][m];

        // Matrix multiplication
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                for (int k = 0; k < m; k++) {
                    product[i][j] += matrix[i][k] * matrix[k][j];
                }
            }
        }

        // Check if the product is equal to the original matrix
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (product[i][j] != matrix[i][j]) {
                    return false;
                }
            }
        }

        return true;
    }

    public static void main(String[] args) {
        int[][] matrix = {{1, 0}, {0, 1}};
        System.out.println("Is the matrix idempotent? " + (isIdempotent(matrix) ? "Yes" : "No"));
    }
}
```

**Python Code**:

```python
def is_idempotent(matrix):
    n = len(matrix)
    m = len(matrix[0])
    product = [[0] * m for _ in range(n)]

    # Matrix multiplication
    for i in range(n):
        for j in range(m):
            for k in range(m):
                product[i][j] += matrix[i][k] * matrix[k][j]

    # Check if the product is equal to the original matrix
    for i in range(n):
        for j in range(m):
            if product[i][j] != matrix[i][j]:
                return False

    return True

matrix = [[1, 0], [0, 1]]
print("Is the matrix idempotent?", "Yes" if is_idempotent(matrix) else "No")
```

---
