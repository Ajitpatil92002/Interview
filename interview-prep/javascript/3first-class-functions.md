## Function statement

A normal function that we create using Naming convention. & By this we can do the Hoisting.

this way of creating function is called function statement

```javascript
function run() {
  console.log("hello world");
}
```

## Function expression

When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.

```javascript
var a = function () {
  console.log("Function Expression");
};
```

## Anonymous Function

A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.

```javascript
function(){

}
```

## Named Function Expression

A function with a name is known as Named Function Expression.

```javascript
var a = function xyx() {
  console.log("Names Function Expression");
};
```

## Difference b/w Parameters and Arguments ?

When we creating a function & put some variabels in this ( ) that is our Parameters.

```javascript
function ab(param1, param2) {
  console.log(parm1, param2);
}
```

When we call this function & pass a variabel in this ( ) that is our Arguments
For Ex - `ab( 4, 5 );`

## What is First Class Function Or First class citizens?

The Ability of use function as value,

-     Can be passed as an Argument,
-     Can be executed inside a closured function &
-     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     }

`Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.`
