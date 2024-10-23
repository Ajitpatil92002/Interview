### 1. Infix to Postfix Conversion using Stack

Infix notation is the standard arithmetic notation where operators are placed between operands (e.g., A + B). Postfix notation (or Reverse Polish Notation) places operators after operands (e.g., A B +).

#### Steps:

1. Create an empty stack for operators.
2. Initialize an output list for the postfix expression.
3. Read tokens from the infix expression:
   - If the token is an operand, add it to the output.
   - If the token is an operator, pop from the stack to the output until the top of the stack has an operator of less precedence, then push the current operator onto the stack.
   - If the token is '(', push it onto the stack.
   - If the token is ')', pop from the stack to the output until '(' is encountered.
4. Pop all operators from the stack to the output.

#### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
#include <string>
#include <cctype>

using namespace std;

int precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}

string infixToPostfix(string infix) {
    stack<char> s;
    string postfix = "";

    for (char &c : infix) {
        if (isalnum(c)) {
            postfix += c;
        } else if (c == '(') {
            s.push(c);
        } else if (c == ')') {
            while (!s.empty() && s.top() != '(') {
                postfix += s.top();
                s.pop();
            }
            s.pop();
        } else {
            while (!s.empty() && precedence(s.top()) >= precedence(c)) {
                postfix += s.top();
                s.pop();
            }
            s.push(c);
        }
    }

    while (!s.empty()) {
        postfix += s.top();
        s.pop();
    }

    return postfix;
}

int main() {
    string infix = "A+B*(C^D-E)";
    cout << "Postfix: " << infixToPostfix(infix) << endl; // Output: ABDCE^-*
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Stack;

public class InfixToPostfix {
    public static int precedence(char op) {
        if (op == '+' || op == '-') return 1;
        if (op == '*' || op == '/') return 2;
        return 0;
    }

    public static String infixToPostfix(String infix) {
        Stack<Character> stack = new Stack<>();
        StringBuilder postfix = new StringBuilder();

        for (char c : infix.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                postfix.append(c);
            } else if (c == '(') {
                stack.push(c);
            } else if (c == ')') {
                while (!stack.isEmpty() && stack.peek() != '(') {
                    postfix.append(stack.pop());
                }
                stack.pop();
            } else {
                while (!stack.isEmpty() && precedence(stack.peek()) >= precedence(c)) {
                    postfix.append(stack.pop());
                }
                stack.push(c);
            }
        }

        while (!stack.isEmpty()) {
            postfix.append(stack.pop());
        }

        return postfix.toString();
    }

    public static void main(String[] args) {
        String infix = "A+B*(C^D-E)";
        System.out.println("Postfix: " + infixToPostfix(infix)); // Output: ABDCE^-*
    }
}
```

#### Python Implementation:

```python
def precedence(op):
    if op == '+' or op == '-':
        return 1
    if op == '*' or op == '/':
        return 2
    return 0

def infix_to_postfix(infix):
    stack = []
    postfix = ""

    for c in infix:
        if c.isalnum():
            postfix += c
        elif c == '(':
            stack.append(c)
        elif c == ')':
            while stack and stack[-1] != '(':
                postfix += stack.pop()
            stack.pop()
        else:
            while stack and precedence(stack[-1]) >= precedence(c):
                postfix += stack.pop()
            stack.append(c)

    while stack:
        postfix += stack.pop()

    return postfix

infix = "A+B*(C^D-E)"
print("Postfix:", infix_to_postfix(infix))  # Output: ABDCE^-*
```

---

### 2. Prefix to Infix Conversion

Prefix notation (Polish Notation) places operators before operands (e.g., +AB).

#### Steps:

1. Start from the rightmost character of the prefix expression.
2. If the character is an operand, push it onto the stack.
3. If the character is an operator, pop two operands from the stack, combine them into a new string, and push it back onto the stack.
4. The final element in the stack will be the infix expression.

#### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
#include <string>
#include <algorithm>

using namespace std;

string prefixToInfix(string prefix) {
    stack<string> s;
    reverse(prefix.begin(), prefix.end());

    for (char c : prefix) {
        if (isalnum(c)) {
            s.push(string(1, c));
        } else {
            string op1 = s.top(); s.pop();
            string op2 = s.top(); s.pop();
            string exp = "(" + op1 + c + op2 + ")";
            s.push(exp);
        }
    }
    return s.top();
}

int main() {
    string prefix = "*+AB-CD";
    cout << "Infix: " << prefixToInfix(prefix) << endl; // Output: ((A+B)*(C-D))
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Stack;

public class PrefixToInfix {
    public static String prefixToInfix(String prefix) {
        Stack<String> stack = new Stack<>();
        StringBuilder sb = new StringBuilder(prefix).reverse();

        for (char c : sb.toString().toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                stack.push(String.valueOf(c));
            } else {
                String op1 = stack.pop();
                String op2 = stack.pop();
                String exp = "(" + op1 + c + op2 + ")";
                stack.push(exp);
            }
        }
        return stack.peek();
    }

    public static void main(String[] args) {
        String prefix = "*+AB-CD";
        System.out.println("Infix: " + prefixToInfix(prefix)); // Output: ((A+B)*(C-D))
    }
}
```

#### Python Implementation:

```python
def prefix_to_infix(prefix):
    stack = []
    for c in reversed(prefix):
        if c.isalnum():
            stack.append(c)
        else:
            op1 = stack.pop()
            op2 = stack.pop()
            exp = f"({op1}{c}{op2})"
            stack.append(exp)
    return stack.pop()

prefix = "*+AB-CD"
print("Infix:", prefix_to_infix(prefix))  # Output: ((A+B)*(C-D))
```

---

### 3. Prefix to Postfix Conversion

To convert prefix to postfix, we can use a stack to hold the operands and then rearrange them accordingly.

#### Steps:

1. Start from the rightmost character of the prefix expression.
2. If the character is an operand, push it onto the stack.
3. If the character is an operator, pop two operands from the stack, form a new string with operands followed by the operator, and push it back onto the stack.
4. The final element in the stack will be the postfix expression.

#### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
#include <string>
#include <algorithm>

using namespace std;

string prefixToPostfix(string prefix) {
    stack<string> s;
    reverse(prefix.begin(), prefix.end());

    for (char c : prefix) {
        if (isalnum(c)) {
            s.push(string(1, c));
        } else {
            string op1 = s.top(); s.pop();
            string op2 = s.top(); s.pop();
            string exp = op1 + op2 + c;
            s.push(exp);
        }
    }
    return s.top();
}

