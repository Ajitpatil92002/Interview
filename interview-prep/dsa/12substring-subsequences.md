Here's a detailed explanation of substrings and subsequences, along with code examples in C++, Java, and Python.

## Substring & Subsequence

### Definitions

- **Substring**: A substring is a contiguous sequence of characters within a string. For example, the substrings of "abc" include "a", "ab", "abc", "b", "bc", and "c".

- **Subsequence**: A subsequence is a sequence derived from another sequence where some elements may be deleted without changing the order of the remaining elements. For example, the subsequences of "abc" include "a", "b", "c", "ab", "ac", "bc", and "abc".

### 1. Program to Print All Substrings of a Given String

**Explanation**: To find all substrings, we can use nested loops. The outer loop will fix the starting point, and the inner loop will fix the endpoint of the substring.

**C++ Code**:

```cpp
#include <iostream>
#include <string>

void printSubstrings(const std::string &str) {
    int n = str.length();
    for (int i = 0; i < n; i++) { // Starting index
        for (int j = i + 1; j <= n; j++) { // Ending index
            std::cout << str.substr(i, j - i) << std::endl; // Print substring
        }
    }
}

int main() {
    std::string str = "abc";
    std::cout << "Substrings of \"" << str << "\":" << std::endl;
    printSubstrings(str);
    return 0;
}
```

**Java Code**:

```java
public class Main {
    public static void printSubstrings(String str) {
        int n = str.length();
        for (int i = 0; i < n; i++) { // Starting index
            for (int j = i + 1; j <= n; j++) { // Ending index
                System.out.println(str.substring(i, j)); // Print substring
            }
        }
    }

    public static void main(String[] args) {
        String str = "abc";
        System.out.println("Substrings of \"" + str + "\":");
        printSubstrings(str);
    }
}
```

**Python Code**:

```python
def print_substrings(s):
    n = len(s)
    for i in range(n):  # Starting index
        for j in range(i + 1, n + 1):  # Ending index
            print(s[i:j])  # Print substring

str = "abc"
print(f'Substrings of "{str}":')
print_substrings(str)
```

### 2. Print All Subsequences of a String

**Explanation**: To find all subsequences, we can use recursion or bit manipulation. Each character can either be included or excluded.

**C++ Code**:

```cpp
#include <iostream>
#include <string>

void printSubsequences(const std::string &str, std::string curr, int index) {
    if (index == str.length()) {
        std::cout << curr << std::endl; // Print current subsequence
        return;
    }
    // Exclude the character at index
    printSubsequences(str, curr, index + 1);
    // Include the character at index
    printSubsequences(str, curr + str[index], index + 1);
}

int main() {
    std::string str = "abc";
    std::cout << "Subsequences of \"" << str << "\":" << std::endl;
    printSubsequences(str, "", 0);
    return 0;
}
```

**Java Code**:

```java
public class Main {
    public static void printSubsequences(String str, String curr, int index) {
        if (index == str.length()) {
            System.out.println(curr); // Print current subsequence
            return;
        }
        // Exclude the character at index
        printSubsequences(str, curr, index + 1);
        // Include the character at index
        printSubsequences(str, curr + str.charAt(index), index + 1);
    }

    public static void main(String[] args) {
        String str = "abc";
        System.out.println("Subsequences of \"" + str + "\":");
        printSubsequences(str, "", 0);
    }
}
```

**Python Code**:

```python
def print_subsequences(s, curr, index):
    if index == len(s):
        print(curr)  # Print current subsequence
        return
    # Exclude the character at index
    print_subsequences(s, curr, index + 1)
    # Include the character at index
    print_subsequences(s, curr + s[index], index + 1)

str = "abc"
print(f'Subsequences of "{str}":')
print_subsequences(str, "", 0)
```

### 3. Count Distinct Subsequences

**Explanation**: We can use dynamic programming to count distinct subsequences. We'll maintain an array to count the number of subsequences ending at each character.

**C++ Code**:

