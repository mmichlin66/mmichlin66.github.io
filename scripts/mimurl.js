!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mimurl=t():e.mimurl=t()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Protocol=0]="Protocol",e[e.Hostname=1]="Hostname",e[e.Port=2]="Port",e[e.Path=3]="Path",e[e.Query=4]="Query",e[e.Hash=5]="Hash"}(t.EUrlPart||(t.EUrlPart={})),function(e){e[e.String=0]="String",e[e.Integer=1]="Integer",e[e.Float=2]="Float",e[e.Boolean=3]="Boolean"}(t.FieldFormat||(t.FieldFormat={}));const n=r(2),a=r(3),s=r(4);t.parseURL=function(e){return n.parseURL(e)},t.parseUrlPattern=function(e){return a.parsePattern(e)},t.match=function(e,t){return s.match(e,t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(0))},function(e,t,r){"use strict";function n(e){return/^[a-z0-9_\-]+$/i.test(e)}function a(e){return/^[a-z0-9_\-\.%]+$/i.test(e)}function s(e){return/^[a-z0-9_\-]+$/i.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.parseURL=function(e){let t,r={},i=e.indexOf("://");if(0===i)throw new Error("URL cannot start from '://'");if(i>0){if(r.protocol=e.substr(0,i),o=r.protocol,!/^[a-z0-9]+$/i.test(o))throw new Error(`Protocol '${r.protocol}' contains invalid characters`);t=i+3}else t="/"===e[0]?-1:0;var o;let l=t<0?0:t,u=e.indexOf(":",l),h=e.indexOf("/",l),c=e.indexOf("?",l),f=e.indexOf("#",l);if(t>=0){r.hostname=u>0?e.substr(t,u-t).split("."):h>0?e.substr(t,h-t).split("."):c>0?e.substr(t,c-t).split("."):f>0?e.substr(t,f-t).split("."):e.substr(t).split(".");for(let e=0;e<r.hostname.length;e++){let t=r.hostname[e];if(!n(t))throw new Error(`Hostname segment '${t}' contains invalid characters`)}}if(u>0){let t;if(!function(e){return/^\d+$/i.test(e)}(t=h>0?e.substr(u+1,h-u-1):c>0?e.substr(u+1,c-u-1):f>0?e.substr(u+1,f-u-1):e.substr(u+1)))throw new Error(`Port '${t}' contains non-numerical characters`);r.port=Number(t)}if(h>=0){r.path=c>0?e.substr(h+1,c-h-1).split("/"):f>0?e.substr(h+1,f-h-1).split("/"):e.substr(h+1).split("/");for(let e=0;e<r.path.length;e++){let t=r.path[e];if(!a(t))throw new Error(`Path segment '${t}' contains invalid characters`);try{t=decodeURIComponent(t)}catch(e){throw new Error(`Path segment '${t}' cannot be URL-decoded. Error: ${e.message}`)}r.path[e]=t}}if(c>0){let t;r.query={};let n=(t=f>0?e.substr(c+1,f-c-1):e.substr(c+1)).split("&");for(let e of n){if(!e)throw new Error("Invalid stucture of query string URL part");let t,n,i=e.split("=");if(i.length>2)throw new Error(`Query string parameter '${e}' has more than one '=' symbol`);if(i.length<2?(t=e,n=void 0):(t=i[0],n=i[1]),!s(this.name))throw new Error(`Query string parameter name '${t}' contains invalid character`);if(n){if(!a(n))throw new Error(`Value '${n}' of query string parameter '${t}' contains invalid characters`);try{n=decodeURIComponent(n)}catch(e){throw new Error(`Value '${n}' of query string parameter '${t}' cannot be URL-decoded. Error: ${e.message}`)}}t in r.query?r.query[t].push(n):r.query[t]=[n]}}if(f>0){let t=e.substr(f+1);if(!a(t))throw new Error(`Value '${t}' of hash URL part contains invalid characters`);try{r.hash=decodeURIComponent(t)}catch(e){throw new Error(`Value '${t}' of hash URL part cannot be URL-decoded. Error: ${e.message}`)}}return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0);let a,s,i,o;function l(){return i>=s}function u(e){if(i===s){let t="Unexpected end of URL pattern";throw e&&(t+=": "+e),new O(t)}}function h(e=1){return i<=s-e?(o=a[i+=e],!0):(i=s,!1)}t.parsePattern=function(e){if(a=e,s=0,i=0,o="",!e)throw new O("URL pattern cannot be empty");s=e.length,o=e[0];let t=new c;return t.parse(),t};class c{get protocol(){return this.parts[n.EUrlPart.Protocol]}get hostname(){return this.parts[n.EUrlPart.Hostname]}get port(){return this.parts[n.EUrlPart.Port]}get path(){return this.parts[n.EUrlPart.Path]}get query(){return this.parts[n.EUrlPart.Query]}get hash(){return this.parts[n.EUrlPart.Hash]}constructor(){this.patternString=a,this.parts=[]}parse(){for(let e=this.findFirstUrlPart();null!==e&&(e.parse(),this.parts[e.urlPart]=e,!l());e=e.getNextUrlPart());}findFirstUrlPart(){if("/"===o)return s>1&&"/"===a[1]?(h(2),new w):(h(),new y);{let e=a.indexOf("://");if(e>0)return new g;if(e<0)return new w;throw new O("URL pattern cannot start from '://'")}}}class f{constructor(){this.location={start:i,length:0}}finalize(){this.location.length=i-this.location.start,this.tokenSting=a.substr(this.location.start,this.location.length)}}class p extends f{constructor(e,t){super(),this.urlPart=e,this.caseSensitive=t}}class d extends p{constructor(e,t){super(e,t)}parse(){let e=new $;e.parse(this.getSegmentEndCharacters(),!1,this.caseSensitive),this.segment=e,this.finalize()}getSegments(){return[this.segment]}}class m extends p{constructor(e,t){super(e,t),this.segments=[]}parse(){let e=this.getPartEndCharacters();for(;!l();){let t=new $;if(t.parse(this.getSegmentEndCharacters(),!0,this.caseSensitive),this.segments.push(t),e.indexOf(o)>=0)break;h()}this.finalize()}getSegments(){return this.segments}}class g extends d{constructor(){super(n.EUrlPart.Protocol,!1)}getSegmentEndCharacters(){return":"}getNextUrlPart(){if(":"===o&&i+2<s&&"/"===a[i+1]&&"/"===a[i+2]){return h(3),u(),new w}throw new O("Invalid characters after protocol part")}}class w extends m{constructor(){super(n.EUrlPart.Hostname,!1)}getSegmentEndCharacters(){return".:/?#"}getPartEndCharacters(){return":/?#"}getNextUrlPart(){if(":"===o)return h(),u("Port cannot be empty"),new P;if("/"===o)return h(),l()?null:new y;if("?"===o)return h(),l()?null:new x;if("#"===o)return h(),l()?null:new U;throw new O(`Invalid character '${o}' after hostname segment`)}}class P extends d{constructor(){super(n.EUrlPart.Port,!1)}getSegmentEndCharacters(){return"/?#"}getNextUrlPart(){if("/"===o)return h(),l()?null:new y;if("?"===o)return h(),l()?null:new x;if("#"===o)return h(),l()?null:new U;throw new O(`Invalid character '${o}' after port part`)}}class y extends m{constructor(){super(n.EUrlPart.Path,!0)}getSegmentEndCharacters(){return"/?#"}getPartEndCharacters(){return"?#"}getNextUrlPart(){if("?"===o)return h(),l()?null:new x;if("#"===o)return h(),l()?null:new U;throw new O(`Invalid character '${o}' after path segment`)}}class x extends p{constructor(){super(n.EUrlPart.Query,!0),this.parsedQSPs={},this.allowExtraQueryParams=!0}parse(){for(;!l()&&"#"!==o;)if("!"===o)this.allowExtraQueryParams=!1,h();else{let e=new b;if(e.parse(),e.name in this.parsedQSPs)throw new O(`Query string parameter '${e.name}' appears more than once`);this.parsedQSPs[e.name]=e,"&"===o&&h()}this.finalize()}getNextUrlPart(){if("#"===o)return h(),l()?null:new U;throw new O(`Invalid character '${o}' after query string segment`)}getSegments(){let e=[];for(let t in this.parsedQSPs)e.push(this.parsedQSPs[t].segment);return e}}class U extends d{constructor(){super(n.EUrlPart.Hash,!0)}getSegmentEndCharacters(){return""}getNextUrlPart(){return null}}class b extends f{constructor(){super(),this.name=""}parse(){for(;!l()&&"=&#".indexOf(o)<0;)this.name+=o,h();if(!this.name)throw new O("Query string parameter doesn't have name");if(e=this.name,!/^[a-z0-9_\-]+$/i.test(e))throw new O(`Query string parameter name '${this.name}' contains invalid character`);var e;if(l()||"="!==o)throw new O(`Query string parameter '${this.name}' must be followed by '='`);h(),u(`Query string parameter '${this.name}' doesn't have value`);let t=new $;t.parse("&#",!0,!0),this.segment=t,this.finalize()}isNameEndCharacter(e){return"=&#".indexOf(e)>=0}}class $ extends f{constructor(){super(),this.isOptional=!1,this.isMulti=!1,this.fields=[]}parse(e,t,r){this.analizeFirstChar(e,t)&&h();let n=[];for(;!l()&&e.indexOf(o)<0;){let t;if("{"===o){let r=new F;r.parse(e),t=r}else if("("===o){let e=new v;e.parse(),t=e}else{let r=new E;r.parse(e+"{("),t=r}n.push(t)}this.generateRegExp(n,r),this.finalize()}analizeFirstChar(e,t){switch(o){case"?":return this.isOptional=!0,!0;case"!":return!0;case"*":if(!t)throw new O("Single-value segment URL part cannot start from '*'");return this.isOptional=this.isMulti=!0,!0;case"+":if(!t)throw new O("Single-segment URL part cannot start from '+'");return this.isMulti=!0,!0;default:if(e.indexOf(o)>=0)throw new O("Empty segment encountered");return!1}}generateRegExp(e,t){let r=1,n="";if(0===e.length)n+=".+";else for(let t of e)t instanceof E?n+=t.content:t instanceof v?(n+="("+t.content+")",r+=1+t.capturingGroupQty):(t.isArray=this.isMulti,t.index=r,this.fields.push(t),n+=this.generateRegExpSectionForField(t),r++,t.matchPattern&&(r+=1+t.matchPattern.capturingGroupQty));this.regExp=new RegExp(n,t?"":"i")}generateRegExpSectionForField(e){let t="";return e.matchPattern&&e.matchPattern.content?(t+=e.matchPattern.content,e.isOptional&&(t+="?")):e.isOptional?t+="(.*)":t+="(.+)",t}}class E extends f{constructor(){super(),this.content=""}parse(e){let t="";for(;!l()&&e.indexOf(o)<0;)t+=o,h();if(!function(e){return/^[a-z0-9_\-\.%]+$/i.test(e)}(t))throw new O(`Text token '${t}' contains invalid characters`);try{this.content=decodeURIComponent(t)}catch(e){throw new O(`Text token '${t}' cannot be URL-decoded. Error: ${e.message}`)}this.finalize()}}class v extends f{constructor(){super(),this.content="",this.capturingGroupQty=0}parse(){let e=[];for(;!l();){let t=o;if(")"===t){if("("!==e.pop())throw new O(`Non-matching character '${t}' in regular expression`);if(h(),0===e.length)return this.content+=t,void this.finalize()}else if("}"===t){if("{"!==e.pop())throw new O(`Non-matching character '${t}' in regular expression`);h()}else if("]"===t){if("["!==e.pop())throw new O(`Non-matching character '${t}' in regular expression`);h()}else"({[".indexOf(t)>=0?("("===t&&this.capturingGroupQty++,e.push(t),h()):"\\"===t?(this.content+=t,h(),u(`In the Regexp '${this.content}', the escape character '\\' must be followed by another character`),t=o,h()):h();this.content+=t}throw new O("Invalid URL pattern end within regular expression")}finalize(){if(!this.content)throw new O("Empty regular expression");super.finalize()}}class F extends f{constructor(){super(),this.isOptional=!1,this.name="",this.format=n.FieldFormat.String,this.matchPattern=null}parse(e){for(h(),u("A field must define a name"),"?"===o&&(this.isOptional=!0,h());!l();){if(e.indexOf(o)>=0)throw new O("Field doesn't have closing '}'");if("}(%=".indexOf(o)>=0)break;this.name+=o,h()}if(0===this.name.length)throw new O("Field must have name");if(t=this.name,!/^[a-z_][a-z0-9_]*$/i.test(t))throw new O(`Field name '${this.name}' contains invalid characters`);var t;if(u(`Field '${this.name}' doesn't have closing '}'`),"%"===o){h(),u(`Field '${this.name}' doesn't specify format after '%'`);let e=o;if("i"===e)this.format=n.FieldFormat.Integer,h();else if("f"===e)this.format=n.FieldFormat.Float,h();else{if("b"!==e)throw new O(`Field '${this.name}' has invalid format character '${o}'`);this.format=n.FieldFormat.Boolean,h()}u(`Field '${this.name}' doesn't have closing '}'`)}if("("===o){let e=new v;e.parse(),this.matchPattern=e,u(`Field '${this.name}' doesn't have closing '}'`)}if("="===o)this.isOptional=!0,h(),this.parseDefaultValue(e);else switch(this.format){case n.FieldFormat.Integer:case n.FieldFormat.Float:this.defaultValue=NaN;break;case n.FieldFormat.Boolean:this.defaultValue=void 0;break;default:this.defaultValue=""}if("}"!==o)throw new O(`Field '${this.name}' has invalid character '${o}'`);this.finalize(),h()}parseDefaultValue(e){let t="";for(;!l();){if(e.indexOf(o)>=0)throw new O(`Field '${this.name}' doesn't have closing '}'`);if("}"===o)break;t+=o,h()}if(!t)throw new O(`Field '${this.name}' default value cannot be empty`);if(t=decodeURIComponent(t),this.format===n.FieldFormat.Integer){if(this.defaultValue=Number(t),isNaN(this.defaultValue)||!Number.isInteger(this.defaultValue))throw new O(`Default value '${t}' of Integer field '${this.name}' cannot be converted to Integer`)}else if(this.format===n.FieldFormat.Float){if(this.defaultValue=Number(t),isNaN(this.defaultValue))throw new O(`Default value of '${t}' Float field '${this.name}' cannot be converted to Float`)}else if(this.format===n.FieldFormat.Boolean){let e=t.toLowerCase();if("true"===e||"t"===e||"yes"===e||"y"===e||"1"===e)this.defaultValue=!0;else{if("false"!==e&&"f"!==e&&"no"!==e&&"n"!==e&&"0"!==e)throw new O(`Default value of '${t}' Boolean field '${this.name}' cannot be converted to Boolean`);this.defaultValue=!1}}else this.defaultValue=t}}class O extends Error{constructor(e){super(),this.pos=i,this.message=`Error at position ${this.pos}: ${e}`}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(0);function a(e,t){if(!e)throw new Error("URL cannot be null");if(!t)throw new Error("parsedPattern cannot be null");let r=new c;r.parsedURL=e,r.fields={};let a=[];try{let l=s(n.EUrlPart.Protocol,e.protocol,t.protocol?t.protocol.segment:null,r.fields);l&&a.push(l),(l=o(n.EUrlPart.Hostname,e.hostname,t.hostname?t.hostname.segments:null,r.fields))&&a.push(l),(l=s(n.EUrlPart.Port,e.port,t.port?t.port.segment:null,r.fields))&&a.push(l),(l=o(n.EUrlPart.Path,e.path,t.path?t.path.segments:null,r.fields))&&a.push(l),(l=function(e,t,r){if(!t)return null;if(!e)return 0===Object.keys(t.parsedQSPs).length?null:"URL doesn't have query string parameters specified in the pattern";for(let r in t.parsedQSPs)if(void 0===e[r])return`URL doesn't have query string parameter '${r}'`;for(let n in e){let a=t.parsedQSPs[n].segment;if(a){let t=e[n];if(!a.isMulti&&t.length>1)return`URL has multiple values for query string parameter '${n}' while pattern doesn't specify it as multi`;for(let e of t)if(!i(e,a,r))return`URL's query string parameter '${n}' doesn't match that specified in the pattern`}else if(!t.allowExtraQueryParams)return`URL has query string parameter '${n}' that is not specified in the pattern`}return null}(e.query,t.query,r.fields))&&a.push(l),(l=s(n.EUrlPart.Hash,e.hash,t.hash?t.hash.segment:null,r.fields))&&a.push(l)}catch(e){a.push(e.message)}return a.length>0&&(r.errors=a),r}function s(e,t,r,a){return"number"==typeof t&&(t=t.toString()),r?t?i(t,r,a)?null:`URL segment '${t}' in part '${n.EUrlPart[e]}' doesn't match `+`pattern segment '${r.tokenSting}'`:r.isOptional?null:`URL part '${n.EUrlPart[e]}' doesn't have a segment corresponding `+`to a mandatory pattern segment '${r.tokenSting}'`:t?`URL part '${n.EUrlPart[e]}' contains segment '${t}' that doesn't exist in the pattern`:null}function i(e,t,r){let n=t.regExp.exec(e);if(!n||n[0]!==e)return!1;for(let e of t.fields){if(e.index>=n.length)return console.error("BUG: Field index not found in patter's regular expression execution result"),!1;let t=u(e,n[e.index]);if(e.isArray){let n=r[e.name];void 0===n&&(n=[],r[e.name]=n),n.push(t)}else r[e.name]=t}return!0}function o(e,t,r,a){if(!t&&!r)return null;if(!t)return`URL doesn't have part '${n.EUrlPart[e]}' that exists in the pattern`;if(!r)return`URL has part '${n.EUrlPart[e]}' that doesn't exist in the pattern`;let s=[];for(let e of r)e.isMulti&&!e.isOptional?(s.push(new h(e,!1)),s.push(new h(e,!0))):s.push(new h(e,e.isOptional));return function e(t,r,n,a,s){let o=r;let u=a;for(;u<n.length&&o<t.length;){let r=n[u],a=t[o];if(r.isOptional){let h={};if(e(t,o,n,u+1,h))return l(s,h),!0;if(h={},!i(a,r.parsedSegment,h))return!1;l(s,h),o++,r.parsedSegment.isMulti||u++}else{if(!i(a,r.parsedSegment,s))return!1;u++,o++}}if(u===n.length&&o===t.length)return!0;if(u===n.length)return!1;for(let e=u;e<n.length;e++){let t=n[e];if(!t.isOptional)return!1}return!0}(t,0,s,0,a)?null:`URL part '${n.EUrlPart[e]}' doesn't match the pattern`}function l(e,t){for(let r in t){let n=t[r],a=e[r];if(void 0===a)e[r]=n;else{let e=n,t=a;for(let r of e)t.push(r)}}}function u(e,t){if(!t)return e.defaultValue;switch(e.format){case n.FieldFormat.Integer:{let r=Number(t);return isNaN(r)||!Number.isInteger(r)?e.defaultValue:r}case n.FieldFormat.Float:{let r=Number(t);return isNaN(r)?e.defaultValue:r}case n.FieldFormat.Boolean:{let r=t.toLowerCase();return"true"===r||"t"===r||"yes"===r||"y"===r||"1"===r||"false"!==r&&"f"!==r&&"no"!==r&&"n"!==r&&"0"!==r&&e.defaultValue}default:return t}}t.match=function(e,t){if(!e)throw new Error("URL cannot be null or empty string");if(!t)throw new Error("Pattern cannot be null or empty string");return a("string"==typeof e?n.parseURL(e):e,"string"==typeof t?n.parseUrlPattern(t):t)},t.matchParsed=a;class h{constructor(e,t){this.parsedSegment=e,this.isOptional=t}}class c{get success(){return!this.errors||0===this.errors.length}}}])});
//# sourceMappingURL=mimurl.js.map