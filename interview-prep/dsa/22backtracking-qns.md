### 1. **Knight’s Tour Problem**

**Problem:** The Knight’s Tour problem is a classic backtracking problem where you have to move a knight on an empty chessboard such that the knight visits every square exactly once.

#### Explanation:

- The knight moves in an "L" shape: two squares in one direction and one square perpendicular, or one square in one direction and two squares perpendicular.
- The goal is to visit every square on the chessboard exactly once.

#### Solution Approach:

- Start from any cell and recursively try all possible moves.
- Use backtracking to undo a move if it doesn’t lead to a solution.

#### Python Code:

```python
N = 8

def is_safe(x, y, board):
    return 0 <= x < N and 0 <= y < N and board[x][y] == -1

def print_solution(board):
    for row in board:
        print(row)

def solve_knight_tour():
    board = [[-1 for _ in range(N)] for _ in range(N)]
    move_x = [2, 1, -1, -2, -2, -1, 1, 2]
    move_y = [1, 2, 2, 1, -1, -2, -2, -1]

    board[0][0] = 0
    pos = 1

    if not solve_kt_util(0, 0, pos, board, move_x, move_y):
        print("Solution does not exist")
    else:
        print_solution(board)

def solve_kt_util(x, y, pos, board, move_x, move_y):
    if pos == N * N:
        return True

    for i in range(8):
        new_x = x + move_x[i]
        new_y = y + move_y[i]
        if is_safe(new_x, new_y, board):
            board[new_x][new_y] = pos
            if solve_kt_util(new_x, new_y, pos + 1, board, move_x, move_y):
                return True
            board[new_x][new_y] = -1  # Backtrack

    return False

solve_knight_tour()
```

#### Steps:

1. Initialize a chessboard with `-1` (indicating unvisited).
2. Try all 8 possible moves for a knight from the current position.
3. If a valid move is found, mark the position and recursively solve the problem.
4. If a move doesn’t lead to a solution, backtrack by unmarking it.

---

### 2. **Rat in a Maze Problem**

**Problem:** Given a maze, find a path for a rat from the top-left corner to the bottom-right corner. The rat can only move in two directions: forward and downward.

#### Solution Approach:

- Use backtracking to explore all possible paths.
- Mark cells that are part of the solution path, and backtrack if the path doesn’t lead to the destination.

#### C++ Code:

```cpp
#include <iostream>
#define N 4
using namespace std;

bool isSafe(int maze[N][N], int x, int y) {
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1);
}

bool solveMazeUtil(int maze[N][N], int x, int y, int sol[N][N]);

bool solveMaze(int maze[N][N]) {
    int sol[N][N] = { {0, 0, 0, 0},
                      {0, 0, 0, 0},
                      {0, 0, 0, 0},
                      {0, 0, 0, 0} };
    if (solveMazeUtil(maze, 0, 0, sol) == false) {
        cout << "Solution doesn't exist";
        return false;
    }

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            cout << sol[i][j] << " ";
        }
        cout << endl;
    }
    return true;
}

bool solveMazeUtil(int maze[N][N], int x, int y, int sol[N][N]) {
    if (x == N - 1 && y == N - 1 && maze[x][y] == 1) {
        sol[x][y] = 1;
        return true;
    }

    if (isSafe(maze, x, y)) {
        sol[x][y] = 1;

        if (solveMazeUtil(maze, x + 1, y, sol))
            return true;

        if (solveMazeUtil(maze, x, y + 1, sol))
            return true;

        sol[x][y] = 0; // backtrack
        return false;
    }

    return false;
}

int main() {
    int maze[N][N] = { {1, 0, 0, 0},
                       {1, 1, 0, 1},
                       {0, 1, 0, 0},
                       {1, 1, 1, 1} };
    solveMaze(maze);
    return 0;
}
```

#### Steps:

1. Start at the top-left corner.
2. Move forward or downward as long as it’s a valid move.
3. If a path is blocked, backtrack to the previous cell and try another direction.
4. If a path to the destination is found, print the solution.

---

### 3. **N Queen Problem**

**Problem:** Place N queens on an N×N chessboard such that no two queens threaten each other.

#### Java Code:

