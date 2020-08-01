(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js ***!
  \************************************************************************************/
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
        blockComment: ['{{!--', '--}}']
    },
    brackets: [
        ['<!--', '-->'],
        ['<', '>'],
        ['{{', '}}'],
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
        { open: '<', close: '>' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: { indentAction: _monaco.languages.IndentAction.IndentOutdent }
        },
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            action: { indentAction: _monaco.languages.IndentAction.Indent }
        }
    ],
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.root' }],
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [/(<)([:\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/(<\/)(\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/</, 'delimiter.html'],
            [/\{/, 'delimiter.html'],
            [/[^<{]+/] // text
        ],
        doctype: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.comment' }],
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop'],
        ],
        comment: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.comment' }],
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.otherTag' }],
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.script' }],
            [/type/, 'attribute.name', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/(<\/)(script\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]
        ],
        // After <script ... type
        scriptAfterType: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.scriptAfterType' }],
            [/=/, 'delimiter', '@scriptAfterTypeEquals'],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.scriptAfterTypeEquals' }],
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.scriptWithCustomType.$S2' }],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInEmbeddedState.scriptEmbedded.$S2', nextEmbedded: '@pop' }],
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.style' }],
            [/type/, 'attribute.name', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/(<\/)(style\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]
        ],
        // After <style ... type
        styleAfterType: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.styleAfterType' }],
            [/=/, 'delimiter', '@styleAfterTypeEquals'],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.styleAfterTypeEquals' }],
            [/"([^"]*)"/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.styleWithCustomType.$S2' }],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInEmbeddedState.styleEmbedded.$S2', nextEmbedded: '@pop' }],
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <style> tags handling
        handlebarsInSimpleState: [
            [/\{\{\{?/, 'delimiter.handlebars'],
            [/\}\}\}?/, { token: 'delimiter.handlebars', switchTo: '@$S2.$S3' }],
            { include: 'handlebarsRoot' }
        ],
        handlebarsInEmbeddedState: [
            [/\{\{\{?/, 'delimiter.handlebars'],
            [/\}\}\}?/, { token: 'delimiter.handlebars', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }],
            { include: 'handlebarsRoot' }
        ],
        handlebarsRoot: [
            [/"[^"]*"/, 'string.handlebars'],
            [/[#/][^\s}]+/, 'keyword.helper.handlebars'],
            [/else\b/, 'keyword.helper.handlebars'],
            [/[\s]+/],
            [/[^}]/, 'variable.parameter.handlebars'],
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2hhbmRsZWJhcnMvaGFuZGxlYmFycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0VBQWdFLElBQUksTUFBTTtBQUMxRTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLElBQUksK0RBQStEO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxxQ0FBcUM7QUFDckYsK0NBQStDLG9DQUFvQztBQUNuRixnREFBZ0QsdUNBQXVDO0FBQ3ZGLCtDQUErQyx1Q0FBdUM7QUFDdEY7QUFDQSxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxJQUFJLGtFQUFrRTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLElBQUksa0VBQWtFO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxJQUFJLG1FQUFtRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLElBQUksaUVBQWlFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0dBQW9HO0FBQ3ZIO0FBQ0Esb0VBQW9FLHdDQUF3QztBQUM1RztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxJQUFJLDBFQUEwRTtBQUNoRztBQUNBLG1CQUFtQixvR0FBb0c7QUFDdkg7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLElBQUksZ0ZBQWdGO0FBQ3RHLDJCQUEyQixpRUFBaUU7QUFDNUYsMkJBQTJCLGlFQUFpRTtBQUM1RixtQkFBbUIsb0dBQW9HO0FBQ3ZIO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxJQUFJLG1GQUFtRjtBQUN6RyxtQkFBbUIsNEVBQTRFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxJQUFJLHFHQUFxRztBQUMzSCwyQkFBMkIsd0RBQXdEO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxJQUFJLGdFQUFnRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFGQUFxRjtBQUN4RztBQUNBLG1FQUFtRSx3Q0FBd0M7QUFDM0c7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUUsSUFBSSx5RUFBeUU7QUFDL0Y7QUFDQSxtQkFBbUIscUZBQXFGO0FBQ3hHO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxJQUFJLCtFQUErRTtBQUNyRywyQkFBMkIsZ0VBQWdFO0FBQzNGLDJCQUEyQixnRUFBZ0U7QUFDM0YsbUJBQW1CLHFGQUFxRjtBQUN4RztBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUUsSUFBSSxrRkFBa0Y7QUFDeEcsbUJBQW1CLDJFQUEyRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUUsSUFBSSxvR0FBb0c7QUFDMUgsMEJBQTBCLHdEQUF3RDtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxFQUFFO0FBQ3BCLGdCQUFnQixFQUFFLEVBQUUsS0FBSyxzREFBc0Q7QUFDL0UsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxFQUFFO0FBQ3BCLGdCQUFnQixFQUFFLEVBQUUsS0FBSywyRUFBMkU7QUFDcEcsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6IjE4LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbi8vIEFsbG93IGZvciBydW5uaW5nIHVuZGVyIG5vZGVqcy9yZXF1aXJlanMgaW4gdGVzdHNcclxudmFyIF9tb25hY28gPSAodHlwZW9mIG1vbmFjbyA9PT0gJ3VuZGVmaW5lZCcgPyBzZWxmLm1vbmFjbyA6IG1vbmFjbyk7XHJcbnZhciBFTVBUWV9FTEVNRU5UUyA9IFsnYXJlYScsICdiYXNlJywgJ2JyJywgJ2NvbCcsICdlbWJlZCcsICdocicsICdpbWcnLCAnaW5wdXQnLCAna2V5Z2VuJywgJ2xpbmsnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdwYXJhbScsICdzb3VyY2UnLCAndHJhY2snLCAnd2JyJ107XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcJFxcXlxcJlxcKlxcKFxcKVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFxzXSspL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWyd7eyEtLScsICctLX19J11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsnPCEtLScsICctLT4nXSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsne3snLCAnfX0nXSxcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9XHJcbiAgICBdLFxyXG4gICAgb25FbnRlclJ1bGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKFwiPCg/ISg/OlwiICsgRU1QVFlfRUxFTUVOVFMuam9pbignfCcpICsgXCIpKShcXFxcd1tcXFxcd1xcXFxkXSopKFteLz5dKig/IS8pPilbXjxdKiRcIiwgJ2knKSxcclxuICAgICAgICAgICAgYWZ0ZXJUZXh0OiAvXjxcXC8oXFx3W1xcd1xcZF0qKVxccyo+JC9pLFxyXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBfbW9uYWNvLmxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50T3V0ZGVudCB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KD8hKD86XCIgKyBFTVBUWV9FTEVNRU5UUy5qb2luKCd8JykgKyBcIikpKFxcXFx3W1xcXFx3XFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxyXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBfbW9uYWNvLmxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50IH1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJycsXHJcbiAgICAvLyBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIFsvXFx7XFx7LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luU2ltcGxlU3RhdGUucm9vdCcgfV0sXHJcbiAgICAgICAgICAgIFsvPCFET0NUWVBFLywgJ21ldGF0YWcuaHRtbCcsICdAZG9jdHlwZSddLFxyXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudC5odG1sJywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvKDwpKFxcdyspKFxcLz4pLywgWydkZWxpbWl0ZXIuaHRtbCcsICd0YWcuaHRtbCcsICdkZWxpbWl0ZXIuaHRtbCddXSxcclxuICAgICAgICAgICAgWy8oPCkoc2NyaXB0KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQHNjcmlwdCcgfV1dLFxyXG4gICAgICAgICAgICBbLyg8KShzdHlsZSkvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BzdHlsZScgfV1dLFxyXG4gICAgICAgICAgICBbLyg8KShbOlxcd10rKS8sIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQG90aGVyVGFnJyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKFxcdyspLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAb3RoZXJUYWcnIH1dXSxcclxuICAgICAgICAgICAgWy88LywgJ2RlbGltaXRlci5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvXFx7LywgJ2RlbGltaXRlci5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvW148e10rL10gLy8gdGV4dFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZG9jdHlwZTogW1xyXG4gICAgICAgICAgICBbL1xce1xcey8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQGhhbmRsZWJhcnNJblNpbXBsZVN0YXRlLmNvbW1lbnQnIH1dLFxyXG4gICAgICAgICAgICBbL1tePl0rLywgJ21ldGF0YWcuY29udGVudC5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvPi8sICdtZXRhdGFnLmh0bWwnLCAnQHBvcCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1xce1xcey8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQGhhbmRsZWJhcnNJblNpbXBsZVN0YXRlLmNvbW1lbnQnIH1dLFxyXG4gICAgICAgICAgICBbLy0tPi8sICdjb21tZW50Lmh0bWwnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1teLV0rLywgJ2NvbW1lbnQuY29udGVudC5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmNvbnRlbnQuaHRtbCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvdGhlclRhZzogW1xyXG4gICAgICAgICAgICBbL1xce1xcey8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQGhhbmRsZWJhcnNJblNpbXBsZVN0YXRlLm90aGVyVGFnJyB9XSxcclxuICAgICAgICAgICAgWy9cXC8/Pi8sICdkZWxpbWl0ZXIuaHRtbCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIC0tIEJFR0lOIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0XHJcbiAgICAgICAgc2NyaXB0OiBbXHJcbiAgICAgICAgICAgIFsvXFx7XFx7LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luU2ltcGxlU3RhdGUuc2NyaXB0JyB9XSxcclxuICAgICAgICAgICAgWy90eXBlLywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BzY3JpcHRBZnRlclR5cGUnXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQudGV4dC9qYXZhc2NyaXB0JywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKHNjcmlwdFxccyopKD4pLywgWydkZWxpbWl0ZXIuaHRtbCcsICd0YWcuaHRtbCcsIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAcG9wJyB9XV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHQgLi4uIHR5cGVcclxuICAgICAgICBzY3JpcHRBZnRlclR5cGU6IFtcclxuICAgICAgICAgICAgWy9cXHtcXHsvLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0BoYW5kbGViYXJzSW5TaW1wbGVTdGF0ZS5zY3JpcHRBZnRlclR5cGUnIH1dLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJywgJ0BzY3JpcHRBZnRlclR5cGVFcXVhbHMnXSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC50ZXh0L2phdmFzY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH1dLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHQgLi4uIHR5cGUgPVxyXG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZUVxdWFsczogW1xyXG4gICAgICAgICAgICBbL1xce1xcey8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQGhhbmRsZWJhcnNJblNpbXBsZVN0YXRlLnNjcmlwdEFmdGVyVHlwZUVxdWFscycgfV0sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIHN3aXRjaFRvOiAnQHNjcmlwdFdpdGhDdXN0b21UeXBlLiQxJyB9XSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLnRleHQvamF2YXNjcmlwdCcsIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCcgfV0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9ICRTMlxyXG4gICAgICAgIHNjcmlwdFdpdGhDdXN0b21UeXBlOiBbXHJcbiAgICAgICAgICAgIFsvXFx7XFx7LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luU2ltcGxlU3RhdGUuc2NyaXB0V2l0aEN1c3RvbVR5cGUuJFMyJyB9XSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC4kUzInLCBuZXh0RW1iZWRkZWQ6ICckUzInIH1dLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzY3JpcHRFbWJlZGRlZDogW1xyXG4gICAgICAgICAgICBbL1xce1xcey8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQGhhbmRsZWJhcnNJbkVtYmVkZGVkU3RhdGUuc2NyaXB0RW1iZWRkZWQuJFMyJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdC8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIC0tIEVORCA8c2NyaXB0PiB0YWdzIGhhbmRsaW5nXHJcbiAgICAgICAgLy8gLS0gQkVHSU4gPHN0eWxlPiB0YWdzIGhhbmRsaW5nXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlXHJcbiAgICAgICAgc3R5bGU6IFtcclxuICAgICAgICAgICAgWy9cXHtcXHsvLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0BoYW5kbGViYXJzSW5TaW1wbGVTdGF0ZS5zdHlsZScgfV0sXHJcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZScsICdAc3R5bGVBZnRlclR5cGUnXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC50ZXh0L2NzcycsIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKHN0eWxlXFxzKikoPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0Bwb3AnIH1dXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlXHJcbiAgICAgICAgc3R5bGVBZnRlclR5cGU6IFtcclxuICAgICAgICAgICAgWy9cXHtcXHsvLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0BoYW5kbGViYXJzSW5TaW1wbGVTdGF0ZS5zdHlsZUFmdGVyVHlwZScgfV0sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInLCAnQHN0eWxlQWZ0ZXJUeXBlRXF1YWxzJ10sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC50ZXh0L2NzcycsIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9XHJcbiAgICAgICAgc3R5bGVBZnRlclR5cGVFcXVhbHM6IFtcclxuICAgICAgICAgICAgWy9cXHtcXHsvLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBzd2l0Y2hUbzogJ0BoYW5kbGViYXJzSW5TaW1wbGVTdGF0ZS5zdHlsZUFmdGVyVHlwZUVxdWFscycgfV0sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIHN3aXRjaFRvOiAnQHN0eWxlV2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBzd2l0Y2hUbzogJ0BzdHlsZVdpdGhDdXN0b21UeXBlLiQxJyB9XSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLnRleHQvY3NzJywgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnIH1dLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlID0gJFMyXHJcbiAgICAgICAgc3R5bGVXaXRoQ3VzdG9tVHlwZTogW1xyXG4gICAgICAgICAgICBbL1xce1xcey8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQGhhbmRsZWJhcnNJblNpbXBsZVN0YXRlLnN0eWxlV2l0aEN1c3RvbVR5cGUuJFMyJyB9XSxcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLiRTMicsIG5leHRFbWJlZGRlZDogJyRTMicgfV0sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3R5bGVFbWJlZGRlZDogW1xyXG4gICAgICAgICAgICBbL1xce1xcey8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQGhhbmRsZWJhcnNJbkVtYmVkZGVkU3RhdGUuc3R5bGVFbWJlZGRlZC4kUzInLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGUvLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyAtLSBFTkQgPHN0eWxlPiB0YWdzIGhhbmRsaW5nXHJcbiAgICAgICAgaGFuZGxlYmFyc0luU2ltcGxlU3RhdGU6IFtcclxuICAgICAgICAgICAgWy9cXHtcXHtcXHs/LywgJ2RlbGltaXRlci5oYW5kbGViYXJzJ10sXHJcbiAgICAgICAgICAgIFsvXFx9XFx9XFx9Py8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaGFuZGxlYmFycycsIHN3aXRjaFRvOiAnQCRTMi4kUzMnIH1dLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdoYW5kbGViYXJzUm9vdCcgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGFuZGxlYmFyc0luRW1iZWRkZWRTdGF0ZTogW1xyXG4gICAgICAgICAgICBbL1xce1xce1xcez8vLCAnZGVsaW1pdGVyLmhhbmRsZWJhcnMnXSxcclxuICAgICAgICAgICAgWy9cXH1cXH1cXH0/LywgeyB0b2tlbjogJ2RlbGltaXRlci5oYW5kbGViYXJzJywgc3dpdGNoVG86ICdAJFMyLiRTMycsIG5leHRFbWJlZGRlZDogJyRTMycgfV0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ2hhbmRsZWJhcnNSb290JyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBoYW5kbGViYXJzUm9vdDogW1xyXG4gICAgICAgICAgICBbL1wiW15cIl0qXCIvLCAnc3RyaW5nLmhhbmRsZWJhcnMnXSxcclxuICAgICAgICAgICAgWy9bIy9dW15cXHN9XSsvLCAna2V5d29yZC5oZWxwZXIuaGFuZGxlYmFycyddLFxyXG4gICAgICAgICAgICBbL2Vsc2VcXGIvLCAna2V5d29yZC5oZWxwZXIuaGFuZGxlYmFycyddLFxyXG4gICAgICAgICAgICBbL1tcXHNdKy9dLFxyXG4gICAgICAgICAgICBbL1tefV0vLCAndmFyaWFibGUucGFyYW1ldGVyLmhhbmRsZWJhcnMnXSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==