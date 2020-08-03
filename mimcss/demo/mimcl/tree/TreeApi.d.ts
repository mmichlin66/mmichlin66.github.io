import { CssColor } from "mimcss";
export interface ITree extends ITreeNodeContainer {
    tabIndex: number;
    readonly nodes: ITreeNode[];
    readonly selectedNode: ITreeNode;
}
export interface ITreeNodeParams {
    content: any;
    icon?: TreeNodeIconParams;
    textColor?: CssColor;
    bgColor?: CssColor;
    italic?: boolean;
    bold?: boolean;
    customClass?: string;
    data?: any;
}
export declare type TreeNodeIconParams = {
    class: string;
} | {
    img: string;
};
export interface ITreeNode extends ITreeNodeParams, ITreeNodeContainer {
    readonly tree: ITree;
    readonly parent: ITreeNode;
    readonly level: number;
    readonly index: number;
    readonly subNodes: ITreeNode[];
    readonly isExpanded: boolean;
    expand(): void;
    collapse(): void;
    select(): void;
    unselect(): void;
}
export interface ITreeNodeContainer {
    addNode(params: ITreeNodeParams, index?: number): ITreeNode;
    removeNode(index: number): void;
    removeAllNodes(): void;
    expandAll(): void;
    collapseAll(): void;
}
export declare function createTree(): ITree;
