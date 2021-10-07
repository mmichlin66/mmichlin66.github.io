---
layout: mimcss-reference
unit: 3
title: "Mimcss Reference: Activation"
description: "Describes types and functions used to activate and deactivate style definitions."
---

# Mimcss Reference: Activation

This page describes types and functions that are used to create rules and activate and deactivate Style Definition classes.

- [SchedulerType Enumeration](#schedulertype-enumeration)
- [activate Function](#activate-function)
- [deactivate Function](#deactivate-function)
- [forceDOMUpdate Function](#forcedomupdate-function)
- [cancelDOMUpdate Function](#canceldomupdate-function)
- [setDefaultSchedulerType Function](#setdefaultschedulerType-function)
- [getDefaultSchedulerType Function](#getdefaultschedulerType-function)
- [registerScheduler Function](#registerscheduler-function)
- [unregisterScheduler Function](#unregisterscheduler-function)
- [IScheduler Interface](#ischeduler-interface)

#### SchedulerType Enumeration

```tsx
export const enum SchedulerType
{
    /**
     * Synchronous activation - style definitions are written to the DOM upon the activate
     * and deactivate calls.
     */
    Sync = 1,

    /**
     * Calls to activate and deactivate functions are accumulated until the next animation
     * frame and then executed alltogether.
     */
    AnimationFrame,

    /**
     * Calls to activate and deactivate functions are accumulated until the call to the
     * forceDOMUpdate function and then executed alltogether.
     */
    Manual,
}
```

The `SchedulerType` enumeration lists identifiers of the built-in scheduler types provided by the Mimcss library. The `Sync` scheduler type is the default scheduler unless it is overridden using the `setDefaultSchedulerType` function.

#### activate() Function

```tsx
export function activate<T extends StyleDefinition>(
    instanceOrClass: T | IStyleDefinitionClass<T>,
    schedulerType?: number): T | null
```

The `activate` function inserts CSS rules into the DOM and returns an instance of the style definition class whose properties can be accessed by the callers. The first input parameter can be one of the following three things:

1. A style definition class. The `activate` function checks whether there is already an instance of this class associated with the class. This condition is true if either the `$use` or `activate` function has already been called for this style definition class. If this is the case, the associated instance is returned; otherwise, a new instance is created and is associated with the class. This ensures, that a single instance is ever associated with the style definition class and that a single set of CSS rules is created for the style definition class. In other words, the class is *shared* between the callers.
1. An unprocessed instance of a style definition class. The `activate` function processes the instance and creates unique names for the named entities. This use case is suitable for so called *styled components*, where all component instances use the same style definition class but create separate instances of it for each component instance. Styled components can programmatically change the style properties and having separate instances of the style definition class isolates different instances of the component from each other.
1. A processed instance of a style definition class. The `activate` function simply returns this instance.

The optional `schedulerType` parameter can be set to designate the scheduler type to be used for scheduling the actual writing of style rules to the DOM. If this parameter is left undefined, the current default scheduler type is used.

The `activate` function can be called many time on the same style definition class. Upon the first call, the CSS rules are inserted into the DOM; upon the consequent calls, the internal reference count is simply incremented. To remove the rules from the DOM, the `deactivate` function should called as many times as the `activate` function was.

**Example.** The following example defines a style definition class with a CSS class, then uses it in HTML element.

```tsx
class MyStyles extends StyleDefinition
{
    red = this.$class({ color: "red" })
}

let myStyles = css.activate( MyStyles);

render()
{
    return <p className={myStyles.red.name}>This is a red paragraph</p>;
}
```

#### deactivate() Function

```tsx
export function deactivate( instance: StyleDefinition, schedulerType?: number): void
```

The `deactivate` function deactivates the given style definition instance by removing its rules from DOM. Note that each style definition instance maintains a reference counter of how many times it was activated and deactivated. The rules are removed from DOM only when this reference counter goes down to 0.

The optional `schedulerType` parameter can be set to designate the scheduler type to be used for scheduling the actual removal of style rules from the DOM. If this parameter is left undefined, the current default scheduler type is used.

**Example.** The following example defines a style definition class to be used with a certain component. The component activates the styles upon mounting and deactivates them upon unmounting.

```tsx
class MyStyles extends StyleDefinition
{
    red = this.$class({ color: "red" })
}

class MyComponent
{
    private myStyles: MyStyles;

    componentWillMount()
    {
        this.myStyles = css.activate( MyStyles);
    }

    componentWillUnmount()
    {
        css.deactivate( this.myStyles);
    }

    render()
    {
        return <p className={this.myStyles.red.name}>This is a red paragraph</p>;
    }
}
```

#### forceDOMUpdate() Function

```tsx
export function forceDOMUpdate( schedulerType?: number): void
```

The `forceDOMUpdate` function writes to DOM all style changes caused by the calls to the `activate`, `deactivate` and `IStyleRule.setProp` functions accumulated since the last update of the given scheduler type. If the `schedulerType` parameter is left undefined, the current default scheduler type is used.

**Example.**

```tsx
// set the Animation Frame scheduler type as the default one
css.setDefaultSchedulerType( SchedulerType.AnimationFrame);

// activate several style definition classes
let myStyles = css.activate( MyStyles);
let externalStyles = css.activate( ExternalStyles);
let miscStyles = css.activate( MiscStyles);

// ensure that the style changes are written to the DOM
css.forceDOMUpdate();
```

#### cancelDOMUpdate() Function

```tsx
export function cancelDOMUpdate( schedulerType?: number): void
```

The `cancelDOMUpdate` function removes all scheduled DOM updates caused by the calls to the `activate`, `deactivate` and `IStyleRule.setProp` functions accumulated since the last update of the given scheduling type. If the `schedulerType` parameter is left undefined, the current default scheduler type is used.

**Example.**

```tsx
// set the Animation Frame scheduler type as the default one
css.setDefaultSchedulerType( SchedulerType.AnimationFrame);

try
{
    // activate several style definition classes
    let myStyles = css.activate( MyStyles);
    let externalStyles = css.activate( ExternalStyles);
    let miscStyles = css.activate( MiscStyles);

    // call a function that can potentially throw an exception
    dangerousFunction();

    // ensure that the style changes are written to the DOM
    css.forceDOMUpdate();

}
catch( err)
{
    // remove the scheduled activations so that the style changes are NOT written to the DOM
    css.cancelDOMUpdate();
}
```

#### setDefaultSchedulerType() Function

```tsx
export function setDefaultSchedulerType( schedulerType: number): number
```

The `setDefaultSchedulerType` function sets the default scheduler type that is used by `activate`, `deactivate` and `IStyleRule.setProp` functions if called without explicitly providing value to the scheduler type parameter. Returns the type of the previous default scheduler or 0 if an error occurs (e.g. the given scheduler type ID is not registered).

#### getDefaultSchedulerType() Function

```tsx
export function getDefaultSchedulerType(): number
```

The `getDefaultSchedulerType` function returns the current default scheduler type that is used by `activate`, `deactivate` and `IStyleRule.setProp` functions if called without explicitly providing value to the scheduler type parameter.

#### registerScheduler() Function

```tsx
export function registerScheduler( scheduler: IScheduler): number
```

The `registerScheduler` function registers a new scheduler object and returns the scheduler type identifier, which should be used when calling `activate`, `deactivate` and `IStyleRule.setProp` functions.

#### unregisterScheduler() Function

```tsx
export function unregisterScheduler( id: number): void
```

The `unregisterScheduler` function unregisters a scheduler object with the given scheduler type identifier.

#### IScheduler Interface

```tsx
export interface IScheduler
{
    /**
     * Initializes the scheduler object and provides the callback that should be invoked when the
     * scheduler decides to make changes to the DOM.
     */
    init( doDOMUpdate: () => void);

	/**
	 * Is invoked when the scheduler needs to schedule its callback or event.
	 */
	scheduleDOMUpdate(): void;

	/**
	 * Is invoked when the scheduler needs to cancels its scheduled callback or event.
	 */
	cancelDOMUpdate(): void;
```

The `IScheduler` interface should be implemented by custom schedulers. Its methods are invoked by the activation infrastructure. The object implementing the `IScheduler` interface should be passed to the `registerScheduler` function.

**Example.** The following example implements a scheduler object that writes to the DOM with an 1 second delay.

```tsx
class OneSecondScheduler implements IScheduler
{
    // Handle returned by setTimeout function.
    private timeoutHandle = 0;

    // Callback to call to write changes to the DOM.
    private doDOMUpdate: () => void;

    /**
     * Initializes the scheduler object and provides the callback that should be invoked when the
     * scheduler decides to make changes to the DOM.
     */
    public init( doDOMUpdate: () => void)
    {
        this.doDOMUpdate = doDOMUpdate;
    }

    /**
     * Is invoked when the scheduler needs to schedule its callback or event.
     */
    public scheduleDOMUpdate(): void
    {
        this.timeoutHandle = setTimeout( this.onTimeout, 1000);
    }

    /**
     * Is invoked when the scheduler needs to cancels its scheduled callback or event.
     */
    public cancelDOMUpdate(): void
    {
        if (this.timeoutHandle > 0)
        {
            clearTimeout( this.timeoutHandle);
            this.timeoutHandle = 0;
        }
    }

    /**
     * Is invoked when the timeout expires.
     */
    private onTimeout = (): void =>
    {
        this.timeoutHandle = 0;
        this.doDOMUpdate();
    }
}
```



