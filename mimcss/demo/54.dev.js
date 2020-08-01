(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js ***!
  \********************************************************************/
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
        blockComment: ['(*', '*)'],
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['var', 'end_var'],
        ['var_input', 'end_var'],
        ['var_output', 'end_var'],
        ['var_in_out', 'end_var'],
        ['var_temp', 'end_var'],
        ['var_global', 'end_var'],
        ['var_access', 'end_var'],
        ['var_external', 'end_var'],
        ['type', 'end_type'],
        ['struct', 'end_struct'],
        ['program', 'end_program'],
        ['function', 'end_function'],
        ['function_block', 'end_function_block'],
        ['action', 'end_action'],
        ['step', 'end_step'],
        ['initial_step', 'end_step'],
        ['transaction', 'end_transaction'],
        ['configuration', 'end_configuration'],
        ['tcp', 'end_tcp'],
        ['recource', 'end_recource'],
        ['channel', 'end_channel'],
        ['library', 'end_library'],
        ['folder', 'end_folder'],
        ['binaries', 'end_binaries'],
        ['includes', 'end_includes'],
        ['sources', 'end_sources']
    ],
    autoClosingPairs: [
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: '/*', close: '*/' },
        { open: '\'', close: '\'', notIn: ['string_sq'] },
        { open: '"', close: '"', notIn: ['string_dq'] },
        { open: 'var_input', close: 'end_var' },
        { open: 'var_output', close: 'end_var' },
        { open: 'var_in_out', close: 'end_var' },
        { open: 'var_temp', close: 'end_var' },
        { open: 'var_global', close: 'end_var' },
        { open: 'var_access', close: 'end_var' },
        { open: 'var_external', close: 'end_var' },
        { open: 'type', close: 'end_type' },
        { open: 'struct', close: 'end_struct' },
        { open: 'program', close: 'end_program' },
        { open: 'function', close: 'end_function' },
        { open: 'function_block', close: 'end_function_block' },
        { open: 'action', close: 'end_action' },
        { open: 'step', close: 'end_step' },
        { open: 'initial_step', close: 'end_step' },
        { open: 'transaction', close: 'end_transaction' },
        { open: 'configuration', close: 'end_configuration' },
        { open: 'tcp', close: 'end_tcp' },
        { open: 'recource', close: 'end_recource' },
        { open: 'channel', close: 'end_channel' },
        { open: 'library', close: 'end_library' },
        { open: 'folder', close: 'end_folder' },
        { open: 'binaries', close: 'end_binaries' },
        { open: 'includes', close: 'end_includes' },
        { open: 'sources', close: 'end_sources' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        { open: 'var', close: 'end_var' },
        { open: 'var_input', close: 'end_var' },
        { open: 'var_output', close: 'end_var' },
        { open: 'var_in_out', close: 'end_var' },
        { open: 'var_temp', close: 'end_var' },
        { open: 'var_global', close: 'end_var' },
        { open: 'var_access', close: 'end_var' },
        { open: 'var_external', close: 'end_var' },
        { open: 'type', close: 'end_type' },
        { open: 'struct', close: 'end_struct' },
        { open: 'program', close: 'end_program' },
        { open: 'function', close: 'end_function' },
        { open: 'function_block', close: 'end_function_block' },
        { open: 'action', close: 'end_action' },
        { open: 'step', close: 'end_step' },
        { open: 'initial_step', close: 'end_step' },
        { open: 'transaction', close: 'end_transaction' },
        { open: 'configuration', close: 'end_configuration' },
        { open: 'tcp', close: 'end_tcp' },
        { open: 'recource', close: 'end_recource' },
        { open: 'channel', close: 'end_channel' },
        { open: 'library', close: 'end_library' },
        { open: 'folder', close: 'end_folder' },
        { open: 'binaries', close: 'end_binaries' },
        { open: 'includes', close: 'end_includes' },
        { open: 'sources', close: 'end_sources' }
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
    tokenPostfix: '.st',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: ['if', 'end_if', 'elsif', 'else', 'case', 'of', 'to', '__try', '__catch', '__finally',
        'do', 'with', 'by', 'while', 'repeat', 'end_while', 'end_repeat', 'end_case',
        'for', 'end_for', 'task', 'retain', 'non_retain', 'constant', 'with', 'at',
        'exit', 'return', 'interval', 'priority', 'address', 'port', 'on_channel',
        'then', 'iec', 'file', 'uses', 'version', 'packagetype', 'displayname',
        'copyright', 'summary', 'vendor', 'common_source', 'from', 'extends'],
    constant: ['false', 'true', 'null'],
    defineKeywords: [
        'var', 'var_input', 'var_output', 'var_in_out', 'var_temp', 'var_global',
        'var_access', 'var_external', 'end_var',
        'type', 'end_type', 'struct', 'end_struct', 'program', 'end_program',
        'function', 'end_function', 'function_block', 'end_function_block',
        'interface', 'end_interface', 'method', 'end_method',
        'property', 'end_property', 'namespace', 'end_namespace',
        'configuration', 'end_configuration', 'tcp', 'end_tcp', 'resource',
        'end_resource', 'channel', 'end_channel', 'library', 'end_library',
        'folder', 'end_folder', 'binaries', 'end_binaries', 'includes',
        'end_includes', 'sources', 'end_sources',
        'action', 'end_action', 'step', 'initial_step', 'end_step', 'transaction', 'end_transaction'
    ],
    typeKeywords: ['int', 'sint', 'dint', 'lint', 'usint', 'uint', 'udint', 'ulint',
        'real', 'lreal', 'time', 'date', 'time_of_day', 'date_and_time', 'string',
        'bool', 'byte', 'word', 'dword', 'array', 'pointer', 'lword'],
    operators: ['=', '>', '<', ':', ':=', '<=', '>=', '<>', '&', '+', '-', '*', '**',
        'MOD', '^', 'or', 'and', 'not', 'xor', 'abs', 'acos', 'asin', 'atan', 'cos',
        'exp', 'expt', 'ln', 'log', 'sin', 'sqrt', 'tan', 'sel', 'max', 'min', 'limit',
        'mux', 'shl', 'shr', 'rol', 'ror', 'indexof', 'sizeof', 'adr', 'adrinst',
        'bitadr', 'is_valid', 'ref', 'ref_to'],
    builtinVariables: [],
    builtinFunctions: ['sr', 'rs', 'tp', 'ton', 'tof', 'eq', 'ge', 'le', 'lt',
        'ne', 'round', 'trunc', 'ctd', 'сtu', 'ctud', 'r_trig', 'f_trig',
        'move', 'concat', 'delete', 'find', 'insert', 'left', 'len', 'replace',
        'right', 'rtc'],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/(\.\.)/, 'delimiter'],
            [/\b(16#[0-9A-Fa-f\_]*)+\b/, 'number.hex'],
            [/\b(2#[01\_]+)+\b/, 'number.binary'],
            [/\b(8#[0-9\_]*)+\b/, 'number.octal'],
            [/\b\d*\.\d+([eE][\-+]?\d+)?\b/, 'number.float'],
            [/\b(L?REAL)#[0-9\_\.e]+\b/, 'number.float'],
            [/\b(BYTE|(?:D|L)?WORD|U?(?:S|D|L)?INT)#[0-9\_]+\b/, 'number'],
            [/\d+/, 'number'],
            [/\b(T|DT|TOD)#[0-9:-_shmyd]+\b/, 'tag'],
            [/\%(I|Q|M)(X|B|W|D|L)[0-9\.]+/, 'tag'],
            [/\%(I|Q|M)[0-9\.]*/, 'tag'],
            [/\b[A-Za-z]{1,6}#[0-9]+\b/, 'tag'],
            [/\b(TO_|CTU_|CTD_|CTUD_|MUX_|SEL_)[A_Za-z]+\b/, 'predefined'],
            [/\b[A_Za-z]+(_TO_)[A_Za-z]+\b/, 'predefined'],
            [/[;]/, 'delimiter'],
            [/[.]/, { token: 'delimiter', next: '@params' }],
            // identifiers and keywords
            [/[a-zA-Z_]\w*/, {
                    cases: {
                        '@operators': 'operators',
                        '@keywords': 'keyword',
                        '@typeKeywords': 'type',
                        '@defineKeywords': 'variable',
                        '@constant': 'constant',
                        '@builtinVariables': 'predefined',
                        '@builtinFunctions': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            { include: '@whitespace' },
            [/[{}()\[\]]/, '@brackets'],
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string_dq' }],
            [/'/, { token: 'string.quote', bracket: '@open', next: '@string_sq' }],
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        params: [
            [/\b[A-Za-z0-9_]+\b(?=\()/, { token: 'identifier', next: '@pop' }],
            [/\b[A-Za-z0-9_]+\b/, 'variable.name', '@pop']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\/\*/, 'comment', '@push'],
            ["\\*/", 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        comment2: [
            [/[^\(*]+/, 'comment'],
            [/\(\*/, 'comment', '@push'],
            ["\\*\\)", 'comment', '@pop'],
            [/[\(*]/, 'comment']
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\/.*$/, 'comment'],
            [/\/\*/, 'comment', '@comment'],
            [/\(\*/, 'comment', '@comment2'],
        ],
        string_dq: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        string_sq: [
            [/[^\\']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3N0L3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLGdEQUFnRDtBQUN6RCxTQUFTLDhDQUE4QztBQUN2RCxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLHVDQUF1QztBQUNoRCxTQUFTLHVDQUF1QztBQUNoRCxTQUFTLHFDQUFxQztBQUM5QyxTQUFTLHVDQUF1QztBQUNoRCxTQUFTLHVDQUF1QztBQUNoRCxTQUFTLHlDQUF5QztBQUNsRCxTQUFTLGtDQUFrQztBQUMzQyxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLHdDQUF3QztBQUNqRCxTQUFTLDBDQUEwQztBQUNuRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLGtDQUFrQztBQUMzQyxTQUFTLDBDQUEwQztBQUNuRCxTQUFTLGdEQUFnRDtBQUN6RCxTQUFTLG9EQUFvRDtBQUM3RCxTQUFTLGdDQUFnQztBQUN6QyxTQUFTLDBDQUEwQztBQUNuRCxTQUFTLHdDQUF3QztBQUNqRCxTQUFTLHdDQUF3QztBQUNqRCxTQUFTLHNDQUFzQztBQUMvQyxTQUFTLDBDQUEwQztBQUNuRCxTQUFTLDBDQUEwQztBQUNuRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUyx1Q0FBdUM7QUFDaEQsU0FBUyx1Q0FBdUM7QUFDaEQsU0FBUyxxQ0FBcUM7QUFDOUMsU0FBUyx1Q0FBdUM7QUFDaEQsU0FBUyx1Q0FBdUM7QUFDaEQsU0FBUyx5Q0FBeUM7QUFDbEQsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUyx3Q0FBd0M7QUFDakQsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUyxrQ0FBa0M7QUFDM0MsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUyxnREFBZ0Q7QUFDekQsU0FBUyxvREFBb0Q7QUFDN0QsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUyx3Q0FBd0M7QUFDakQsU0FBUyx3Q0FBd0M7QUFDakQsU0FBUyxzQ0FBc0M7QUFDL0MsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUywwQ0FBMEM7QUFDbkQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUMsWUFBWSxHQUFHO0FBQzNELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJO0FBQzdCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSx5QkFBeUI7QUFDdEMsaUJBQWlCO0FBQ2pCO0FBQ0EsbUJBQW1CLDhEQUE4RDtBQUNqRixtQkFBbUIsOERBQThEO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0NBQW9DO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBeUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBeUQ7QUFDNUU7QUFDQTtBQUNBIiwiZmlsZSI6IjU0LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJygqJywgJyopJ10sXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXSxcclxuICAgICAgICBbJ3ZhcicsICdlbmRfdmFyJ10sXHJcbiAgICAgICAgWyd2YXJfaW5wdXQnLCAnZW5kX3ZhciddLFxyXG4gICAgICAgIFsndmFyX291dHB1dCcsICdlbmRfdmFyJ10sXHJcbiAgICAgICAgWyd2YXJfaW5fb3V0JywgJ2VuZF92YXInXSxcclxuICAgICAgICBbJ3Zhcl90ZW1wJywgJ2VuZF92YXInXSxcclxuICAgICAgICBbJ3Zhcl9nbG9iYWwnLCAnZW5kX3ZhciddLFxyXG4gICAgICAgIFsndmFyX2FjY2VzcycsICdlbmRfdmFyJ10sXHJcbiAgICAgICAgWyd2YXJfZXh0ZXJuYWwnLCAnZW5kX3ZhciddLFxyXG4gICAgICAgIFsndHlwZScsICdlbmRfdHlwZSddLFxyXG4gICAgICAgIFsnc3RydWN0JywgJ2VuZF9zdHJ1Y3QnXSxcclxuICAgICAgICBbJ3Byb2dyYW0nLCAnZW5kX3Byb2dyYW0nXSxcclxuICAgICAgICBbJ2Z1bmN0aW9uJywgJ2VuZF9mdW5jdGlvbiddLFxyXG4gICAgICAgIFsnZnVuY3Rpb25fYmxvY2snLCAnZW5kX2Z1bmN0aW9uX2Jsb2NrJ10sXHJcbiAgICAgICAgWydhY3Rpb24nLCAnZW5kX2FjdGlvbiddLFxyXG4gICAgICAgIFsnc3RlcCcsICdlbmRfc3RlcCddLFxyXG4gICAgICAgIFsnaW5pdGlhbF9zdGVwJywgJ2VuZF9zdGVwJ10sXHJcbiAgICAgICAgWyd0cmFuc2FjdGlvbicsICdlbmRfdHJhbnNhY3Rpb24nXSxcclxuICAgICAgICBbJ2NvbmZpZ3VyYXRpb24nLCAnZW5kX2NvbmZpZ3VyYXRpb24nXSxcclxuICAgICAgICBbJ3RjcCcsICdlbmRfdGNwJ10sXHJcbiAgICAgICAgWydyZWNvdXJjZScsICdlbmRfcmVjb3VyY2UnXSxcclxuICAgICAgICBbJ2NoYW5uZWwnLCAnZW5kX2NoYW5uZWwnXSxcclxuICAgICAgICBbJ2xpYnJhcnknLCAnZW5kX2xpYnJhcnknXSxcclxuICAgICAgICBbJ2ZvbGRlcicsICdlbmRfZm9sZGVyJ10sXHJcbiAgICAgICAgWydiaW5hcmllcycsICdlbmRfYmluYXJpZXMnXSxcclxuICAgICAgICBbJ2luY2x1ZGVzJywgJ2VuZF9pbmNsdWRlcyddLFxyXG4gICAgICAgIFsnc291cmNlcycsICdlbmRfc291cmNlcyddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJy8qJywgY2xvc2U6ICcqLycgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycsIG5vdEluOiBbJ3N0cmluZ19zcSddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nX2RxJ10gfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfaW5wdXQnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndmFyX291dHB1dCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfaW5fb3V0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl90ZW1wJywgY2xvc2U6ICdlbmRfdmFyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl9nbG9iYWwnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndmFyX2FjY2VzcycsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfZXh0ZXJuYWwnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndHlwZScsIGNsb3NlOiAnZW5kX3R5cGUnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnc3RydWN0JywgY2xvc2U6ICdlbmRfc3RydWN0JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Byb2dyYW0nLCBjbG9zZTogJ2VuZF9wcm9ncmFtJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2Z1bmN0aW9uJywgY2xvc2U6ICdlbmRfZnVuY3Rpb24nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnZnVuY3Rpb25fYmxvY2snLCBjbG9zZTogJ2VuZF9mdW5jdGlvbl9ibG9jaycgfSxcclxuICAgICAgICB7IG9wZW46ICdhY3Rpb24nLCBjbG9zZTogJ2VuZF9hY3Rpb24nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnc3RlcCcsIGNsb3NlOiAnZW5kX3N0ZXAnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnaW5pdGlhbF9zdGVwJywgY2xvc2U6ICdlbmRfc3RlcCcgfSxcclxuICAgICAgICB7IG9wZW46ICd0cmFuc2FjdGlvbicsIGNsb3NlOiAnZW5kX3RyYW5zYWN0aW9uJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2NvbmZpZ3VyYXRpb24nLCBjbG9zZTogJ2VuZF9jb25maWd1cmF0aW9uJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3RjcCcsIGNsb3NlOiAnZW5kX3RjcCcgfSxcclxuICAgICAgICB7IG9wZW46ICdyZWNvdXJjZScsIGNsb3NlOiAnZW5kX3JlY291cmNlJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2NoYW5uZWwnLCBjbG9zZTogJ2VuZF9jaGFubmVsJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2xpYnJhcnknLCBjbG9zZTogJ2VuZF9saWJyYXJ5JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2ZvbGRlcicsIGNsb3NlOiAnZW5kX2ZvbGRlcicgfSxcclxuICAgICAgICB7IG9wZW46ICdiaW5hcmllcycsIGNsb3NlOiAnZW5kX2JpbmFyaWVzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2luY2x1ZGVzJywgY2xvc2U6ICdlbmRfaW5jbHVkZXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnc291cmNlcycsIGNsb3NlOiAnZW5kX3NvdXJjZXMnIH1cclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3ZhcicsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfaW5wdXQnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndmFyX291dHB1dCcsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfaW5fb3V0JywgY2xvc2U6ICdlbmRfdmFyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl90ZW1wJywgY2xvc2U6ICdlbmRfdmFyJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Zhcl9nbG9iYWwnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndmFyX2FjY2VzcycsIGNsb3NlOiAnZW5kX3ZhcicgfSxcclxuICAgICAgICB7IG9wZW46ICd2YXJfZXh0ZXJuYWwnLCBjbG9zZTogJ2VuZF92YXInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAndHlwZScsIGNsb3NlOiAnZW5kX3R5cGUnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnc3RydWN0JywgY2xvc2U6ICdlbmRfc3RydWN0JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3Byb2dyYW0nLCBjbG9zZTogJ2VuZF9wcm9ncmFtJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2Z1bmN0aW9uJywgY2xvc2U6ICdlbmRfZnVuY3Rpb24nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnZnVuY3Rpb25fYmxvY2snLCBjbG9zZTogJ2VuZF9mdW5jdGlvbl9ibG9jaycgfSxcclxuICAgICAgICB7IG9wZW46ICdhY3Rpb24nLCBjbG9zZTogJ2VuZF9hY3Rpb24nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnc3RlcCcsIGNsb3NlOiAnZW5kX3N0ZXAnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnaW5pdGlhbF9zdGVwJywgY2xvc2U6ICdlbmRfc3RlcCcgfSxcclxuICAgICAgICB7IG9wZW46ICd0cmFuc2FjdGlvbicsIGNsb3NlOiAnZW5kX3RyYW5zYWN0aW9uJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2NvbmZpZ3VyYXRpb24nLCBjbG9zZTogJ2VuZF9jb25maWd1cmF0aW9uJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3RjcCcsIGNsb3NlOiAnZW5kX3RjcCcgfSxcclxuICAgICAgICB7IG9wZW46ICdyZWNvdXJjZScsIGNsb3NlOiAnZW5kX3JlY291cmNlJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2NoYW5uZWwnLCBjbG9zZTogJ2VuZF9jaGFubmVsJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2xpYnJhcnknLCBjbG9zZTogJ2VuZF9saWJyYXJ5JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2ZvbGRlcicsIGNsb3NlOiAnZW5kX2ZvbGRlcicgfSxcclxuICAgICAgICB7IG9wZW46ICdiaW5hcmllcycsIGNsb3NlOiAnZW5kX2JpbmFyaWVzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2luY2x1ZGVzJywgY2xvc2U6ICdlbmRfaW5jbHVkZXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnc291cmNlcycsIGNsb3NlOiAnZW5kX3NvdXJjZXMnIH1cclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccyojcHJhZ21hXFxcXHMrcmVnaW9uXFxcXGJcIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojcHJhZ21hXFxcXHMrZW5kcmVnaW9uXFxcXGJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnN0JyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfVxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbJ2lmJywgJ2VuZF9pZicsICdlbHNpZicsICdlbHNlJywgJ2Nhc2UnLCAnb2YnLCAndG8nLCAnX190cnknLCAnX19jYXRjaCcsICdfX2ZpbmFsbHknLFxyXG4gICAgICAgICdkbycsICd3aXRoJywgJ2J5JywgJ3doaWxlJywgJ3JlcGVhdCcsICdlbmRfd2hpbGUnLCAnZW5kX3JlcGVhdCcsICdlbmRfY2FzZScsXHJcbiAgICAgICAgJ2ZvcicsICdlbmRfZm9yJywgJ3Rhc2snLCAncmV0YWluJywgJ25vbl9yZXRhaW4nLCAnY29uc3RhbnQnLCAnd2l0aCcsICdhdCcsXHJcbiAgICAgICAgJ2V4aXQnLCAncmV0dXJuJywgJ2ludGVydmFsJywgJ3ByaW9yaXR5JywgJ2FkZHJlc3MnLCAncG9ydCcsICdvbl9jaGFubmVsJyxcclxuICAgICAgICAndGhlbicsICdpZWMnLCAnZmlsZScsICd1c2VzJywgJ3ZlcnNpb24nLCAncGFja2FnZXR5cGUnLCAnZGlzcGxheW5hbWUnLFxyXG4gICAgICAgICdjb3B5cmlnaHQnLCAnc3VtbWFyeScsICd2ZW5kb3InLCAnY29tbW9uX3NvdXJjZScsICdmcm9tJywgJ2V4dGVuZHMnXSxcclxuICAgIGNvbnN0YW50OiBbJ2ZhbHNlJywgJ3RydWUnLCAnbnVsbCddLFxyXG4gICAgZGVmaW5lS2V5d29yZHM6IFtcclxuICAgICAgICAndmFyJywgJ3Zhcl9pbnB1dCcsICd2YXJfb3V0cHV0JywgJ3Zhcl9pbl9vdXQnLCAndmFyX3RlbXAnLCAndmFyX2dsb2JhbCcsXHJcbiAgICAgICAgJ3Zhcl9hY2Nlc3MnLCAndmFyX2V4dGVybmFsJywgJ2VuZF92YXInLFxyXG4gICAgICAgICd0eXBlJywgJ2VuZF90eXBlJywgJ3N0cnVjdCcsICdlbmRfc3RydWN0JywgJ3Byb2dyYW0nLCAnZW5kX3Byb2dyYW0nLFxyXG4gICAgICAgICdmdW5jdGlvbicsICdlbmRfZnVuY3Rpb24nLCAnZnVuY3Rpb25fYmxvY2snLCAnZW5kX2Z1bmN0aW9uX2Jsb2NrJyxcclxuICAgICAgICAnaW50ZXJmYWNlJywgJ2VuZF9pbnRlcmZhY2UnLCAnbWV0aG9kJywgJ2VuZF9tZXRob2QnLFxyXG4gICAgICAgICdwcm9wZXJ0eScsICdlbmRfcHJvcGVydHknLCAnbmFtZXNwYWNlJywgJ2VuZF9uYW1lc3BhY2UnLFxyXG4gICAgICAgICdjb25maWd1cmF0aW9uJywgJ2VuZF9jb25maWd1cmF0aW9uJywgJ3RjcCcsICdlbmRfdGNwJywgJ3Jlc291cmNlJyxcclxuICAgICAgICAnZW5kX3Jlc291cmNlJywgJ2NoYW5uZWwnLCAnZW5kX2NoYW5uZWwnLCAnbGlicmFyeScsICdlbmRfbGlicmFyeScsXHJcbiAgICAgICAgJ2ZvbGRlcicsICdlbmRfZm9sZGVyJywgJ2JpbmFyaWVzJywgJ2VuZF9iaW5hcmllcycsICdpbmNsdWRlcycsXHJcbiAgICAgICAgJ2VuZF9pbmNsdWRlcycsICdzb3VyY2VzJywgJ2VuZF9zb3VyY2VzJyxcclxuICAgICAgICAnYWN0aW9uJywgJ2VuZF9hY3Rpb24nLCAnc3RlcCcsICdpbml0aWFsX3N0ZXAnLCAnZW5kX3N0ZXAnLCAndHJhbnNhY3Rpb24nLCAnZW5kX3RyYW5zYWN0aW9uJ1xyXG4gICAgXSxcclxuICAgIHR5cGVLZXl3b3JkczogWydpbnQnLCAnc2ludCcsICdkaW50JywgJ2xpbnQnLCAndXNpbnQnLCAndWludCcsICd1ZGludCcsICd1bGludCcsXHJcbiAgICAgICAgJ3JlYWwnLCAnbHJlYWwnLCAndGltZScsICdkYXRlJywgJ3RpbWVfb2ZfZGF5JywgJ2RhdGVfYW5kX3RpbWUnLCAnc3RyaW5nJyxcclxuICAgICAgICAnYm9vbCcsICdieXRlJywgJ3dvcmQnLCAnZHdvcmQnLCAnYXJyYXknLCAncG9pbnRlcicsICdsd29yZCddLFxyXG4gICAgb3BlcmF0b3JzOiBbJz0nLCAnPicsICc8JywgJzonLCAnOj0nLCAnPD0nLCAnPj0nLCAnPD4nLCAnJicsICcrJywgJy0nLCAnKicsICcqKicsXHJcbiAgICAgICAgJ01PRCcsICdeJywgJ29yJywgJ2FuZCcsICdub3QnLCAneG9yJywgJ2FicycsICdhY29zJywgJ2FzaW4nLCAnYXRhbicsICdjb3MnLFxyXG4gICAgICAgICdleHAnLCAnZXhwdCcsICdsbicsICdsb2cnLCAnc2luJywgJ3NxcnQnLCAndGFuJywgJ3NlbCcsICdtYXgnLCAnbWluJywgJ2xpbWl0JyxcclxuICAgICAgICAnbXV4JywgJ3NobCcsICdzaHInLCAncm9sJywgJ3JvcicsICdpbmRleG9mJywgJ3NpemVvZicsICdhZHInLCAnYWRyaW5zdCcsXHJcbiAgICAgICAgJ2JpdGFkcicsICdpc192YWxpZCcsICdyZWYnLCAncmVmX3RvJ10sXHJcbiAgICBidWlsdGluVmFyaWFibGVzOiBbXSxcclxuICAgIGJ1aWx0aW5GdW5jdGlvbnM6IFsnc3InLCAncnMnLCAndHAnLCAndG9uJywgJ3RvZicsICdlcScsICdnZScsICdsZScsICdsdCcsXHJcbiAgICAgICAgJ25lJywgJ3JvdW5kJywgJ3RydW5jJywgJ2N0ZCcsICfRgXR1JywgJ2N0dWQnLCAncl90cmlnJywgJ2ZfdHJpZycsXHJcbiAgICAgICAgJ21vdmUnLCAnY29uY2F0JywgJ2RlbGV0ZScsICdmaW5kJywgJ2luc2VydCcsICdsZWZ0JywgJ2xlbicsICdyZXBsYWNlJyxcclxuICAgICAgICAncmlnaHQnLCAncnRjJ10sXHJcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcclxuICAgIC8vIEMjIHN0eWxlIHN0cmluZ3NcclxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgWy8oXFwuXFwuKS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9cXGIoMTYjWzAtOUEtRmEtZlxcX10qKStcXGIvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbL1xcYigyI1swMVxcX10rKStcXGIvLCAnbnVtYmVyLmJpbmFyeSddLFxyXG4gICAgICAgICAgICBbL1xcYig4I1swLTlcXF9dKikrXFxiLywgJ251bWJlci5vY3RhbCddLFxyXG4gICAgICAgICAgICBbL1xcYlxcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/XFxiLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL1xcYihMP1JFQUwpI1swLTlcXF9cXC5lXStcXGIvLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvXFxiKEJZVEV8KD86RHxMKT9XT1JEfFU/KD86U3xEfEwpP0lOVCkjWzAtOVxcX10rXFxiLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIFsvXFxiKFR8RFR8VE9EKSNbMC05Oi1fc2hteWRdK1xcYi8sICd0YWcnXSxcclxuICAgICAgICAgICAgWy9cXCUoSXxRfE0pKFh8QnxXfER8TClbMC05XFwuXSsvLCAndGFnJ10sXHJcbiAgICAgICAgICAgIFsvXFwlKEl8UXxNKVswLTlcXC5dKi8sICd0YWcnXSxcclxuICAgICAgICAgICAgWy9cXGJbQS1aYS16XXsxLDZ9I1swLTldK1xcYi8sICd0YWcnXSxcclxuICAgICAgICAgICAgWy9cXGIoVE9ffENUVV98Q1REX3xDVFVEX3xNVVhffFNFTF8pW0FfWmEtel0rXFxiLywgJ3ByZWRlZmluZWQnXSxcclxuICAgICAgICAgICAgWy9cXGJbQV9aYS16XSsoX1RPXylbQV9aYS16XStcXGIvLCAncHJlZGVmaW5lZCddLFxyXG4gICAgICAgICAgICBbL1s7XS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9bLl0vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BwYXJhbXMnIH1dLFxyXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcclxuICAgICAgICAgICAgWy9bYS16QS1aX11cXHcqLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9ycycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAdHlwZUtleXdvcmRzJzogJ3R5cGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmluZUtleXdvcmRzJzogJ3ZhcmlhYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bjb25zdGFudCc6ICdjb25zdGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpblZhcmlhYmxlcyc6ICdwcmVkZWZpbmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGluRnVuY3Rpb25zJzogJ3ByZWRlZmluZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc3RyaW5nX2RxJyB9XSxcclxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc3RyaW5nX3NxJyB9XSxcclxuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbLygnKShAZXNjYXBlcykoJykvLCBbJ3N0cmluZycsICdzdHJpbmcuZXNjYXBlJywgJ3N0cmluZyddXSxcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBhcmFtczogW1xyXG4gICAgICAgICAgICBbL1xcYltBLVphLXowLTlfXStcXGIoPz1cXCgpLywgeyB0b2tlbjogJ2lkZW50aWZpZXInLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvXFxiW0EtWmEtejAtOV9dK1xcYi8sICd2YXJpYWJsZS5uYW1lJywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAcHVzaCddLFxyXG4gICAgICAgICAgICBbXCJcXFxcKi9cIiwgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQyOiBbXHJcbiAgICAgICAgICAgIFsvW15cXCgqXSsvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcKFxcKi8sICdjb21tZW50JywgJ0BwdXNoJ10sXHJcbiAgICAgICAgICAgIFtcIlxcXFwqXFxcXClcIiwgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1tcXCgqXS8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJ3doaXRlJ10sXHJcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcKFxcKi8sICdjb21tZW50JywgJ0Bjb21tZW50MiddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nX2RxOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nX3NxOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=