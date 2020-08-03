import * as mim from "mimbl";
import { Popup } from "./Popup";
export declare class Dialog extends Popup {
    constructor(captionAreaSlice?: mim.Slice, mainAreaSlice?: mim.Slice, buttonAreaSlice?: mim.Slice, dlgSlice?: mim.Slice);
    addButton(slice: mim.Slice, key?: any, callback?: (key: any) => void, index?: number): void;
    removeButton(index: number): void;
    private renderCaptionArea;
    private renderMainArea;
    private renderButtonArea;
    protected getDlgSlice(): mim.Slice;
    protected getCaptionAreaSlice(): mim.Slice;
    protected getMainAreaSlice(): mim.Slice;
    protected getButtonAreaSlice(): mim.Slice;
    private onStartMove;
    private captionAreaSlice;
    get CaptionAreaSlice(): mim.Slice;
    set CaptionAreaSlice(val: mim.Slice);
    private mainAreaSlice;
    get MainAreaSlice(): mim.Slice;
    set MainAreaSlice(val: mim.Slice);
    private buttonAreaSlice;
    get ButtonAreaSlice(): mim.Slice;
    set ButtonAreaSlice(val: mim.Slice);
    private buttonInfos;
    private captionAreaProxy;
    private mainAreaProxy;
    private buttonAreaProxy;
    static DefaultCaptionAreaSlice: mim.Slice;
    static DefaultMainAreaSlice: mim.Slice;
    static DefaultButtonAreaSlice: mim.Slice;
    static DefaultButtonSlice: mim.Slice;
}
export declare enum DialogButton {
    None = 0,
    OK = 1,
    Cancel = 2,
    Yes = 4,
    No = 8,
    Close = 16
}
