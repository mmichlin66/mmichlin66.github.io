(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js ***!
  \**************************************************************************************/
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

var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/'],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.objective-c',
    keywords: [
        '#import',
        '#include',
        '#define',
        '#else',
        '#endif',
        '#if',
        '#ifdef',
        '#ifndef',
        '#ident',
        '#undef',
        '@class',
        '@defs',
        '@dynamic',
        '@encode',
        '@end',
        '@implementation',
        '@interface',
        '@package',
        '@private',
        '@protected',
        '@property',
        '@protocol',
        '@public',
        '@selector',
        '@synthesize',
        '__declspec',
        'assign',
        'auto',
        'BOOL',
        'break',
        'bycopy',
        'byref',
        'case',
        'char',
        'Class',
        'const',
        'copy',
        'continue',
        'default',
        'do',
        'double',
        'else',
        'enum',
        'extern',
        'FALSE',
        'false',
        'float',
        'for',
        'goto',
        'if',
        'in',
        'int',
        'id',
        'inout',
        'IMP',
        'long',
        'nil',
        'nonatomic',
        'NULL',
        'oneway',
        'out',
        'private',
        'public',
        'protected',
        'readwrite',
        'readonly',
        'register',
        'return',
        'SEL',
        'self',
        'short',
        'signed',
        'sizeof',
        'static',
        'struct',
        'super',
        'switch',
        'typedef',
        'TRUE',
        'true',
        'union',
        'unsigned',
        'volatile',
        'void',
        'while',
    ],
    decpart: /\d(_?\d)*/,
    decimal: /0|@decpart/,
    tokenizer: {
        root: [
            { include: '@comments' },
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()<>]/, '@brackets'],
            [/[a-zA-Z@#]\w*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }],
            [/[<>=\\+\\-\\*\\/\\^\\|\\~,]|and\\b|or\\b|not\\b]/, 'operator'],
        ],
        whitespace: [
            [/\s+/, 'white'],
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment'],
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            ['.', 'comment',],
        ],
        numbers: [
            [/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/, 'number.hex'],
            [/@decimal((\.@decpart)?([eE][\-+]?@decpart)?)[fF]*/, {
                    cases: {
                        '(\\d)*': 'number',
                        '$0': 'number.float'
                    }
                }]
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL29iamVjdGl2ZS1jL29iamVjdGl2ZS1jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyOS5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddLFxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLm9iamVjdGl2ZS1jJyxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJyNpbXBvcnQnLFxyXG4gICAgICAgICcjaW5jbHVkZScsXHJcbiAgICAgICAgJyNkZWZpbmUnLFxyXG4gICAgICAgICcjZWxzZScsXHJcbiAgICAgICAgJyNlbmRpZicsXHJcbiAgICAgICAgJyNpZicsXHJcbiAgICAgICAgJyNpZmRlZicsXHJcbiAgICAgICAgJyNpZm5kZWYnLFxyXG4gICAgICAgICcjaWRlbnQnLFxyXG4gICAgICAgICcjdW5kZWYnLFxyXG4gICAgICAgICdAY2xhc3MnLFxyXG4gICAgICAgICdAZGVmcycsXHJcbiAgICAgICAgJ0BkeW5hbWljJyxcclxuICAgICAgICAnQGVuY29kZScsXHJcbiAgICAgICAgJ0BlbmQnLFxyXG4gICAgICAgICdAaW1wbGVtZW50YXRpb24nLFxyXG4gICAgICAgICdAaW50ZXJmYWNlJyxcclxuICAgICAgICAnQHBhY2thZ2UnLFxyXG4gICAgICAgICdAcHJpdmF0ZScsXHJcbiAgICAgICAgJ0Bwcm90ZWN0ZWQnLFxyXG4gICAgICAgICdAcHJvcGVydHknLFxyXG4gICAgICAgICdAcHJvdG9jb2wnLFxyXG4gICAgICAgICdAcHVibGljJyxcclxuICAgICAgICAnQHNlbGVjdG9yJyxcclxuICAgICAgICAnQHN5bnRoZXNpemUnLFxyXG4gICAgICAgICdfX2RlY2xzcGVjJyxcclxuICAgICAgICAnYXNzaWduJyxcclxuICAgICAgICAnYXV0bycsXHJcbiAgICAgICAgJ0JPT0wnLFxyXG4gICAgICAgICdicmVhaycsXHJcbiAgICAgICAgJ2J5Y29weScsXHJcbiAgICAgICAgJ2J5cmVmJyxcclxuICAgICAgICAnY2FzZScsXHJcbiAgICAgICAgJ2NoYXInLFxyXG4gICAgICAgICdDbGFzcycsXHJcbiAgICAgICAgJ2NvbnN0JyxcclxuICAgICAgICAnY29weScsXHJcbiAgICAgICAgJ2NvbnRpbnVlJyxcclxuICAgICAgICAnZGVmYXVsdCcsXHJcbiAgICAgICAgJ2RvJyxcclxuICAgICAgICAnZG91YmxlJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ2VudW0nLFxyXG4gICAgICAgICdleHRlcm4nLFxyXG4gICAgICAgICdGQUxTRScsXHJcbiAgICAgICAgJ2ZhbHNlJyxcclxuICAgICAgICAnZmxvYXQnLFxyXG4gICAgICAgICdmb3InLFxyXG4gICAgICAgICdnb3RvJyxcclxuICAgICAgICAnaWYnLFxyXG4gICAgICAgICdpbicsXHJcbiAgICAgICAgJ2ludCcsXHJcbiAgICAgICAgJ2lkJyxcclxuICAgICAgICAnaW5vdXQnLFxyXG4gICAgICAgICdJTVAnLFxyXG4gICAgICAgICdsb25nJyxcclxuICAgICAgICAnbmlsJyxcclxuICAgICAgICAnbm9uYXRvbWljJyxcclxuICAgICAgICAnTlVMTCcsXHJcbiAgICAgICAgJ29uZXdheScsXHJcbiAgICAgICAgJ291dCcsXHJcbiAgICAgICAgJ3ByaXZhdGUnLFxyXG4gICAgICAgICdwdWJsaWMnLFxyXG4gICAgICAgICdwcm90ZWN0ZWQnLFxyXG4gICAgICAgICdyZWFkd3JpdGUnLFxyXG4gICAgICAgICdyZWFkb25seScsXHJcbiAgICAgICAgJ3JlZ2lzdGVyJyxcclxuICAgICAgICAncmV0dXJuJyxcclxuICAgICAgICAnU0VMJyxcclxuICAgICAgICAnc2VsZicsXHJcbiAgICAgICAgJ3Nob3J0JyxcclxuICAgICAgICAnc2lnbmVkJyxcclxuICAgICAgICAnc2l6ZW9mJyxcclxuICAgICAgICAnc3RhdGljJyxcclxuICAgICAgICAnc3RydWN0JyxcclxuICAgICAgICAnc3VwZXInLFxyXG4gICAgICAgICdzd2l0Y2gnLFxyXG4gICAgICAgICd0eXBlZGVmJyxcclxuICAgICAgICAnVFJVRScsXHJcbiAgICAgICAgJ3RydWUnLFxyXG4gICAgICAgICd1bmlvbicsXHJcbiAgICAgICAgJ3Vuc2lnbmVkJyxcclxuICAgICAgICAndm9sYXRpbGUnLFxyXG4gICAgICAgICd2b2lkJyxcclxuICAgICAgICAnd2hpbGUnLFxyXG4gICAgXSxcclxuICAgIGRlY3BhcnQ6IC9cXGQoXz9cXGQpKi8sXHJcbiAgICBkZWNpbWFsOiAvMHxAZGVjcGFydC8sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWy9bLDo7XS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9be31cXFtcXF0oKTw+XS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9bYS16QS1aQCNdXFx3Ki8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9bPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH4sXXxhbmRcXFxcYnxvclxcXFxifG5vdFxcXFxiXS8sICdvcGVyYXRvciddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1xccysvLCAnd2hpdGUnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcKicsICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcLysuKicsICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsnXFxcXCpcXFxcLycsICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWycuJywgJ2NvbW1lbnQnLF0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBudW1iZXJzOiBbXHJcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSooXz9bMC05YS1mQS1GXSkqLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy9AZGVjaW1hbCgoXFwuQGRlY3BhcnQpPyhbZUVdW1xcLStdP0BkZWNwYXJ0KT8pW2ZGXSovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyhcXFxcZCkqJzogJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckMCc6ICdudW1iZXIuZmxvYXQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIFJlY29nbml6ZSBzdHJpbmdzLCBpbmNsdWRpbmcgdGhvc2UgYnJva2VuIGFjcm9zcyBsaW5lcyB3aXRoIFxcIChidXQgbm90IHdpdGhvdXQpXHJcbiAgICAgICAgc3RyaW5nczogW1xyXG4gICAgICAgICAgICBbLyckLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmVzY2FwZScsICdAc3RyaW5nQm9keSddLFxyXG4gICAgICAgICAgICBbL1wiJC8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcuZXNjYXBlJywgJ0BkYmxTdHJpbmdCb2R5J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ0JvZHk6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFwnXSskLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGRibFN0cmluZ0JvZHk6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=