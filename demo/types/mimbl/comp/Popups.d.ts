/**
 * This module contains definitions of [[Popup]], [[Dialog]] and [[MsgBox]] components.
 *
 * The [[Popup]] component is a base component that displays a popup usig the `<dialog>` HTML
 * element. The [[Dialog]] component derives from [[Popup]] and divides the popup area into
 * secontions for caption, body and button bar. Dialogs support moving around by clicking on the
 * caption area. The [[MsgBox]] component derives from [[Dialog]] and displays a message
 * optionally accompannied with an icon and a pre-defined set of buttons.
 */
import * as mim from "../api/mim";
import * as css from "mimcss";
import { MultiEventSlot } from "../utils/EventSlot";
/** Using module augmentation technique to extend the IServiceDefinition interface */
declare module "../api/mim" {
    /**
     * Extending the IServiceDefinition interface with services used by the [[Popup]] and
     * [[Dialog]] components.
     */
    interface IServiceDefinitions {
        /**
         * The "popup" service gives components used in the content of the [[Popup]] component
         * access to the [[IPopup]] interface, through which they can close the popup.
         */
        popup: IPopup;
        /**
         * The "dialog" service gives components used in the caption or the body of the [[Dialog]]
         * component access to the [[IDialog]] interface, through which they can add buttons
         * and otherwise manipulate the dialog.
         */
        dialog: IDialog;
    }
}
/**
 * The IPopup interface represents a popup from the point of view of the content. This interface
 * is published as a service and can be used by the content components to close the popup.
 */
export interface IPopup {
    /**
     * Closes the popup and passes a value to be used as a return value. For the modal popups,
     * this value will be the resolved value of the promise returned by the showModal() method.
     * For modeless popups, this value will be available as the returnValue property.
     * @param returnValue
     */
    close(returnValue?: any): void;
}
/**
 * The IPopupStyles interface defines styles used by the Popup class to create the `<dialog>`
 * element. The implementations should provide the class rule for the dialog property and can
 * also define the ::backdrop pseudo element styles, which is used when the popup is shown as a
 * modal dialog.
 */
export interface IPopupStyles extends css.StyleDefinition {
    /**
     * Defines what CSS class to use for the `<dialog>` element.
     */
    readonly dialog?: css.ClassPropType;
}
/**
 * Default styles that will be used by the Popup if styles are not specified using options.
 */
export declare class DefaultPopupStyles extends css.StyleDefinition implements IPopupStyles {
    /** Styles for the `<dialog>` element. */
    dialog: css.IClassRule;
}
/**
 * The IPopupOptions interface represents the options that cofigure the behavior of the Popup
 * object. They are passed in the constructor to the [[Popup]] class
 * @typeParam TStyles Type for the styles property. Options for derived components will have to
 * derive from the IPopupOptions interface and to implement the [[IPopupStyles]] interface for
 * the styles property.
 */
export interface IPopupOptions<TStyles extends IPopupStyles = IPopupStyles> {
    /**
     * Defines what styles to use for the `<dialog>` element and optionally for the ::backdrop
     * pseudo element. The value can be either a style definition class implementing the
     * [[IPopupStyles]] interface or an instance of such class. The popup activates the styles
     * when it opens and deactivates them when it closes. If this property is not defined, the
     * popup will use the default styles. The default value is undefined.
     */
    readonly styles?: TStyles | css.IStyleDefinitionClass<TStyles>;
    /**
     * Defines what CSS class to use for the `<dialog>` element. If this property is defined,
     * the [[style]] property is ignored
     */
    readonly dialogStyleClass?: css.ClassPropType;
    /**
     * Value that is returned when the user closes the popup by pressing the Escape key. If this
     * property is undefined, the popup cannot be closed with the Escape key. The default value is
     * undefined.
     *
     * For modal popups, this property also controls whether the user can dismiss the popup by
     * clicking on the backdrop - that is, the area outside of the popup itslef.
     */
    readonly escapeReturnValue?: any;
    /**
     * HTML element under which the `<dialog>` element is created. If this property is undefined,
     * the `<dialog>` element is created under the `<body>` element. The default value is undefined.
     */
    readonly anchorElement?: HTMLElement;
    /**
     * X-coordinate of the top-left corner of the dialog from the anchor element. If undefined,
     * the dialog will be centered horizontally.
     */
    readonly initialX?: css.CssLength;
    /**
     * Y-coordinate of the top-left corner of the dialog from the anchor element. If undefined,
     * the dialog will be centered vertically.
     */
    readonly initialY?: css.CssLength;
}
/**
 * The IPopupEvents interface represents events that the Popup component can fire
 */
