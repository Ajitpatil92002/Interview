Here's a detailed stepwise explanation of basic operations on strings, along with C++, Java, and Python code examples for each operation:

### 1. Searching For Characters and Substring in a String

**Explanation:**
To find a character or substring in a string, you can use built-in functions in each programming language.

**C++ Code:**

```cpp
#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    char ch = 'W';
    std::string sub = "World";

    // Searching for a character
    size_t charPos = str.find(ch);
    if (charPos != std::string::npos)
        std::cout << "Character '" << ch << "' found at index: " << charPos << std::endl;

    // Searching for a substring
    size_t subPos = str.find(sub);
    if (subPos != std::string::npos)
        std::cout << "Substring '" << sub << "' found at index: " << subPos << std::endl;

    return 0;
}
```

**Java Code:**

```java
public class Main {
    public static void main(String[] args) {
        String str = "Hello, World!";
        char ch = 'W';
        String sub = "World";

        // Searching for a character
        int charPos = str.indexOf(ch);
        if (charPos != -1)
            System.out.println("Character '" + ch + "' found at index: " + charPos);

        // Searching for a substring
        int subPos = str.indexOf(sub);
        if (subPos != -1)
            System.out.println("Substring '" + sub + "' found at index: " + subPos);
    }
}
```

**Python Code:**

```python
str = "Hello, World!"
ch = 'W'
sub = "World"

# Searching for a character
char_pos = str.find(ch)
if char_pos != -1:
    print(f"Character '{ch}' found at index: {char_pos}")

# Searching for a substring
sub_pos = str.find(sub)
if sub_pos != -1:
    print(f"Substring '{sub}' found at index: {sub_pos}")
```

### 2. Program to Reverse a String (Iterative and Recursive)

**Explanation:**
A string can be reversed either iteratively or recursively. The iterative approach uses a loop, while the recursive approach calls the function within itself.

**C++ Code (Iterative):**

```cpp
#include <iostream>
#include <string>

std::string reverseIterative(const std::string &str) {
    std::string reversed = str;
    int n = str.length();
    for (int i = 0; i < n / 2; i++) {
        std::swap(reversed[i], reversed[n - i - 1]);
    }
    return reversed;
}

std::string reverseRecursive(const std::string &str) {
    if (str.empty())
        return str;
    return str.back() + reverseRecursive(str.substr(0, str.length() - 1));
}

int main() {
    std::string str = "Hello, World!";

    std::cout << "Iterative: " << reverseIterative(str) << std::endl;
    std::cout << "Recursive: " << reverseRecursive(str) << std::endl;

    return 0;
}
```

**Java Code (Iterative and Recursive):**

```java
public class Main {
    public static String reverseIterative(String str) {
        StringBuilder reversed = new StringBuilder(str);
        return reversed.reverse().toString();
    }

    public static String reverseRecursive(String str) {
        if (str.isEmpty()) {
            return str;
        }
        return str.charAt(str.length() - 1) + reverseRecursive(str.substring(0, str.length() - 1));
    }

    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println("Iterative: " + reverseIterative(str));
        System.out.println("Recursive: " + reverseRecursive(str));
    }
}
```

**Python Code (Iterative and Recursive):**

```python
def reverse_iterative(s):
    return s[::-1]

def reverse_recursive(s):
    if len(s) == 0:
        return s
    return s[-1] + reverse_recursive(s[:-1])

str = "Hello, World!"
print("Iterative:", reverse_iterative(str))
print("Recursive:", reverse_recursive(str))
```

### 3. Left Rotation and Right Rotation of a String

**Explanation:**
Left rotation shifts characters in the string to the left, and right rotation shifts them to the right.

**C++ Code:**

```cpp
#include <iostream>
#include <string>

std::string leftRotate(const std::string &str, int d) {
    d = d % str.length();
    return str.substr(d) + str.substr(0, d);
}

std::string rightRotate(const std::string &str, int d) {
    d = d % str.length();
    return str.substr(str.length() - d) + str.substr(0, str.length() - d);
}

int main() {
    std::string str = "HelloWorld";
    int d = 2;

    std::cout << "Left Rotate: " << leftRotate(str, d) << std::endl;
    std::cout << "Right Rotate: " << rightRotate(str, d) << std::endl;

    return 0;
}
```

