(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/'],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: '\'', close: '\'' },
        { open: '"', close: '"' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*#region\\b"),
            end: new RegExp("^\\s*#endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.cs',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    keywords: [
        'extern', 'alias', 'using', 'bool', 'decimal', 'sbyte', 'byte', 'short',
        'ushort', 'int', 'uint', 'long', 'ulong', 'char', 'float', 'double',
        'object', 'dynamic', 'string', 'assembly', 'is', 'as', 'ref',
        'out', 'this', 'base', 'new', 'typeof', 'void', 'checked', 'unchecked',
        'default', 'delegate', 'var', 'const', 'if', 'else', 'switch', 'case',
        'while', 'do', 'for', 'foreach', 'in', 'break', 'continue', 'goto',
        'return', 'throw', 'try', 'catch', 'finally', 'lock', 'yield', 'from',
        'let', 'where', 'join', 'on', 'equals', 'into', 'orderby', 'ascending',
        'descending', 'select', 'group', 'by', 'namespace', 'partial', 'class',
        'field', 'event', 'method', 'param', 'property', 'public', 'protected',
        'internal', 'private', 'abstract', 'sealed', 'static', 'struct', 'readonly',
        'volatile', 'virtual', 'override', 'params', 'get', 'set', 'add', 'remove',
        'operator', 'true', 'false', 'implicit', 'explicit', 'interface', 'enum',
        'null', 'async', 'await', 'fixed', 'sizeof', 'stackalloc', 'unsafe', 'nameof',
        'when'
    ],
    namespaceFollows: [
        'namespace', 'using',
    ],
    parenFollows: [
        'if', 'for', 'while', 'switch', 'foreach', 'using', 'catch', 'when'
    ],
    operators: [
        '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',
        '+', '-', '*', '/', '%', '!', '~', '++', '--', '+=',
        '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>', '=>'
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // escape sequences
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/\@?[a-zA-Z_]\w*/, {
                    cases: {
                        '@namespaceFollows': { token: 'keyword.$0', next: '@namespace' },
                        '@keywords': { token: 'keyword.$0', next: '@qualified' },
                        '@default': { token: 'identifier', next: '@qualified' }
                    }
                }],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/}/, {
                    cases: {
                        '$S2==interpolatedstring': { token: 'string.quote', next: '@pop' },
                        '$S2==litinterpstring': { token: 'string.quote', next: '@pop' },
                        '@default': '@brackets'
                    }
                }],
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }],
            // numbers
            [/[0-9_]*\.[0-9_]+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]+/, 'number.hex'],
            [/0[bB][01_]+/, 'number.hex'],
            [/[0-9_]+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, { token: 'string.quote', next: '@string' }],
            [/\$\@"/, { token: 'string.quote', next: '@litinterpstring' }],
            [/\@"/, { token: 'string.quote', next: '@litstring' }],
            [/\$"/, { token: 'string.quote', next: '@interpolatedstring' }],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        qualified: [
            [/[a-zA-Z_][\w]*/, {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }],
            [/\./, 'delimiter'],
            ['', '', '@pop'],
        ],
        namespace: [
            { include: '@whitespace' },
            [/[A-Z]\w*/, 'namespace'],
            [/[\.=]/, 'delimiter'],
            ['', '', '@pop'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/,    'comment', '@push' ],    // no nested comments :-(
            ['\\*/', 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        litstring: [
            [/[^"]+/, 'string'],
            [/""/, 'string.escape'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        litinterpstring: [
            [/[^"{]+/, 'string'],
            [/""/, 'string.escape'],
            [/{{/, 'string.escape'],
            [/}}/, 'string.escape'],
            [/{/, { token: 'string.quote', next: 'root.litinterpstring' }],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        interpolatedstring: [
            [/[^\\"{]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/{{/, 'string.escape'],
            [/}}/, 'string.escape'],
            [/{/, { token: 'string.quote', next: 'root.interpolatedstring' }],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        whitespace: [
            [/^[ \t\v\f]*#((r)|(load))(?=\s)/, 'directive.csx'],
            [/^[ \t\v\f]*#\w.*$/, 'namespace.cpp'],
            [/[ \t\v\f\r\n]+/, ''],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2NzaGFycC9jc2hhcnAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQLG9FQUFvRSxJQUFJLE1BQU07QUFDOUU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTLHNEQUFzRDtBQUMvRDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSw2QkFBNkI7QUFDM0QsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUyx3REFBd0Q7QUFDakUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMENBQTBDO0FBQ3hGLHNDQUFzQywwQ0FBMEM7QUFDaEYscUNBQXFDO0FBQ3JDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxvREFBb0Qsc0NBQXNDO0FBQzFGLGlEQUFpRCxzQ0FBc0M7QUFDdkY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsbUJBQW1CLHlDQUF5QztBQUM1RCx1QkFBdUIsa0RBQWtEO0FBQ3pFLHFCQUFxQiw0Q0FBNEM7QUFDakUscUJBQXFCLHFEQUFxRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGVBQWUsSUFBSSxzREFBc0Q7QUFDekUsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGVBQWUsSUFBSSx5REFBeUQ7QUFDNUUsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6IjExLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcI1xcJFxcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddLFxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ10sXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqI3JlZ2lvblxcXFxiXCIpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqI2VuZHJlZ2lvblxcXFxiXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5jcycsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdleHRlcm4nLCAnYWxpYXMnLCAndXNpbmcnLCAnYm9vbCcsICdkZWNpbWFsJywgJ3NieXRlJywgJ2J5dGUnLCAnc2hvcnQnLFxyXG4gICAgICAgICd1c2hvcnQnLCAnaW50JywgJ3VpbnQnLCAnbG9uZycsICd1bG9uZycsICdjaGFyJywgJ2Zsb2F0JywgJ2RvdWJsZScsXHJcbiAgICAgICAgJ29iamVjdCcsICdkeW5hbWljJywgJ3N0cmluZycsICdhc3NlbWJseScsICdpcycsICdhcycsICdyZWYnLFxyXG4gICAgICAgICdvdXQnLCAndGhpcycsICdiYXNlJywgJ25ldycsICd0eXBlb2YnLCAndm9pZCcsICdjaGVja2VkJywgJ3VuY2hlY2tlZCcsXHJcbiAgICAgICAgJ2RlZmF1bHQnLCAnZGVsZWdhdGUnLCAndmFyJywgJ2NvbnN0JywgJ2lmJywgJ2Vsc2UnLCAnc3dpdGNoJywgJ2Nhc2UnLFxyXG4gICAgICAgICd3aGlsZScsICdkbycsICdmb3InLCAnZm9yZWFjaCcsICdpbicsICdicmVhaycsICdjb250aW51ZScsICdnb3RvJyxcclxuICAgICAgICAncmV0dXJuJywgJ3Rocm93JywgJ3RyeScsICdjYXRjaCcsICdmaW5hbGx5JywgJ2xvY2snLCAneWllbGQnLCAnZnJvbScsXHJcbiAgICAgICAgJ2xldCcsICd3aGVyZScsICdqb2luJywgJ29uJywgJ2VxdWFscycsICdpbnRvJywgJ29yZGVyYnknLCAnYXNjZW5kaW5nJyxcclxuICAgICAgICAnZGVzY2VuZGluZycsICdzZWxlY3QnLCAnZ3JvdXAnLCAnYnknLCAnbmFtZXNwYWNlJywgJ3BhcnRpYWwnLCAnY2xhc3MnLFxyXG4gICAgICAgICdmaWVsZCcsICdldmVudCcsICdtZXRob2QnLCAncGFyYW0nLCAncHJvcGVydHknLCAncHVibGljJywgJ3Byb3RlY3RlZCcsXHJcbiAgICAgICAgJ2ludGVybmFsJywgJ3ByaXZhdGUnLCAnYWJzdHJhY3QnLCAnc2VhbGVkJywgJ3N0YXRpYycsICdzdHJ1Y3QnLCAncmVhZG9ubHknLFxyXG4gICAgICAgICd2b2xhdGlsZScsICd2aXJ0dWFsJywgJ292ZXJyaWRlJywgJ3BhcmFtcycsICdnZXQnLCAnc2V0JywgJ2FkZCcsICdyZW1vdmUnLFxyXG4gICAgICAgICdvcGVyYXRvcicsICd0cnVlJywgJ2ZhbHNlJywgJ2ltcGxpY2l0JywgJ2V4cGxpY2l0JywgJ2ludGVyZmFjZScsICdlbnVtJyxcclxuICAgICAgICAnbnVsbCcsICdhc3luYycsICdhd2FpdCcsICdmaXhlZCcsICdzaXplb2YnLCAnc3RhY2thbGxvYycsICd1bnNhZmUnLCAnbmFtZW9mJyxcclxuICAgICAgICAnd2hlbidcclxuICAgIF0sXHJcbiAgICBuYW1lc3BhY2VGb2xsb3dzOiBbXHJcbiAgICAgICAgJ25hbWVzcGFjZScsICd1c2luZycsXHJcbiAgICBdLFxyXG4gICAgcGFyZW5Gb2xsb3dzOiBbXHJcbiAgICAgICAgJ2lmJywgJ2ZvcicsICd3aGlsZScsICdzd2l0Y2gnLCAnZm9yZWFjaCcsICd1c2luZycsICdjYXRjaCcsICd3aGVuJ1xyXG4gICAgXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICc9JywgJz8/JywgJ3x8JywgJyYmJywgJ3wnLCAnXicsICcmJywgJz09JywgJyE9JywgJzw9JywgJz49JywgJzw8JyxcclxuICAgICAgICAnKycsICctJywgJyonLCAnLycsICclJywgJyEnLCAnficsICcrKycsICctLScsICcrPScsXHJcbiAgICAgICAgJy09JywgJyo9JywgJy89JywgJyU9JywgJyY9JywgJ3w9JywgJ149JywgJzw8PScsICc+Pj0nLCAnPj4nLCAnPT4nXHJcbiAgICBdLFxyXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXHJcbiAgICAvLyBlc2NhcGUgc2VxdWVuY2VzXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbL1xcQD9bYS16QS1aX11cXHcqLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAbmFtZXNwYWNlRm9sbG93cyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJywgbmV4dDogJ0BuYW1lc3BhY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcsIG5leHQ6ICdAcXVhbGlmaWVkJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnaWRlbnRpZmllcicsIG5leHQ6ICdAcXVhbGlmaWVkJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xyXG4gICAgICAgICAgICBbL30vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09aW50ZXJwb2xhdGVkc3RyaW5nJzogeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1saXRpbnRlcnBzdHJpbmcnOiB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdAYnJhY2tldHMnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyc1xyXG4gICAgICAgICAgICBbL1swLTlfXSpcXC5bMC05X10rKFtlRV1bXFwtK10/XFxkKyk/W2ZGZERdPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZfXSsvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbLzBbYkJdWzAxX10rLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy9bMC05X10rLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXHJcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcclxuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHN0cmluZycgfV0sXHJcbiAgICAgICAgICAgIFsvXFwkXFxAXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BsaXRpbnRlcnBzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICBbL1xcQFwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAbGl0c3RyaW5nJyB9XSxcclxuICAgICAgICAgICAgWy9cXCRcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQGludGVycG9sYXRlZHN0cmluZycgfV0sXHJcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLygnKShAZXNjYXBlcykoJykvLCBbJ3N0cmluZycsICdzdHJpbmcuZXNjYXBlJywgJ3N0cmluZyddXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHF1YWxpZmllZDogW1xyXG4gICAgICAgICAgICBbL1thLXpBLVpfXVtcXHddKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1xcLi8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWycnLCAnJywgJ0Bwb3AnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG5hbWVzcGFjZTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgWy9bQS1aXVxcdyovLCAnbmFtZXNwYWNlJ10sXHJcbiAgICAgICAgICAgIFsvW1xcLj1dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnQHBvcCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgLy8gWy9cXC9cXCovLCAgICAnY29tbWVudCcsICdAcHVzaCcgXSwgICAgLy8gbm8gbmVzdGVkIGNvbW1lbnRzIDotKFxyXG4gICAgICAgICAgICBbJ1xcXFwqLycsICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxpdHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9cIlwiLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxpdGludGVycHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXCJ7XSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvXCJcIi8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsve3svLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL319LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy97LywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdyb290LmxpdGludGVycHN0cmluZycgfV0sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbnRlcnBvbGF0ZWRzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIntdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsve3svLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL319LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy97LywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdyb290LmludGVycG9sYXRlZHN0cmluZycgfV0sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvXlsgXFx0XFx2XFxmXSojKChyKXwobG9hZCkpKD89XFxzKS8sICdkaXJlY3RpdmUuY3N4J10sXHJcbiAgICAgICAgICAgIFsvXlsgXFx0XFx2XFxmXSojXFx3LiokLywgJ25hbWVzcGFjZS5jcHAnXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcdlxcZlxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==