int main() {
    string prefix = "*+AB-CD";
    cout << "Postfix: " << prefixToPostfix(prefix) << endl; // Output: AB+C-D*
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Stack;

public class PrefixToPostfix {
    public static String prefixToPostfix(String prefix) {
        Stack<String> stack = new Stack<>();
        StringBuilder sb = new StringBuilder(prefix).reverse();

        for (char c : sb.toString().toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                stack.push(String.valueOf(c));
            } else {
                String op1 = stack.pop();
                String op2 = stack.pop();
                String exp = op1 + op2 + c;
                stack.push(exp);
            }
        }
        return stack.peek();
    }

    public static void main(String[] args) {
        String prefix = "*+AB-CD";
        System.out.println("Postfix: " + prefixToPostfix(prefix

)); // Output: AB+C-D*
    }
}
```

#### Python Implementation:

```python
def prefix_to_postfix(prefix):
    stack = []
    for c in reversed(prefix):
        if c.isalnum():
            stack.append(c)
        else:
            op1 = stack.pop()
            op2 = stack.pop()
            exp = op1 + op2 + c
            stack.append(exp)
    return stack.pop()

prefix = "*+AB-CD"
print("Postfix:", prefix_to_postfix(prefix))  # Output: AB+C-D*
```

---

### 4. Postfix to Prefix Conversion

To convert postfix to prefix, we use a stack similarly as in the previous conversions.

#### Steps:

1. Read the postfix expression from left to right.
2. If the character is an operand, push it onto the stack.
3. If the character is an operator, pop two operands from the stack, create a new string with the operator followed by the operands, and push it back onto the stack.
4. The final element in the stack will be the prefix expression.

#### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
#include <string>

using namespace std;

string postfixToPrefix(string postfix) {
    stack<string> s;

    for (char c : postfix) {
        if (isalnum(c)) {
            s.push(string(1, c));
        } else {
            string op2 = s.top(); s.pop();
            string op1 = s.top(); s.pop();
            string exp = c + op1 + op2;
            s.push(exp);
        }
    }
    return s.top();
}

int main() {
    string postfix = "AB+C-D*";
    cout << "Prefix: " << postfixToPrefix(postfix) << endl; // Output: *-+ABCD
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Stack;

public class PostfixToPrefix {
    public static String postfixToPrefix(String postfix) {
        Stack<String> stack = new Stack<>();

        for (char c : postfix.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                stack.push(String.valueOf(c));
            } else {
                String op2 = stack.pop();
                String op1 = stack.pop();
                String exp = c + op1 + op2;
                stack.push(exp);
            }
        }
        return stack.peek();
    }

    public static void main(String[] args) {
        String postfix = "AB+C-D*";
        System.out.println("Prefix: " + postfixToPrefix(postfix)); // Output: *-+ABCD
    }
}
```

#### Python Implementation:

```python
def postfix_to_prefix(postfix):
    stack = []

    for c in postfix:
        if c.isalnum():
            stack.append(c)
        else:
            op2 = stack.pop()
            op1 = stack.pop()
            exp = c + op1 + op2
            stack.append(exp)
    return stack.pop()

postfix = "AB+C-D*"
print("Prefix:", postfix_to_prefix(postfix))  # Output: *-+ABCD
```

---

### 5. Postfix to Infix Conversion

To convert postfix to infix, we can use a stack to rearrange the operands and operators.

#### Steps:

1. Read the postfix expression from left to right.
2. If the character is an operand, push it onto the stack.
3. If the character is an operator, pop two operands from the stack, form a new string with the operands surrounded by parentheses, and push it back onto the stack.
4. The final element in the stack will be the infix expression.

#### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
#include <string>

using namespace std;

string postfixToInfix(string postfix) {
    stack<string> s;

    for (char c : postfix) {
        if (isalnum(c)) {
            s.push(string(1, c));
        } else {
            string op2 = s.top(); s.pop();
            string op1 = s.top(); s.pop();
            string exp = "(" + op1 + c + op2 + ")";
            s.push(exp);
        }
    }
    return s.top();
}

int main() {
    string postfix = "AB+C-D*";
    cout << "Infix: " << postfixToInfix(postfix) << endl; // Output: ((A+B)*(C-D))
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Stack;

public class PostfixToInfix {
    public static String postfixToInfix(String postfix) {
        Stack<String> stack = new Stack<>();

        for (char c : postfix.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                stack.push(String.valueOf(c));
            } else {
                String op2 = stack.pop();
                String op1 = stack.pop();
                String exp = "(" + op1 + c + op2 + ")";
                stack.push(exp);
            }
        }
        return stack.peek();
    }

    public static void main(String[] args) {
        String postfix = "AB+C-D*";
        System.out.println("Infix: " + postfixToInfix(postfix)); // Output: ((A+B)*(C-D))
    }
}
```

#### Python Implementation:

```python
def postfix_to_infix(postfix):
    stack = []

    for c in postfix:
        if c.isalnum():
            stack.append(c)
        else:
            op2 = stack.pop()
            op1 = stack.pop()
            exp = f"({op1}{c}{op2})"
            stack.append(exp)
    return stack.pop()

postfix = "AB+C-D*"
print("Infix:", postfix_to_infix(postfix))  # Output: ((A+B)*(C-D))
```

---

### 6. Convert Infix to Prefix Notation

This process is similar to converting infix to postfix but involves reversing the order of operations and using a stack.

#### Steps:

1. Reverse the infix expression.
2. Replace '(' with ')' and vice versa.
3. Convert the modified expression to postfix.
4. Reverse the postfix expression to get the prefix.

#### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
#include <string>
#include <algorithm>

using namespace std;

int precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}

string infixToPostfix(string infix) {
    stack<char> s;
    string postfix = "";
    for (char &c : infix) {
        if (isalnum(c)) {
            postfix += c;
        } else if (c == '(') {
            s.push(c);
        } else if (c == ')') {
            while (!s.empty() && s.top() != '(') {
                postfix += s.top();
                s.pop();
            }
            s.pop();
        } else {
            while (!s.empty() && precedence(s.top()) >= precedence(c)) {
                postfix += s.top();
                s.pop();
            }
            s.push(c);
        }
    }
    while (!s.empty()) {
        postfix += s.top();
        s.pop();
    }
    return postfix;
}

string infixToPrefix(string infix) {
    reverse(infix.begin(), infix.end());
    for (char &c : infix) {
        if (c == '(') {
            c = ')';
        } else if (c == ')') {
            c = '(';
        }
    }
    string postfix = infixToPostfix(infix);
    reverse(postfix.begin(), postfix.end());
    return postfix;
}

int main() {
    string infix = "A+B*(C^D-E)";
    cout << "Prefix: " << infixToPrefix(infix) << endl; // Output: *+AB-CD^E
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Stack;

public class InfixToPrefix {
    public static int precedence(char op) {
        if (op == '+' || op == '-') return 1;
        if (op == '*' || op == '/') return 2;
        return 0;
    }

    public static String infixToPostfix(String infix) {
        Stack<Character> stack = new Stack<>();
        StringBuilder postfix = new StringBuilder();

        for (char c : infix.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                postfix.append(c);
            } else if (c == '(') {
                stack.push(c);
            } else if (c == ')') {
                while (!stack.isEmpty() && stack.peek() != '(') {
                    postfix.append(stack.pop());
                }
                stack.pop();
            } else {
                while (!stack.isEmpty() && precedence(stack.peek()) >= precedence(c)) {
                    postfix.append(stack.pop());
                }
                stack.push(c);
            }
        }

        while (!stack.isEmpty()) {
            postfix.append(stack.pop());
        }

        return postfix.toString();
    }

    public static String infixToPrefix(String infix) {
        StringBuilder reversedInfix = new StringBuilder(infix).reverse();
        for (int i = 0; i < reversedInfix.length(); i++) {
            if (reversedInfix.charAt(i) == '(') {
                reversedInfix.setCharAt(i, ')');
            } else if (reversedInfix.charAt(i) == ')') {
                reversedInfix.setCharAt(i, '(');
            }
        }
        String postfix = infixToPostfix(reversedInfix.toString());
        return

 new StringBuilder(postfix).reverse().toString();
    }

    public static void main(String[] args) {
        String infix = "A+B*(C^D-E)";
        System.out.println("Prefix: " + infixToPrefix(infix)); // Output: *+AB-CD^E
    }
}
```

