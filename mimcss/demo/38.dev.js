(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js ***!
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
        lineComment: '//'
    },
    brackets: [['{', '}'], ['[', ']'], ['(', ')']],
    autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
    ],
    folding: {
        offSide: true
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.pug',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.array', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' }
    ],
    keywords: ['append', 'block', 'case', 'default', 'doctype', 'each', 'else', 'extends',
        'for', 'if', 'in', 'include', 'mixin', 'typeof', 'unless', 'var', 'when'],
    tags: [
        'a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio',
        'b', 'base', 'basefont', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
        'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command',
        'datalist', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt',
        'em', 'embed',
        'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
        'i', 'iframe', 'img', 'input', 'ins',
        'keygen', 'kbd',
        'label', 'li', 'link',
        'map', 'mark', 'menu', 'meta', 'meter',
        'nav', 'noframes', 'noscript',
        'object', 'ol', 'optgroup', 'option', 'output',
        'p', 'param', 'pre', 'progress',
        'q',
        'rp', 'rt', 'ruby',
        's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup',
        'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'tracks', 'tt',
        'u', 'ul',
        'video',
        'wbr'
    ],
    // we include these common regular expressions
    symbols: /[\+\-\*\%\&\|\!\=\/\.\,\:]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            // Tag or a keyword at start
            [/^(\s*)([a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        '$2@tags': {
                            cases: {
                                '@eos': ['', 'tag'],
                                '@default': ['', { token: 'tag', next: '@tag.$1' },]
                            }
                        },
                        '$2@keywords': ['', { token: 'keyword.$2' },],
                        '@default': ['', '',]
                    }
                }
            ],
            // id
            [/^(\s*)(#[a-zA-Z_-][\w-]*)/, {
                    cases: {
                        '@eos': ['', 'tag.id'],
                        '@default': ['', { token: 'tag.id', next: '@tag.$1' }]
                    }
                }],
            // class
            [/^(\s*)(\.[a-zA-Z_-][\w-]*)/, {
                    cases: {
                        '@eos': ['', 'tag.class'],
                        '@default': ['', { token: 'tag.class', next: '@tag.$1' }]
                    }
                }],
            // plain text with pipe
            [/^(\s*)(\|.*)$/, ''],
            { include: '@whitespace' },
            // keywords
            [/[a-zA-Z_$][\w$]*/, {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': ''
                    }
                }],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d+\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\d+/, 'number'],
            // strings:
            [/"/, 'string', '@string."'],
            [/'/, 'string', '@string.\''],
        ],
        tag: [
            [/(\.)(\s*$)/, [{ token: 'delimiter', next: '@blockText.$S2.' }, '']],
            [/\s+/, { token: '', next: '@simpleText' }],
            // id
            [/#[a-zA-Z_-][\w-]*/, {
                    cases: {
                        '@eos': { token: 'tag.id', next: '@pop' },
                        '@default': 'tag.id'
                    }
                }],
            // class
            [/\.[a-zA-Z_-][\w-]*/, {
                    cases: {
                        '@eos': { token: 'tag.class', next: '@pop' },
                        '@default': 'tag.class'
                    }
                }],
            // attributes
            [/\(/, { token: 'delimiter.parenthesis', next: '@attributeList' }],
        ],
        simpleText: [
            [/[^#]+$/, { token: '', next: '@popall' }],
            [/[^#]+/, { token: '' }],
            // interpolation
            [/(#{)([^}]*)(})/, {
                    cases: {
                        '@eos': ['interpolation.delimiter', 'interpolation', { token: 'interpolation.delimiter', next: '@popall' }],
                        '@default': ['interpolation.delimiter', 'interpolation', 'interpolation.delimiter']
                    }
                }],
            [/#$/, { token: '', next: '@popall' }],
            [/#/, '']
        ],
        attributeList: [
            [/\s+/, ''],
            [/(\w+)(\s*=\s*)("|')/, ['attribute.name', 'delimiter', { token: 'attribute.value', next: '@value.$3' }]],
            [/\w+/, 'attribute.name'],
            [/,/, {
                    cases: {
                        '@eos': { token: 'attribute.delimiter', next: '@popall' },
                        '@default': 'attribute.delimiter'
                    }
                }],
            [/\)$/, { token: 'delimiter.parenthesis', next: '@popall' }],
            [/\)/, { token: 'delimiter.parenthesis', next: '@pop' }],
        ],
        whitespace: [
            [/^(\s*)(\/\/.*)$/, { token: 'comment', next: '@blockText.$1.comment' }],
            [/[ \t\r\n]+/, ''],
            [/<!--/, { token: 'comment', next: '@comment' }],
        ],
        blockText: [
            [/^\s+.*$/, {
                    cases: {
                        '($S2\\s+.*$)': { token: '$S3' },
                        '@default': { token: '@rematch', next: '@popall' }
                    }
                }],
            [/./, { token: '@rematch', next: '@popall' }]
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, { token: 'comment', next: '@pop' }],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
        string: [
            [/[^\\"'#]+/, {
                    cases: {
                        '@eos': { token: 'string', next: '@popall' },
                        '@default': 'string'
                    }
                }],
            [/@escapes/, {
                    cases: {
                        '@eos': { token: 'string.escape', next: '@popall' },
                        '@default': 'string.escape'
                    }
                }],
            [/\\./, {
                    cases: {
                        '@eos': { token: 'string.escape.invalid', next: '@popall' },
                        '@default': 'string.escape.invalid'
                    }
                }],
            // interpolation
            [/(#{)([^}]*)(})/, ['interpolation.delimiter', 'interpolation', 'interpolation.delimiter']],
            [/#/, 'string'],
            [/["']/, {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': { token: 'string' }
                    }
                }],
        ],
        // Almost identical to above, except for escapes and the output token
        value: [
            [/[^\\"']+/, {
                    cases: {
                        '@eos': { token: 'attribute.value', next: '@popall' },
                        '@default': 'attribute.value'
                    }
                }],
            [/\\./, {
                    cases: {
                        '@eos': { token: 'attribute.value', next: '@popall' },
                        '@default': 'attribute.value'
                    }
                }],
            [/["']/, {
                    cases: {
                        '$#==$S2': { token: 'attribute.value', next: '@pop' },
                        '@default': { token: 'attribute.value' }
                    }
                }],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3B1Zy9wdWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLEtBQUs7QUFDdkI7QUFDQSxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTLFNBQVMsWUFBWSxpQ0FBaUM7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQyxZQUFZLEdBQUc7QUFDM0QsU0FBUyxrREFBa0Q7QUFDM0QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0EseUJBQXlCO0FBQ3pCLDZDQUE2QyxzQkFBc0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxtQ0FBbUM7QUFDN0U7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsc0NBQXNDO0FBQ2hGO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhDQUE4QztBQUMzRSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQ0FBZ0M7QUFDakU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvQkFBb0IseURBQXlEO0FBQzdFO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JELHVCQUF1QixZQUFZO0FBQ25DO0FBQ0EsaUJBQWlCLEtBQUssS0FBSztBQUMzQjtBQUNBLDhFQUE4RSxvREFBb0Q7QUFDbEk7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLDhDQUE4QztBQUNuSDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0RBQWdEO0FBQ2pGO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIscUJBQXFCLGtEQUFrRDtBQUN2RSxvQkFBb0IsK0NBQStDO0FBQ25FO0FBQ0E7QUFDQSxpQ0FBaUMsa0RBQWtEO0FBQ25GO0FBQ0Esc0JBQXNCLHFDQUFxQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxlQUFlO0FBQ3hELHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQixtQkFBbUIscUNBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1DQUFtQztBQUNwRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQ0FBaUMsMENBQTBDO0FBQzNFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlDQUFpQyxrREFBa0Q7QUFDbkY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQixLQUFLLEtBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRSxxQ0FBcUM7QUFDckM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0Q0FBNEM7QUFDN0U7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUNBQWlDLDRDQUE0QztBQUM3RTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxvQ0FBb0MseUNBQXlDO0FBQzdFLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIzOC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtbJ3snLCAnfSddLCBbJ1snLCAnXSddLCBbJygnLCAnKSddXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG9mZlNpZGU6IHRydWVcclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcucHVnJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmFycmF5Jywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9XHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFsnYXBwZW5kJywgJ2Jsb2NrJywgJ2Nhc2UnLCAnZGVmYXVsdCcsICdkb2N0eXBlJywgJ2VhY2gnLCAnZWxzZScsICdleHRlbmRzJyxcclxuICAgICAgICAnZm9yJywgJ2lmJywgJ2luJywgJ2luY2x1ZGUnLCAnbWl4aW4nLCAndHlwZW9mJywgJ3VubGVzcycsICd2YXInLCAnd2hlbiddLFxyXG4gICAgdGFnczogW1xyXG4gICAgICAgICdhJywgJ2FiYnInLCAnYWNyb255bScsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsXHJcbiAgICAgICAgJ2InLCAnYmFzZScsICdiYXNlZm9udCcsICdiZGknLCAnYmRvJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLFxyXG4gICAgICAgICdjYW52YXMnLCAnY2FwdGlvbicsICdjZW50ZXInLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdjb21tYW5kJyxcclxuICAgICAgICAnZGF0YWxpc3QnLCAnZGQnLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpdicsICdkbCcsICdkdCcsXHJcbiAgICAgICAgJ2VtJywgJ2VtYmVkJyxcclxuICAgICAgICAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9udCcsICdmb290ZXInLCAnZm9ybScsICdmcmFtZScsICdmcmFtZXNldCcsXHJcbiAgICAgICAgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJyxcclxuICAgICAgICAnaScsICdpZnJhbWUnLCAnaW1nJywgJ2lucHV0JywgJ2lucycsXHJcbiAgICAgICAgJ2tleWdlbicsICdrYmQnLFxyXG4gICAgICAgICdsYWJlbCcsICdsaScsICdsaW5rJyxcclxuICAgICAgICAnbWFwJywgJ21hcmsnLCAnbWVudScsICdtZXRhJywgJ21ldGVyJyxcclxuICAgICAgICAnbmF2JywgJ25vZnJhbWVzJywgJ25vc2NyaXB0JyxcclxuICAgICAgICAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLFxyXG4gICAgICAgICdwJywgJ3BhcmFtJywgJ3ByZScsICdwcm9ncmVzcycsXHJcbiAgICAgICAgJ3EnLFxyXG4gICAgICAgICdycCcsICdydCcsICdydWJ5JyxcclxuICAgICAgICAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJpa2UnLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsXHJcbiAgICAgICAgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2tzJywgJ3R0JyxcclxuICAgICAgICAndScsICd1bCcsXHJcbiAgICAgICAgJ3ZpZGVvJyxcclxuICAgICAgICAnd2JyJ1xyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bXFwrXFwtXFwqXFwlXFwmXFx8XFwhXFw9XFwvXFwuXFwsXFw6XSsvLFxyXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gVGFnIG9yIGEga2V5d29yZCBhdCBzdGFydFxyXG4gICAgICAgICAgICBbL14oXFxzKikoW2EtekEtWl8tXVtcXHctXSopLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJDJAdGFncyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiBbJycsICd0YWcnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJycsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZy4kMScgfSxdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckMkBrZXl3b3Jkcyc6IFsnJywgeyB0b2tlbjogJ2tleXdvcmQuJDInIH0sXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogWycnLCAnJyxdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBpZFxyXG4gICAgICAgICAgICBbL14oXFxzKikoI1thLXpBLVpfLV1bXFx3LV0qKS8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IFsnJywgJ3RhZy5pZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJycsIHsgdG9rZW46ICd0YWcuaWQnLCBuZXh0OiAnQHRhZy4kMScgfV1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gY2xhc3NcclxuICAgICAgICAgICAgWy9eKFxccyopKFxcLlthLXpBLVpfLV1bXFx3LV0qKS8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IFsnJywgJ3RhZy5jbGFzcyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJycsIHsgdG9rZW46ICd0YWcuY2xhc3MnLCBuZXh0OiAnQHRhZy4kMScgfV1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gcGxhaW4gdGV4dCB3aXRoIHBpcGVcclxuICAgICAgICAgICAgWy9eKFxccyopKFxcfC4qKSQvLCAnJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICAvLyBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbL1thLXpBLVpfJF1bXFx3JF0qLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXHJcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvXFxkK1xcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXHJcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nczpcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZy5cIiddLFxyXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXFwnJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWc6IFtcclxuICAgICAgICAgICAgWy8oXFwuKShcXHMqJCkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAYmxvY2tUZXh0LiRTMi4nIH0sICcnXV0sXHJcbiAgICAgICAgICAgIFsvXFxzKy8sIHsgdG9rZW46ICcnLCBuZXh0OiAnQHNpbXBsZVRleHQnIH1dLFxyXG4gICAgICAgICAgICAvLyBpZFxyXG4gICAgICAgICAgICBbLyNbYS16QS1aXy1dW1xcdy1dKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICd0YWcuaWQnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3RhZy5pZCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gY2xhc3NcclxuICAgICAgICAgICAgWy9cXC5bYS16QS1aXy1dW1xcdy1dKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICd0YWcuY2xhc3MnLCBuZXh0OiAnQHBvcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3RhZy5jbGFzcydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBbL1xcKC8sIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQGF0dHJpYnV0ZUxpc3QnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2ltcGxlVGV4dDogW1xyXG4gICAgICAgICAgICBbL1teI10rJC8sIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcGFsbCcgfV0sXHJcbiAgICAgICAgICAgIFsvW14jXSsvLCB7IHRva2VuOiAnJyB9XSxcclxuICAgICAgICAgICAgLy8gaW50ZXJwb2xhdGlvblxyXG4gICAgICAgICAgICBbLygjeykoW159XSopKH0pLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogWydpbnRlcnBvbGF0aW9uLmRlbGltaXRlcicsICdpbnRlcnBvbGF0aW9uJywgeyB0b2tlbjogJ2ludGVycG9sYXRpb24uZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3BhbGwnIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJ2ludGVycG9sYXRpb24uZGVsaW1pdGVyJywgJ2ludGVycG9sYXRpb24nLCAnaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXInXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbLyMkLywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wYWxsJyB9XSxcclxuICAgICAgICAgICAgWy8jLywgJyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhdHRyaWJ1dGVMaXN0OiBbXHJcbiAgICAgICAgICAgIFsvXFxzKy8sICcnXSxcclxuICAgICAgICAgICAgWy8oXFx3KykoXFxzKj1cXHMqKShcInwnKS8sIFsnYXR0cmlidXRlLm5hbWUnLCAnZGVsaW1pdGVyJywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIG5leHQ6ICdAdmFsdWUuJDMnIH1dXSxcclxuICAgICAgICAgICAgWy9cXHcrLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvLC8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdhdHRyaWJ1dGUuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdhdHRyaWJ1dGUuZGVsaW1pdGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1xcKSQvLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3BhbGwnIH1dLFxyXG4gICAgICAgICAgICBbL1xcKS8sIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvXihcXHMqKShcXC9cXC8uKikkLywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGJsb2NrVGV4dC4kMS5jb21tZW50JyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICBbLzwhLS0vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAY29tbWVudCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBibG9ja1RleHQ6IFtcclxuICAgICAgICAgICAgWy9eXFxzKy4qJC8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCRTMlxcXFxzKy4qJCknOiB7IHRva2VuOiAnJFMzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcGFsbCcgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbLy4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcGFsbCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXjxcXC1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcclxuICAgICAgICAgICAgWy8tLT4vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQuY29udGVudC5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvWzxcXC1dLywgJ2NvbW1lbnQuY29udGVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIicjXSsvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLmVzY2FwZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlLmludmFsaWQnLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZy5lc2NhcGUuaW52YWxpZCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gaW50ZXJwb2xhdGlvblxyXG4gICAgICAgICAgICBbLygjeykoW159XSopKH0pLywgWydpbnRlcnBvbGF0aW9uLmRlbGltaXRlcicsICdpbnRlcnBvbGF0aW9uJywgJ2ludGVycG9sYXRpb24uZGVsaW1pdGVyJ11dLFxyXG4gICAgICAgICAgICBbLyMvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvW1wiJ10vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdzdHJpbmcnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFsbW9zdCBpZGVudGljYWwgdG8gYWJvdmUsIGV4Y2VwdCBmb3IgZXNjYXBlcyBhbmQgdGhlIG91dHB1dCB0b2tlblxyXG4gICAgICAgIHZhbHVlOiBbXHJcbiAgICAgICAgICAgIFsvW15cXFxcXCInXSsvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdhdHRyaWJ1dGUudmFsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvXFxcXC4vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdhdHRyaWJ1dGUudmFsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvW1wiJ10vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgbmV4dDogJ0Bwb3AnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==