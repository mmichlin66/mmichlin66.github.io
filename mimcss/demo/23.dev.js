(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/less/less.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/less/less.js ***!
  \************************************************************************/
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
    wordPattern: /(#?-?\d*\.\d\w*%?)|([@#!.:]?[\w-?]+%?)|[@#!.]/g,
    comments: {
        blockComment: ['/*', '*/'],
        lineComment: '//'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] },
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
            start: new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),
            end: new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.less',
    identifier: '-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    identifierPlus: '-?-?([a-zA-Z:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    tokenizer: {
        root: [
            { include: '@nestedJSBegin' },
            ['[ \\t\\r\\n]+', ''],
            { include: '@comments' },
            { include: '@keyword' },
            { include: '@strings' },
            { include: '@numbers' },
            ['[*_]?[a-zA-Z\\-\\s]+(?=:.*(;|(\\\\$)))', 'attribute.name', '@attribute'],
            ['url(\\-prefix)?\\(', { token: 'tag', next: '@urldeclaration' }],
            ['[{}()\\[\\]]', '@brackets'],
            ['[,:;]', 'delimiter'],
            ['#@identifierPlus', 'tag.id'],
            ['&', 'tag'],
            ['\\.@identifierPlus(?=\\()', 'tag.class', '@attribute'],
            ['\\.@identifierPlus', 'tag.class'],
            ['@identifierPlus', 'tag'],
            { include: '@operators' },
            ['@(@identifier(?=[:,\\)]))', 'variable', '@attribute'],
            ['@(@identifier)', 'variable'],
            ['@', 'key', '@atRules']
        ],
        nestedJSBegin: [
            ['``', 'delimiter.backtick'],
            ['`', { token: 'delimiter.backtick', next: '@nestedJSEnd', nextEmbedded: 'text/javascript' }],
        ],
        nestedJSEnd: [
            ['`', { token: 'delimiter.backtick', next: '@pop', nextEmbedded: '@pop' }],
        ],
        operators: [
            ['[<>=\\+\\-\\*\\/\\^\\|\\~]', 'operator']
        ],
        keyword: [
            ['(@[\\s]*import|![\\s]*important|true|false|when|iscolor|isnumber|isstring|iskeyword|isurl|ispixel|ispercentage|isem|hue|saturation|lightness|alpha|lighten|darken|saturate|desaturate|fadein|fadeout|fade|spin|mix|round|ceil|floor|percentage)\\b', 'keyword']
        ],
        urldeclaration: [
            { include: '@strings' },
            ['[^)\r\n]+', 'string'],
            ['\\)', { token: 'tag', next: '@pop' }],
        ],
        attribute: [
            { include: '@nestedJSBegin' },
            { include: '@comments' },
            { include: '@strings' },
            { include: '@numbers' },
            { include: '@keyword' },
            ['[a-zA-Z\\-]+(?=\\()', 'attribute.value', '@attribute'],
            ['>', 'operator', '@pop'],
            ['@identifier', 'attribute.value'],
            { include: '@operators' },
            ['@(@identifier)', 'variable'],
            ['[)\\}]', '@brackets', '@pop'],
            ['[{}()\\[\\]>]', '@brackets'],
            ['[;]', 'delimiter', '@pop'],
            ['[,=:]', 'delimiter'],
            ['\\s', ''],
            ['.', 'attribute.value']
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment'],
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            ['.', 'comment'],
        ],
        numbers: [
            ['(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?', { token: 'attribute.value.number', next: '@units' }],
            ['#[0-9a-fA-F_]+(?!\\w)', 'attribute.value.hex']
        ],
        units: [
            ['(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?', 'attribute.value.unit', '@pop']
        ],
        strings: [
            ['~?"', { token: 'string.delimiter', next: '@stringsEndDoubleQuote' }],
            ['~?\'', { token: 'string.delimiter', next: '@stringsEndQuote' }]
        ],
        stringsEndDoubleQuote: [
            ['\\\\"', 'string'],
            ['"', { token: 'string.delimiter', next: '@popall' }],
            ['.', 'string']
        ],
        stringsEndQuote: [
            ['\\\\\'', 'string'],
            ['\'', { token: 'string.delimiter', next: '@popall' }],
            ['.', 'string']
        ],
        atRules: [
            { include: '@comments' },
            { include: '@strings' },
            ['[()]', 'delimiter'],
            ['[\\{;]', 'delimiter', '@pop'],
            ['.', 'key']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2xlc3MvbGVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxpQ0FBaUM7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyx3REFBd0Q7QUFDakU7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtEQUFrRCxJQUFJLG1EQUFtRCxJQUFJO0FBQzdHLHdEQUF3RCxJQUFJLHFEQUFxRCxJQUFJO0FBQ3JIO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsb0RBQW9EO0FBQzdELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLDBDQUEwQztBQUMxQyxvQ0FBb0Msd0NBQXdDO0FBQzVFLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxRkFBcUY7QUFDeEc7QUFDQTtBQUNBLG1CQUFtQixrRUFBa0U7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0EsYUFBYSw0QkFBNEI7QUFDekMsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrREFBa0Q7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDREQUE0RDtBQUNqRixzQkFBc0Isc0RBQXNEO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBNkM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQTZDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjIzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKCM/LT9cXGQqXFwuXFxkXFx3KiU/KXwoW0AjIS46XT9bXFx3LT9dKyU/KXxbQCMhLl0vZyxcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLydcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddLFxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgIF0sXHJcbiAgICBmb2xkaW5nOiB7XHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccypcXFxcL1xcXFwqXFxcXHMqI3JlZ2lvblxcXFxiXFxcXHMqKC4qPylcXFxccypcXFxcKlxcXFwvXCIpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNlbmRyZWdpb25cXFxcYi4qXFxcXCpcXFxcL1wiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcubGVzcycsXHJcbiAgICBpZGVudGlmaWVyOiAnLT8tPyhbYS16QS1aXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkoW1xcXFx3XFxcXC1dfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKSonLFxyXG4gICAgaWRlbnRpZmllclBsdXM6ICctPy0/KFthLXpBLVo6Ll18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKFtcXFxcd1xcXFwtOi5dfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKSonLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScgfVxyXG4gICAgXSxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG5lc3RlZEpTQmVnaW4nIH0sXHJcbiAgICAgICAgICAgIFsnWyBcXFxcdFxcXFxyXFxcXG5dKycsICcnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAa2V5d29yZCcgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxyXG4gICAgICAgICAgICBbJ1sqX10/W2EtekEtWlxcXFwtXFxcXHNdKyg/PTouKig7fChcXFxcXFxcXCQpKSknLCAnYXR0cmlidXRlLm5hbWUnLCAnQGF0dHJpYnV0ZSddLFxyXG4gICAgICAgICAgICBbJ3VybChcXFxcLXByZWZpeCk/XFxcXCgnLCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0B1cmxkZWNsYXJhdGlvbicgfV0sXHJcbiAgICAgICAgICAgIFsnW3t9KClcXFxcW1xcXFxdXScsICdAYnJhY2tldHMnXSxcclxuICAgICAgICAgICAgWydbLDo7XScsICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWycjQGlkZW50aWZpZXJQbHVzJywgJ3RhZy5pZCddLFxyXG4gICAgICAgICAgICBbJyYnLCAndGFnJ10sXHJcbiAgICAgICAgICAgIFsnXFxcXC5AaWRlbnRpZmllclBsdXMoPz1cXFxcKCknLCAndGFnLmNsYXNzJywgJ0BhdHRyaWJ1dGUnXSxcclxuICAgICAgICAgICAgWydcXFxcLkBpZGVudGlmaWVyUGx1cycsICd0YWcuY2xhc3MnXSxcclxuICAgICAgICAgICAgWydAaWRlbnRpZmllclBsdXMnLCAndGFnJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BvcGVyYXRvcnMnIH0sXHJcbiAgICAgICAgICAgIFsnQChAaWRlbnRpZmllcig/PVs6LFxcXFwpXSkpJywgJ3ZhcmlhYmxlJywgJ0BhdHRyaWJ1dGUnXSxcclxuICAgICAgICAgICAgWydAKEBpZGVudGlmaWVyKScsICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICBbJ0AnLCAna2V5JywgJ0BhdFJ1bGVzJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIG5lc3RlZEpTQmVnaW46IFtcclxuICAgICAgICAgICAgWydgYCcsICdkZWxpbWl0ZXIuYmFja3RpY2snXSxcclxuICAgICAgICAgICAgWydgJywgeyB0b2tlbjogJ2RlbGltaXRlci5iYWNrdGljaycsIG5leHQ6ICdAbmVzdGVkSlNFbmQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmVzdGVkSlNFbmQ6IFtcclxuICAgICAgICAgICAgWydgJywgeyB0b2tlbjogJ2RlbGltaXRlci5iYWNrdGljaycsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAgICAgWydbPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH5dJywgJ29wZXJhdG9yJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGtleXdvcmQ6IFtcclxuICAgICAgICAgICAgWycoQFtcXFxcc10qaW1wb3J0fCFbXFxcXHNdKmltcG9ydGFudHx0cnVlfGZhbHNlfHdoZW58aXNjb2xvcnxpc251bWJlcnxpc3N0cmluZ3xpc2tleXdvcmR8aXN1cmx8aXNwaXhlbHxpc3BlcmNlbnRhZ2V8aXNlbXxodWV8c2F0dXJhdGlvbnxsaWdodG5lc3N8YWxwaGF8bGlnaHRlbnxkYXJrZW58c2F0dXJhdGV8ZGVzYXR1cmF0ZXxmYWRlaW58ZmFkZW91dHxmYWRlfHNwaW58bWl4fHJvdW5kfGNlaWx8Zmxvb3J8cGVyY2VudGFnZSlcXFxcYicsICdrZXl3b3JkJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVybGRlY2xhcmF0aW9uOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICBbJ1teKVxcclxcbl0rJywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGF0dHJpYnV0ZTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbmVzdGVkSlNCZWdpbicgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BrZXl3b3JkJyB9LFxyXG4gICAgICAgICAgICBbJ1thLXpBLVpcXFxcLV0rKD89XFxcXCgpJywgJ2F0dHJpYnV0ZS52YWx1ZScsICdAYXR0cmlidXRlJ10sXHJcbiAgICAgICAgICAgIFsnPicsICdvcGVyYXRvcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BvcGVyYXRvcnMnIH0sXHJcbiAgICAgICAgICAgIFsnQChAaWRlbnRpZmllciknLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgWydbKVxcXFx9XScsICdAYnJhY2tldHMnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJ1t7fSgpXFxcXFtcXFxcXT5dJywgJ0BicmFja2V0cyddLFxyXG4gICAgICAgICAgICBbJ1s7XScsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJ1ssPTpdJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJ1xcXFxzJywgJyddLFxyXG4gICAgICAgICAgICBbJy4nLCAnYXR0cmlidXRlLnZhbHVlJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcKicsICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcLysuKicsICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsnXFxcXCpcXFxcLycsICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWycuJywgJ2NvbW1lbnQnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG51bWJlcnM6IFtcclxuICAgICAgICAgICAgWycoXFxcXGQqXFxcXC4pP1xcXFxkKyhbZUVdW1xcXFwtK10/XFxcXGQrKT8nLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlLm51bWJlcicsIG5leHQ6ICdAdW5pdHMnIH1dLFxyXG4gICAgICAgICAgICBbJyNbMC05YS1mQS1GX10rKD8hXFxcXHcpJywgJ2F0dHJpYnV0ZS52YWx1ZS5oZXgnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdW5pdHM6IFtcclxuICAgICAgICAgICAgWycoZW18ZXh8Y2h8cmVtfHZtaW58dm1heHx2d3x2aHx2bXxjbXxtbXxpbnxweHxwdHxwY3xkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenwlKT8nLCAnYXR0cmlidXRlLnZhbHVlLnVuaXQnLCAnQHBvcCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgIFsnfj9cIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdzRW5kRG91YmxlUXVvdGUnIH1dLFxyXG4gICAgICAgICAgICBbJ34/XFwnJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ3NFbmRRdW90ZScgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ3NFbmREb3VibGVRdW90ZTogW1xyXG4gICAgICAgICAgICBbJ1xcXFxcXFxcXCInLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsnXCInLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAcG9wYWxsJyB9XSxcclxuICAgICAgICAgICAgWycuJywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdzRW5kUXVvdGU6IFtcclxuICAgICAgICAgICAgWydcXFxcXFxcXFxcJycsICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgWydcXCcnLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAcG9wYWxsJyB9XSxcclxuICAgICAgICAgICAgWycuJywgJ3N0cmluZyddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhdFJ1bGVzOiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXHJcbiAgICAgICAgICAgIFsnWygpXScsICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWydbXFxcXHs7XScsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJy4nLCAna2V5J11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=