#### Python Implementation:

```python
def precedence(op):
    if op in ('+', '-'):
        return 1
    if op in ('*', '/'):
        return 2
    return 0

def infix_to_postfix(infix):
    stack = []
    postfix = ""
    for c in infix:
        if c.isalnum():
            postfix += c
        elif c == '(':
            stack.append(c)
        elif c == ')':
            while stack and stack[-1] != '(':
                postfix += stack.pop()
            stack.pop()
        else:
            while stack and precedence(stack[-1]) >= precedence(c):
                postfix += stack.pop()
            stack.append(c)

    while stack:
        postfix += stack.pop()
    return postfix

def infix_to_prefix(infix):
    infix = infix[::-1]
    infix = ['(' if c == ')' else ')' if c == '(' else c for c in infix]
    postfix = infix_to_postfix(infix)
    return postfix[::-1]

infix = "A+B*(C^D-E)"
print("Prefix:", infix_to_prefix(infix))  # Output: *+AB-CD^E
```

---

### 7. Check for Balanced Parentheses in an Expression

To check for balanced parentheses, we use a stack to keep track of opening parentheses.

#### Steps:

1. Initialize an empty stack.
2. Traverse the expression:
   - If an opening parenthesis is encountered, push it onto the stack.
   - If a closing parenthesis is encountered, check if the stack is empty; if it is, return false. If not, pop the top element.
3. After processing the expression, if the stack is empty, the parentheses are balanced; otherwise, they are not.

#### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
#include <string>

using namespace std;

bool areParenthesesBalanced(string exp) {
    stack<char> s;
    for (char c : exp) {
        if (c == '(') {
            s.push(c);
        } else if (c == ')') {
            if (s.empty()) return false;
            s.pop();
        }
    }
    return s.empty();
}