export interface IPopupEvents {
    /**
     * The open event is fired when the popup opens.
     * @param isModal Flag indicating whether the popup opens as modal or modeless
     */
    open(isModal: boolean): void;
    /**
     * The close event is fired when the popup closes.
     * @param retVal Value passed to the close() method.
     */
    close(retVal: any): void;
}
/**
 * The Popup class allows displaying modal and modeless popups. This is the base class for
 * dialogs and message boxes. After the Popup instance is created it can be shown either as modal
 * or modeless popup. Both types of the popup can be closed using the close() method. In order for
 * the popup to be closed "from inside" - that is, by the component, which is used as the popup
 * content - the popup object should be passed to this component.
 *
 * The Popup class itself doesn't provide any means for the user to start moving it around;
 * however, it allows initiating the move action using the startMove() method. Once this method
 * is called, the Popup will start monitoring mouse (pointer) activity and move the dialog
 * accordingly.
 *
 * The content of the popup can be replaced while it is being displayed using the setContent()
 * method.
 *
 * @typeParam TStyles Type of the style definition class used to specify CSS styles for the
 * component. Must implement the IPopupStyles interface.
 * @typeParam TOptions Type of the object used to specify options for the component. Must
 * implement the IPopupOptions interface.
 */
export declare class Popup<TStyles extends IPopupStyles = IPopupStyles, TOptions extends IPopupOptions<TStyles> = IPopupOptions<TStyles>> extends mim.Component implements IPopup {
    /**
     * Popup is constructed by specifying the initial content it should display and the options
     * @param content
     * @param options
     */
    constructor(content?: any, options?: TOptions);
    /**
     * Displays the popup as a modeless dialog. The method will throw an exception if the popup
     * is already open as a modal popup.
     */
    open(): boolean;
    /**
     * Displays the popup as a modeless dialog and returns a promise that is resolved when the
     * popup is closed. The resolved value of the promise is the value passed to the close()
     * method. The method will return a rejected promise if the popup is already open.
     */
    showModal(): Promise<any>;
    /**
     * Closes the popup and passes a value to be used as a return value. For the modal popups,
     * this value will be the resolved value of the promise returned by the showModal() method.
     * For modeless popups, this value will be available as the returnValue property.
     * @param retVal
     */
    close(returnValue?: any): void;
    /** Events that can be fired by the Popup component */
    get events(): MultiEventSlot<IPopupEvents>;
    /**
     * Determines whether the popup is currently open.
     */
    get isOpen(): boolean;
    /**
     * Determines whether the dialog is currently open as modeless.
     */
    isModeless(): boolean;
    /**
     * Determines whether the dialog is currently open as modal.
     */
    isModal(): boolean;
    /**
     * Returns the value set by the close() method. If the popup is open, the value is undefined.
     */
    get returnValue(): any;
    /**
     * Gets or sets the flag determining whether the popup is currently visible or hidden.
     */
    get isVisible(): boolean;
    set isVisible(v: boolean);
    /**
     * Replaces the current content of the popup with the given one.
     * @param content
     */
    setContent(content: any): void;
    /**
     * Starts monitoring mouse movements and moves the popup with the mouse. This method is
     * intented to be called from a mousedown event handled either by a derived class or by
     * the popup caller.
     */
    startMove(clientX: number, clientY: number): void;
    /**
     * Stops monitoring mouse movements. This method allows programmatically interrupt
     * dialog moving operations.
     */
    stopMove(): void;
    /**
     * Moves the dialog to the given coordinates. The coordinates are adjusted so that at least
     * some part of the dialog at the top-left corner remains visible in order to the user to be
     * able to continue moving it.
     */
    moveTo(newX: number, newY: number): void;
    /**
     * If derived classes override this method, they must call super.willMount()
     */
    willMount(): void;
    /**
     * If derived classes override this method, they must call super.willUnmount()
     */
    willUnmount(): void;
    /**
     * The render method simply returns the current content but it can be overridden by derived classes
     */
    render(): any;
    private create;
    private destroy;
    /**
     * Moves the dialog to the given coordinates. The coordinates are adjusted so that at least
     * some part of the dialog at the top-left corner remains visible in order to the user to be
     * able to continue moving it.
     */
    private move;
    private onKeyDown;
    private onDetectClickOutside;
    private onPointerMove;
    private onPointerUp;
    /**
     * Returns the default style definition instance or class
     */
    protected getDefaultStyles(): TStyles | css.IStyleDefinitionClass<TStyles>;
    /**
     * Returns the value that should be used as a return value when closing the popup after the
     * user pressed the Esc key. If undefined is returned, the popup doesn't close
     */
    protected getReturnValueForEscapeKey(): any;
    /**
     * This method is called when the popup opens. If derived classes override it they
     * must call super.onOpen().
     */
    protected onOpen(isModal: boolean): void;
    /**
     * This method is called when the popup is being closed. If derived classes override it they
     * must call super.onClose().
     */
    protected onClose(retVal: any): void;
    protected content: any;
    protected options: TOptions;
    protected defaultStyles: TStyles;
    protected optionalStyles: TStyles;
    private anchorElement;
    private dlg;
    private modalPromise;
    private _isVisible;
    private _returnValue;
    private _events;
    private movePointOffsetX;
    private movePointOffsetY;
}
/**
 * The IDialogButton interface describes a single button in the dialog's button bar.
 */