```cpp
#include <iostream>
#include <string>
#include <unordered_map>

int countDistinctSubsequences(const std::string &str) {
    int n = str.length();
    int count[n + 1];
    count[0] = 1; // Empty subsequence

    std::unordered_map<char, int> last_occurrence;
    for (int i = 1; i <= n; i++) {
        count[i] = 2 * count[i - 1]; // Count all subsequences ending at i
        if (last_occurrence.find(str[i - 1]) != last_occurrence.end()) {
            count[i] -= count[last_occurrence[str[i - 1]] - 1]; // Exclude duplicate subsequences
        }
        last_occurrence[str[i - 1]] = i; // Update last occurrence
    }
    return count[n] - 1; // Exclude empty subsequence
}

int main() {
    std::string str = "abc";
    std::cout << "Count of distinct subsequences: " << countDistinctSubsequences(str) << std::endl;
    return 0;
}
```

**Java Code**:

```java
import java.util.HashMap;

public class Main {
    public static int countDistinctSubsequences(String str) {
        int n = str.length();
        int[] count = new int[n + 1];
        count[0] = 1; // Empty subsequence

        HashMap<Character, Integer> last_occurrence = new HashMap<>();
        for (int i = 1; i <= n; i++) {
            count[i] = 2 * count[i - 1]; // Count all subsequences ending at i
            if (last_occurrence.containsKey(str.charAt(i - 1))) {
                count[i] -= count[last_occurrence.get(str.charAt(i - 1)) - 1]; // Exclude duplicate subsequences
            }
            last_occurrence.put(str.charAt(i - 1), i); // Update last occurrence
        }
        return count[n] - 1; // Exclude empty subsequence
    }

    public static void main(String[] args) {
        String str = "abc";
        System.out.println("Count of distinct subsequences: " + countDistinctSubsequences(str));
    }
}
```

**Python Code**:

```python
def count_distinct_subsequences(s):
    n = len(s)
    count = [0] * (n + 1)
    count[0] = 1  # Empty subsequence

    last_occurrence = {}
    for i in range(1, n + 1):
        count[i] = 2 * count[i - 1]  # Count all subsequences ending at i
        if s[i - 1] in last_occurrence:
            count[i] -= count[last_occurrence[s[i - 1]] - 1]  # Exclude duplicate subsequences
        last_occurrence[s[i - 1]] = i  # Update last occurrence

    return count[n] - 1  # Exclude empty subsequence

s = "abc"
print("Count of distinct subsequences:", count_distinct_subsequences(s))
```

### 4. Count Distinct Occurrences as a Subsequence

**Explanation**: This can be solved using dynamic programming similar to counting distinct subsequences, but we focus on how to form the string with specific constraints.

**C++ Code**:

```cpp
#include <iostream>
#include <string>
#include <vector>

int countOccurrencesAsSubsequence(const std::string &str, const std::string &sub) {
    int n = str.length();
    int m = sub.length();
    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));

    // Base case: An empty string is a subsequence of any string
    for (int j = 0; j <= n; j++) {
        dp[0][j] = 1; // Empty subsequence
    }

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (sub[i - 1] == str[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]; // Include and exclude
            } else {
                dp

[i][j] = dp[i][j - 1]; // Exclude
            }
        }
    }
    return dp[m][n]; // Total distinct occurrences
}

int main() {
    std::string str = "banana";
    std::string sub = "ban";
    std::cout << "Count of distinct occurrences as a subsequence: " << countOccurrencesAsSubsequence(str, sub) << std::endl;
    return 0;
}
```

**Java Code**:

```java
public class Main {
    public static int countOccurrencesAsSubsequence(String str, String sub) {
        int n = str.length();
        int m = sub.length();
        int[][] dp = new int[m + 1][n + 1];

        // Base case: An empty string is a subsequence of any string
        for (int j = 0; j <= n; j++) {
            dp[0][j] = 1; // Empty subsequence
        }

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (sub.charAt(i - 1) == str.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]; // Include and exclude
                } else {
                    dp[i][j] = dp[i][j - 1]; // Exclude
                }
            }
        }
        return dp[m][n]; // Total distinct occurrences
    }

    public static void main(String[] args) {
        String str = "banana";
        String sub = "ban";
        System.out.println("Count of distinct occurrences as a subsequence: " + countOccurrencesAsSubsequence(str, sub));
    }
}
```