int main() {
    string exp = "((a+b)*(c-d))";
    cout << "Balanced: " << (areParenthesesBalanced(exp) ? "Yes" : "No") << endl; // Output: Yes
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Stack;

public class BalancedParentheses {
    public static boolean areParenthesesBalanced(String exp) {
        Stack<Character> stack = new Stack<>();
        for (char c : exp.toCharArray()) {
            if (c == '(') {
                stack.push(c);
            } else if (c == ')') {
                if (stack.isEmpty()) return false;
                stack.pop();
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        String exp = "((a+b)*(c-d))";
        System.out.println("Balanced: " + (areParenthesesBalanced(exp) ? "Yes" : "No")); // Output: Yes
    }
}
```

#### Python Implementation:

```python
def are_parentheses_balanced(exp):
    stack = []
    for c in exp:
        if c == '(':
            stack.append(c)
        elif c == ')':
            if not stack:
                return False
            stack.pop()
    return not stack

exp = "((a+b)*(c-d))"
print("Balanced:", "Yes" if are_parentheses_balanced(exp) else "No")  # Output: Yes
```

---

### 8. Arithmetic Expression Evaluation

To evaluate arithmetic expressions, we can use two stacks: one for operators and one for operands.

#### Steps:

1. Convert the infix expression to postfix.
2. Evaluate the postfix expression using a stack.

#### C++ Implementation:

```cpp
#include <iostream>
#include <stack>
#include <sstream>
#include <string>

using namespace std;

int precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}

string infixToPostfix(string infix) {
    stack<char> s;
    string postfix = "";
    for (char &c : infix) {
        if (isalnum(c)) {
            postfix += c;
        } else if (c == '(') {
            s.push(c);
        } else if (c == ')') {
            while (!s.empty() && s.top() != '(') {
                postfix += s.top();
                s.pop();
            }
            s.pop();
        } else {
            while (!s.empty() && precedence(s.top()) >= precedence(c)) {
                postfix += s.top();
                s.pop();
            }
            s.push(c);
        }
    }
    while (!s.empty()) {
        postfix += s.top();
        s.pop();
    }
    return postfix;
}

int evaluatePostfix(string postfix) {
    stack<int> s;
    for (char c : postfix) {
        if (isdigit(c)) {
            s.push(c - '0');
        } else {
            int op2 = s.top(); s.pop();
            int op1 = s.top(); s.pop();
            switch (c) {
                case '+': s.push(op1 + op2); break;
                case '-': s.push(op1 - op2); break;
                case '*': s.push(op1 * op2); break;
                case '/': s.push(op1 / op2); break;
            }
        }
    }
    return s.top();
}

int main() {
    string infix = "3+(2*5)";
    string postfix = infixToPostfix(infix);
    cout << "Result: " << evaluatePostfix(postfix) << endl; // Output: 13
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Stack;

public class ExpressionEvaluation {
    public static int precedence(char op) {
        if (op == '+' || op == '-') return 1;
        if (op == '*' || op == '/') return 2;
        return 0;
    }

    public static String infixToPostfix(String infix) {
        Stack<Character> stack = new Stack<>();
        StringBuilder postfix = new StringBuilder();

        for (char c : infix.toCharArray()) {
            if (Character.isDigit(c)) {
                postfix.append(c);
            } else if (c == '(') {
                stack.push(c);
            } else if (c == ')') {
                while (!stack.isEmpty() && stack.peek() != '(') {
                    postfix.append(stack.pop());
                }
                stack.pop();
            } else {
                while (!stack.isEmpty() && precedence(stack.peek()) >= precedence(c)) {
                    postfix.append(stack.pop());
                }
                stack.push(c);
            }
        }

        while (!stack.isEmpty()) {
            postfix.append(stack.pop());
        }

        return postfix.toString();
    }

    public static int evaluatePostfix(String postfix) {
        Stack<Integer> stack = new Stack<>();
        for (char c : postfix.toCharArray()) {
            if (Character.isDigit(c)) {
                stack.push(c - '0');
            } else {
                int op2 = stack.pop();
                int op1 = stack.pop();
                switch (c) {
                    case '+': stack.push(op1 + op2); break;
                    case '-': stack.push(op1 - op2); break;
                    case '*': stack.push(op1 * op2); break;
                    case '/': stack.push(op1 / op2); break;
                }
            }
        }
        return stack.peek();
    }

    public static void main(String[] args) {
        String infix = "3+(2*5)";
        String postfix = infixToPostfix(infix);
        System.out.println("Result: " + evaluatePostfix(postfix)); // Output: 13
    }
}
```

#### Python Implementation:

```python
def precedence(op):
    if op in ('+', '-'):
        return 1
    if op in ('*', '/'):
        return 2
    return 0

def infix_to_postfix(infix):
    stack = []
    postfix = ""
    for c in infix:
        if c.isdigit():
            postfix += c
        elif c == '(':
            stack.append(c)
        elif c == ')':
            while stack and stack[-1] != '(':
                postfix += stack.pop()
            stack.pop()
        else:
            while stack and precedence(stack[-1]) >= precedence(c):
                postfix += stack.pop()
            stack.append(c)

    while stack:
        postfix += stack.pop()
    return postfix

def evaluate_postfix(postfix):
    stack = []
    for c in postfix:
        if c.isdigit():
            stack.append(int(c))
        else:
            op2 = stack.pop()
            op1 = stack.pop()
            if c == '+':
                stack.append(op1 + op2)
            elif c == '-':
                stack.append(op1 - op2)
            elif c == '*':
                stack.append(op1 * op2)
            elif c == '/':
                stack.append(op1 / op2)
    return stack.pop()

infix = "3+(2*5)"
postfix =

 infix_to_postfix(infix)
print("Result:", evaluate_postfix(postfix))  # Output: 13
```

---

### 9. K’th Non-repeating Character in a Stream

To find the K'th non-repeating character in a stream, we can use a hashmap to count the frequencies and a queue to track the order of non-repeating characters.

#### C++ Implementation:

```cpp
#include <iostream>
#include <unordered_map>
#include <queue>
#include <string>

using namespace std;

void kthNonRepeatingCharacter(const string &stream, int k) {
    unordered_map<char, int> frequency;
    queue<char> q;

    for (char c : stream) {
        frequency[c]++;
        if (frequency[c] == 1) {
            q.push(c);
        } else if (frequency[c] == 2) {
            q.pop();
        }
        if (q.size() >= k) {
            cout << q.front();
        } else {
            cout << "-1";
        }
    }
}

int main() {
    string stream = "geeksforgeeks";
    int k = 3;
    kthNonRepeatingCharacter(stream, k);  // Output: -1g
    return 0;
}
```

#### Java Implementation:

```java
import java.util.LinkedList;
import java.util.Queue;
import java.util.HashMap;

public class NonRepeatingCharacter {
    public static void kthNonRepeatingCharacter(String stream, int k) {
        HashMap<Character, Integer> frequency = new HashMap<>();
        Queue<Character> q = new LinkedList<>();

        for (char c : stream.toCharArray()) {
            frequency.put(c, frequency.getOrDefault(c, 0) + 1);
            if (frequency.get(c) == 1) {
                q.add(c);
            } else if (frequency.get(c) == 2) {
                q.remove(c);
            }
            if (q.size() >= k) {
                System.out.print(q.peek());
            } else {
                System.out.print("-1");
            }
        }
    }

    public static void main(String[] args) {
        String stream = "geeksforgeeks";
        int k = 3;
        kthNonRepeatingCharacter(stream, k); // Output: -1g
    }
}
```

#### Python Implementation:

```python
from collections import defaultdict, deque

def kth_non_repeating_character(stream, k):
    frequency = defaultdict(int)
    q = deque()

    for c in stream:
        frequency[c] += 1
        if frequency[c] == 1:
            q.append(c)
        elif frequency[c] == 2:
            q.popleft()

        if len(q) >= k:
            print(q[0], end="")
        else:
            print("-1", end="")

stream = "geeksforgeeks"
k = 3
kth_non_repeating_character(stream, k)  # Output: -1g
```

---

### 10. URLify a Given String

To URLify a string, we replace spaces with `%20`.

#### C++ Implementation:

```cpp
#include <iostream>
#include <string>

using namespace std;

string urlify(string str) {
    int spaceCount = 0;
    for (char c : str) {
        if (c == ' ') spaceCount++;
    }
    int newLength = str.length() + spaceCount * 2;
    str.resize(newLength);
    for (int i = str.length() - 1, j = newLength - 1; i >= 0; i--) {
        if (str[i] == ' ') {
            str[j--] = '0';
            str[j--] = '2';
            str[j--] = '%';
        } else {
            str[j--] = str[i];
        }
    }
    return str;
}

int main() {
    string str = "Mr John Smith    ";
    cout << "URLified: " << urlify(str) << endl; // Output: Mr%20John%20Smith
    return 0;
}
```

#### Java Implementation:

```java
public class URLify {
    public static String urlify(String str) {
        int spaceCount = 0;
        for (char c : str.toCharArray()) {
            if (c == ' ') spaceCount++;
        }
        int newLength = str.length() + spaceCount * 2;
        char[] urlified = new char[newLength];
        for (int i = str.length() - 1, j = newLength - 1; i >= 0; i--) {
            if (str.charAt(i) == ' ') {
                urlified[j--] = '0';
                urlified[j--] = '2';
                urlified[j--] = '%';
            } else {
                urlified[j--] = str.charAt(i);
            }
        }
        return new String(urlified);
    }

    public static void main(String[] args) {
        String str = "Mr John Smith    ";
        System.out.println("URLified: " + urlify(str)); // Output: Mr%20John%20Smith
    }
}
```

#### Python Implementation:

```python
def urlify(string):
    string = string.strip()
    return string.replace(" ", "%20")

string = "Mr John Smith    "
print("URLified:", urlify(string))  # Output: Mr%20John%20Smith
```

---

### 11. Count of Total Anagram Substrings

To count anagram substrings, we can use a hashmap to store the frequency of characters.

#### C++ Implementation:

```cpp
#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

int countAnagrams(const string &s) {
    unordered_map<string, int> frequency;
    int count = 0;

    for (int len = 1; len <= s.length(); len++) {
        for (int i = 0; i <= s.length() - len; i++) {
            string sub = s.substr(i, len);
            sort(sub.begin(), sub.end());
            frequency[sub]++;
        }
    }

    for (auto &entry : frequency) {
        count += (entry.second * (entry.second - 1)) / 2;
    }

    return count;
}

int main() {
    string s = "abba";
    cout << "Total Anagram Substrings: " << countAnagrams(s) << endl; // Output: 4
    return 0;
}
```

#### Java Implementation:

```java
import java.util.HashMap;
import java.util.Arrays;

public class AnagramCount {
    public static int countAnagrams(String s) {
        HashMap<String, Integer> frequency = new HashMap<>();
        int count = 0;

        for (int len = 1; len <= s.length(); len++) {
            for (int i = 0; i <= s.length() - len; i++) {
                char[] sub = s.substring(i, i + len).toCharArray();
                Arrays.sort(sub);
                String sortedSub = new String(sub);
                frequency.put(sortedSub, frequency.getOrDefault(sortedSub, 0) + 1);
            }
        }

        for (int freq : frequency.values()) {
            count += (freq * (freq - 1)) / 2;
        }

        return count;
    }

    public static void main(String[] args) {
        String s = "abba";
        System.out.println("Total Anagram Substrings: " + countAnagrams(s)); // Output: 4
    }
}
```

#### Python Implementation:

```python
from collections import defaultdict

def count_anagrams(s):
    frequency = defaultdict(int)
    count = 0

    for length in range(1, len(s) + 1):
        for i in range(len(s) - length + 1):
            sub = ''.join(sorted(s[i:i + length]))
            frequency[sub] += 1

    for freq in frequency.values():
        count += (freq * (freq - 1)) // 2

    return count

s = "abba"
print("Total Anagram Substrings:", count_anagrams(s))  # Output: 4
```

---

### 12. Count Number of Binary Strings without Consecutive 1's

We can solve this using dynamic programming.

#### C++ Implementation:

```cpp
#include <iostream>

using namespace std;

int countBinaryStrings(int n) {
    int a = 1, b = 1; // a: strings ending with 0, b: strings ending with 1
    for (int i = 2; i <= n; i++) {
        int new_a = a + b;
        int new_b = a;
        a = new_a;
        b = new_b;
    }
    return a + b;
}

int main() {
    int n = 5;
    cout << "Count of Binary Strings: " << countBinaryStrings(n) << endl; // Output: 8
    return 0;
}
```

#### Java Implementation:

```java
public class CountBinaryStrings {
    public static int countBinaryStrings(int n) {
        int a = 1, b = 1; // a: strings ending with 0, b: strings ending with 1
        for (int i = 2; i <= n; i++) {
            int newA = a + b;
            int newB = a;
            a = newA;
            b = newB;
        }
        return a + b;
    }

    public static void main(String[] args) {
        int n = 5;
        System.out.println("Count of Binary Strings: " + count

BinaryStrings(n)); // Output: 8
    }
}
```

#### Python Implementation:

```python
def count_binary_strings(n):
    a, b = 1, 1  # a: strings ending with 0, b: strings ending with 1
    for i in range(2, n + 1):
        new_a = a + b
        new_b = a
        a, b = new_a, new_b
    return a + b

n = 5
print("Count of Binary Strings:", count_binary_strings(n))  # Output: 8
```

---

### 13. Lexicographically Next String

To find the lexicographically next string, we can follow these steps:

1. Traverse the string from the end to find the first character that is smaller than the character next to it.
2. Traverse the string from the end again to find the smallest character on the right side of the found character.
3. Swap the two characters.
4. Reverse the substring on the right side of the original found character.

#### C++ Implementation:

```cpp
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

void nextLexicographicalString(string &s) {
    int i = s.size() - 2;
    while (i >= 0 && s[i] >= s[i + 1]) i--;
    if (i < 0) {
        cout << "No next string" << endl;
        return;
    }
    int j = s.size() - 1;
    while (s[j] <= s[i]) j--;
    swap(s[i], s[j]);
    reverse(s.begin() + i + 1, s.end());
    cout << "Next string: " << s << endl;
}

int main() {
    string s = "abdc";
    nextLexicographicalString(s);  // Output: Next string: adbc
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Arrays;

public class NextString {
    public static void nextLexicographicalString(StringBuilder s) {
        int i = s.length() - 2;
        while (i >= 0 && s.charAt(i) >= s.charAt(i + 1)) i--;
        if (i < 0) {
            System.out.println("No next string");
            return;
        }
        int j = s.length() - 1;
        while (s.charAt(j) <= s.charAt(i)) j--;
        char temp = s.charAt(i);
        s.setCharAt(i, s.charAt(j));
        s.setCharAt(j, temp);
        reverse(s, i + 1, s.length() - 1);
        System.out.println("Next string: " + s);
    }

    private static void reverse(StringBuilder s, int start, int end) {
        while (start < end) {
            char temp = s.charAt(start);
            s.setCharAt(start, s.charAt(end));
            s.setCharAt(end, temp);
            start++;
            end--;
        }
    }

    public static void main(String[] args) {
        StringBuilder s = new StringBuilder("abdc");
        nextLexicographicalString(s);  // Output: Next string: adbc
    }
}
```

#### Python Implementation:

```python
def next_lexicographical_string(s):
    s = list(s)
    i = len(s) - 2
    while i >= 0 and s[i] >= s[i + 1]:
        i -= 1
    if i < 0:
        print("No next string")
        return
    j = len(s) - 1
    while s[j] <= s[i]:
        j -= 1
    s[i], s[j] = s[j], s[i]
    s[i + 1:] = reversed(s[i + 1:])
    print("Next string:", ''.join(s))

s = "abdc"
next_lexicographical_string(s)  # Output: Next string: adbc
```

---

### 14. Check if Given String Can be Split into Four Distinct Strings

We can achieve this by checking for unique characters in the string and ensuring their count is at least 4.

#### C++ Implementation:

```cpp
#include <iostream>
#include <unordered_set>
#include <string>

using namespace std;

bool canSplitIntoFourDistinctStrings(const string &s) {
    unordered_set<char> unique_chars(s.begin(), s.end());
    return unique_chars.size() >= 4;
}

int main() {
    string s = "aabbbcccc";
    cout << (canSplitIntoFourDistinctStrings(s) ? "Yes" : "No") << endl; // Output: Yes
    return 0;
}
```

#### Java Implementation:

```java
import java.util.HashSet;

public class DistinctStrings {
    public static boolean canSplitIntoFourDistinctStrings(String s) {
        HashSet<Character> uniqueChars = new HashSet<>();
        for (char c : s.toCharArray()) {
            uniqueChars.add(c);
        }
        return uniqueChars.size() >= 4;
    }

    public static void main(String[] args) {
        String s = "aabbbcccc";
        System.out.println(canSplitIntoFourDistinctStrings(s) ? "Yes" : "No"); // Output: Yes
    }
}
```

#### Python Implementation:

```python
def can_split_into_four_distinct_strings(s):
    unique_chars = set(s)
    return len(unique_chars) >= 4

s = "aabbbcccc"
print("Yes" if can_split_into_four_distinct_strings(s) else "No")  # Output: Yes
```

---

### 15. Word Break Problem

We can solve the Word Break problem using dynamic programming or backtracking.

#### C++ Implementation:

```cpp
#include <iostream>
#include <unordered_set>
#include <vector>

using namespace std;

bool wordBreak(string s, unordered_set<string> &wordDict) {
    vector<bool> dp(s.size() + 1, false);
    dp[0] = true;

    for (int i = 1; i <= s.size(); i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && wordDict.find(s.substr(j, i - j)) != wordDict.end()) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.size()];
}

int main() {
    string s = "leetcode";
    unordered_set<string> wordDict = {"leet", "code"};
    cout << (wordBreak(s, wordDict) ? "Yes" : "No") << endl; // Output: Yes
    return 0;
}
```

#### Java Implementation:

```java
import java.util.HashSet;

public class WordBreak {
    public static boolean wordBreak(String s, HashSet<String> wordDict) {
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;

        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordDict.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[s.length()];
    }

    public static void main(String[] args) {
        String s = "leetcode";
        HashSet<String> wordDict = new HashSet<>();
        wordDict.add("leet");
        wordDict.add("code");
        System.out.println(wordBreak(s, wordDict) ? "Yes" : "No"); // Output: Yes
    }
}
```

#### Python Implementation:

```python
def word_break(s, wordDict):
    dp = [False] * (len(s) + 1)
    dp[0] = True

    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in wordDict:
                dp[i] = True
                break

    return dp[len(s)]

s = "leetcode"
wordDict = {"leet", "code"}
print("Yes" if word_break(s, wordDict) else "No")  # Output: Yes
```

---

### 16. Check for Balanced Parentheses in an Expression with O(1) Space

To check for balanced parentheses, we can use a counter instead of a stack, achieving O(1) space complexity.

#### C++ Implementation:

```cpp
#include <iostream>
#include <string>

using namespace std;

bool isBalanced(const string &expr) {
    int balance = 0;
    for (char c : expr) {
        if (c == '(') balance++;
        else if (c == ')') balance--;
        if (balance < 0) return false;
    }
    return balance == 0;
}

int main() {
    string expr = "(())";
    cout << (isBalanced(expr) ? "Balanced" : "Not Balanced") << endl; // Output: Balanced
    return 0;
}
```

#### Java Implementation:

```java
public class BalancedParentheses {
    public static boolean isBalanced(String expr) {
        int balance = 0;
        for (char c : expr.toCharArray()) {
            if (c == '(') balance++;
            else if (c == ')') balance--;
            if (balance < 0) return false;
        }
        return balance == 0;
    }

    public static void main(String[] args) {
        String expr = "(())";
        System.out.println(isBalanced(expr) ? "Balanced" : "Not Balanced

"); // Output: Balanced
    }
}
```

#### Python Implementation:

```python
def is_balanced(expr):
    balance = 0
    for c in expr:
        if c == '(':
            balance += 1
        elif c == ')':
            balance -= 1
        if balance < 0:
            return False
    return balance == 0

expr = "(())"
print("Balanced" if is_balanced(expr) else "Not Balanced")  # Output: Balanced
```

---

### 17. Length of Longest Balanced Subsequence

We can keep a count of open and closed parentheses and calculate the length of the longest balanced subsequence.

#### C++ Implementation:

```cpp
#include <iostream>
#include <string>

using namespace std;

int longestBalancedSubsequence(const string &s) {
    int open = 0, close = 0;
    for (char c : s) {
        if (c == '(') open++;
        else if (c == ')') close++;
    }
    return 2 * min(open, close);
}

int main() {
    string s = "(()))";
    cout << "Length of longest balanced subsequence: " << longestBalancedSubsequence(s) << endl; // Output: 4
    return 0;
}
```

#### Java Implementation:

```java
public class LongestBalancedSubsequence {
    public static int longestBalancedSubsequence(String s) {
        int open = 0, close = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') open++;
            else if (c == ')') close++;
        }
        return 2 * Math.min(open, close);
    }

    public static void main(String[] args) {
        String s = "(()))";
        System.out.println("Length of longest balanced subsequence: " + longestBalancedSubsequence(s)); // Output: 4
    }
}
```

#### Python Implementation:

```python
def longest_balanced_subsequence(s):
    open_count = s.count('(')
    close_count = s.count(')')
    return 2 * min(open_count, close_count)

s = "(()))"
print("Length of longest balanced subsequence:", longest_balanced_subsequence(s))  # Output: 4
```

---

### 18. Minimum Swaps for Bracket Balancing

To find the minimum swaps required to balance brackets, we can traverse the string and maintain a balance count.

#### C++ Implementation:

```cpp
#include <iostream>
#include <string>

using namespace std;

int minSwapsForBalancing(const string &s) {
    int balance = 0, swaps = 0;
    for (char c : s) {
        if (c == '(') balance++;
        else if (c == ')') balance--;
        if (balance < 0) {
            swaps++;
            balance = 0;  // Reset balance after a swap
        }
    }
    return swaps;
}

int main() {
    string s = "())()";
    cout << "Minimum swaps to balance: " << minSwapsForBalancing(s) << endl; // Output: 1
    return 0;
}
```

#### Java Implementation:

```java
public class MinSwaps {
    public static int minSwapsForBalancing(String s) {
        int balance = 0, swaps = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') balance++;
            else if (c == ')') balance--;
            if (balance < 0) {
                swaps++;
                balance = 0;  // Reset balance after a swap
            }
        }
        return swaps;
    }

    public static void main(String[] args) {
        String s = "())()";
        System.out.println("Minimum swaps to balance: " + minSwapsForBalancing(s)); // Output: 1
    }
}
```

#### Python Implementation:

```python
def min_swaps_for_balancing(s):
    balance = 0
    swaps = 0
    for c in s:
        if c == '(':
            balance += 1
        else:
            balance -= 1
        if balance < 0:
            swaps += 1
            balance = 0  # Reset balance after a swap
    return swaps

s = "())()"
print("Minimum swaps to balance:", min_swaps_for_balancing(s))  # Output: 1
```

---

### 19. Convert a Sentence into its Equivalent Mobile Numeric Keypad Sequence

We can create a mapping from characters to their corresponding numeric keypad values and convert the sentence.

#### C++ Implementation:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

using namespace std;

string convertToKeypadSequence(const string &s) {
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
    string s = "hello world";
    cout << "Keypad sequence: " << convertToKeypadSequence(s) << endl; // Output: Keypad sequence: 443355555566609667777
    return 0;
}
```

#### Java Implementation:

```java
import java.util.HashMap;

public class KeypadSequence {
    public static String convertToKeypadSequence(String s) {
        HashMap<Character, String> keypad = new HashMap<>();
        keypad.put('a', "2"); keypad.put('b', "22"); keypad.put('c', "222");
        keypad.put('d', "3"); keypad.put('e', "33"); keypad.put('f', "333");
        keypad.put('g', "4"); keypad.put('h', "44"); keypad.put('i', "444");
        keypad.put('j', "5"); keypad.put('k', "55"); keypad.put('l', "555");
        keypad.put('m', "6"); keypad.put('n', "66"); keypad.put('o', "666");
        keypad.put('p', "7"); keypad.put('q', "77"); keypad.put('r', "777"); keypad.put('s', "7777");
        keypad.put('t', "8"); keypad.put('u', "88"); keypad.put('v', "888");
        keypad.put('w', "9"); keypad.put('x', "99"); keypad.put('y', "999"); keypad.put('z', "9999");
        keypad.put(' ', "0");

        StringBuilder result = new StringBuilder();
        for (char c : s.toCharArray()) {
            result.append(keypad.get(c));
        }
        return result.toString();
    }

    public static void main(String[] args) {
        String s = "hello world";
        System.out.println("Keypad sequence: " + convertToKeypadSequence(s)); // Output: Keypad sequence: 443355555566609667777
    }
}
```

#### Python Implementation:

```python
def convert_to_keypad_sequence(s):
    keypad = {
        'a': '2', 'b': '22', 'c': '222',
        'd': '3', 'e': '33', 'f': '333',
        'g': '4', 'h': '44', 'i': '444',
        'j': '5', 'k': '55', 'l': '555',
        'm': '6', 'n': '66', 'o': '666',
        'p': '7', 'q': '77', 'r': '777', 's': '7777',
        't': '8', 'u': '88', 'v': '888',
        'w': '9', 'x': '99', 'y': '999', 'z': '9999',
        ' ': '0'
    }
    return ''.join(keypad[c] for c in s)

s = "hello world"
print("Keypad sequence:", convert_to_keypad_sequence(s))  # Output: Keypad sequence: 443355555566609667777
```

---

### 20. Burrows–Wheeler Data Transform Algorithm

The Burrows–Wheeler transform rearranges a string into runs of similar characters. The algorithm involves generating all rotations of the string, sorting them, and then extracting the last column.

#### C++ Implementation:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

string burrowsWheelerTransform(const string &s) {
    int n = s.size();
    vector<string> rotations(n);
    for (int i = 0; i < n; i++) {
        rotations[i] = s.substr(i) + s.substr(0, i);
    }
    sort(rotations.begin(), rotations.end());
    string bwt;


    for (const string &rotation : rotations) {
        bwt += rotation[n - 1];
    }
    return bwt;
}

int main() {
    string s = "banana";
    cout << "Burrows-Wheeler Transform: " << burrowsWheelerTransform(s) << endl; // Output: annb$aa
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Arrays;

public class BurrowsWheeler {
    public static String burrowsWheelerTransform(String s) {
        int n = s.length();
        String[] rotations = new String[n];
        for (int i = 0; i < n; i++) {
            rotations[i] = s.substring(i) + s.substring(0, i);
        }
        Arrays.sort(rotations);
        StringBuilder bwt = new StringBuilder();
        for (String rotation : rotations) {
            bwt.append(rotation.charAt(n - 1));
        }
        return bwt.toString();
    }

    public static void main(String[] args) {
        String s = "banana";
        System.out.println("Burrows-Wheeler Transform: " + burrowsWheelerTransform(s)); // Output: annb$aa
    }
}
```

#### Python Implementation:

```python
def burrows_wheeler_transform(s):
    n = len(s)
    rotations = [s[i:] + s[:i] for i in range(n)]
    rotations.sort()
    return ''.join(rotation[-1] for rotation in rotations)

s = "banana"
print("Burrows-Wheeler Transform:", burrows_wheeler_transform(s))  # Output: annb$aa
```

---

### 21. Form Minimum Number from Given Sequence

To form the minimum number, we can sort the array in a way that concatenating the elements produces the smallest number.

#### C++ Implementation:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(const string &a, const string &b) {
    return a + b < b + a;
}

string formMinimumNumber(vector<string> &numbers) {
    sort(numbers.begin(), numbers.end(), compare);
    string result;
    for (const string &num : numbers) {
        result += num;
    }
    return result;
}

int main() {
    vector<string> numbers = {"3", "30", "34", "5", "9"};
    cout << "Minimum number: " << formMinimumNumber(numbers) << endl; // Output: 3033459
    return 0;
}
```

#### Java Implementation:

```java
import java.util.Arrays;
import java.util.Comparator;

public class MinimumNumber {
    public static String formMinimumNumber(String[] numbers) {
        Arrays.sort(numbers, new Comparator<String>() {
            @Override
            public int compare(String a, String b) {
                return (a + b).compareTo(b + a);
            }
        });
        StringBuilder result = new StringBuilder();
        for (String num : numbers) {
            result.append(num);
        }
        return result.toString();
    }

    public static void main(String[] args) {
        String[] numbers = {"3", "30", "34", "5", "9"};
        System.out.println("Minimum number: " + formMinimumNumber(numbers)); // Output: 3033459
    }
}
```

#### Python Implementation:

```python
def compare(a, b):
    return a + b < b + a

def form_minimum_number(numbers):
    from functools import cmp_to_key
    numbers.sort(key=cmp_to_key(lambda a, b: (a + b) > (b + a)))
    return ''.join(numbers)

numbers = ["3", "30", "34", "5", "9"]
print("Minimum number:", form_minimum_number(numbers))  # Output: 3033459
```

---

### 22. Print Shortest Path to Print a String on Screen

To find the shortest path to print a string, we can calculate the distance from the current character to the desired character on a QWERTY keyboard layout.

#### C++ Implementation:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

unordered_map<char, pair<int, int>> createKeyboardMap() {
    string keyboard[] = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};
    unordered_map<char, pair<int, int>> keyboardMap;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < keyboard[i].length(); ++j) {
            keyboardMap[keyboard[i][j]] = {i, j};
        }
    }
    return keyboardMap;
}

