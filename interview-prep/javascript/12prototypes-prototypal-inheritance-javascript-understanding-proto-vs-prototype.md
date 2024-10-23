### **Prototypes & Prototypal Inheritance in JavaScript: Understanding `__proto__` vs `prototype`**

JavaScript’s inheritance model is different from class-based languages like Java or C++. Instead of classical inheritance, JavaScript uses **prototypal inheritance**, a concept that can initially seem tricky but is a powerful tool once understood.

In this blog, we'll break down:

- What prototypes are in JavaScript
- How prototypal inheritance works
- The difference between `__proto__` and `prototype`
- How inheritance happens in JavaScript

---

### **What is a Prototype?**

In JavaScript, every object has a hidden internal property called **`[[Prototype]]`**. This property links the object to another object, known as its **prototype**.

When you try to access a property or method on an object, JavaScript will:

1. Look for it directly on the object.
2. If it doesn’t find it there, it will look up the prototype chain (i.e., check the object's prototype, and then its prototype's prototype, and so on).

In essence, a prototype is an object from which another object inherits properties and methods.

### **Prototypal Inheritance: How It Works**

**Prototypal inheritance** is a mechanism by which one object can "inherit" properties and methods from another object. This happens through the **prototype chain**.

Here’s a simple example to understand inheritance:

```javascript
const person = {
  greet: function () {
    console.log("Hello!");
  },
};

const student = Object.create(person); // student inherits from person
student.name = "John";

console.log(student.name); // Output: John (own property of student)
student.greet(); // Output: Hello! (inherited from person)
```

In this example:

- `student` is an object that inherits from `person`.
- When we call `student.greet()`, JavaScript looks for `greet` in the `student` object. Since it's not found, it checks the prototype, which is `person`, and finds `greet` there.

This is the core idea of **prototypal inheritance**: objects inherit properties and methods from other objects, not from classes.

---

### **The `prototype` Property**

In JavaScript, functions (which can be used as constructors) automatically have a property called **`prototype`**. This property is used to build the **`[[Prototype]]`** chain for objects created using that constructor function.

#### Example:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.
```

- The `Animal` function has a `prototype` property, which contains the `speak` method.
- When we create a new object (`dog`) using the `new` keyword, the `dog` object’s **`[[Prototype]]`** is set to `Animal.prototype`. This is why `dog` can access the `speak` method.

### **The Role of `prototype`**

- Every function in JavaScript has a `prototype` property that points to an object. This object will be the **prototype** of any instance created using that function as a constructor (via the `new` keyword).
- **`prototype`** is an object that holds methods and properties that should be shared across all instances created by the constructor function.

For example:

```javascript
function Car(model) {
  this.model = model;
}

Car.prototype.start = function () {
  console.log(`${this.model} is starting.`);
};

const tesla = new Car("Tesla");
tesla.start(); // Tesla is starting.
```

In this example:

- `Car.prototype` contains the `start` method.
- When `tesla.start()` is called, the JavaScript engine looks for the `start` method on `tesla`. It doesn’t find it directly on `tesla`, so it looks in `tesla`'s prototype, which is `Car.prototype`.

---

### **What is `__proto__`?**

The `__proto__` property is a reference to the **prototype** of an object. It’s part of the object itself and points to the prototype from which the object inherits properties and methods.

For example:

```javascript
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true
```

In this case:

- `obj.__proto__` points to `Object.prototype` because `obj` is created from the base object type.

### **Key Differences Between `prototype` and `__proto__`**

- **`prototype`** is a property of constructor functions (like `Animal`, `Car`, etc.).

  - **Used in Constructor Functions**: It defines properties and methods that should be available to all instances created by that constructor.
  - **Shared Across Instances**: Any object created by the constructor will inherit from the `prototype` object.

- **`__proto__`** is a property of objects and points to the object’s prototype.
  - **Link Between Objects**: It forms the prototype chain. It’s how an object can access properties and methods of another object (its prototype).
  - **Used to Access Prototype**: It provides access to the object's prototype (usually another object).

In summary:

- **`prototype`** is the blueprint or template for objects created by a constructor function.
- **`__proto__`** is the actual reference to the prototype object from which an object inherits.

### **Example of `__proto__` and `prototype` in Action:**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

const alice = new Person("Alice");

// 'prototype' is a property of the Person constructor
console.log(Person.prototype);

// '__proto__' is a property of alice, which points to Person.prototype
console.log(alice.__proto__ === Person.prototype); // true
```

In this example:

- `Person.prototype` contains the method `sayHello`.
- The object `alice.__proto__` points to `Person.prototype`. Therefore, `alice` can access the `sayHello` method.

---

### **Prototype Chain and Inheritance**

In JavaScript, when you access a property or method on an object, the engine will look for that property on the object itself. If it doesn’t find it, it will move up the prototype chain.

This chain continues until the engine either finds the property or reaches the top of the chain, which is `Object.prototype`. If the property is not found, `undefined` is returned.

Here’s an example to illustrate:

```javascript
const obj = {};
console.log(obj.toString()); // Found in Object.prototype
```

Even though `obj` doesn’t have its own `toString` method, it inherits one from `Object.prototype`, which is at the top of the prototype chain.

---

### **Why Use Prototypal Inheritance?**

Prototypal inheritance allows JavaScript to:

- Create objects that share properties and methods without duplicating code.
- Enable efficient memory usage since all instances share methods defined on the prototype.
- Achieve dynamic inheritance, where objects can be extended or modified at runtime.

It’s a flexible inheritance model that is more lightweight compared to classical inheritance found in other languages.

---

### **Conclusion**

To summarize:

- **Prototypes** form the foundation of inheritance in JavaScript.
- **`prototype`** is a property of constructor functions and defines the methods and properties shared by all instances created using that constructor.
- **`__proto__`** is an internal property of objects that points to the object’s prototype, forming the prototype chain.

By mastering prototypes and prototypal inheritance, you can better understand how JavaScript's object model works, enabling you to write more efficient, modular, and reusable code.

Let me know if you’d like to explore this topic further or dive into related concepts!
