(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        blockComment: ['###', '###'],
        lineComment: '#'
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
    ignoreCase: true,
    tokenPostfix: '.coffee',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    regEx: /\/(?!\/\/)(?:[^\/\\]|\\.)*\/[igm]*/,
    keywords: [
        'and', 'or', 'is', 'isnt', 'not', 'on', 'yes', '@', 'no', 'off',
        'true', 'false', 'null', 'this',
        'new', 'delete', 'typeof', 'in', 'instanceof',
        'return', 'throw', 'break', 'continue', 'debugger',
        'if', 'else', 'switch', 'for', 'while', 'do', 'try', 'catch', 'finally',
        'class', 'extends', 'super',
        'undefined', 'then', 'unless', 'until', 'loop', 'of', 'by', 'when'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?&%|+\-*\/\^\.,\:]+/,
    escapes: /\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/\@[a-zA-Z_]\w*/, 'variable.predefined'],
            [/[a-zA-Z_]\w*/, {
                    cases: {
                        'this': 'variable.predefined',
                        '@keywords': { token: 'keyword.$0' },
                        '@default': ''
                    }
                }],
            // whitespace
            [/[ \t\r\n]+/, ''],
            // Comments
            [/###/, 'comment', '@comment'],
            [/#.*$/, 'comment'],
            // regular expressions
            ['///', { token: 'regexp', next: '@hereregexp' }],
            [/^(\s*)(@regEx)/, ['', 'regexp']],
            [/(\()(\s*)(@regEx)/, ['@brackets', '', 'regexp']],
            [/(\,)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\=)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\:)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\[)(\s*)(@regEx)/, ['@brackets', '', 'regexp']],
            [/(\!)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\&)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\|)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\?)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\{)(\s*)(@regEx)/, ['@brackets', '', 'regexp']],
            [/(\;)(\s*)(@regEx)/, ['', '', 'regexp']],
            // delimiters
            [/}/, {
                    cases: {
                        '$S2==interpolatedstring': { token: 'string', next: '@pop' },
                        '@default': '@brackets'
                    }
                }],
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d+[eE]([\-+]?\d+)?/, 'number.float'],
            [/\d+\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/0[0-7]+(?!\d)/, 'number.octal'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[,.]/, 'delimiter'],
            // strings:
            [/"""/, 'string', '@herestring."""'],
            [/'''/, 'string', '@herestring.\'\'\''],
            [/"/, {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: '@string."' }
                    }
                }],
            [/'/, {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: '@string.\'' }
                    }
                }],
        ],
        string: [
            [/[^"'\#\\]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/\./, 'string.escape.invalid'],
            [/#{/, {
                    cases: {
                        '$S2=="': { token: 'string', next: 'root.interpolatedstring' },
                        '@default': 'string'
                    }
                }],
            [/["']/, {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }],
            [/#/, 'string']
        ],
        herestring: [
            [/("""|''')/, {
                    cases: {
                        '$1==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }],
            [/[^#\\'"]+/, 'string'],
            [/['"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/#{/, { token: 'string.quote', next: 'root.interpolatedstring' }],
            [/#/, 'string']
        ],
        comment: [
            [/[^#]+/, 'comment',],
            [/###/, 'comment', '@pop'],
            [/#/, 'comment'],
        ],
        hereregexp: [
            [/[^\\\/#]+/, 'regexp'],
            [/\\./, 'regexp'],
            [/#.*$/, 'comment'],
            ['///[igm]*', { token: 'regexp', next: '@pop' }],
            [/\//, 'regexp'],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2NvZmZlZS9jb2ZmZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQLHFFQUFxRSxJQUFJLE1BQU07QUFDL0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLDZCQUE2QjtBQUMzRCxTQUFTLG1EQUFtRDtBQUM1RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVDQUF1QztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxvREFBb0QsZ0NBQWdDO0FBQ3BGO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsbUNBQW1DLG1EQUFtRDtBQUN0RjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDO0FBQ3BFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBZ0M7QUFDcEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJLHlEQUF5RDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6IjEwLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcIyVcXF5cXCZcXCpcXChcXClcXD1cXCRcXC1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnIyMjJywgJyMjIyddLFxyXG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNyZWdpb25cXFxcYlwiKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNlbmRyZWdpb25cXFxcYlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNvZmZlZScsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfVxyXG4gICAgXSxcclxuICAgIHJlZ0V4OiAvXFwvKD8hXFwvXFwvKSg/OlteXFwvXFxcXF18XFxcXC4pKlxcL1tpZ21dKi8sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdhbmQnLCAnb3InLCAnaXMnLCAnaXNudCcsICdub3QnLCAnb24nLCAneWVzJywgJ0AnLCAnbm8nLCAnb2ZmJyxcclxuICAgICAgICAndHJ1ZScsICdmYWxzZScsICdudWxsJywgJ3RoaXMnLFxyXG4gICAgICAgICduZXcnLCAnZGVsZXRlJywgJ3R5cGVvZicsICdpbicsICdpbnN0YW5jZW9mJyxcclxuICAgICAgICAncmV0dXJuJywgJ3Rocm93JywgJ2JyZWFrJywgJ2NvbnRpbnVlJywgJ2RlYnVnZ2VyJyxcclxuICAgICAgICAnaWYnLCAnZWxzZScsICdzd2l0Y2gnLCAnZm9yJywgJ3doaWxlJywgJ2RvJywgJ3RyeScsICdjYXRjaCcsICdmaW5hbGx5JyxcclxuICAgICAgICAnY2xhc3MnLCAnZXh0ZW5kcycsICdzdXBlcicsXHJcbiAgICAgICAgJ3VuZGVmaW5lZCcsICd0aGVuJywgJ3VubGVzcycsICd1bnRpbCcsICdsb29wJywgJ29mJywgJ2J5JywgJ3doZW4nXHJcbiAgICBdLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9Pjwhfj8mJXwrXFwtKlxcL1xcXlxcLixcXDpdKy8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJyRdfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcclxuICAgICAgICAgICAgWy9cXEBbYS16QS1aX11cXHcqLywgJ3ZhcmlhYmxlLnByZWRlZmluZWQnXSxcclxuICAgICAgICAgICAgWy9bYS16QS1aX11cXHcqLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aGlzJzogJ3ZhcmlhYmxlLnByZWRlZmluZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICAvLyBDb21tZW50c1xyXG4gICAgICAgICAgICBbLyMjIy8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvIy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgWycvLy8nLCB7IHRva2VuOiAncmVnZXhwJywgbmV4dDogJ0BoZXJlcmVnZXhwJyB9XSxcclxuICAgICAgICAgICAgWy9eKFxccyopKEByZWdFeCkvLCBbJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcKCkoXFxzKikoQHJlZ0V4KS8sIFsnQGJyYWNrZXRzJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcLCkoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcPSkoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcOikoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcWykoXFxzKikoQHJlZ0V4KS8sIFsnQGJyYWNrZXRzJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcISkoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcJikoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcfCkoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcPykoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxceykoXFxzKikoQHJlZ0V4KS8sIFsnQGJyYWNrZXRzJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcOykoXFxzKikoQHJlZ0V4KS8sIFsnJywgJycsICdyZWdleHAnXV0sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnNcclxuICAgICAgICAgICAgWy99Lywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PWludGVycG9sYXRlZHN0cmluZyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ0BicmFja2V0cydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQrW2VFXShbXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbL1xcZCtcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl0rLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy8wWzAtN10rKD8hXFxkKS8sICdudW1iZXIub2N0YWwnXSxcclxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXHJcbiAgICAgICAgICAgIFsvWywuXS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nczpcclxuICAgICAgICAgICAgWy9cIlwiXCIvLCAnc3RyaW5nJywgJ0BoZXJlc3RyaW5nLlwiXCJcIiddLFxyXG4gICAgICAgICAgICBbLycnJy8sICdzdHJpbmcnLCAnQGhlcmVzdHJpbmcuXFwnXFwnXFwnJ10sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAc3RyaW5nLlwiJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvJy8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BzdHJpbmcuXFwnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlwiJ1xcI1xcXFxdKy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXHJcbiAgICAgICAgICAgIFsvXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1xcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy8jey8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1cIic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAncm9vdC5pbnRlcnBvbGF0ZWRzdHJpbmcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvW1wiJ10vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvIy8sICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGVyZXN0cmluZzogW1xyXG4gICAgICAgICAgICBbLyhcIlwiXCJ8JycnKS8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJDE9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9bXiNcXFxcJ1wiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvWydcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvI3svLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ3Jvb3QuaW50ZXJwb2xhdGVkc3RyaW5nJyB9XSxcclxuICAgICAgICAgICAgWy8jLywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW14jXSsvLCAnY29tbWVudCcsXSxcclxuICAgICAgICAgICAgWy8jIyMvLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvIy8sICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBoZXJlcmVnZXhwOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXFwvI10rLywgJ3JlZ2V4cCddLFxyXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3JlZ2V4cCddLFxyXG4gICAgICAgICAgICBbLyMuKiQvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbJy8vL1tpZ21dKicsIHsgdG9rZW46ICdyZWdleHAnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvXFwvLywgJ3JlZ2V4cCddLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9