```java
public class NQueen {
    static int N = 8;

    static void printSolution(int board[][]) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++)
                System.out.print(board[i][j] + " ");
            System.out.println();
        }
    }

    static boolean isSafe(int board[][], int row, int col) {
        for (int i = 0; i < col; i++)
            if (board[row][i] == 1)
                return false;

        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
            if (board[i][j] == 1)
                return false;

        for (int i = row, j = col; j >= 0 && i < N; i++, j--)
            if (board[i][j] == 1)
                return false;

        return true;
    }

    static boolean solveNQUtil(int board[][], int col) {
        if (col >= N)
            return true;

        for (int i = 0; i < N; i++) {
            if (isSafe(board, i, col)) {
                board[i][col] = 1;

                if (solveNQUtil(board, col + 1))
                    return true;

                board[i][col] = 0; // backtrack
            }
        }
        return false;
    }

    static boolean solveNQ() {
        int board[][] = new int[N][N];
        if (!solveNQUtil(board, 0)) {
            System.out.print("Solution does not exist");
            return false;
        }
        printSolution(board);
        return true;
    }

    public static void main(String args[]) {
        solveNQ();
    }
}
```

#### Steps:

1. Place a queen in the first column and move to the next column.
2. Place queens in subsequent columns, ensuring no two queens threaten each other.
3. If no safe place is found in a column, backtrack to the previous column.
4. Once all queens are placed, print the solution.

---

### 4. **Subset Sum Problem**

**Problem:** Find a subset of a given set of integers that adds up to a specific target sum.

#### Python Code:

```python
def isSubsetSum(set, n, sum):
    if sum == 0:
        return True
    if n == 0 and sum != 0:
        return False

    if set[n-1] > sum:
        return isSubsetSum(set, n-1, sum)

    return isSubsetSum(set, n-1, sum) or isSubsetSum(set, n-1, sum-set[n-1])

set = [3, 34, 4, 12, 5, 2]
sum = 9
n = len(set)
if isSubsetSum(set, n, sum):
    print("Found a subset with the given sum")
else:
    print("No subset with the given sum")
```

#### Steps:

1. Start with the first number in the set and either include it or exclude it.
2. Recursively check whether including or excluding the number leads to the target sum.
3. If the target sum is found, return `True`.

---

### 5. **m Coloring Problem**

**Problem:** Given an undirected graph and a number m, determine if the graph can be colored using at most m colors such that no two adjacent vertices have the same color.

#### C++ Code:

```cpp
#include <iostream>
using namespace std;

#define V 4

bool isSafe(int v, bool graph[V][V], int color[], int c) {
    for (int i = 0; i < V; i++)
        if (graph[v][i] && c == color[i])
            return false;
    return true;
}



bool graphColoringUtil(bool graph[V][V], int m, int color[], int v) {
    if (v == V)
        return true;

    for (int c = 1; c <= m; c++) {
        if (isSafe(v, graph, color, c)) {
            color[v] = c;

            if (graphColoringUtil(graph, m, color, v + 1))
                return true;

            color[v] = 0;
        }
    }
    return false;
}

bool graphColoring(bool graph[V][V], int m) {
    int color[V] = {0};
    if (!graphColoringUtil(graph, m, color, 0)) {
        cout << "Solution does not exist";
        return false;
    }

    cout << "Solution exists:";
    for (int i = 0; i < V; i++)
        cout << " " << color[i];
    cout << endl;
    return true;
}

int main() {
    bool graph[V][V] = {{0, 1, 1, 1},
                        {1, 0, 1, 0},
                        {1, 1, 0, 1},
                        {1, 0, 1, 0}};
    int m = 3;
    graphColoring(graph, m);
    return 0;
}
```

---

### 6. **Hamiltonian Cycle**

**Problem:** Find a Hamiltonian cycle in a given graph if it exists.

#### Java Code:

```java
public class HamiltonianCycle {
    final int V = 5;
    int path[];

    boolean isSafe(int v, int graph[][], int path[], int pos) {
        if (graph[path[pos - 1]][v] == 0)
            return false;

        for (int i = 0; i < pos; i++)
            if (path[i] == v)
                return false;

        return true;
    }

    boolean hamCycleUtil(int graph[][], int path[], int pos) {
        if (pos == V) {
            if (graph[path[pos - 1]][path[0]] == 1)
                return true;
            else
                return false;
        }

        for (int v = 1; v < V; v++) {
            if (isSafe(v, graph, path, pos)) {
                path[pos] = v;

                if (hamCycleUtil(graph, path, pos + 1) == true)
                    return true;

                path[pos] = -1;
            }
        }

        return false;
    }

    int hamCycle(int graph[][]) {
        path = new int[V];
        for (int i = 0; i < V; i++)
            path[i] = -1;

        path[0] = 0;
        if (hamCycleUtil(graph, path, 1) == false) {
            System.out.println("\nSolution does not exist");
            return 0;
        }

        printSolution(path);
        return 1;
    }

    void printSolution(int path[]) {
        System.out.println("Solution exists: Following is one Hamiltonian Cycle");
        for (int i = 0; i < V; i++)
            System.out.print(" " + path[i] + " ");
        System.out.println(" " + path[0] + " ");
    }

    public static void main(String args[]) {
        HamiltonianCycle hamiltonian = new HamiltonianCycle();
        int graph1[][] = {{0, 1, 0, 1, 0},
                          {1, 0, 1, 1, 1},
                          {0, 1, 0, 0, 1},
                          {1, 1, 0, 0, 1},
                          {0, 1, 1, 1, 0}};
        hamiltonian.hamCycle(graph1);
    }
}
```