**Python Code**:

```python
def count_occurrences_as_subsequence(s, sub):
    n = len(s)
    m = len(sub)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Base case: An empty string is a subsequence of any string
    for j in range(n + 1):
        dp[0][j] = 1  # Empty subsequence

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if sub[i - 1] == s[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]  # Include and exclude
            else:
                dp[i][j] = dp[i][j - 1]  # Exclude

    return dp[m][n]  # Total distinct occurrences

s = "banana"
sub = "ban"
print("Count of distinct occurrences as a subsequence:", count_occurrences_as_subsequence(s, sub))
```

### 5. Longest Common Subsequence (LCS)

**Explanation**: The Longest Common Subsequence problem can be solved using dynamic programming. We will maintain a 2D array to store the lengths of LCS for substrings of both input strings.

**C++ Code**:

```cpp
#include <iostream>
#include <string>
#include <vector>

int longestCommonSubsequence(const std::string &str1, const std::string &str2) {
    int m = str1.length();
    int n = str2.length();
    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // Match found
            } else {
                dp[i][j] = std::max(dp[i - 1][j], dp[i][j - 1]); // Max of excluding one character
            }
        }
    }
    return dp[m][n]; // Length of LCS
}

int main() {
    std::string str1 = "abcde";
    std::string str2 = "ace";
    std::cout << "Length of Longest Common Subsequence: " << longestCommonSubsequence(str1, str2) << std::endl;
    return 0;
}
```

**Java Code**:

```java
public class Main {
    public static int longestCommonSubsequence(String str1, String str2) {
        int m = str1.length();
        int n = str2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1; // Match found
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Max of excluding one character
                }
            }
        }
        return dp[m][n]; // Length of LCS
    }

    public static void main(String[] args) {
        String str1 = "abcde";
        String str2 = "ace";
        System.out.println("Length of Longest Common Subsequence: " + longestCommonSubsequence(str1, str2));
    }
}
```

**Python Code**:

```python
def longest_common_subsequence(str1, str2):
    m = len(str1)
    n = len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1  # Match found
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])  # Max of excluding one character

    return dp[m][n]  # Length of LCS

str1 = "abcde"
str2 = "ace"
print("Length of Longest Common Subsequence:", longest_common_subsequence(str1, str2))
```

### 6. Shortest Superstring Problem

**Explanation**: The Shortest Superstring Problem is NP-hard, but we can use a greedy approach. The goal is to merge all strings to form the shortest possible superstring.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

std::string mergeStrings(const std::string &a, const std::string &b) {
    int overlap = 0;
    int maxOverlap = std::min(a.length(), b.length());
    for (int i = 1; i <= maxOverlap; i++) {
        if (a.substr(a.length() - i) == b.substr(0, i)) {
            overlap = i;
        }
    }
    return a + b.substr(overlap);
}

std::string shortestSuperstring(std::vector<std::string> &strs) {
    while (strs.size() > 1) {
        int maxOverlap = 0;
        std::pair<int, int> bestPair;
        std::string mergedString;
        for (int i = 0; i < strs.size(); i++) {
            for (int j = i + 1; j < strs.size(); j++) {
                std::string merged = mergeStrings(strs[i], strs[j]);
                int overlap = merged.length() - std::min(strs[i].length(), strs[j].length());
                if (overlap > maxOverlap) {
                    maxOverlap = overlap;
                    bestPair = {i, j};
                    mergedString = merged;
                }
            }
        }
        strs.erase(strs.begin() + bestPair.second);
        strs[bestPair.first] = mergedString;
    }
    return strs[0];
}

