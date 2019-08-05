---
# front matter for Jekyll
layout: default
---

# Mimbl - Component Authoring Library
Mimbl is a TypeScript/JavaScript UI authoring library that combines declarative and imperative programming in one package. Mimbl is proposed as an alternative to React. The accompanying document [React Discussion](ReactDiscussion.md) provides more information about aspects of React that this library strives to improve on.

This document assumes that the reader is somewhat familiar with React and doesn't explain concepts that are similar to those available in React. The full documentation that describes all concepts and references is available separately.

## Features
Mimbl provides all the standard React-style functionality that developers expect from component authoring libraries: declarative laying out of HTML structure, function- and class-based components, references, error boundaries, lazy-loading, etc. In addition to this functionality Mimbl provides the following unique features:

- Instance-based components whose lifecycle is controlled by developers and which can be accessed via standard property and method invocation.
- Custom HTML and SVG attributes defined by developers and supported via handler objects.
- Context functionality based on publish/subscribe mechanism.

## Components
Mimbl components can be developed as functions or as classes. Function-based components are regular TypeScript/JavaScript functions that accept a "props" object and return an object that represents DOM content. Function components are stateless and don't support any hooks.

Class-based components are classes that must implement the `render` method and may optionally implement other methods for lifecycle management. Usually, class-based components derive from the `mimbl.Component` class; however, this is not required. Class-based components are stateful and maintain their state using their instance properties. There is no special "state" object that the Mimbl infastructure knows about and treats in a special way - component's state is encapsulated by and known only to the component itself.

Function-based components are first-class citizens in Mimbl but since they are only useful for simple stateless functionality and have very simple lifecycle they have limited use. Thus the majority of the further discussion is dedicated to the class-based components. Also, if not otherwise indicated, the term "component" will refer to class-based components.

Mimbl components can be leveraged in two differen ways:
* as React-style components - that is, by specifying the component class name in JSX and letting the infrastructure to decide when to instantiate and when to destroy its instances. These components are also referred to later as JSX components.
* as instance-based components - that is, by allowing developers to decide when the component should be instantiated and destroyed. In this case the components are created using a standard new operator and developers are in full control as to when to create the components. These components are also referred to later as Mimbl components or as "Mimbl non-JSX components" if it is necessary to distinguish them from JSX compnoents.

In both cases, the componenets participate in the JSX layout. For the instance-based components, the variable holding the reference to the component is used directly within the curly braces. The component's properties and methods can be accessed and invoked directly. Developers are free to create component constructors with whatever parameters they see fit. Developers are encouraged to create component class hierarchies for code reuse.

### Hello World in Mimbl
Let's first see a simple example with two components - parent and child. The child component displays the "Hello World!" string with the text color defined by its public property that can be changed directly by whatever code that has access to its instance - in this example by the parent component.

```TypeScript
import * as mim from "mimbl"

class Child extends mim.Component
{
    @mim.prop txtColor: string;

    constructor( txtColor: string = "black")
    {
        super();
        this.txtColor = txtColor;
    }
    
    render(): any
    {
        return <span style={{color: this.txtColor}}>Hello World!</span>;
    }
}

interface ParentProps
{
	txtInitColor?: string;
}

class Parent extends mim.Component<ParentProps>
{
    child: Child;
    
    constructor( props: ParentProps)
    {
        super( props);
        this.child = new Child( props.txtInitColor ? props.txtInitColor : "green");
    }

    render(): any
    {
        return <div>
            <button click={() => this.child.txtColor = "black"}>Black</button>
            <button click={() => this.child.txtColor = "red"}>Red</button>
            <button click={() => this.child.txtColor = "blue"}>Blue</button>
            {this.child}
        </div>;
    }
}

mim.mount( <Parent txtInitColor="brown"/>, document.getElementById("root"));
```

