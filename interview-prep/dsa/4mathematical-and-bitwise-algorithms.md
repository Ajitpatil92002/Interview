# **Mathematical and Bitwise Algorithms: A Comprehensive Guide**

Mathematical and bitwise algorithms form the backbone of many efficient algorithms used in programming. Understanding these concepts can help in developing optimized solutions for complex problems.

---

## **1. Mathematical Algorithms**

### **1.1. Euclidean Algorithm for GCD**

#### **Detailed Explanation:**

The **Euclidean Algorithm** is an efficient method for computing the greatest common divisor (GCD) of two integers, `a` and `b`. The GCD is the largest positive integer that divides both `a` and `b` without leaving a remainder.

#### **Mathematical Foundation:**

The algorithm is based on the property that `gcd(a, b) = gcd(b, a mod b)`. This means we can replace the larger number with its remainder when divided by the smaller number until one of the numbers becomes zero. The other number at that point will be the GCD.

#### **Example:**

- Find `gcd(48, 18)`
  1. 48 mod 18 = 12
  2. gcd(18, 12)
  3. 18 mod 12 = 6
  4. gcd(12, 6)
  5. 12 mod 6 = 0
  6. Thus, `gcd(48, 18) = 6`

#### **Code Examples:**

**Python:**

```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a
```

**C++:**

