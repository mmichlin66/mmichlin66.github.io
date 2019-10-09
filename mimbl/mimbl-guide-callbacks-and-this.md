---
layout: mimbl-guide
unit: 4
title: Callbacks and this
---

# Mimbl Guide: Callbacks and this
Callbacks are used heavily in Mimbl. The primary use is probably as DOM event handlers; however, there are many other places where callbacks are used. Since Mimbl encourages developing class-based components, the callbacks will often be class methods, which will need access to the class instance properties via the `this` keyword. JavaScript is notorious for making it difficult to combine callbacks and `this` access. This unit describes the techniques available in Mimbl that make this process a bit easier.

## Callbacks and this in JavaScript
Originally a language without classes, JavaScript has always supported objects, constructor functions and the `this` keyword. Nowadays, when the modern JavaScript supports classes natively and especially with advent of TypeScript, classes are the preferred way of writing reusable components (notwithstanding React's promotion of Hooks). Compared to other object-oriented languages, however, JavaScript has very different mechanics around the use of `this`. While in other languages within a class method, `this` always refers to the instance no matter how the method was called, in JavaScript, it is exactly the way the method is called that determines what `this` will refer to.

When a method is called using the `object.method()` notation, `this` inside the `method` will refer to `object`; however, if a method is invoked as a callback (e.g. in `setTimeout`), `this` will either be undefined or refer to a global object such as `window`. For example:

```tsx
class A
{
    name: string;
    printName() { console.log( this.name); }
}

let a = new A();
a.name = "John";

a.printName());  // prints "John"

setTimeout( a.printName, 1000); // ERROR
```

In order to have a properly defined `this` when a method is used as a callback, the method should either be defined as an arrow function property or be bound to the class instance:

```tsx
class A
{
    name: string;

    // define property with an arrow function as the value
    printName = () => { console.log( this.name); };
}

// OR

class A
{
    name: string;
    printName = () => { console.log( this.name); };

    constructor()
    {
        // bind the method to `this` value
        this.printName = this.printName.bind( this);
    }
}

```

These two techniques are widely used to allow methods to be invoked as callbacks; however, let's notice what is actually happening here. In our original definition of class `A`, the `printName` method was really a method - that is, a function defined on the prototype of the class. This means that no matter how many objects of the class we create, there is a single definition of the method. When we define the `printName` method as an arrow function or bind the method to `this` in the constructor, what we actually create is a property and each object of our class will have this property with a distinct value.

## 




