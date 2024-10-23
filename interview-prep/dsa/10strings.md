## What is a String?

A **string** is a sequence of characters used to represent text. Strings are widely used in programming for various purposes, such as user input, text processing, and data representation.

### String Data Type

- **Definition**: In most programming languages, a string is treated as an array of characters terminated by a special character (usually a null character `'\0'`).
- **Memory Allocation**: Strings can be of fixed size or dynamic, depending on the language's implementation.
- **Immutable vs Mutable**: In some languages (e.g., Java, Python), strings are immutable, meaning their content cannot be changed after creation. In others (e.g., C++), strings can be mutable.

### String Operations

Common operations that can be performed on strings include:

- **Concatenation**: Joining two or more strings.
- **Length**: Finding the number of characters in a string.
- **Substrings**: Extracting a part of a string.
- **Searching**: Finding a specific character or substring.
- **Replacing**: Modifying parts of a string.
- **Splitting**: Dividing a string into multiple parts.

### Applications of String

Strings are used in various applications, including:

- Text processing and manipulation (e.g., text editors).
- Data representation (e.g., JSON, XML).
- User input handling (e.g., forms, commands).
- Communication protocols (e.g., URLs, headers).

### Basics of Strings

Strings can be defined in different ways across programming languages:

- **C++**: `std::string` from the Standard Template Library (STL).
- **Java**: The `String` class.
- **Python**: The `str` class.

### String in Different Languages

1. **C++**: Uses `std::string` for string manipulation.
2. **Java**: Provides `String`, `StringBuilder`, and `StringBuffer`.
3. **Python**: Offers `str` and various built-in methods.

### Basic Operations of String

#### 1. Concatenation

- **C++**:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str1 = "Hello, ";
    string str2 = "World!";
    string result = str1 + str2; // Concatenation
    cout << result << endl; // Output: Hello, World!
    return 0;
}
```

- **Java**:

```java
public class StringConcatenation {
    public static void main(String[] args) {
        String str1 = "Hello, ";
        String str2 = "World!";
        String result = str1 + str2; // Concatenation
        System.out.println(result); // Output: Hello, World!
    }
}
```

- **Python**:

```python
str1 = "Hello, "
str2 = "World!"
result = str1 + str2  # Concatenation
print(result)  # Output: Hello, World!
```

#### 2. Length

- **C++**:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Hello, World!";
    cout << "Length: " << str.length() << endl; // Output: 13
    return 0;
}
```

- **Java**:

```java
public class StringLength {
    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println("Length: " + str.length()); // Output: 13
    }
}
```

- **Python**:

```python
str = "Hello, World!"
print("Length:", len(str))  # Output: 13
```

### Substring & Subsequence

- **Substring**: A contiguous sequence of characters within a string.
- **Subsequence**: A sequence derived from another sequence where some elements may be deleted without changing the order.

#### Finding a Substring

- **C++**:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Hello, World!";
    string sub = str.substr(7, 5); // Extracts "World"
    cout << sub << endl; // Output: World
    return 0;
}
```

- **Java**:

```java
public class SubstringExample {
    public static void main(String[] args) {
        String str = "Hello, World!";
        String sub = str.substring(7, 12); // Extracts "World"
        System.out.println(sub); // Output: World
    }
}
```

- **Python**:

```python
str = "Hello, World!"
sub = str[7:12]  # Extracts "World"
print(sub)  # Output: World
```

### Pattern Searching

Pattern searching algorithms help find occurrences of a substring within a larger string. Common algorithms include:

1. **Naive Pattern Search**
2. **KMP (Knuth-Morris-Pratt) Algorithm**
3. **Rabin-Karp Algorithm**

#### Naive Pattern Search

- **C++**:

```cpp
#include <iostream>
#include <string>
using namespace std;

void naiveSearch(string text, string pattern) {
    int n = text.length();
    int m = pattern.length();
    for (int i = 0; i <= n - m; i++) {
        int j;
        for (j = 0; j < m; j++) {
            if (text[i + j] != pattern[j]) break;
        }
        if (j == m) cout << "Pattern found at index " << i << endl;
    }
}

int main() {
    string text = "ABABDABACDABABCABAB";
    string pattern = "ABABCABAB";
    naiveSearch(text, pattern);
    return 0;
}
```

- **Java**:

```java
public class NaivePatternSearch {
    static void naiveSearch(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        for (int i = 0; i <= n - m; i++) {
            int j;
            for (j = 0; j < m; j++) {
                if (text.charAt(i + j) != pattern.charAt(j)) break;
            }
            if (j == m) System.out.println("Pattern found at index " + i);
        }
    }

    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        naiveSearch(text, pattern);
    }
}
```

- **Python**:

```python
def naive_search(text, pattern):
    n = len(text)
    m = len(pattern)
    for i in range(n - m + 1):
        j = 0
        while j < m and text[i + j] == pattern[j]:
            j += 1
        if j == m:
            print("Pattern found at index", i)

text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
naive_search(text, pattern)
```

### Problems on Palindrome String

A **palindrome** is a string that reads the same backward as forward. Common problems include:

1. Checking if a string is a palindrome.
2. Finding the longest palindromic substring.

#### Check Palindrome

- **C++**:

```cpp
#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string str) {
    int n = str.length();
    for (int i = 0; i < n / 2; i++) {
        if (str[i] != str[n - i - 1]) return false;
    }
    return true;
}

int main() {
    string str = "madam";
    cout << "Is palindrome? " << (isPalindrome(str) ? "Yes" : "No") << endl; // Output: Yes
    return 0;
}
```

- **Java**:

```java
public class Palindrome {
    static boolean isPalindrome(String str) {
        int n = str.length();
        for (int i = 0; i < n / 2; i++) {
            if (str.charAt(i) != str.charAt(n - i - 1)) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        String str = "madam";
        System.out.println("Is palindrome? " + (isPalindrome(str) ? "Yes" : "No")); // Output: Yes
    }
}
```

- **Python**:

```python
def is_palindrome(s):
    return s == s[::-1]

s = "madam"
print("Is palindrome?", "Yes" if is_palindrome(s) else "No")  # Output: Yes
```
