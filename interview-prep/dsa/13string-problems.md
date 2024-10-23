Here's a detailed explanation for the medium problems on strings you mentioned, along with C++, Java, and Python code examples:

### 1. K’th Non-repeating Character

**Problem Statement**: Given a string, find the K-th non-repeating character in it.

**Explanation**:

- Use a frequency map to count occurrences of each character.
- Iterate through the string to find the K-th character that appears only once.

**Steps**:

1. Create a frequency map for the characters in the string.
2. Iterate through the string and keep a count of non-repeating characters.
3. Return the K-th non-repeating character if it exists.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

char kthNonRepeating(string str, int k) {
    unordered_map<char, int> freq;
    for (char c : str) {
        freq[c]++;
    }
    for (char c : str) {
        if (freq[c] == 1) {
            if (--k == 0) return c;
        }
    }
    return '\0'; // indicates not found
}
```

**Java**:

```java
import java.util.HashMap;

public class Main {
    public static char kthNonRepeating(String str, int k) {
        HashMap<Character, Integer> freq = new HashMap<>();
        for (char c : str.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        for (char c : str.toCharArray()) {
            if (freq.get(c) == 1) {
                if (--k == 0) return c;
            }
        }
        return '\0'; // indicates not found
    }
}
```

**Python**:

```python
def kth_non_repeating(s, k):
    freq = {}
    for c in s:
        freq[c] = freq.get(c, 0) + 1
    for c in s:
        if freq[c] == 1:
            k -= 1
            if k == 0:
                return c
    return None  # indicates not found
```

### 2. Queries for Characters in a Repeated String

**Problem Statement**: Given a string and a number of queries, each query consists of a character and an index. Determine how many times the character appears in the repeated string.

**Explanation**:

- Create a frequency count of characters in the string.
- For each query, compute the total occurrences based on the repeated times of the string.

**Steps**:

1. Count occurrences of each character in the string.
2. For each query, calculate occurrences by multiplying the count with the number of repetitions.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

int countCharacterInRepeatedString(string s, char c, long long n) {
    long long count = 0;
    for (char ch : s) {
        if (ch == c) count++;
    }
    long long completeStrings = n / s.length();
    long long remainder = n % s.length();
    count *= completeStrings;
    for (int i = 0; i < remainder; i++) {
        if (s[i] == c) count++;
    }
    return count;
}
```

**Java**:

```java
import java.util.HashMap;

public class Main {
    public static long countCharacterInRepeatedString(String s, char c, long n) {
        long count = 0;
        for (char ch : s.toCharArray()) {
            if (ch == c) count++;
        }
        long completeStrings = n / s.length();
        long remainder = n % s.length();
        count *= completeStrings;
        for (int i = 0; i < remainder; i++) {
            if (s.charAt(i) == c) count++;
        }
        return count;
    }
}
```

**Python**:

```python
def count_character_in_repeated_string(s, c, n):
    count = s.count(c)
    complete_strings = n // len(s)
    remainder = n % len(s)
    count *= complete_strings
    count += s[:remainder].count(c)
    return count
```

### 3. URLify a Given String (Replace Spaces with %20)

**Problem Statement**: Replace all spaces in a string with "%20".

**Explanation**:

- Iterate through the string and replace spaces while constructing the new string.

**Steps**:

1. Create a result string or array.
2. Iterate through the original string, appending characters to the result.
3. Replace spaces with "%20".

**Code**:

**C++**:

```cpp
#include <iostream>
#include <string>
using namespace std;

string urlify(string str) {
    string result;
    for (char c : str) {
        if (c == ' ') {
            result += "%20";
        } else {
            result += c;
        }
    }
    return result;
}
```

**Java**:

```java
public class Main {
    public static String urlify(String str) {
        StringBuilder result = new StringBuilder();
        for (char c : str.toCharArray()) {
            if (c == ' ') {
                result.append("%20");
            } else {
                result.append(c);
            }
        }
        return result.toString();
    }
}
```

**Python**:

```python
def urlify(s):
    return s.replace(' ', '%20')
```

### 4. Count of Total Anagram Substrings

**Problem Statement**: Given a string, count the number of substrings that are anagrams of a given pattern.

**Explanation**:

- Use a sliding window approach with frequency counts to track characters.

**Steps**:

1. Create a frequency map for the pattern.
2. Use a sliding window on the string, comparing the frequency of the current substring to the pattern.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

int countAnagramSubstrings(string str, string pattern) {
    int k = pattern.size();
    unordered_map<char, int> patternCount, windowCount;
    for (char c : pattern) patternCount[c]++;

    int count = 0;
    for (int i = 0; i < str.size(); i++) {
        windowCount[str[i]]++;
        if (i >= k) {
            if (windowCount[str[i - k]] == 1) windowCount.erase(str[i - k]);
            else windowCount[str[i - k]]--;
        }
        if (windowCount == patternCount) count++;
    }
    return count;
}
```

**Java**:

```java
import java.util.HashMap;

public class Main {
    public static int countAnagramSubstrings(String str, String pattern) {
        int k = pattern.length();
        HashMap<Character, Integer> patternCount = new HashMap<>();
        for (char c : pattern.toCharArray()) patternCount.put(c, patternCount.getOrDefault(c, 0) + 1);

        HashMap<Character, Integer> windowCount = new HashMap<>();
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            windowCount.put(str.charAt(i), windowCount.getOrDefault(str.charAt(i), 0) + 1);
            if (i >= k) {
                char leftChar = str.charAt(i - k);
                windowCount.put(leftChar, windowCount.get(leftChar) - 1);
                if (windowCount.get(leftChar) == 0) windowCount.remove(leftChar);
            }
            if (windowCount.equals(patternCount)) count++;
        }
        return count;
    }
}
```

**Python**:

```python
def count_anagram_substrings(s, pattern):
    from collections import Counter
    k = len(pattern)
    pattern_count = Counter(pattern)
    window_count = Counter()
    count = 0

    for i in range(len(s)):
        window_count[s[i]] += 1
        if i >= k:
            left_char = s[i - k]
            window_count[left_char] -= 1
            if window_count[left_char] == 0:
                del window_count[left_char]
        if window_count == pattern_count:
            count += 1
    return count
