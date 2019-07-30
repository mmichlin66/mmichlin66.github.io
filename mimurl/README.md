# mimurl - URL Parsing and Matching Library
Mimurl is a library that allows defining URL patterns and then matching actual URLs with the pattern. URL patterns can describe either a full URL containing protocol, hostname, port, path, query and hash parts, or it can have only a subset of the URL parts; for example, it can only describe a path. The URL pattern can define fields and when an actual URL matches the pattern, the result of the matching operation returns values of the fields; for example:

**URL pattern:** `{prot}://{host}.example.com:?{port%i}/departments/{dep}/*`

**Actual URL:** `http://www.example.com:8080/departments/finance/payroll`

**Matching result:**
```JSON
{ prot: "http", port: 8080, dep: "finance" }
```

**Actual URL:** `https://www.example.com/departments/hr`

**Matching result:**
```JSON
{ prot: "https", dep: "hr" }
```

## Usage

```TypeScript
import * as mimurl from "mimurl"

let pattern = "{prot}://{host}.example.com:?{port%i}/departments/{dep}/*";
let url = "http://www.example.com:8080/departments/finance/payroll";
let matchResult = mimurl.match( url, pattern);
for( let fieldName in matchResult.fields)
{
    console.log( `${fieldName} = ${matchResults.fields[fieldName]}`);
}
```

## Features
A URL pattern, just like URL, consists of parts - all of them optional. These parts are: protocol, hostname, port, path, query string and hash. Each part defines one or more segments:

* Protocol defines a single segment.
* Hostname can define multiple segments separated by dots. For example, the hostname `www.microsoft.com` defines 3 segments.
* Port defines a single segment.
* Path can define multiple segments separated by slashes.
* Query string can define multiple segments per each named query string parameter. For example the query string `?p1=abc&p1xyz&p2=123` defines two segments for parameter `p1` and one segment for parameter `p2`.
* Hash defines a single segment.

Each segment in the pattern defines whether it is mandatory or optional. For those parts of the URL that can define multiple segments, the segment pattern also indicates whether it can be repeated more than once - those are called "multi" segments. If a segment is marked as both optional and multi, it can be repeated zero or more times. If a segment is not marked as optional but is marked as multi, it can be repeated one or more times.

Each segment defines how it should be compared with segments from actual URLs. The comparison can be based either on a simple string comparison or on regular expressions.

Within a segment pattern, fields can be defined. Fields have names that should be unique within the entire URL pattern. Fields can specify formats that determine whether the fields should be converted to a number (integer or float), converted to a Boolean or just be a string. If the format is specified, but the field value cannot be converted to the specified format, the matchig will still succeed but the field's value will be a string.

## URL Pattern Format
URL patterns have the following form:

```
[[ptotocol://]hostname[:port]][/path][?queryString][#hash]
```

### Segment Pattern Format
Segment pattern definition takes the following form:

```
[?|*|+|!][match-pattern]
```

* `?` means that the segment is optional
* `*` means that the segment can be repeated zero or more times - that is, it can cover zero or more consecutive segments of the given part of the actual URL. The value of any field defined within the segment will be an array. This character is only allowed in multi-segment URL parts.
* `+` means that the segment must be repeated one or more times - that is, it can cover one or more consecutive segments of the given part of the actual URL. The value of any field defined within the segment will be an array. This character is only allowed in multi-segment URL parts.
* `!` means that the segment must be present exactly once. This character is only needed if the segment doesn't specify any additional content (text, regular expressions or fields).

Segment's match pattern is a sequence of one or more elements each of which can be either text or regular expressions or a field. Match pattern takes the following form:

```
[text|(RegExp)|{field}]+
```

* Text is a sequence of characters. Any characters are allowed except `(`, `{` and those that otherwise would end the segment (for example, `/` within the path URL part). Note that although all characters are allowed, the segements are expected to be URL-encoded.
* Regular expressions are always enclosed in parentheses. Note that these parentheses do not become part of the regular expression - only the content within them.
* Fields are always enclosed in curly braces.
* Fields can include regular expressions; however, regular expressions cannot include fields.
* If match pattern is empty it is interpreted as a segment containing arbitrary number of any characters.

Note that the character `?` has two uses: first, as an indication of an optional segment, and second, as a start of the URL's query string. In order to disambiguate the use, the following rules are applied:

* If `?` stands right after `.`, it is considered an indication of an optional segment in the hostname URL part.
* If `?` stands right after `:`, it is considered an indication of an optional segment in the port URL part.
* If `?` stands right after `/`, it is considered an indication of an optional segment in the path URL part.
* If `?` stands right after `#`, it is considered an indication of an optional segment in the hash URL part.
* If `?` is found after an opening curly brace, it is an indication of an optional field.
* In all other cases, the `?` character is an indication of the start of the URL's query string part.

For example:

* `/?users?p=a` - the first `?` indicates that the /user segment is optional; the second `?` is the start of the query string.
* `/users/?` - the `?` character indicates an optional segment with arbitrary content.
* `/users?` - the `? character indicates the start of query string.
* `/??` - the first `?` indicates an optional segment with arbitrary content; the second `?` is the start of the query string.

If a query string parameter was specified in the URL pattern as a mandatory segment, then an actual URL will not be matched if it doesn't have this parameter. For example, the URL `/path` will not match the pattern `/path?p={p}`. Note, however, that the reverse is, in general, not correct; that is, actual URLs that have some query string parameters not specified in the URL pattern, will still match the pattern (provided, of course, other segments match). For example, the URL `/path?p=a` will match the pattern `/path` and will even match the pattern `/path?p1={?p1}`.

There is a special syntax for the query string URL part to prohibit query string parameters that are not specified in the pattern. The query string clause (that is, the text that follows `?` or `&` characters) can specify the `!` character, which means that no query string parameters are allowed except those explicitly specified in the pattern. For example, the pattern `/path?p={p}&!` prohibits having any query string parameters except `p` and the pattern `/path?!` prohibits having any query string parameters at all.

### Field Format
Field definition takes the following form:

```
{[?]name[(RegExp)][%format]}
```

* Fields must be enclosed in curly brackets.
* If the first symbol is `?`, then the field is optional.
* Field name must be specified. It can have any alpha-numeric character in it plus hyphen and underscore. It is an error to use the same field name more than once - not only in a segment but in the entire pattern.
* If regular expression is specified, its entire value becomes the value of the field regardless of how many capture groups (if any) it has. If regular expression is not specified, it is created implicitly as `(.*)` for optional fields and `(.+)` for mandatory ones.

The optional format expression consists of the `%` character followed by a single character defining the format. The following formats are supported:

* `i` - the field value must be convertible to an integer number.
* `f` - the field value must be convertible to a real number.
* `b` - the field value must be convertible to a Boolean.

The acceptable values for Boolean fields are:
* `1 | y | t | yes | true` (case insensitive) are converted to true.
* `0 | n | f | no | false` (case insensitive) are converted to false.

### Field Examples

* `{uid}` - the segment's string becomes the value of the `uid` field.
* `{uid%i}` - the segments string must be converted to an integer value, which becomes the value of the `uid` field.
* `{?uid%i}` - the segment's string must be converted to an integer value, which becomes the value of the `uid` field. The match will succeed even if the field is not present (optional field).
* `{uid([A-Z]{4}\d{3,8})}` - the `uid` field should contain 4 uppercase characters followed by 3 to 8 digits.

## Pattern Examples
### Example 1
```
/users/profile/usr-{uid%i}?option=+{opt}#?{fragment}
```

* `{uid%i}` defines a field, which must be an integer number
* `+{opt}` defines a "one or more" segment in the query string’s "option" parameter.
* `?{fragment}` defines an optional field in the hash.

**The following URLs will match the pattern:**

```
/users/profile/usr-123?option=email&option=phone
uid = 123
opt = ["email", "phone"]
fragment = undefined
```

```
/users/profile/usr-6?option=email#xyz
uid = 6
opt = ["email"]
fragment = "xyz"
```

```
/users/profile/usr-abc?option=email&option=phone
uid = "abc", note that it is a string
opt = ["email", "phone"]
fragment = undefined
```

**The following URLs will NOT match the pattern:**

```
/profile/usr-123?option=email&option=phone
/users path segment is missing
```

```
/users/profile/usr-6#xyz
"option" query string parameter is not specified (it must be specified at least once)
```

### Example 2
```
/*{before}/accounts/{?acc%i}
```

* `*{before}` defines a field, which will be an array (maybe empty) of segments before the "account" segment.
* `{?acc%i!}` defines an optional field, which must be an integer number.

**The following URLs will match the pattern:**
```
/accounts/123
before = []
acc = 123
```

```
/company/users/accounts/123
before = [“company”, “users”]
acc = 123
```

```
/accounts/123.5
before = []
acc = "123.5". Note that it is a string.
```

**The following URLs will NOT match the pattern:**
```
/company/users/123
/accounts segment is missing
```

*** Example 3
```
/*{dir}/?{file}.{?ext}/act-{?action}
```

* `*{dir}` defines `dir` field, which will be an array of segments.
* `?{file}.{?ext}` defines an optional segment, which has mandatory `file` field followed by the `.` character and optional `ext` field.
* `act-{?action}` defines a segment that must contain the `act-` text followed by the optional `action` field.

**The following URLs will match the pattern:**

```/path/to/my/dir/work.txt/act-print
dir = ["path", "to", "my", "dir"]
file = "work"
ext = "txt"
action = "print"
```

```
/work/act-
dir = ["work"]
file = undefined
ext = undefined
action = undefined
```

```
/work.txt/act-
dir = []
file = "work"
ext = "txt"
action = undefined
```

```
/act-do-nothing
dir = []
file = undefined
ext = undefined
action = "do-nothing"
```

**The following URLs will NOT match the pattern:**
```
/do-nothing
Mandatory segment with the text "act-" not found.
```

```
/path/to/my/dir/work.txt/act-print/rest
Extra segment /rest.
```