The `Child` component defines a string property `txtColor` that keeps the current color of the "Hello World!" text that the component displays in its `render` method. The `txtColor` property is defined using the `mim.prop` decorator, which schedules re-rendering of the component whenever the property value changes.

The `Parent` component creates an instance of the `Child` component and keeps it in its `child` property. The `render` method lays out three `button` elements for changing text color and then specifies the `child` property in the curly braces. When the user clicks one of the color buttons, the `Parent` component sets the corresponding color string to the `Child` component's `txtColor` property. This causes re-rendering of the `child` component with the new text color. Note that the `Parent` component is not re-rendered.

The `mim.mount` method is used to render the instance of the `Parent` component under the "root" HTML element.

This simple example illustrates similaritites as well as several key differences between Mimbl and React components. Mimbl components use JSX to lay out the HTML structure in their `render` method just like in React. The `Parent` component looks just like you would expect a simple React component to look like. The properties are defined as an interface, which is passed as a type parameter to the base `mim.Component` class. The property value is specified when the component class is used in JSX.

As for the differences, we need to look at how the `Child` component is implemented and how it is used by the `Parent` component. The `Parent` and `Child` components represent two kinds of components available in Mimbl - we will call them JSX components and Mimbl components respectively. Note also that all JSX components are also Mimbl components and, therefore, we will sometimes refer to "Mimbl non-JSX components" if this is significant in the discussed context.

JSX components are the traditional React-style components, which are specified in JSX using their class names and are given property values via JSX attributes. JSX components are not created explicitly - rather they are created and controlled by the rendering infrastructure. Mimbl components, however, are created using the `new` operator and their lifetime is controled by the developer.

The control over the component lifetime is the main difference between these two kinds of components because they share many other features. Both types of components can be manipulated via property and method invocations just like regular JavaScript classes. The only caveat is that for JSX components, developers must rely on a reference (the "ref" property) in order to obtain the component instance, while the instance of the Mimbl component is available directly.

Mimbl components do not have built-in `state` object. The component's state is kept in the instance variables and is updated via direct property access or method invocations. Components schedule re-rendering via the call to the `updateMe` method of the `mimbl.Component` base class. The `mimb.prop` decorator can be used on the component's instance properties to indicate that whenever the property value changes, the component should be re-rendered. This decorator, however, is simply a "syntax sugar" - meaning it can save developers some typing but the functionality is also available by different means. Components can expose whatever properties and methods they want and they can schedule re-rendering by calling the `updateMe` method whenever they want. As in React, components can schedule re-rendering multiple times within the JavaScript event cycle and re-rendering will only happen once.

One of the React shortcomings in this author's view is the necessity to re-render a parent component in order to provide new property values to a child component. In Mimbl's philosophy, only those components whose UI needs to change should be re-rendered. Thus in the example above, even though it is the `Parent` component that decides what color the `Child` component's text should be displayed with, it is only the `Child` component that is re-rendered. The React's implementation of this example would require the Parent component to update itself and pass the new property values to the Child component, which will also be updated. The Mimbl's functionality relies on the well established object-oriented paradigms of encapsulation and polymorphism, which (not-surprisingly) also help optimize the run-time behavior.

## Custom Attributes
Another unique Mimbl feature is the ability to implement custom element attributes. As their name implies, custom element attributes are attributes that can be directly applied to the JSX representation of HTML and SVG elements and that have associated JavaScript code executing the custom functionality at run-time. The code is provided in the form of Custom Attribute Handlers and Custom Attribute Factories - classes that are registered to implement functionality for named attributes. The consumers of custom attributes specify the named attributes in JSX representation of HTML or SVG elements in the same way they specify standard attributes.

