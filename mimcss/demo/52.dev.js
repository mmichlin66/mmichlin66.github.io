(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.js ***!
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
        lineComment: '//',
        blockComment: ['/*', '*/'],
    },
    brackets: [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']],
    autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.aes',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.angle', open: '<', close: '>' }
    ],
    keywords: [
        // Main keywords
        'contract',
        'library',
        'entrypoint',
        'function',
        'stateful',
        'state',
        'hash',
        'signature',
        'tuple',
        'list',
        'address',
        'string',
        'bool',
        'int',
        'record',
        'datatype',
        'type',
        'option',
        'oracle',
        'oracle_query',
        'Call',
        'Bits',
        'Bytes',
        'Oracle',
        'String',
        'Crypto',
        'Address',
        'Auth',
        'Chain',
        'None',
        'Some',
        'bits',
        'bytes',
        'event',
        'let',
        'map',
        'private',
        'public',
        'true',
        'false',
        'var',
        'if',
        'else',
        'throw'
    ],
    operators: [
        '=', '>', '<', '!', '~', '?', '::', ':',
        '==', '<=', '>=', '!=', '&&', '||', '++', '--',
        '+', '-', '*', '/', '&', '|', '^', '%', '<<',
        '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',
        '^=', '%=', '<<=', '>>=', '>>>='
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
    floatsuffix: /[fFlL]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-zA-Z_]\w*/, {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }],
            // whitespace
            { include: '@whitespace' },
            // [[ attributes ]].
            [/\[\[.*\]\]/, 'annotation'],
            // Preprocessor directive
            [/^\s*#\w+/, 'keyword'],
            //DataTypes
            [/int\d*/, 'keyword'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],
            [/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],
            [/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],
            [/\d[\d']*\d(@integersuffix)/, 'number'],
            [/\d(@integersuffix)/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        //Identical copy of comment above, except for the addition of .doc
        doccomment: [
            [/[^\/*]+/, 'comment.doc'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NvcGhpYS9zb3BoaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQkFBa0IsS0FBSztBQUN2QjtBQUNBLFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsU0FBUyxZQUFZLGlDQUFpQztBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQyxZQUFZLEdBQUc7QUFDM0QsU0FBUyx3REFBd0Q7QUFDakUsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiNTIuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1sneycsICd9J10sIFsnWycsICddJ10sIFsnKCcsICcpJ10sIFsnPCcsICc+J11dLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgIF1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuYWVzJyxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnLCBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfVxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgLy8gTWFpbiBrZXl3b3Jkc1xyXG4gICAgICAgICdjb250cmFjdCcsXHJcbiAgICAgICAgJ2xpYnJhcnknLFxyXG4gICAgICAgICdlbnRyeXBvaW50JyxcclxuICAgICAgICAnZnVuY3Rpb24nLFxyXG4gICAgICAgICdzdGF0ZWZ1bCcsXHJcbiAgICAgICAgJ3N0YXRlJyxcclxuICAgICAgICAnaGFzaCcsXHJcbiAgICAgICAgJ3NpZ25hdHVyZScsXHJcbiAgICAgICAgJ3R1cGxlJyxcclxuICAgICAgICAnbGlzdCcsXHJcbiAgICAgICAgJ2FkZHJlc3MnLFxyXG4gICAgICAgICdzdHJpbmcnLFxyXG4gICAgICAgICdib29sJyxcclxuICAgICAgICAnaW50JyxcclxuICAgICAgICAncmVjb3JkJyxcclxuICAgICAgICAnZGF0YXR5cGUnLFxyXG4gICAgICAgICd0eXBlJyxcclxuICAgICAgICAnb3B0aW9uJyxcclxuICAgICAgICAnb3JhY2xlJyxcclxuICAgICAgICAnb3JhY2xlX3F1ZXJ5JyxcclxuICAgICAgICAnQ2FsbCcsXHJcbiAgICAgICAgJ0JpdHMnLFxyXG4gICAgICAgICdCeXRlcycsXHJcbiAgICAgICAgJ09yYWNsZScsXHJcbiAgICAgICAgJ1N0cmluZycsXHJcbiAgICAgICAgJ0NyeXB0bycsXHJcbiAgICAgICAgJ0FkZHJlc3MnLFxyXG4gICAgICAgICdBdXRoJyxcclxuICAgICAgICAnQ2hhaW4nLFxyXG4gICAgICAgICdOb25lJyxcclxuICAgICAgICAnU29tZScsXHJcbiAgICAgICAgJ2JpdHMnLFxyXG4gICAgICAgICdieXRlcycsXHJcbiAgICAgICAgJ2V2ZW50JyxcclxuICAgICAgICAnbGV0JyxcclxuICAgICAgICAnbWFwJyxcclxuICAgICAgICAncHJpdmF0ZScsXHJcbiAgICAgICAgJ3B1YmxpYycsXHJcbiAgICAgICAgJ3RydWUnLFxyXG4gICAgICAgICdmYWxzZScsXHJcbiAgICAgICAgJ3ZhcicsXHJcbiAgICAgICAgJ2lmJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ3Rocm93J1xyXG4gICAgXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICc9JywgJz4nLCAnPCcsICchJywgJ34nLCAnPycsICc6OicsICc6JyxcclxuICAgICAgICAnPT0nLCAnPD0nLCAnPj0nLCAnIT0nLCAnJiYnLCAnfHwnLCAnKysnLCAnLS0nLFxyXG4gICAgICAgICcrJywgJy0nLCAnKicsICcvJywgJyYnLCAnfCcsICdeJywgJyUnLCAnPDwnLFxyXG4gICAgICAgICc+PicsICc+Pj4nLCAnKz0nLCAnLT0nLCAnKj0nLCAnLz0nLCAnJj0nLCAnfD0nLFxyXG4gICAgICAgICdePScsICclPScsICc8PD0nLCAnPj49JywgJz4+Pj0nXHJcbiAgICBdLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgaW50ZWdlcnN1ZmZpeDogLyhsbHxMTHx1fFV8bHxMKT8obGx8TEx8dXxVfGx8TCk/LyxcclxuICAgIGZsb2F0c3VmZml4OiAvW2ZGbExdPy8sXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXHJcbiAgICAgICAgICAgIFsvW2EtekEtWl9dXFx3Ki8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBbWyBhdHRyaWJ1dGVzIF1dLlxyXG4gICAgICAgICAgICBbL1xcW1xcWy4qXFxdXFxdLywgJ2Fubm90YXRpb24nXSxcclxuICAgICAgICAgICAgLy8gUHJlcHJvY2Vzc29yIGRpcmVjdGl2ZVxyXG4gICAgICAgICAgICBbL15cXHMqI1xcdysvLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICAvL0RhdGFUeXBlc1xyXG4gICAgICAgICAgICBbL2ludFxcZCovLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvXFxkKlxcZCtbZUVdKFtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRiddKlswLTlhLWZBLUZdKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvMFswLTcnXSpbMC03XShAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLm9jdGFsJ10sXHJcbiAgICAgICAgICAgIFsvMFtiQl1bMC0xJ10qWzAtMV0oQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5iaW5hcnknXSxcclxuICAgICAgICAgICAgWy9cXGRbXFxkJ10qXFxkKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgWy9cXGQoQGludGVnZXJzdWZmaXgpLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXHJcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcclxuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZyddLFxyXG4gICAgICAgICAgICAvLyBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy9cXC9cXCpcXCooPyFcXC8pLywgJ2NvbW1lbnQuZG9jJywgJ0Bkb2Njb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy9JZGVudGljYWwgY29weSBvZiBjb21tZW50IGFib3ZlLCBleGNlcHQgZm9yIHRoZSBhZGRpdGlvbiBvZiAuZG9jXHJcbiAgICAgICAgZG9jY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQuZG9jJ10sXHJcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQuZG9jJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudC5kb2MnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9