```

Certainly! Continuing with the code for counting the number of binary strings without consecutive 1's:

### 5. Count Number of Binary Strings Without Consecutive 1's (continued)

**Java**:

```java
public class Main {
    public static int countBinaryStrings(int n) {
        if (n == 1) return 2; // "0", "1"
        if (n == 2) return 3; // "00", "01", "10"

        int prevZero = 1, prevOne = 1;
        int currentZero, currentOne;

        for (int i = 3; i <= n; i++) {
            currentZero = prevZero + prevOne; // Count of strings ending with 0
            currentOne = prevZero; // Count of strings ending with 1
            prevZero = currentZero;
            prevOne = currentOne;
        }
        return prevZero + prevOne; // Total count
    }

    public static void main(String[] args) {
        int n = 5; // Example input
        System.out.println(countBinaryStrings(n)); // Output the count
    }
}
```

**Python**:

```python
def count_binary_strings(n):
    if n == 1:
        return 2  # "0", "1"
    if n == 2:
        return 3  # "00", "01", "10"

    prev_zero, prev_one = 1, 1
    for i in range(3, n + 1):
        current_zero = prev_zero + prev_one  # Count of strings ending with 0
        current_one = prev_zero  # Count of strings ending with 1
        prev_zero, prev_one = current_zero, current_one

    return prev_zero + prev_one  # Total count