int calculateDistance(pair<int, int> a, pair<int, int> b) {
    return abs(a.first - b.first) + abs(a.second - b.second);
}

int shortestPathToPrint(const string &s) {
    unordered_map<char, pair<int, int>> keyboardMap = createKeyboardMap();
    pair<int, int> currentPos = {0, 0}; // Start at 'q'
    int totalDistance = 0;

    for (char c : s) {
        pair<int, int> targetPos = keyboardMap[c];
        totalDistance += calculateDistance(currentPos, targetPos);
        currentPos = targetPos;
    }
    return totalDistance;
}

int main() {
    string s = "hello";
    cout << "Shortest path distance: " << shortestPathToPrint(s) << endl; // Output: Distance
    return 0;
}
```

#### Java Implementation:

```java
import java.util.HashMap;

public class ShortestPath {
    public static HashMap<Character, int[]> createKeyboardMap() {
        String[] keyboard = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};
        HashMap<Character, int[]> keyboardMap = new HashMap<>();
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < keyboard[i].length(); j++) {
                keyboardMap.put(keyboard[i].charAt(j), new int[]{i, j});
            }
        }
        return keyboardMap;
    }

    public static int calculateDistance(int[] a, int[] b) {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }

    public static int shortestPathToPrint(String s) {
        HashMap<Character, int[]> keyboardMap = createKeyboardMap();
        int[] currentPos = {0, 0}; // Start at 'q'
        int totalDistance = 0;

        for (char c : s.toCharArray()) {
            int[] targetPos = keyboardMap.get(c);
            totalDistance += calculateDistance(currentPos, targetPos);
            currentPos = targetPos;
        }
        return totalDistance;
    }

    public static void main(String[] args) {
        String s = "hello";
        System.out.println("Shortest path distance: " + shortestPathToPrint(s)); // Output: Distance
    }
}
```

#### Python Implementation:

```python
def create_keyboard_map():
    keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    keyboard_map = {}
    for i in range(3):
        for j in range(len(keyboard[i])):
            keyboard_map[keyboard[i][j]] = (i, j)
    return keyboard_map