export interface IDialogButton {
    /**
     * Unique identifier for the button. This ID is passed to the callback, which is called when
     * the button is clicked.
     */
    readonly id: any;
    /**
     * Callback, which is called when the button is clicked. If the callback is not defined, the
     * returnValue property must be defined.
     */
    readonly callback?: (id: any) => void;
    /**
     * Return value with which the dialog is closed when the button is clicked. This property is used
     * (and must be defined) only if the callback property is undefined.
     */
    readonly returnValue?: any;
    /**
     * Content to display in the button.
     */
    readonly content?: any;
    /**
     * Flag indicating whether the button is initially disabled. The default value is false; that
     * is, the button is enabled.
     */
    readonly disabled?: boolean;
}
/**
 * The IPopup interface represents a popup from the point of view of the content. This interface
 * is published as a service and can be used by the content components to close the popup.
 */
export interface IDialog extends IPopup {
    /**
     * Adds a button to the button bar
     */
    addButton(btn: IDialogButton): void;
    /**
     * Returns the number of buttons in the button bar
     */
    readonly buttonCount: number;
}
/**
 * The IDialogStyles interface defines styles used by the Dialog class to create different elements
 * of the dialog. The implementations should provide class rules for the following properties:
 * - dialogCaption
 * - dialogBody
 * - dialogButtonBar
 * - dialogButton
 */
export interface IDialogStyles extends IPopupStyles {
    /**
     * Defines what CSS class to use for the caption section.
     */
    readonly dialogCaption?: css.ClassPropType;
    /**
     * Defines what CSS class to use for the body section.
     */
    readonly dialogBody?: css.ClassPropType;
    /**
     * Defines what CSS class to use for the button bar section.
     */
    readonly dialogButtonBar?: css.ClassPropType;
    /**
     * Defines what CSS class to use for the buttons.
     */
    readonly dialogButton?: css.ClassPropType;
}
/**
 * Default styles that will be used by the Popup if styles are not specified using options.
 */