# Example usage
n = 5  # Example input
print(count_binary_strings(n))  # Output the count
```

### 6. Lexicographically Next String

**Problem Statement**: Find the lexicographically next greater permutation of a given string.

**Explanation**:

- To find the next permutation, reverse the suffix of the string and swap the pivot with the smallest character larger than the pivot.

**Steps**:

1. Traverse the string from the end to find the first character (pivot) that is smaller than its next character.
2. Find the smallest character on the right of the pivot that is larger than the pivot.
3. Swap them and reverse the suffix.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

void nextPermutation(string &s) {
    int n = s.size();
    int i = n - 2;
    while (i >= 0 && s[i] >= s[i + 1]) i--;
    if (i >= 0) {
        int j = n - 1;
        while (s[j] <= s[i]) j--;
        swap(s[i], s[j]);
    }
    reverse(s.begin() + i + 1, s.end());
}

int main() {
    string s = "abc";
    nextPermutation(s);
    cout << s; // Output the next permutation
    return 0;
}
```

**Java**:

```java
import java.util.Arrays;

public class Main {
    public static void nextPermutation(char[] s) {
        int n = s.length;
        int i = n - 2;
        while (i >= 0 && s[i] >= s[i + 1]) i--;
        if (i >= 0) {
            int j = n - 1;
            while (s[j] <= s[i]) j--;
            swap(s, i, j);
        }
        reverse(s, i + 1, n - 1);
    }

    private static void swap(char[] s, int i, int j) {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

    private static void reverse(char[] s, int start, int end) {
        while (start < end) {
            swap(s, start++, end--);
        }
    }

    public static void main(String[] args) {
        String str = "abc";
        char[] s = str.toCharArray();
        nextPermutation(s);
        System.out.println(new String(s)); // Output the next permutation
    }
}
```

**Python**:

```python
def next_permutation(s):
    s = list(s)
    n = len(s)
    i = n - 2
    while i >= 0 and s[i] >= s[i + 1]:
        i -= 1
    if i >= 0:
        j = n - 1
        while s[j] <= s[i]:
            j -= 1
        s[i], s[j] = s[j], s[i]
    s[i + 1:] = reversed(s[i + 1:])
    return ''.join(s)

# Example usage
s = "abc"
print(next_permutation(s))  # Output the next permutation
```

### 7. Check If Given String Can Be Split Into Four Distinct Strings

**Problem Statement**: Given a string, determine if it can be split into four distinct non-empty substrings.

**Explanation**:

- Use nested loops to generate all possible combinations of the four substrings and check their uniqueness.

**Steps**:

1. Iterate over all possible splits for the first three substrings.
2. The fourth substring is determined by the remaining string.
3. Check for distinctiveness.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

bool canSplitIntoFourDistinct(string s) {
    int n = s.size();
    for (int i = 1; i < n - 2; i++) {
        for (int j = i + 1; j < n - 1; j++) {
            for (int k = j + 1; k < n; k++) {
                unordered_set<string> substrings = {s.substr(0, i), s.substr(i, j - i), s.substr(j, k - j), s.substr(k)};
                if (substrings.size() == 4) return true;
            }
        }
    }
    return false;
}

int main() {
    string s = "abcde";
    cout << canSplitIntoFourDistinct(s); // Output 1 (true) or 0 (false)
    return 0;
}
```

**Java**:

```java
import java.util.HashSet;

