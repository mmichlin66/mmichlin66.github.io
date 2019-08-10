---
# front matter for Jekyll
layout: default
---

# Mimurl - URL Parsing and Matching
Mimurl library allows defining URL patterns and matching actual URLs against them. A patterns can either describe a full URL containing protocol, hostname, port, path, query and hash parts, or describe only a subset of the URL parts; for example, it can only describe a path. The URL pattern can define fields and when an actual URL matches the pattern, the result of the matching operation returns values of the fields; for example:

**URL pattern:** `{prot}://{host}.example.com:?{port%i}/departments/{dep}/*`

**Actual URL:** | **Matching result:**
:---|:---
`http://www.example.com:8080/departments/finance/payroll` | `{ prot: "http", port: 8080, dep: "finance" }`
`https://www.example.com/departments/hr` | `{ prot: "https", dep: "hr" }`

To play with mimurl pattern parsing and URL matching capabilities [please visit here](mimurlDemo.html). API reference of the mimurl library is available [here](mimurlReference.html).


## Installation

```
npm install mimurl -D
```

## Usage
The simplest use of the mimurl library is to call the match function and pass URL and pattern as string parameters. The returned object has the Boolean `success` property that determines whether the matching was successful. If yes, the `fields` property will contain names and values of fields parsed out of the URL according to the definitions in the pattern:

```typescript
import * as mimurl from "mimurl"

let pattern = "{prot}://{host}.example.com:?{port%i}/departments/{dep}/*";
let url = "http://www.example.com:8080/departments/finance/payroll";
let matchResult = mimurl.match( url, pattern);
if (matchResult.success)
{
    for( let fieldName in matchResult.fields)
        console.log( `${fieldName} = ${matchResults.fields[fieldName]}`);
}
else
    console.log( "The URL doesn't match the pattern");
```

Parsing the URL pattern is a relatively expensive operation and since, usually, many different URLs are matched to the same pattern, it is possible to perform attern parsing only once and pass the object containing the result of pattern parsing to the match function:

```typescript
import * as mimurl from "mimurl"

let pattern = "{prot}://{host}.example.com:?{port%i}/departments/{dep}/*";
let url = "http://www.example.com:8080/departments/finance/payroll";
let parsedPattern = mimurl.parseUrlPattern( pattern);
let matchResult = mimurl.match( url, parsedPattern);
...
```


## Features
A URL pattern, just like a URL, consists of parts - all of them optional. These parts are: protocol, hostname, port, path, query string and hash. Each part defines one or more segments:

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
{[?]name[(RegExp)][%format][=defaultValue]}
```

* Fields must be enclosed in curly brackets.
* If the first symbol is `?`, then the field is optional.
* Field name must be specified. It can have any alpha-numeric character in it plus hyphen and underscore. It is an error to use the same field name more than once - not only in a segment but in the entire pattern.
* If regular expression is specified, its entire value becomes the value of the field regardless of how many capture groups (if any) it has. If regular expression is not specified, it is created implicitly as `(.*)` for optional fields and `(.+)` for mandatory ones.
* The optional format expression consists of the `%` character followed by a single character defining the format. The following formats are supported:
  * `i` - the field value must be convertible to an integer number. If the field's value cannot be converted to an integer number, `NaN` will be returned.
  * `f` - the field value must be convertible to a real number. If the field's value cannot be converted to a real number, `NaN` will be returned.
  * `b` - the field value must be convertible to a Boolean.  If the field's value cannot be converted to a Boolean, `undefined` will be returned. The acceptable values for Boolean fields are:
    * `1 | y | t | yes | true` (case insensitive) are converted to true.
    * `0 | n | f | no | false` (case insensitive) are converted to false.
   
* The optional default value can be specified and will be returned either if the optional field is not found in the URL or if the value of a non-string field cannot be converted to the specified format. The default value must correspond to the field's format; otherwise, a n exception will be thrown during pattern parsing.

### Field Examples

* `{uid}` - the segment's string becomes the value of the `uid` field.
* `{uid%i}` - the segments string must be converted to an integer value, which becomes the value of the `uid` field.
* `{?uid%i}` - the segment's string must be converted to an integer value, which becomes the value of the `uid` field. The match will succeed even if the field is not present (optional field).
* `{uid([A-Z]{4}\d{3,8})}` - the `uid` field should contain 4 uppercase characters followed by 3 to 8 digits.
* `{ratio%f=3.5}` - the segments string must be converted to a real number value, which becomes the value of the `ratio` field. If the segment cannot be converted to a real number, the field receives the defaut value of 3.5.

## Pattern Examples
This section provides several examples of URL pattern and actual URLs that match or don't match the patterns. Also visit the Web page [Mimurl Demo](https://mmichlin66.github.io/mimurl/mimurlDemo.html) where you can define, parse and match your own URL patterns and actual URLs.

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
    users path segment is missing
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
    acc = NaN (123.5 is not an integer number)
```

**The following URLs will NOT match the pattern:**
```
/company/users/123
    accounts segment is missing
```

### Example 3 
```
/*{dir}/?{file}.{?ext}/act-{?action}
```

* `*{dir}` defines `dir` field, which will be an array of segments.
* `?{file}.{?ext}` defines an optional segment, which has mandatory `file` field followed by the `.` character and optional `ext` field.
* `act-{?action}` defines a segment that must contain the `act-` text followed by the optional `action` field.

**The following URLs will match the pattern:**

```
/path/to/my/dir/work.txt/act-print
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









