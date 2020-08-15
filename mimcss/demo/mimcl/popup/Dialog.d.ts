import { Popup } from "./Popup";
import { Slice } from "../util/LocalStyles";
export declare class Dialog extends Popup {
    constructor(captionAreaSlice?: Slice, mainAreaSlice?: Slice, buttonAreaSlice?: Slice, dlgSlice?: Slice);
    addButton(slice: Slice, key?: any, callback?: (key: any) => void, index?: number): void;
    removeButton(index: number): void;
    private renderCaptionArea;
    private renderMainArea;
    private renderButtonArea;
    protected getDlgSlice(): Slice;
    protected getCaptionAreaSlice(): Slice;
    protected getMainAreaSlice(): Slice;
    protected getButtonAreaSlice(): Slice;
    private onStartMove;
    private captionAreaSlice;
    get CaptionAreaSlice(): Slice;
    set CaptionAreaSlice(val: Slice);
    private mainAreaSlice;
    get MainAreaSlice(): Slice;
    set MainAreaSlice(val: Slice);
    private buttonAreaSlice;
    get ButtonAreaSlice(): Slice;
    set ButtonAreaSlice(val: Slice);
    private buttonInfos;
    private captionAreaProxy;
    private mainAreaProxy;
    private buttonAreaProxy;
    static DefaultCaptionAreaSlice: Slice;
    static DefaultMainAreaSlice: Slice;
    static DefaultButtonAreaSlice: Slice;
    static DefaultButtonSlice: Slice;
}
export declare enum DialogButton {
    None = 0,
    OK = 1,
    Cancel = 2,
    Yes = 4,
    No = 8,
    Close = 16
}
