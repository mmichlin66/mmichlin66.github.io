import { Dialog } from "./Dialog";
import { Slice } from "../util/LocalStyles";
export declare class MsgBox extends Dialog {
    static showModal(message: string, title?: string, buttons?: MsgBoxButtons, icon?: MsgBoxIcon): Promise<MsgBoxButtons>;
    constructor(message: string, title?: string, buttons?: MsgBoxButtons, icon?: MsgBoxIcon);
    protected getCaptionAreaSlice(): Slice;
    protected getMainAreaSlice(): Slice;
    private createButtons;
    private getIconClassAndColor;
    private createButton;
    private onButtonClicked;
    private message;
    private title;
    private buttons;
    private icon;
}
/**
 * The MsgBoxButton enumeration specifies values of predefined buttons and button combinations for
 * message boxes.
 */
export declare enum MsgBoxButtons {
    /** Message box will display no buttons */
    None = 0,
    /** Message box will have a single Close button */
    Close = 1,
    /** Message box will have a single OK button */
    OK = 2,
    /** Message box will have OK and Cancel buttons */
    OkCancel = 3,
    /** Message box will have Yes and No buttons */
    YesNo = 4,
    /** Message box will have Yes, No and Cancel buttons */
    YesNoCancel = 5
}
export declare enum MsgBoxIcon {
    None = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
    Question = 4
}
