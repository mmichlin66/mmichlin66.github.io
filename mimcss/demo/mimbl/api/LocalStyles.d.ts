import * as mim from "../api/mim";
import { Styleset } from "mimcss";
declare module "../api/mim" {
    interface IServiceDefinitions {
        LocalStyles: ILocalStyleService;
    }
}
export interface ILocalStyleService {
    readonly uniqueID: string;
    decorateName(name: string): string;
}
export declare abstract class ComponentWithLocalStyles<TProps = {}, TChildren = any> extends mim.Component<TProps, TChildren> implements ILocalStyleService {
    constructor(props?: TProps);
    get uniqueID(): string;
    decorateName(name: string): string;
    createStyleRule(name: string, selector?: string, props?: Styleset): IMCssStyleRule;
    getRule(name: string): IMCssRule;
    removeRule(name: string): void;
    willMount(): void;
    willUnmount(): void;
    private createDummyRule;
    private m_uniqueID;
    private styleElm;
    private rules;
    private ruleNames;
}
export interface IMCssRule {
    readonly uniqueID: string;
    readonly cssomRule: CSSRule;
    decorate(name: string): string;
    replace(name: string): string;
}
export interface IMCssStyleRule {
    setSelector(selector: string): any;
    setProperty(propName: string, propVal: string, important?: boolean): void;
    setProperties(props: Styleset): void;
    removeProperty(propName: string): void;
}
