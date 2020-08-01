(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.js ***!
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
    tokenPostfix: '.tcl',
    specialFunctions: [
        'set', 'unset', 'rename', 'variable', 'proc', 'coroutine',
        'foreach',
        'incr', 'append',
        'lappend', 'linsert', 'lreplace'
    ],
    mainFunctions: [
        'if', 'then', 'elseif', 'else', 'case', 'switch', 'while', 'for',
        'break', 'continue', 'return',
        'package', 'namespace',
        'catch', 'exit',
        'eval', 'expr', 'uplevel', 'upvar'
    ],
    builtinFunctions: [
        'file', 'info', 'concat', 'join', 'lindex',
        'list', 'llength', 'lrange', 'lsearch', 'lsort', 'split',
        'array', 'parray', 'binary', 'format', 'regexp', 'regsub', 'scan', 'string',
        'subst', 'dict', 'cd', 'clock', 'exec', 'glob', 'pid', 'pwd', 'close', 'eof', 'fblocked',
        'fconfigure', 'fcopy', 'fileevent', 'flush', 'gets', 'open', 'puts', 'read', 'seek',
        'socket', 'tell', 'interp', 'after', 'auto_execok',
        'auto_load', 'auto_mkindex', 'auto_reset', 'bgerror', 'error',
        'global', 'history', 'load', 'source', 'time', 'trace',
        'unknown', 'unset', 'update', 'vwait', 'winfo', 'wm', 'bind', 'event',
        'pack', 'place', 'grid', 'font', 'bell', 'clipboard', 'destroy', 'focus', 'grab', 'lower',
        'option', 'raise', 'selection', 'send', 'tk', 'tkwait', 'tk_bisque', 'tk_focusNext',
        'tk_focusPrev', 'tk_focusFollowsMouse', 'tk_popup', 'tk_setPalette'
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' }
    ],
    escapes: /\\(?:[abfnrtv\\"'\[\]\{\};\$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    variables: /(?:\$+(?:(?:\:\:?)?[a-zA-Z_]\w*)+)/,
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-zA-Z_]\w*/, { cases: {
                        '@specialFunctions': { token: 'keyword.flow', next: '@specialFunc' },
                        '@mainFunctions': 'keyword',
                        '@builtinFunctions': 'variable',
                        '@default': 'operator.scss'
                    } }],
            [/\s+\-+(?!\d|\.)\w*|{\*}/, 'metatag'],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'operator'],
            [/\$+(?:\:\:)?\{/, { token: 'identifier', next: '@nestedVariable' }],
            [/@variables/, 'type.identifier'],
            [/\.(?!\d|\.)[\w\-]*/, 'operator.sql'],
            // numbers
            [/\d+(\.\d+)?/, 'number'],
            [/\d+/, 'number'],
            // delimiter
            [/;/, 'delimiter'],
            // strings
            [/"/, { token: 'string.quote', bracket: '@open', next: '@dstring' }],
            [/'/, { token: 'string.quote', bracket: '@open', next: '@sstring' }]
        ],
        dstring: [
            [/\[/, { token: '@brackets', next: '@nestedCall' }],
            [/\$+(?:\:\:)?\{/, { token: 'identifier', next: '@nestedVariable' }],
            [/@variables/, 'type.identifier'],
            [/[^\\$\[\]"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
        ],
        sstring: [
            [/\[/, { token: '@brackets', next: '@nestedCall' }],
            [/\$+(?:\:\:)?\{/, { token: 'identifier', next: '@nestedVariable' }],
            [/@variables/, 'type.identifier'],
            [/[^\\$\[\]']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/#.*\\$/, { token: 'comment', next: '@newlineComment' }],
            [/#.*(?!\\)$/, 'comment']
        ],
        newlineComment: [
            [/.*\\$/, 'comment'],
            [/.*(?!\\)$/, { token: 'comment', next: '@pop' }]
        ],
        nestedVariable: [
            [/[^\{\}\$]+/, 'type.identifier'],
            [/\}/, { token: 'identifier', next: '@pop' }]
        ],
        nestedCall: [
            [/\[/, { token: '@brackets', next: '@nestedCall' }],
            [/\]/, { token: '@brackets', next: '@pop' }],
            { include: 'root' }
        ],
        specialFunc: [
            [/"/, { token: 'string', next: '@dstring' }],
            [/'/, { token: 'string', next: '@sstring' }],
            [/\S+/, { token: 'type', next: '@pop' }],
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3RjbC90Y2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTLFNBQVMsWUFBWSw2QkFBNkI7QUFDM0QsU0FBUztBQUNUO0FBQ0EscUNBQXFDLEdBQUcsaUJBQWlCLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw4Q0FBOEMsOENBQThDO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixFQUFFO0FBQ3ZCLGtDQUFrQyxHQUFHO0FBQ3JDO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSw0QkFBNEIsSUFBSSwrQ0FBK0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsbUJBQW1CLDREQUE0RDtBQUMvRSxtQkFBbUIsNERBQTREO0FBQy9FO0FBQ0E7QUFDQSxvQkFBb0IsMENBQTBDO0FBQzlELDRCQUE0QixJQUFJLCtDQUErQztBQUMvRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseURBQXlEO0FBQzVFO0FBQ0E7QUFDQSxvQkFBb0IsMENBQTBDO0FBQzlELDRCQUE0QixJQUFJLCtDQUErQztBQUMvRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseURBQXlEO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUNBQWlDO0FBQzVEO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRTtBQUNwQixnQkFBZ0IsSUFBSSxvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBMEM7QUFDOUQsb0JBQW9CLG1DQUFtQztBQUN2RCxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQixvQ0FBb0M7QUFDdkQsbUJBQW1CLG9DQUFvQztBQUN2RCxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQSIsImZpbGUiOiI1Ni5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnRjbCcsXHJcbiAgICBzcGVjaWFsRnVuY3Rpb25zOiBbXHJcbiAgICAgICAgJ3NldCcsICd1bnNldCcsICdyZW5hbWUnLCAndmFyaWFibGUnLCAncHJvYycsICdjb3JvdXRpbmUnLFxyXG4gICAgICAgICdmb3JlYWNoJyxcclxuICAgICAgICAnaW5jcicsICdhcHBlbmQnLFxyXG4gICAgICAgICdsYXBwZW5kJywgJ2xpbnNlcnQnLCAnbHJlcGxhY2UnXHJcbiAgICBdLFxyXG4gICAgbWFpbkZ1bmN0aW9uczogW1xyXG4gICAgICAgICdpZicsICd0aGVuJywgJ2Vsc2VpZicsICdlbHNlJywgJ2Nhc2UnLCAnc3dpdGNoJywgJ3doaWxlJywgJ2ZvcicsXHJcbiAgICAgICAgJ2JyZWFrJywgJ2NvbnRpbnVlJywgJ3JldHVybicsXHJcbiAgICAgICAgJ3BhY2thZ2UnLCAnbmFtZXNwYWNlJyxcclxuICAgICAgICAnY2F0Y2gnLCAnZXhpdCcsXHJcbiAgICAgICAgJ2V2YWwnLCAnZXhwcicsICd1cGxldmVsJywgJ3VwdmFyJ1xyXG4gICAgXSxcclxuICAgIGJ1aWx0aW5GdW5jdGlvbnM6IFtcclxuICAgICAgICAnZmlsZScsICdpbmZvJywgJ2NvbmNhdCcsICdqb2luJywgJ2xpbmRleCcsXHJcbiAgICAgICAgJ2xpc3QnLCAnbGxlbmd0aCcsICdscmFuZ2UnLCAnbHNlYXJjaCcsICdsc29ydCcsICdzcGxpdCcsXHJcbiAgICAgICAgJ2FycmF5JywgJ3BhcnJheScsICdiaW5hcnknLCAnZm9ybWF0JywgJ3JlZ2V4cCcsICdyZWdzdWInLCAnc2NhbicsICdzdHJpbmcnLFxyXG4gICAgICAgICdzdWJzdCcsICdkaWN0JywgJ2NkJywgJ2Nsb2NrJywgJ2V4ZWMnLCAnZ2xvYicsICdwaWQnLCAncHdkJywgJ2Nsb3NlJywgJ2VvZicsICdmYmxvY2tlZCcsXHJcbiAgICAgICAgJ2Zjb25maWd1cmUnLCAnZmNvcHknLCAnZmlsZWV2ZW50JywgJ2ZsdXNoJywgJ2dldHMnLCAnb3BlbicsICdwdXRzJywgJ3JlYWQnLCAnc2VlaycsXHJcbiAgICAgICAgJ3NvY2tldCcsICd0ZWxsJywgJ2ludGVycCcsICdhZnRlcicsICdhdXRvX2V4ZWNvaycsXHJcbiAgICAgICAgJ2F1dG9fbG9hZCcsICdhdXRvX21raW5kZXgnLCAnYXV0b19yZXNldCcsICdiZ2Vycm9yJywgJ2Vycm9yJyxcclxuICAgICAgICAnZ2xvYmFsJywgJ2hpc3RvcnknLCAnbG9hZCcsICdzb3VyY2UnLCAndGltZScsICd0cmFjZScsXHJcbiAgICAgICAgJ3Vua25vd24nLCAndW5zZXQnLCAndXBkYXRlJywgJ3Z3YWl0JywgJ3dpbmZvJywgJ3dtJywgJ2JpbmQnLCAnZXZlbnQnLFxyXG4gICAgICAgICdwYWNrJywgJ3BsYWNlJywgJ2dyaWQnLCAnZm9udCcsICdiZWxsJywgJ2NsaXBib2FyZCcsICdkZXN0cm95JywgJ2ZvY3VzJywgJ2dyYWInLCAnbG93ZXInLFxyXG4gICAgICAgICdvcHRpb24nLCAncmFpc2UnLCAnc2VsZWN0aW9uJywgJ3NlbmQnLCAndGsnLCAndGt3YWl0JywgJ3RrX2Jpc3F1ZScsICd0a19mb2N1c05leHQnLFxyXG4gICAgICAgICd0a19mb2N1c1ByZXYnLCAndGtfZm9jdXNGb2xsb3dzTW91c2UnLCAndGtfcG9wdXAnLCAndGtfc2V0UGFsZXR0ZSdcclxuICAgIF0sXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9XHJcbiAgICBdLFxyXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIidcXFtcXF1cXHtcXH07XFwkXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXHJcbiAgICB2YXJpYWJsZXM6IC8oPzpcXCQrKD86KD86XFw6XFw6Pyk/W2EtekEtWl9dXFx3KikrKS8sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbL1thLXpBLVpfXVxcdyovLCB7IGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc3BlY2lhbEZ1bmN0aW9ucyc6IHsgdG9rZW46ICdrZXl3b3JkLmZsb3cnLCBuZXh0OiAnQHNwZWNpYWxGdW5jJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG1haW5GdW5jdGlvbnMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbkZ1bmN0aW9ucyc6ICd2YXJpYWJsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdvcGVyYXRvci5zY3NzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfV0sXHJcbiAgICAgICAgICAgIFsvXFxzK1xcLSsoPyFcXGR8XFwuKVxcdyp8e1xcKn0vLCAnbWV0YXRhZyddLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWy9cXCQrKD86XFw6XFw6KT9cXHsvLCB7IHRva2VuOiAnaWRlbnRpZmllcicsIG5leHQ6ICdAbmVzdGVkVmFyaWFibGUnIH1dLFxyXG4gICAgICAgICAgICBbL0B2YXJpYWJsZXMvLCAndHlwZS5pZGVudGlmaWVyJ10sXHJcbiAgICAgICAgICAgIFsvXFwuKD8hXFxkfFxcLilbXFx3XFwtXSovLCAnb3BlcmF0b3Iuc3FsJ10sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQrKFxcLlxcZCspPy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJcclxuICAgICAgICAgICAgWy87LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0Bkc3RyaW5nJyB9XSxcclxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc3N0cmluZycgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGRzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9cXFsvLCB7IHRva2VuOiAnQGJyYWNrZXRzJywgbmV4dDogJ0BuZXN0ZWRDYWxsJyB9XSxcclxuICAgICAgICAgICAgWy9cXCQrKD86XFw6XFw6KT9cXHsvLCB7IHRva2VuOiAnaWRlbnRpZmllcicsIG5leHQ6ICdAbmVzdGVkVmFyaWFibGUnIH1dLFxyXG4gICAgICAgICAgICBbL0B2YXJpYWJsZXMvLCAndHlwZS5pZGVudGlmaWVyJ10sXHJcbiAgICAgICAgICAgIFsvW15cXFxcJFxcW1xcXVwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvXFxbLywgeyB0b2tlbjogJ0BicmFja2V0cycsIG5leHQ6ICdAbmVzdGVkQ2FsbCcgfV0sXHJcbiAgICAgICAgICAgIFsvXFwkKyg/OlxcOlxcOik/XFx7LywgeyB0b2tlbjogJ2lkZW50aWZpZXInLCBuZXh0OiAnQG5lc3RlZFZhcmlhYmxlJyB9XSxcclxuICAgICAgICAgICAgWy9AdmFyaWFibGVzLywgJ3R5cGUuaWRlbnRpZmllciddLFxyXG4gICAgICAgICAgICBbL1teXFxcXCRcXFtcXF0nXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy8jLipcXFxcJC8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0BuZXdsaW5lQ29tbWVudCcgfV0sXHJcbiAgICAgICAgICAgIFsvIy4qKD8hXFxcXCkkLywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmV3bGluZUNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy8uKlxcXFwkLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy8uKig/IVxcXFwpJC8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuZXN0ZWRWYXJpYWJsZTogW1xyXG4gICAgICAgICAgICBbL1teXFx7XFx9XFwkXSsvLCAndHlwZS5pZGVudGlmaWVyJ10sXHJcbiAgICAgICAgICAgIFsvXFx9LywgeyB0b2tlbjogJ2lkZW50aWZpZXInLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIG5lc3RlZENhbGw6IFtcclxuICAgICAgICAgICAgWy9cXFsvLCB7IHRva2VuOiAnQGJyYWNrZXRzJywgbmV4dDogJ0BuZXN0ZWRDYWxsJyB9XSxcclxuICAgICAgICAgICAgWy9cXF0vLCB7IHRva2VuOiAnQGJyYWNrZXRzJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdyb290JyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzcGVjaWFsRnVuYzogW1xyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAZHN0cmluZycgfV0sXHJcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHNzdHJpbmcnIH1dLFxyXG4gICAgICAgICAgICBbL1xcUysvLCB7IHRva2VuOiAndHlwZScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=