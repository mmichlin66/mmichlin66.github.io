(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: ['{#', '#}'],
    },
    brackets: [
        ['{#', '#}'],
        ['{%', '%}'],
        ['{{', '}}'],
        ['(', ')'],
        ['[', ']'],
        // HTML
        ['<!--', '-->'],
        ['<', '>'],
    ],
    autoClosingPairs: [
        { open: '{# ', close: ' #}' },
        { open: '{% ', close: ' %}' },
        { open: '{{ ', close: ' }}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
        // HTML
        { open: '<', close: '>' },
    ],
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    ignoreCase: true,
    keywords: [
        // (opening) tags
        'apply', 'autoescape', 'block', 'deprecated', 'do', 'embed', 'extends',
        'flush', 'for', 'from', 'if', 'import', 'include', 'macro', 'sandbox',
        'set', 'use', 'verbatim', 'with',
        // closing tags
        'endapply', 'endautoescape', 'endblock', 'endembed', 'endfor', 'endif',
        'endmacro', 'endsandbox', 'endset', 'endwith',
        // literals
        'true', 'false',
    ],
    tokenizer: {
        root: [
            // whitespace
            [/\s+/],
            // Twig Tag Delimiters
            [/{#/, 'comment.twig', '@commentState'],
            [/{%[-~]?/, 'delimiter.twig', '@blockState'],
            [/{{[-~]?/, 'delimiter.twig', '@variableState'],
            // HTML
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/, ['delimiter.html', 'tag.html', '', 'delimiter.html']],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [/(<)((?:[\w\-]+:)?[\w\-]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/(<\/)((?:[\w\-]+:)?[\w\-]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/</, 'delimiter.html'],
            [/[^<]+/],
        ],
        /**
         * Comment Tag Handling
         */
        commentState: [
            [/#}/, 'comment.twig', '@pop'],
            [/./, 'comment.twig'],
        ],
        /**
         * Block Tag Handling
         */
        blockState: [
            [/[-~]?%}/, 'delimiter.twig', '@pop'],
            // whitespace
            [/\s+/],
            // verbatim
            // Unlike other blocks, verbatim ehas its own state
            // transition to ensure we mark its contents as strings.
            [/(verbatim)(\s*)([-~]?%})/, [
                    'keyword.twig',
                    '',
                    { token: 'delimiter.twig', next: '@rawDataState' },
                ]],
            { include: 'expression' }
        ],
        rawDataState: [
            // endverbatim
            [/({%[-~]?)(\s*)(endverbatim)(\s*)([-~]?%})/, [
                    'delimiter.twig',
                    '',
                    'keyword.twig',
                    '',
                    { token: 'delimiter.twig', next: '@popall' },
                ]],
            [/./, 'string.twig'],
        ],
        /**
         * Variable Tag Handling
         */
        variableState: [
            [/[-~]?}}/, 'delimiter.twig', '@pop'],
            { include: 'expression' },
        ],
        stringState: [
            // closing double quoted string
            [/"/, 'string.twig', '@pop'],
            // interpolation start
            [/#{\s*/, 'string.twig', '@interpolationState'],
            // string part
            [/[^#"\\]*(?:(?:\\.|#(?!\{))[^#"\\]*)*/, 'string.twig'],
        ],
        interpolationState: [
            // interpolation end
            [/}/, 'string.twig', '@pop'],
            { include: 'expression' },
        ],
        /**
         * Expression Handling
         */
        expression: [
            // whitespace
            [/\s+/],
            // operators - math
            [/\+|-|\/{1,2}|%|\*{1,2}/, 'operators.twig'],
            // operators - logic
            [/(and|or|not|b-and|b-xor|b-or)(\s+)/, ['operators.twig', '']],
            // operators - comparison (symbols)
            [/==|!=|<|>|>=|<=/, 'operators.twig'],
            // operators - comparison (words)
            [/(starts with|ends with|matches)(\s+)/, ['operators.twig', '']],
            // operators - containment
            [/(in)(\s+)/, ['operators.twig', '']],
            // operators - test
            [/(is)(\s+)/, ['operators.twig', '']],
            // operators - misc
            [/\||~|:|\.{1,2}|\?{1,2}/, 'operators.twig'],
            // names
            [/[^\W\d][\w]*/, {
                    cases: {
                        '@keywords': 'keyword.twig',
                        '@default': 'variable.twig'
                    }
                }],
            // numbers
            [/\d+(\.\d+)?/, 'number.twig'],
            // punctuation
            [/\(|\)|\[|\]|{|}|,/, 'delimiter.twig'],
            // strings
            [/"([^#"\\]*(?:\\.[^#"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'/, 'string.twig'],
            // opening double quoted string
            [/"/, 'string.twig', '@stringState'],
            // misc syntactic constructs
            // These are not operators per se, but for the purposes of lexical analysis we
            // can treat them as such.
            // arrow functions
            [/=>/, 'operators.twig'],
            // assignment
            [/=/, 'operators.twig'],
        ],
        /**
         * HTML
         */
        doctype: [
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop'],
        ],
        comment: [
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/[ \t\r\n]+/],
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/type/, 'attribute.name.html', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/(<\/)(script\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]
        ],
        // After <script ... type
        scriptAfterType: [
            [/=/, 'delimiter.html', '@scriptAfterTypeEquals'],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [/"([^"]*)"/, { token: 'attribute.value.html', switchTo: '@scriptWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value.html', switchTo: '@scriptWithCustomType.$1' }],
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
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
            [/type/, 'attribute.name.html', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/(<\/)(style\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]
        ],
        // After <style ... type
        styleAfterType: [
            [/=/, 'delimiter.html', '@styleAfterTypeEquals'],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [/"([^"]*)"/, { token: 'attribute.value.html', switchTo: '@styleWithCustomType.$1' }],
            [/'([^']*)'/, { token: 'attribute.value.html', switchTo: '@styleWithCustomType.$1' }],
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded', nextEmbedded: 'text/css' }],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/[^<]+/, '']
        ],
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3R3aWcvdHdpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1AsZ0VBQWdFLElBQUksTUFBTTtBQUMxRTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGdCQUFnQixHQUFHO0FBQ3JDLFNBQVMsU0FBUyxnQkFBZ0IsR0FBRztBQUNyQyxTQUFTLFVBQVUsZUFBZSxHQUFHO0FBQ3JDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscUNBQXFDO0FBQ3JGLCtDQUErQyxvQ0FBb0M7QUFDbkYsOERBQThELHVDQUF1QztBQUNyRyxnRUFBZ0UsdUNBQXVDO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxxQkFBcUIsaURBQWlEO0FBQ3RFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQ0FBc0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSSxNQUFNLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJLElBQUksSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0ZBQW9GO0FBQ3ZHO0FBQ0Esb0VBQW9FLHdDQUF3QztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvRkFBb0Y7QUFDdkc7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzRUFBc0U7QUFDakcsMkJBQTJCLHNFQUFzRTtBQUNqRyxtQkFBbUIsb0ZBQW9GO0FBQ3ZHO0FBQ0EsK0JBQStCLGtDQUFrQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNEVBQTRFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQXdEO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNEVBQTRFO0FBQy9GO0FBQ0EsbUVBQW1FLHdDQUF3QztBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0RUFBNEU7QUFDL0Y7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxRUFBcUU7QUFDaEcsMkJBQTJCLHFFQUFxRTtBQUNoRyxtQkFBbUIsNEVBQTRFO0FBQy9GO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkVBQTJFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQSwwQkFBMEIsd0RBQXdEO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjU3LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcJFxcXlxcJlxcKlxcKFxcKVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFxzXSspL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWyd7IycsICcjfSddLFxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7IycsICcjfSddLFxyXG4gICAgICAgIFsneyUnLCAnJX0nXSxcclxuICAgICAgICBbJ3t7JywgJ319J10sXHJcbiAgICAgICAgWycoJywgJyknXSxcclxuICAgICAgICBbJ1snLCAnXSddLFxyXG4gICAgICAgIC8vIEhUTUxcclxuICAgICAgICBbJzwhLS0nLCAnLS0+J10sXHJcbiAgICAgICAgWyc8JywgJz4nXSxcclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneyMgJywgY2xvc2U6ICcgI30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAneyUgJywgY2xvc2U6ICcgJX0nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAne3sgJywgY2xvc2U6ICcgfX0nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgICAgIC8vIEhUTUxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxyXG4gICAgXSxcclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcnLFxyXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgLy8gKG9wZW5pbmcpIHRhZ3NcclxuICAgICAgICAnYXBwbHknLCAnYXV0b2VzY2FwZScsICdibG9jaycsICdkZXByZWNhdGVkJywgJ2RvJywgJ2VtYmVkJywgJ2V4dGVuZHMnLFxyXG4gICAgICAgICdmbHVzaCcsICdmb3InLCAnZnJvbScsICdpZicsICdpbXBvcnQnLCAnaW5jbHVkZScsICdtYWNybycsICdzYW5kYm94JyxcclxuICAgICAgICAnc2V0JywgJ3VzZScsICd2ZXJiYXRpbScsICd3aXRoJyxcclxuICAgICAgICAvLyBjbG9zaW5nIHRhZ3NcclxuICAgICAgICAnZW5kYXBwbHknLCAnZW5kYXV0b2VzY2FwZScsICdlbmRibG9jaycsICdlbmRlbWJlZCcsICdlbmRmb3InLCAnZW5kaWYnLFxyXG4gICAgICAgICdlbmRtYWNybycsICdlbmRzYW5kYm94JywgJ2VuZHNldCcsICdlbmR3aXRoJyxcclxuICAgICAgICAvLyBsaXRlcmFsc1xyXG4gICAgICAgICd0cnVlJywgJ2ZhbHNlJyxcclxuICAgIF0sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgWy9cXHMrL10sXHJcbiAgICAgICAgICAgIC8vIFR3aWcgVGFnIERlbGltaXRlcnNcclxuICAgICAgICAgICAgWy97Iy8sICdjb21tZW50LnR3aWcnLCAnQGNvbW1lbnRTdGF0ZSddLFxyXG4gICAgICAgICAgICBbL3slWy1+XT8vLCAnZGVsaW1pdGVyLnR3aWcnLCAnQGJsb2NrU3RhdGUnXSxcclxuICAgICAgICAgICAgWy97e1stfl0/LywgJ2RlbGltaXRlci50d2lnJywgJ0B2YXJpYWJsZVN0YXRlJ10sXHJcbiAgICAgICAgICAgIC8vIEhUTUxcclxuICAgICAgICAgICAgWy88IURPQ1RZUEUvLCAnbWV0YXRhZy5odG1sJywgJ0Bkb2N0eXBlJ10sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50Lmh0bWwnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy8oPCkoKD86W1xcd1xcLV0rOik/W1xcd1xcLV0rKShcXHMqKShcXC8+KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCAnJywgJ2RlbGltaXRlci5odG1sJ11dLFxyXG4gICAgICAgICAgICBbLyg8KShzY3JpcHQpLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAc2NyaXB0JyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDwpKHN0eWxlKS8sIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQHN0eWxlJyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDwpKCg/OltcXHdcXC1dKzopP1tcXHdcXC1dKykvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxyXG4gICAgICAgICAgICBbLyg8XFwvKSgoPzpbXFx3XFwtXSs6KT9bXFx3XFwtXSspLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAb3RoZXJUYWcnIH1dXSxcclxuICAgICAgICAgICAgWy88LywgJ2RlbGltaXRlci5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvW148XSsvXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbW1lbnQgVGFnIEhhbmRsaW5nXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29tbWVudFN0YXRlOiBbXHJcbiAgICAgICAgICAgIFsvI30vLCAnY29tbWVudC50d2lnJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQudHdpZyddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQmxvY2sgVGFnIEhhbmRsaW5nXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmxvY2tTdGF0ZTogW1xyXG4gICAgICAgICAgICBbL1stfl0/JX0vLCAnZGVsaW1pdGVyLnR3aWcnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIFsvXFxzKy9dLFxyXG4gICAgICAgICAgICAvLyB2ZXJiYXRpbVxyXG4gICAgICAgICAgICAvLyBVbmxpa2Ugb3RoZXIgYmxvY2tzLCB2ZXJiYXRpbSBlaGFzIGl0cyBvd24gc3RhdGVcclxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbiB0byBlbnN1cmUgd2UgbWFyayBpdHMgY29udGVudHMgYXMgc3RyaW5ncy5cclxuICAgICAgICAgICAgWy8odmVyYmF0aW0pKFxccyopKFstfl0/JX0pLywgW1xyXG4gICAgICAgICAgICAgICAgICAgICdrZXl3b3JkLnR3aWcnLFxyXG4gICAgICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIudHdpZycsIG5leHQ6ICdAcmF3RGF0YVN0YXRlJyB9LFxyXG4gICAgICAgICAgICAgICAgXV0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ2V4cHJlc3Npb24nIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHJhd0RhdGFTdGF0ZTogW1xyXG4gICAgICAgICAgICAvLyBlbmR2ZXJiYXRpbVxyXG4gICAgICAgICAgICBbLyh7JVstfl0/KShcXHMqKShlbmR2ZXJiYXRpbSkoXFxzKikoWy1+XT8lfSkvLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RlbGltaXRlci50d2lnJyxcclxuICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAna2V5d29yZC50d2lnJyxcclxuICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnR3aWcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgIF1dLFxyXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nLnR3aWcnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhcmlhYmxlIFRhZyBIYW5kbGluZ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhcmlhYmxlU3RhdGU6IFtcclxuICAgICAgICAgICAgWy9bLX5dP319LywgJ2RlbGltaXRlci50d2lnJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnZXhwcmVzc2lvbicgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZ1N0YXRlOiBbXHJcbiAgICAgICAgICAgIC8vIGNsb3NpbmcgZG91YmxlIHF1b3RlZCBzdHJpbmdcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcudHdpZycsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIC8vIGludGVycG9sYXRpb24gc3RhcnRcclxuICAgICAgICAgICAgWy8je1xccyovLCAnc3RyaW5nLnR3aWcnLCAnQGludGVycG9sYXRpb25TdGF0ZSddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmcgcGFydFxyXG4gICAgICAgICAgICBbL1teI1wiXFxcXF0qKD86KD86XFxcXC58Iyg/IVxceykpW14jXCJcXFxcXSopKi8sICdzdHJpbmcudHdpZyddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW50ZXJwb2xhdGlvblN0YXRlOiBbXHJcbiAgICAgICAgICAgIC8vIGludGVycG9sYXRpb24gZW5kXHJcbiAgICAgICAgICAgIFsvfS8sICdzdHJpbmcudHdpZycsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ2V4cHJlc3Npb24nIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFeHByZXNzaW9uIEhhbmRsaW5nXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhwcmVzc2lvbjogW1xyXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIFsvXFxzKy9dLFxyXG4gICAgICAgICAgICAvLyBvcGVyYXRvcnMgLSBtYXRoXHJcbiAgICAgICAgICAgIFsvXFwrfC18XFwvezEsMn18JXxcXCp7MSwyfS8sICdvcGVyYXRvcnMudHdpZyddLFxyXG4gICAgICAgICAgICAvLyBvcGVyYXRvcnMgLSBsb2dpY1xyXG4gICAgICAgICAgICBbLyhhbmR8b3J8bm90fGItYW5kfGIteG9yfGItb3IpKFxccyspLywgWydvcGVyYXRvcnMudHdpZycsICcnXV0sXHJcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIGNvbXBhcmlzb24gKHN5bWJvbHMpXHJcbiAgICAgICAgICAgIFsvPT18IT18PHw+fD49fDw9LywgJ29wZXJhdG9ycy50d2lnJ10sXHJcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIGNvbXBhcmlzb24gKHdvcmRzKVxyXG4gICAgICAgICAgICBbLyhzdGFydHMgd2l0aHxlbmRzIHdpdGh8bWF0Y2hlcykoXFxzKykvLCBbJ29wZXJhdG9ycy50d2lnJywgJyddXSxcclxuICAgICAgICAgICAgLy8gb3BlcmF0b3JzIC0gY29udGFpbm1lbnRcclxuICAgICAgICAgICAgWy8oaW4pKFxccyspLywgWydvcGVyYXRvcnMudHdpZycsICcnXV0sXHJcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIHRlc3RcclxuICAgICAgICAgICAgWy8oaXMpKFxccyspLywgWydvcGVyYXRvcnMudHdpZycsICcnXV0sXHJcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIG1pc2NcclxuICAgICAgICAgICAgWy9cXHx8fnw6fFxcLnsxLDJ9fFxcP3sxLDJ9LywgJ29wZXJhdG9ycy50d2lnJ10sXHJcbiAgICAgICAgICAgIC8vIG5hbWVzXHJcbiAgICAgICAgICAgIFsvW15cXFdcXGRdW1xcd10qLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZC50d2lnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3ZhcmlhYmxlLnR3aWcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQrKFxcLlxcZCspPy8sICdudW1iZXIudHdpZyddLFxyXG4gICAgICAgICAgICAvLyBwdW5jdHVhdGlvblxyXG4gICAgICAgICAgICBbL1xcKHxcXCl8XFxbfFxcXXx7fH18LC8sICdkZWxpbWl0ZXIudHdpZyddLFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzXHJcbiAgICAgICAgICAgIFsvXCIoW14jXCJcXFxcXSooPzpcXFxcLlteI1wiXFxcXF0qKSopXCJ8XFwnKFteXFwnXFxcXF0qKD86XFxcXC5bXlxcJ1xcXFxdKikqKVxcJy8sICdzdHJpbmcudHdpZyddLFxyXG4gICAgICAgICAgICAvLyBvcGVuaW5nIGRvdWJsZSBxdW90ZWQgc3RyaW5nXHJcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLnR3aWcnLCAnQHN0cmluZ1N0YXRlJ10sXHJcbiAgICAgICAgICAgIC8vIG1pc2Mgc3ludGFjdGljIGNvbnN0cnVjdHNcclxuICAgICAgICAgICAgLy8gVGhlc2UgYXJlIG5vdCBvcGVyYXRvcnMgcGVyIHNlLCBidXQgZm9yIHRoZSBwdXJwb3NlcyBvZiBsZXhpY2FsIGFuYWx5c2lzIHdlXHJcbiAgICAgICAgICAgIC8vIGNhbiB0cmVhdCB0aGVtIGFzIHN1Y2guXHJcbiAgICAgICAgICAgIC8vIGFycm93IGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICBbLz0+LywgJ29wZXJhdG9ycy50d2lnJ10sXHJcbiAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgWy89LywgJ29wZXJhdG9ycy50d2lnJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIVE1MXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZG9jdHlwZTogW1xyXG4gICAgICAgICAgICBbL1tePl0rLywgJ21ldGF0YWcuY29udGVudC5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvPi8sICdtZXRhdGFnLmh0bWwnLCAnQHBvcCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbLy0tPi8sICdjb21tZW50Lmh0bWwnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1teLV0rLywgJ2NvbW1lbnQuY29udGVudC5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmNvbnRlbnQuaHRtbCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvdGhlclRhZzogW1xyXG4gICAgICAgICAgICBbL1xcLz8+LywgJ2RlbGltaXRlci5odG1sJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUuaHRtbCddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyLmh0bWwnXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyAtLSBCRUdJTiA8c2NyaXB0PiB0YWdzIGhhbmRsaW5nXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdFxyXG4gICAgICAgIHNjcmlwdDogW1xyXG4gICAgICAgICAgICBbL3R5cGUvLCAnYXR0cmlidXRlLm5hbWUuaHRtbCcsICdAc2NyaXB0QWZ0ZXJUeXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlci5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH1dLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy8oPFxcLykoc2NyaXB0XFxzKikoPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0Bwb3AnIH1dXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZVxyXG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZTogW1xyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyLmh0bWwnLCAnQHNjcmlwdEFmdGVyVHlwZUVxdWFscyddLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkJywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID1cclxuICAgICAgICBzY3JpcHRBZnRlclR5cGVFcXVhbHM6IFtcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlLmh0bWwnLCBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMScgfV0sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJywgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnIH1dLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkJywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID0gJFMyXHJcbiAgICAgICAgc2NyaXB0V2l0aEN1c3RvbVR5cGU6IFtcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC4kUzInLCBuZXh0RW1iZWRkZWQ6ICckUzInIH1dLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUuaHRtbCddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUuaHRtbCddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZS5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXIuaHRtbCddLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNjcmlwdEVtYmVkZGVkOiBbXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdC8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIC0tIEVORCA8c2NyaXB0PiB0YWdzIGhhbmRsaW5nXHJcbiAgICAgICAgLy8gLS0gQkVHSU4gPHN0eWxlPiB0YWdzIGhhbmRsaW5nXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlXHJcbiAgICAgICAgc3R5bGU6IFtcclxuICAgICAgICAgICAgWy90eXBlLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLCAnQHN0eWxlQWZ0ZXJUeXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlci5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc3R5bGVFbWJlZGRlZCcsIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKHN0eWxlXFxzKikoPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0Bwb3AnIH1dXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlXHJcbiAgICAgICAgc3R5bGVBZnRlclR5cGU6IFtcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlci5odG1sJywgJ0BzdHlsZUFmdGVyVHlwZUVxdWFscyddLFxyXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHN0eWxlRW1iZWRkZWQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcycgfV0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGUgPVxyXG4gICAgICAgIHN0eWxlQWZ0ZXJUeXBlRXF1YWxzOiBbXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJywgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMScgfV0sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJywgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMScgfV0sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAc3R5bGVFbWJlZGRlZCcsIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJyB9XSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9ICRTMlxyXG4gICAgICAgIHN0eWxlV2l0aEN1c3RvbVR5cGU6IFtcclxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLiRTMicsIG5leHRFbWJlZGRlZDogJyRTMicgfV0sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlci5odG1sJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHlsZUVtYmVkZGVkOiBbXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9bXjxdKy8sICcnXVxyXG4gICAgICAgIF0sXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=