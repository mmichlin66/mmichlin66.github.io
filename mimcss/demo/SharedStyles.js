"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedStyles = void 0;
const css = __importStar(require("mimcss"));
class SharedStyles extends css.StyleDefinition {
    constructor() {
        super(...arguments);
        this.init = [
            css.$style("*", {
                // 	// fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                boxSizing: "border-box",
            }),
            css.$style("html", { height: "100%" }),
            css.$style("body", { height: "100%", margin: 0 }),
        ];
        this.h = css.$abstract({ fontWeight: "bold", marginTop: 0.75, marginBottom: 0.5 });
        this.headers = [
            css.$style("h1", { "+": this.h, fontSize: 24 }),
            css.$style("h2", { "+": this.h, fontSize: 20 }),
            css.$style("h3", { "+": this.h, fontSize: 18 }),
            css.$style("h4", { "+": this.h, fontSize: 16 }),
            css.$style("h5", { "+": this.h, fontSize: 14 }),
            css.$style("h6", { "+": this.h, fontSize: 12 }),
        ];
        this.defaultInlineGap = css.$var("width", 8);
        this.defaultBlockGap = css.$var("width", 8);
        this.spacing = css.$class();
        this.elastic = css.$class();
        this.vbox = css.$class({
            display: "flex", flexDirection: "column",
            "&>": [
                ["*", { flex: [0, 0, "auto"] }],
                [this.elastic, { flex: "1 1 0", overflow: "auto" }],
            ],
            "&": [
                [css.selector `&${this.spacing} > *`, { marginBlockStart: this.defaultBlockGap, marginBlockEnd: this.defaultBlockGap }],
            ]
        });
        this.hbox = css.$class({
            display: "flex", flexDirection: "row", alignItems: "center",
            "&>": [
                ["*", { flex: [0, 0, "auto"] }],
                [this.elastic, { flex: "1 1 0", overflow: "auto" }],
            ],
            "&": [
                [css.selector `&${this.spacing} > *`, { marginInlineStart: this.defaultInlineGap, marginInlineEnd: this.defaultInlineGap }],
            ]
        });
    }
}
exports.sharedStyles = css.activate(SharedStyles);
//# sourceMappingURL=SharedStyles.js.map