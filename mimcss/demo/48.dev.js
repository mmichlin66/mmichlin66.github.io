(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.js ***!
  \****************************************************************************/
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
        lineComment: ';',
        blockComment: ['#|', '|#'],
    },
    brackets: [['(', ')'], ['{', '}'], ['[', ']']],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
};
var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.scheme',
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
    ],
    keywords: [
        'case',
        'do',
        'let',
        'loop',
        'if',
        'else',
        'when',
        'cons',
        'car',
        'cdr',
        'cond',
        'lambda',
        'lambda*',
        'syntax-rules',
        'format',
        'set!',
        'quote',
        'eval',
        'append',
        'list',
        'list?',
        'member?',
        'load',
    ],
    constants: ['#t', '#f'],
    operators: ['eq?', 'eqv?', 'equal?', 'and', 'or', 'not', 'null?'],
    tokenizer: {
        root: [
            [/#[xXoObB][0-9a-fA-F]+/, 'number.hex'],
            [/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/, 'number.float'],
            [
                /(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,
                ['keyword', 'white', 'variable'],
            ],
            { include: '@whitespace' },
            { include: '@strings' },
            [
                /[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@constants': 'constant',
                        '@operators': 'operators',
                        '@default': 'identifier',
                    },
                },
            ],
        ],
        comment: [
            [/[^\|#]+/, 'comment'],
            [/#\|/, 'comment', '@push'],
            [/\|#/, 'comment', '@pop'],
            [/[\|#]/, 'comment'],
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/#\|/, 'comment', '@comment'],
            [/;.*$/, 'comment'],
        ],
        strings: [
            [/"$/, 'string', '@popall'],
            [/"(?=.)/, 'string', '@multiLineString'],
        ],
        multiLineString: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string.escape'],
            [/"/, 'string', '@popall'],
            [/\\$/, 'string']
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NjaGVtZS9zY2hlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVMsU0FBUyxZQUFZLDZCQUE2QjtBQUMzRCxTQUFTLG1EQUFtRDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiI0OC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnOycsXHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJyN8JywgJ3wjJ10sXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtbJygnLCAnKSddLCBbJ3snLCAnfSddLCBbJ1snLCAnXSddXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgIF0sXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcclxuICAgIHRva2VuUG9zdGZpeDogJy5zY2hlbWUnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnY2FzZScsXHJcbiAgICAgICAgJ2RvJyxcclxuICAgICAgICAnbGV0JyxcclxuICAgICAgICAnbG9vcCcsXHJcbiAgICAgICAgJ2lmJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ3doZW4nLFxyXG4gICAgICAgICdjb25zJyxcclxuICAgICAgICAnY2FyJyxcclxuICAgICAgICAnY2RyJyxcclxuICAgICAgICAnY29uZCcsXHJcbiAgICAgICAgJ2xhbWJkYScsXHJcbiAgICAgICAgJ2xhbWJkYSonLFxyXG4gICAgICAgICdzeW50YXgtcnVsZXMnLFxyXG4gICAgICAgICdmb3JtYXQnLFxyXG4gICAgICAgICdzZXQhJyxcclxuICAgICAgICAncXVvdGUnLFxyXG4gICAgICAgICdldmFsJyxcclxuICAgICAgICAnYXBwZW5kJyxcclxuICAgICAgICAnbGlzdCcsXHJcbiAgICAgICAgJ2xpc3Q/JyxcclxuICAgICAgICAnbWVtYmVyPycsXHJcbiAgICAgICAgJ2xvYWQnLFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50czogWycjdCcsICcjZiddLFxyXG4gICAgb3BlcmF0b3JzOiBbJ2VxPycsICdlcXY/JywgJ2VxdWFsPycsICdhbmQnLCAnb3InLCAnbm90JywgJ251bGw/J10sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIFsvI1t4WG9PYkJdWzAtOWEtZkEtRl0rLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy9bKy1dP1xcZCsoPzooPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyg/OlxcYig/OihkZWZpbmV8ZGVmaW5lLXN5bnRheHxkZWZpbmUtbWFjcm8pKVxcYikoXFxzKykoKD86XFx3fFxcLXxcXCF8XFw/KSopLyxcclxuICAgICAgICAgICAgICAgIFsna2V5d29yZCcsICd3aGl0ZScsICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9bYS16QS1aXyNdW2EtekEtWjAtOV9cXC1cXD9cXCFcXCpdKi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bjb25zdGFudHMnOiAnY29uc3RhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdvcGVyYXRvcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW15cXHwjXSsvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbLyNcXHwvLCAnY29tbWVudCcsICdAcHVzaCddLFxyXG4gICAgICAgICAgICBbL1xcfCMvLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW1xcfCNdLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXHJcbiAgICAgICAgICAgIFsvI1xcfC8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvOy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgIFsvXCIkLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXCIoPz0uKS8sICdzdHJpbmcnLCAnQG11bHRpTGluZVN0cmluZyddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbXVsdGlMaW5lU3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKyQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=