For example, let's assume that we want to periodically change the border color of any focused text input field if the user didn't enter anything into the field for the last 5 seconds. In React, this would be accomplished by creating a component that would accept an element as a child. The component will have to specify that it can only accept a single child and that the type of the child must be the HTMLInputElement class. Then the component will have to render the element and obtain a reference to it. In addition, the component will have to expose as properties all the standard attributes of input elements and pass them on to the element during rendering. The consumer of a component will have to use it whenever an input element is needed. That's a lot of boilerplate code in addition to the code that actually implements the desired functionlity. Imagine now that the same functionality should be implemented for the `textarea` and `select` elements. Since `textarea` and `select` elements are not `input` elements and have some unique attributes, the boilerplate code will have to be repeated over and over again.

Custom attributes provide an alternative way of implementing the desired functionality with a lot less bolierplate code. With this approach, we can define a new attribute name - let's say `borderBlink` - and indicate that it can be applied on all input elements. This is accomplished via TypeScript's module augmentation:

```TypeScript
// define the type for the custom attribute values
type BorderBlinkType = { color?: string; delay?: number };

declare module "mimbl/core/HtmlTypes"
{
    // define the custom attribute as applicable to any input element
    interface IHtmlInputElementProps
    {
        borderBlink?: BorderBlinkType;
    }
}
```

If we want to have the same functionality applied to the `textarea` and `select` elements, we just add the definition of the custom attribute under the corresponding interfaces:

```TypeScript
declare module "mimbl/core/HtmlTypes"
{
    interface IHtmlTextareaElementProps
    {
        borderBlink?: BorderBlinkType;
    }

    interface IHtmlSelectElementProps
    {
        borderBlink?: BorderBlinkType;
    }
}
```

Note that the new `borderBlink` attribute is declared as optional and that the type of this attribute is declared as an object with two properties for color and time delay. Both properties are declared as optional (the implementation will have to provide and document the default values for them). The module augmentation technique allowes using the TypeScript's JSX type-checking mechanism to enforce the correct application of this attribute to the input elements. This will also prohibit applying this attribute to non-input elements:

```TypeScript
render() : any
{
    return <div>
        <input type="text" borderBlink={{color: "blue"}}/>  // correct usage
        <input type="text" borderBlink={{colour: "blue"}}/> // ERROR!!! incorrect property name
        <span borderBlink={{color: "blue"}}/>               // ERROR!!! not an input element
    </div>
}
```

Module augmention only makes the new attribute available to the TypeScript type-checking mechanism but to make this attribute available at run-time and to map the executable code to the attribute name, we need to create a factory and register it with this name:

```TypeScript
class BorderBlickFactory implements mim.ICustomAttributeFactory<BorderBlinkType>
{
    public createHandler( propName: string): mim.ICustomAttributeHandler<BorderBlinkType>
    {
        return new BorderBlinkHandler();
    }
}

mim.registerCustomAttribute( "borderBlink", new BorderBlickFactory());
```

Finally we need to provide the handler implementation. The handler is a class that derives from the `ICustomAttributeHandler` interface.

```TypeScript
class BorderBlinkHandler implements mim.ICustomAttributeHandler<BorderBlinkType>
{
    public initialize( elmVN: mim.IElmVN, propName: string, propVal: BorderBlinkType): void
    {
        // attach to element events
        // establish user idleness timer
    }

    public terminate(): void
    {
        // terminate user idleness timer
        // detach from element events
    }

    public update( oldPropVal: BorderBlinkType, newPropVal: BorderBlinkType): boolean
    {
        // change border color and timer interval values if necessary
    }
}
```

When the element with the applied custom attribute is rendered for the first time, the `initialize` method is called. The method is passed the initial value of the attribute as well as the Virtual Node corresponding to the element. From the virtual node, the DOM element can be retrieved. When the parent of the element is re-rendered it can pass a different value of the custom attribute. In this case the `update` method will be called and provide the old and the new values. Before the element is removed from DOM, the `terminate` method is invoked. The `terminate` method will also be called when the element's parent renders it without applying the custom attribute.

The handler is free to manipulate the element in any way as well as create, remove and manipulate other DOM elements. For example, in our case, the handler would have to attach to the element's `change`, `focus` and `blur` events and establish a timer to wait for user idleness.