int main() {
    std::vector<std::string> strs = {"catg", "ctaagt", "gcta", "ttca", "atgcatc"};
    std::cout << "Shortest Superstring: " << shortestSuperstring(strs) << std::endl;
    return 0;
}
```

**Java Code**:

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static String mergeStrings(String a, String b) {
        int overlap = 0;
        int maxOverlap = Math.min(a.length(), b.length());
        for (int i = 1; i <= maxOverlap; i++) {
            if (a.endsWith(b.substring(0, i))) {
                overlap = i;
            }
        }
        return a + b.substring(overlap);
    }

    public static String shortestSuperstring(List<String> strs) {
        while (strs.size() > 1) {
            int maxOverlap = 0;
            int idx1 = 0, idx2 = 0;
            String mergedString = "";
            for (int i = 0; i < strs.size(); i++) {
                for (int j = i

 + 1; j < strs.size(); j++) {
                    String merged = mergeStrings(strs.get(i), strs.get(j));
                    int overlap = merged.length() - Math.min(strs.get(i).length(), strs.get(j).length());
                    if (overlap > maxOverlap) {
                        maxOverlap = overlap;
                        idx1 = i;
                        idx2 = j;
                        mergedString = merged;
                    }
                }
            }
            strs.remove(idx2);
            strs.set(idx1, mergedString);
        }
        return strs.get(0);
    }

    public static void main(String[] args) {
        List<String> strs = new ArrayList<>();
        strs.add("catg");
        strs.add("ctaagt");
        strs.add("gcta");
        strs.add("ttca");
        strs.add("atgcatc");
        System.out.println("Shortest Superstring: " + shortestSuperstring(strs));
    }
}
```

**Python Code**:

```python
def merge_strings(a, b):
    max_overlap = 0
    for i in range(1, min(len(a), len(b)) + 1):
        if a[-i:] == b[:i]:
            max_overlap = i
    return a + b[max_overlap:]

def shortest_superstring(strs):
    while len(strs) > 1:
        max_overlap = 0
        best_pair = (0, 1)
        merged_string = ""
        for i in range(len(strs)):
            for j in range(i + 1, len(strs)):
                merged = merge_strings(strs[i], strs[j])
                overlap = len(merged) - min(len(strs[i]), len(strs[j]))
                if overlap > max_overlap:
                    max_overlap = overlap
                    best_pair = (i, j)
                    merged_string = merged
        strs.pop(best_pair[1])
        strs[best_pair[0]] = merged_string
    return strs[0]

strs = ["catg", "ctaagt", "gcta", "ttca", "atgcatc"]
print("Shortest Superstring:", shortest_superstring(strs))
```

### 7. Printing Shortest Common Supersequence

**Explanation**: The Shortest Common Supersequence problem can also be solved using dynamic programming, where we construct the supersequence based on the LCS.

**C++ Code**:

```cpp
#include <iostream>
#include <vector>
#include <string>

std::string shortestCommonSupersequence(const std::string &str1, const std::string &str2) {
    int m = str1.length();
    int n = str2.length();
    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = std::max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Backtrack to construct the supersequence
    std::string superseq;
    int i = m, j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] == str2[j - 1]) {
            superseq += str1[i - 1];
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            superseq += str1[i - 1];
            i--;
        } else {
            superseq += str2[j - 1];
            j--;
        }
    }
    while (i > 0) {
        superseq += str1[i - 1];
        i--;
    }
    while (j > 0) {
        superseq += str2[j - 1];
        j--;
    }
    std::reverse(superseq.begin(), superseq.end());
    return superseq;
}

int main() {
    std::string str1 = "abac";
    std::string str2 = "cab";
    std::cout << "Shortest Common Supersequence: " << shortestCommonSupersequence(str1, str2) << std::endl;
    return 0;
}
```

**Java Code**:

```java
public class Main {
    public static String shortestCommonSupersequence(String str1, String str2) {
        int m = str1.length();
        int n = str2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // Backtrack to construct the supersequence
        StringBuilder superseq = new StringBuilder();
        int i = m, j = n;
        while (i > 0 && j > 0) {
            if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                superseq.append(str1.charAt(i - 1));
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                superseq.append(str1.charAt(i - 1));
                i--;
            } else {
                superseq.append(str2.charAt(j - 1));
                j--;
            }
        }
        while (i > 0) {
            superseq.append(str1.charAt(i - 1));
            i--;
        }
        while (j > 0) {
            superseq.append(str2.charAt(j - 1));
            j--;
        }
        return superseq.reverse().toString();
    }

    public static void main(String[] args) {
        String str1 = "abac";
        String str2 = "cab";
        System.out.println("Shortest Common Supersequence: " + shortestCommonSupersequence(str1, str2));
    }
}
```

**Python Code**:

```python
def shortest_common_supersequence(str1, str2):
    m = len(str1)
    n = len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    # Backtrack to construct the supersequence
    superseq = []
    i, j = m, n
    while i > 0 and j > 0:
        if str1[i - 1] == str2[j - 1]:
            superseq.append(str1[i - 1])
            i -= 1
            j -= 1
        elif dp[i - 1][j] > dp[i][j - 1]:
            superseq.append(str1[i - 1])
            i -= 1
        else:
            superseq.append(str2[j - 1])
            j -= 1
    while i > 0:
        superseq.append(str1[i - 1])
        i -= 1
    while j > 0:
        superseq.append(str2[j - 1])
        j -= 1

    superseq.reverse()
    return ''.join(superseq)

str1 = "abac"
str2 = "cab"
print("Shortest Common Supersequence:", shortest_common_supersequence(str1, str2))
```

### 8. Longest Repeating Subsequence

**Explanation**: The Longest Repeating Subsequence problem is similar to the LCS problem but requires that the indices of the repeated characters are different.

**C++ Code**:

```cpp
#include <iostream>
#include <string>
#include <vector>

int longestRepeatingSubsequence(const std::string &str) {
    int n = str.length();
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(n + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (str[i - 1] == str[j - 1] && i != j) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // Match found
            } else {
                dp[i][j] = std::max(dp[i - 1][j], dp[i][j - 1]); // Max of excluding one character
            }
        }
    }
    return dp[n][n]; // Length of Longest Repeating Subsequence
}

int main() {
    std::string str = "aabb";
    std::cout << "Length of Longest Repeating Subsequence: "

 << longestRepeatingSubsequence(str) << std::endl;
    return 0;
}
```

**Java Code**:

```java
public class Main {
    public static int longestRepeatingSubsequence(String str) {
        int n = str.length();
        int[][] dp = new int[n + 1][n + 1];

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (str.charAt(i - 1) == str.charAt(j - 1) && i != j) {
                    dp[i][j] = dp[i - 1][j - 1] + 1; // Match found
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Max of excluding one character
                }
            }
        }
        return dp[n][n]; // Length of Longest Repeating Subsequence
    }

    public static void main(String[] args) {
        String str = "aabb";
        System.out.println("Length of Longest Repeating Subsequence: " + longestRepeatingSubsequence(str));
    }
}
```

**Python Code**:

```python
def longest_repeating_subsequence(str):
    n = len(str)
    dp = [[0] * (n + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if str[i - 1] == str[j - 1] and i != j:
                dp[i][j] = dp[i - 1][j - 1] + 1 # Match found
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) # Max of excluding one character
    return dp[n][n] # Length of Longest Repeating Subsequence

str = "aabb"
print("Length of Longest Repeating Subsequence:", longest_repeating_subsequence(str))
```

### 9. Palindrome Partitioning

**Explanation**: The Palindrome Partitioning problem is about finding the minimum number of cuts needed to partition a string into palindromic substrings.

**C++ Code**:

```cpp
#include <iostream>
#include <string>
#include <vector>

bool isPalindrome(const std::string &s, int start, int end) {
    while (start < end) {
        if (s[start] != s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

int minCuts(const std::string &s) {
    int n = s.size();
    std::vector<int> cuts(n + 1);
    for (int i = 0; i <= n; i++) {
        cuts[i] = i - 1; // Max cuts
    }

    for (int i = 0; i < n; i++) {
        for (int j = i; j >= 0; j--) {
            if (isPalindrome(s, j, i)) {
                cuts[i + 1] = std::min(cuts[i + 1], cuts[j] + 1);
            }
        }
    }
    return cuts[n];
}

int main() {
    std::string str = "aab";
    std::cout << "Minimum cuts needed for palindrome partitioning: " << minCuts(str) << std::endl;
    return 0;
}
```

**Java Code**:

```java
public class Main {
    public static int minCuts(String s) {
        int n = s.length();
        int[] cuts = new int[n + 1];
        for (int i = 0; i <= n; i++) {
            cuts[i] = i - 1; // Max cuts
        }

        for (int i = 0; i < n; i++) {
            for (int j = i; j >= 0; j--) {
                if (isPalindrome(s, j, i)) {
                    cuts[i + 1] = Math.min(cuts[i + 1], cuts[j] + 1);
                }
            }
        }
        return cuts[n];
    }

    private static boolean isPalindrome(String s, int start, int end) {
        while (start < end) {
            if (s.charAt(start) != s.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    public static void main(String[] args) {
        String str = "aab";
        System.out.println("Minimum cuts needed for palindrome partitioning: " + minCuts(str));
    }
}
```

**Python Code**:

```python
def is_palindrome(s, start, end):
    while start < end:
        if s[start] != s[end]:
            return False
        start += 1
        end -= 1
    return True

def min_cuts(s):
    n = len(s)
    cuts = [i - 1 for i in range(n + 1)]  # Max cuts

    for i in range(n):
        for j in range(i, -1, -1):
            if is_palindrome(s, j, i):
                cuts[i + 1] = min(cuts[i + 1], cuts[j] + 1)
    return cuts[n]

s = "aab"
print("Minimum cuts needed for palindrome partitioning:", min_cuts(s))
```

### 10. Longest Substring Without Repeating Characters

**Explanation**: The problem is to find the length of the longest substring without repeating characters.

**C++ Code**:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

int lengthOfLongestSubstring(const std::string &s) {
    std::unordered_map<char, int> charMap;
    int left = 0, maxLength = 0;

    for (int right = 0; right < s.size(); right++) {
        if (charMap.find(s[right]) != charMap.end()) {
            left = std::max(left, charMap[s[right]] + 1);
        }
        charMap[s[right]] = right;
        maxLength = std::max(maxLength, right - left + 1);
    }
    return maxLength;
}

int main() {
    std::string s = "abcabcbb";
    std::cout << "Length of Longest Substring Without Repeating Characters: " << lengthOfLongestSubstring(s) << std::endl;
    return 0;
}
```

**Java Code**:

```java
import java.util.HashMap;

public class Main {
    public static int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> charMap = new HashMap<>();
        int left = 0, maxLength = 0;

        for (int right = 0; right < s.length(); right++) {
            if (charMap.containsKey(s.charAt(right))) {
                left = Math.max(left, charMap.get(s.charAt(right)) + 1);
            }
            charMap.put(s.charAt(right), right);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }

    public static void main(String[] args) {
        String s = "abcabcbb";
        System.out.println("Length of Longest Substring Without Repeating Characters: " + lengthOfLongestSubstring(s));
    }
}
```

**Python Code**:

```python
def length_of_longest_substring(s):
    char_map = {}
    left = 0
    max_length = 0

    for right in range(len(s)):
        if s[right] in char_map:
            left = max(left, char_map[s[right]] + 1)
        char_map[s[right]] = right
        max_length = max(max_length, right - left + 1)
    return max_length

s = "abcabcbb"
print("Length of Longest Substring Without Repeating Characters:", length_of_longest_substring(s))
```
