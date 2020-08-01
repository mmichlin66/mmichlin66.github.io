(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js ***!
  \**********************************************************************/
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
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*#pragma\\s+region\\b"),
            end: new RegExp("^\\s*#pragma\\s+endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.cpp',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.angle', open: '<', close: '>' }
    ],
    keywords: [
        'abstract',
        'amp',
        'array',
        'auto',
        'bool',
        'break',
        'case',
        'catch',
        'char',
        'class',
        'const',
        'constexpr',
        'const_cast',
        'continue',
        'cpu',
        'decltype',
        'default',
        'delegate',
        'delete',
        'do',
        'double',
        'dynamic_cast',
        'each',
        'else',
        'enum',
        'event',
        'explicit',
        'export',
        'extern',
        'false',
        'final',
        'finally',
        'float',
        'for',
        'friend',
        'gcnew',
        'generic',
        'goto',
        'if',
        'in',
        'initonly',
        'inline',
        'int',
        'interface',
        'interior_ptr',
        'internal',
        'literal',
        'long',
        'mutable',
        'namespace',
        'new',
        'noexcept',
        'nullptr',
        '__nullptr',
        'operator',
        'override',
        'partial',
        'pascal',
        'pin_ptr',
        'private',
        'property',
        'protected',
        'public',
        'ref',
        'register',
        'reinterpret_cast',
        'restrict',
        'return',
        'safe_cast',
        'sealed',
        'short',
        'signed',
        'sizeof',
        'static',
        'static_assert',
        'static_cast',
        'struct',
        'switch',
        'template',
        'this',
        'thread_local',
        'throw',
        'tile_static',
        'true',
        'try',
        'typedef',
        'typeid',
        'typename',
        'union',
        'unsigned',
        'using',
        'virtual',
        'void',
        'volatile',
        'wchar_t',
        'where',
        'while',
        '_asm',
        '_based',
        '_cdecl',
        '_declspec',
        '_fastcall',
        '_if_exists',
        '_if_not_exists',
        '_inline',
        '_multiple_inheritance',
        '_pascal',
        '_single_inheritance',
        '_stdcall',
        '_virtual_inheritance',
        '_w64',
        '__abstract',
        '__alignof',
        '__asm',
        '__assume',
        '__based',
        '__box',
        '__builtin_alignof',
        '__cdecl',
        '__clrcall',
        '__declspec',
        '__delegate',
        '__event',
        '__except',
        '__fastcall',
        '__finally',
        '__forceinline',
        '__gc',
        '__hook',
        '__identifier',
        '__if_exists',
        '__if_not_exists',
        '__inline',
        '__int128',
        '__int16',
        '__int32',
        '__int64',
        '__int8',
        '__interface',
        '__leave',
        '__m128',
        '__m128d',
        '__m128i',
        '__m256',
        '__m256d',
        '__m256i',
        '__m64',
        '__multiple_inheritance',
        '__newslot',
        '__nogc',
        '__noop',
        '__nounwind',
        '__novtordisp',
        '__pascal',
        '__pin',
        '__pragma',
        '__property',
        '__ptr32',
        '__ptr64',
        '__raise',
        '__restrict',
        '__resume',
        '__sealed',
        '__single_inheritance',
        '__stdcall',
        '__super',
        '__thiscall',
        '__try',
        '__try_cast',
        '__typeof',
        '__unaligned',
        '__unhook',
        '__uuidof',
        '__value',
        '__virtual_inheritance',
        '__w64',
        '__wchar_t'
    ],
    operators: [
        '=', '>', '<', '!', '~', '?', ':',
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
    encoding: /u|u8|U|L/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // C++ 11 Raw String
            [/@encoding?R\"(?:([^ ()\\\t]*))\(/, { token: 'string.raw.begin', next: '@raw.$1' }],
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
            [/^\s*#include/, { token: 'keyword.directive.include', next: '@include' }],
            // Preprocessor directive
            [/^\s*#\s*\w+/, 'keyword'],
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
        raw: [
            [/(.*)(\))(?:([^ ()\\\t]*))(\")/, {
                    cases: {
                        '$3==$S2': ['string.raw', 'string.raw.end', 'string.raw.end', { token: 'string.raw.end', next: '@pop' }],
                        '@default': ['string.raw', 'string.raw', 'string.raw', 'string.raw']
                    }
                }
            ],
            [/.*/, 'string.raw']
        ],
        include: [
            [/(\s*)(<)([^<>]*)(>)/, ['', 'keyword.directive.include.begin', 'string.include.identifier', { token: 'keyword.directive.include.end', next: '@pop' }]],
            [/(\s*)(")([^"]*)(")/, ['', 'keyword.directive.include.begin', 'string.include.identifier', { token: 'keyword.directive.include.end', next: '@pop' }]]
        ]
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2NwcC9jcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3REFBd0Q7QUFDakUsU0FBUywyQ0FBMkM7QUFDcEQ7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUMsWUFBWSxHQUFHO0FBQzNELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVMsbURBQW1EO0FBQzVELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDZDQUE2QztBQUMvRjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0EsOEJBQThCLHVEQUF1RDtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1Rix3Q0FBd0M7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBMEcsdURBQXVEO0FBQ2pLLHlHQUF5Ryx1REFBdUQ7QUFDaEs7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiMC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddLFxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJ10gfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNwcmFnbWFcXFxccytyZWdpb25cXFxcYlwiKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNwcmFnbWFcXFxccytlbmRyZWdpb25cXFxcYlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuY3BwJyxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnLCBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfVxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2Fic3RyYWN0JyxcclxuICAgICAgICAnYW1wJyxcclxuICAgICAgICAnYXJyYXknLFxyXG4gICAgICAgICdhdXRvJyxcclxuICAgICAgICAnYm9vbCcsXHJcbiAgICAgICAgJ2JyZWFrJyxcclxuICAgICAgICAnY2FzZScsXHJcbiAgICAgICAgJ2NhdGNoJyxcclxuICAgICAgICAnY2hhcicsXHJcbiAgICAgICAgJ2NsYXNzJyxcclxuICAgICAgICAnY29uc3QnLFxyXG4gICAgICAgICdjb25zdGV4cHInLFxyXG4gICAgICAgICdjb25zdF9jYXN0JyxcclxuICAgICAgICAnY29udGludWUnLFxyXG4gICAgICAgICdjcHUnLFxyXG4gICAgICAgICdkZWNsdHlwZScsXHJcbiAgICAgICAgJ2RlZmF1bHQnLFxyXG4gICAgICAgICdkZWxlZ2F0ZScsXHJcbiAgICAgICAgJ2RlbGV0ZScsXHJcbiAgICAgICAgJ2RvJyxcclxuICAgICAgICAnZG91YmxlJyxcclxuICAgICAgICAnZHluYW1pY19jYXN0JyxcclxuICAgICAgICAnZWFjaCcsXHJcbiAgICAgICAgJ2Vsc2UnLFxyXG4gICAgICAgICdlbnVtJyxcclxuICAgICAgICAnZXZlbnQnLFxyXG4gICAgICAgICdleHBsaWNpdCcsXHJcbiAgICAgICAgJ2V4cG9ydCcsXHJcbiAgICAgICAgJ2V4dGVybicsXHJcbiAgICAgICAgJ2ZhbHNlJyxcclxuICAgICAgICAnZmluYWwnLFxyXG4gICAgICAgICdmaW5hbGx5JyxcclxuICAgICAgICAnZmxvYXQnLFxyXG4gICAgICAgICdmb3InLFxyXG4gICAgICAgICdmcmllbmQnLFxyXG4gICAgICAgICdnY25ldycsXHJcbiAgICAgICAgJ2dlbmVyaWMnLFxyXG4gICAgICAgICdnb3RvJyxcclxuICAgICAgICAnaWYnLFxyXG4gICAgICAgICdpbicsXHJcbiAgICAgICAgJ2luaXRvbmx5JyxcclxuICAgICAgICAnaW5saW5lJyxcclxuICAgICAgICAnaW50JyxcclxuICAgICAgICAnaW50ZXJmYWNlJyxcclxuICAgICAgICAnaW50ZXJpb3JfcHRyJyxcclxuICAgICAgICAnaW50ZXJuYWwnLFxyXG4gICAgICAgICdsaXRlcmFsJyxcclxuICAgICAgICAnbG9uZycsXHJcbiAgICAgICAgJ211dGFibGUnLFxyXG4gICAgICAgICduYW1lc3BhY2UnLFxyXG4gICAgICAgICduZXcnLFxyXG4gICAgICAgICdub2V4Y2VwdCcsXHJcbiAgICAgICAgJ251bGxwdHInLFxyXG4gICAgICAgICdfX251bGxwdHInLFxyXG4gICAgICAgICdvcGVyYXRvcicsXHJcbiAgICAgICAgJ292ZXJyaWRlJyxcclxuICAgICAgICAncGFydGlhbCcsXHJcbiAgICAgICAgJ3Bhc2NhbCcsXHJcbiAgICAgICAgJ3Bpbl9wdHInLFxyXG4gICAgICAgICdwcml2YXRlJyxcclxuICAgICAgICAncHJvcGVydHknLFxyXG4gICAgICAgICdwcm90ZWN0ZWQnLFxyXG4gICAgICAgICdwdWJsaWMnLFxyXG4gICAgICAgICdyZWYnLFxyXG4gICAgICAgICdyZWdpc3RlcicsXHJcbiAgICAgICAgJ3JlaW50ZXJwcmV0X2Nhc3QnLFxyXG4gICAgICAgICdyZXN0cmljdCcsXHJcbiAgICAgICAgJ3JldHVybicsXHJcbiAgICAgICAgJ3NhZmVfY2FzdCcsXHJcbiAgICAgICAgJ3NlYWxlZCcsXHJcbiAgICAgICAgJ3Nob3J0JyxcclxuICAgICAgICAnc2lnbmVkJyxcclxuICAgICAgICAnc2l6ZW9mJyxcclxuICAgICAgICAnc3RhdGljJyxcclxuICAgICAgICAnc3RhdGljX2Fzc2VydCcsXHJcbiAgICAgICAgJ3N0YXRpY19jYXN0JyxcclxuICAgICAgICAnc3RydWN0JyxcclxuICAgICAgICAnc3dpdGNoJyxcclxuICAgICAgICAndGVtcGxhdGUnLFxyXG4gICAgICAgICd0aGlzJyxcclxuICAgICAgICAndGhyZWFkX2xvY2FsJyxcclxuICAgICAgICAndGhyb3cnLFxyXG4gICAgICAgICd0aWxlX3N0YXRpYycsXHJcbiAgICAgICAgJ3RydWUnLFxyXG4gICAgICAgICd0cnknLFxyXG4gICAgICAgICd0eXBlZGVmJyxcclxuICAgICAgICAndHlwZWlkJyxcclxuICAgICAgICAndHlwZW5hbWUnLFxyXG4gICAgICAgICd1bmlvbicsXHJcbiAgICAgICAgJ3Vuc2lnbmVkJyxcclxuICAgICAgICAndXNpbmcnLFxyXG4gICAgICAgICd2aXJ0dWFsJyxcclxuICAgICAgICAndm9pZCcsXHJcbiAgICAgICAgJ3ZvbGF0aWxlJyxcclxuICAgICAgICAnd2NoYXJfdCcsXHJcbiAgICAgICAgJ3doZXJlJyxcclxuICAgICAgICAnd2hpbGUnLFxyXG4gICAgICAgICdfYXNtJyxcclxuICAgICAgICAnX2Jhc2VkJyxcclxuICAgICAgICAnX2NkZWNsJyxcclxuICAgICAgICAnX2RlY2xzcGVjJyxcclxuICAgICAgICAnX2Zhc3RjYWxsJyxcclxuICAgICAgICAnX2lmX2V4aXN0cycsXHJcbiAgICAgICAgJ19pZl9ub3RfZXhpc3RzJyxcclxuICAgICAgICAnX2lubGluZScsXHJcbiAgICAgICAgJ19tdWx0aXBsZV9pbmhlcml0YW5jZScsXHJcbiAgICAgICAgJ19wYXNjYWwnLFxyXG4gICAgICAgICdfc2luZ2xlX2luaGVyaXRhbmNlJyxcclxuICAgICAgICAnX3N0ZGNhbGwnLFxyXG4gICAgICAgICdfdmlydHVhbF9pbmhlcml0YW5jZScsXHJcbiAgICAgICAgJ193NjQnLFxyXG4gICAgICAgICdfX2Fic3RyYWN0JyxcclxuICAgICAgICAnX19hbGlnbm9mJyxcclxuICAgICAgICAnX19hc20nLFxyXG4gICAgICAgICdfX2Fzc3VtZScsXHJcbiAgICAgICAgJ19fYmFzZWQnLFxyXG4gICAgICAgICdfX2JveCcsXHJcbiAgICAgICAgJ19fYnVpbHRpbl9hbGlnbm9mJyxcclxuICAgICAgICAnX19jZGVjbCcsXHJcbiAgICAgICAgJ19fY2xyY2FsbCcsXHJcbiAgICAgICAgJ19fZGVjbHNwZWMnLFxyXG4gICAgICAgICdfX2RlbGVnYXRlJyxcclxuICAgICAgICAnX19ldmVudCcsXHJcbiAgICAgICAgJ19fZXhjZXB0JyxcclxuICAgICAgICAnX19mYXN0Y2FsbCcsXHJcbiAgICAgICAgJ19fZmluYWxseScsXHJcbiAgICAgICAgJ19fZm9yY2VpbmxpbmUnLFxyXG4gICAgICAgICdfX2djJyxcclxuICAgICAgICAnX19ob29rJyxcclxuICAgICAgICAnX19pZGVudGlmaWVyJyxcclxuICAgICAgICAnX19pZl9leGlzdHMnLFxyXG4gICAgICAgICdfX2lmX25vdF9leGlzdHMnLFxyXG4gICAgICAgICdfX2lubGluZScsXHJcbiAgICAgICAgJ19faW50MTI4JyxcclxuICAgICAgICAnX19pbnQxNicsXHJcbiAgICAgICAgJ19faW50MzInLFxyXG4gICAgICAgICdfX2ludDY0JyxcclxuICAgICAgICAnX19pbnQ4JyxcclxuICAgICAgICAnX19pbnRlcmZhY2UnLFxyXG4gICAgICAgICdfX2xlYXZlJyxcclxuICAgICAgICAnX19tMTI4JyxcclxuICAgICAgICAnX19tMTI4ZCcsXHJcbiAgICAgICAgJ19fbTEyOGknLFxyXG4gICAgICAgICdfX20yNTYnLFxyXG4gICAgICAgICdfX20yNTZkJyxcclxuICAgICAgICAnX19tMjU2aScsXHJcbiAgICAgICAgJ19fbTY0JyxcclxuICAgICAgICAnX19tdWx0aXBsZV9pbmhlcml0YW5jZScsXHJcbiAgICAgICAgJ19fbmV3c2xvdCcsXHJcbiAgICAgICAgJ19fbm9nYycsXHJcbiAgICAgICAgJ19fbm9vcCcsXHJcbiAgICAgICAgJ19fbm91bndpbmQnLFxyXG4gICAgICAgICdfX25vdnRvcmRpc3AnLFxyXG4gICAgICAgICdfX3Bhc2NhbCcsXHJcbiAgICAgICAgJ19fcGluJyxcclxuICAgICAgICAnX19wcmFnbWEnLFxyXG4gICAgICAgICdfX3Byb3BlcnR5JyxcclxuICAgICAgICAnX19wdHIzMicsXHJcbiAgICAgICAgJ19fcHRyNjQnLFxyXG4gICAgICAgICdfX3JhaXNlJyxcclxuICAgICAgICAnX19yZXN0cmljdCcsXHJcbiAgICAgICAgJ19fcmVzdW1lJyxcclxuICAgICAgICAnX19zZWFsZWQnLFxyXG4gICAgICAgICdfX3NpbmdsZV9pbmhlcml0YW5jZScsXHJcbiAgICAgICAgJ19fc3RkY2FsbCcsXHJcbiAgICAgICAgJ19fc3VwZXInLFxyXG4gICAgICAgICdfX3RoaXNjYWxsJyxcclxuICAgICAgICAnX190cnknLFxyXG4gICAgICAgICdfX3RyeV9jYXN0JyxcclxuICAgICAgICAnX190eXBlb2YnLFxyXG4gICAgICAgICdfX3VuYWxpZ25lZCcsXHJcbiAgICAgICAgJ19fdW5ob29rJyxcclxuICAgICAgICAnX191dWlkb2YnLFxyXG4gICAgICAgICdfX3ZhbHVlJyxcclxuICAgICAgICAnX192aXJ0dWFsX2luaGVyaXRhbmNlJyxcclxuICAgICAgICAnX193NjQnLFxyXG4gICAgICAgICdfX3djaGFyX3QnXHJcbiAgICBdLFxyXG4gICAgb3BlcmF0b3JzOiBbXHJcbiAgICAgICAgJz0nLCAnPicsICc8JywgJyEnLCAnficsICc/JywgJzonLFxyXG4gICAgICAgICc9PScsICc8PScsICc+PScsICchPScsICcmJicsICd8fCcsICcrKycsICctLScsXHJcbiAgICAgICAgJysnLCAnLScsICcqJywgJy8nLCAnJicsICd8JywgJ14nLCAnJScsICc8PCcsXHJcbiAgICAgICAgJz4+JywgJz4+PicsICcrPScsICctPScsICcqPScsICcvPScsICcmPScsICd8PScsXHJcbiAgICAgICAgJ149JywgJyU9JywgJzw8PScsICc+Pj0nLCAnPj4+PSdcclxuICAgIF0sXHJcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcclxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXHJcbiAgICBpbnRlZ2Vyc3VmZml4OiAvKGxsfExMfHV8VXxsfEwpPyhsbHxMTHx1fFV8bHxMKT8vLFxyXG4gICAgZmxvYXRzdWZmaXg6IC9bZkZsTF0/LyxcclxuICAgIGVuY29kaW5nOiAvdXx1OHxVfEwvLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIEMrKyAxMSBSYXcgU3RyaW5nXHJcbiAgICAgICAgICAgIFsvQGVuY29kaW5nP1JcXFwiKD86KFteICgpXFxcXFxcdF0qKSlcXCgvLCB7IHRva2VuOiAnc3RyaW5nLnJhdy5iZWdpbicsIG5leHQ6ICdAcmF3LiQxJyB9XSxcclxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXHJcbiAgICAgICAgICAgIFsvW2EtekEtWl9dXFx3Ki8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBbWyBhdHRyaWJ1dGVzIF1dLlxyXG4gICAgICAgICAgICBbL1xcW1xcWy4qXFxdXFxdLywgJ2Fubm90YXRpb24nXSxcclxuICAgICAgICAgICAgWy9eXFxzKiNpbmNsdWRlLywgeyB0b2tlbjogJ2tleXdvcmQuZGlyZWN0aXZlLmluY2x1ZGUnLCBuZXh0OiAnQGluY2x1ZGUnIH1dLFxyXG4gICAgICAgICAgICAvLyBQcmVwcm9jZXNzb3IgZGlyZWN0aXZlXHJcbiAgICAgICAgICAgIFsvXlxccyojXFxzKlxcdysvLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvXFxkKlxcZCtbZUVdKFtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRiddKlswLTlhLWZBLUZdKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvMFswLTcnXSpbMC03XShAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLm9jdGFsJ10sXHJcbiAgICAgICAgICAgIFsvMFtiQl1bMC0xJ10qWzAtMV0oQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5iaW5hcnknXSxcclxuICAgICAgICAgICAgWy9cXGRbXFxkJ10qXFxkKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgWy9cXGQoQGludGVnZXJzdWZmaXgpLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXHJcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcclxuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZyddLFxyXG4gICAgICAgICAgICAvLyBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy9cXC9cXCpcXCooPyFcXC8pLywgJ2NvbW1lbnQuZG9jJywgJ0Bkb2Njb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy9JZGVudGljYWwgY29weSBvZiBjb21tZW50IGFib3ZlLCBleGNlcHQgZm9yIHRoZSBhZGRpdGlvbiBvZiAuZG9jXHJcbiAgICAgICAgZG9jY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQuZG9jJ10sXHJcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQuZG9jJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudC5kb2MnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmF3OiBbXHJcbiAgICAgICAgICAgIFsvKC4qKShcXCkpKD86KFteICgpXFxcXFxcdF0qKSkoXFxcIikvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQzPT0kUzInOiBbJ3N0cmluZy5yYXcnLCAnc3RyaW5nLnJhdy5lbmQnLCAnc3RyaW5nLnJhdy5lbmQnLCB7IHRva2VuOiAnc3RyaW5nLnJhdy5lbmQnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFsnc3RyaW5nLnJhdycsICdzdHJpbmcucmF3JywgJ3N0cmluZy5yYXcnLCAnc3RyaW5nLnJhdyddXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbLy4qLywgJ3N0cmluZy5yYXcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICAgICBbLyhcXHMqKSg8KShbXjw+XSopKD4pLywgWycnLCAna2V5d29yZC5kaXJlY3RpdmUuaW5jbHVkZS5iZWdpbicsICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJywgeyB0b2tlbjogJ2tleXdvcmQuZGlyZWN0aXZlLmluY2x1ZGUuZW5kJywgbmV4dDogJ0Bwb3AnIH1dXSxcclxuICAgICAgICAgICAgWy8oXFxzKikoXCIpKFteXCJdKikoXCIpLywgWycnLCAna2V5d29yZC5kaXJlY3RpdmUuaW5jbHVkZS5iZWdpbicsICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJywgeyB0b2tlbjogJ2tleXdvcmQuZGlyZWN0aXZlLmluY2x1ZGUuZW5kJywgbmV4dDogJ0Bwb3AnIH1dXVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=