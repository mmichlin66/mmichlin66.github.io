---
layout: post
title: React Discussion
author: Michael Michlin
comments: true
---

This post discusses several aspects of React that the author sees as problematic.

### Declarative vs Imperative Programming
Declarative programming concept applied to building HTML UI assumes that the developer lays out the UI structure as it "should be" for the current state of the application and the infrastructure takes care of making the necessary changes to the underlying DOM tree to transition from the previous UI state to the new one. Imperative programming on the other hand, assumes that developers write code that implements actions that make UI transformations.

Although declarative programming has many advantages, for the real world applications, it is simply not enough. A need often arises to perform actions for which either there is no declarative alternative, or the alternatives are more complicated than their imperative counterparts. Setting focus to an element is often brought as one example, but there are many others and some will be discussed later.

React proudly puts itself into the Declarative column - in fact, this is the first word describing React on its home page (https://reactjs.org). In React land, a developer operates on DOM elements and components by arranging them in a tree usually using TypeScript's JSX. Parent components pass properties to their child components and the "right" way for a parent to update a child is to re-render itself and pass different properties to the child. The declarative nature of React implies that parent component cannot just set a single property or call a method on a child component and let it update itself. Instead, the entire component and element tree (including all properties) is re-rendered and then the reconciliation process decides what actual changes should be made to the DOM. The claim is that time for re-rendering a tree is negligible compared to time taken by DOM operations and, therefore, it is OK to re-render a significant portion of the tree even if it results in only several DOM elements or attributes eventually being changed. The claim might be true in most cases; however, the fact that React introduced the `shouldUpdate` lifecycle method, which allows the component to avoid re-rendering, means that there are cases where the performance would suffer without it.

The recommendation that parent components should communicate with their children only through declarative properties and not by imperative property and method invocations stems from the fact that parent components don't normally see the instances of their children. It is React infrastructure that creates component instances - not component parents. Thus it is React infrastructure that has control over component life - not the developer. Note that we said "component life" and not "component lifecycle": it is natural that UI infrastructure would have control over lifecycle events; however, React has control over when a component is created and when it is destroyed. For example, if a parent component places a child under an extra `<div>` (compared to the previous rendering), the existing child component instance will be destroyed and a new instance will be created by React. There is no way to pass the child component's state from the previous instance to the new one unless the parent component is specifically written to handle such situations - and of course some state might be completely internal to the child and of no interest to the parent.

React does provide an "escape hatch" - that's how it calls its Ref objects, which allow parent components to get access to instances of their child components and elements. It is interesting how strongly React documentation warns developers to not "overuse refs". It also explicitly says: "Avoid using refs for anything that can be done declaratively." Not in a single place does React documentation recommends using references to components to invoke component methods and properties. On the contrary, the React basic mantra is to update a parent component so that it can pass new property values to the child components.

### Composition vs Inheritance
In our context, composition means that the way to create a specialized version of a component is to create a new component that would have the existing component as a child. Inheritance, just like in any other context, means that a specialized version is created by extending the existing component's class. While inheritance represents the classic "is a" relationship between the components, composition represents the "has a" relationship. In practical terms, inheritance allows the derived component to directly reuse the functionality implemented in the base component as well as to override some of the functionality. With composition, the outer component reuses the inner component's functionality by embedding it is a child. There is no notion of overriding the inner component's functionality.

With composition, it is possible to achieve behavior similar to that provided by inheritance; for example, instead of providing overridable functions, the inner component can use callback properties so that the outer component will provide its implementation of these callbacks. Note, however, that a similar argument can be made when comparing C and C++: inheritance, as well as other object-oriented language features, were added not because there was something unachievable in plain C, but because these features made developer's work so much more efficient.

React actively promotes composition over inheritance. Besides stating that *"... we haven't found any use cases where we would recommend creating component inheritance hierarchies"*, React documentation includes a section on "Render Props", which explains how to make a component's functionality reusable by other components via function properties. The reader of this section is left with impression that the section's author was simply unaware of the fact that a class can have a function that can be overridden in a derived class.

One explanation (or, rather, speculation) of why React doesn't want to use component inheritance is the relative difficulty of handling differences of properties and state between base and derived component classes. Since properties and state are kept by the `React.Component` instance and are accessed via `this.props` and `this.state` respectively, the properties and state of the derived class must be a superset of properties and state of the base component. This may create inconveniences to component writers as both properties and state of the derived component might have very different shape than their base counterparts. Additional difficulties arise when using React with TypeScript where type of both properties and state are generic types passed to the `React.Component` generic class.

In short, it seems that due to some architectural decisions, React bypasses one of the corner stones of object-oriented programming and as a result forces developers to use workarounds that make code more difficult to write.

### Component State
Almost every UI component needs a place to keep data that defines the current component state. Note that we are talking here only about component's UI-related state - not the application state that is clearly not part of any component. Component's state usually contains information about the UI (e.g. what UI elements are visible or hidden) as well as references to the application state. UI state is private to a component while application state is shared between and accessed by multiple components. Note, however, that the references to the application state objects that the component operates on, are essentially part of the component's state - meaning that the component has to have a place to store them.

For the life of me I cannot understand why React decided that its components should use external state. Before advent of hooks (another attempt to pretend that classes don't exist) only class-based components were able to have state. But class-based components just by virtue of being classes already have a place to keep their state - component instances. What is the difference between calling `this.setState( {...})` versus changing a data member and calling `this.forceUpdate()`? BTW, this is exactly what some popular state management frameworks like *mobx* do.

React insists on keeping component state not in the component class's data members but in a separate state object. To be more precise, React distinguishes between three kinds of "state": `this.props`, `this.state` and `this.<private>`. Props are provided by the parent and are immutable to the component, therefore, the discussion below is only about `this.state` and `this.<private>`, which we will call here external state and internal state respectively. Of course, they are both internal to the component, but we call `this.state` external first, to distinguish it from `this.private`, second, because it is indeed a separate object, and third (which is TypeScript-specific), because the component's state type becomes part of the component's externally visible definition as it is one of the component's generic arguments.

Besides keeping data, the external state object has additional purpose: scheduling component re-rendering whenever the `setState` method is called. The new data elements set using the `setState` method are not merged to the state immediately; instead, `setState` works asynchronously (not in all but in most cases) and the data is merged at some point before the next render cycle. Due to these characteristics, Internet discussions about the React component state are often confused and difficult to read. A question "why state is kept in a separate object?" often receives an answer "because setState schedules re-rendering", which, while correct by itself, is not the answer to the posited question.

I am of the opinion that the external state and the `setState` method are not necessary and that all that they can accomplish can be accomplished by easier and more straightforward means. I am trying to prove my point in the following sections.

#### Scheduling re-rendering
First let's get the "schedules re-rendering" argument out of the way: there is another way to schedule re-rendering - the `forceUpdate` method. You can write a fully functioning React component without using external state object at all. Whenever the component needs to schedule re-rendering it just calls the `forceUpdate` method and the `render` method will be duly called on the next React tick. Multiple calls to `forceUpdate` within the same event cycle will be batched together and will cause a single re-rendering just like multiple invocations of the `setState` method. I didn't look at React's source code but I am pretty sure that either `setState` calls `forceUpdate` directly or they both call another "scheduling" function.

#### State and Rendering
Not all changes to the component state should cause re-rendering. Imagine a Counter component that by some algorithm increments an internal counter but needs to display only even numbers (meaning that when the counter changes from 2 to 3 rendering should not happen). Naturally, the counter **is** the component's state; however, using `setState` would be inappropriate. Additional examples might be components that, upon some state changes, might or might not re-render depending on some other parts of the state. For example, a component may re-render when text color is changed unless the text is selected. Again, the text color is part of the component state, but using `setState` would be inappropriate.

#### Updating multiple values
One of the arguments made for the external state is that `setState` allows to make a "complete state update in one place" (can be found [here](https://github.com/facebook/react/issues/11527#issuecomment-360199710)). This most likely means that instead of making several assignments of values to properties, `setState` allows making a single call, which assigns values to multiple properties at the same time. But this is a distinction without difference. First, it doesn't matter that it is a single call - the properties are eventually merged one by one. Second, developers are free to call `setState' for different or same properties as many times as they wish during the React cycle.

#### Asynchronous state merging
The asynchronous nature of the `setState` method is actually a feature that cannot be dismissed that easily. The idea is that during the event cycle, no matter how many times `setState` is called, `this.state` will return old values of properties and not those that were specified in the `setState` call. The result is effectively that even though you did everything you can to change the state, you still have an old state until the next rendering.

The question now is how useful (or harmful) this feature is. Internet discussion forums are full of complaints of developers who expected `this.state` to immediately reflect the values passed to `setState`. While it is easy to blame these complaints on the ignorance of how React works, they provide indication that the API doesn't give developers what they expect. After all, there is no fundamental reason that `setState` **has to** work asynchronously (in regards of updating state - not in regards of queuing re-rendering) - it's just that React developers decided to implement it this way.

I should have said that it is I who doesn't see any fundamental reason for `setState` to work asynchronously; the post I mentioned above ([here](https://github.com/facebook/react/issues/11527#issuecomment-360199710)) contains very coherent attempt to explain why this decision has been made. The explanation revolves around consistency and makes the point that if `setSate` worked synchronously, the consistency between props and state (and refs) would be broken - meaning props will retain the values they had at the beginning of the cycle, while `this.state` values will be changed.

Two observations can be made here. First, why should we expect any consistency? Props are inputs provided externally (by the parent component) while state is an internal structure maintained by the component itself; it is completely normal that during some processing, some values in the internally maintained state change. The second observation is somewhat related to the first but is even more fundamental: internal state of a program is "consistent" only when the program is idle; that is, it finished some processing and awaits input. While a task is in progress, the program internal state is by necessity inconsistent - it will become consistent only when the task is finished. The inconsistency simply means that the task is not finished yet.

Returning to practical matters, we can ask again: what good does the asynchronous state do for us? It might have been useful (at least in some situations) if it provided access to both the old and the new state values, but of course the asynchronous state doesn't do that - it only provides access to the old values. If we need the new ones we must write code to keep the new values. But with the same effort and, judging by the number of developer complaints, with less frequency, we could have a synchronous state and write code to keep the old values when necessary.

### Elements and Components with Values
There is a particular problem with declarative programming when components have data that can be set declaratively but can also be changed by other means. For example, in form input controls such as text box, the control's value can be changed in several ways:

- When the control is initially created, the declared value becomes the control's value.
- The value can be changed by the user interacting with the control.
- The value can be changed programmatically, e.g. as a reaction to user making changes to other controls.

The problem can be illustrated with a simple component that presents a text box as well as some other content. Let's also assume that the text color can be changed via the component's properties.

```tsx
render()
{
  return <>
    ...
    <input type="text" value="123" style={ {color: this.props.color} } />
    ...
  </>
}
```

After the render method runs for the first time, the input DOM element is created and its value is set to "123". Then, the user types "abc" into the text box. Then the user decides to change the text box color (the code for that is not shown). The render method will be called again and as a result, the text box value will be changed back to "123".

With imperative programming model, there is no problem: the code sets the initial value (if any) to the control, the user interacts with the control and at some point the code reads the control's value. With pure declarative programming model, the writing and reading from the control is not possible simply because the code doesn't have access to the control instance (again, we are talking about "pure" declarative model where there are not Refs).

#### Controlled Components
React's answer to the above problem is Controlled Components. The component sets up a callback that is invoked every time the control's value is changed by the user (onChange event), and keeps the provided control's value in its state. Every time the render method is invoked, this stored value is specified in the value property. This way the stored value and the value in the control itself are always synchronized:

```tsx
constructor()
{
  this.value = "123";
}

render()
{
  return <>
    ...
    <input type="text" value={this.value} onChange={this.onChange} />
    ...
  </>
}

onChange = (e) =>
{
  this.value = e.target.value;
};
```

For some reason that I cannot wrap my head around, React recommends (at least in its examples) to keep that internal value in the component's state, which of course results in the render method being called every time the user changes the control's value:

```tsx
constructor()
{
  this.state = { value: "123" }
}

render()
{
  return <>
    ...
    <input type="text" value={this.state.value} onChange={this.onChange} />
    ...
  </>;
}

onChange = (e) =>
{
  this.setState( {value: e.target.value});
};
```

Here is what is going on when the user interacts with the text box:

* After the first render call, the text box element is created with the initial value of "123".
* The user types "4" into the text box.
* The onChange event is raised and delivers the value of "1234".
* The component calls `this.setState` with the new value.
* The component is re-rendered and the text box value is set to "1234".

This is a lot of unnecessary actions. Note that the entire component is re-rendered without any real changes to DOM (the only "change" is to update the control with the value that it already has). I am not concerned so much about performance - unless the user input is emulated by an automated test, the fastest user's typing is slow enough to give the computer enough processing time. What bothers me is the sheer needlessness of these actions and the boilerplate code that is required to support this approach. There are of-course legitimate scenarios where it is necessary to react on every change the user makes to the control: for example, real-time input validation. I don't see, however, legitimate scenarios for going through the component re-rendering with the prior knowledge that it isn't going to change anything.

#### Uncontrolled Components
As React documentation mentions, the alternative to controlled components are uncontrolled components. In this approach, you use Refs to DOM elements and call their properties and methods directly. As React documentation puts it "It can also be slightly less code if you want to be quick and dirty." Why this approach is "dirty" is left unexplained.

What React does provide is the way to initialize uncontrolled components with the initial value in the render method: instead of using `value` property you use the `defaultValue` property. The neat trick React performs behind the scenes is that it uses this default value only upon the first rendering. In this approach, whenever the component is re-rendered it will render the element with the same value for the `defaultValue` property, which will be simply ignored - thus producing no changes in the DOM.

#### Controlled and Uncontrolled Custom Components
The controlled component pattern pertains not only to DOM elements but to any custom component that has a notion of a value that can be set via properties as well as by the user interaction and/or programmatically. Note, however, that the `defaultValue` trick that React performs for DOM elements is not automatically available to custom components; therefore, the custom component developers have to create their own mechanisms that mimic this behavior - to use the default value upon first rendering and ignore it on all subsequent ones.





