(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js ***!
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

// Allow for running under nodejs/requirejs in tests
var _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);
var conf = {
    comments: {
        lineComment: '#',
        blockComment: ['\'\'\'', '\'\'\''],
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
        { open: '"', close: '"', notIn: ['string'] },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$"),
            action: { indentAction: _monaco.languages.IndentAction.Indent }
        }
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp("^\\s*#region\\b"),
            end: new RegExp("^\\s*#endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.python',
    keywords: [
        'and',
        'as',
        'assert',
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'exec',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'is',
        'lambda',
        'None',
        'not',
        'or',
        'pass',
        'print',
        'raise',
        'return',
        'self',
        'try',
        'while',
        'with',
        'yield',
        'int',
        'float',
        'long',
        'complex',
        'hex',
        'abs',
        'all',
        'any',
        'apply',
        'basestring',
        'bin',
        'bool',
        'buffer',
        'bytearray',
        'callable',
        'chr',
        'classmethod',
        'cmp',
        'coerce',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'execfile',
        'file',
        'filter',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'id',
        'input',
        'intern',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'locals',
        'list',
        'map',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'print',
        'property',
        'reversed',
        'range',
        'raw_input',
        'reduce',
        'reload',
        'repr',
        'reversed',
        'round',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'unichr',
        'unicode',
        'vars',
        'xrange',
        'zip',
        'True',
        'False',
        '__dict__',
        '__methods__',
        '__members__',
        '__class__',
        '__bases__',
        '__name__',
        '__mro__',
        '__subclasses__',
        '__init__',
        '__import__'
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z]\w*/, 'tag'],
            [/[a-zA-Z]\w*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(^#.*$)/, 'comment'],
            [/'''/, 'string', '@endDocString'],
            [/"""/, 'string', '@endDblDocString']
        ],
        endDocString: [
            [/[^']+/, 'string'],
            [/\\'/, 'string'],
            [/'''/, 'string', '@popall'],
            [/'/, 'string']
        ],
        endDblDocString: [
            [/[^"]+/, 'string'],
            [/\\"/, 'string'],
            [/"""/, 'string', '@popall'],
            [/"/, 'string']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3B5dGhvbi9weXRob24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMkNBQTJDO0FBQ3BELFNBQVMsd0RBQXdEO0FBQ2pFO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsb0RBQW9EO0FBQzdELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMzkuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuLy8gQWxsb3cgZm9yIHJ1bm5pbmcgdW5kZXIgbm9kZWpzL3JlcXVpcmVqcyBpbiB0ZXN0c1xyXG52YXIgX21vbmFjbyA9ICh0eXBlb2YgbW9uYWNvID09PSAndW5kZWZpbmVkJyA/IHNlbGYubW9uYWNvIDogbW9uYWNvKTtcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJyMnLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWydcXCdcXCdcXCcnLCAnXFwnXFwnXFwnJ10sXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICBdLFxyXG4gICAgb25FbnRlclJ1bGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKig/OmRlZnxjbGFzc3xmb3J8aWZ8ZWxpZnxlbHNlfHdoaWxlfHRyeXx3aXRofGZpbmFsbHl8ZXhjZXB0fGFzeW5jKS4qPzpcXFxccyokXCIpLFxyXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBfbW9uYWNvLmxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50IH1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG9mZlNpZGU6IHRydWUsXHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccyojcmVnaW9uXFxcXGJcIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojZW5kcmVnaW9uXFxcXGJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnB5dGhvbicsXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdhbmQnLFxyXG4gICAgICAgICdhcycsXHJcbiAgICAgICAgJ2Fzc2VydCcsXHJcbiAgICAgICAgJ2JyZWFrJyxcclxuICAgICAgICAnY2xhc3MnLFxyXG4gICAgICAgICdjb250aW51ZScsXHJcbiAgICAgICAgJ2RlZicsXHJcbiAgICAgICAgJ2RlbCcsXHJcbiAgICAgICAgJ2VsaWYnLFxyXG4gICAgICAgICdlbHNlJyxcclxuICAgICAgICAnZXhjZXB0JyxcclxuICAgICAgICAnZXhlYycsXHJcbiAgICAgICAgJ2ZpbmFsbHknLFxyXG4gICAgICAgICdmb3InLFxyXG4gICAgICAgICdmcm9tJyxcclxuICAgICAgICAnZ2xvYmFsJyxcclxuICAgICAgICAnaWYnLFxyXG4gICAgICAgICdpbXBvcnQnLFxyXG4gICAgICAgICdpbicsXHJcbiAgICAgICAgJ2lzJyxcclxuICAgICAgICAnbGFtYmRhJyxcclxuICAgICAgICAnTm9uZScsXHJcbiAgICAgICAgJ25vdCcsXHJcbiAgICAgICAgJ29yJyxcclxuICAgICAgICAncGFzcycsXHJcbiAgICAgICAgJ3ByaW50JyxcclxuICAgICAgICAncmFpc2UnLFxyXG4gICAgICAgICdyZXR1cm4nLFxyXG4gICAgICAgICdzZWxmJyxcclxuICAgICAgICAndHJ5JyxcclxuICAgICAgICAnd2hpbGUnLFxyXG4gICAgICAgICd3aXRoJyxcclxuICAgICAgICAneWllbGQnLFxyXG4gICAgICAgICdpbnQnLFxyXG4gICAgICAgICdmbG9hdCcsXHJcbiAgICAgICAgJ2xvbmcnLFxyXG4gICAgICAgICdjb21wbGV4JyxcclxuICAgICAgICAnaGV4JyxcclxuICAgICAgICAnYWJzJyxcclxuICAgICAgICAnYWxsJyxcclxuICAgICAgICAnYW55JyxcclxuICAgICAgICAnYXBwbHknLFxyXG4gICAgICAgICdiYXNlc3RyaW5nJyxcclxuICAgICAgICAnYmluJyxcclxuICAgICAgICAnYm9vbCcsXHJcbiAgICAgICAgJ2J1ZmZlcicsXHJcbiAgICAgICAgJ2J5dGVhcnJheScsXHJcbiAgICAgICAgJ2NhbGxhYmxlJyxcclxuICAgICAgICAnY2hyJyxcclxuICAgICAgICAnY2xhc3NtZXRob2QnLFxyXG4gICAgICAgICdjbXAnLFxyXG4gICAgICAgICdjb2VyY2UnLFxyXG4gICAgICAgICdjb21waWxlJyxcclxuICAgICAgICAnY29tcGxleCcsXHJcbiAgICAgICAgJ2RlbGF0dHInLFxyXG4gICAgICAgICdkaWN0JyxcclxuICAgICAgICAnZGlyJyxcclxuICAgICAgICAnZGl2bW9kJyxcclxuICAgICAgICAnZW51bWVyYXRlJyxcclxuICAgICAgICAnZXZhbCcsXHJcbiAgICAgICAgJ2V4ZWNmaWxlJyxcclxuICAgICAgICAnZmlsZScsXHJcbiAgICAgICAgJ2ZpbHRlcicsXHJcbiAgICAgICAgJ2Zvcm1hdCcsXHJcbiAgICAgICAgJ2Zyb3plbnNldCcsXHJcbiAgICAgICAgJ2dldGF0dHInLFxyXG4gICAgICAgICdnbG9iYWxzJyxcclxuICAgICAgICAnaGFzYXR0cicsXHJcbiAgICAgICAgJ2hhc2gnLFxyXG4gICAgICAgICdoZWxwJyxcclxuICAgICAgICAnaWQnLFxyXG4gICAgICAgICdpbnB1dCcsXHJcbiAgICAgICAgJ2ludGVybicsXHJcbiAgICAgICAgJ2lzaW5zdGFuY2UnLFxyXG4gICAgICAgICdpc3N1YmNsYXNzJyxcclxuICAgICAgICAnaXRlcicsXHJcbiAgICAgICAgJ2xlbicsXHJcbiAgICAgICAgJ2xvY2FscycsXHJcbiAgICAgICAgJ2xpc3QnLFxyXG4gICAgICAgICdtYXAnLFxyXG4gICAgICAgICdtYXgnLFxyXG4gICAgICAgICdtZW1vcnl2aWV3JyxcclxuICAgICAgICAnbWluJyxcclxuICAgICAgICAnbmV4dCcsXHJcbiAgICAgICAgJ29iamVjdCcsXHJcbiAgICAgICAgJ29jdCcsXHJcbiAgICAgICAgJ29wZW4nLFxyXG4gICAgICAgICdvcmQnLFxyXG4gICAgICAgICdwb3cnLFxyXG4gICAgICAgICdwcmludCcsXHJcbiAgICAgICAgJ3Byb3BlcnR5JyxcclxuICAgICAgICAncmV2ZXJzZWQnLFxyXG4gICAgICAgICdyYW5nZScsXHJcbiAgICAgICAgJ3Jhd19pbnB1dCcsXHJcbiAgICAgICAgJ3JlZHVjZScsXHJcbiAgICAgICAgJ3JlbG9hZCcsXHJcbiAgICAgICAgJ3JlcHInLFxyXG4gICAgICAgICdyZXZlcnNlZCcsXHJcbiAgICAgICAgJ3JvdW5kJyxcclxuICAgICAgICAnc2V0JyxcclxuICAgICAgICAnc2V0YXR0cicsXHJcbiAgICAgICAgJ3NsaWNlJyxcclxuICAgICAgICAnc29ydGVkJyxcclxuICAgICAgICAnc3RhdGljbWV0aG9kJyxcclxuICAgICAgICAnc3RyJyxcclxuICAgICAgICAnc3VtJyxcclxuICAgICAgICAnc3VwZXInLFxyXG4gICAgICAgICd0dXBsZScsXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICd1bmljaHInLFxyXG4gICAgICAgICd1bmljb2RlJyxcclxuICAgICAgICAndmFycycsXHJcbiAgICAgICAgJ3hyYW5nZScsXHJcbiAgICAgICAgJ3ppcCcsXHJcbiAgICAgICAgJ1RydWUnLFxyXG4gICAgICAgICdGYWxzZScsXHJcbiAgICAgICAgJ19fZGljdF9fJyxcclxuICAgICAgICAnX19tZXRob2RzX18nLFxyXG4gICAgICAgICdfX21lbWJlcnNfXycsXHJcbiAgICAgICAgJ19fY2xhc3NfXycsXHJcbiAgICAgICAgJ19fYmFzZXNfXycsXHJcbiAgICAgICAgJ19fbmFtZV9fJyxcclxuICAgICAgICAnX19tcm9fXycsXHJcbiAgICAgICAgJ19fc3ViY2xhc3Nlc19fJyxcclxuICAgICAgICAnX19pbml0X18nLFxyXG4gICAgICAgICdfX2ltcG9ydF9fJ1xyXG4gICAgXSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfVxyXG4gICAgXSxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWy9bLDo7XS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9be31cXFtcXF0oKV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvQFthLXpBLVpdXFx3Ki8sICd0YWcnXSxcclxuICAgICAgICAgICAgWy9bYS16QS1aXVxcdyovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIERlYWwgd2l0aCB3aGl0ZSBzcGFjZSwgaW5jbHVkaW5nIHNpbmdsZSBhbmQgbXVsdGktbGluZSBjb21tZW50c1xyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9cXHMrLywgJ3doaXRlJ10sXHJcbiAgICAgICAgICAgIFsvKF4jLiokKS8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvJycnLywgJ3N0cmluZycsICdAZW5kRG9jU3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXCJcIlwiLywgJ3N0cmluZycsICdAZW5kRGJsRG9jU3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZERvY1N0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teJ10rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL1xcXFwnLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLycnJy8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVuZERibERvY1N0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cXFxcXCIvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXCJcIlwiLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIFJlY29nbml6ZSBoZXgsIG5lZ2F0aXZlcywgZGVjaW1hbHMsIGltYWdpbmFyaWVzLCBsb25ncywgYW5kIHNjaWVudGlmaWMgbm90YXRpb25cclxuICAgICAgICBudW1iZXJzOiBbXHJcbiAgICAgICAgICAgIFsvLT8weChbYWJjZGVmXXxbQUJDREVGXXxcXGQpK1tsTF0/LywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy8tPyhcXGQqXFwuKT9cXGQrKFtlRV1bK1xcLV0/XFxkKyk/W2pKXT9bbExdPy8sICdudW1iZXInXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gUmVjb2duaXplIHN0cmluZ3MsIGluY2x1ZGluZyB0aG9zZSBicm9rZW4gYWNyb3NzIGxpbmVzIHdpdGggXFwgKGJ1dCBub3Qgd2l0aG91dClcclxuICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgIFsvJyQvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuZXNjYXBlJywgJ0BzdHJpbmdCb2R5J10sXHJcbiAgICAgICAgICAgIFsvXCIkLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy5lc2NhcGUnLCAnQGRibFN0cmluZ0JvZHknXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nQm9keTogW1xyXG4gICAgICAgICAgICBbL1teXFxcXCddKyQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9bXlxcXFwnXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9cXFxcJC8sICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGJsU3RyaW5nQm9keTogW1xyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSskLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy9cXFxcJC8sICdzdHJpbmcnXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==