public class Main {
    public static boolean canSplitIntoFourDistinct(String s) {
        int n = s.length();
        for (int i = 1; i < n - 2; i++) {
            for (int j = i + 1; j < n - 1; j++) {
                for (int k = j + 1; k < n; k++) {
                    HashSet<String> substrings = new HashSet<>();
                    substrings.add(s.substring(0, i));
                    substrings.add(s.substring(i, j));
                    substrings.add(s.substring(j, k));
                    substrings.add(s.substring(k));
                    if (substrings.size() == 4) return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        String s = "abcde";
        System.out.println(canSplitIntoFourDistinct(s)); // Output true or false
    }
}
```

**Python**:

```python
def can_split_into_four_distinct(s):
    n = len(s)
    for i in range(1, n - 2):
        for j in range(i + 1, n - 1):
            for k in range(j + 1, n):
                substrings = {s[:i], s[i:j], s[j:k], s[k:]}
                if len(substrings) == 4:
                    return True
    return False

# Example usage
s = "abcde"
print(can_split_into_four_distinct(s))  # Output True or False
```

### 8. Word Break Problem

**Problem Statement**: Given a string and a dictionary of words, determine if the string can be segmented into space-separated words.

**Explanation**:

- Use dynamic programming to check if substrings can form valid words.

**Steps**:

1. Create a boolean array to track if substrings can be formed.
2. Iterate through the string and check against the dictionary.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <unordered_set>
#include <vector>
using namespace std;

bool wordBreak(string s, unordered_set<string>& dict) {
    vector<bool> dp(s.size() + 1, false);
    dp[0] = true; // Empty string can be formed

    for (int i = 1; i <= s.size(); i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && dict.count(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.size()];
}

int main() {
    unordered_set<string> dict = {"leet", "code"};
    string s = "leetcode";
    cout << wordBreak(s, dict); // Output 1 (true) or 0 (false)
    return 0;
}
```

**Java**:

```java
import java.util.HashSet;

public class Main {
    public static boolean wordBreak(String s, HashSet<String> dict) {
        boolean[] dp = new boolean[s.length()

 + 1];
        dp[0] = true; // Empty string can be formed

        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && dict.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }

    public static void main(String[] args) {
        HashSet<String> dict = new HashSet<>();
        dict.add("leet");
        dict.add("code");
        String s = "leetcode";
        System.out.println(wordBreak(s, dict)); // Output true or false
    }
}
```

**Python**:

```python
def word_break(s, word_dict):
    dp = [False] * (len(s) + 1)
    dp[0] = True  # Empty string can be formed

    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_dict:
                dp[i] = True
                break
    return dp[len(s)]

# Example usage
word_dict = {"leet", "code"}
s = "leetcode"
print(word_break(s, word_dict))  # Output True or False
```

### 9. Check for Balanced Parentheses in an Expression with O(1) Space

**Problem Statement**: Given a string containing just the characters `(`, `)`, ``, `{`, `}`, `[` and `]`, determine if the input string is valid.

**Explanation**:

- A stack can be used to validate parentheses, but we'll implement it with a counter.

**Steps**:

1. Iterate through the string and update counters for open and close parentheses.
2. Validate balance.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

bool isValid(string s) {
    unordered_map<char, char> pairs = {{')', '('}, {']', '['}, {'}', '{'}};
    int balance = 0;

    for (char c : s) {
        if (pairs.count(c)) {
            balance--;
        } else {
            balance++;
        }
        if (balance < 0) return false;
    }
    return balance == 0;
}

int main() {
    string s = "([])";
    cout << isValid(s); // Output 1 (true) or 0 (false)
    return 0;
}
```

**Java**:

```java
import java.util.HashMap;

public class Main {
    public static boolean isValid(String s) {
        HashMap<Character, Character> pairs = new HashMap<>() {{
            put(')', '(');
            put(']', '[');
            put('}', '{');
        }};
        int balance = 0;

        for (char c : s.toCharArray()) {
            if (pairs.containsKey(c)) {
                balance--;
            } else {
                balance++;
            }
            if (balance < 0) return false;
        }
        return balance == 0;
    }

    public static void main(String[] args) {
        String s = "([])";
        System.out.println(isValid(s)); // Output true or false
    }
}
```

**Python**:

```python
def is_valid(s):
    pairs = {')': '(', ']': '[', '}': '{'}
    balance = 0

    for c in s:
        if c in pairs:
            balance -= 1
        else:
            balance += 1
        if balance < 0:
            return False
    return balance == 0

# Example usage
s = "([])"
print(is_valid(s))  # Output True or False
```

### 10. Length of Longest Balanced Subsequence

**Problem Statement**: Find the length of the longest balanced subsequence in a string of parentheses.

**Explanation**:

- Count matched pairs of parentheses.

**Steps**:

1. Use a counter to track matched pairs.

**Code**:

**C++**:

```cpp
#include <iostream>
using namespace std;

int longestBalancedSubsequence(string s) {
    int balance = 0, count = 0;
    for (char c : s) {
        if (c == '(') {
            balance++;
        } else if (c == ')' && balance > 0) {
            balance--;
            count += 2; // One matched pair
        }
    }
    return count;
}

int main() {
    string s = "(()))";
    cout << longestBalancedSubsequence(s); // Output length
    return 0;
}
```

**Java**:

```java
public class Main {
    public static int longestBalancedSubsequence(String s) {
        int balance = 0, count = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                balance++;
            } else if (c == ')' && balance > 0) {
                balance--;
                count += 2; // One matched pair
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String s = "(()))";
        System.out.println(longestBalancedSubsequence(s)); // Output length
    }
}
```

**Python**:

```python
def longest_balanced_subsequence(s):
    balance = 0
    count = 0
    for c in s:
        if c == '(':
            balance += 1
        elif c == ')' and balance > 0:
            balance -= 1
            count += 2  # One matched pair
    return count

# Example usage
s = "(()))"
print(longest_balanced_subsequence(s))  # Output length
```

### 11. Minimum Swaps for Bracket Balancing

**Problem Statement**: Find the minimum number of swaps required to balance brackets.

**Explanation**:

- Count mismatched pairs.

**Steps**:

1. Iterate and track swaps needed.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <stack>
using namespace std;

int minSwaps(string s) {
    stack<char> stk;
    for (char c : s) {
        if (c == '(') {
            stk.push(c);
        } else {
            if (!stk.empty()) stk.pop();
        }
    }
    return (stk.size() + 1) / 2; // Each pair requires one swap
}

int main() {
    string s = "())(";
    cout << minSwaps(s); // Output minimum swaps
    return 0;
}
```

**Java**:

```java
import java.util.Stack;

public class Main {
    public static int minSwaps(String s) {
        Stack<Character> stk = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') {
                stk.push(c);
            } else {
                if (!stk.isEmpty()) stk.pop();
            }
        }
        return (stk.size() + 1) / 2; // Each pair requires one swap
    }

    public static void main(String[] args) {
        String s = "())(";
        System.out.println(minSwaps(s)); // Output minimum swaps
    }
}
```

**Python**:

```python
def min_swaps(s):
    stack = []
    for c in s:
        if c == '(':
            stack.append(c)
        else:
            if stack:
                stack.pop()
    return (len(stack) + 1) // 2  # Each pair requires one swap

# Example usage
s = "())("
print(min_swaps(s))  # Output minimum swaps
```

### 12. Convert a Sentence into its Equivalent Mobile Numeric Keypad Sequence

**Problem Statement**: Convert a string into its equivalent sequence based on a mobile numeric keypad.

**Explanation**:

- Map characters to keypad numbers.

**Steps**:

1. Create a mapping for characters to numbers.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

string toKeypadSequence(string s) {
    unordered_map<char, string> keypad = {
        {'a', "2"}, {'b', "22"}, {'c', "222"},
        {'d', "3"}, {'e', "33"}, {'f', "333"},
        {'g', "4"}, {'h', "44"}, {'i', "444"},
        {'j', "5"}, {'k', "55"}, {'l', "555"},
        {'m', "6"}, {'n', "66"}, {'o', "666"},
        {'p', "7"}, {'q', "77"}, {'r', "777"}, {'s', "7777"},
        {'t', "8"}, {'u', "88"}, {'v', "888"},
        {'w', "9"}, {'x', "99"}, {'y', "999"}, {'z', "9999"},
        {' ', "0"}
    };
    string result;
    for (char c : s) {
        result += keypad[c];
    }
    return result;
}

int main() {
    string s = "hello";
    cout << toKeypadSequence(s); // Output keypad sequence
    return 0;
}
```

**Java**:

```java
import java.util.HashMap;

public class Main {
    public static String toKeypadSequence(String s) {
        HashMap<Character, String> keypad = new HashMap<>() {{
            put('a', "2"); put('b', "22"); put('c', "222");
            put('d',

 "3"); put('e', "33"); put('f', "333");
            put('g', "4"); put('h', "44"); put('i', "444");
            put('j', "5"); put('k', "55"); put('l', "555");
            put('m', "6"); put('n', "66"); put('o', "666");
            put('p', "7"); put('q', "77"); put('r', "777"); put('s', "7777");
            put('t', "8"); put('u', "88"); put('v', "888");
            put('w', "9"); put('x', "99"); put('y', "999"); put('z', "9999");
            put(' ', "0");
        }};

        StringBuilder result = new StringBuilder();
        for (char c : s.toCharArray()) {
            result.append(keypad.get(c));
        }
        return result.toString();
    }

    public static void main(String[] args) {
        String s = "hello";
        System.out.println(toKeypadSequence(s)); // Output keypad sequence
    }
}
```

**Python**:

```python
def to_keypad_sequence(s):
    keypad = {
        'a': "2", 'b': "22", 'c': "222",
        'd': "3", 'e': "33", 'f': "333",
        'g': "4", 'h': "44", 'i': "444",
        'j': "5", 'k': "55", 'l': "555",
        'm': "6", 'n': "66", 'o': "666",
        'p': "7", 'q': "77", 'r': "777", 's': "7777",
        't': "8", 'u': "88", 'v': "888",
        'w': "9", 'x': "99", 'y': "999", 'z': "9999",
        ' ': "0"
    }
    result = ''.join(keypad[c] for c in s)
    return result

# Example usage
s = "hello"
print(to_keypad_sequence(s))  # Output keypad sequence
```

### 13. Burrows–Wheeler Data Transform Algorithm

**Problem Statement**: Perform Burrows–Wheeler transform on a given string.

**Explanation**:

- Create all rotations and sort them.

**Steps**:

1. Generate all rotations.
2. Sort and extract last column.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

string burrowsWheelerTransform(string s) {
    vector<string> rotations;
    for (int i = 0; i < s.length(); i++) {
        rotations.push_back(s.substr(i) + s.substr(0, i));
    }
    sort(rotations.begin(), rotations.end());
    string result;
    for (const string& rotation : rotations) {
        result += rotation.back();
    }
    return result;
}

int main() {
    string s = "banana";
    cout << burrowsWheelerTransform(s); // Output transformed string
    return 0;
}
```

**Java**:

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static String burrowsWheelerTransform(String s) {
        ArrayList<String> rotations = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
            rotations.add(s.substring(i) + s.substring(0, i));
        }
        Collections.sort(rotations);
        StringBuilder result = new StringBuilder();
        for (String rotation : rotations) {
            result.append(rotation.charAt(rotation.length() - 1));
        }
        return result.toString();
    }

    public static void main(String[] args) {
        String s = "banana";
        System.out.println(burrowsWheelerTransform(s)); // Output transformed string
    }
}
```

**Python**:

```python
def burrows_wheeler_transform(s):
    rotations = [s[i:] + s[:i] for i in range(len(s))]
    rotations.sort()
    return ''.join(rotation[-1] for rotation in rotations)

# Example usage
s = "banana"
print(burrows_wheeler_transform(s))  # Output transformed string
```

### 14. Form Minimum Number from Given Sequence

**Problem Statement**: Form the minimum number from a given sequence of digits.

**Explanation**:

- Sort digits in ascending order.

**Steps**:

1. Sort the digits.
2. Concatenate to form the minimum number.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

string formMinimumNumber(vector<int> digits) {
    sort(digits.begin(), digits.end());
    string result;
    for (int digit : digits) {
        result += to_string(digit);
    }
    return result;
}

int main() {
    vector<int> digits = {3, 1, 4, 2};
    cout << formMinimumNumber(digits); // Output minimum number
    return 0;
}
```

**Java**:

```java
import java.util.Arrays;

public class Main {
    public static String formMinimumNumber(int[] digits) {
        Arrays.sort(digits);
        StringBuilder result = new StringBuilder();
        for (int digit : digits) {
            result.append(digit);
        }
        return result.toString();
    }

    public static void main(String[] args) {
        int[] digits = {3, 1, 4, 2};
        System.out.println(formMinimumNumber(digits)); // Output minimum number
    }
}
```

**Python**:

```python
def form_minimum_number(digits):
    digits.sort()
    return ''.join(map(str, digits))

# Example usage
digits = [3, 1, 4, 2]
print(form_minimum_number(digits))  # Output minimum number
```

### 15. Print Shortest Path to Print a String on Screen

**Problem Statement**: Print the shortest path to print a string on the screen using minimum keystrokes.

**Explanation**:

- Use a graph-based approach to find the shortest path.

**Steps**:

1. Model the string as a graph.
2. Use BFS to find the shortest path.

**Code**:

**C++**:

```cpp
#include <iostream>
#include <queue>
#include <unordered_map>
using namespace std;

int shortestPath(string s) {
    unordered_map<char, int> lastPosition;
    int totalMoves = 0, currentPos = 0;

    for (char c : s) {
        if (lastPosition.count(c)) {
            totalMoves += abs(lastPosition[c] - currentPos);
        } else {
            totalMoves += currentPos + 1; // Move to new character
        }
        currentPos = lastPosition[c] = totalMoves;
    }
    return totalMoves;
}

int main() {
    string s = "hello";
    cout << shortestPath(s); // Output minimum keystrokes
    return 0;
}
```

**Java**:

```java
import java.util.HashMap;

public class Main {
    public static int shortestPath(String s) {
        HashMap<Character, Integer> lastPosition = new HashMap<>();
        int totalMoves = 0, currentPos = 0;

        for (char c : s.toCharArray()) {
            if (lastPosition.containsKey(c)) {
                totalMoves += Math.abs(lastPosition.get(c) - currentPos);
            } else {
                totalMoves += currentPos + 1; // Move to new character
            }
            currentPos = lastPosition.put(c, totalMoves);
        }
        return totalMoves;
    }

    public static void main(String[] args) {
        String s = "hello";
        System.out.println(shortestPath(s)); // Output minimum keystrokes
    }
}
```

**Python**:

```python
def shortest_path(s):
    last_position = {}
    total_moves = 0
    current_pos = 0

    for c in s:
        if c in last_position:
            total_moves += abs(last_position[c] - current_pos)
        else:
            total_moves += current_pos + 1  # Move to new character
        current_pos = last_position[c] = total_moves
    return total_moves

# Example usage
s = "hello"
print(shortest_path(s))  # Output minimum keystrokes
```

### 16. Mirror Characters of a String

**Problem Statement**: Mirror the characters of a string such that `a` becomes `z`, `b` becomes `y`, and so on.

**Explanation**:

- Use a mapping for mirroring.

**Steps**:

1. Iterate through characters and apply transformation.

**Code**:

**C++**:

```cpp
#include <iostream>
using namespace std;

string mirrorCharacters(string s) {
    for (char &c : s) {
        c = 'z' - (c - 'a'); // Mirror transformation
    }
    return s;
}

int main() {
    string s = "abc";
    cout << mirrorCharacters(s); // Output mirrored string
    return 0;
}
```

**Java**:

```java
public class Main {
    public static String mirrorCharacters(String s) {
        StringBuilder result = new StringBuilder();
        for (char c : s.toCharArray()) {
            result.append((char) ('z' - (c - 'a

'))); // Mirror transformation
        }
        return result.toString();
    }

    public static void main(String[] args) {
        String s = "abc";
        System.out.println(mirrorCharacters(s)); // Output mirrored string
    }
}
```

**Python**:

```python
def mirror_characters(s):
    return ''.join(chr(ord('z') - (ord(c) - ord('a'))) for c in s)

# Example usage
s = "abc"
print(mirror_characters(s))  # Output mirrored string
```
