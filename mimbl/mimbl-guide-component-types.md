---
layout: mimbl-guide
unit: 2
title: Component Types
---

# Mimbl Guide: Component Types
In this unit we will look at the different types of components that Mimbl supports and discuss which type is better suited to different circumstances.

Mimbl supports three types of components:
- Functional components
- Managed components
- Independent components

We will briefly describe each component type's main features and then use an example to highlight their differences.

## Functional Components
Functional components are just functions that accept a *props* object and return `any`. A functional component participates in JSX by having the function name specified as a JSX tag - remember to start the name of the functional component with a capital letter. Here is a simple example of a functional component saying "Hello World" in a given color:

```typescript
interface HelloWorldFuncProps
{
    color?: string;
}

function HelloWorldFunc( props: HelloWorldFuncProps): any
{
    return <span style={ {color: props.color} }>Hello World!</span>
}

mim.mount( <HelloWorldFunc color="blue" />);
```

Functional components don't have state -  and the only way for a component to render different content is to have the parent supply different property values to it in JSX.

Functional components are the simplest and least powerful type of components available in Mimbl; therefore, the rest of the unit will focus on the other two component types: managed and independent.

## Managed Components
Managed components are classes that derive from the `mim.Component` class and that are used in JSX by specifying their class name as a JSX tag. Managed components can define a `props` type and accept it in the constructor. Here is the same Hello World functionality implemented as a managed component:

```typescript
interface HelloWorldManagedProps
{
    color?: string;
}

class HelloWorldManaged extends mim.Component<HelloWorldManagedProps>
{
    constructor( props: HelloWorldManagedProps)
    {
        super( props);
    }

    public render(): any
    {
        return <span style={ {color: this.props.color} }>Hello World!</span>
    }
}

mim.mount( <HelloWorldManaged color="blue" />);
```

Managed components are stateful - their instance fields constitute their internal state. Managed components can request to be updated by calling the `updateMe` method from the `mim.Component` class. A parent component can obtain a *reference* to the instance of a managed component by using the built-in `ref` property as in the following snippet:

```typescript
class Parent extends mim.Component
{
    myRef = new mim.Ref<Child>();

    render(): any
    {
        return <Child ref={this.myRef} />
    }
}

```

Managed components can implement life-cycle methods so that they will be notified upon certain events in the component's life: `willMount`, `shouldUpdate`, `willUnmount`, etc.

Managed components are called "managed" because the Mimbl infrastructure manages their instances deciding when to create and when to destroy them. Of course Mimbl doesn't do it arbitrarily - during updates, Mimbl tries to match components in a newly rendered JSX with that from a previous rendering. Mimbl will destroy existing component instances for which there is no matching component in the new rendering. Mimbl will create new instances of components for which there is no matching in the previous rendering. Otherwise, Mimbl will update the existing component instance with the new property values from the new rendering. The main point here is that developers never create managed component instances explicitly.

When a managed component wants to update itself it calls the `updateMe` method. The Mimbl infrastructure will call the component's `render` method during the next update cycle. Since the functionality of managed components depends on the properties passed to them by their parents, they will be also updated when the parent updates. Thus, if some top-level component updates, the entire tree of managed components underneath it will also be updated. Managed components can opt out of this updating by implementing the `shouldUpdate` method and returning `false` from it.

## Independent Components
Independent components are classes that, like managed components, derive from the `mim.Component` class. The difference is that independent components are explicitly created by developers using the `new` operator. Independent components are free to accept any parameters in the constructor and they participate in JSX by specifying their instance instead of the class. Here is an example of the Hello World functionality implemented as an independent component:

```typescript
class HelloWorldIndependent extends mim.Component
{
    @mim.updatable color: string;

    constructor( color: string)
    {
        super();

        this.color = color;
    }

    public render(): any
    {
        return <span style={ {color: this.color} }>Hello World!</span>
    }
}

mim.mount( new HelloWorldIndependent("blue"));
```

Here are the notable differences from the managed component:
- There is no *props* object.
- The `color` property is defined directly as the component's field.
- The constructor accepts the color value, which is assigned to the `color` field.
- Component is instantiated using `new`.