```cpp
int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

**Java:**

```java
public class GCD {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
```

---

### **1.2. Sieve of Eratosthenes for Prime Numbers**

#### **Detailed Explanation:**

The **Sieve of Eratosthenes** is an ancient algorithm used to find all primes up to a specified integer `n`. It is much more efficient than testing each number for primality.

#### **Algorithm Steps:**

1. Create a boolean array `prime[]` of size `n+1` and initialize all entries as `true`. Indexes will represent numbers.
2. Set the index `0` and `1` as `false` since they are not prime.
3. Start with the first prime number, `p = 2`.
4. Mark all multiples of `p` as `false`.
5. Move to the next number and repeat until `p^2 > n`.

#### **Example:**

- For `n = 30`, the algorithm would mark non-prime numbers as follows:
  - Start with `2`: Mark `4, 6, 8, ..., 30`
  - Then `3`: Mark `6, 9, 12, ..., 30`
  - Then `5`: Mark `10, 15, 20, ..., 30`
  - The remaining `true` indexes are prime numbers.

#### **Code Examples:**

**Python:**

```python
def sieve_of_eratosthenes(n):
    primes = [True] * (n + 1)
    primes[0], primes[1] = False, False
    for p in range(2, int(n**0.5) + 1):
        if primes[p]:
            for i in range(p * p, n + 1, p):
                primes[i] = False
    return [p for p in range(n + 1) if primes[p]]
```

**C++:**

```cpp
#include <vector>
using namespace std;

vector<int> sieve(int n) {
    vector<bool> prime(n + 1, true);
    prime[0] = prime[1] = false;
    for (int p = 2; p * p <= n; p++) {
        if (prime[p]) {
            for (int i = p * p; i <= n; i += p)
                prime[i] = false;
        }
    }
    vector<int> result;
    for (int p = 2; p <= n; p++)
        if (prime[p]) result.push_back(p);
    return result;
}
```

**Java:**

```java
import java.util.ArrayList;

public class Sieve {
    public static ArrayList<Integer> sieveOfEratosthenes(int n) {
        boolean[] isPrime = new boolean[n + 1];
        for (int i = 2; i <= n; i++) isPrime[i] = true;

        for (int p = 2; p * p <= n; p++) {
            if (isPrime[p]) {
                for (int i = p * p; i <= n; i += p)
                    isPrime[i] = false;
            }
        }

        ArrayList<Integer> primes = new ArrayList<>();
        for (int p = 2; p <= n; p++) {
            if (isPrime[p]) primes.add(p);
        }
        return primes;
    }
}
```

---

### **1.3. Fast Exponentiation**

#### **Detailed Explanation:**

Fast exponentiation is a method to compute `a^b` (a raised to the power b) using a divide-and-conquer approach, reducing the number of multiplications needed.

#### **Algorithm Steps:**

1. If `b` is 0, return 1.
2. If `b` is even, compute `half = a^(b/2)` and return `half * half`.
3. If `b` is odd, return `a * a^(b - 1)`.

#### **Example:**

- Compute `2^10`
  - 2^10 = (2^5)²
  - 2^5 = 2 \* (2^4)
  - Continue recursively until base case.

#### **Code Examples:**

**Python:**

```python
def fast_exponentiation(a, b):
    if b == 0:
        return 1
    half = fast_exponentiation(a, b // 2)
    if b % 2 == 0:
        return half * half
    else:
        return half * half * a
```

**C++:**

```cpp
int power(int a, int b) {
    if (b == 0) return 1;
    int half = power(a, b / 2);
    return (b % 2 == 0) ? half * half : half * half * a;
}
```

**Java:**

```java
public class Exponentiation {
    public static int power(int a, int b) {
        if (b == 0) return 1;
        int half = power(a, b / 2);
        return (b % 2 == 0) ? half * half : half * half * a;
    }
}
```

---

## **2. Bitwise Algorithms**

### **2.1. Bitwise AND, OR, XOR Operations**

#### **Detailed Explanation:**

Bitwise operations are performed on the binary representations of numbers. They are essential in low-level programming and optimization.

- **AND Operation (`&`)**: Only bits that are set in both operands are set in the result.
- **OR Operation (`|`)**: Bits are set if they are set in either operand.
- **XOR Operation (`^`)**: Bits are set if they are set in one operand but not both.

#### **Example:**

- **AND**: `5 & 3` (101 & 011) = `1` (001)
- **OR**: `5 | 3` (101 | 011) = `7` (111)
- **XOR**: `5 ^ 3` (101 ^ 011) = `6` (110)

#### **Code Examples:**

**Python:**

```python
a = 5  # Binary: 101
b = 3  # Binary: 011

print(a & b)  # Output: 1
print(a | b)  # Output: 7
print(a ^ b)  # Output: 6
```

**C++:**

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 3;
    cout << (a & b) << endl; // 1
    cout << (a | b) << endl; // 7
    cout << (a ^ b) << endl; // 6
    return 0;
}
```

**Java:**

```java
public class BitwiseOperations {
    public static void main(String[] args) {
        int a = 5, b = 3;
        System.out.println(a & b); // 1
        System.out.println(a | b); // 7
        System.out.println(a ^ b); // 6
    }
}
```

---

### **2.2. Bit Shifting**

#### **Detailed Explanation:**

Bit shifting allows you to efficiently multiply or divide by powers of 2 by shifting bits left or right.

- **Left Shift (`<<`)**: Sh

ifts bits to the left, equivalent to multiplying by 2.

- **Right Shift (`>>`)**: Shifts bits to the right, equivalent to dividing by 2.

#### **Example:**

- **Left Shift**: `5 << 1` (101 << 1) = `10` (1010)
- **Right Shift**: `5 >> 1` (101 >> 1) = `2` (10)

#### **Code Examples:**

**Python:**

```python
a = 5
print(a << 1)  # Output: 10
print(a >> 1)  # Output: 2
```

**C++:**

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5;
    cout << (a << 1) << endl; // 10
    cout << (a >> 1) << endl; // 2
    return 0;
}
```

**Java:**

```java
public class BitShifting {
    public static void main(String[] args) {
        int a = 5;
        System.out.println(a << 1); // 10
        System.out.println(a >> 1); // 2
    }
}
```

---

### **2.3. Count Set Bits**

#### **Detailed Explanation:**

Counting set bits (or 1s) in the binary representation of an integer can be done efficiently using bitwise operations.

#### **Algorithm Steps:**

1. Initialize a counter to 0.
2. While the number is greater than 0, increment the counter if the least significant bit is 1.
3. Right shift the number until it becomes 0.

#### **Example:**

- For `n = 7` (binary: `111`), the count of set bits is `3`.

#### **Code Examples:**

**Python:**

```python
def count_set_bits(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count
```

**C++:**

```cpp
int countSetBits(int n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}
```

**Java:**

```java
public class CountSetBits {
    public static int countSetBits(int n) {
        int count = 0;
        while (n != 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }
}
```

---

## **3. Conclusion**

Mathematical and bitwise algorithms are vital tools in a programmer's toolkit. They enhance performance and provide efficient solutions to complex problems. By mastering these algorithms, developers can write cleaner, more efficient code that performs better in real-world applications.

---

Here are the solutions for the practice questions related to mathematical and bitwise algorithms, implemented in Python, C++, and Java where applicable.

### 1. Implement the Euclidean Algorithm for GCD in all three languages.

**Python:**

```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

print(gcd(48, 18))  # Output: 6
```

**C++:**

```cpp
#include <iostream>
using namespace std;

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    cout << gcd(48, 18) << endl; // Output: 6
    return 0;
}
```

**Java:**

```java
public class GCD {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        System.out.println(gcd(48, 18)); // Output: 6
    }
}
```

---

### 2. Create a function to find all prime numbers up to `n` using the Sieve of Eratosthenes.

**Python:**

```python
def sieve_of_eratosthenes(n):
    primes = [True] * (n + 1)
    primes[0], primes[1] = False, False
    for p in range(2, int(n**0.5) + 1):
        if primes[p]:
            for i in range(p * p, n + 1, p):
                primes[i] = False
    return [p for p in range(n + 1) if primes[p]]

print(sieve_of_eratosthenes(30))  # Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

**C++:**

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> sieve(int n) {
    vector<bool> prime(n + 1, true);
    prime[0] = prime[1] = false;
    for (int p = 2; p * p <= n; p++) {
        if (prime[p]) {
            for (int i = p * p; i <= n; i += p)
                prime[i] = false;
        }
    }
    vector<int> result;
    for (int p = 2; p <= n; p++)
        if (prime[p]) result.push_back(p);
    return result;
}

int main() {
    vector<int> primes = sieve(30);
    for (int p : primes)
        cout << p << " "; // Output: 2 3 5 7 11 13 17 19 23 29
    cout << endl;
    return 0;
}
```

**Java:**

```java
import java.util.ArrayList;

public class Sieve {
    public static ArrayList<Integer> sieveOfEratosthenes(int n) {
        boolean[] isPrime = new boolean[n + 1];
        for (int i = 2; i <= n; i++) isPrime[i] = true;

        for (int p = 2; p * p <= n; p++) {
            if (isPrime[p]) {
                for (int i = p * p; i <= n; i += p)
                    isPrime[i] = false;
            }
        }

        ArrayList<Integer> primes = new ArrayList<>();
        for (int p = 2; p <= n; p++) {
            if (isPrime[p]) primes.add(p);
        }
        return primes;
    }