Custom attributes are well suited for tasks that on one hand don't fit well to the declarative nature of HTML layout and on the other hand can be applicable to a wide class of HTML or SVG elements. Just like CSS animations, custom attributes allow declarative specification of rather complex run-time behavior.

## Publishing and Subscribing to Services
Components can publish and subscribe to services. In Mimbl, services are objects of any type that are exposed by a component under a certain name and are available to the components down the hierarchy of the publishing component. The service publish/subscribe mechanism is an extension of the React's Context concept. Mimbl components can publish and subscribe to multiple services. Whenever the service's value changes, the subscribed components are notified. Note that component's are not automatically re-rendered when the value of the service changes; it is up to the component how to react on the change notification.

Before a service can be published, the service name and type must be declared. This is acomplished via the module augmentation mechanism. For example, let's imagine a service that provides an image for a progress indicator, so that components don't need to define their own progress indicator but use the one provided by some upper-level component. We can declare a service called "ProgressImage" whose type is a string - the URL of the image:

```TypeScript
declare module "mimbl/core/mim"
{
    interface IServiceDefinitions
    {
        ProgressImage: string;
    }
}
```

Defining the service this way allows type checking when publishing and subscribing to a service. The service name can only be the name of a property declared in the `mim.IServiceDefinitions` interfce and the service value is will be of the type declared for this property.

Publishing a service is performed by calling the `publishService` method of the `mim.Component` base class. To publish a service, a component specifies the service name and provides the service value. Publishing a service is usually performed in the `componentWillMount` lifecycle method. Correspondingly, the `unpublisheService` is usually implemented in the `componentWillUnmount` lifecycle metod. For example, the component ContainerWithProgressIndicator can be imlemented the fllowing way:

```TypeScript
class ContainerWithProgressIndicator extends mim.Component
{
    componentWillMount()
    {
        this.publishService( "ProgressImage", "assets/SpinningCircle.png");
    }

    componentWillUnmount()
    {
        this.unpublishService( "ProgressImage");
    }
}
```

Subscribing to a service is performed by calling the `subscribeService` method of the `mim.Component` base class. To subscribe to a service, a component specifies the service name and provides the reference object. Subscribing to a service is usually performed in the `componentWillMount` lifecycle method. Correspondingly, the `unsubscribeService` is usually implemented in the `componentWillUnmount` lifecycle metod. For example, the component ProgressIndicatorConsumer can be imlemented the fllowing way:

```TypeScript
class ProgressIndicatorConsumer extends mim.Component
{
    srvRef = new mim.Ref<string>();

    componentWillMount()
    {
        this.subscribeService( "ProgressImage", this.srvRef);
    }

    componentWillUnmount()
    {
        this.unsubscribeService( "ProgressImage");
    }

    render()
    {
        ...
        if (notReady)
            return <img src={srvRef.r}/>
        ...
    }
}
```

Now we can render a hierarchy that includes the ContainerWithProgressIndicator and ProgressIndicatorConsumer components:

```TypeScript
render(): any
{
    return <ContainerWithProgressIndicator>
        <div>
            <div>
                <div>
                    <ProgressIndicatorConsumer/>
                </div>
            </div>
        </div>
    </ContainerWithProgressIndicator>
}
```
The service subscription always finds a service publisher that is the closest to the subscriber up the ancestor chain. If during re-rendering a new component that resides between the subscriber and the publisher publishes the same service, the subscriber's reference will be updated to point to the newly published service. Similarly, if a component that previously published a service is removed from the hierarchy, the subscriber's reference will be updated to point to the service instance from another publisher. If another publisher is not found, the subscriber's reference will be set to `undefined`.

Sometimes an auto-updated subscription is not necessary, but a component may want to ask the service value at certain points during the execution. In this case, the component can use the `getService` method of the `mim.Component` base class. This method returns the value of the service by finding the current closest service publisher up the ancestor chain.