export declare class DefaultDialogStyles extends DefaultPopupStyles implements IDialogStyles {
    dialogCaption: css.IClassRule;
    dialogBody: css.IClassRule;
    dialogButtonBar: css.IClassRule;
    dialogButton: css.IClassRule;
}
/**
 * The IDialogOptions interface represents the options that cofigure the behavior of the Dialog
 * object. They are passed in the constructor to the [[Dialog]] class
 */
export interface IDialogOptions<TStyles extends IDialogStyles = IDialogStyles> extends IPopupOptions<TStyles> {
    /**
     * Defines what CSS class to use for the caption section.
     */
    readonly dialogCaptionStyleClass?: css.ClassPropType;
    /**
     * Defines what CSS class to use for the body section.
     */
    readonly dialogBodyStyleClass?: css.ClassPropType;
    /**
     * Defines what CSS class to use for the button bar section.
     */
    readonly dialogButtonBarStyleClass?: css.ClassPropType;
    /**
     * Defines what CSS class to use for the buttons.
     */
    readonly dialogButtonStyleClass?: css.ClassPropType;
}
/**
 * The Dialog class is a popup that divides the popup area into three sections: caption, body and
 * button bar. The caption area can be used to move the dialog around.
 */
export declare class Dialog<TStyles extends IDialogStyles = IDialogStyles, TOptions extends IDialogOptions<TStyles> = IDialogOptions<TStyles>> extends Popup<TStyles, TOptions> implements IDialog {
    constructor(bodyContent?: any, captionContent?: any, options?: TOptions, ...buttons: IDialogButton[]);
    /**
     * Adds a button to the button bar
     */
    addButton(btn: IDialogButton): void;
    /**
     * Returns the number of buttons in the button bar
     */
    get buttonCount(): number;
    /**
     * Returns the default style definition instance or class
     */
    protected getDefaultStyles(): TStyles | css.IStyleDefinitionClass<TStyles>;
    /**
     * If derived classes override this method, they must call super.willMount()
     */
    willMount(): void;
    /**
     * If derived classes override this method, they must call super.willUnmount()
     */
    willUnmount(): void;
    render(): void;
    renderCaption(): void;
    renderBody(): void;
    renderButtons(): void;
    private onCaptionPointerDown;
    private onButtonClicked;
    private captionContent;
    private buttons;
    private captionClassName;
    private bodyClassName;
    private buttonBarClassName;
    private buttonClassName;
}
/**
 * The MsgBoxButton enumeration defines constants to indicate standard buttons used in dialogs.
 */
export declare const enum MsgBoxButton {
    None = 0,
    OK = 1,
    Cancel = 2,
    Yes = 4,
    No = 8,
    Close = 16
}
/**
 * The MsgBoxButton enumeration specifies values of predefined buttons and button combinations for
 * message boxes.
 */
export declare const enum MsgBoxButtonBar {
    /** Message box will display no buttons */
    None = 0,
    /** Message box will have a single Close button */
    Close = 16,
    /** Message box will have a single OK button */
    OK = 1,
    /** Message box will have OK and Cancel buttons */
    OkCancel = 3,
    /** Message box will have Yes and No buttons */
    YesNo = 12,
    /** Message box will have Yes, No and Cancel buttons */
    YesNoCancel = 14
}
export declare const enum MsgBoxIcon {
    None = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
    Question = 4
}
/**
 * Default styles that will be used by the Popup if styles are not specified using options.
 */
export declare class MsgBoxStyles extends DefaultDialogStyles {
    container: css.IClassRule;
    icon: css.IClassRule;
    text: css.IClassRule;
}
/**
 * The MsgBox class is a dialog that displays a message with a set of pre-defined buttons.
 */