    public static void main(String[] args) {
        System.out.println(sieveOfEratosthenes(30)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    }
}
```

---

### 3. Write a function that uses fast exponentiation to calculate `a^b`.

**Python:**

```python
def fast_exponentiation(a, b):
    if b == 0:
        return 1
    half = fast_exponentiation(a, b // 2)
    if b % 2 == 0:
        return half * half
    else:
        return half * half * a

print(fast_exponentiation(2, 10))  # Output: 1024
```

**C++:**

```cpp
#include <iostream>
using namespace std;

int power(int a, int b) {
    if (b == 0) return 1;
    int half = power(a, b / 2);
    return (b % 2 == 0) ? half * half : half * half * a;
}

int main() {
    cout << power(2, 10) << endl; // Output: 1024
    return 0;
}
```

**Java:**

```java
public class Exponentiation {
    public static int power(int a, int b) {
        if (b == 0) return 1;
        int half = power(a, b / 2);
        return (b % 2 == 0) ? half * half : half * half * a;
    }

    public static void main(String[] args) {
        System.out.println(power(2, 10)); // Output: 1024
    }
}
```

---

### 4. Implement a function to perform AND, OR, and XOR operations on two integers.

**Python:**

```python
def bitwise_operations(a, b):
    return a & b, a | b, a ^ b

a, b = 5, 3
and_result, or_result, xor_result = bitwise_operations(a, b)
print(and_result, or_result, xor_result)  # Output: 1 7 6
```

**C++:**

```cpp
#include <iostream>
using namespace std;

void bitwise_operations(int a, int b) {
    cout << (a & b) << endl; // AND
    cout << (a | b) << endl; // OR
    cout << (a ^ b) << endl; // XOR
}

int main() {
    bitwise_operations(5, 3); // Output: 1 7 6
    return 0;
}
```

**Java:**

```java
public class BitwiseOperations {
    public static void main(String[] args) {
        int a = 5, b = 3;
        System.out.println(a & b); // AND
        System.out.println(a | b); // OR
        System.out.println(a ^ b); // XOR
    }
}
```

---

### 5. Create a program to count the number of set bits in a binary representation of a number.

**Python:**

```python
def count_set_bits(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count

print(count_set_bits(7))  # Output: 3
```

**C++:**

```cpp
#include <iostream>
using namespace std;

int countSetBits(int n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

int main() {
    cout << countSetBits(7) << endl; // Output: 3
    return 0;
}
```

**Java:**

```java
public class CountSetBits {
    public static int countSetBits(int n) {
        int count = 0;
        while (n != 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countSetBits(7)); // Output: 3
    }
}
```

---

### 6. Write a function to determine if a number is a power of two using bitwise operations.

**Python:**

```python
def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

print(is_power_of_two(8))  # Output: True
print(is_power_of_two(10)) # Output: False
```

**C++:**

```cpp
#include <iostream>
using namespace std;

bool isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

int main() {
    cout << isPowerOfTwo(8) << endl;  // Output: 1 (True)
    cout << isPowerOfTwo(10) << endl; // Output: 0 (False)
    return 0;
}
```

**Java:**

```java
public class PowerOfTwo {
    public static boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }

    public static void main(String[] args) {
        System.out.println(isPowerOfTwo(8));  // Output: true
        System.out.println(isPowerOfTwo(10)); // Output: false
    }
}
```

---

###

7.  Implement a function to swap two numbers without using a temporary variable using XOR.

**Python:**

```python
def swap(a, b):
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return a, b

a, b = 5, 3
a, b = swap(a, b)
print(a, b)  # Output: 3 5
```

**C++:**

```cpp
#include <iostream>
using namespace std;

void swap(int &a, int &b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}

int main() {
    int a = 5, b = 3;
    swap(a, b);
    cout << a << " " << b << endl; // Output: 3 5
    return 0;
}
```

**Java:**

```java
public class Swap {
    public static void swap(int[] nums) {
        nums[0] = nums[0] ^ nums[1];
        nums[1] = nums[0] ^ nums[1];
        nums[0] = nums[0] ^ nums[1];
    }

    public static void main(String[] args) {
        int[] nums = {5, 3};
        swap(nums);
        System.out.println(nums[0] + " " + nums[1]); // Output: 3 5
    }
}
```

---

### 8. Create a function that determines if two integers have opposite signs using bitwise operations.

**Python:**

```python
def have_opposite_signs(a, b):
    return (a ^ b) < 0

print(have_opposite_signs(5, -3))  # Output: True
print(have_opposite_signs(5, 3))   # Output: False
```

**C++:**

```cpp
#include <iostream>
using namespace std;

bool haveOppositeSigns(int a, int b) {
    return (a ^ b) < 0;
}

int main() {
    cout << haveOppositeSigns(5, -3) << endl; // Output: 1 (True)
    cout << haveOppositeSigns(5, 3) << endl;  // Output: 0 (False)
    return 0;
}
```

**Java:**

```java
public class OppositeSigns {
    public static boolean haveOppositeSigns(int a, int b) {
        return (a ^ b) < 0;
    }

    public static void main(String[] args) {
        System.out.println(haveOppositeSigns(5, -3)); // Output: true
        System.out.println(haveOppositeSigns(5, 3));  // Output: false
    }
}
```

---

### 9. Write a program that multiplies two numbers using bitwise operations only.

**Python:**

```python
def multiply(a, b):
    result = 0
    while b:
        if b & 1:
            result += a
        a <<= 1  # Equivalent to a * 2
        b >>= 1  # Equivalent to b // 2
    return result

print(multiply(5, 3))  # Output: 15
```

**C++:**

```cpp
#include <iostream>
using namespace std;

int multiply(int a, int b) {
    int result = 0;
    while (b) {
        if (b & 1) {
            result += a;
        }
        a <<= 1; // Equivalent to a * 2
        b >>= 1; // Equivalent to b / 2
    }
    return result;
}

int main() {
    cout << multiply(5, 3) << endl; // Output: 15
    return 0;
}
```

**Java:**

```java
public class Multiply {
    public static int multiply(int a, int b) {
        int result = 0;
        while (b != 0) {
            if ((b & 1) == 1) {
                result += a;
            }
            a <<= 1; // Equivalent to a * 2
            b >>= 1; // Equivalent to b / 2
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(multiply(5, 3)); // Output: 15
    }
}
```

---

### 10. Implement a function to reverse the bits of an integer.

**Python:**

```python
def reverse_bits(n):
    result = 0
    for _ in range(32):  # Assuming a 32-bit integer
        result = (result << 1) | (n & 1)
        n >>= 1
    return result

print(reverse_bits(5))  # Output: 2684354560 (for 32-bit representation)
```

**C++:**

```cpp
#include <iostream>
using namespace std;

unsigned int reverseBits(unsigned int n) {
    unsigned int result = 0;
    for (int i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result;
}

int main() {
    cout << reverseBits(5) << endl; // Output: 2684354560
    return 0;
}
```

**Java:**

```java
public class ReverseBits {
    public static int reverseBits(int n) {
        int result = 0;
        for (int i = 0; i < 32; i++) {
            result = (result << 1) | (n & 1);
            n >>= 1;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(reverseBits(5)); // Output: 2684354560
    }
}
```

---
