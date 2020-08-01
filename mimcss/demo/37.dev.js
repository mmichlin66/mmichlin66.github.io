(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js ***!
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

var conf = {
    // the default separators except `$-`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '#',
        blockComment: ['<#', '#>'],
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
        { open: '"', close: '"', notIn: ['string'] },
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
            start: new RegExp("^\\s*#region\\b"),
            end: new RegExp("^\\s*#endregion\\b")
        }
    }
};
var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.ps1',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' }
    ],
    keywords: [
        'begin', 'break', 'catch', 'class', 'continue', 'data',
        'define', 'do', 'dynamicparam', 'else', 'elseif', 'end',
        'exit', 'filter', 'finally', 'for', 'foreach', 'from',
        'function', 'if', 'in', 'param', 'process', 'return',
        'switch', 'throw', 'trap', 'try', 'until', 'using',
        'var', 'while', 'workflow', 'parallel', 'sequence', 'inlinescript', 'configuration'
    ],
    helpKeywords: /SYNOPSIS|DESCRIPTION|PARAMETER|EXAMPLE|INPUTS|OUTPUTS|NOTES|LINK|COMPONENT|ROLE|FUNCTIONALITY|FORWARDHELPTARGETNAME|FORWARDHELPCATEGORY|REMOTEHELPRUNSPACE|EXTERNALHELP/,
    // we include these common regular expressions
    symbols: /[=><!~?&%|+\-*\/\^;\.,]+/,
    escapes: /`(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // commands and keywords
            [/[a-zA-Z_][\w-]*/, {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': ''
                    }
                }],
            // whitespace
            [/[ \t\r\n]+/, ''],
            // labels
            [/^:\w*/, 'metatag'],
            // variables
            [/\$(\{((global|local|private|script|using):)?[\w]+\}|((global|local|private|script|using):)?[\w]+)/, 'variable'],
            // Comments
            [/<#/, 'comment', '@comment'],
            [/#.*$/, 'comment'],
            // delimiters
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
            [/\d+?/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings:
            [/\@"/, 'string', '@herestring."'],
            [/\@'/, 'string', '@herestring.\''],
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
            [/[^"'\$`]+/, {
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
            [/`./, {
                    cases: {
                        '@eos': { token: 'string.escape.invalid', next: '@popall' },
                        '@default': 'string.escape.invalid'
                    }
                }],
            [/\$[\w]+$/, {
                    cases: {
                        '$S2=="': { token: 'variable', next: '@popall' },
                        '@default': { token: 'string', next: '@popall' }
                    }
                }],
            [/\$[\w]+/, {
                    cases: {
                        '$S2=="': 'variable',
                        '@default': 'string'
                    }
                }],
            [/["']/, {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': {
                            cases: {
                                '@eos': { token: 'string', next: '@popall' },
                                '@default': 'string'
                            }
                        }
                    }
                }],
        ],
        herestring: [
            [/^\s*(["'])@/, {
                    cases: {
                        '$1==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }],
            [/[^\$`]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/`./, 'string.escape.invalid'],
            [/\$[\w]+/, {
                    cases: {
                        '$S2=="': 'variable',
                        '@default': 'string'
                    }
                }],
        ],
        comment: [
            [/[^#\.]+/, 'comment'],
            [/#>/, 'comment', '@pop'],
            [/(\.)(@helpKeywords)(?!\w)/, { token: 'comment.keyword.$2' }],
            [/[\.#]/, 'comment']
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Bvd2Vyc2hlbGwvcG93ZXJzaGVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQSxpRUFBaUUsSUFBSSxNQUFNO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywyQ0FBMkM7QUFDcEQsU0FBUyx3REFBd0Q7QUFDakU7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQyxZQUFZLEdBQUc7QUFDM0QsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBOEM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlDQUFpQywwQ0FBMEM7QUFDM0U7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUNBQWlDLGtEQUFrRDtBQUNuRjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxtQ0FBbUMscUNBQXFDO0FBQ3hFLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDO0FBQ3BFO0FBQ0E7QUFDQSx5Q0FBeUMsbUNBQW1DO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsOEJBQThCO0FBQ3pFO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiMzcuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgLy8gdGhlIGRlZmF1bHQgc2VwYXJhdG9ycyBleGNlcHQgYCQtYFxyXG4gICAgd29yZFBhdHRlcm46IC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFxAXFwjJVxcXlxcJlxcKlxcKFxcKVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGxpbmVDb21tZW50OiAnIycsXHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJzwjJywgJyM+J10sXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgXSxcclxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqI3JlZ2lvblxcXFxiXCIpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqI2VuZHJlZ2lvblxcXFxiXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcucHMxJyxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9XHJcbiAgICBdLFxyXG4gICAga2V5d29yZHM6IFtcclxuICAgICAgICAnYmVnaW4nLCAnYnJlYWsnLCAnY2F0Y2gnLCAnY2xhc3MnLCAnY29udGludWUnLCAnZGF0YScsXHJcbiAgICAgICAgJ2RlZmluZScsICdkbycsICdkeW5hbWljcGFyYW0nLCAnZWxzZScsICdlbHNlaWYnLCAnZW5kJyxcclxuICAgICAgICAnZXhpdCcsICdmaWx0ZXInLCAnZmluYWxseScsICdmb3InLCAnZm9yZWFjaCcsICdmcm9tJyxcclxuICAgICAgICAnZnVuY3Rpb24nLCAnaWYnLCAnaW4nLCAncGFyYW0nLCAncHJvY2VzcycsICdyZXR1cm4nLFxyXG4gICAgICAgICdzd2l0Y2gnLCAndGhyb3cnLCAndHJhcCcsICd0cnknLCAndW50aWwnLCAndXNpbmcnLFxyXG4gICAgICAgICd2YXInLCAnd2hpbGUnLCAnd29ya2Zsb3cnLCAncGFyYWxsZWwnLCAnc2VxdWVuY2UnLCAnaW5saW5lc2NyaXB0JywgJ2NvbmZpZ3VyYXRpb24nXHJcbiAgICBdLFxyXG4gICAgaGVscEtleXdvcmRzOiAvU1lOT1BTSVN8REVTQ1JJUFRJT058UEFSQU1FVEVSfEVYQU1QTEV8SU5QVVRTfE9VVFBVVFN8Tk9URVN8TElOS3xDT01QT05FTlR8Uk9MRXxGVU5DVElPTkFMSVRZfEZPUldBUkRIRUxQVEFSR0VUTkFNRXxGT1JXQVJESEVMUENBVEVHT1JZfFJFTU9URUhFTFBSVU5TUEFDRXxFWFRFUk5BTEhFTFAvLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9Pjwhfj8mJXwrXFwtKlxcL1xcXjtcXC4sXSsvLFxyXG4gICAgZXNjYXBlczogL2AoPzpbYWJmbnJ0dlxcXFxcIickXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gY29tbWFuZHMgYW5kIGtleXdvcmRzXHJcbiAgICAgICAgICAgIFsvW2EtekEtWl9dW1xcdy1dKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxyXG4gICAgICAgICAgICAvLyBsYWJlbHNcclxuICAgICAgICAgICAgWy9eOlxcdyovLCAnbWV0YXRhZyddLFxyXG4gICAgICAgICAgICAvLyB2YXJpYWJsZXNcclxuICAgICAgICAgICAgWy9cXCQoXFx7KChnbG9iYWx8bG9jYWx8cHJpdmF0ZXxzY3JpcHR8dXNpbmcpOik/W1xcd10rXFx9fCgoZ2xvYmFsfGxvY2FsfHByaXZhdGV8c2NyaXB0fHVzaW5nKTopP1tcXHddKykvLCAndmFyaWFibGUnXSxcclxuICAgICAgICAgICAgLy8gQ29tbWVudHNcclxuICAgICAgICAgICAgWy88Iy8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXHJcbiAgICAgICAgICAgIFsvIy4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIG51bWJlcnNcclxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZfXSpbMC05YS1mQS1GXS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvXFxkKz8vLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcclxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgLy8gc3RyaW5nczpcclxuICAgICAgICAgICAgWy9cXEBcIi8sICdzdHJpbmcnLCAnQGhlcmVzdHJpbmcuXCInXSxcclxuICAgICAgICAgICAgWy9cXEAnLywgJ3N0cmluZycsICdAaGVyZXN0cmluZy5cXCcnXSxcclxuICAgICAgICAgICAgWy9cIi8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BzdHJpbmcuXCInIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy8nLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHN0cmluZy5cXCcnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0cmluZzogW1xyXG4gICAgICAgICAgICBbL1teXCInXFwkYF0rLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUnLCBuZXh0OiAnQHBvcGFsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZy5lc2NhcGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvYC4vLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJywgbmV4dDogJ0Bwb3BhbGwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFsvXFwkW1xcd10rJC8sIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1cIic6IHsgdG9rZW46ICd2YXJpYWJsZScsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3BhbGwnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgWy9cXCRbXFx3XSsvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09XCInOiAndmFyaWFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1tcIiddLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMyJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wYWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGhlcmVzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9eXFxzKihbXCInXSlALywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICckMT09JFMyJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1teXFwkYF0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9gLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cXCRbXFx3XSsvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09XCInOiAndmFyaWFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbL1teI1xcLl0rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy8jPi8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy8oXFwuKShAaGVscEtleXdvcmRzKSg/IVxcdykvLCB7IHRva2VuOiAnY29tbWVudC5rZXl3b3JkLiQyJyB9XSxcclxuICAgICAgICAgICAgWy9bXFwuI10vLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=