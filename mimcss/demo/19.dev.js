(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/html/html.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/html/html.js ***!
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

// Allow for running under nodejs/requirejs in tests
var _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);
var EMPTY_ELEMENTS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];
var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: ['<!--', '-->']
    },
    brackets: [
        ['<!--', '-->'],
        ['<', '>'],
        ['{', '}'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' }
    ],
    surroundingPairs: [
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: { indentAction: _monaco.languages.IndentAction.IndentOutdent }
        },
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            action: { indentAction: _monaco.languages.IndentAction.Indent }
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#endregion\\b.*-->")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.html',
    ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/<!DOCTYPE/, 'metatag', '@doctype'],
            [/<!--/, 'comment', '@comment'],
            [/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/, ['delimiter', 'tag', '', 'delimiter']],
            [/(<)(script)/, ['delimiter', { token: 'tag', next: '@script' }]],
            [/(<)(style)/, ['delimiter', { token: 'tag', next: '@style' }]],
            [/(<)((?:[\w\-]+:)?[\w\-]+)/, ['delimiter', { token: 'tag', next: '@otherTag' }]],
            [/(<\/)((?:[\w\-]+:)?[\w\-]+)/, ['delimiter', { token: 'tag', next: '@otherTag' }]],
            [/</, 'delimiter'],
            [/[^<]+/],
        ],
        doctype: [
            [/[^>]+/, 'metatag.content'],
            [/>/, 'metatag', '@pop'],
        ],
        comment: [
            [/-->/, 'comment', '@pop'],
            [/[^-]+/, 'comment.content'],
            [/./, 'comment.content']
        ],
        otherTag: [
            [/\/?>/, 'delimiter', '@pop'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/type/, 'attribute.name', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/(<\/)(script\s*)(>)/, ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }]]
        ],
        // After <script ... type
        scriptAfterType: [
            [/=/, 'delimiter', '@scriptAfterTypeEquals'],
            [/>/, { token: 'delimiter', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/>/, { token: 'delimiter', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [/>/, { token: 'delimiter', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/[^<]+/, '']
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/type/, 'attribute.name', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter', next: '@styleEmbedded', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/(<\/)(style\s*)(>)/, ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }]]
        ],
        // After <style ... type
        styleAfterType: [
            [/=/, 'delimiter', '@styleAfterTypeEquals'],
            [/>/, { token: 'delimiter', next: '@styleEmbedded', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/>/, { token: 'delimiter', next: '@styleEmbedded', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [/>/, { token: 'delimiter', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/[^<]+/, '']
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2h0bWwvaHRtbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0VBQWdFLElBQUksTUFBTTtBQUMxRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdDQUFnQztBQUMzRSwwQ0FBMEMsK0JBQStCO0FBQ3pFLHlEQUF5RCxrQ0FBa0M7QUFDM0YsMkRBQTJELGtDQUFrQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrRUFBK0U7QUFDbEc7QUFDQSwwREFBMEQsbUNBQW1DO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtFQUErRTtBQUNsRztBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlFQUFpRTtBQUM1RiwyQkFBMkIsaUVBQWlFO0FBQzVGLG1CQUFtQiwrRUFBK0U7QUFDbEc7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1RUFBdUU7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBLDJCQUEyQix3REFBd0Q7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1RUFBdUU7QUFDMUY7QUFDQSx5REFBeUQsbUNBQW1DO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVFQUF1RTtBQUMxRjtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdFQUFnRTtBQUMzRiwyQkFBMkIsZ0VBQWdFO0FBQzNGLG1CQUFtQix1RUFBdUU7QUFDMUY7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzRUFBc0U7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBLDBCQUEwQix3REFBd0Q7QUFDbEY7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIxOS5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG4vLyBBbGxvdyBmb3IgcnVubmluZyB1bmRlciBub2RlanMvcmVxdWlyZWpzIGluIHRlc3RzXHJcbnZhciBfbW9uYWNvID0gKHR5cGVvZiBtb25hY28gPT09ICd1bmRlZmluZWQnID8gc2VsZi5tb25hY28gOiBtb25hY28pO1xyXG52YXIgRU1QVFlfRUxFTUVOVFMgPSBbJ2FyZWEnLCAnYmFzZScsICdicicsICdjb2wnLCAnZW1iZWQnLCAnaHInLCAnaW1nJywgJ2lucHV0JywgJ2tleWdlbicsICdsaW5rJywgJ21lbnVpdGVtJywgJ21ldGEnLCAncGFyYW0nLCAnc291cmNlJywgJ3RyYWNrJywgJ3diciddO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXEBcXCRcXF5cXCZcXCpcXChcXClcXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcc10rKS9nLFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCEtLScsICctLT4nXVxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyc8IS0tJywgJy0tPiddLFxyXG4gICAgICAgIFsnPCcsICc+J10sXHJcbiAgICAgICAgWyd7JywgJ30nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfVxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcclxuICAgIF0sXHJcbiAgICBvbkVudGVyUnVsZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KD8hKD86XCIgKyBFTVBUWV9FTEVNRU5UUy5qb2luKCd8JykgKyBcIikpKFtfOlxcXFx3XVtfOlxcXFx3LS5cXFxcZF0qKShbXi8+XSooPyEvKT4pW148XSokXCIsICdpJyksXHJcbiAgICAgICAgICAgIGFmdGVyVGV4dDogL148XFwvKFtfOlxcd11bXzpcXHctLlxcZF0qKVxccyo+JC9pLFxyXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBfbW9uYWNvLmxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50T3V0ZGVudCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KD8hKD86XCIgKyBFTVBUWV9FTEVNRU5UUy5qb2luKCd8JykgKyBcIikpKFxcXFx3W1xcXFx3XFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxyXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBfbW9uYWNvLmxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50IH1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqPCEtLVxcXFxzKiNyZWdpb25cXFxcYi4qLS0+XCIpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqPCEtLVxcXFxzKiNlbmRyZWdpb25cXFxcYi4qLS0+XCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5odG1sJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgWy88IURPQ1RZUEUvLCAnbWV0YXRhZycsICdAZG9jdHlwZSddLFxyXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbLyg8KSgoPzpbXFx3XFwtXSs6KT9bXFx3XFwtXSspKFxccyopKFxcLz4pLywgWydkZWxpbWl0ZXInLCAndGFnJywgJycsICdkZWxpbWl0ZXInXV0sXHJcbiAgICAgICAgICAgIFsvKDwpKHNjcmlwdCkvLCBbJ2RlbGltaXRlcicsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHNjcmlwdCcgfV1dLFxyXG4gICAgICAgICAgICBbLyg8KShzdHlsZSkvLCBbJ2RlbGltaXRlcicsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHN0eWxlJyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDwpKCg/OltcXHdcXC1dKzopP1tcXHdcXC1dKykvLCBbJ2RlbGltaXRlcicsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQG90aGVyVGFnJyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKCg/OltcXHdcXC1dKzopP1tcXHdcXC1dKykvLCBbJ2RlbGltaXRlcicsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQG90aGVyVGFnJyB9XV0sXHJcbiAgICAgICAgICAgIFsvPC8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9bXjxdKy9dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZG9jdHlwZTogW1xyXG4gICAgICAgICAgICBbL1tePl0rLywgJ21ldGF0YWcuY29udGVudCddLFxyXG4gICAgICAgICAgICBbLz4vLCAnbWV0YXRhZycsICdAcG9wJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvLS0+LywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1teLV0rLywgJ2NvbW1lbnQuY29udGVudCddLFxyXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5jb250ZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIG90aGVyVGFnOiBbXHJcbiAgICAgICAgICAgIFsvXFwvPz4vLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gLS0gQkVHSU4gPHNjcmlwdD4gdGFncyBoYW5kbGluZ1xyXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHRcclxuICAgICAgICBzY3JpcHQ6IFtcclxuICAgICAgICAgICAgWy90eXBlLywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BzY3JpcHRBZnRlclR5cGUnXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkJywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKHNjcmlwdFxccyopKD4pLywgWydkZWxpbWl0ZXInLCAndGFnJywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHQgLi4uIHR5cGVcclxuICAgICAgICBzY3JpcHRBZnRlclR5cGU6IFtcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlcicsICdAc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzJ10sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkJywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID1cclxuICAgICAgICBzY3JpcHRBZnRlclR5cGVFcXVhbHM6IFtcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMScgfV0sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkJywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID0gJFMyXHJcbiAgICAgICAgc2NyaXB0V2l0aEN1c3RvbVR5cGU6IFtcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQuJFMyJywgbmV4dEVtYmVkZGVkOiAnJFMyJyB9XSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2NyaXB0RW1iZWRkZWQ6IFtcclxuICAgICAgICAgICAgWy88XFwvc2NyaXB0LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9bXjxdKy8sICcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gLS0gRU5EIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICAvLyAtLSBCRUdJTiA8c3R5bGU+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICAvLyBBZnRlciA8c3R5bGVcclxuICAgICAgICBzdHlsZTogW1xyXG4gICAgICAgICAgICBbL3R5cGUvLCAnYXR0cmlidXRlLm5hbWUnLCAnQHN0eWxlQWZ0ZXJUeXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkJywgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnIH1dLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy8oPFxcLykoc3R5bGVcXHMqKSg+KS8sIFsnZGVsaW1pdGVyJywgJ3RhZycsIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGVcclxuICAgICAgICBzdHlsZUFmdGVyVHlwZTogW1xyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJywgJ0BzdHlsZUFmdGVyVHlwZUVxdWFscyddLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkJywgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnIH1dLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlID1cclxuICAgICAgICBzdHlsZUFmdGVyVHlwZUVxdWFsczogW1xyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBzd2l0Y2hUbzogJ0BzdHlsZVdpdGhDdXN0b21UeXBlLiQxJyB9XSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMScgfV0sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHN0eWxlRW1iZWRkZWQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcycgfV0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGUgPSAkUzJcclxuICAgICAgICBzdHlsZVdpdGhDdXN0b21UeXBlOiBbXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHN0eWxlRW1iZWRkZWQuJFMyJywgbmV4dEVtYmVkZGVkOiAnJFMyJyB9XSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHlsZUVtYmVkZGVkOiBbXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9bXjxdKy8sICcnXVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9