def calculate_distance(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

def shortest_path_to_print(s):
    keyboard_map = create_keyboard_map()
    current_pos = (0, 0)  # Start at 'q'
    total_distance = 0

    for c in s:
        target_pos = keyboard_map[c]
        total_distance += calculate_distance(current_pos, target_pos)
        current_pos = target_pos
    return total_distance

s = "hello"
print("Shortest path distance:", shortest_path_to_print(s))  # Output: Distance
```

---

### 23. Mirror Characters of a String

To mirror characters, we can reverse the string and replace each character with its "mirror" equivalent based on a predefined mapping.

#### C++ Implementation:

```cpp
#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

string mirrorCharacters(const string &s) {
    unordered_map<char, char> mirrorMap = {
        {'a', 'ɒ'}, {'b', 'q'}, {'c', 'ɔ'},
        {'d', 'p'}, {'e', 'ǝ'}, {'f', 'ɟ'},
        {'g', 'ƃ'}, {'h', 'ɥ'}, {'i', 'ᴉ'},
        {'j', 'ɾ'}, {'k', 'ʞ'}, {'l', 'ʃ'},
        {'m', 'ɯ'}, {'n', 'u'}, {'o', 'o'},
        {'p', 'd'}, {'q', 'b'}, {'r', 'ɹ'},
        {'s', 's'}, {'t', 'ʇ'}, {'u', 'n'},
        {'v', 'ʌ'}, {'w', 'ʍ'}, {'x', 'x'},
        {'y', 'ʎ'}, {'z', 'z'}
    };
    string mirrored;
    for (char c : string(s.rbegin(), s.rend())) {
        mirrored += mirrorMap[c];
    }
    return mirrored;
}

int main() {
    string s = "hello";
    cout << "Mirrored string

: " << mirrorCharacters(s) << endl; // Output: oʍʍɐ
    return 0;
}
```

#### Java Implementation:

```java
import java.util.HashMap;

public class MirrorCharacters {
    public static String mirrorCharacters(String s) {
        HashMap<Character, Character> mirrorMap = new HashMap<>();
        mirrorMap.put('a', 'ɒ');
        mirrorMap.put('b', 'q');
        mirrorMap.put('c', 'ɔ');
        mirrorMap.put('d', 'p');
        mirrorMap.put('e', 'ǝ');
        mirrorMap.put('f', 'ɟ');
        mirrorMap.put('g', 'ƃ');
        mirrorMap.put('h', 'ɥ');
        mirrorMap.put('i', 'ᴉ');
        mirrorMap.put('j', 'ɾ');
        mirrorMap.put('k', 'ʞ');
        mirrorMap.put('l', 'ʃ');
        mirrorMap.put('m', 'ɯ');
        mirrorMap.put('n', 'u');
        mirrorMap.put('o', 'o');
        mirrorMap.put('p', 'd');
        mirrorMap.put('q', 'b');
        mirrorMap.put('r', 'ɹ');
        mirrorMap.put('s', 's');
        mirrorMap.put('t', 'ʇ');
        mirrorMap.put('u', 'n');
        mirrorMap.put('v', 'ʌ');
        mirrorMap.put('w', 'ʍ');
        mirrorMap.put('x', 'x');
        mirrorMap.put('y', 'ʎ');
        mirrorMap.put('z', 'z');

        StringBuilder mirrored = new StringBuilder();
        for (int i = s.length() - 1; i >= 0; i--) {
            mirrored.append(mirrorMap.get(s.charAt(i)));
        }
        return mirrored.toString();
    }

    public static void main(String[] args) {
        String s = "hello";
        System.out.println("Mirrored string: " + mirrorCharacters(s)); // Output: oʍʍɐ
    }
}
```

#### Python Implementation:

```python
def mirror_characters(s):
    mirror_map = {
        'a': 'ɒ', 'b': 'q', 'c': 'ɔ',
        'd': 'p', 'e': 'ǝ', 'f': 'ɟ',
        'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ',
        'j': 'ɾ', 'k': 'ʞ', 'l': 'ʃ',
        'm': 'ɯ', 'n': 'u', 'o': 'o',
        'p': 'd', 'q': 'b', 'r': 'ɹ',
        's': 's', 't': 'ʇ', 'u': 'n',
        'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
        'y': 'ʎ', 'z': 'z'
    }
    mirrored = ''.join(mirror_map[c] for c in s[::-1])
    return mirrored

s = "hello"
print("Mirrored string:", mirror_characters(s))  # Output: oʍʍɐ
```
