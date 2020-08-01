(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Allow for running under nodejs/requirejs in tests
var _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);
var EMPTY_ELEMENTS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];
var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: ['<!--', '-->']
    },
    brackets: [
        ['<!--', '-->'],
        ['<', '>'],
        ['{', '}'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' }
    ],
    surroundingPairs: [
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        { open: '<', close: '>' }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: { indentAction: _monaco.languages.IndentAction.IndentOutdent }
        },
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            action: { indentAction: _monaco.languages.IndentAction.Indent }
        }
    ],
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/@@/],
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.root' }],
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [/(<)([:\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/(<\/)(\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/</, 'delimiter.html'],
            [/[ \t\r\n]+/],
            [/[^<@]+/],
        ],
        doctype: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.comment' }],
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop'],
        ],
        comment: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.comment' }],
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.otherTag' }],
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.script' }],
            [/type/, 'attribute.name', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/(<\/)(script\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]
        ],
        // After <script ... type
        scriptAfterType: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.scriptAfterType' }],
            [/=/, 'delimiter', '@scriptAfterTypeEquals'],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.scriptAfterTypeEquals' }],
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.scriptWithCustomType.$S2' }],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInEmbeddedState.scriptEmbedded.$S2', nextEmbedded: '@pop' }],
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.style' }],
            [/type/, 'attribute.name', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/(<\/)(style\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]
        ],
        // After <style ... type
        styleAfterType: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.styleAfterType' }],
            [/=/, 'delimiter', '@styleAfterTypeEquals'],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.styleAfterTypeEquals' }],
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.styleWithCustomType.$S2' }],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInEmbeddedState.styleEmbedded.$S2', nextEmbedded: '@pop' }],
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <style> tags handling
        razorInSimpleState: [
            [/@\*/, 'comment.cs', '@razorBlockCommentTopLevel'],
            [/@[{(]/, 'metatag.cs', '@razorRootTopLevel'],
            [/(@)(\s*[\w]+)/, ['metatag.cs', { token: 'identifier.cs', switchTo: '@$S2.$S3' }]],
            [/[})]/, { token: 'metatag.cs', switchTo: '@$S2.$S3' }],
            [/\*@/, { token: 'comment.cs', switchTo: '@$S2.$S3' }],
        ],
        razorInEmbeddedState: [
            [/@\*/, 'comment.cs', '@razorBlockCommentTopLevel'],
            [/@[{(]/, 'metatag.cs', '@razorRootTopLevel'],
            [/(@)(\s*[\w]+)/, ['metatag.cs', { token: 'identifier.cs', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }]],
            [/[})]/, { token: 'metatag.cs', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }],
            [/\*@/, { token: 'comment.cs', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }],
        ],
        razorBlockCommentTopLevel: [
            [/\*@/, '@rematch', '@pop'],
            [/[^*]+/, 'comment.cs'],
            [/./, 'comment.cs']
        ],
        razorBlockComment: [
            [/\*@/, 'comment.cs', '@pop'],
            [/[^*]+/, 'comment.cs'],
            [/./, 'comment.cs']
        ],
        razorRootTopLevel: [
            [/\{/, 'delimiter.bracket.cs', '@razorRoot'],
            [/\(/, 'delimiter.parenthesis.cs', '@razorRoot'],
            [/[})]/, '@rematch', '@pop'],
            { include: 'razorCommon' }
        ],
        razorRoot: [
            [/\{/, 'delimiter.bracket.cs', '@razorRoot'],
            [/\(/, 'delimiter.parenthesis.cs', '@razorRoot'],
            [/\}/, 'delimiter.bracket.cs', '@pop'],
            [/\)/, 'delimiter.parenthesis.cs', '@pop'],
            { include: 'razorCommon' }
        ],
        razorCommon: [
            [/[a-zA-Z_]\w*/, {
                    cases: {
                        '@razorKeywords': { token: 'keyword.cs' },
                        '@default': 'identifier.cs'
                    }
                }],
            // brackets
            [/[\[\]]/, 'delimiter.array.cs'],
            // whitespace
            [/[ \t\r\n]+/],
            // comments
            [/\/\/.*$/, 'comment.cs'],
            [/@\*/, 'comment.cs', '@razorBlockComment'],
            // strings
            [/"([^"]*)"/, 'string.cs'],
            [/'([^']*)'/, 'string.cs'],
            // simple html
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(\w+)(>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<\/)(\w+)(>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            // delimiters
            [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,]/, 'delimiter.cs'],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?/, 'number.float.cs'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float.cs'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex.cs'],
            [/0[0-7']*[0-7]/, 'number.octal.cs'],
            [/0[bB][0-1']*[0-1]/, 'number.binary.cs'],
            [/\d[\d']*/, 'number.cs'],
            [/\d/, 'number.cs'],
        ]
    },
    razorKeywords: [
        'abstract', 'as', 'async', 'await', 'base', 'bool',
        'break', 'by', 'byte', 'case',
        'catch', 'char', 'checked', 'class',
        'const', 'continue', 'decimal', 'default',
        'delegate', 'do', 'double', 'descending',
        'explicit', 'event', 'extern', 'else',
        'enum', 'false', 'finally', 'fixed',
        'float', 'for', 'foreach', 'from',
        'goto', 'group', 'if', 'implicit',
        'in', 'int', 'interface', 'internal',
        'into', 'is', 'lock', 'long', 'nameof',
        'new', 'null', 'namespace', 'object',
        'operator', 'out', 'override', 'orderby',
        'params', 'private', 'protected', 'public',
        'readonly', 'ref', 'return', 'switch',
        'struct', 'sbyte', 'sealed', 'short',
        'sizeof', 'stackalloc', 'static', 'string',
        'select', 'this', 'throw', 'true',
        'try', 'typeof', 'uint', 'ulong',
        'unchecked', 'unsafe', 'ushort', 'using',
        'var', 'virtual', 'volatile', 'void', 'when',
        'while', 'where', 'yield',
        'model', 'inject' // Razor specific
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Jhem9yL3Jhem9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ087QUFDUCxrRUFBa0UsSUFBSSxNQUFNO0FBQzVFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBEQUEwRDtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscUNBQXFDO0FBQ3JGLCtDQUErQyxvQ0FBb0M7QUFDbkYsZ0RBQWdELHVDQUF1QztBQUN2RiwrQ0FBK0MsdUNBQXVDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkRBQTZEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZEQUE2RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhEQUE4RDtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0REFBNEQ7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvR0FBb0c7QUFDdkg7QUFDQSxvRUFBb0Usd0NBQXdDO0FBQzVHO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxRUFBcUU7QUFDNUY7QUFDQSxtQkFBbUIsb0dBQW9HO0FBQ3ZIO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkVBQTJFO0FBQ2xHLDJCQUEyQixpRUFBaUU7QUFDNUYsMkJBQTJCLGlFQUFpRTtBQUM1RixtQkFBbUIsb0dBQW9HO0FBQ3ZIO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEVBQThFO0FBQ3JHLG1CQUFtQiw0RUFBNEU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBLHVCQUF1QixnR0FBZ0c7QUFDdkgsMkJBQTJCLHdEQUF3RDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJEQUEyRDtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFGQUFxRjtBQUN4RztBQUNBLG1FQUFtRSx3Q0FBd0M7QUFDM0c7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9FQUFvRTtBQUMzRjtBQUNBLG1CQUFtQixxRkFBcUY7QUFDeEc7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwRUFBMEU7QUFDakcsMkJBQTJCLGdFQUFnRTtBQUMzRiwyQkFBMkIsZ0VBQWdFO0FBQzNGLG1CQUFtQixxRkFBcUY7QUFDeEc7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2RUFBNkU7QUFDcEcsbUJBQW1CLDJFQUEyRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0EsdUJBQXVCLCtGQUErRjtBQUN0SCwwQkFBMEIsd0RBQXdEO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDhDQUE4QywrQ0FBK0M7QUFDN0YsZ0JBQWdCLE1BQU0sNENBQTRDO0FBQ2xFLHFCQUFxQiw0Q0FBNEM7QUFDakU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDhDQUE4QyxvRUFBb0U7QUFDbEgsZ0JBQWdCLE1BQU0saUVBQWlFO0FBQ3ZGLHFCQUFxQixpRUFBaUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGIiwiZmlsZSI6IjQxLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbi8vIEFsbG93IGZvciBydW5uaW5nIHVuZGVyIG5vZGVqcy9yZXF1aXJlanMgaW4gdGVzdHNcclxudmFyIF9tb25hY28gPSAodHlwZW9mIG1vbmFjbyA9PT0gJ3VuZGVmaW5lZCcgPyBzZWxmLm1vbmFjbyA6IG1vbmFjbyk7XHJcbnZhciBFTVBUWV9FTEVNRU5UUyA9IFsnYXJlYScsICdiYXNlJywgJ2JyJywgJ2NvbCcsICdlbWJlZCcsICdocicsICdpbWcnLCAnaW5wdXQnLCAna2V5Z2VuJywgJ2xpbmsnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdwYXJhbScsICdzb3VyY2UnLCAndHJhY2snLCAnd2JyJ107XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcJFxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFxzXSspL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWyc8IS0tJywgJy0tPiddXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJzwhLS0nLCAnLS0+J10sXHJcbiAgICAgICAgWyc8JywgJz4nXSxcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9XHJcbiAgICBdLFxyXG4gICAgb25FbnRlclJ1bGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKFwiPCg/ISg/OlwiICsgRU1QVFlfRUxFTUVOVFMuam9pbignfCcpICsgXCIpKShcXFxcd1tcXFxcd1xcXFxkXSopKFteLz5dKig/IS8pPilbXjxdKiRcIiwgJ2knKSxcclxuICAgICAgICAgICAgYWZ0ZXJUZXh0OiAvXjxcXC8oXFx3W1xcd1xcZF0qKVxccyo+JC9pLFxyXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBfbW9uYWNvLmxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50T3V0ZGVudCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KD8hKD86XCIgKyBFTVBUWV9FTEVNRU5UUy5qb2luKCd8JykgKyBcIikpKFxcXFx3W1xcXFx3XFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxyXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBfbW9uYWNvLmxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50IH1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJycsXHJcbiAgICAvLyBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIFsvQEAvXSxcclxuICAgICAgICAgICAgWy9AW15AXS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHJhem9ySW5TaW1wbGVTdGF0ZS5yb290JyB9XSxcclxuICAgICAgICAgICAgWy88IURPQ1RZUEUvLCAnbWV0YXRhZy5odG1sJywgJ0Bkb2N0eXBlJ10sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50Lmh0bWwnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy8oPCkoXFx3KykoXFwvPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgJ2RlbGltaXRlci5odG1sJ11dLFxyXG4gICAgICAgICAgICBbLyg8KShzY3JpcHQpLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAc2NyaXB0JyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDwpKHN0eWxlKS8sIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQHN0eWxlJyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDwpKFs6XFx3XSspLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAb3RoZXJUYWcnIH1dXSxcclxuICAgICAgICAgICAgWy8oPFxcLykoXFx3KykvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxyXG4gICAgICAgICAgICBbLzwvLCAnZGVsaW1pdGVyLmh0bWwnXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvW148QF0rL10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkb2N0eXBlOiBbXHJcbiAgICAgICAgICAgIFsvQFteQF0vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0ByYXpvckluU2ltcGxlU3RhdGUuY29tbWVudCcgfV0sXHJcbiAgICAgICAgICAgIFsvW14+XSsvLCAnbWV0YXRhZy5jb250ZW50Lmh0bWwnXSxcclxuICAgICAgICAgICAgWy8+LywgJ21ldGF0YWcuaHRtbCcsICdAcG9wJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvQFteQF0vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0ByYXpvckluU2ltcGxlU3RhdGUuY29tbWVudCcgfV0sXHJcbiAgICAgICAgICAgIFsvLS0+LywgJ2NvbW1lbnQuaHRtbCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW14tXSsvLCAnY29tbWVudC5jb250ZW50Lmh0bWwnXSxcclxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQuY29udGVudC5odG1sJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIG90aGVyVGFnOiBbXHJcbiAgICAgICAgICAgIFsvQFteQF0vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0ByYXpvckluU2ltcGxlU3RhdGUub3RoZXJUYWcnIH1dLFxyXG4gICAgICAgICAgICBbL1xcLz8+LywgJ2RlbGltaXRlci5odG1sJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gLS0gQkVHSU4gPHNjcmlwdD4gdGFncyBoYW5kbGluZ1xyXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHRcclxuICAgICAgICBzY3JpcHQ6IFtcclxuICAgICAgICAgICAgWy9AW15AXS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHJhem9ySW5TaW1wbGVTdGF0ZS5zY3JpcHQnIH1dLFxyXG4gICAgICAgICAgICBbL3R5cGUvLCAnYXR0cmlidXRlLm5hbWUnLCAnQHNjcmlwdEFmdGVyVHlwZSddLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC50ZXh0L2phdmFzY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH1dLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy8oPFxcLykoc2NyaXB0XFxzKikoPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0Bwb3AnIH1dXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZVxyXG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZTogW1xyXG4gICAgICAgICAgICBbL0BbXkBdLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcmF6b3JJblNpbXBsZVN0YXRlLnNjcmlwdEFmdGVyVHlwZScgfV0sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInLCAnQHNjcmlwdEFmdGVyVHlwZUVxdWFscyddLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLnRleHQvamF2YXNjcmlwdCcsIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCcgfV0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9XHJcbiAgICAgICAgc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzOiBbXHJcbiAgICAgICAgICAgIFsvQFteQF0vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0ByYXpvckluU2ltcGxlU3RhdGUuc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzJyB9XSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMScgfV0sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQudGV4dC9qYXZhc2NyaXB0JywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID0gJFMyXHJcbiAgICAgICAgc2NyaXB0V2l0aEN1c3RvbVR5cGU6IFtcclxuICAgICAgICAgICAgWy9AW15AXS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHJhem9ySW5TaW1wbGVTdGF0ZS5zY3JpcHRXaXRoQ3VzdG9tVHlwZS4kUzInIH1dLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLiRTMicsIG5leHRFbWJlZGRlZDogJyRTMicgfV0sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNjcmlwdEVtYmVkZGVkOiBbXHJcbiAgICAgICAgICAgIFsvQFteQF0vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0ByYXpvckluRW1iZWRkZWRTdGF0ZS5zY3JpcHRFbWJlZGRlZC4kUzInLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy88XFwvc2NyaXB0LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gLS0gRU5EIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICAvLyAtLSBCRUdJTiA8c3R5bGU+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICAvLyBBZnRlciA8c3R5bGVcclxuICAgICAgICBzdHlsZTogW1xyXG4gICAgICAgICAgICBbL0BbXkBdLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcmF6b3JJblNpbXBsZVN0YXRlLnN0eWxlJyB9XSxcclxuICAgICAgICAgICAgWy90eXBlLywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BzdHlsZUFmdGVyVHlwZSddLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLnRleHQvY3NzJywgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnIH1dLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy8oPFxcLykoc3R5bGVcXHMqKSg+KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHBvcCcgfV1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGVcclxuICAgICAgICBzdHlsZUFmdGVyVHlwZTogW1xyXG4gICAgICAgICAgICBbL0BbXkBdLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcmF6b3JJblNpbXBsZVN0YXRlLnN0eWxlQWZ0ZXJUeXBlJyB9XSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlcicsICdAc3R5bGVBZnRlclR5cGVFcXVhbHMnXSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLnRleHQvY3NzJywgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnIH1dLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlID1cclxuICAgICAgICBzdHlsZUFmdGVyVHlwZUVxdWFsczogW1xyXG4gICAgICAgICAgICBbL0BbXkBdLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcmF6b3JJblNpbXBsZVN0YXRlLnN0eWxlQWZ0ZXJUeXBlRXF1YWxzJyB9XSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMScgfV0sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIHN3aXRjaFRvOiAnQHN0eWxlV2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHN0eWxlRW1iZWRkZWQudGV4dC9jc3MnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcycgfV0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGUgPSAkUzJcclxuICAgICAgICBzdHlsZVdpdGhDdXN0b21UeXBlOiBbXHJcbiAgICAgICAgICAgIFsvQFteQF0vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0ByYXpvckluU2ltcGxlU3RhdGUuc3R5bGVXaXRoQ3VzdG9tVHlwZS4kUzInIH1dLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHN0eWxlRW1iZWRkZWQuJFMyJywgbmV4dEVtYmVkZGVkOiAnJFMyJyB9XSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHlsZUVtYmVkZGVkOiBbXHJcbiAgICAgICAgICAgIFsvQFteQF0vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0ByYXpvckluRW1iZWRkZWRTdGF0ZS5zdHlsZUVtYmVkZGVkLiRTMicsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIC0tIEVORCA8c3R5bGU+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICByYXpvckluU2ltcGxlU3RhdGU6IFtcclxuICAgICAgICAgICAgWy9AXFwqLywgJ2NvbW1lbnQuY3MnLCAnQHJhem9yQmxvY2tDb21tZW50VG9wTGV2ZWwnXSxcclxuICAgICAgICAgICAgWy9AW3soXS8sICdtZXRhdGFnLmNzJywgJ0ByYXpvclJvb3RUb3BMZXZlbCddLFxyXG4gICAgICAgICAgICBbLyhAKShcXHMqW1xcd10rKS8sIFsnbWV0YXRhZy5jcycsIHsgdG9rZW46ICdpZGVudGlmaWVyLmNzJywgc3dpdGNoVG86ICdAJFMyLiRTMycgfV1dLFxyXG4gICAgICAgICAgICBbL1t9KV0vLCB7IHRva2VuOiAnbWV0YXRhZy5jcycsIHN3aXRjaFRvOiAnQCRTMi4kUzMnIH1dLFxyXG4gICAgICAgICAgICBbL1xcKkAvLCB7IHRva2VuOiAnY29tbWVudC5jcycsIHN3aXRjaFRvOiAnQCRTMi4kUzMnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmF6b3JJbkVtYmVkZGVkU3RhdGU6IFtcclxuICAgICAgICAgICAgWy9AXFwqLywgJ2NvbW1lbnQuY3MnLCAnQHJhem9yQmxvY2tDb21tZW50VG9wTGV2ZWwnXSxcclxuICAgICAgICAgICAgWy9AW3soXS8sICdtZXRhdGFnLmNzJywgJ0ByYXpvclJvb3RUb3BMZXZlbCddLFxyXG4gICAgICAgICAgICBbLyhAKShcXHMqW1xcd10rKS8sIFsnbWV0YXRhZy5jcycsIHsgdG9rZW46ICdpZGVudGlmaWVyLmNzJywgc3dpdGNoVG86ICdAJFMyLiRTMycsIG5leHRFbWJlZGRlZDogJyRTMycgfV1dLFxyXG4gICAgICAgICAgICBbL1t9KV0vLCB7IHRva2VuOiAnbWV0YXRhZy5jcycsIHN3aXRjaFRvOiAnQCRTMi4kUzMnLCBuZXh0RW1iZWRkZWQ6ICckUzMnIH1dLFxyXG4gICAgICAgICAgICBbL1xcKkAvLCB7IHRva2VuOiAnY29tbWVudC5jcycsIHN3aXRjaFRvOiAnQCRTMi4kUzMnLCBuZXh0RW1iZWRkZWQ6ICckUzMnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmF6b3JCbG9ja0NvbW1lbnRUb3BMZXZlbDogW1xyXG4gICAgICAgICAgICBbL1xcKkAvLCAnQHJlbWF0Y2gnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1teKl0rLywgJ2NvbW1lbnQuY3MnXSxcclxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQuY3MnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmF6b3JCbG9ja0NvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9cXCpALywgJ2NvbW1lbnQuY3MnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1teKl0rLywgJ2NvbW1lbnQuY3MnXSxcclxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQuY3MnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmF6b3JSb290VG9wTGV2ZWw6IFtcclxuICAgICAgICAgICAgWy9cXHsvLCAnZGVsaW1pdGVyLmJyYWNrZXQuY3MnLCAnQHJhem9yUm9vdCddLFxyXG4gICAgICAgICAgICBbL1xcKC8sICdkZWxpbWl0ZXIucGFyZW50aGVzaXMuY3MnLCAnQHJhem9yUm9vdCddLFxyXG4gICAgICAgICAgICBbL1t9KV0vLCAnQHJlbWF0Y2gnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdyYXpvckNvbW1vbicgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmF6b3JSb290OiBbXHJcbiAgICAgICAgICAgIFsvXFx7LywgJ2RlbGltaXRlci5icmFja2V0LmNzJywgJ0ByYXpvclJvb3QnXSxcclxuICAgICAgICAgICAgWy9cXCgvLCAnZGVsaW1pdGVyLnBhcmVudGhlc2lzLmNzJywgJ0ByYXpvclJvb3QnXSxcclxuICAgICAgICAgICAgWy9cXH0vLCAnZGVsaW1pdGVyLmJyYWNrZXQuY3MnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1xcKS8sICdkZWxpbWl0ZXIucGFyZW50aGVzaXMuY3MnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdyYXpvckNvbW1vbicgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmF6b3JDb21tb246IFtcclxuICAgICAgICAgICAgWy9bYS16QS1aX11cXHcqLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcmF6b3JLZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLmNzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllci5jcydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gYnJhY2tldHNcclxuICAgICAgICAgICAgWy9bXFxbXFxdXS8sICdkZWxpbWl0ZXIuYXJyYXkuY3MnXSxcclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgLy8gY29tbWVudHNcclxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudC5jcyddLFxyXG4gICAgICAgICAgICBbL0BcXCovLCAnY29tbWVudC5jcycsICdAcmF6b3JCbG9ja0NvbW1lbnQnXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nc1xyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdzdHJpbmcuY3MnXSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnc3RyaW5nLmNzJ10sXHJcbiAgICAgICAgICAgIC8vIHNpbXBsZSBodG1sXHJcbiAgICAgICAgICAgIFsvKDwpKFxcdyspKFxcLz4pLywgWydkZWxpbWl0ZXIuaHRtbCcsICd0YWcuaHRtbCcsICdkZWxpbWl0ZXIuaHRtbCddXSxcclxuICAgICAgICAgICAgWy8oPCkoXFx3KykoPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgJ2RlbGltaXRlci5odG1sJ11dLFxyXG4gICAgICAgICAgICBbLyg8XFwvKShcXHcrKSg+KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCAnZGVsaW1pdGVyLmh0bWwnXV0sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnNcclxuICAgICAgICAgICAgWy9bXFwrXFwtXFwqXFwlXFwmXFx8XFxeXFx+XFwhXFw9XFw8XFw+XFwvXFw/XFw7XFw6XFwuXFwsXS8sICdkZWxpbWl0ZXIuY3MnXSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdC5jcyddLFxyXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdC5jcyddLFxyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRiddKlswLTlhLWZBLUZdLywgJ251bWJlci5oZXguY3MnXSxcclxuICAgICAgICAgICAgWy8wWzAtNyddKlswLTddLywgJ251bWJlci5vY3RhbC5jcyddLFxyXG4gICAgICAgICAgICBbLzBbYkJdWzAtMSddKlswLTFdLywgJ251bWJlci5iaW5hcnkuY3MnXSxcclxuICAgICAgICAgICAgWy9cXGRbXFxkJ10qLywgJ251bWJlci5jcyddLFxyXG4gICAgICAgICAgICBbL1xcZC8sICdudW1iZXIuY3MnXSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgcmF6b3JLZXl3b3JkczogW1xyXG4gICAgICAgICdhYnN0cmFjdCcsICdhcycsICdhc3luYycsICdhd2FpdCcsICdiYXNlJywgJ2Jvb2wnLFxyXG4gICAgICAgICdicmVhaycsICdieScsICdieXRlJywgJ2Nhc2UnLFxyXG4gICAgICAgICdjYXRjaCcsICdjaGFyJywgJ2NoZWNrZWQnLCAnY2xhc3MnLFxyXG4gICAgICAgICdjb25zdCcsICdjb250aW51ZScsICdkZWNpbWFsJywgJ2RlZmF1bHQnLFxyXG4gICAgICAgICdkZWxlZ2F0ZScsICdkbycsICdkb3VibGUnLCAnZGVzY2VuZGluZycsXHJcbiAgICAgICAgJ2V4cGxpY2l0JywgJ2V2ZW50JywgJ2V4dGVybicsICdlbHNlJyxcclxuICAgICAgICAnZW51bScsICdmYWxzZScsICdmaW5hbGx5JywgJ2ZpeGVkJyxcclxuICAgICAgICAnZmxvYXQnLCAnZm9yJywgJ2ZvcmVhY2gnLCAnZnJvbScsXHJcbiAgICAgICAgJ2dvdG8nLCAnZ3JvdXAnLCAnaWYnLCAnaW1wbGljaXQnLFxyXG4gICAgICAgICdpbicsICdpbnQnLCAnaW50ZXJmYWNlJywgJ2ludGVybmFsJyxcclxuICAgICAgICAnaW50bycsICdpcycsICdsb2NrJywgJ2xvbmcnLCAnbmFtZW9mJyxcclxuICAgICAgICAnbmV3JywgJ251bGwnLCAnbmFtZXNwYWNlJywgJ29iamVjdCcsXHJcbiAgICAgICAgJ29wZXJhdG9yJywgJ291dCcsICdvdmVycmlkZScsICdvcmRlcmJ5JyxcclxuICAgICAgICAncGFyYW1zJywgJ3ByaXZhdGUnLCAncHJvdGVjdGVkJywgJ3B1YmxpYycsXHJcbiAgICAgICAgJ3JlYWRvbmx5JywgJ3JlZicsICdyZXR1cm4nLCAnc3dpdGNoJyxcclxuICAgICAgICAnc3RydWN0JywgJ3NieXRlJywgJ3NlYWxlZCcsICdzaG9ydCcsXHJcbiAgICAgICAgJ3NpemVvZicsICdzdGFja2FsbG9jJywgJ3N0YXRpYycsICdzdHJpbmcnLFxyXG4gICAgICAgICdzZWxlY3QnLCAndGhpcycsICd0aHJvdycsICd0cnVlJyxcclxuICAgICAgICAndHJ5JywgJ3R5cGVvZicsICd1aW50JywgJ3Vsb25nJyxcclxuICAgICAgICAndW5jaGVja2VkJywgJ3Vuc2FmZScsICd1c2hvcnQnLCAndXNpbmcnLFxyXG4gICAgICAgICd2YXInLCAndmlydHVhbCcsICd2b2xhdGlsZScsICd2b2lkJywgJ3doZW4nLFxyXG4gICAgICAgICd3aGlsZScsICd3aGVyZScsICd5aWVsZCcsXHJcbiAgICAgICAgJ21vZGVsJywgJ2luamVjdCcgLy8gUmF6b3Igc3BlY2lmaWNcclxuICAgIF0sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9