---

### 7. **Sudoku Solver**

**Problem:** Solve a given Sudoku puzzle using backtracking.

#### Python Code:

```python
N = 9

def print_board(board):
    for row in board:
        print(row)

def is_safe(board, row, col, num):
    for x in range(9):
        if board[row][x] == num or board[x][col] == num:
            return False

    start_row, start_col = row - row % 3, col - col % 3
    for i in range(3):
        for j in range(3):
            if board[i + start_row][j + start_col] == num:
                return False

    return True

def solve_sudoku(board):
    empty = find_empty_location(board)
    if not empty:
        return True
    row, col = empty

    for num in range(1, 10):
        if is_safe(board, row, col, num):
            board[row][col] = num

            if solve_sudoku(board):
                return True

            board[row][col] = 0

    return False

def find_empty_location(board):
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                return (i, j)
    return None

board = [[5, 3, 0, 0, 7, 0, 0, 0, 0],
         [6, 0, 0, 1, 9, 5, 0, 0, 0],
         [0, 9, 8, 0, 0, 0, 0, 6, 0],
         [8, 0, 0, 0, 6, 0, 0, 0, 3],
         [4, 0, 0, 8, 0, 3, 0, 0, 1],
         [7, 0, 0, 0, 2, 0, 0, 0, 6],
         [0, 6, 0, 0, 0, 0, 2, 8, 0],
         [0, 0, 0, 4, 1, 9, 0, 0, 5],
         [0, 0, 0, 0, 8, 0, 0, 7, 9]]

if solve_sudoku(board):
    print_board(board)
else:
    print("No solution exists")
```

---

### 8. **Magnet Puzzle**

The Magnet Puzzle is a type of logic puzzle where you need to arrange magnets on a grid according to certain rules.

This problem is more complex and specific, so solving it depends on understanding the specific rules of a particular puzzle setup.

---

### 9. **Remove Invalid Parentheses**

**Problem:** Remove the minimum number of invalid parentheses to make the input string valid.

#### Python Code:

```python
from collections import deque

def is_valid(string):
    count = 0
    for char in string:
        if char == '(':
            count += 1
        elif char == ')':
            count -= 1
        if count < 0:
            return False
    return count == 0

def remove_invalid_parentheses(s):
    if not s:
        return [""]

    visited = set()
    queue = deque([s])
    visited.add(s)
    found = False
    result = []

    while queue:
        s = queue.popleft()

        if is_valid(s):
            result.append(s)
            found = True

        if found:
            continue

        for i in range(len(s)):
            if s[i] not in ('(', ')'):
                continue
            temp = s[:i] + s[i+1:]
            if temp not in visited:
                queue.append(temp)
                visited.add(temp)

    return result

s = "()())()"
print(remove_invalid_parentheses(s))
```

---

### 10. **Gray Code Generation**

**Problem:** Generate all n-bit Gray codes using backtracking.

#### Python Code:

```python
def gray_code(n):
    if n == 0:
        return [0]
    lower_bits = gray_code(n - 1)
    mirror = [(1 << (n - 1)) | i for i in reversed(lower_bits)]
    return lower_bits + mirror

n = 3
print(gray_code(n))
```

#### Steps:

1. Gray codes differ by only one bit between consecutive numbers.
2. Start with a 1-bit Gray code, then recursively add bits.

---

### 11. **Print Permutations of a String**

**Problem:** Write a program to print all permutations of a given string.

#### C++ Code:

```cpp
#include <iostream>
#include <string>
using namespace std;

void permute(string str, int l, int r) {
    if (l == r)
        cout << str << endl;
    else {
        for (int i = l; i <= r; i++) {
            swap(str[l], str[i]);
            permute(str, l + 1, r);
            swap(str[l], str[i]); // backtrack
        }
    }
}

int main() {
    string str = "ABC";
    int n = str.size();
    permute(str, 0, n - 1);
    return 0;
}
```

#### Steps:

1. Recursively swap characters to generate all permutations.
2. Backtrack after every swap to explore all possibilities.
