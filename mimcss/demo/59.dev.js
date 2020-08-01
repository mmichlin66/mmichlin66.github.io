(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js ***!
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
        blockComment: ['<!--', '-->'],
    },
    brackets: [
        ['<', '>']
    ],
    autoClosingPairs: [
        { open: '<', close: '>' },
        { open: '\'', close: '\'' },
        { open: '"', close: '"' },
    ],
    surroundingPairs: [
        { open: '<', close: '>' },
        { open: '\'', close: '\'' },
        { open: '"', close: '"' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.xml',
    ignoreCase: true,
    // Useful regular expressions
    qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
    tokenizer: {
        root: [
            [/[^<&]+/, ''],
            { include: '@whitespace' },
            // Standard opening tag
            [/(<)(@qualifiedName)/, [
                    { token: 'delimiter' },
                    { token: 'tag', next: '@tag' }
                ]],
            // Standard closing tag
            [/(<\/)(@qualifiedName)(\s*)(>)/, [
                    { token: 'delimiter' },
                    { token: 'tag' },
                    '',
                    { token: 'delimiter' }
                ]],
            // Meta tags - instruction
            [/(<\?)(@qualifiedName)/, [
                    { token: 'delimiter' },
                    { token: 'metatag', next: '@tag' }
                ]],
            // Meta tags - declaration
            [/(<\!)(@qualifiedName)/, [
                    { token: 'delimiter' },
                    { token: 'metatag', next: '@tag' }
                ]],
            // CDATA
            [/<\!\[CDATA\[/, { token: 'delimiter.cdata', next: '@cdata' }],
            [/&\w+;/, 'string.escape'],
        ],
        cdata: [
            [/[^\]]+/, ''],
            [/\]\]>/, { token: 'delimiter.cdata', next: '@pop' }],
            [/\]/, '']
        ],
        tag: [
            [/[ \t\r\n]+/, ''],
            [/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/, ['attribute.name', '', 'attribute.value']],
            [/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/, ['attribute.name', '', 'attribute.value']],
            [/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/, ['attribute.name', '', 'attribute.value']],
            [/@qualifiedName/, 'attribute.name'],
            [/\?>/, { token: 'delimiter', next: '@pop' }],
            [/(\/)(>)/, [
                    { token: 'tag' },
                    { token: 'delimiter', next: '@pop' }
                ]],
            [/>/, { token: 'delimiter', next: '@pop' }],
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/<!--/, { token: 'comment', next: '@comment' }]
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, { token: 'comment', next: '@pop' }],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3htbC94bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSw4QkFBOEIsMkNBQTJDO0FBQ3pFLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUNBQXlDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEMscUJBQXFCO0FBQ3JCO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6IjU5LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJzwhLS0nLCAnLS0+J10sXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJzwnLCAnPiddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgIF1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcueG1sJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICAvLyBVc2VmdWwgcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgcXVhbGlmaWVkTmFtZTogLyg/OltcXHdcXC5cXC1dKzopP1tcXHdcXC5cXC1dKy8sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIFsvW148Jl0rLywgJyddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcclxuICAgICAgICAgICAgLy8gU3RhbmRhcmQgb3BlbmluZyB0YWdcclxuICAgICAgICAgICAgWy8oPCkoQHF1YWxpZmllZE5hbWUpLywgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAdGFnJyB9XHJcbiAgICAgICAgICAgICAgICBdXSxcclxuICAgICAgICAgICAgLy8gU3RhbmRhcmQgY2xvc2luZyB0YWdcclxuICAgICAgICAgICAgWy8oPFxcLykoQHF1YWxpZmllZE5hbWUpKFxccyopKD4pLywgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3RhZycgfSxcclxuICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyJyB9XHJcbiAgICAgICAgICAgICAgICBdXSxcclxuICAgICAgICAgICAgLy8gTWV0YSB0YWdzIC0gaW5zdHJ1Y3Rpb25cclxuICAgICAgICAgICAgWy8oPFxcPykoQHF1YWxpZmllZE5hbWUpLywgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ21ldGF0YWcnLCBuZXh0OiAnQHRhZycgfVxyXG4gICAgICAgICAgICAgICAgXV0sXHJcbiAgICAgICAgICAgIC8vIE1ldGEgdGFncyAtIGRlY2xhcmF0aW9uXHJcbiAgICAgICAgICAgIFsvKDxcXCEpKEBxdWFsaWZpZWROYW1lKS8sIFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdtZXRhdGFnJywgbmV4dDogJ0B0YWcnIH1cclxuICAgICAgICAgICAgICAgIF1dLFxyXG4gICAgICAgICAgICAvLyBDREFUQVxyXG4gICAgICAgICAgICBbLzxcXCFcXFtDREFUQVxcWy8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuY2RhdGEnLCBuZXh0OiAnQGNkYXRhJyB9XSxcclxuICAgICAgICAgICAgWy8mXFx3KzsvLCAnc3RyaW5nLmVzY2FwZSddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY2RhdGE6IFtcclxuICAgICAgICAgICAgWy9bXlxcXV0rLywgJyddLFxyXG4gICAgICAgICAgICBbL1xcXVxcXT4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmNkYXRhJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbL1xcXS8sICcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFnOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy8oQHF1YWxpZmllZE5hbWUpKFxccyo9XFxzKikoXCJbXlwiXSpcInwnW14nXSonKS8sIFsnYXR0cmlidXRlLm5hbWUnLCAnJywgJ2F0dHJpYnV0ZS52YWx1ZSddXSxcclxuICAgICAgICAgICAgWy8oQHF1YWxpZmllZE5hbWUpKFxccyo9XFxzKikoXCJbXlwiPj9cXC9dKnwnW14nPj9cXC9dKikoPz1bXFw/XFwvXVxcPikvLCBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXV0sXHJcbiAgICAgICAgICAgIFsvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIj5dKnwnW14nPl0qKS8sIFsnYXR0cmlidXRlLm5hbWUnLCAnJywgJ2F0dHJpYnV0ZS52YWx1ZSddXSxcclxuICAgICAgICAgICAgWy9AcXVhbGlmaWVkTmFtZS8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbL1xcPz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbLyhcXC8pKD4pLywgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICd0YWcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XHJcbiAgICAgICAgICAgICAgICBdXSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICBbLzwhLS0vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAY29tbWVudCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXjxcXC1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcclxuICAgICAgICAgICAgWy8tLT4vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQuY29udGVudC5pbnZhbGlkJ10sXHJcbiAgICAgICAgICAgIFsvWzxcXC1dLywgJ2NvbW1lbnQuY29udGVudCddXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=