**Java Code:**

```java
public class Main {
    public static String leftRotate(String str, int d) {
        d = d % str.length();
        return str.substring(d) + str.substring(0, d);
    }

    public static String rightRotate(String str, int d) {
        d = d % str.length();
        return str.substring(str.length() - d) + str.substring(0, str.length() - d);
    }

    public static void main(String[] args) {
        String str = "HelloWorld";
        int d = 2;

        System.out.println("Left Rotate: " + leftRotate(str, d));
        System.out.println("Right Rotate: " + rightRotate(str, d));
    }
}
```

**Python Code:**

```python
def left_rotate(s, d):
    d = d % len(s)
    return s[d:] + s[:d]

def right_rotate(s, d):
    d = d % len(s)
    return s[-d:] + s[:-d]

str = "HelloWorld"
d = 2

print("Left Rotate:", left_rotate(str, d))
print("Right Rotate:", right_rotate(str, d))
```

### 4. Sort String of Characters

**Explanation:**
Sorting a string involves arranging its characters in a specified order (typically ascending).

**C++ Code:**

```cpp
#include <iostream>
#include <string>
#include <algorithm>

int main() {
    std::string str = "bacd";
    std::sort(str.begin(), str.end());
    std::cout << "Sorted String: " << str << std::endl;
    return 0;
}
```

**Java Code:**

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String str = "bacd";
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        System.out.println("Sorted String: " + new String(chars));
    }
}
```

**Python Code:**

```python
str = "bacd"
sorted_str = ''.join(sorted(str))
print("Sorted String:", sorted_str)
```

### 5. Print the Frequency of Each Character in Alphabetical Order

**Explanation:**
Count the occurrences of each character in a string and print them in alphabetical order.

**C++ Code:**

```cpp
#include <iostream>
#include <string>
#include <map>

int main() {
    std::string str = "hello";
    std::map<char, int> frequency;

    for (char ch : str) {
        frequency[ch]++;
    }

    for (const auto &pair : frequency) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }

    return 0;
}
```

**Java Code:**

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        String str = "hello";
        Map<Character, Integer> frequency = new HashMap<>();

        for (char ch : str.toCharArray()) {
            frequency.put(ch, frequency.getOrDefault(ch, 0) + 1);
        }

        frequency.keySet().stream().sorted().forEach(ch ->
            System.out.println(ch + ": " + frequency.get(ch))
        );
    }
}
```

**Python Code:**

```python
from collections import Counter

str = "hello"
frequency = Counter(str)

for ch in sorted(frequency):
    print(f"{ch}: {frequency[ch]}")
```

### 6. Swap Characters in a String (Continued)

**C++ Code (continued):**

```cpp
    std::string swapped = swapCharacters(str, i, j);
    std::cout << "Swapped String: " << swapped << std::endl;

    return 0;
}
```

**Java Code:**

```java
public class Main {
    public static String swapCharacters(String str, int i, int j) {
        char[] charArray = str.toCharArray();
        char temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return new String(charArray);
    }

    public static void main(String[] args) {
        String str = "hello";
        int i = 1, j = 3; // swap 'e' and 'l'
        String swapped = swapCharacters(str, i, j);
        System.out.println("Swapped String: " + swapped);
    }
}
```

**Python Code:**

```python
def swap_characters(s, i, j):
    s_list = list(s)  # Convert to a list for mutability
    s_list[i], s_list[j] = s_list[j], s_list[i]  # Swap
    return ''.join(s_list)  # Convert back to string

str = "hello"
i, j = 1, 3  # Swap 'e' and 'l'
swapped = swap_characters(str, i, j)
print("Swapped String:", swapped)
```

### 7. C Program to Find the Length of a String

**Explanation:**
You can calculate the length of a string by iterating through its characters until you reach the null terminator.

**C++ Code:**

```cpp
#include <iostream>

int stringLength(const char *str) {
    int length = 0;
    while (str[length] != '\0') {
        length++;
    }
    return length;
}

int main() {
    const char *str = "Hello, World!";
    std::cout << "Length of the string: " << stringLength(str) << std::endl;
    return 0;
}
```

**Java Code:**

```java
public class Main {
    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println("Length of the string: " + str.length());
    }
}
```

**Python Code:**

