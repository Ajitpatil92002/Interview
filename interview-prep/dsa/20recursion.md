Let's break down the problems and provide solutions with detailed explanations for each problem, covering `Subset Sums`, `Subset-II`, `Combination Sum-1`, `Combination Sum-2`, `Palindrome Partitioning`, and `K-th Permutation Sequence`.

---

### 1. **Subset Sums (Medium)**

#### Problem Statement:

Given an array of integers, find all possible subset sums.

#### Approach:

- We use recursion to generate all subsets of the array.
- For each subset, we calculate the sum of its elements and add it to the result.
- **Subset generation** can be done using backtracking by either including or excluding each element.

#### C++ Code:

```cpp
#include <iostream>
#include <vector>
using namespace std;

void subsetSumsUtil(vector<int>& arr, int l, int r, int sum, vector<int>& result) {
    if (l > r) {
        result.push_back(sum);
        return;
    }
    subsetSumsUtil(arr, l + 1, r, sum + arr[l], result);
    subsetSumsUtil(arr, l + 1, r, sum, result);
}

vector<int> subsetSums(vector<int>& arr) {
    vector<int> result;
    subsetSumsUtil(arr, 0, arr.size() - 1, 0, result);
    return result;
}

int main() {
    vector<int> arr = {3, 1, 2};
    vector<int> result = subsetSums(arr);
    for (int sum : result)
        cout << sum << " ";
    return 0;
}
```

#### Java Code:

```java
import java.util.ArrayList;

public class SubsetSums {
    public static void subsetSumsUtil(int[] arr, int index, int sum, ArrayList<Integer> result) {
        if (index == arr.length) {
            result.add(sum);
            return;
        }
        subsetSumsUtil(arr, index + 1, sum + arr[index], result);
        subsetSumsUtil(arr, index + 1, sum, result);
    }

    public static ArrayList<Integer> subsetSums(int[] arr) {
        ArrayList<Integer> result = new ArrayList<>();
        subsetSumsUtil(arr, 0, 0, result);
        return result;
    }

    public static void main(String[] args) {
        int[] arr = {3, 1, 2};
        ArrayList<Integer> result = subsetSums(arr);
        System.out.println(result);
    }
}
```

#### Python Code:

```python
def subset_sums(arr):
    result = []

    def subset_sums_util(i, sum):
        if i == len(arr):
            result.append(sum)
            return
        subset_sums_util(i + 1, sum + arr[i])
        subset_sums_util(i + 1, sum)

    subset_sums_util(0, 0)
    return result

arr = [3, 1, 2]
print(subset_sums(arr))
```

#### Explanation:

- The recursive function generates subsets by either including or excluding the current element.
- The result contains all possible sums of subsets.

---

### 2. **Subset-II (Medium)**

#### Problem Statement:

Given an array of integers that may contain duplicates, return all possible subsets without duplicates.

#### Approach:

- Use **backtracking** to generate all subsets.
- Sort the array to handle duplicates and skip duplicate elements.

#### C++ Code:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void findSubsets(int idx, vector<int>& arr, vector<int>& ds, vector<vector<int>>& ans) {
    ans.push_back(ds);
    for (int i = idx; i < arr.size(); i++) {
        if (i != idx && arr[i] == arr[i - 1]) continue;
        ds.push_back(arr[i]);
        findSubsets(i + 1, arr, ds, ans);
        ds.pop_back();
    }
}

vector<vector<int>> subsetsWithDup(vector<int>& arr) {
    vector<vector<int>> ans;
    vector<int> ds;
    sort(arr.begin(), arr.end());
    findSubsets(0, arr, ds, ans);
    return ans;
}

int main() {
    vector<int> arr = {1, 2, 2};
    vector<vector<int>> result = subsetsWithDup(arr);
    for (auto subset : result) {
        for (int num : subset)
            cout << num << " ";
        cout << endl;
    }
}
```

#### Explanation:

- We use recursion to explore all subsets.
- We sort the array to handle duplicates and use the condition `if (i != idx && arr[i] == arr[i - 1])` to skip adding duplicate subsets.

---

### 3. **Combination Sum-1 (Medium)**

#### Problem Statement:

Given an array of distinct integers and a target sum, find all unique combinations where the candidate numbers sum to the target.

#### Approach:

- We use **backtracking**.
- For each number, either include it in the combination or move to the next.

#### Python Code:

```python
def combination_sum(candidates, target):
    result = []

    def backtrack(start, target, path):
        if target == 0:
            result.append(path)
            return
        if target < 0:
            return
        for i in range(start, len(candidates)):
            backtrack(i, target - candidates[i], path + [candidates[i]])

    candidates.sort()
    backtrack(0, target, [])
    return result

candidates = [2, 3, 6, 7]
target = 7
print(combination_sum(candidates, target))
```

#### Explanation:

- We use recursion to try different combinations of the elements.
- Once we hit the target, we store the path.

---

### 4. **Combination Sum-2 (Medium)**

#### Problem Statement:

Given an array of integers and a target sum, find unique combinations where the candidate numbers sum to the target. Each number may only be used once in the combination.

#### Python Code:

```python
def combination_sum2(candidates, target):
    result = []

    def backtrack(start, target, path):
        if target == 0:
            result.append(path)
            return
        if target < 0:
            return
        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i - 1]:
                continue
            backtrack(i + 1, target - candidates[i], path + [candidates[i]])

    candidates.sort()
    backtrack(0, target, [])
    return result

candidates = [10, 1, 2, 7, 6, 1, 5]
target = 8
print(combination_sum2(candidates, target))
```

#### Explanation:

- Sorting helps us handle duplicates.
- We ensure each number is used only once by advancing the start index.

---

### 5. **Palindrome Partitioning (Medium)**

#### Problem Statement:

Given a string, partition it such that every substring of the partition is a palindrome.

#### Python Code:

```python
def is_palindrome(s):
    return s == s[::-1]

def partition(s):
    result = []

    def backtrack(start, path):
        if start == len(s):
            result.append(path)
            return
        for i in range(start, len(s)):
            if is_palindrome(s[start:i + 1]):
                backtrack(i + 1, path + [s[start:i + 1]])

    backtrack(0, [])
    return result

s = "aab"
print(partition(s))
```

#### Explanation:

- Use recursion to try different substrings.
- Only add the substring to the partition if it is a palindrome.

---

### 6. **K-th Permutation Sequence (Medium)**

#### Problem Statement:

Find the K-th permutation sequence of the set `[1, 2, ..., n]`.

#### Python Code:

```python
import math

def get_permutation(n, k):
    numbers = list(range(1, n + 1))
    k -= 1
    result = []
    factorial = math.factorial(n - 1)

    for i in range(n - 1, 0, -1):
        index = k // factorial
        result.append(numbers.pop(index))
        k %= factorial
        factorial //= i

    result.append(numbers[0])
    return ''.join(map(str, result))

n = 3
k = 3
print(get_permutation(n, k))
```

#### Explanation:

- Use factorials to determine the correct index for each position in the permutation sequence.
