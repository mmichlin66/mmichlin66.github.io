(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js ***!
  \********************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Artyom Shalkhakov. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *
 *  Based on the ATS/Postiats lexer by Hongwei Xi.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['(*', '*)'],
    },
    brackets: [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']],
    autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
    ]
};
var language = {
    tokenPostfix: '.pats',
    // TODO: staload and dynload are followed by a special kind of string literals
    // with {$IDENTIFER} variables, and it also may make sense to highlight
    // the punctuation (. and / and \) differently.
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    // keyword reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing_token.dats
    keywords: [
        //
        "abstype",
        "abst0ype",
        "absprop",
        "absview",
        "absvtype",
        "absviewtype",
        "absvt0ype",
        "absviewt0ype",
        //
        "as",
        //
        "and",
        //
        "assume",
        //
        "begin",
        //
        /*
                "case", // CASE
        */
        //
        "classdec",
        //
        "datasort",
        //
        "datatype",
        "dataprop",
        "dataview",
        "datavtype",
        "dataviewtype",
        //
        "do",
        //
        "end",
        //
        "extern",
        "extype",
        "extvar",
        //
        "exception",
        //
        "fn",
        "fnx",
        "fun",
        //
        "prfn",
        "prfun",
        //
        "praxi",
        "castfn",
        //
        "if",
        "then",
        "else",
        //
        "ifcase",
        //
        "in",
        //
        "infix",
        "infixl",
        "infixr",
        "prefix",
        "postfix",
        //
        "implmnt",
        "implement",
        //
        "primplmnt",
        "primplement",
        //
        "import",
        //
        /*
                "lam", // LAM
                "llam", // LLAM
                "fix", // FIX
        */
        //
        "let",
        //
        "local",
        //
        "macdef",
        "macrodef",
        //
        "nonfix",
        //
        "symelim",
        "symintr",
        "overload",
        //
        "of",
        "op",
        //
        "rec",
        //
        "sif",
        "scase",
        //
        "sortdef",
        /*
        // HX: [sta] is now deprecated
        */
        "sta",
        "stacst",
        "stadef",
        "static",
        /*
                "stavar", // T_STAVAR
        */
        //
        "staload",
        "dynload",
        //
        "try",
        //
        "tkindef",
        //
        /*
                "type", // TYPE
        */
        "typedef",
        "propdef",
        "viewdef",
        "vtypedef",
        "viewtypedef",
        //
        /*
                "val", // VAL
        */
        "prval",
        //
        "var",
        "prvar",
        //
        "when",
        "where",
        //
        /*
                "for", // T_FOR
                "while", // T_WHILE
        */
        //
        "with",
        //
        "withtype",
        "withprop",
        "withview",
        "withvtype",
        "withviewtype",
    ],
    keywords_dlr: [
        "$delay",
        "$ldelay",
        //
        "$arrpsz",
        "$arrptrsize",
        //
        "$d2ctype",
        //
        "$effmask",
        "$effmask_ntm",
        "$effmask_exn",
        "$effmask_ref",
        "$effmask_wrt",
        "$effmask_all",
        //
        "$extern",
        "$extkind",
        "$extype",
        "$extype_struct",
        //
        "$extval",
        "$extfcall",
        "$extmcall",
        //
        "$literal",
        //
        "$myfilename",
        "$mylocation",
        "$myfunction",
        //
        "$lst",
        "$lst_t",
        "$lst_vt",
        "$list",
        "$list_t",
        "$list_vt",
        //
        "$rec",
        "$rec_t",
        "$rec_vt",
        "$record",
        "$record_t",
        "$record_vt",
        //
        "$tup",
        "$tup_t",
        "$tup_vt",
        "$tuple",
        "$tuple_t",
        "$tuple_vt",
        //
        "$break",
        "$continue",
        //
        "$raise",
        //
        "$showtype",
        //
        "$vcopyenv_v",
        "$vcopyenv_vt",
        //
        "$tempenver",
        //
        "$solver_assert",
        "$solver_verify",
    ],
    keywords_srp: [
        //
        "#if",
        "#ifdef",
        "#ifndef",
        //
        "#then",
        //
        "#elif",
        "#elifdef",
        "#elifndef",
        //
        "#else",
        "#endif",
        //
        "#error",
        //
        "#prerr",
        "#print",
        //
        "#assert",
        //
        "#undef",
        "#define",
        //
        "#include",
        "#require",
        //
        "#pragma",
        "#codegen2",
        "#codegen3",
    ],
    irregular_keyword_list: [
        "val+",
        "val-",
        "val",
        "case+",
        "case-",
        "case",
        "addr@",
        "addr",
        "fold@",
        "free@",
        "fix@",
        "fix",
        "lam@",
        "lam",
        "llam@",
        "llam",
        "viewt@ype+",
        "viewt@ype-",
        "viewt@ype",
        "viewtype+",
        "viewtype-",
        "viewtype",
        "view+",
        "view-",
        "view@",
        "view",
        "type+",
        "type-",
        "type",
        "vtype+",
        "vtype-",
        "vtype",
        "vt@ype+",
        "vt@ype-",
        "vt@ype",
        "viewt@ype+",
        "viewt@ype-",
        "viewt@ype",
        "viewtype+",
        "viewtype-",
        "viewtype",
        "prop+",
        "prop-",
        "prop",
        "type+",
        "type-",
        "type",
        "t@ype",
        "t@ype+",
        "t@ype-",
        "abst@ype",
        "abstype",
        "absviewt@ype",
        "absvt@ype",
        "for*",
        "for",
        "while*",
        "while"
    ],
    keywords_types: [
        'bool',
        'double',
        'byte',
        'int',
        'short',
        'char',
        'void',
        'unit',
        'long',
        'float',
        'string',
        'strptr'
    ],
    // TODO: reference for this?
    keywords_effects: [
        "0",
        "fun",
        "clo",
        "prf",
        "funclo",
        "cloptr",
        "cloref",
        "ref",
        "ntm",
        "1" // all effects
    ],
    operators: [
        "@",
        "!",
        "|",
        "`",
        ":",
        "$",
        ".",
        "=",
        "#",
        "~",
        //
        "..",
        "...",
        //
        "=>",
        // "=<", // T_EQLT
        "=<>",
        "=/=>",
        "=>>",
        "=/=>>",
        //
        "<",
        ">",
        //
        "><",
        //
        ".<",
        ">.",
        //
        ".<>.",
        //
        "->",
        //"-<", // T_MINUSLT
        "-<>",
    ],
    brackets: [
        { open: ',(', close: ')', token: 'delimiter.parenthesis' },
        { open: '`(', close: ')', token: 'delimiter.parenthesis' },
        { open: '%(', close: ')', token: 'delimiter.parenthesis' },
        { open: '\'(', close: ')', token: 'delimiter.parenthesis' },
        { open: '\'{', close: '}', token: 'delimiter.parenthesis' },
        { open: '@(', close: ')', token: 'delimiter.parenthesis' },
        { open: '@{', close: '}', token: 'delimiter.brace' },
        { open: '@[', close: ']', token: 'delimiter.square' },
        { open: '#[', close: ']', token: 'delimiter.square' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    IDENTFST: /[a-zA-Z_]/,
    IDENTRST: /[a-zA-Z0-9_'$]/,
    symbolic: /[%&+-./:=@~`^|*!$#?<>]/,
    digit: /[0-9]/,
    digitseq0: /@digit*/,
    xdigit: /[0-9A-Za-z]/,
    xdigitseq0: /@xdigit*/,
    INTSP: /[lLuU]/,
    FLOATSP: /[fFlL]/,
    fexponent: /[eE][+-]?[0-9]+/,
    fexponent_bin: /[pP][+-]?[0-9]+/,
    deciexp: /\.[0-9]*@fexponent?/,
    hexiexp: /\.[0-9a-zA-Z]*@fexponent_bin?/,
    irregular_keywords: /val[+-]?|case[+-]?|addr\@?|fold\@|free\@|fix\@?|lam\@?|llam\@?|prop[+-]?|type[+-]?|view[+-@]?|viewt@?ype[+-]?|t@?ype[+-]?|v(iew)?t@?ype[+-]?|abst@?ype|absv(iew)?t@?ype|for\*?|while\*?/,
    ESCHAR: /[ntvbrfa\\\?'"\(\[\{]/,
    start: 'root',
    // The main tokenizer for ATS/Postiats
    // reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing.dats
    tokenizer: {
        root: [
            // lexing_blankseq0
            { regex: /[ \t\r\n]+/, action: { token: '' } },
            // NOTE: (*) is an invalid ML-like comment!
            { regex: /\(\*\)/, action: { token: 'invalid' } },
            { regex: /\(\*/, action: { token: 'comment', next: 'lexing_COMMENT_block_ml' } },
            { regex: /\(/, action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/ },
            { regex: /\)/, action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/ },
            { regex: /\[/, action: '@brackets' /*{ token: 'delimiter.bracket' }*/ },
            { regex: /\]/, action: '@brackets' /*{ token: 'delimiter.bracket' }*/ },
            { regex: /\{/, action: '@brackets' /*{ token: 'delimiter.brace' }*/ },
            { regex: /\}/, action: '@brackets' /*{ token: 'delimiter.brace' }*/ },
            // lexing_COMMA
            { regex: /,\(/, action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/ },
            { regex: /,/, action: { token: 'delimiter.comma' } },
            { regex: /;/, action: { token: 'delimiter.semicolon' } },
            // lexing_AT
            { regex: /@\(/, action: '@brackets' /* { token: 'delimiter.parenthesis' }*/ },
            { regex: /@\[/, action: '@brackets' /* { token: 'delimiter.bracket' }*/ },
            { regex: /@\{/, action: '@brackets' /*{ token: 'delimiter.brace' }*/ },
            // lexing_COLON
            { regex: /:</, action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' } },
            /*
            lexing_DOT:

            . // SYMBOLIC => lexing_IDENT_sym
            . FLOATDOT => lexing_FLOAT_deciexp
            . DIGIT => T_DOTINT
            */
            { regex: /\.@symbolic+/, action: { token: 'identifier.sym' } },
            // FLOATDOT case
            { regex: /\.@digit*@fexponent@FLOATSP*/, action: { token: 'number.float' } },
            { regex: /\.@digit+/, action: { token: 'number.float' } },
            // lexing_DOLLAR:
            // '$' IDENTFST IDENTRST* => lexing_IDENT_dlr, _ => lexing_IDENT_sym
            {
                regex: /\$@IDENTFST@IDENTRST*/,
                action: {
                    cases: {
                        '@keywords_dlr': { token: 'keyword.dlr' },
                        '@default': { token: 'namespace' },
                    }
                }
            },
            // lexing_SHARP:
            // '#' IDENTFST IDENTRST* => lexing_ident_srp, _ => lexing_IDENT_sym
            {
                regex: /\#@IDENTFST@IDENTRST*/,
                action: {
                    cases: {
                        '@keywords_srp': { token: 'keyword.srp' },
                        '@default': { token: 'identifier' },
                    }
                }
            },
            // lexing_PERCENT:
            { regex: /%\(/, action: { token: 'delimiter.parenthesis' } },
            { regex: /^%{(#|\^|\$)?/, action: { token: 'keyword', next: '@lexing_EXTCODE', nextEmbedded: 'text/javascript' } },
            { regex: /^%}/, action: { token: 'keyword' } },
            // lexing_QUOTE
            { regex: /'\(/, action: { token: 'delimiter.parenthesis' } },
            { regex: /'\[/, action: { token: 'delimiter.bracket' } },
            { regex: /'\{/, action: { token: 'delimiter.brace' } },
            [/(')(\\@ESCHAR|\\[xX]@xdigit+|\\@digit+)(')/, ['string', 'string.escape', 'string']],
            [/'[^\\']'/, 'string'],
            // lexing_DQUOTE
            [/"/, 'string.quote', '@lexing_DQUOTE'],
            // lexing_BQUOTE
            { regex: /`\(/, action: '@brackets' /* { token: 'delimiter.parenthesis' }*/ },
            // TODO: otherwise, try lexing_IDENT_sym
            { regex: /\\/, action: { token: 'punctuation' } },
            // lexing_IDENT_alp:
            // NOTE: (?!regex) is syntax for "not-followed-by" regex
            // to resolve ambiguity such as foreach$fwork being incorrectly lexed as [for] [each$fwork]!
            { regex: /@irregular_keywords(?!@IDENTRST)/, action: { token: 'keyword' } },
            {
                regex: /@IDENTFST@IDENTRST*[<!\[]?/,
                action: {
                    cases: {
                        // TODO: dynload and staload should be specially parsed
                        // dynload whitespace+ "special_string"
                        // this special string is really:
                        //  '/' '\\' '.' => punctuation
                        // ({\$)([a-zA-Z_][a-zA-Z_0-9]*)(}) => punctuation,keyword,punctuation
                        // [^"] => identifier/literal
                        '@keywords': { token: 'keyword' },
                        '@keywords_types': { token: 'type' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            // lexing_IDENT_sym:
            { regex: /\/\/\/\//, action: { token: 'comment', next: '@lexing_COMMENT_rest' } },
            { regex: /\/\/.*$/, action: { token: 'comment' } },
            { regex: /\/\*/, action: { token: 'comment', next: '@lexing_COMMENT_block_c' } },
            // AS-20160627: specifically for effect annotations
            { regex: /-<|=</, action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' } },
            {
                regex: /@symbolic+/,
                action: {
                    cases: {
                        '@operators': 'keyword',
                        '@default': 'operator'
                    }
                }
            },
            // lexing_ZERO:
            // FIXME: this one is quite messy/unfinished yet
            // TODO: lexing_INT_hex
            // - testing_hexiexp => lexing_FLOAT_hexiexp
            // - testing_fexponent_bin => lexing_FLOAT_hexiexp
            // - testing_intspseq0 => T_INT_hex
            // lexing_INT_hex:
            { regex: /0[xX]@xdigit+(@hexiexp|@fexponent_bin)@FLOATSP*/, action: { token: 'number.float' } },
            { regex: /0[xX]@xdigit+@INTSP*/, action: { token: 'number.hex' } },
            { regex: /0[0-7]+(?![0-9])@INTSP*/, action: { token: 'number.octal' } },
            //{regex: /0/, action: { token: 'number' } }, // INTZERO
            // lexing_INT_dec:
            // - testing_deciexp => lexing_FLOAT_deciexp
            // - testing_fexponent => lexing_FLOAT_deciexp
            // - otherwise => intspseq0 ([0-9]*[lLuU]?)
            { regex: /@digit+(@fexponent|@deciexp)@FLOATSP*/, action: { token: 'number.float' } },
            { regex: /@digit@digitseq0@INTSP*/, action: { token: 'number.decimal' } },
            // DIGIT, if followed by digitseq0, is lexing_INT_dec
            { regex: /@digit+@INTSP*/, action: { token: 'number' } },
        ],
        lexing_COMMENT_block_ml: [
            [/[^\(\*]+/, 'comment'],
            [/\(\*/, 'comment', '@push'],
            [/\(\*/, 'comment.invalid'],
            [/\*\)/, 'comment', '@pop'],
            [/\*/, 'comment']
        ],
        lexing_COMMENT_block_c: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/, 'comment', '@push' ],    // nested C-style block comments not allowed
            // [/\/\*/,    'comment.invalid' ],	// NOTE: this breaks block comments in the shape of /* //*/
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        lexing_COMMENT_rest: [
            [/$/, 'comment', '@pop'],
            [/.*/, 'comment']
        ],
        // NOTE: added by AS, specifically for highlighting
        lexing_EFFECT_commaseq0: [
            {
                regex: /@IDENTFST@IDENTRST+|@digit+/,
                action: {
                    cases: {
                        '@keywords_effects': { token: 'type.effect' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            { regex: /,/, action: { token: 'punctuation' } },
            { regex: />/, action: { token: '@rematch', next: '@pop' } },
        ],
        lexing_EXTCODE: [
            { regex: /^%}/, action: { token: '@rematch', next: '@pop', nextEmbedded: '@pop' } },
            { regex: /[^%]+/, action: '' },
        ],
        lexing_DQUOTE: [
            { regex: /"/, action: { token: 'string.quote', next: '@pop' } },
            // AS-20160628: additional hi-lighting for variables in staload/dynload strings
            { regex: /(\{\$)(@IDENTFST@IDENTRST*)(\})/, action: [{ token: 'string.escape' }, { token: 'identifier' }, { token: 'string.escape' }] },
            { regex: /\\$/, action: { token: 'string.escape' } },
            { regex: /\\(@ESCHAR|[xX]@xdigit+|@digit+)/, action: { token: 'string.escape' } },
            { regex: /[^\\"]+/, action: { token: 'string' } }
        ],
    },
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Bvc3RpYXRzL3Bvc3RpYXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9EO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUJBQXVCO0FBQ3JFLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWEsc0JBQXNCLHVCQUF1QixFQUFFO0FBQzVELGFBQWEsc0JBQXNCLGtDQUFrQyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQSxhQUFhLFlBQVksWUFBWSx3REFBd0QsRUFBRTtBQUMvRixhQUFhLDZCQUE2QjtBQUMxQztBQUNBO0FBQ0EsYUFBYSxzQkFBc0Isc0NBQXNDLEVBQUU7QUFDM0U7QUFDQSxhQUFhLFlBQVksMkJBQTJCLGNBQWMseUJBQXlCLEdBQUcsc0JBQXNCLEdBQUcseUJBQXlCLEdBQUc7QUFDbkosYUFBYSx3QkFBd0IseUJBQXlCLEVBQUU7QUFDaEUsYUFBYSxxREFBcUQseUJBQXlCLEVBQUU7QUFDN0YsYUFBYSw0QkFBNEIsa0JBQWtCO0FBQzNEO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6IjM1LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIEFydHlvbSBTaGFsa2hha292LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICpcclxuICogIEJhc2VkIG9uIHRoZSBBVFMvUG9zdGlhdHMgbGV4ZXIgYnkgSG9uZ3dlaSBYaS5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IHZhciBjb25mID0ge1xyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcclxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnKConLCAnKiknXSxcclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1sneycsICd9J10sIFsnWycsICddJ10sIFsnKCcsICcpJ10sIFsnPCcsICc+J11dLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgIF1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIHRva2VuUG9zdGZpeDogJy5wYXRzJyxcclxuICAgIC8vIFRPRE86IHN0YWxvYWQgYW5kIGR5bmxvYWQgYXJlIGZvbGxvd2VkIGJ5IGEgc3BlY2lhbCBraW5kIG9mIHN0cmluZyBsaXRlcmFsc1xyXG4gICAgLy8gd2l0aCB7JElERU5USUZFUn0gdmFyaWFibGVzLCBhbmQgaXQgYWxzbyBtYXkgbWFrZSBzZW5zZSB0byBoaWdobGlnaHRcclxuICAgIC8vIHRoZSBwdW5jdHVhdGlvbiAoLiBhbmQgLyBhbmQgXFwpIGRpZmZlcmVudGx5LlxyXG4gICAgLy8gU2V0IGRlZmF1bHRUb2tlbiB0byBpbnZhbGlkIHRvIHNlZSB3aGF0IHlvdSBkbyBub3QgdG9rZW5pemUgeWV0XHJcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcclxuICAgIC8vIGtleXdvcmQgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHd4aS9BVFMtUG9zdGlhdHMvYmxvYi9tYXN0ZXIvc3JjL3BhdHNfbGV4aW5nX3Rva2VuLmRhdHNcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImFic3R5cGVcIixcclxuICAgICAgICBcImFic3QweXBlXCIsXHJcbiAgICAgICAgXCJhYnNwcm9wXCIsXHJcbiAgICAgICAgXCJhYnN2aWV3XCIsXHJcbiAgICAgICAgXCJhYnN2dHlwZVwiLFxyXG4gICAgICAgIFwiYWJzdmlld3R5cGVcIixcclxuICAgICAgICBcImFic3Z0MHlwZVwiLFxyXG4gICAgICAgIFwiYWJzdmlld3QweXBlXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImFzXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImFuZFwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCJhc3N1bWVcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiYmVnaW5cIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBcImNhc2VcIiwgLy8gQ0FTRVxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImNsYXNzZGVjXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImRhdGFzb3J0XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImRhdGF0eXBlXCIsXHJcbiAgICAgICAgXCJkYXRhcHJvcFwiLFxyXG4gICAgICAgIFwiZGF0YXZpZXdcIixcclxuICAgICAgICBcImRhdGF2dHlwZVwiLFxyXG4gICAgICAgIFwiZGF0YXZpZXd0eXBlXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImRvXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImVuZFwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCJleHRlcm5cIixcclxuICAgICAgICBcImV4dHlwZVwiLFxyXG4gICAgICAgIFwiZXh0dmFyXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImV4Y2VwdGlvblwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCJmblwiLFxyXG4gICAgICAgIFwiZm54XCIsXHJcbiAgICAgICAgXCJmdW5cIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwicHJmblwiLFxyXG4gICAgICAgIFwicHJmdW5cIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwicHJheGlcIixcclxuICAgICAgICBcImNhc3RmblwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCJpZlwiLFxyXG4gICAgICAgIFwidGhlblwiLFxyXG4gICAgICAgIFwiZWxzZVwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCJpZmNhc2VcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiaW5cIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiaW5maXhcIixcclxuICAgICAgICBcImluZml4bFwiLFxyXG4gICAgICAgIFwiaW5maXhyXCIsXHJcbiAgICAgICAgXCJwcmVmaXhcIixcclxuICAgICAgICBcInBvc3RmaXhcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiaW1wbG1udFwiLFxyXG4gICAgICAgIFwiaW1wbGVtZW50XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcInByaW1wbG1udFwiLFxyXG4gICAgICAgIFwicHJpbXBsZW1lbnRcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiaW1wb3J0XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgXCJsYW1cIiwgLy8gTEFNXHJcbiAgICAgICAgICAgICAgICBcImxsYW1cIiwgLy8gTExBTVxyXG4gICAgICAgICAgICAgICAgXCJmaXhcIiwgLy8gRklYXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvL1xyXG4gICAgICAgIFwibGV0XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcImxvY2FsXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIm1hY2RlZlwiLFxyXG4gICAgICAgIFwibWFjcm9kZWZcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwibm9uZml4XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcInN5bWVsaW1cIixcclxuICAgICAgICBcInN5bWludHJcIixcclxuICAgICAgICBcIm92ZXJsb2FkXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIm9mXCIsXHJcbiAgICAgICAgXCJvcFwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCJyZWNcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwic2lmXCIsXHJcbiAgICAgICAgXCJzY2FzZVwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCJzb3J0ZGVmXCIsXHJcbiAgICAgICAgLypcclxuICAgICAgICAvLyBIWDogW3N0YV0gaXMgbm93IGRlcHJlY2F0ZWRcclxuICAgICAgICAqL1xyXG4gICAgICAgIFwic3RhXCIsXHJcbiAgICAgICAgXCJzdGFjc3RcIixcclxuICAgICAgICBcInN0YWRlZlwiLFxyXG4gICAgICAgIFwic3RhdGljXCIsXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIFwic3RhdmFyXCIsIC8vIFRfU1RBVkFSXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvL1xyXG4gICAgICAgIFwic3RhbG9hZFwiLFxyXG4gICAgICAgIFwiZHlubG9hZFwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCJ0cnlcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwidGtpbmRlZlwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiLCAvLyBUWVBFXHJcbiAgICAgICAgKi9cclxuICAgICAgICBcInR5cGVkZWZcIixcclxuICAgICAgICBcInByb3BkZWZcIixcclxuICAgICAgICBcInZpZXdkZWZcIixcclxuICAgICAgICBcInZ0eXBlZGVmXCIsXHJcbiAgICAgICAgXCJ2aWV3dHlwZWRlZlwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIFwidmFsXCIsIC8vIFZBTFxyXG4gICAgICAgICovXHJcbiAgICAgICAgXCJwcnZhbFwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCJ2YXJcIixcclxuICAgICAgICBcInBydmFyXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIndoZW5cIixcclxuICAgICAgICBcIndoZXJlXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgXCJmb3JcIiwgLy8gVF9GT1JcclxuICAgICAgICAgICAgICAgIFwid2hpbGVcIiwgLy8gVF9XSElMRVxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIndpdGhcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwid2l0aHR5cGVcIixcclxuICAgICAgICBcIndpdGhwcm9wXCIsXHJcbiAgICAgICAgXCJ3aXRodmlld1wiLFxyXG4gICAgICAgIFwid2l0aHZ0eXBlXCIsXHJcbiAgICAgICAgXCJ3aXRodmlld3R5cGVcIixcclxuICAgIF0sXHJcbiAgICBrZXl3b3Jkc19kbHI6IFtcclxuICAgICAgICBcIiRkZWxheVwiLFxyXG4gICAgICAgIFwiJGxkZWxheVwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCIkYXJycHN6XCIsXHJcbiAgICAgICAgXCIkYXJycHRyc2l6ZVwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCIkZDJjdHlwZVwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCIkZWZmbWFza1wiLFxyXG4gICAgICAgIFwiJGVmZm1hc2tfbnRtXCIsXHJcbiAgICAgICAgXCIkZWZmbWFza19leG5cIixcclxuICAgICAgICBcIiRlZmZtYXNrX3JlZlwiLFxyXG4gICAgICAgIFwiJGVmZm1hc2tfd3J0XCIsXHJcbiAgICAgICAgXCIkZWZmbWFza19hbGxcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiJGV4dGVyblwiLFxyXG4gICAgICAgIFwiJGV4dGtpbmRcIixcclxuICAgICAgICBcIiRleHR5cGVcIixcclxuICAgICAgICBcIiRleHR5cGVfc3RydWN0XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiRleHR2YWxcIixcclxuICAgICAgICBcIiRleHRmY2FsbFwiLFxyXG4gICAgICAgIFwiJGV4dG1jYWxsXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiRsaXRlcmFsXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiRteWZpbGVuYW1lXCIsXHJcbiAgICAgICAgXCIkbXlsb2NhdGlvblwiLFxyXG4gICAgICAgIFwiJG15ZnVuY3Rpb25cIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiJGxzdFwiLFxyXG4gICAgICAgIFwiJGxzdF90XCIsXHJcbiAgICAgICAgXCIkbHN0X3Z0XCIsXHJcbiAgICAgICAgXCIkbGlzdFwiLFxyXG4gICAgICAgIFwiJGxpc3RfdFwiLFxyXG4gICAgICAgIFwiJGxpc3RfdnRcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiJHJlY1wiLFxyXG4gICAgICAgIFwiJHJlY190XCIsXHJcbiAgICAgICAgXCIkcmVjX3Z0XCIsXHJcbiAgICAgICAgXCIkcmVjb3JkXCIsXHJcbiAgICAgICAgXCIkcmVjb3JkX3RcIixcclxuICAgICAgICBcIiRyZWNvcmRfdnRcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiJHR1cFwiLFxyXG4gICAgICAgIFwiJHR1cF90XCIsXHJcbiAgICAgICAgXCIkdHVwX3Z0XCIsXHJcbiAgICAgICAgXCIkdHVwbGVcIixcclxuICAgICAgICBcIiR0dXBsZV90XCIsXHJcbiAgICAgICAgXCIkdHVwbGVfdnRcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiJGJyZWFrXCIsXHJcbiAgICAgICAgXCIkY29udGludWVcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiJHJhaXNlXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiRzaG93dHlwZVwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCIkdmNvcHllbnZfdlwiLFxyXG4gICAgICAgIFwiJHZjb3B5ZW52X3Z0XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiR0ZW1wZW52ZXJcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiJHNvbHZlcl9hc3NlcnRcIixcclxuICAgICAgICBcIiRzb2x2ZXJfdmVyaWZ5XCIsXHJcbiAgICBdLFxyXG4gICAga2V5d29yZHNfc3JwOiBbXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiNpZlwiLFxyXG4gICAgICAgIFwiI2lmZGVmXCIsXHJcbiAgICAgICAgXCIjaWZuZGVmXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiN0aGVuXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiNlbGlmXCIsXHJcbiAgICAgICAgXCIjZWxpZmRlZlwiLFxyXG4gICAgICAgIFwiI2VsaWZuZGVmXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiNlbHNlXCIsXHJcbiAgICAgICAgXCIjZW5kaWZcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiI2Vycm9yXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiNwcmVyclwiLFxyXG4gICAgICAgIFwiI3ByaW50XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiNhc3NlcnRcIixcclxuICAgICAgICAvL1xyXG4gICAgICAgIFwiI3VuZGVmXCIsXHJcbiAgICAgICAgXCIjZGVmaW5lXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIiNpbmNsdWRlXCIsXHJcbiAgICAgICAgXCIjcmVxdWlyZVwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCIjcHJhZ21hXCIsXHJcbiAgICAgICAgXCIjY29kZWdlbjJcIixcclxuICAgICAgICBcIiNjb2RlZ2VuM1wiLFxyXG4gICAgXSxcclxuICAgIGlycmVndWxhcl9rZXl3b3JkX2xpc3Q6IFtcclxuICAgICAgICBcInZhbCtcIixcclxuICAgICAgICBcInZhbC1cIixcclxuICAgICAgICBcInZhbFwiLFxyXG4gICAgICAgIFwiY2FzZStcIixcclxuICAgICAgICBcImNhc2UtXCIsXHJcbiAgICAgICAgXCJjYXNlXCIsXHJcbiAgICAgICAgXCJhZGRyQFwiLFxyXG4gICAgICAgIFwiYWRkclwiLFxyXG4gICAgICAgIFwiZm9sZEBcIixcclxuICAgICAgICBcImZyZWVAXCIsXHJcbiAgICAgICAgXCJmaXhAXCIsXHJcbiAgICAgICAgXCJmaXhcIixcclxuICAgICAgICBcImxhbUBcIixcclxuICAgICAgICBcImxhbVwiLFxyXG4gICAgICAgIFwibGxhbUBcIixcclxuICAgICAgICBcImxsYW1cIixcclxuICAgICAgICBcInZpZXd0QHlwZStcIixcclxuICAgICAgICBcInZpZXd0QHlwZS1cIixcclxuICAgICAgICBcInZpZXd0QHlwZVwiLFxyXG4gICAgICAgIFwidmlld3R5cGUrXCIsXHJcbiAgICAgICAgXCJ2aWV3dHlwZS1cIixcclxuICAgICAgICBcInZpZXd0eXBlXCIsXHJcbiAgICAgICAgXCJ2aWV3K1wiLFxyXG4gICAgICAgIFwidmlldy1cIixcclxuICAgICAgICBcInZpZXdAXCIsXHJcbiAgICAgICAgXCJ2aWV3XCIsXHJcbiAgICAgICAgXCJ0eXBlK1wiLFxyXG4gICAgICAgIFwidHlwZS1cIixcclxuICAgICAgICBcInR5cGVcIixcclxuICAgICAgICBcInZ0eXBlK1wiLFxyXG4gICAgICAgIFwidnR5cGUtXCIsXHJcbiAgICAgICAgXCJ2dHlwZVwiLFxyXG4gICAgICAgIFwidnRAeXBlK1wiLFxyXG4gICAgICAgIFwidnRAeXBlLVwiLFxyXG4gICAgICAgIFwidnRAeXBlXCIsXHJcbiAgICAgICAgXCJ2aWV3dEB5cGUrXCIsXHJcbiAgICAgICAgXCJ2aWV3dEB5cGUtXCIsXHJcbiAgICAgICAgXCJ2aWV3dEB5cGVcIixcclxuICAgICAgICBcInZpZXd0eXBlK1wiLFxyXG4gICAgICAgIFwidmlld3R5cGUtXCIsXHJcbiAgICAgICAgXCJ2aWV3dHlwZVwiLFxyXG4gICAgICAgIFwicHJvcCtcIixcclxuICAgICAgICBcInByb3AtXCIsXHJcbiAgICAgICAgXCJwcm9wXCIsXHJcbiAgICAgICAgXCJ0eXBlK1wiLFxyXG4gICAgICAgIFwidHlwZS1cIixcclxuICAgICAgICBcInR5cGVcIixcclxuICAgICAgICBcInRAeXBlXCIsXHJcbiAgICAgICAgXCJ0QHlwZStcIixcclxuICAgICAgICBcInRAeXBlLVwiLFxyXG4gICAgICAgIFwiYWJzdEB5cGVcIixcclxuICAgICAgICBcImFic3R5cGVcIixcclxuICAgICAgICBcImFic3ZpZXd0QHlwZVwiLFxyXG4gICAgICAgIFwiYWJzdnRAeXBlXCIsXHJcbiAgICAgICAgXCJmb3IqXCIsXHJcbiAgICAgICAgXCJmb3JcIixcclxuICAgICAgICBcIndoaWxlKlwiLFxyXG4gICAgICAgIFwid2hpbGVcIlxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzX3R5cGVzOiBbXHJcbiAgICAgICAgJ2Jvb2wnLFxyXG4gICAgICAgICdkb3VibGUnLFxyXG4gICAgICAgICdieXRlJyxcclxuICAgICAgICAnaW50JyxcclxuICAgICAgICAnc2hvcnQnLFxyXG4gICAgICAgICdjaGFyJyxcclxuICAgICAgICAndm9pZCcsXHJcbiAgICAgICAgJ3VuaXQnLFxyXG4gICAgICAgICdsb25nJyxcclxuICAgICAgICAnZmxvYXQnLFxyXG4gICAgICAgICdzdHJpbmcnLFxyXG4gICAgICAgICdzdHJwdHInXHJcbiAgICBdLFxyXG4gICAgLy8gVE9ETzogcmVmZXJlbmNlIGZvciB0aGlzP1xyXG4gICAga2V5d29yZHNfZWZmZWN0czogW1xyXG4gICAgICAgIFwiMFwiLFxyXG4gICAgICAgIFwiZnVuXCIsXHJcbiAgICAgICAgXCJjbG9cIixcclxuICAgICAgICBcInByZlwiLFxyXG4gICAgICAgIFwiZnVuY2xvXCIsXHJcbiAgICAgICAgXCJjbG9wdHJcIixcclxuICAgICAgICBcImNsb3JlZlwiLFxyXG4gICAgICAgIFwicmVmXCIsXHJcbiAgICAgICAgXCJudG1cIixcclxuICAgICAgICBcIjFcIiAvLyBhbGwgZWZmZWN0c1xyXG4gICAgXSxcclxuICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgIFwiQFwiLFxyXG4gICAgICAgIFwiIVwiLFxyXG4gICAgICAgIFwifFwiLFxyXG4gICAgICAgIFwiYFwiLFxyXG4gICAgICAgIFwiOlwiLFxyXG4gICAgICAgIFwiJFwiLFxyXG4gICAgICAgIFwiLlwiLFxyXG4gICAgICAgIFwiPVwiLFxyXG4gICAgICAgIFwiI1wiLFxyXG4gICAgICAgIFwiflwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCIuLlwiLFxyXG4gICAgICAgIFwiLi4uXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIj0+XCIsXHJcbiAgICAgICAgLy8gXCI9PFwiLCAvLyBUX0VRTFRcclxuICAgICAgICBcIj08PlwiLFxyXG4gICAgICAgIFwiPS89PlwiLFxyXG4gICAgICAgIFwiPT4+XCIsXHJcbiAgICAgICAgXCI9Lz0+PlwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCI8XCIsXHJcbiAgICAgICAgXCI+XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIj48XCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIi48XCIsXHJcbiAgICAgICAgXCI+LlwiLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgXCIuPD4uXCIsXHJcbiAgICAgICAgLy9cclxuICAgICAgICBcIi0+XCIsXHJcbiAgICAgICAgLy9cIi08XCIsIC8vIFRfTUlOVVNMVFxyXG4gICAgICAgIFwiLTw+XCIsXHJcbiAgICBdLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IG9wZW46ICcsKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ2AoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnJSgnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ0AoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnQHsnLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5icmFjZScgfSxcclxuICAgICAgICB7IG9wZW46ICdAWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcclxuICAgICAgICB7IG9wZW46ICcjWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XHJcbiAgICBdLFxyXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xyXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXHJcbiAgICBJREVOVEZTVDogL1thLXpBLVpfXS8sXHJcbiAgICBJREVOVFJTVDogL1thLXpBLVowLTlfJyRdLyxcclxuICAgIHN5bWJvbGljOiAvWyUmKy0uLzo9QH5gXnwqISQjPzw+XS8sXHJcbiAgICBkaWdpdDogL1swLTldLyxcclxuICAgIGRpZ2l0c2VxMDogL0BkaWdpdCovLFxyXG4gICAgeGRpZ2l0OiAvWzAtOUEtWmEtel0vLFxyXG4gICAgeGRpZ2l0c2VxMDogL0B4ZGlnaXQqLyxcclxuICAgIElOVFNQOiAvW2xMdVVdLyxcclxuICAgIEZMT0FUU1A6IC9bZkZsTF0vLFxyXG4gICAgZmV4cG9uZW50OiAvW2VFXVsrLV0/WzAtOV0rLyxcclxuICAgIGZleHBvbmVudF9iaW46IC9bcFBdWystXT9bMC05XSsvLFxyXG4gICAgZGVjaWV4cDogL1xcLlswLTldKkBmZXhwb25lbnQ/LyxcclxuICAgIGhleGlleHA6IC9cXC5bMC05YS16QS1aXSpAZmV4cG9uZW50X2Jpbj8vLFxyXG4gICAgaXJyZWd1bGFyX2tleXdvcmRzOiAvdmFsWystXT98Y2FzZVsrLV0/fGFkZHJcXEA/fGZvbGRcXEB8ZnJlZVxcQHxmaXhcXEA/fGxhbVxcQD98bGxhbVxcQD98cHJvcFsrLV0/fHR5cGVbKy1dP3x2aWV3WystQF0/fHZpZXd0QD95cGVbKy1dP3x0QD95cGVbKy1dP3x2KGlldyk/dEA/eXBlWystXT98YWJzdEA/eXBlfGFic3YoaWV3KT90QD95cGV8Zm9yXFwqP3x3aGlsZVxcKj8vLFxyXG4gICAgRVNDSEFSOiAvW250dmJyZmFcXFxcXFw/J1wiXFwoXFxbXFx7XS8sXHJcbiAgICBzdGFydDogJ3Jvb3QnLFxyXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBBVFMvUG9zdGlhdHNcclxuICAgIC8vIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL2dpdGh3eGkvQVRTLVBvc3RpYXRzL2Jsb2IvbWFzdGVyL3NyYy9wYXRzX2xleGluZy5kYXRzXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIC8vIGxleGluZ19ibGFua3NlcTBcclxuICAgICAgICAgICAgeyByZWdleDogL1sgXFx0XFxyXFxuXSsvLCBhY3Rpb246IHsgdG9rZW46ICcnIH0gfSxcclxuICAgICAgICAgICAgLy8gTk9URTogKCopIGlzIGFuIGludmFsaWQgTUwtbGlrZSBjb21tZW50IVxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwoXFwqXFwpLywgYWN0aW9uOiB7IHRva2VuOiAnaW52YWxpZCcgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwoXFwqLywgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdsZXhpbmdfQ09NTUVOVF9ibG9ja19tbCcgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwoLywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0qLyB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwpLywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0qLyB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFxbLywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSovIH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXF0vLCBhY3Rpb246ICdAYnJhY2tldHMnIC8qeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9Ki8gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL1xcey8sIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNlJyB9Ki8gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL1xcfS8sIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNlJyB9Ki8gfSxcclxuICAgICAgICAgICAgLy8gbGV4aW5nX0NPTU1BXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC8sXFwoLywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0qLyB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvLC8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5jb21tYScgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvOy8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5zZW1pY29sb24nIH0gfSxcclxuICAgICAgICAgICAgLy8gbGV4aW5nX0FUXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC9AXFwoLywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKiB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9Ki8gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL0BcXFsvLCBhY3Rpb246ICdAYnJhY2tldHMnIC8qIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSovIH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC9AXFx7LywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2UnIH0qLyB9LFxyXG4gICAgICAgICAgICAvLyBsZXhpbmdfQ09MT05cclxuICAgICAgICAgICAgeyByZWdleDogLzo8LywgYWN0aW9uOiB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAbGV4aW5nX0VGRkVDVF9jb21tYXNlcTAnIH0gfSxcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgbGV4aW5nX0RPVDpcclxuXHJcbiAgICAgICAgICAgIC4gLy8gU1lNQk9MSUMgPT4gbGV4aW5nX0lERU5UX3N5bVxyXG4gICAgICAgICAgICAuIEZMT0FURE9UID0+IGxleGluZ19GTE9BVF9kZWNpZXhwXHJcbiAgICAgICAgICAgIC4gRElHSVQgPT4gVF9ET1RJTlRcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgeyByZWdleDogL1xcLkBzeW1ib2xpYysvLCBhY3Rpb246IHsgdG9rZW46ICdpZGVudGlmaWVyLnN5bScgfSB9LFxyXG4gICAgICAgICAgICAvLyBGTE9BVERPVCBjYXNlXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXC5AZGlnaXQqQGZleHBvbmVudEBGTE9BVFNQKi8sIGFjdGlvbjogeyB0b2tlbjogJ251bWJlci5mbG9hdCcgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwuQGRpZ2l0Ky8sIGFjdGlvbjogeyB0b2tlbjogJ251bWJlci5mbG9hdCcgfSB9LFxyXG4gICAgICAgICAgICAvLyBsZXhpbmdfRE9MTEFSOlxyXG4gICAgICAgICAgICAvLyAnJCcgSURFTlRGU1QgSURFTlRSU1QqID0+IGxleGluZ19JREVOVF9kbHIsIF8gPT4gbGV4aW5nX0lERU5UX3N5bVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWdleDogL1xcJEBJREVOVEZTVEBJREVOVFJTVCovLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkc19kbHInOiB7IHRva2VuOiAna2V5d29yZC5kbHInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICduYW1lc3BhY2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBsZXhpbmdfU0hBUlA6XHJcbiAgICAgICAgICAgIC8vICcjJyBJREVOVEZTVCBJREVOVFJTVCogPT4gbGV4aW5nX2lkZW50X3NycCwgXyA9PiBsZXhpbmdfSURFTlRfc3ltXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFwjQElERU5URlNUQElERU5UUlNUKi8sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzX3NycCc6IHsgdG9rZW46ICdrZXl3b3JkLnNycCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ2lkZW50aWZpZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBsZXhpbmdfUEVSQ0VOVDpcclxuICAgICAgICAgICAgeyByZWdleDogLyVcXCgvLCBhY3Rpb246IHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL14leygjfFxcXnxcXCQpPy8sIGFjdGlvbjogeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGxleGluZ19FWFRDT0RFJywgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0JyB9IH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC9eJX0vLCBhY3Rpb246IHsgdG9rZW46ICdrZXl3b3JkJyB9IH0sXHJcbiAgICAgICAgICAgIC8vIGxleGluZ19RVU9URVxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvJ1xcKC8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvJ1xcWy8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9IH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC8nXFx7LywgYWN0aW9uOiB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNlJyB9IH0sXHJcbiAgICAgICAgICAgIFsvKCcpKFxcXFxARVNDSEFSfFxcXFxbeFhdQHhkaWdpdCt8XFxcXEBkaWdpdCspKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXHJcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcclxuICAgICAgICAgICAgLy8gbGV4aW5nX0RRVU9URVxyXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy5xdW90ZScsICdAbGV4aW5nX0RRVU9URSddLFxyXG4gICAgICAgICAgICAvLyBsZXhpbmdfQlFVT1RFXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC9gXFwoLywgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKiB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9Ki8gfSxcclxuICAgICAgICAgICAgLy8gVE9ETzogb3RoZXJ3aXNlLCB0cnkgbGV4aW5nX0lERU5UX3N5bVxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFxcXC8sIGFjdGlvbjogeyB0b2tlbjogJ3B1bmN0dWF0aW9uJyB9IH0sXHJcbiAgICAgICAgICAgIC8vIGxleGluZ19JREVOVF9hbHA6XHJcbiAgICAgICAgICAgIC8vIE5PVEU6ICg/IXJlZ2V4KSBpcyBzeW50YXggZm9yIFwibm90LWZvbGxvd2VkLWJ5XCIgcmVnZXhcclxuICAgICAgICAgICAgLy8gdG8gcmVzb2x2ZSBhbWJpZ3VpdHkgc3VjaCBhcyBmb3JlYWNoJGZ3b3JrIGJlaW5nIGluY29ycmVjdGx5IGxleGVkIGFzIFtmb3JdIFtlYWNoJGZ3b3JrXSFcclxuICAgICAgICAgICAgeyByZWdleDogL0BpcnJlZ3VsYXJfa2V5d29yZHMoPyFASURFTlRSU1QpLywgYWN0aW9uOiB7IHRva2VuOiAna2V5d29yZCcgfSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWdleDogL0BJREVOVEZTVEBJREVOVFJTVCpbPCFcXFtdPy8sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBkeW5sb2FkIGFuZCBzdGFsb2FkIHNob3VsZCBiZSBzcGVjaWFsbHkgcGFyc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGR5bmxvYWQgd2hpdGVzcGFjZSsgXCJzcGVjaWFsX3N0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc3BlY2lhbCBzdHJpbmcgaXMgcmVhbGx5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgJy8nICdcXFxcJyAnLicgPT4gcHVuY3R1YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKHtcXCQpKFthLXpBLVpfXVthLXpBLVpfMC05XSopKH0pID0+IHB1bmN0dWF0aW9uLGtleXdvcmQscHVuY3R1YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gW15cIl0gPT4gaWRlbnRpZmllci9saXRlcmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkc190eXBlcyc6IHsgdG9rZW46ICd0eXBlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnaWRlbnRpZmllcicgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gbGV4aW5nX0lERU5UX3N5bTpcclxuICAgICAgICAgICAgeyByZWdleDogL1xcL1xcL1xcL1xcLy8sIGFjdGlvbjogeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGxleGluZ19DT01NRU5UX3Jlc3QnIH0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL1xcL1xcLy4qJC8sIGFjdGlvbjogeyB0b2tlbjogJ2NvbW1lbnQnIH0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL1xcL1xcKi8sIGFjdGlvbjogeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGxleGluZ19DT01NRU5UX2Jsb2NrX2MnIH0gfSxcclxuICAgICAgICAgICAgLy8gQVMtMjAxNjA2Mjc6IHNwZWNpZmljYWxseSBmb3IgZWZmZWN0IGFubm90YXRpb25zXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC8tPHw9PC8sIGFjdGlvbjogeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGxleGluZ19FRkZFQ1RfY29tbWFzZXEwJyB9IH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiAvQHN5bWJvbGljKy8sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdrZXl3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ29wZXJhdG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gbGV4aW5nX1pFUk86XHJcbiAgICAgICAgICAgIC8vIEZJWE1FOiB0aGlzIG9uZSBpcyBxdWl0ZSBtZXNzeS91bmZpbmlzaGVkIHlldFxyXG4gICAgICAgICAgICAvLyBUT0RPOiBsZXhpbmdfSU5UX2hleFxyXG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfaGV4aWV4cCA9PiBsZXhpbmdfRkxPQVRfaGV4aWV4cFxyXG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfZmV4cG9uZW50X2JpbiA9PiBsZXhpbmdfRkxPQVRfaGV4aWV4cFxyXG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfaW50c3BzZXEwID0+IFRfSU5UX2hleFxyXG4gICAgICAgICAgICAvLyBsZXhpbmdfSU5UX2hleDpcclxuICAgICAgICAgICAgeyByZWdleDogLzBbeFhdQHhkaWdpdCsoQGhleGlleHB8QGZleHBvbmVudF9iaW4pQEZMT0FUU1AqLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLmZsb2F0JyB9IH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC8wW3hYXUB4ZGlnaXQrQElOVFNQKi8sIGFjdGlvbjogeyB0b2tlbjogJ251bWJlci5oZXgnIH0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogLzBbMC03XSsoPyFbMC05XSlASU5UU1AqLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLm9jdGFsJyB9IH0sXHJcbiAgICAgICAgICAgIC8ve3JlZ2V4OiAvMC8sIGFjdGlvbjogeyB0b2tlbjogJ251bWJlcicgfSB9LCAvLyBJTlRaRVJPXHJcbiAgICAgICAgICAgIC8vIGxleGluZ19JTlRfZGVjOlxyXG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfZGVjaWV4cCA9PiBsZXhpbmdfRkxPQVRfZGVjaWV4cFxyXG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfZmV4cG9uZW50ID0+IGxleGluZ19GTE9BVF9kZWNpZXhwXHJcbiAgICAgICAgICAgIC8vIC0gb3RoZXJ3aXNlID0+IGludHNwc2VxMCAoWzAtOV0qW2xMdVVdPylcclxuICAgICAgICAgICAgeyByZWdleDogL0BkaWdpdCsoQGZleHBvbmVudHxAZGVjaWV4cClARkxPQVRTUCovLCBhY3Rpb246IHsgdG9rZW46ICdudW1iZXIuZmxvYXQnIH0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL0BkaWdpdEBkaWdpdHNlcTBASU5UU1AqLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLmRlY2ltYWwnIH0gfSxcclxuICAgICAgICAgICAgLy8gRElHSVQsIGlmIGZvbGxvd2VkIGJ5IGRpZ2l0c2VxMCwgaXMgbGV4aW5nX0lOVF9kZWNcclxuICAgICAgICAgICAgeyByZWdleDogL0BkaWdpdCtASU5UU1AqLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyJyB9IH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsZXhpbmdfQ09NTUVOVF9ibG9ja19tbDogW1xyXG4gICAgICAgICAgICBbL1teXFwoXFwqXSsvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICBbL1xcKFxcKi8sICdjb21tZW50JywgJ0BwdXNoJ10sXHJcbiAgICAgICAgICAgIFsvXFwoXFwqLywgJ2NvbW1lbnQuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1xcKlxcKS8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9cXCovLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsZXhpbmdfQ09NTUVOVF9ibG9ja19jOiBbXHJcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICAvLyBbL1xcL1xcKi8sICdjb21tZW50JywgJ0BwdXNoJyBdLCAgICAvLyBuZXN0ZWQgQy1zdHlsZSBibG9jayBjb21tZW50cyBub3QgYWxsb3dlZFxyXG4gICAgICAgICAgICAvLyBbL1xcL1xcKi8sICAgICdjb21tZW50LmludmFsaWQnIF0sXHQvLyBOT1RFOiB0aGlzIGJyZWFrcyBibG9jayBjb21tZW50cyBpbiB0aGUgc2hhcGUgb2YgLyogLy8qL1xyXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsZXhpbmdfQ09NTUVOVF9yZXN0OiBbXHJcbiAgICAgICAgICAgIFsvJC8sICdjb21tZW50JywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy8uKi8sICdjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIE5PVEU6IGFkZGVkIGJ5IEFTLCBzcGVjaWZpY2FsbHkgZm9yIGhpZ2hsaWdodGluZ1xyXG4gICAgICAgIGxleGluZ19FRkZFQ1RfY29tbWFzZXEwOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiAvQElERU5URlNUQElERU5UUlNUK3xAZGlnaXQrLyxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHNfZWZmZWN0cyc6IHsgdG9rZW46ICd0eXBlLmVmZmVjdCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ2lkZW50aWZpZXInIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC8sLywgYWN0aW9uOiB7IHRva2VuOiAncHVuY3R1YXRpb24nIH0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogLz4vLCBhY3Rpb246IHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9IH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsZXhpbmdfRVhUQ09ERTogW1xyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXiV9LywgYWN0aW9uOiB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL1teJV0rLywgYWN0aW9uOiAnJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGV4aW5nX0RRVU9URTogW1xyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXCIvLCBhY3Rpb246IHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfSB9LFxyXG4gICAgICAgICAgICAvLyBBUy0yMDE2MDYyODogYWRkaXRpb25hbCBoaS1saWdodGluZyBmb3IgdmFyaWFibGVzIGluIHN0YWxvYWQvZHlubG9hZCBzdHJpbmdzXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IC8oXFx7XFwkKShASURFTlRGU1RASURFTlRSU1QqKShcXH0pLywgYWN0aW9uOiBbeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUnIH0sIHsgdG9rZW46ICdpZGVudGlmaWVyJyB9LCB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScgfV0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL1xcXFwkLywgYWN0aW9uOiB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScgfSB9LFxyXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFxcXChARVNDSEFSfFt4WF1AeGRpZ2l0K3xAZGlnaXQrKS8sIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUnIH0gfSxcclxuICAgICAgICAgICAgeyByZWdleDogL1teXFxcXFwiXSsvLCBhY3Rpb246IHsgdG9rZW46ICdzdHJpbmcnIH0gfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9