```python
str = "Hello, World!"
print("Length of the string:", len(str))
```

### 8. How to Insert Characters in a String at a Certain Position?

**Explanation:**
You can insert characters into a string by creating a new string that combines the parts before and after the insertion point.

**C++ Code:**

```cpp
#include <iostream>
#include <string>

std::string insertCharacter(const std::string &str, char ch, int pos) {
    return str.substr(0, pos) + ch + str.substr(pos);
}

int main() {
    std::string str = "Hello, World!";
    char ch = 'X';
    int pos = 5; // Insert 'X' at index 5
    std::string modified = insertCharacter(str, ch, pos);
    std::cout << "Modified String: " << modified << std::endl;
    return 0;
}
```

**Java Code:**

```java
public class Main {
    public static String insertCharacter(String str, char ch, int pos) {
        return str.substring(0, pos) + ch + str.substring(pos);
    }

    public static void main(String[] args) {
        String str = "Hello, World!";
        char ch = 'X';
        int pos = 5; // Insert 'X' at index 5
        String modified = insertCharacter(str, ch, pos);
        System.out.println("Modified String: " + modified);
    }
}
```

**Python Code:**

```python
def insert_character(s, ch, pos):
    return s[:pos] + ch + s[pos:]

str = "Hello, World!"
ch = 'X'
pos = 5  # Insert 'X' at index 5
modified = insert_character(str, ch, pos)
print("Modified String:", modified)
```

### 9. Program to Check if Two Strings are the Same or Not

**Explanation:**
You can compare two strings using built-in comparison functions.

**C++ Code:**

```cpp
#include <iostream>
#include <string>

int main() {
    std::string str1 = "Hello";
    std::string str2 = "Hello";

    if (str1 == str2) {
        std::cout << "Strings are the same." << std::endl;
    } else {
        std::cout << "Strings are different." << std::endl;
    }

    return 0;
}
```

**Java Code:**

```java
public class Main {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "Hello";

        if (str1.equals(str2)) {
            System.out.println("Strings are the same.");
        } else {
            System.out.println("Strings are different.");
        }
    }
}
```

**Python Code:**

```python
str1 = "Hello"
str2 = "Hello"

if str1 == str2:
    print("Strings are the same.")
else:
    print("Strings are different.")
```

### 10. Concatenating Two Strings

**Explanation:**
You can concatenate strings by using the `+` operator in each language.

**C++ Code:**

```cpp
#include <iostream>
#include <string>

int main() {
    std::string str1 = "Hello";
    std::string str2 = " World!";
    std::string result = str1 + str2;

    std::cout << "Concatenated String: " << result << std::endl;
    return 0;
}
```

**Java Code:**

```java
public class Main {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = " World!";
        String result = str1 + str2;

        System.out.println("Concatenated String: " + result);
    }
}
```

**Python Code:**

```python
str1 = "Hello"
str2 = " World!"
result = str1 + str2
print("Concatenated String:", result)
```

### 11. Remove All Occurrences of a Character in a String

**Explanation:**
To remove all occurrences of a character from a string, create a new string by excluding the specified character.

**C++ Code:**

```cpp
#include <iostream>
#include <string>

std::string removeCharacter(const std::string &str, char ch) {
    std::string result;
    for (char c : str) {
        if (c != ch) {
            result += c; // Append characters that are not 'ch'
        }
    }
    return result;
}

int main() {
    std::string str = "Hello, World!";
    char ch = 'o';
    std::string modified = removeCharacter(str, ch);
    std::cout << "Modified String: " << modified << std::endl;
    return 0;
}
```

**Java Code:**

```java
public class Main {
    public static String removeCharacter(String str, char ch) {
        StringBuilder result = new StringBuilder();
        for (char c : str.toCharArray()) {
            if (c != ch) {
                result.append(c); // Append characters that are not 'ch'
            }
        }
        return result.toString();
    }

    public static void main(String[] args) {
        String str = "Hello, World!";
        char ch = 'o';
        String modified = removeCharacter(str, ch);
        System.out.println("Modified String: " + modified);
    }
}
```

**Python Code:**

```python
def remove_character(s, ch):
    return ''.join(c for c in s if c != ch)

str = "Hello, World!"
ch = 'o'
modified = remove_character(str, ch)
print("Modified String:", modified)
```
