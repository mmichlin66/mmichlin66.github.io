---
layout: mimcss-guide
unit: 9
title: "Mimcss Guide: Activation Scheduling"
---

# Mimcss Guide: Activation Scheduling

- [Activator Types](#activator-types)
  - [Synchronous Activator](#synchronous-activator)
  - [Animation Frame Activator](#animation-frame-activator)
  - [Manual Activator](#manual-activator)
- [Custom Activators](#custom-activators)

We already mentioned in the previous units that activating style definitions as well as changing style properties are operations that write to the DOM and that without the proper care these operations can have adverse impact on performance such as layout thrashing. Mimcss addresses this problem by introducing *activator types*.

## Activator Types
When the `$activate` function or the `IStyleRule.setProp` method is called, a DOM writing operation should be performed, which will cause style and optionally layout recalculations. Normally, these recalculations will occur asynchronously after the primary JavaScript thread finishes its event loop iteration. If, however, the JavaScript code tries to read certain information from the DOM after the changes have been made the style and layout recalculations can be performed synchronously. If this happens frequently enough - especially in a loop - this can significantly degrade the page performance.

The solution to the above problem is to not execute the DOM writing operations immediately but to schedule them for after all other code in the event loop iteration has finished executing. There are several techniques for doing this and different component libraries can provide different solutions. Mimcss uses *activators* to implement scheduling techniques. All calls to the functions such as `$activate`, `$deactivate` and `IStyleRule.setProp` are delegated to a certain activator, whose responsibility is to accumulate these calls and execute them at the appropriate time.

An activator is identified by a numeric ID called *activator type*. Mimcss implements several activators out-of-the-box and allows callers to implement their own. The `ActivatorType` enumeration provides values for the built-in activator types:

```tsx
export const enum ActivatorType
{
	Sync = 1,
	AnimationFrame,
	Manual,
}
```

The functions `$activate`, `$deactivate` and `IStyleRule.setProp` have an optional parameter `activatorType`, which can be used to specify the activator type to be used for this particular call. If this parameter is left undefined, Mimcss uses the value of the *default activator type*. Initially, the default activator type is set to `ActivatorType.Sync`, which means that the DOM writing operations will be executed synchronously. Callers can use the `setDefaultActivatorType` function to set a different default activator type, for example:

```tsx
setDefaultActivatrType( ActivatorType.AnimationFrame);
```

After the above call, all calls to the `$activate`, `$deactivate` and `IStyleRule.setProp` functions that don't use the `activatorType` parameter, will be scheduled to be executed on the next animation frame.

Note that the call to the `setDefaultActivatorType` function should occur early in the application lifetime before any activation and style property setting occurs.

### Synchronous Activator
The Synchronous activator doesn't do any scheduling and calls to the `$activate`, `$deactivate` and `IStyleRule.setProp` functions directly make changes to the DOM. This activator may be useful for applications that already take care of calling the above functions in a manner that avoids unnecessary style and layout recalculations.

The Synchronous activator is the default activator unless a different activator is set using the `setDefaultActivatorType` function.


### Animation Frame Activator
The Animation Frame activator schedules the DOM writing operations for the next animation frame by using the `requestAnimationFrame` API functions. No matter how many times the functions `$activate`, `$deactivate` and `IStyleRule.setProp` are called since the last animation frame, all the corresponding DOM changes will be made in the next animation frame.

### Manual Activator
While the Animation Frame activator can serve well under certain circumstances, it does not guarantee that layout thrashing is avoided. If the application (or some library used by the application) also uses animation frames, it is unpredictable in which order the animation frame callbacks are executed, which can lead to intermingling of DOM reads and writes.

Mimcss implements the Manual activator type, which can be used by applications to achieve more predictable results. With the Manual activator set as the default, the calls to the `$activate`, `$deactivate` and `IStyleRule.setProp` functions are accumulated until the application calls the `$forceActivation` function. This allows applications to synchronize style changes with other DOM writing activities.

## Custom Activators
Mimcss allows writing custom activators, which can be a reasonable approach for component authoring libraries or for applications that have a particular way of synchronizing DOM writing operations.

A custom activator is a JavaScript object that derives from the `SchedulingActivator` class. The custom activator object should be registered with Mimcss using the `registerActivator` function. This function returns the number identifying the new activator type and this number should be passed to the `setDefaultActivatorType` functions in order to set the new activator as the default one.

Once the custom activator is registered and set as the default, all calls to the `$activate`, `$deactivate`, `IStyleRule.setProp`, `$forceActivation` and `$cancelActivation` functions will be routed to the activator object. The `SchedulingActivator` base class implements the functionality of accumulating the calls and invokes the following protected methods at certain points:

- The `onFirstScheduled` method is invoked when the first call to one of `$activate`, `$deactivate` or `IStyleRule.setProp` functions is made. The custom activator is free to use any technique to schedule a callback or an event to be executed at some point in the future. When the callback is called or the event is fired, the custom activator should call the `doActivation` method, which writes all the accumulated changes to the DOM.
- The `onLastUnscheduled` method is invoked when the last scheduled item is removed from the internal structures maintained by the `SchedulingActivator` base class. This can happen, for example, if the calls to the `$activate` and `$deactivate` functions were made for the same style definition class before the callback or event scheduled in the `onFirstScheduled` method was executed. The custom activator is free to use any technique to cancel the scheduled callback or event.
- The `onSchedulingCleared` method is invoked when activation was either forced externally via the forceActivation call or was canceled via the cancelActivation call. The custom activator is free to use any technique to cancel the scheduled callback or event.