export declare class MsgBox extends Dialog<MsgBoxStyles> {
    /**
     * Displays modal message box with the given parameters and returns a promise, which is
     * resolved when the user clicks on one of the buttons. The identifier of the button is used
     * as the promise's value.
     * @param message Content to be used in the message box's body.
     * @param title Content to display in the message box's caption.
     * @param buttons Identifier of a button ot button combination to be displayed.
     * @param icon Optional identifier of the icon to be displayed.
     * @returns Promise that is resolved with the identifier of the button clicked by the user.
     */
    static showModal(message: string, title?: string, buttons?: MsgBoxButtonBar, icon?: MsgBoxIcon): Promise<MsgBoxButton>;
    constructor(message: any, title?: string, buttons?: MsgBoxButtonBar, icon?: MsgBoxIcon);
    renderBody(): any;
    /**
     * Returns the default style definition instance or class
     */
    protected getDefaultStyles(): MsgBoxStyles | css.IStyleDefinitionClass<MsgBoxStyles>;
    /**
     * Returns the value that should be used as a return value when closing the popup after the
     * user pressed the Esc key. If undefined is returned, the popup doesn't close
     */
    protected getReturnValueForEscapeKey(): any;
    private createButtons;
    private getIconClassAndColor;
    private createButton;
    private icon;
}
/**
 * Default styles that will be used by the Popup if styles are not specified using options.
 */
export declare class ProgressBoxStyles extends DefaultDialogStyles {
    container: css.IClassRule;
    progress: css.IClassRule;
    text: css.IClassRule;
    constructor(parent?: css.StyleDefinition);
}
/**
 * The ProgressBox class is a dialog that displays a progress indicator, a text and an optional
 * Cancel button.
 */
export declare class ProgressBox extends Dialog<ProgressBoxStyles> {
    /**
     * Displays the modal progress box with the given content and title, which is displayed until
     * the given promise is settled. The delayMilliseconds parameter controls whether the progress
     * box is displayed immediately or is delayed. If the input promise is settled before the
     * delay expires, the progress box is not displayed at all.
     * @param promise Promise to monitor - the progress box is displayed until this promis is settled.
     * @param content Content to be used in the progress box's body.
     * @param title Content to display in the progress box's caption.
     * @param delayMilliseconds Delay in milliseconds until which the progress box isn't displayed.
     * The default value is 750ms. To display the progress box immediately, set it to 0.
     * @returns Promise which is resolved ot rejected with the same value as the input promise.
     */
    static showUntil(promise: Promise<any>, content: any, title?: string, delayMilliseconds?: number): Promise<any>;
    constructor(content?: string, title?: string, cancelReturnValue?: any);
    /**
     * Initiates displaying a progress box but doesn't really create it until the given timeout
     * expires. If the [[close]] method is called before the timeout expires, the popup isn't
     * created at all. This can be useful if you want the progress to reflect multiple operations
     * but don't show it if the operations finish quickly enough, for example:
     *
     * ```typescript
     * let progress = new Progress();
     * progress.showModalWithDelay( 1000);
     * progress.setContent( "First operation is in progress...")
     * performFirstOperation();
     * progress.setContent( "Second operation is in progress...")
     * performSecondOperation();
     * progress.close();
     * ```
     */
    showModalWithDelay(delayMilliseconds: number): void;
    /**
     * Closes the popup and passes a value to be used as a return value. For the modal popups,
     * this value will be the resolved value of the promise returned by the showModal() method.
     * For modeless popups, this value will be available as the returnValue property.
     * @param retVal
     */
    close(retVal?: any): void;
    renderBody(): any;
    /**
     * Returns the default style definition instance or class
     */
    protected getDefaultStyles(): ProgressBoxStyles | css.IStyleDefinitionClass<ProgressBoxStyles>;
    private showNow;
    private delayHandle;
}
