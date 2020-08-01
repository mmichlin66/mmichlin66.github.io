(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js ***!
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

var conf = {
    comments: {
        lineComment: '#',
    },
    brackets: [['{', '}'], ['[', ']'], ['(', ')']],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' },
    ],
};
var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.shell',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' },
    ],
    keywords: [
        'if',
        'then',
        'do',
        'else',
        'elif',
        'while',
        'until',
        'for',
        'in',
        'esac',
        'fi',
        'fin',
        'fil',
        'done',
        'exit',
        'set',
        'unset',
        'export',
        'function',
    ],
    builtins: [
        'ab',
        'awk',
        'bash',
        'beep',
        'cat',
        'cc',
        'cd',
        'chown',
        'chmod',
        'chroot',
        'clear',
        'cp',
        'curl',
        'cut',
        'diff',
        'echo',
        'find',
        'gawk',
        'gcc',
        'get',
        'git',
        'grep',
        'hg',
        'kill',
        'killall',
        'ln',
        'ls',
        'make',
        'mkdir',
        'openssl',
        'mv',
        'nc',
        'node',
        'npm',
        'ping',
        'ps',
        'restart',
        'rm',
        'rmdir',
        'sed',
        'service',
        'sh',
        'shopt',
        'shred',
        'source',
        'sort',
        'sleep',
        'ssh',
        'start',
        'stop',
        'su',
        'sudo',
        'svn',
        'tee',
        'telnet',
        'top',
        'touch',
        'vi',
        'vim',
        'wall',
        'wc',
        'wget',
        'who',
        'write',
        'yes',
        'zsh',
    ],
    // we include these common regular expressions
    symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            { include: '@whitespace' },
            [
                /[a-zA-Z]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': ''
                    },
                },
            ],
            { include: '@strings' },
            { include: '@parameters' },
            { include: '@heredoc' },
            [/[{}\[\]()]/, '@brackets'],
            [/-+\w+/, 'attribute.name'],
            [/@symbols/, 'delimiter'],
            { include: '@numbers' },
            [/[,;]/, 'delimiter'],
        ],
        whitespace: [
            [/\s+/, 'white'],
            [/(^#!.*$)/, 'metatag'],
            [/(^#.*$)/, 'comment'],
        ],
        numbers: [
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
            [/\d+/, 'number'],
        ],
        // Recognize strings, including those broken across lines
        strings: [
            [/'/, 'string', '@stringBody'],
            [/"/, 'string', '@dblStringBody']
        ],
        stringBody: [
            [/'/, 'string', '@popall'],
            [/./, 'string'],
        ],
        dblStringBody: [
            [/"/, 'string', '@popall'],
            [/./, 'string'],
        ],
        heredoc: [
            [/(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/, ['constants', 'white', 'string.heredoc.delimiter', 'string.heredoc', 'string.heredoc.delimiter']]
        ],
        parameters: [
            [/\$\d+/, 'variable.predefined'],
            [/\$\w+/, 'variable'],
            [/\$[*@#?\-$!0_]/, 'variable'],
            [/\$'/, 'variable', '@parameterBodyQuote'],
            [/\$"/, 'variable', '@parameterBodyDoubleQuote'],
            [/\$\(/, 'variable', '@parameterBodyParen'],
            [/\$\{/, 'variable', '@parameterBodyCurlyBrace'],
        ],
        parameterBodyQuote: [
            [/[^#:%*@\-!_']+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/[']/, 'variable', '@pop'],
        ],
        parameterBodyDoubleQuote: [
            [/[^#:%*@\-!_"]+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/["]/, 'variable', '@pop'],
        ],
        parameterBodyParen: [
            [/[^#:%*@\-!_)]+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/[)]/, 'variable', '@pop'],
        ],
        parameterBodyCurlyBrace: [
            [/[^#:%*@\-!_}]+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/[}]/, 'variable', '@pop'],
        ],
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NoZWxsL3NoZWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUNBQXFDLFlBQVksR0FBRztBQUM3RCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTLG1EQUFtRDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSIsImZpbGUiOiI1MC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnIycsXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtbJ3snLCAnfSddLCBbJ1snLCAnXSddLCBbJygnLCAnKSddXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH0sXHJcbiAgICBdLFxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcuc2hlbGwnLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgIF0sXHJcbiAgICBrZXl3b3JkczogW1xyXG4gICAgICAgICdpZicsXHJcbiAgICAgICAgJ3RoZW4nLFxyXG4gICAgICAgICdkbycsXHJcbiAgICAgICAgJ2Vsc2UnLFxyXG4gICAgICAgICdlbGlmJyxcclxuICAgICAgICAnd2hpbGUnLFxyXG4gICAgICAgICd1bnRpbCcsXHJcbiAgICAgICAgJ2ZvcicsXHJcbiAgICAgICAgJ2luJyxcclxuICAgICAgICAnZXNhYycsXHJcbiAgICAgICAgJ2ZpJyxcclxuICAgICAgICAnZmluJyxcclxuICAgICAgICAnZmlsJyxcclxuICAgICAgICAnZG9uZScsXHJcbiAgICAgICAgJ2V4aXQnLFxyXG4gICAgICAgICdzZXQnLFxyXG4gICAgICAgICd1bnNldCcsXHJcbiAgICAgICAgJ2V4cG9ydCcsXHJcbiAgICAgICAgJ2Z1bmN0aW9uJyxcclxuICAgIF0sXHJcbiAgICBidWlsdGluczogW1xyXG4gICAgICAgICdhYicsXHJcbiAgICAgICAgJ2F3aycsXHJcbiAgICAgICAgJ2Jhc2gnLFxyXG4gICAgICAgICdiZWVwJyxcclxuICAgICAgICAnY2F0JyxcclxuICAgICAgICAnY2MnLFxyXG4gICAgICAgICdjZCcsXHJcbiAgICAgICAgJ2Nob3duJyxcclxuICAgICAgICAnY2htb2QnLFxyXG4gICAgICAgICdjaHJvb3QnLFxyXG4gICAgICAgICdjbGVhcicsXHJcbiAgICAgICAgJ2NwJyxcclxuICAgICAgICAnY3VybCcsXHJcbiAgICAgICAgJ2N1dCcsXHJcbiAgICAgICAgJ2RpZmYnLFxyXG4gICAgICAgICdlY2hvJyxcclxuICAgICAgICAnZmluZCcsXHJcbiAgICAgICAgJ2dhd2snLFxyXG4gICAgICAgICdnY2MnLFxyXG4gICAgICAgICdnZXQnLFxyXG4gICAgICAgICdnaXQnLFxyXG4gICAgICAgICdncmVwJyxcclxuICAgICAgICAnaGcnLFxyXG4gICAgICAgICdraWxsJyxcclxuICAgICAgICAna2lsbGFsbCcsXHJcbiAgICAgICAgJ2xuJyxcclxuICAgICAgICAnbHMnLFxyXG4gICAgICAgICdtYWtlJyxcclxuICAgICAgICAnbWtkaXInLFxyXG4gICAgICAgICdvcGVuc3NsJyxcclxuICAgICAgICAnbXYnLFxyXG4gICAgICAgICduYycsXHJcbiAgICAgICAgJ25vZGUnLFxyXG4gICAgICAgICducG0nLFxyXG4gICAgICAgICdwaW5nJyxcclxuICAgICAgICAncHMnLFxyXG4gICAgICAgICdyZXN0YXJ0JyxcclxuICAgICAgICAncm0nLFxyXG4gICAgICAgICdybWRpcicsXHJcbiAgICAgICAgJ3NlZCcsXHJcbiAgICAgICAgJ3NlcnZpY2UnLFxyXG4gICAgICAgICdzaCcsXHJcbiAgICAgICAgJ3Nob3B0JyxcclxuICAgICAgICAnc2hyZWQnLFxyXG4gICAgICAgICdzb3VyY2UnLFxyXG4gICAgICAgICdzb3J0JyxcclxuICAgICAgICAnc2xlZXAnLFxyXG4gICAgICAgICdzc2gnLFxyXG4gICAgICAgICdzdGFydCcsXHJcbiAgICAgICAgJ3N0b3AnLFxyXG4gICAgICAgICdzdScsXHJcbiAgICAgICAgJ3N1ZG8nLFxyXG4gICAgICAgICdzdm4nLFxyXG4gICAgICAgICd0ZWUnLFxyXG4gICAgICAgICd0ZWxuZXQnLFxyXG4gICAgICAgICd0b3AnLFxyXG4gICAgICAgICd0b3VjaCcsXHJcbiAgICAgICAgJ3ZpJyxcclxuICAgICAgICAndmltJyxcclxuICAgICAgICAnd2FsbCcsXHJcbiAgICAgICAgJ3djJyxcclxuICAgICAgICAnd2dldCcsXHJcbiAgICAgICAgJ3dobycsXHJcbiAgICAgICAgJ3dyaXRlJyxcclxuICAgICAgICAneWVzJyxcclxuICAgICAgICAnenNoJyxcclxuICAgIF0sXHJcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXHJcbiAgICBzeW1ib2xzOiAvWz0+PCF+PyZ8K1xcLSpcXC9cXF47XFwuLF0rLyxcclxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1thLXpBLVpdXFx3Ki8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGlucyc6ICd0eXBlLmlkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHBhcmFtZXRlcnMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BoZXJlZG9jJyB9LFxyXG4gICAgICAgICAgICBbL1t7fVxcW1xcXSgpXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWy8tK1xcdysvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXHJcbiAgICAgICAgICAgIFsvWyw7XS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9cXHMrLywgJ3doaXRlJ10sXHJcbiAgICAgICAgICAgIFsvKF4jIS4qJCkvLCAnbWV0YXRhZyddLFxyXG4gICAgICAgICAgICBbLyheIy4qJCkvLCAnY29tbWVudCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbnVtYmVyczogW1xyXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl9dKlswLTlhLWZBLUZdLywgJ251bWJlci5oZXgnXSxcclxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gUmVjb2duaXplIHN0cmluZ3MsIGluY2x1ZGluZyB0aG9zZSBicm9rZW4gYWNyb3NzIGxpbmVzXHJcbiAgICAgICAgc3RyaW5nczogW1xyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmdCb2R5J10sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BkYmxTdHJpbmdCb2R5J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ0JvZHk6IFtcclxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRibFN0cmluZ0JvZHk6IFtcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxyXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBoZXJlZG9jOiBbXHJcbiAgICAgICAgICAgIFsvKDw8Wy08XT8pKFxccyopKFsnXCJgXT8pKFtcXHdcXC1dKykoWydcImBdPykvLCBbJ2NvbnN0YW50cycsICd3aGl0ZScsICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLCAnc3RyaW5nLmhlcmVkb2MnLCAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJ11dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXJhbWV0ZXJzOiBbXHJcbiAgICAgICAgICAgIFsvXFwkXFxkKy8sICd2YXJpYWJsZS5wcmVkZWZpbmVkJ10sXHJcbiAgICAgICAgICAgIFsvXFwkXFx3Ky8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICBbL1xcJFsqQCM/XFwtJCEwX10vLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgWy9cXCQnLywgJ3ZhcmlhYmxlJywgJ0BwYXJhbWV0ZXJCb2R5UXVvdGUnXSxcclxuICAgICAgICAgICAgWy9cXCRcIi8sICd2YXJpYWJsZScsICdAcGFyYW1ldGVyQm9keURvdWJsZVF1b3RlJ10sXHJcbiAgICAgICAgICAgIFsvXFwkXFwoLywgJ3ZhcmlhYmxlJywgJ0BwYXJhbWV0ZXJCb2R5UGFyZW4nXSxcclxuICAgICAgICAgICAgWy9cXCRcXHsvLCAndmFyaWFibGUnLCAnQHBhcmFtZXRlckJvZHlDdXJseUJyYWNlJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXJhbWV0ZXJCb2R5UXVvdGU6IFtcclxuICAgICAgICAgICAgWy9bXiM6JSpAXFwtIV8nXSsvLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgWy9bIzolKkBcXC0hX10vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyddLywgJ3ZhcmlhYmxlJywgJ0Bwb3AnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHBhcmFtZXRlckJvZHlEb3VibGVRdW90ZTogW1xyXG4gICAgICAgICAgICBbL1teIzolKkBcXC0hX1wiXSsvLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgWy9bIzolKkBcXC0hX10vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvW1wiXS8sICd2YXJpYWJsZScsICdAcG9wJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXJhbWV0ZXJCb2R5UGFyZW46IFtcclxuICAgICAgICAgICAgWy9bXiM6JSpAXFwtIV8pXSsvLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgWy9bIzolKkBcXC0hX10vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyldLywgJ3ZhcmlhYmxlJywgJ0Bwb3AnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHBhcmFtZXRlckJvZHlDdXJseUJyYWNlOiBbXHJcbiAgICAgICAgICAgIFsvW14jOiUqQFxcLSFffV0rLywgJ3ZhcmlhYmxlJ10sXHJcbiAgICAgICAgICAgIFsvWyM6JSpAXFwtIV9dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1t9XS8sICd2YXJpYWJsZScsICdAcG9wJ10sXHJcbiAgICAgICAgXSxcclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==