The `@mim.updatable` decorator makes the `color` field an *updatable property*, meaning that whenever the value of the field is changed, the component will be updated. Multiple fields can be marked as updatable properties and if their values are changed during the same JavaScript event loop, the component will be only updated once. The `@mim.updatable` decorator is a convenience feature: internally it calls the `updateMe` method. Independent components can directly call the `updateMe` method whenever they want and, again, if multiple calls are made during the same JavaScript event loop, the component will be only updated once.

Let's see how independent components are used by other components. Imagine a *Parent* component that has a mechanism to choose a color and then it uses our `HelloWorldIndependent` component to say "Hello World!" in that color.

```typescript
class Parent extends mim.Component
{
    private helloWorldComp = new HelloWorldIndependent( "blue");

    public render(): any
    {
        return <div>{this.helloWorldComp}</div>
    }

    private onColorChanged( newColor: string): void
    {
        this.helloWorldComp.color = newColor;
    }
}
```

The `Parent` component declares an internal field that keeps the instance of our `HelloWorldIndependent` component. This instance is used in curly braces in JSX - because it is just a regular JavaScript object. Mimbl knows that this object is actually a component (simply because it has the `render` method) and will handle it accordingly. When the parent component decides to change the color in which it wants the "Hello World!" phrase to be displayed it just assigns the new color value to our component's `color` property and our component dutifully updates itself.

Note what is happening here: although it is the `Parent` component that decides on what color to use, only the `HelloWorldIndependent` component is updated - the `Parent` component is NOT updated. This may make a big difference for complex component hierarchies - especially if there are components composed of many child components. Similar functionality is possible with managed components too - by obtaining references to child components. With independent components, the component instances are already the references we need.

Another significant difference between managed and independent components is that independent components are normally not updated when their parent is updated. Independent components are only updated when their `updateMe` method is called, which happens when the component decides for itself that it needs to be updated. This can be triggered by either the internal component's functionality or by an updatable property being changed; in both cases, however, the decision is made solely by the component itself.

Maybe the most significant difference between managed and independent components is that independent components are not destroyed when their location inside the page hierarchy changes. (By "destroyed" we mean "lost to garbage collection".) Imagine a `Parent` component that for whatever reasons (usually styling) places a `Child` component on a different hierarchy level in its HTML structure. First let's implement this functionality using a managed child component:

```typescript
class Parent extends mim.Component
{
    @mim.updatable isDeep = false;

    public render(): any
    {
        return this.isDeep
                    ? <div><div><Child/></div></div>
                    : <div><Child/></div>
    }
}
```

Although the level difference is just one `<div>` element, during the update cycle, Mimbl (like React) will not be able to preserve the `Child` component instance: it will have to destroy the old instance and create a new one. If the `Child` component has any internal state, it will be lost. Note that specifying a `key` property when using the `Child` component will not help: keys work only on the same hierarchy level. Using a reference on the `Child` component will not help either: the reference will be cleared upon unmounting the old instance and will be set to the new instance upon mounting.

Now let's implement the same functionality using an independent child component:

```typescript
class Parent extends mim.Component
{
    @mim.updatable isDeep = false;
    child = new Child();

    public render(): any
    {
        return this.isDeep
                    ? <div><div>{this.child}</div></div>
                    : <div>{this.child}</div>
    }
}
```

The independent `Child` component instance will go through the *unmount* and *mount* lifecycle events (because the actual parent DOM node changes); however, since the `Parent` component holds the JavaScript reference to the `Child` component, it will not be garbage-collected and will preserve all its internal data.

## Component Lists
It is a common task for Web developers to represent collections of same-type structures. This is modeled by a parent component rendering a list of child components. Such lists change when components are added to or removed from the list or when the order of components in the list changes. In order to properly update DOM when a component list changes, the first task Mimbl has to do is to match components from a newly rendered list to those in the existing list. Based on this matching, Mimbl understands what components should be destroyed or inserted or simply updated. The matching algorithm should figure out a component identity and that's where the differences between managed and independent components are most pronounced.

For managed components, the information that Mimbl has about each component is just its class (constructor function), which is obviously the same for every component of this class. Therefore, the matching must be based on some extra information, and Mimbl (like React) allows developers to specify *keys* when components are rendered. A key is a built-in property (of `any` type) that can be specified for any managed (and functional) component. The key is only needed to identify components in a list: it is not part of the component's functionality and is not even available to the component. For proper matching, keys for all components under the same parent (another component or HTML element) must be unique. Here is an example of a parent component that displays a child element for every string in an array and allows adding/inserting new items to this array:

```typescript
interface ChildProps
{
    s: string;
}

class Child extends mim.Component<ChildProps>
{
    constructor( props: ChildProps)
    {
        super( props);
    }

    public render(): any
    {
        return <div>{this.props.s}</div>
    }
}

class Parent extends mim.Component
{
    private data = ["a", "b", "c"];

    public render(): any
    {
        return <div>{this.data.map( s => <Child key={s} s={s} />)}</div>
    }

    public addItem( s: string, insertAt: number = 0)
    {
        data.splice( insertAt, 0, s);
        this.updateMe();
    }
}
```

In many cases, choosing a unique key for a component is not difficult because it may reflect some unique property of a data element that the component represents. There are cases, however, when there is no such property and the keys should be actively managed by the Parent component to be created and remain unique. For example, in our simple case the key is just the string from the data array; but what if these strings are not unique?

Let's now implement the same functionality with an independent `Child` component:

```typescript
class Child extends mim.Component
{
    private s: string;

    constructor( s: string)
    {
        super( props);
        this.s = s;
    }

    public render(): any
    {
        return <div>{this.s}</div>
    }
}

class Parent extends mim.Component
{
    private children = this.["a", "b", "c"].map( s => new Child(s));

    public render(): any
    {
        return <div>{children}</div>
    }

    public addItem( s: string, insertAt: number = 0)
    {
        children.splice( insertAt, 0, new Child(s));
        this.updateMe();
    }
}
```

Aside from the code being slightly shorter, notice that there are no keys. Indeed, when you are using independent components you don't have to deal with keys at all - simply because the instances of the components are the ideal component identities.

Notice also that when a new data item is added, the `Parent` component is updated. When children are implemented as managed components, every `Child` component is updated too (unless it protects itself by implementing the `shouldUpdate` method, which, in real-life components, is notoriously difficult to implement properly). When children are implemented as independent components, the `Child` components are not updated when the `Parent` component is  updated. This is a very important advantage of using independent components. With managed components, the update propagates from the component that called `updateMe` through the entire component/element tree under that component. When, however, an independent component is encountered, this propagation stops.

## Communication between Components
Components encapsulate certain functionality but the power of components is when data or commands can be passed on to them or invoked from outside - e.g. from other components. Mimbl's components - both managed and independent - allow communication via regular object means, that is via property manipulation and method invocation. In this regard, there is only one difference between managed and independent components: while the instance of an independent component is immediately available (because it is created via `new`), the instance of the managed component is only available if a reference (`mim.Ref`) is used when the parent component renders the managed component. Since `mim.Ref` is a separate object, this can create some memory problems if a large number of managed components is used.

## Component Hierarchies
Building a class hierarchy is a perfect way to re-use functionality of existing classes and is one of the corner-stones of object-oriented programming. Mimbl embraces and encourages this practice by allowing building hierarchies of independent components; managed components, however, are not suited very well to derive from one another.

The primary reason why building hierarchies with managed components is difficult is that managed components rely on the `props` object, which is passed to the constructor and reference to which is kept in the instance variable `this.props`. When we want to derive one component from another it is quite possible that the sets of properties within the `props` object are very different between the base and the derived components. Since there is only one instance of `this.props`, all the properties from all the components comprising the hierarchy should be present in the single `this.props` object. This is not impossible but might be quite difficult and cumbersome.

The independent components, on the other hand, are perfectly suited for deriving from one another. A constructor of an independent component is free to accept any parameters the developer of the components sees fit and the only requirement is that it passes the required parameters to the base component class via the `super()` call.

## Summary
We could have concluded the unit this way:

- Independent components take less code to write.
- Independent components don't require references.
- Independent components don't require keys.
- Independent components can form component hierarchies.
- Independent components perform better.

Independent components, however, have a drawback too. This single drawback is the extra step of creating the instance of the independent component and, probably, the necessity to keep it somewhere. Therefore, our recommendation is as follows:

- Use independent components whenever possible, especially when:
  - you have collections of components, or
  - you want to create component hierarchies, or
  - your component has many pathways to be updated.
- Use managed components only when a component is not intended to be updated frequently by the parent.
- Use functional components only when the component doesn't have any internal state and when updates from the parent are infrequent.

