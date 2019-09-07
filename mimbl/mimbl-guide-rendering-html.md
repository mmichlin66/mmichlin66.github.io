---
layout: mimbl-guide
unit: 1
title: Rendering HTML
---

# Mimbl Guide: Rendering HTML Content
The ultimate goal of any Web UI library is to produce HTML content and make it easy for developers. Mimbl mostly relies on JSX for laying out the HTML structure; however, it can also work with regular JavaScript types such as strings, numbers, arrays and objects.

There are several places in Mimbl that accept content to be converted to HTML:

- first parameter of the `mim.mount` function
- return value of functional components (see next unit)
- return value of the `render` method of class-based components (see next unit)

In all these places, developers can use either JSX expressions or any other JavaScript type; in fact these parameters and return values have the TypeScript type of `any`. In this unit we will use the `mim.mount` function for demonstration, but all the concepts are applicable to all other cases where HTML content is produced.

Here are a few examples of producing HTML content:

```typescript
mim.mount( "Hello World!");
// produces a single Text node with the "Hello World!" string

mim.mount( 25);
// produces a single Text node with the "25" string

mim.mount( true);
// produces a single Text node with the "true" string

mim.mount( false);
mim.mount( null);
mim.mount( undefined);
// each of the above calls doesn't produce any HTML content

mim.mount( new Date());
// produces a single Text node with the string representation of the current date-time

mim.mount( [1,2]);
// produces two text nodes with strings "1" and "2"

mim.mount( { a: 1, b: 2});
// produces a single Text node with the "[object Object]" string (default toString() for objects)

mim.mount( <h1>Hello World!</h1>);
// produces <h1> element with the "Hello World!" string (text node)

function foo() { return <div>Hello</div>; }
mim.mount( foo);
// doesn't produce any HTML content - functions are ignored

function Foo() { return <div>Hello</div> }
mim.mount( <Foo/>);
// Produces a <div> element with the "Hello" string (text node) - Foo is a functional component in JSX expression
```

The above examples demonstrate the rules that Mimbl uses when producing HTML from the content provided to it. The following sections will discuss these rules in more detail and will provide more involved examples.

## Regular JavaScript Types
In general, regular JavaScript types are converted to HTML text nodes. In most cases, Mimbl uses the built-in `toString` method to perform the conversion; however, there are the following exceptions:

- `false`, `null`, `undefined` and functions are ignored - no HTML content is created for them.
- Arrays are iterated over and HTML content is created separately for each item. If an item is itself an array, the process continues recursively.

Objects that don't override the default implementation of the `toString` method will be converted to the "[object Object]" string. An exception to this rule are objects that implement a `render` method. Such objects are treated as component instances: their `render` method will be invoked and its return value will be used to produce HTML content.

## JSX Expressions
This section provides a brief description of JSX as it pertains to Mimbl. The detailed description of JSX can be found in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/jsx.html).

A JSX expression is an HTML-like construct that is type-checked and parsed by the TypeScript compiler into a call to a JSX factory function. A JSX expression consists of a single "root" JSX element with arbitrary number of children. Children can be either JSX expressions or strings or any other JavaScript type. A JSX element has an opening tag in the form `<tag>` and a closing tag in the form `</tag>`. If a JSX element doesn't have children it can use only an opening tag in the form `<tag/>`

A JSX element can have an arbitrary number of *attributes* in the form `<tag name=value>`. Attribute values can be of any type: strings, numbers, Booleans, objects or even JSX expressions. Strings can be specified directly, while other types should be enclosed within curly braces. If only a name is specified for an attribute (as in `<tag attr/>`) the attribute's value is set to `true`. As opposed to regular HTML content, `false`, `null` and functions are treated as normal attribute value. Attributes with the `undefined` value, however, are ignored - it is the same as not specifying the attribute at all.

JSX is perfectly suited to laying out HTML structure - here is an example:

```typescript
mim.mount( <div>
    <h1>Title</h1>
    <form>
        <label for="txt1">Label</label>
        <input type="text" id="txt1" value={15} autocomplete />
    </form>
</div>);
```

When we use curly braces within a JSX expression, we can put any JavaScript expression within it. The value of this expression will become part of the JSX expression. This can be used to put values of variables or results of function calls into JSX and it can also be used to compose JSX in chunks. For example, we could rewrite the previous example in a more modular form:

```typescript
function getRandomValue(): number { return Math.round(Math.random()) * 1000};

let title = "Title";
let id = "txt1";
let label = <label for={id}>Label</label>;
let input = <input type="text" id={id} value={getRandomValue()} autocomplete />;

mim.mount( <div>
    <h1>{title}</h1>
    <form>
        {label}
        {input}
    </form>
</div>);
```

So far we used HTML element names for JSX tag names. Note that we only used lowercase names. If a JSX tag starts with the uppercase letter, Mimbl will treat it as a component. All the JSX rules apply to components just as they apply to HTML elements. For example, we can have a functional component `Sum` (see the next unit for details) and use it in JSX:

```typescript
type SumProps = { first: number; second: number; }

function Sum( props: SumProps): any { return props.first + props.second; };

let a = 5;
let b = 7;

mim.mount( <div>
    {`Sum of ${a} and ${b} is: `}
    <Sum first={a} second={b} />
</div>);
```

## Handling Events
If we want to attach an event handler to an HTML element's event we specify an attribute with the event's name and pass our handler function as the attribute's value; for example:

```typescript
function onButtonClick( e: MouseEvent): void
{
    console.log( "Button was clicked");
};

mim.mount( <div>
    <button click={onButtonClick}>Click Me</button>
</div>);
```

The handler function receives as a parameter an event object with the type corresponding to the event. Mimbl wraps event handler invocations so that it can intercept exceptions, but it doesn't change event parameters in any way.

Specifying an event handler for an event as shown in the example above, attaches to the bubbling phase of the event processing. In most cases this is what developers need. If, however, the developer wants to attach to the capturing phase of the event processing, he must specify an array consisting of two elements: the event handler function and the Boolean `true` value:

```typescript
mim.mount( <div>
    <button click={[onButtonClick, true]}>Click Me</button>
</div>);
```

When an event handler function belongs to a class it needs to have access to the class's members via the `this` pointer. Since regular JavaScript (and, TypeScript) functions have their `this` pointer assigned at the point of invocation, the following code will NOT work:

```typescript
class Counter extends mim.Component
{
    private counter: number = 0;

    public render(): any
    {
        return <div>
            <button click={onIncrement}>Increment Counter</button>
        </div>
    }

    private onIncrement( e: MouseEvent): void
    {
        // ERROR: this doesn't point to our object!
        this.counter++;
    }
}
```

Since we are passing our member function to be remembered and invoked as a callback, at the moment of invocation, the `this` pointer will be assigned to something very different from our object. In order for `this` to point to our object, the function should either be bound to `this` before being attached to the event or be implemented as an arrow function. The two methods have very similar effect: they both create a new function object, which when invoked has access to our object via `this`. Although it is a matter of personal preference, we recommend using arrow functions - simply because it saves some typing.

The caveat here is that we want the binding or arrow function creation occur only once and not every time when the `render` method is called. Consider the following implementation:

```typescript
class Counter extends mim.Component
{
    private counter: number = 0;

    public render(): any
    {
        return <div>
            <button click={() => onIncrement()}>Increment Counter</button>
        </div>
    }

    private onIncrement( e: MouseEvent): void
    {
        this.counter++;
    }
}
```

The above code does work and when the `onIncrementClick` function is called, the `this` pointer properly points to our object; however, every time the render method is called (that is, when the component is updated) Mimbl will see a new event handler and will have to remove the old event handler and attach the new one. These are DOM operations that we want to minimize. And, fortunately there is an easy way to do this:

```typescript
class Counter extends mim.Component
{
    private counter: number = 0;

    public render(): any
    {
        return <div>
            <button click={onIncrement}>Increment Counter</button>
        </div>
    }

    private onIncrement = (e: MouseEvent): void =>
    {
        this.counter++;
    };
}
```

Instead of creating a new arrow function that calls our `onIncrementClick` function on every call to `render`, we defined `onIncrement` itself as an arrow function. The difference between defining a regular member function and defining an arrow member function is that a regular function is defined on our object's prototype while an arrow function is defined as a property on each object instance. One particular consequence is that arrow functions cannot be overridden in a derived class. If you are creating a component hierarchy and want a base component class to react on an event by invoking a function that can be overridden in derived classes, implement the following pattern:

```typescript
class Base extends mim.Component
{
    private onEvent = (e: Event): void =>
    {
        // invoke "virtual" function
        this.handleEvent(e);
    };

    protected handleEvent( e: Event): void
    {
        // perform event processing
    }
}

class Derived extends Base
{
    protected handleEvent( e: Event): void
    {
        // perform event processing
    }
}
```

Here, the base class defines an event handler as an arrow function, which called the regular function for event processing. Derived classes should override the regular function to provide their own processing.

## References
References are objects of types `mim.Ref<T>` holding direct references to either a DOM element or a component instance. The generic type `T` corresponds to the type of the element or the component. References are created using the `new` operator and are initially empty. Reference instances are passed as values of the `ref` attribute in JSX and, after the content is rendered, the reference is filled in. From that moment on, the `r` property of the reference object points to the DOM element or the component instance. Here is an example:

```typescript
class Focus extends mim.Component
{
    private inputRef = new mim.Ref<HTMLInputElement>();

    public render(): any
    {
        return <div>
            <button click={this.onSetFocus}>Set Focus</button>
            <br/>
            <input type="text" ref={this.inputRef} />
        </div>
    }

    private onSetFocus(): void
    {
        this.inputRef.r.focus();
    }
}
```

References are usually needed when there is no good way to perform a desired task in a declarative manner, for example, setting focus to an element or measuring the size of an element. References can also be used for components and here they have wider application than with DOM elements. Mimbl promotes using components just as regular JavaScript object and that means communicating with them by direct property manipulation and method invocations. We will be talking more about components in the next unit, but here is an example when a Parent component uses a reference to a Child component to tell it what color to use for its text:

```typescript
class Child extends mim.Component
{
    @mim.prop color: string = "black";

    public render(): any
    {
        return <span style={ {color: this.color} }>Hello!</span>
    }
}

class Parent extends mim.Component
{
    private childRef = new mim.Ref<Child>();

    public render(): any
    {
        return <div>
            <button click={this.onRed}>Red</button>
            <button click={this.onGreen}>Green</button>
            <button click={this.onBlue}>Blue</button>
            <br/>
            <Child ref={this.childRef} />
        </div>
    }

    private onRed(): void { this.inputRef.r.color = "red"; }
    private onGreen(): void { this.inputRef.r.color = "green"; }
    private onBlue(): void { this.inputRef.r.color = "blue"; }
}
```

When an element or a component instance to which the reference points is not rendered anymore, the reference object is *cleared*; that is, its `r` property is set to `undefined`. The reference is also cleared when a component that created it is unmounted. It is a good practice to check whether the `r` property is defined before using it.

The `ref` attribute is applicable to any type of DOM elements as well as any *managed* component (more on this in the next unit).

There are times when a component (or any other code) that created a `mim.Ref` object wants to be notified when the reference is filled in, cleared or its value changes. The `mim.Ref` object allows providing a callback that will be invoked every time the value of the reference changes in any way. The callback can either be provided as a first parameter in the `mim.Ref` constructor or passed in the call to the `addListener` method. When no longer needed, the callback can be removed by calling the `removeListener` method.

## Element and Component Lists
It is a common task for Web developers to represent collections of same-type structures. This is modeled by an element having multiple sub-elements or a parent component rendering a list of child components. Such lists change when items are added to or removed from the list or when the order of items in the list changes. In order to properly update DOM when an item list changes, the first task Mimbl has to do is to match items from a newly rendered list to those in the existing list. Based on this matching, Mimbl understands what items should be destroyed or inserted or simply updated. The matching algorithm should figure out an item identity for the matching to be accurate and that identity should be unique among the items under the same parent.

Mimbl allows developers to specify *keys* when elements and components are rendered. A key is a built-in property (of `any` type) that can be specified for any element as well as managed and functional components (more on this in the next unit). For proper matching, keys for all items under the same parent (another component or DOM element) must be unique. In many cases, choosing a unique key for an item is not difficult because it may reflect some unique property of a data element that the item represents. There are cases, however, when there is no such property and the keys should be actively managed by the Parent component to be created and remain unique.






