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
const mim = __importStar(require("mimbl"));
const css = __importStar(require("mimcss"));
const monaco = __importStar(require("monaco-editor"));
require("monaco-editor/esm/vs/basic-languages/javascript/javascript");
require("monaco-editor/esm/vs/basic-languages/typescript/typescript");
require("monaco-editor/esm/vs/language/typescript/languageFeatures");
require("monaco-editor/esm/vs/language/typescript/tsMode");
require("monaco-editor/esm/vs/language/typescript/workerManager");
/// #if !DEBUG
css.enableShortNames(true, "m");
/// #endif
const SharedStyles_1 = require("./SharedStyles");
// this function is called from body.onload
this.mimcssDemoMain = async function (appRoot) {
    let ts = monaco.languages.typescript;
    ts.typescriptDefaults.setCompilerOptions({
        target: ts.ScriptTarget.ES2016,
        allowNonTsExtensions: true,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        module: ts.ModuleKind.CommonJS,
        // noEmit: true,
        typeRoots: ["node_modules"],
        jsx: ts.JsxEmit.React,
        jsxFactory: "mim.jsx",
    });
    addMimcssTypings();
    addMimblTypings();
    // let fileContent = [
    //     `import * as css from "mimcss"`,
    //     `import * as mim from "mimbl"`,
    //     ``,
    //     `function foo() {`,
    //     `\tlet s: string = "Hello world!";`,
    //     `\tconsole.log(s);`,
    //     `\treturn <div>Hello</div>;`,
    //     `}`
    //     ].join("\n");
    // let fileUri = monaco.Uri.parse( "file:///main.tsx");
    // let model = monaco.editor.createModel( fileContent, "typescript", fileUri);
    let editor = monaco.editor.create(appRoot, {
        model: null,
        language: "typescript",
        minimap: { enabled: false },
        automaticLayout: true,
        renderLineHighlight: "gutter",
        roundedSelection: false,
        mouseWheelZoom: true,
    });
    let exampleContent = await fetchFileContent("examples/gradients.tsx");
    let exampleUri = monaco.Uri.parse("file:///examples/gradients.tsx");
    let exampeModel = monaco.editor.createModel(exampleContent, "typescript", exampleUri);
    editor.setModel(exampeModel);
    let func = await ts.getTypeScriptWorker();
    let worker = await func(exampleUri);
    let result = await worker.getEmitOutput(exampleUri.toString());
    console.log(result.outputFiles[0].text);
    // editor.setModel(null);
    // editor.dispose();
    // exampeModel.dispose();
    // mim.mount( new MainForm(), appRoot);
};
async function addMimcssTypings() {
    addTypings({
        libName: "mimcss",
        files: [
            "mimcssTypes.d.ts",
            "styles/UtilTypes.d.ts",
            "styles/ColorTypes.d.ts",
            "styles/ImageTypes.d.ts",
            "styles/StyleTypes.d.ts",
            "styles/SelectorTypes.d.ts",
            "styles/MediaTypes.d.ts",
            "styles/FontFaceTypes.d.ts",
            "rules/RuleTypes.d.ts",
            "api/UtilAPI.d.ts",
            "api/ColorAPI.d.ts",
            "api/ImageAPI.d.ts",
            "api/StyleAPI.d.ts",
            "api/RuleAPI.d.ts",
            "api/SchedulingAPI.d.ts"
        ],
        rootPath: "mimcss/",
        index: "mimcssTypes.d.ts",
    });
}
async function addMimblTypings() {
    addTypings({
        libName: "mimbl",
        files: [
            "mimblTypes.d.ts",
            "api/mim.d.ts",
            "api/HtmlTypes.d.ts",
            "api/SvgTypes.d.ts",
            "api/LocalStyles.d.ts",
            "utils/EventSlot.d.ts"
        ],
        rootPath: "mimbl/",
        index: "mimblTypes.d.ts",
    });
}
async function addTypings(typingsInfo) {
    // fetch all files and put their content into the map by their paths
    let fileMap = new Map();
    for (let file of typingsInfo.files) {
        try {
            let fileContent = await fetchFileContent(file, typingsInfo.rootPath);
            fileMap.set(file, fileContent);
        }
        catch (err) {
            console.error(`Cannot fetch file ${file}`, err);
        }
    }
    let ts = monaco.languages.typescript;
    let extraLibRootPath = `file:///node_modules/${typingsInfo.libName}`;
    fileMap.forEach((content, file) => {
        let filePath = file === typingsInfo.index ? "index.d.ts" : file;
        ts.typescriptDefaults.addExtraLib(content, `${extraLibRootPath}/${filePath}`);
    });
}
async function fetchFileContent(file, rootPath) {
    let path = (rootPath ? rootPath : "") + file;
    let res = await fetch(path);
    return await res.text();
}
class MyStyles extends css.StyleDefinition {
    constructor() {
        super(...arguments);
        this.linearGradient = css.$class({
            width: 200,
            height: 200,
            backgroundImage: css.gradient.repeatingLinear.to(15)(css.Colors.lightcyan, css.Colors.orange, [30], [css.Colors.lightcyan, 50])
        });
        this.radialGradient = css.$class({
            width: 200,
            height: 200,
            backgroundImage: css.gradient.repeatingRadial.circle().extent("farthest-corner").at([5.5, 3.3])(css.Colors.lightcyan, css.Colors.orange, [30], [css.Colors.lightcyan, 50])
        });
        this.conic = css.$class({
            width: 200,
            height: 200,
            backgroundImage: css.gradient.conic.from(45).at("70%")(css.Colors.red, css.Colors.orange, css.Colors.yellow, css.Colors.green, css.Colors.lightblue, css.Colors.blue, css.Colors.violet, css.Colors.red)
        });
    }
}
let myStyles = css.activate(MyStyles);
class MainForm extends mim.Component {
    render() {
        return mim.jsx("div", { class: [SharedStyles_1.sharedStyles.vbox, SharedStyles_1.sharedStyles.spacing] },
            mim.jsx("div", { class: [SharedStyles_1.sharedStyles.hbox, SharedStyles_1.sharedStyles.spacing] },
                mim.jsx("div", { class: myStyles.linearGradient }),
                mim.jsx("div", { class: myStyles.radialGradient }),
                mim.jsx("div", { class: myStyles.conic })));
    }
}
//# sourceMappingURL=main.js.map