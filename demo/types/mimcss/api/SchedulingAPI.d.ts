/**
 * @module
 */
import { IScheduler } from "../api/SchedulingTypes";
import { IStyleDefinitionClass, IStyleDefinition } from "./RuleTypes";
/**
 * Activates the given style definition class or instance and inserts all its rules into DOM. If
 * the input object is not an instance but a class, which is not yet associated with an instance,
 * the instance is first created and processed. Note that each style definition instance maintains
 * a reference counter of how many times it was activated and deactivated. The rules are inserted
 * into DOM only upon first activation.
 */
export declare function activate<T extends IStyleDefinition>(instanceOrClass: T | IStyleDefinitionClass<T>, schedulerType?: number): T | null;
/**
 * Deactivates the given style definition instance by removing its rules from DOM. Note that each
 * style definition instance maintains a reference counter of how many times it was activated and
 * deactivated. The rules are removed from DOM only when this reference counter goes down to 0.
 */
export declare function deactivate(instance: IStyleDefinition, schedulerType?: number): void;
/**
 * Writes to DOM all style changes caused by the calls to the activate and deactivate functions
 * accumulated since the last activation of the given scheduling type.
 */
export declare function forceDOMUpdate(schedulerType?: number): void;
/**
 * Removes all scheduled activations caused by the calls to the activate and deactivate functions
 * accumulated since the last activation of the given scheduling type.
 */
export declare function cancelDOMUpdate(schedulerType?: number): void;
/**
 * Returns the current default scheduler type.
 */
export declare function getDefaultScheduler(): number;
/**
 * Sets the default scheduling type that is used by activate and deactivate functions that are
 * called without explicitly providing value to the scheduling parameter. Returns the type of the
 * previous default activator or 0 if an error occurs (e.g. the given scheduler type ID is not
 * registered).
 */
export declare function setDefaultScheduler(schedulerType: number): number;
/**
 * Registers the given scheduler object and returns the scheduler type identifier, which
 * should be used when calling activate and deactivate functions.
 */
export declare function registerScheduler(scheduler: IScheduler): number;
/**
 * Unregisters a scheduler object with the given scheduler type identifier.
 */
export declare function unregisterScheduler(schedulerType: number): void;
//# sourceMappingURL=SchedulingAPI.d.ts.map