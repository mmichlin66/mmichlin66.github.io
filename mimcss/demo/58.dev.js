(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js ***!
  \********************************************************************/
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
        lineComment: '\'',
        blockComment: ['/*', '*/'],
    },
    brackets: [
        ['{', '}'], ['[', ']'], ['(', ')'], ['<', '>'],
        ['addhandler', 'end addhandler'],
        ['class', 'end class'],
        ['enum', 'end enum'],
        ['event', 'end event'],
        ['function', 'end function'],
        ['get', 'end get'],
        ['if', 'end if'],
        ['interface', 'end interface'],
        ['module', 'end module'],
        ['namespace', 'end namespace'],
        ['operator', 'end operator'],
        ['property', 'end property'],
        ['raiseevent', 'end raiseevent'],
        ['removehandler', 'end removehandler'],
        ['select', 'end select'],
        ['set', 'end set'],
        ['structure', 'end structure'],
        ['sub', 'end sub'],
        ['synclock', 'end synclock'],
        ['try', 'end try'],
        ['while', 'end while'],
        ['with', 'end with'],
        ['using', 'end using'],
        ['do', 'loop'],
        ['for', 'next']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '<', close: '>', notIn: ['string', 'comment'] },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*#Region\\b"),
            end: new RegExp("^\\s*#End Region\\b")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.vb',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.array', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.angle', open: '<', close: '>' },
        // Special bracket statement pairs
        // according to https://msdn.microsoft.com/en-us/library/tsw2a11z.aspx
        { token: 'keyword.tag-addhandler', open: 'addhandler', close: 'end addhandler' },
        { token: 'keyword.tag-class', open: 'class', close: 'end class' },
        { token: 'keyword.tag-enum', open: 'enum', close: 'end enum' },
        { token: 'keyword.tag-event', open: 'event', close: 'end event' },
        { token: 'keyword.tag-function', open: 'function', close: 'end function' },
        { token: 'keyword.tag-get', open: 'get', close: 'end get' },
        { token: 'keyword.tag-if', open: 'if', close: 'end if' },
        { token: 'keyword.tag-interface', open: 'interface', close: 'end interface' },
        { token: 'keyword.tag-module', open: 'module', close: 'end module' },
        { token: 'keyword.tag-namespace', open: 'namespace', close: 'end namespace' },
        { token: 'keyword.tag-operator', open: 'operator', close: 'end operator' },
        { token: 'keyword.tag-property', open: 'property', close: 'end property' },
        { token: 'keyword.tag-raiseevent', open: 'raiseevent', close: 'end raiseevent' },
        { token: 'keyword.tag-removehandler', open: 'removehandler', close: 'end removehandler' },
        { token: 'keyword.tag-select', open: 'select', close: 'end select' },
        { token: 'keyword.tag-set', open: 'set', close: 'end set' },
        { token: 'keyword.tag-structure', open: 'structure', close: 'end structure' },
        { token: 'keyword.tag-sub', open: 'sub', close: 'end sub' },
        { token: 'keyword.tag-synclock', open: 'synclock', close: 'end synclock' },
        { token: 'keyword.tag-try', open: 'try', close: 'end try' },
        { token: 'keyword.tag-while', open: 'while', close: 'end while' },
        { token: 'keyword.tag-with', open: 'with', close: 'end with' },
        // Other pairs
        { token: 'keyword.tag-using', open: 'using', close: 'end using' },
        { token: 'keyword.tag-do', open: 'do', close: 'loop' },
        { token: 'keyword.tag-for', open: 'for', close: 'next' }
    ],
    keywords: [
        'AddHandler', 'AddressOf', 'Alias', 'And', 'AndAlso', 'As', 'Async', 'Boolean', 'ByRef', 'Byte', 'ByVal', 'Call',
        'Case', 'Catch', 'CBool', 'CByte', 'CChar', 'CDate', 'CDbl', 'CDec', 'Char', 'CInt', 'Class', 'CLng',
        'CObj', 'Const', 'Continue', 'CSByte', 'CShort', 'CSng', 'CStr', 'CType', 'CUInt', 'CULng', 'CUShort',
        'Date', 'Decimal', 'Declare', 'Default', 'Delegate', 'Dim', 'DirectCast', 'Do', 'Double', 'Each', 'Else',
        'ElseIf', 'End', 'EndIf', 'Enum', 'Erase', 'Error', 'Event', 'Exit', 'False', 'Finally', 'For', 'Friend',
        'Function', 'Get', 'GetType', 'GetXMLNamespace', 'Global', 'GoSub', 'GoTo', 'Handles', 'If', 'Implements',
        'Imports', 'In', 'Inherits', 'Integer', 'Interface', 'Is', 'IsNot', 'Let', 'Lib', 'Like', 'Long', 'Loop',
        'Me', 'Mod', 'Module', 'MustInherit', 'MustOverride', 'MyBase', 'MyClass', 'NameOf', 'Namespace', 'Narrowing', 'New',
        'Next', 'Not', 'Nothing', 'NotInheritable', 'NotOverridable', 'Object', 'Of', 'On', 'Operator', 'Option',
        'Optional', 'Or', 'OrElse', 'Out', 'Overloads', 'Overridable', 'Overrides', 'ParamArray', 'Partial',
        'Private', 'Property', 'Protected', 'Public', 'RaiseEvent', 'ReadOnly', 'ReDim', 'RemoveHandler', 'Resume',
        'Return', 'SByte', 'Select', 'Set', 'Shadows', 'Shared', 'Short', 'Single', 'Static', 'Step', 'Stop',
        'String', 'Structure', 'Sub', 'SyncLock', 'Then', 'Throw', 'To', 'True', 'Try', 'TryCast', 'TypeOf',
        'UInteger', 'ULong', 'UShort', 'Using', 'Variant', 'Wend', 'When', 'While', 'Widening', 'With', 'WithEvents',
        'WriteOnly', 'Xor'
    ],
    tagwords: [
        'If', 'Sub', 'Select', 'Try', 'Class', 'Enum',
        'Function', 'Get', 'Interface', 'Module', 'Namespace', 'Operator', 'Set', 'Structure', 'Using', 'While', 'With',
        'Do', 'Loop', 'For', 'Next', 'Property', 'Continue', 'AddHandler', 'RemoveHandler', 'Event', 'RaiseEvent', 'SyncLock'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /U?[DI%L&S@]?/,
    floatsuffix: /[R#F!]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // whitespace
            { include: '@whitespace' },
            // special ending tag-words
            [/next(?!\w)/, { token: 'keyword.tag-for' }],
            [/loop(?!\w)/, { token: 'keyword.tag-do' }],
            // usual ending tags
            [/end\s+(?!for|do)(addhandler|class|enum|event|function|get|if|interface|module|namespace|operator|property|raiseevent|removehandler|select|set|structure|sub|synclock|try|while|with|using)/, { token: 'keyword.tag-$1' }],
            // identifiers, tagwords, and keywords
            [/[a-zA-Z_]\w*/, {
                    cases: {
                        '@tagwords': { token: 'keyword.tag-$0' },
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }],
            // Preprocessor directive
            [/^\s*#\w+/, 'keyword'],
            // numbers
            [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],
            [/&0[0-7]+(@integersuffix)/, 'number.octal'],
            [/\d+(@integersuffix)/, 'number'],
            // date literal
            [/#.*#/, 'number'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // strings
            [/"/, 'string', '@string'],
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/(\'|REM(?!\w)).*$/, 'comment'],
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"C?/, 'string', '@pop']
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3ZiL3ZiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQ0FBcUMsWUFBWSxHQUFHO0FBQzdELFNBQVMsa0RBQWtEO0FBQzNELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVMsa0RBQWtEO0FBQzNEO0FBQ0E7QUFDQSxTQUFTLCtFQUErRTtBQUN4RixTQUFTLGdFQUFnRTtBQUN6RSxTQUFTLDZEQUE2RDtBQUN0RSxTQUFTLGdFQUFnRTtBQUN6RSxTQUFTLHlFQUF5RTtBQUNsRixTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLHVEQUF1RDtBQUNoRSxTQUFTLDRFQUE0RTtBQUNyRixTQUFTLG1FQUFtRTtBQUM1RSxTQUFTLDRFQUE0RTtBQUNyRixTQUFTLHlFQUF5RTtBQUNsRixTQUFTLHlFQUF5RTtBQUNsRixTQUFTLCtFQUErRTtBQUN4RixTQUFTLHdGQUF3RjtBQUNqRyxTQUFTLG1FQUFtRTtBQUM1RSxTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLDRFQUE0RTtBQUNyRixTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLHlFQUF5RTtBQUNsRixTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLGdFQUFnRTtBQUN6RSxTQUFTLDZEQUE2RDtBQUN0RTtBQUNBLFNBQVMsZ0VBQWdFO0FBQ3pFLFNBQVMscURBQXFEO0FBQzlELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBLDRNQUE0TSwwQkFBMEI7QUFDdE87QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6IjU4LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ndXNlIHN0cmljdCc7XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgbGluZUNvbW1lbnQ6ICdcXCcnLFxyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddLFxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyd7JywgJ30nXSwgWydbJywgJ10nXSwgWycoJywgJyknXSwgWyc8JywgJz4nXSxcclxuICAgICAgICBbJ2FkZGhhbmRsZXInLCAnZW5kIGFkZGhhbmRsZXInXSxcclxuICAgICAgICBbJ2NsYXNzJywgJ2VuZCBjbGFzcyddLFxyXG4gICAgICAgIFsnZW51bScsICdlbmQgZW51bSddLFxyXG4gICAgICAgIFsnZXZlbnQnLCAnZW5kIGV2ZW50J10sXHJcbiAgICAgICAgWydmdW5jdGlvbicsICdlbmQgZnVuY3Rpb24nXSxcclxuICAgICAgICBbJ2dldCcsICdlbmQgZ2V0J10sXHJcbiAgICAgICAgWydpZicsICdlbmQgaWYnXSxcclxuICAgICAgICBbJ2ludGVyZmFjZScsICdlbmQgaW50ZXJmYWNlJ10sXHJcbiAgICAgICAgWydtb2R1bGUnLCAnZW5kIG1vZHVsZSddLFxyXG4gICAgICAgIFsnbmFtZXNwYWNlJywgJ2VuZCBuYW1lc3BhY2UnXSxcclxuICAgICAgICBbJ29wZXJhdG9yJywgJ2VuZCBvcGVyYXRvciddLFxyXG4gICAgICAgIFsncHJvcGVydHknLCAnZW5kIHByb3BlcnR5J10sXHJcbiAgICAgICAgWydyYWlzZWV2ZW50JywgJ2VuZCByYWlzZWV2ZW50J10sXHJcbiAgICAgICAgWydyZW1vdmVoYW5kbGVyJywgJ2VuZCByZW1vdmVoYW5kbGVyJ10sXHJcbiAgICAgICAgWydzZWxlY3QnLCAnZW5kIHNlbGVjdCddLFxyXG4gICAgICAgIFsnc2V0JywgJ2VuZCBzZXQnXSxcclxuICAgICAgICBbJ3N0cnVjdHVyZScsICdlbmQgc3RydWN0dXJlJ10sXHJcbiAgICAgICAgWydzdWInLCAnZW5kIHN1YiddLFxyXG4gICAgICAgIFsnc3luY2xvY2snLCAnZW5kIHN5bmNsb2NrJ10sXHJcbiAgICAgICAgWyd0cnknLCAnZW5kIHRyeSddLFxyXG4gICAgICAgIFsnd2hpbGUnLCAnZW5kIHdoaWxlJ10sXHJcbiAgICAgICAgWyd3aXRoJywgJ2VuZCB3aXRoJ10sXHJcbiAgICAgICAgWyd1c2luZycsICdlbmQgdXNpbmcnXSxcclxuICAgICAgICBbJ2RvJywgJ2xvb3AnXSxcclxuICAgICAgICBbJ2ZvcicsICduZXh0J11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqI1JlZ2lvblxcXFxiXCIpLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqI0VuZCBSZWdpb25cXFxcYlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcudmInLFxyXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hcnJheScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJywgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXHJcbiAgICAgICAgLy8gU3BlY2lhbCBicmFja2V0IHN0YXRlbWVudCBwYWlyc1xyXG4gICAgICAgIC8vIGFjY29yZGluZyB0byBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L3RzdzJhMTF6LmFzcHhcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctYWRkaGFuZGxlcicsIG9wZW46ICdhZGRoYW5kbGVyJywgY2xvc2U6ICdlbmQgYWRkaGFuZGxlcicgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctY2xhc3MnLCBvcGVuOiAnY2xhc3MnLCBjbG9zZTogJ2VuZCBjbGFzcycgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZW51bScsIG9wZW46ICdlbnVtJywgY2xvc2U6ICdlbmQgZW51bScgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZXZlbnQnLCBvcGVuOiAnZXZlbnQnLCBjbG9zZTogJ2VuZCBldmVudCcgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZnVuY3Rpb24nLCBvcGVuOiAnZnVuY3Rpb24nLCBjbG9zZTogJ2VuZCBmdW5jdGlvbicgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZ2V0Jywgb3BlbjogJ2dldCcsIGNsb3NlOiAnZW5kIGdldCcgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctaWYnLCBvcGVuOiAnaWYnLCBjbG9zZTogJ2VuZCBpZicgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctaW50ZXJmYWNlJywgb3BlbjogJ2ludGVyZmFjZScsIGNsb3NlOiAnZW5kIGludGVyZmFjZScgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctbW9kdWxlJywgb3BlbjogJ21vZHVsZScsIGNsb3NlOiAnZW5kIG1vZHVsZScgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctbmFtZXNwYWNlJywgb3BlbjogJ25hbWVzcGFjZScsIGNsb3NlOiAnZW5kIG5hbWVzcGFjZScgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctb3BlcmF0b3InLCBvcGVuOiAnb3BlcmF0b3InLCBjbG9zZTogJ2VuZCBvcGVyYXRvcicgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctcHJvcGVydHknLCBvcGVuOiAncHJvcGVydHknLCBjbG9zZTogJ2VuZCBwcm9wZXJ0eScgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctcmFpc2VldmVudCcsIG9wZW46ICdyYWlzZWV2ZW50JywgY2xvc2U6ICdlbmQgcmFpc2VldmVudCcgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctcmVtb3ZlaGFuZGxlcicsIG9wZW46ICdyZW1vdmVoYW5kbGVyJywgY2xvc2U6ICdlbmQgcmVtb3ZlaGFuZGxlcicgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctc2VsZWN0Jywgb3BlbjogJ3NlbGVjdCcsIGNsb3NlOiAnZW5kIHNlbGVjdCcgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctc2V0Jywgb3BlbjogJ3NldCcsIGNsb3NlOiAnZW5kIHNldCcgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctc3RydWN0dXJlJywgb3BlbjogJ3N0cnVjdHVyZScsIGNsb3NlOiAnZW5kIHN0cnVjdHVyZScgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctc3ViJywgb3BlbjogJ3N1YicsIGNsb3NlOiAnZW5kIHN1YicgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctc3luY2xvY2snLCBvcGVuOiAnc3luY2xvY2snLCBjbG9zZTogJ2VuZCBzeW5jbG9jaycgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctdHJ5Jywgb3BlbjogJ3RyeScsIGNsb3NlOiAnZW5kIHRyeScgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctd2hpbGUnLCBvcGVuOiAnd2hpbGUnLCBjbG9zZTogJ2VuZCB3aGlsZScgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctd2l0aCcsIG9wZW46ICd3aXRoJywgY2xvc2U6ICdlbmQgd2l0aCcgfSxcclxuICAgICAgICAvLyBPdGhlciBwYWlyc1xyXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy11c2luZycsIG9wZW46ICd1c2luZycsIGNsb3NlOiAnZW5kIHVzaW5nJyB9LFxyXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1kbycsIG9wZW46ICdkbycsIGNsb3NlOiAnbG9vcCcgfSxcclxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZm9yJywgb3BlbjogJ2ZvcicsIGNsb3NlOiAnbmV4dCcgfVxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgJ0FkZEhhbmRsZXInLCAnQWRkcmVzc09mJywgJ0FsaWFzJywgJ0FuZCcsICdBbmRBbHNvJywgJ0FzJywgJ0FzeW5jJywgJ0Jvb2xlYW4nLCAnQnlSZWYnLCAnQnl0ZScsICdCeVZhbCcsICdDYWxsJyxcclxuICAgICAgICAnQ2FzZScsICdDYXRjaCcsICdDQm9vbCcsICdDQnl0ZScsICdDQ2hhcicsICdDRGF0ZScsICdDRGJsJywgJ0NEZWMnLCAnQ2hhcicsICdDSW50JywgJ0NsYXNzJywgJ0NMbmcnLFxyXG4gICAgICAgICdDT2JqJywgJ0NvbnN0JywgJ0NvbnRpbnVlJywgJ0NTQnl0ZScsICdDU2hvcnQnLCAnQ1NuZycsICdDU3RyJywgJ0NUeXBlJywgJ0NVSW50JywgJ0NVTG5nJywgJ0NVU2hvcnQnLFxyXG4gICAgICAgICdEYXRlJywgJ0RlY2ltYWwnLCAnRGVjbGFyZScsICdEZWZhdWx0JywgJ0RlbGVnYXRlJywgJ0RpbScsICdEaXJlY3RDYXN0JywgJ0RvJywgJ0RvdWJsZScsICdFYWNoJywgJ0Vsc2UnLFxyXG4gICAgICAgICdFbHNlSWYnLCAnRW5kJywgJ0VuZElmJywgJ0VudW0nLCAnRXJhc2UnLCAnRXJyb3InLCAnRXZlbnQnLCAnRXhpdCcsICdGYWxzZScsICdGaW5hbGx5JywgJ0ZvcicsICdGcmllbmQnLFxyXG4gICAgICAgICdGdW5jdGlvbicsICdHZXQnLCAnR2V0VHlwZScsICdHZXRYTUxOYW1lc3BhY2UnLCAnR2xvYmFsJywgJ0dvU3ViJywgJ0dvVG8nLCAnSGFuZGxlcycsICdJZicsICdJbXBsZW1lbnRzJyxcclxuICAgICAgICAnSW1wb3J0cycsICdJbicsICdJbmhlcml0cycsICdJbnRlZ2VyJywgJ0ludGVyZmFjZScsICdJcycsICdJc05vdCcsICdMZXQnLCAnTGliJywgJ0xpa2UnLCAnTG9uZycsICdMb29wJyxcclxuICAgICAgICAnTWUnLCAnTW9kJywgJ01vZHVsZScsICdNdXN0SW5oZXJpdCcsICdNdXN0T3ZlcnJpZGUnLCAnTXlCYXNlJywgJ015Q2xhc3MnLCAnTmFtZU9mJywgJ05hbWVzcGFjZScsICdOYXJyb3dpbmcnLCAnTmV3JyxcclxuICAgICAgICAnTmV4dCcsICdOb3QnLCAnTm90aGluZycsICdOb3RJbmhlcml0YWJsZScsICdOb3RPdmVycmlkYWJsZScsICdPYmplY3QnLCAnT2YnLCAnT24nLCAnT3BlcmF0b3InLCAnT3B0aW9uJyxcclxuICAgICAgICAnT3B0aW9uYWwnLCAnT3InLCAnT3JFbHNlJywgJ091dCcsICdPdmVybG9hZHMnLCAnT3ZlcnJpZGFibGUnLCAnT3ZlcnJpZGVzJywgJ1BhcmFtQXJyYXknLCAnUGFydGlhbCcsXHJcbiAgICAgICAgJ1ByaXZhdGUnLCAnUHJvcGVydHknLCAnUHJvdGVjdGVkJywgJ1B1YmxpYycsICdSYWlzZUV2ZW50JywgJ1JlYWRPbmx5JywgJ1JlRGltJywgJ1JlbW92ZUhhbmRsZXInLCAnUmVzdW1lJyxcclxuICAgICAgICAnUmV0dXJuJywgJ1NCeXRlJywgJ1NlbGVjdCcsICdTZXQnLCAnU2hhZG93cycsICdTaGFyZWQnLCAnU2hvcnQnLCAnU2luZ2xlJywgJ1N0YXRpYycsICdTdGVwJywgJ1N0b3AnLFxyXG4gICAgICAgICdTdHJpbmcnLCAnU3RydWN0dXJlJywgJ1N1YicsICdTeW5jTG9jaycsICdUaGVuJywgJ1Rocm93JywgJ1RvJywgJ1RydWUnLCAnVHJ5JywgJ1RyeUNhc3QnLCAnVHlwZU9mJyxcclxuICAgICAgICAnVUludGVnZXInLCAnVUxvbmcnLCAnVVNob3J0JywgJ1VzaW5nJywgJ1ZhcmlhbnQnLCAnV2VuZCcsICdXaGVuJywgJ1doaWxlJywgJ1dpZGVuaW5nJywgJ1dpdGgnLCAnV2l0aEV2ZW50cycsXHJcbiAgICAgICAgJ1dyaXRlT25seScsICdYb3InXHJcbiAgICBdLFxyXG4gICAgdGFnd29yZHM6IFtcclxuICAgICAgICAnSWYnLCAnU3ViJywgJ1NlbGVjdCcsICdUcnknLCAnQ2xhc3MnLCAnRW51bScsXHJcbiAgICAgICAgJ0Z1bmN0aW9uJywgJ0dldCcsICdJbnRlcmZhY2UnLCAnTW9kdWxlJywgJ05hbWVzcGFjZScsICdPcGVyYXRvcicsICdTZXQnLCAnU3RydWN0dXJlJywgJ1VzaW5nJywgJ1doaWxlJywgJ1dpdGgnLFxyXG4gICAgICAgICdEbycsICdMb29wJywgJ0ZvcicsICdOZXh0JywgJ1Byb3BlcnR5JywgJ0NvbnRpbnVlJywgJ0FkZEhhbmRsZXInLCAnUmVtb3ZlSGFuZGxlcicsICdFdmVudCcsICdSYWlzZUV2ZW50JywgJ1N5bmNMb2NrJ1xyXG4gICAgXSxcclxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHN5bWJvbHM6IC9bPT48IX4/O1xcLiw6JnwrXFwtKlxcL1xcXiVdKy8sXHJcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxyXG4gICAgaW50ZWdlcnN1ZmZpeDogL1U/W0RJJUwmU0BdPy8sXHJcbiAgICBmbG9hdHN1ZmZpeDogL1tSI0YhXT8vLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgZW5kaW5nIHRhZy13b3Jkc1xyXG4gICAgICAgICAgICBbL25leHQoPyFcXHcpLywgeyB0b2tlbjogJ2tleXdvcmQudGFnLWZvcicgfV0sXHJcbiAgICAgICAgICAgIFsvbG9vcCg/IVxcdykvLCB7IHRva2VuOiAna2V5d29yZC50YWctZG8nIH1dLFxyXG4gICAgICAgICAgICAvLyB1c3VhbCBlbmRpbmcgdGFnc1xyXG4gICAgICAgICAgICBbL2VuZFxccysoPyFmb3J8ZG8pKGFkZGhhbmRsZXJ8Y2xhc3N8ZW51bXxldmVudHxmdW5jdGlvbnxnZXR8aWZ8aW50ZXJmYWNlfG1vZHVsZXxuYW1lc3BhY2V8b3BlcmF0b3J8cHJvcGVydHl8cmFpc2VldmVudHxyZW1vdmVoYW5kbGVyfHNlbGVjdHxzZXR8c3RydWN0dXJlfHN1YnxzeW5jbG9ja3x0cnl8d2hpbGV8d2l0aHx1c2luZykvLCB7IHRva2VuOiAna2V5d29yZC50YWctJDEnIH1dLFxyXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycywgdGFnd29yZHMsIGFuZCBrZXl3b3Jkc1xyXG4gICAgICAgICAgICBbL1thLXpBLVpfXVxcdyovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0B0YWd3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLnRhZy0kMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgLy8gUHJlcHJvY2Vzc29yIGRpcmVjdGl2ZVxyXG4gICAgICAgICAgICBbL15cXHMqI1xcdysvLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICAvLyBudW1iZXJzXHJcbiAgICAgICAgICAgIFsvXFxkKlxcZCtlKFtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcclxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhlW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgJ251bWJlci5mbG9hdCddLFxyXG4gICAgICAgICAgICBbLyZIWzAtOWEtZl0rKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuaGV4J10sXHJcbiAgICAgICAgICAgIFsvJjBbMC03XSsoQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5vY3RhbCddLFxyXG4gICAgICAgICAgICBbL1xcZCsoQGludGVnZXJzdWZmaXgpLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICAvLyBkYXRlIGxpdGVyYWxcclxuICAgICAgICAgICAgWy8jLiojLywgJ251bWJlciddLFxyXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcclxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcclxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZyddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2hpdGVzcGFjZTogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXHJcbiAgICAgICAgICAgIFsvKFxcJ3xSRU0oPyFcXHcpKS4qJC8sICdjb21tZW50J10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmc6IFtcclxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxyXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcclxuICAgICAgICAgICAgWy9cIkM/LywgJ3N0cmluZycsICdAcG9wJ11cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==