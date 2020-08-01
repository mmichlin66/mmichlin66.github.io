(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js ***!
  \********************************************************************************/
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
        blockComment: ['<!--', '-->',]
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
        { open: '<', close: '>', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '(', close: ')' },
        { open: '[', close: ']' },
        { open: '`', close: '`' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#?region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#?endregion\\b.*-->")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.md',
    // escape codes
    control: /[\\`*_\[\]{}()#+\-\.!]/,
    noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
    escapes: /\\(?:@control)/,
    // escape codes for javascript/CSS strings
    jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    // non matched elements
    empty: [
        'area', 'base', 'basefont', 'br', 'col', 'frame',
        'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param'
    ],
    tokenizer: {
        root: [
            // markdown tables
            [/^\s*\|/, '@rematch', '@table_header'],
            // headers (with #)
            [/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/, ['white', 'keyword', 'keyword', 'keyword']],
            // headers (with =)
            [/^\s*(=+|\-+)\s*$/, 'keyword'],
            // headers (with ***)
            [/^\s*((\*[ ]?)+)\s*$/, 'meta.separator'],
            // quote
            [/^\s*>+/, 'comment'],
            // list (starting with * or number)
            [/^\s*([\*\-+:]|\d+\.)\s/, 'keyword'],
            // code block (4 spaces indent)
            [/^(\t|[ ]{4})[^ ].*$/, 'string'],
            // code block (3 tilde)
            [/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/, { token: 'string', next: '@codeblock' }],
            // github style code blocks (with backticks and language)
            [/^\s*```\s*((?:\w|[\/\-#])+).*$/, { token: 'string', next: '@codeblockgh', nextEmbedded: '$1' }],
            // github style code blocks (with backticks but no language)
            [/^\s*```\s*$/, { token: 'string', next: '@codeblock' }],
            // markup within lines
            { include: '@linecontent' },
        ],
        table_header: [
            { include: '@table_common' },
            [/[^\|]+/, 'keyword.table.header'],
        ],
        table_body: [
            { include: '@table_common' },
            { include: '@linecontent' },
        ],
        table_common: [
            [/\s*[\-:]+\s*/, { token: 'keyword', switchTo: 'table_body' }],
            [/^\s*\|/, 'keyword.table.left'],
            [/^\s*[^\|]/, '@rematch', '@pop'],
            [/^\s*$/, '@rematch', '@pop'],
            [/\|/, {
                    cases: {
                        '@eos': 'keyword.table.right',
                        '@default': 'keyword.table.middle',
                    }
                }],
        ],
        codeblock: [
            [/^\s*~~~\s*$/, { token: 'string', next: '@pop' }],
            [/^\s*```\s*$/, { token: 'string', next: '@pop' }],
            [/.*$/, 'variable.source'],
        ],
        // github style code blocks
        codeblockgh: [
            [/```\s*$/, { token: 'variable.source', next: '@pop', nextEmbedded: '@pop' }],
            [/[^`]+/, 'variable.source'],
        ],
        linecontent: [
            // escapes
            [/&\w+;/, 'string.escape'],
            [/@escapes/, 'escape'],
            // various markup
            [/\b__([^\\_]|@escapes|_(?!_))+__\b/, 'strong'],
            [/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, 'strong'],
            [/\b_[^_]+_\b/, 'emphasis'],
            [/\*([^\\*]|@escapes)+\*/, 'emphasis'],
            [/`([^\\`]|@escapes)+`/, 'variable'],
            // links
            [/\{+[^}]+\}+/, 'string.target'],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/, ['string.link', '', 'string.link']],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\])/, 'string.link'],
            // or html
            { include: 'html' },
        ],
        // Note: it is tempting to rather switch to the real HTML mode instead of building our own here
        // but currently there is a limitation in Monarch that prevents us from doing it: The opening
        // '<' would start the HTML mode, however there is no way to jump 1 character back to let the
        // HTML mode also tokenize the opening angle bracket. Thus, even though we could jump to HTML,
        // we cannot correctly tokenize it in that mode yet.
        html: [
            // html tags
            [/<(\w+)\/>/, 'tag'],
            [/<(\w+)/, {
                    cases: {
                        '@empty': { token: 'tag', next: '@tag.$1' },
                        '@default': { token: 'tag', next: '@tag.$1' }
                    }
                }],
            [/<\/(\w+)\s*>/, { token: 'tag' }],
            [/<!--/, 'comment', '@comment']
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, 'comment', '@pop'],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
        // Almost full HTML tag matching, complete with embedded scripts & styles
        tag: [
            [/[ \t\r\n]+/, 'white'],
            [/(type)(\s*=\s*)(")([^"]+)(")/, ['attribute.name.html', 'delimiter.html', 'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html']],
            [/(type)(\s*=\s*)(')([^']+)(')/, ['attribute.name.html', 'delimiter.html', 'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html']],
            [/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/, ['attribute.name.html', 'delimiter.html', 'string.html']],
            [/\w+/, 'attribute.name.html'],
            [/\/>/, 'tag', '@pop'],
            [/>/, {
                    cases: {
                        '$S2==style': { token: 'tag', switchTo: 'embeddedStyle', nextEmbedded: 'text/css' },
                        '$S2==script': {
                            cases: {
                                '$S3': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: '$S3' },
                                '@default': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: 'text/javascript' }
                            }
                        },
                        '@default': { token: 'tag', next: '@pop' }
                    }
                }],
        ],
        embeddedStyle: [
            [/[^<]+/, ''],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
        embeddedScript: [
            [/[^<]+/, ''],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL21hcmtkb3duL21hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLHdEQUF3RCxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQSxrREFBa0Qsc0NBQXNDO0FBQ3hGO0FBQ0EsZ0RBQWdELDREQUE0RDtBQUM1RztBQUNBLDZCQUE2QixzQ0FBc0M7QUFDbkU7QUFDQSxhQUFhLDBCQUEwQjtBQUN2QztBQUNBO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyQkFBMkI7QUFDeEMsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBLDhCQUE4QiwyQ0FBMkM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsNkJBQTZCLGdDQUFnQztBQUM3RCw2QkFBNkIsZ0NBQWdDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtEQUErRDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQUksSUFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdDQUFnQztBQUNuRSxxQ0FBcUM7QUFDckM7QUFDQSxpQkFBaUI7QUFDakIsOEJBQThCLGVBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnRDtBQUNyRTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0VBQW9FO0FBQzNHO0FBQ0E7QUFDQSx3Q0FBd0MsZ0VBQWdFO0FBQ3hHLDZDQUE2QztBQUM3QztBQUNBLHlCQUF5QjtBQUN6QixxQ0FBcUM7QUFDckM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdEQUF3RDtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3REFBd0Q7QUFDdkY7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMjUuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCEtLScsICctLT4nLF1cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCBub3RJbjogWydzdHJpbmcnXSB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9LFxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKjwhLS1cXFxccyojP3JlZ2lvblxcXFxiLiotLT5cIiksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyo8IS0tXFxcXHMqIz9lbmRyZWdpb25cXFxcYi4qLS0+XCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5tZCcsXHJcbiAgICAvLyBlc2NhcGUgY29kZXNcclxuICAgIGNvbnRyb2w6IC9bXFxcXGAqX1xcW1xcXXt9KCkjK1xcLVxcLiFdLyxcclxuICAgIG5vbmNvbnRyb2w6IC9bXlxcXFxgKl9cXFtcXF17fSgpIytcXC1cXC4hXS8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OkBjb250cm9sKS8sXHJcbiAgICAvLyBlc2NhcGUgY29kZXMgZm9yIGphdmFzY3JpcHQvQ1NTIHN0cmluZ3NcclxuICAgIGpzZXNjYXBlczogL1xcXFwoPzpbYnRuZnJcXFxcXCInXXxbMC03XVswLTddP3xbMC0zXVswLTddezJ9KS8sXHJcbiAgICAvLyBub24gbWF0Y2hlZCBlbGVtZW50c1xyXG4gICAgZW1wdHk6IFtcclxuICAgICAgICAnYXJlYScsICdiYXNlJywgJ2Jhc2Vmb250JywgJ2JyJywgJ2NvbCcsICdmcmFtZScsXHJcbiAgICAgICAgJ2hyJywgJ2ltZycsICdpbnB1dCcsICdpc2luZGV4JywgJ2xpbmsnLCAnbWV0YScsICdwYXJhbSdcclxuICAgIF0sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIG1hcmtkb3duIHRhYmxlc1xyXG4gICAgICAgICAgICBbL15cXHMqXFx8LywgJ0ByZW1hdGNoJywgJ0B0YWJsZV9oZWFkZXInXSxcclxuICAgICAgICAgICAgLy8gaGVhZGVycyAod2l0aCAjKVxyXG4gICAgICAgICAgICBbL14oXFxzezAsM30pKCMrKSgoPzpbXlxcXFwjXXxAZXNjYXBlcykrKSgoPzojKyk/KS8sIFsnd2hpdGUnLCAna2V5d29yZCcsICdrZXl3b3JkJywgJ2tleXdvcmQnXV0sXHJcbiAgICAgICAgICAgIC8vIGhlYWRlcnMgKHdpdGggPSlcclxuICAgICAgICAgICAgWy9eXFxzKig9K3xcXC0rKVxccyokLywgJ2tleXdvcmQnXSxcclxuICAgICAgICAgICAgLy8gaGVhZGVycyAod2l0aCAqKiopXHJcbiAgICAgICAgICAgIFsvXlxccyooKFxcKlsgXT8pKylcXHMqJC8sICdtZXRhLnNlcGFyYXRvciddLFxyXG4gICAgICAgICAgICAvLyBxdW90ZVxyXG4gICAgICAgICAgICBbL15cXHMqPisvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICAvLyBsaXN0IChzdGFydGluZyB3aXRoICogb3IgbnVtYmVyKVxyXG4gICAgICAgICAgICBbL15cXHMqKFtcXCpcXC0rOl18XFxkK1xcLilcXHMvLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICAvLyBjb2RlIGJsb2NrICg0IHNwYWNlcyBpbmRlbnQpXHJcbiAgICAgICAgICAgIFsvXihcXHR8WyBdezR9KVteIF0uKiQvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIC8vIGNvZGUgYmxvY2sgKDMgdGlsZGUpXHJcbiAgICAgICAgICAgIFsvXlxccyp+fn5cXHMqKCg/Olxcd3xbXFwvXFwtI10pKyk/XFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bjb2RlYmxvY2snIH1dLFxyXG4gICAgICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3MgKHdpdGggYmFja3RpY2tzIGFuZCBsYW5ndWFnZSlcclxuICAgICAgICAgICAgWy9eXFxzKmBgYFxccyooKD86XFx3fFtcXC9cXC0jXSkrKS4qJC8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQGNvZGVibG9ja2doJywgbmV4dEVtYmVkZGVkOiAnJDEnIH1dLFxyXG4gICAgICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3MgKHdpdGggYmFja3RpY2tzIGJ1dCBubyBsYW5ndWFnZSlcclxuICAgICAgICAgICAgWy9eXFxzKmBgYFxccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAY29kZWJsb2NrJyB9XSxcclxuICAgICAgICAgICAgLy8gbWFya3VwIHdpdGhpbiBsaW5lc1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbGluZWNvbnRlbnQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWJsZV9oZWFkZXI6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRhYmxlX2NvbW1vbicgfSxcclxuICAgICAgICAgICAgWy9bXlxcfF0rLywgJ2tleXdvcmQudGFibGUuaGVhZGVyJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWJsZV9ib2R5OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0YWJsZV9jb21tb24nIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BsaW5lY29udGVudCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhYmxlX2NvbW1vbjogW1xyXG4gICAgICAgICAgICBbL1xccypbXFwtOl0rXFxzKi8sIHsgdG9rZW46ICdrZXl3b3JkJywgc3dpdGNoVG86ICd0YWJsZV9ib2R5JyB9XSxcclxuICAgICAgICAgICAgWy9eXFxzKlxcfC8sICdrZXl3b3JkLnRhYmxlLmxlZnQnXSxcclxuICAgICAgICAgICAgWy9eXFxzKlteXFx8XS8sICdAcmVtYXRjaCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvXlxccyokLywgJ0ByZW1hdGNoJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9cXHwvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiAna2V5d29yZC50YWJsZS5yaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdrZXl3b3JkLnRhYmxlLm1pZGRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb2RlYmxvY2s6IFtcclxuICAgICAgICAgICAgWy9eXFxzKn5+flxccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9eXFxzKmBgYFxccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy8uKiQvLCAndmFyaWFibGUuc291cmNlJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3NcclxuICAgICAgICBjb2RlYmxvY2tnaDogW1xyXG4gICAgICAgICAgICBbL2BgYFxccyokLywgeyB0b2tlbjogJ3ZhcmlhYmxlLnNvdXJjZScsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvW15gXSsvLCAndmFyaWFibGUuc291cmNlJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaW5lY29udGVudDogW1xyXG4gICAgICAgICAgICAvLyBlc2NhcGVzXHJcbiAgICAgICAgICAgIFsvJlxcdys7LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdlc2NhcGUnXSxcclxuICAgICAgICAgICAgLy8gdmFyaW91cyBtYXJrdXBcclxuICAgICAgICAgICAgWy9cXGJfXyhbXlxcXFxfXXxAZXNjYXBlc3xfKD8hXykpK19fXFxiLywgJ3N0cm9uZyddLFxyXG4gICAgICAgICAgICBbL1xcKlxcKihbXlxcXFwqXXxAZXNjYXBlc3xcXCooPyFcXCopKStcXCpcXCovLCAnc3Ryb25nJ10sXHJcbiAgICAgICAgICAgIFsvXFxiX1teX10rX1xcYi8sICdlbXBoYXNpcyddLFxyXG4gICAgICAgICAgICBbL1xcKihbXlxcXFwqXXxAZXNjYXBlcykrXFwqLywgJ2VtcGhhc2lzJ10sXHJcbiAgICAgICAgICAgIFsvYChbXlxcXFxgXXxAZXNjYXBlcykrYC8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICAvLyBsaW5rc1xyXG4gICAgICAgICAgICBbL1xceytbXn1dK1xcfSsvLCAnc3RyaW5nLnRhcmdldCddLFxyXG4gICAgICAgICAgICBbLyghP1xcWykoKD86W15cXF1cXFxcXXxAZXNjYXBlcykqKShcXF1cXChbXlxcKV0rXFwpKS8sIFsnc3RyaW5nLmxpbmsnLCAnJywgJ3N0cmluZy5saW5rJ11dLFxyXG4gICAgICAgICAgICBbLyghP1xcWykoKD86W15cXF1cXFxcXXxAZXNjYXBlcykqKShcXF0pLywgJ3N0cmluZy5saW5rJ10sXHJcbiAgICAgICAgICAgIC8vIG9yIGh0bWxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnaHRtbCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIE5vdGU6IGl0IGlzIHRlbXB0aW5nIHRvIHJhdGhlciBzd2l0Y2ggdG8gdGhlIHJlYWwgSFRNTCBtb2RlIGluc3RlYWQgb2YgYnVpbGRpbmcgb3VyIG93biBoZXJlXHJcbiAgICAgICAgLy8gYnV0IGN1cnJlbnRseSB0aGVyZSBpcyBhIGxpbWl0YXRpb24gaW4gTW9uYXJjaCB0aGF0IHByZXZlbnRzIHVzIGZyb20gZG9pbmcgaXQ6IFRoZSBvcGVuaW5nXHJcbiAgICAgICAgLy8gJzwnIHdvdWxkIHN0YXJ0IHRoZSBIVE1MIG1vZGUsIGhvd2V2ZXIgdGhlcmUgaXMgbm8gd2F5IHRvIGp1bXAgMSBjaGFyYWN0ZXIgYmFjayB0byBsZXQgdGhlXHJcbiAgICAgICAgLy8gSFRNTCBtb2RlIGFsc28gdG9rZW5pemUgdGhlIG9wZW5pbmcgYW5nbGUgYnJhY2tldC4gVGh1cywgZXZlbiB0aG91Z2ggd2UgY291bGQganVtcCB0byBIVE1MLFxyXG4gICAgICAgIC8vIHdlIGNhbm5vdCBjb3JyZWN0bHkgdG9rZW5pemUgaXQgaW4gdGhhdCBtb2RlIHlldC5cclxuICAgICAgICBodG1sOiBbXHJcbiAgICAgICAgICAgIC8vIGh0bWwgdGFnc1xyXG4gICAgICAgICAgICBbLzwoXFx3KylcXC8+LywgJ3RhZyddLFxyXG4gICAgICAgICAgICBbLzwoXFx3KykvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BlbXB0eSc6IHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZy4kMScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAdGFnLiQxJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvPFxcLyhcXHcrKVxccyo+LywgeyB0b2tlbjogJ3RhZycgfV0sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50JywgJ0Bjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXjxcXC1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcclxuICAgICAgICAgICAgWy8tLT4vLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50LmNvbnRlbnQuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1s8XFwtXS8sICdjb21tZW50LmNvbnRlbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWxtb3N0IGZ1bGwgSFRNTCB0YWcgbWF0Y2hpbmcsIGNvbXBsZXRlIHdpdGggZW1iZWRkZWQgc2NyaXB0cyAmIHN0eWxlc1xyXG4gICAgICAgIHRhZzogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgWy8odHlwZSkoXFxzKj1cXHMqKShcIikoW15cIl0rKShcIikvLCBbJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLCAnZGVsaW1pdGVyLmh0bWwnLCAnc3RyaW5nLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdzdHJpbmcuaHRtbCcsIHN3aXRjaFRvOiAnQHRhZy4kUzIuJDQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5odG1sJ11dLFxyXG4gICAgICAgICAgICBbLyh0eXBlKShcXHMqPVxccyopKCcpKFteJ10rKSgnKS8sIFsnYXR0cmlidXRlLm5hbWUuaHRtbCcsICdkZWxpbWl0ZXIuaHRtbCcsICdzdHJpbmcuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5odG1sJywgc3dpdGNoVG86ICdAdGFnLiRTMi4kNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmh0bWwnXV0sXHJcbiAgICAgICAgICAgIFsvKFxcdyspKFxccyo9XFxzKikoXCJbXlwiXSpcInwnW14nXSonKS8sIFsnYXR0cmlidXRlLm5hbWUuaHRtbCcsICdkZWxpbWl0ZXIuaHRtbCcsICdzdHJpbmcuaHRtbCddXSxcclxuICAgICAgICAgICAgWy9cXHcrLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcclxuICAgICAgICAgICAgWy9cXC8+LywgJ3RhZycsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvPi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1zdHlsZSc6IHsgdG9rZW46ICd0YWcnLCBzd2l0Y2hUbzogJ2VtYmVkZGVkU3R5bGUnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09c2NyaXB0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJFMzJzogeyB0b2tlbjogJ3RhZycsIHN3aXRjaFRvOiAnZW1iZWRkZWRTY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICckUzMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3RhZycsIHN3aXRjaFRvOiAnZW1iZWRkZWRTY3JpcHQnLCBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAcG9wJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbWJlZGRlZFN0eWxlOiBbXHJcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ10sXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbLzwvLCAnJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVtYmVkZGVkU2NyaXB0OiBbXHJcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ10sXHJcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy88LywgJyddXHJcbiAgICAgICAgXSxcclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==