import { IScheduler } from "../api/SchedulingTypes";
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