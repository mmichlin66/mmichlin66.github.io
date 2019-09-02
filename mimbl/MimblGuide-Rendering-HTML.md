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
- return value of the `render` method of the class-based components (see next unit)

In all these places, developers can use either JSX expressions or any other JavaScript type; in fact these parameters and retur values have the TypeScript tyep of `any'. In this unit we will use the `mim.mount` function for demonstration, but all the concepts are applicable to all other cases where content to be converted to HTML is expected.

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
In general, regular JavaScript types are converted to HTML text nodes. In most cases, Mimble uses the built-in `toString` method to perform the conversion; however, there are the following excpetions:

- `false`, `null`, `undefined` and functions are ignored - no HTML content is created for them.
- Arrays are iterated over and HTML content is created separately for each item. If an item is itself an array, the process continues recursively.

Objects that don't override the default implementation of the `toString` method will be converted to the "[object Object]" string. An exception to this rule are objects that implement a `render` method. Such objects are treated as component instances: their `render` method will be invoked and its return value will be used to produce HTML content.

## JSX Expressions
This section provides a brief description of JSX as it pertains to Mimbl. The detailed description of JSX can be found in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/jsx.html).

A JSX expression is a construct that is type-checked and parsed by the TypeScript compiler into a call to a JSX factory function. A JSX expression consists of a single "root" JSX element with arbitrary number of children. Children can be either other JSX expressions or strings or any other JavaScript type. A JSX element has an opening tag in the form `<tag>` and a closing tag in the form `</tag>`. If a JSX element doesn't have children it can use only an opening tag in the form `<tag/>`

A JSX element can have an arbitrary number of *attributes* in the form `<tag name=value`. Attribute values can be of any type: strings, numbers, booleans, objects or even JSX expressions. Strings can be specified directly, while other types should be enclosed within curly braces. If only a name is specified for an attribute (as in `<tag attr/>`) the attribute's value is set to `true`. As opposed to regular HTML content, `false`, `null` and functions are treated as normal attribute value. Attributes with the `undefined` value, however, are ignored - it is the same as not specifying the attribute at all.

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

So far we used HTML element names for JSX tag names. Note that we use only lowercase names. If the JSX tag starts with the uppercase letter, Mimbl will treat it as a component. All the JSX rules apply to components just as they apply to HTML elements. For example, we can have a functional component (see the next unit for details) Sum and use it in JSX:


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




