(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/r/r.js":
/*!******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/r/r.js ***!
  \******************************************************************/
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
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.r',
    roxygen: [
        '@param',
        '@return',
        '@name',
        '@rdname',
        '@examples',
        '@include',
        '@docType',
        '@S3method',
        '@TODO',
        '@aliases',
        '@alias',
        '@assignee',
        '@author',
        '@callGraphDepth',
        '@callGraph',
        '@callGraphPrimitives',
        '@concept',
        '@exportClass',
        '@exportMethod',
        '@exportPattern',
        '@export',
        '@formals',
        '@format',
        '@importClassesFrom',
        '@importFrom',
        '@importMethodsFrom',
        '@import',
        '@keywords',
        '@method',
        '@nord',
        '@note',
        '@references',
        '@seealso',
        '@setClass',
        '@slot',
        '@source',
        '@title',
        '@usage'
    ],
    constants: [
        'NULL',
        'FALSE',
        'TRUE',
        'NA',
        'Inf',
        'NaN ',
        'NA_integer_',
        'NA_real_',
        'NA_complex_',
        'NA_character_ ',
        'T',
        'F',
        'LETTERS',
        'letters',
        'month.abb',
        'month.name',
        'pi',
        'R.version.string'
    ],
    keywords: [
        'break',
        'next',
        'return',
        'if',
        'else',
        'for',
        'in',
        'repeat',
        'while',
        'array',
        'category',
        'character',
        'complex',
        'double',
        'function',
        'integer',
        'list',
        'logical',
        'matrix',
        'numeric',
        'vector',
        'data.frame',
        'factor',
        'library',
        'require',
        'attach',
        'detach',
        'source'
    ],
    special: [
        '\\n',
        '\\r',
        '\\t',
        '\\b',
        '\\a',
        '\\f',
        '\\v',
        '\\\'',
        '\\"',
        '\\\\'
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@numbers' },
            { include: '@strings' },
            [/[{}\[\]()]/, '@brackets'],
            { include: '@operators' },
            [/#'/, 'comment.doc', '@roxygen'],
            [/(^#.*$)/, 'comment'],
            [/\s+/, 'white'],
            [/[,:;]/, 'delimiter'],
            [/@[a-zA-Z]\w*/, 'tag'],
            [/[a-zA-Z]\w*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@constants': 'constant',
                        '@default': 'identifier'
                    }
                }]
        ],
        // Recognize Roxygen comments
        roxygen: [
            [/@\w+/, {
                    cases: {
                        '@roxygen': 'tag',
                        '@eos': { token: 'comment.doc', next: '@pop' },
                        '@default': 'comment.doc'
                    }
                }],
            [/\s+/, {
                    cases: {
                        '@eos': { token: 'comment.doc', next: '@pop' },
                        '@default': 'comment.doc'
                    }
                }],
            [/.*/, { token: 'comment.doc', next: '@pop' }]
        ],
        // Recognize positives, negatives, decimals, imaginaries, and scientific notation
        numbers: [
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?/, 'number']
        ],
        // Recognize operators
        operators: [
            [/<{1,2}-/, 'operator'],
            [/->{1,2}/, 'operator'],
            [/%[^%\s]+%/, 'operator'],
            [/\*\*/, 'operator'],
            [/%%/, 'operator'],
            [/&&/, 'operator'],
            [/\|\|/, 'operator'],
            [/<</, 'operator'],
            [/>>/, 'operator'],
            [/[-+=&|!<>^~*/:$]/, 'operator']
        ],
        // Recognize strings, including those broken across lines
        strings: [
            [/'/, 'string.escape', '@stringBody'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/\\./, {
                    cases: {
                        '@special': 'string',
                        '@default': 'error-token'
                    }
                }],
            [/'/, 'string.escape', '@popall'],
            [/./, 'string'],
        ],
        dblStringBody: [
            [/\\./, {
                    cases: {
                        '@special': 'string',
                        '@default': 'error-token'
                    }
                }],
            [/"/, 'string.escape', '@popall'],
            [/./, 'string'],
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Ivci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsb0RBQW9EO0FBQzdELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxpQkFBaUI7QUFDakIsYUFBYSx3QkFBd0I7QUFDckM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQ0FBcUM7QUFDdEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUNBQWlDLHFDQUFxQztBQUN0RTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG9CQUFvQixxQ0FBcUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJO0FBQ3BCLGlCQUFpQixJQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNDAuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJyMnXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgIF1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcucicsXHJcbiAgICByb3h5Z2VuOiBbXHJcbiAgICAgICAgJ0BwYXJhbScsXHJcbiAgICAgICAgJ0ByZXR1cm4nLFxyXG4gICAgICAgICdAbmFtZScsXHJcbiAgICAgICAgJ0ByZG5hbWUnLFxyXG4gICAgICAgICdAZXhhbXBsZXMnLFxyXG4gICAgICAgICdAaW5jbHVkZScsXHJcbiAgICAgICAgJ0Bkb2NUeXBlJyxcclxuICAgICAgICAnQFMzbWV0aG9kJyxcclxuICAgICAgICAnQFRPRE8nLFxyXG4gICAgICAgICdAYWxpYXNlcycsXHJcbiAgICAgICAgJ0BhbGlhcycsXHJcbiAgICAgICAgJ0Bhc3NpZ25lZScsXHJcbiAgICAgICAgJ0BhdXRob3InLFxyXG4gICAgICAgICdAY2FsbEdyYXBoRGVwdGgnLFxyXG4gICAgICAgICdAY2FsbEdyYXBoJyxcclxuICAgICAgICAnQGNhbGxHcmFwaFByaW1pdGl2ZXMnLFxyXG4gICAgICAgICdAY29uY2VwdCcsXHJcbiAgICAgICAgJ0BleHBvcnRDbGFzcycsXHJcbiAgICAgICAgJ0BleHBvcnRNZXRob2QnLFxyXG4gICAgICAgICdAZXhwb3J0UGF0dGVybicsXHJcbiAgICAgICAgJ0BleHBvcnQnLFxyXG4gICAgICAgICdAZm9ybWFscycsXHJcbiAgICAgICAgJ0Bmb3JtYXQnLFxyXG4gICAgICAgICdAaW1wb3J0Q2xhc3Nlc0Zyb20nLFxyXG4gICAgICAgICdAaW1wb3J0RnJvbScsXHJcbiAgICAgICAgJ0BpbXBvcnRNZXRob2RzRnJvbScsXHJcbiAgICAgICAgJ0BpbXBvcnQnLFxyXG4gICAgICAgICdAa2V5d29yZHMnLFxyXG4gICAgICAgICdAbWV0aG9kJyxcclxuICAgICAgICAnQG5vcmQnLFxyXG4gICAgICAgICdAbm90ZScsXHJcbiAgICAgICAgJ0ByZWZlcmVuY2VzJyxcclxuICAgICAgICAnQHNlZWFsc28nLFxyXG4gICAgICAgICdAc2V0Q2xhc3MnLFxyXG4gICAgICAgICdAc2xvdCcsXHJcbiAgICAgICAgJ0Bzb3VyY2UnLFxyXG4gICAgICAgICdAdGl0bGUnLFxyXG4gICAgICAgICdAdXNhZ2UnXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnRzOiBbXHJcbiAgICAgICAgJ05VTEwnLFxyXG4gICAgICAgICdGQUxTRScsXHJcbiAgICAgICAgJ1RSVUUnLFxyXG4gICAgICAgICdOQScsXHJcbiAgICAgICAgJ0luZicsXHJcbiAgICAgICAgJ05hTiAnLFxyXG4gICAgICAgICdOQV9pbnRlZ2VyXycsXHJcbiAgICAgICAgJ05BX3JlYWxfJyxcclxuICAgICAgICAnTkFfY29tcGxleF8nLFxyXG4gICAgICAgICdOQV9jaGFyYWN0ZXJfICcsXHJcbiAgICAgICAgJ1QnLFxyXG4gICAgICAgICdGJyxcclxuICAgICAgICAnTEVUVEVSUycsXHJcbiAgICAgICAgJ2xldHRlcnMnLFxyXG4gICAgICAgICdtb250aC5hYmInLFxyXG4gICAgICAgICdtb250aC5uYW1lJyxcclxuICAgICAgICAncGknLFxyXG4gICAgICAgICdSLnZlcnNpb24uc3RyaW5nJ1xyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ2JyZWFrJyxcclxuICAgICAgICAnbmV4dCcsXHJcbiAgICAgICAgJ3JldHVybicsXHJcbiAgICAgICAgJ2lmJyxcclxuICAgICAgICAnZWxzZScsXHJcbiAgICAgICAgJ2ZvcicsXHJcbiAgICAgICAgJ2luJyxcclxuICAgICAgICAncmVwZWF0JyxcclxuICAgICAgICAnd2hpbGUnLFxyXG4gICAgICAgICdhcnJheScsXHJcbiAgICAgICAgJ2NhdGVnb3J5JyxcclxuICAgICAgICAnY2hhcmFjdGVyJyxcclxuICAgICAgICAnY29tcGxleCcsXHJcbiAgICAgICAgJ2RvdWJsZScsXHJcbiAgICAgICAgJ2Z1bmN0aW9uJyxcclxuICAgICAgICAnaW50ZWdlcicsXHJcbiAgICAgICAgJ2xpc3QnLFxyXG4gICAgICAgICdsb2dpY2FsJyxcclxuICAgICAgICAnbWF0cml4JyxcclxuICAgICAgICAnbnVtZXJpYycsXHJcbiAgICAgICAgJ3ZlY3RvcicsXHJcbiAgICAgICAgJ2RhdGEuZnJhbWUnLFxyXG4gICAgICAgICdmYWN0b3InLFxyXG4gICAgICAgICdsaWJyYXJ5JyxcclxuICAgICAgICAncmVxdWlyZScsXHJcbiAgICAgICAgJ2F0dGFjaCcsXHJcbiAgICAgICAgJ2RldGFjaCcsXHJcbiAgICAgICAgJ3NvdXJjZSdcclxuICAgIF0sXHJcbiAgICBzcGVjaWFsOiBbXHJcbiAgICAgICAgJ1xcXFxuJyxcclxuICAgICAgICAnXFxcXHInLFxyXG4gICAgICAgICdcXFxcdCcsXHJcbiAgICAgICAgJ1xcXFxiJyxcclxuICAgICAgICAnXFxcXGEnLFxyXG4gICAgICAgICdcXFxcZicsXHJcbiAgICAgICAgJ1xcXFx2JyxcclxuICAgICAgICAnXFxcXFxcJycsXHJcbiAgICAgICAgJ1xcXFxcIicsXHJcbiAgICAgICAgJ1xcXFxcXFxcJ1xyXG4gICAgXSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfVxyXG4gICAgXSxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICBbL1t7fVxcW1xcXSgpXS8sICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG9wZXJhdG9ycycgfSxcclxuICAgICAgICAgICAgWy8jJy8sICdjb21tZW50LmRvYycsICdAcm94eWdlbiddLFxyXG4gICAgICAgICAgICBbLyheIy4qJCkvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xccysvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy9bLDo7XS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9AW2EtekEtWl1cXHcqLywgJ3RhZyddLFxyXG4gICAgICAgICAgICBbL1thLXpBLVpdXFx3Ki8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGNvbnN0YW50cyc6ICdjb25zdGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBSZWNvZ25pemUgUm94eWdlbiBjb21tZW50c1xyXG4gICAgICAgIHJveHlnZW46IFtcclxuICAgICAgICAgICAgWy9AXFx3Ky8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQHJveHlnZW4nOiAndGFnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnY29tbWVudC5kb2MnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2NvbW1lbnQuZG9jJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1xccysvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnY29tbWVudC5kb2MnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2NvbW1lbnQuZG9jJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbLy4qLywgeyB0b2tlbjogJ2NvbW1lbnQuZG9jJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBSZWNvZ25pemUgcG9zaXRpdmVzLCBuZWdhdGl2ZXMsIGRlY2ltYWxzLCBpbWFnaW5hcmllcywgYW5kIHNjaWVudGlmaWMgbm90YXRpb25cclxuICAgICAgICBudW1iZXJzOiBbXHJcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxyXG4gICAgICAgICAgICBbLy0/KFxcZCpcXC4pP1xcZCsoW2VFXVsrXFwtXT9cXGQrKT8vLCAnbnVtYmVyJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIFJlY29nbml6ZSBvcGVyYXRvcnNcclxuICAgICAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAgICAgWy88ezEsMn0tLywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgICAgIFsvLT57MSwyfS8sICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbLyVbXiVcXHNdKyUvLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWy9cXCpcXCovLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWy8lJS8sICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbLyYmLywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgICAgIFsvXFx8XFx8LywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgICAgIFsvPDwvLCAnb3BlcmF0b3InXSxcclxuICAgICAgICAgICAgWy8+Pi8sICdvcGVyYXRvciddLFxyXG4gICAgICAgICAgICBbL1stKz0mfCE8Pl5+Ki86JF0vLCAnb3BlcmF0b3InXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gUmVjb2duaXplIHN0cmluZ3MsIGluY2x1ZGluZyB0aG9zZSBicm9rZW4gYWNyb3NzIGxpbmVzXHJcbiAgICAgICAgc3RyaW5nczogW1xyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmVzY2FwZScsICdAc3RyaW5nQm9keSddLFxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy5lc2NhcGUnLCAnQGRibFN0cmluZ0JvZHknXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nQm9keTogW1xyXG4gICAgICAgICAgICBbL1xcXFwuLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc3BlY2lhbCc6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnZXJyb3ItdG9rZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcclxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGJsU3RyaW5nQm9keTogW1xyXG4gICAgICAgICAgICBbL1xcXFwuLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc3BlY2lhbCc6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnZXJyb3ItdG9rZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXHJcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=