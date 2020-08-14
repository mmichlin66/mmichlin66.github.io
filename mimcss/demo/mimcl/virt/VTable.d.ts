import { Styleset } from "mimcss";
import { ComponentWithLocalStyles } from "../util/LocalStyles";
/**
 * The VTAbleCellData interface represents information about a single cell that is provided
 * by a caller when requesed by VTable.
 */
export interface VTableCellData {
    /** Content of the cell */
    content: any;
    /** Number of rows this cell should span. The default value is 1. */
    rowSpan?: number;
    /** Number of columns this cell should span. The default value is 1. */
    colSpan?: number;
    /** Style that should be applied to the `<td>` or `<th>` element containing the cell. */
    style?: Styleset;
    /** Class that should be applied to the `<td>` or `<th>` element containing the cell. */
    class?: string;
}
/**
 * The VTableProps class defines the structure of the object that should be passed to the VTable
 * constructor. The properties of the object define the properties that can be specified for VTable
 * in JSX when it is used as a managed coponent.
 */
export interface VTableProps {
    /** Number of rows in the entire dataset */
    totalRowCount: number;
    /** Number of columns in the entire dataset */
    totalColCount: number;
    /** Minimal, optimal and maximum number of overscan rows */
    rowOverscan?: [number, number, number];
    /** Minimal, optimal and maximum number of overscan columns */
    colOverscan?: [number, number, number];
    /** Callback through which VTable requests cell data. */
    getCellCallback?: (row: number, col: number) => any;
    /** Number of header rows. Default value is 0. */
    colHeaderCellCount?: number;
    /** Callback through which VTable requests data for column header cells. */
    getColHeaderCellCallback?: (row: number, col: number) => any;
    /** Number of footer rows. Default value is 0. */
    colFooterCellCount?: number;
    /** Callback through which VTable requests data for column footer cells. */
    getColFooterCellCallback?: (row: number, col: number) => any;
    /** Number of cells in the row header. Default value is 0. */
    rowHeaderCellCount?: number;
    /** Callback through which VTable requests data for row header cells. */
    getRowHeaderCellCallback?: (row: number, col: number) => any;
    /** Number of cells in the row footer. Default value is 0. */
    rowFooterCellCount?: number;
    /** Callback through which VTable requests data for row footer cells. */
    getRowFooterCellCallback?: (row: number, col: number) => any;
}
/**
 * "Virtualized" table that renders only a subset of a dataset and changes this subset
 * as the user scrolls back and forth.
 *
 * VTable uses the following 3 DOM elements:
 *  - frame - the "outer" `<div>` element which displays the scrollbars when necessary
 *  - wall - the "inner" `<div>` element which has the size of the entire possible table. It is
 *    needed to make scrolling more-or-less accurate.
 *  - table - the `<table>` element that contains only rows and columns that fit the frame plus
 *    a certain number for "overscan".
 *
 * VTable calculates average row height and column width by dividing the size of the table
 * by the number of rows/columns. These average values are recalculated every time rows and
 * columns are added or deleted from the table. Based on these average values the wall element
 * is sized to include the entire dataset, which helps to achieve more-or-less accurate scrolling
 * positioning.
 *
 * VTable uses minimum, optimal and maximum overscan number of rows and columns on all sides of
 * the frame and makes sure that the actual number of rows/columns is within these minimum and
 * maximum values. During scrolling, if the actual overscan number becomes less than the minimum,
 * new cells are added and if it becomes more then the maximum cells are deleted.
 */
export declare class VTable extends ComponentWithLocalStyles<VTableProps> {
    constructor(props: VTableProps);
    willMount(): void;
    private prepareLocalStyles;
    render(): any;
    renderRows(): any;
    /**
     * Requests data for the given cell. This method can be overridden by derived classes
     */
    protected getCellData(row: number, col: number): any;
    /**
     * Requests data for the given cell, which is part of the column header. This method can be
     * overridden by derived classes.
     */
    protected getColHeaderCellData(row: number, col: number): any;
    /**
     * Requests data for the given cell, which is part of the column footer. This method can be
     * overridden by derived classes.
     */
    protected getColFooterCellData(row: number, col: number): any;
    /**
     * Requests data for the given cell, which is part of the row header. This method can be
     * overridden by derived classes.
     */
    protected getRowHeaderCellData(row: number, col: number): any;
    /**
     * Requests data for the given cell, which is part of the row footer. This method can be
     * overridden by derived classes.
     */
    protected getRowFooterCellData(row: number, col: number): any;
    /**
     * Measures the size occupied by the current data set relative to the size of the container
     * and determines whether we need to add/remove cells. If we do, we schedule re-rendering.
     */
    private measureAndUpdate;
    /**
     * Adds/removes rows as indicated by the given ScrollAxisAction dealing with the vertical
     * scrolling.
     */
    private updateRows;
    /**
     * Adds/removes columns as indicated by the given ScrollAxisAction dealing with the
     * horizontal scrolling.
     */
    private updateCols;
    private onScroll;
    private minRowOverscan;
    private optRowOverscan;
    private maxRowOverscan;
    private minColOverscan;
    private optColOverscan;
    private maxColOverscan;
    private rows;
    private firstRow;
    private lastRow;
    private firstCol;
    private lastCol;
    private get rowCount();
    private get colCount();
    get Rows(): string;
    get Cols(): string;
    private wallHeight;
    private wallWidth;
    private avgRowHeight;
    private avgColWidth;
    private latestScrollTop;
    private latestScrollLeft;
    private frame;
    private frameRef;
    private wall;
    private wallRef;
    private table;
    private tableRef;
    private vAxis;
    private hAxis;
    private frameID;
    private wallID;
    private tableID;
}
