!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.mimcss=e():t.mimcss=e()}(this,(function(){return function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=18)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(5),n=r(2);class i{constructor(t){this.s=t}stringProxyToCssString(){return null==this.s?"":"string"==typeof this.s?this.s:this.s.toString()}toString(){return this.stringProxyToCssString()}}e.StringProxy=i;class o{constructor(t,e){this.varDef=t,this.fallbackValue=e}varValueToCssString(){let t=`var(--${"string"==typeof this.varDef?this.varDef:this.varDef.varName}`;return this.fallbackValue&&(t+=",",this.fallbackValue instanceof s.CustomVar?t+=new o(this.fallbackValue):"string"==typeof this.fallbackValue||this.fallbackValue instanceof i||"string"==typeof this.varDef?t+=this.fallbackValue:t+=n.stylePropToCssString(this.varDef.templatePropName,this.fallbackValue,!0)),t+")"}toString(){return this.varValueToCssString()}}e.VarValue=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Rule=class{constructor(t){this.type=t}process(t,e,r){this.container=t,this.owner=e,this.ruleName=r}get isRealCssRule(){return!0}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0),n=r(4),i=r(9);function o(t){return"string"==typeof t?t:n.objectToCssString(t,!1,["delay",n.timeToCssString],["function",u],["duration",n.timeToCssString],["count",n.numberToCssString],"direction","state","mode","name")}function u(t){return"string"==typeof t?t:Array.isArray(t)?t.length<3?`step(${t[0]}${2===t.length?","+t[1]:""})`:`cubic-bezier(${t[0]},${t[1]},${t[2]},${t[3]})`:t.toString()}function l(t){return"string"==typeof t?t:t instanceof s.StringProxy?t.toString():Array.isArray(t)?n.arrayToCssString(t,n.lengthToCssString," "):n.lengthToCssString(t)}function a(t){return"string"==typeof t?t:Array.isArray(t)?n.stringArrayToCssString(t," "):t.toString()}function h(t){return"string"==typeof t?t:"number"==typeof t?n.lengthNumberToCssString(t):Array.isArray(t)?n.arrayToCssString(t,n.lengthToCssString," "):t.toString()}function c(t){if("string"==typeof t)return t;if("number"==typeof t)return n.lengthToCssString(t);if(Array.isArray(t)){let e="";return"string"==typeof t[0]?t[0]:t[0]instanceof s.StringProxy?t[0].toString():(null!=t[0]&&(e+=n.lengthToCssString(t[0])+" "),t[1]&&(e+=t[1]+" "),t[2]&&(e+=i.colorToCssString(t[2])+" "),e)}return"object"==typeof t?t.toString():i.colorToCssString(t)}function g(t,e,r){if(!t||null==e)return"";let i=f[t];if("string"==typeof i)for(;"string"==typeof i;)i=f[t=i];let o=r?"":n.camelToDash(t)+":";return"function"==typeof i?o+=i(e):"string"==typeof e?o+=e:e instanceof s.StringProxy?o+=e.toString():Array.isArray(e)?o+=n.arrayToCssString(e,t=>null==t?"":t.toString()):o+=e.toString(),o}e.stylesetToCssString=function(t,e){let r="";for(let s in t)if("$custom"===s){let n=t[s];for(let t of n){let n,i;"string"==typeof t.varDef?(n=t.varDef,i=t.templatePropName):(n=t.varDef.name,i=t.varDef.templatePropName),n&&i&&(r+=`--${n}:${g(i,t.varValue,!0)}`,r+=e&&e.has(s)?" !important;":";")}}else r+=g(s,t[s]),r+=e&&e.has(s)?" !important;":";";return`{${r}}`},e.stylePropToCssString=g;const f={animation:function(t){return"string"==typeof t?t:Array.isArray(t)?n.arrayToCssString(t,o,","):o(t)},animationDelay:n.multiTimeToCssString,animationDuration:n.multiTimeToCssString,animationIterationCount:n.numberToCssString,animationTimingFunction:function(t){return"string"==typeof t?t:Array.isArray(t)?0===t.length?"":"number"==typeof t[0]?u(t):n.arrayToCssString(t,u,","):t.toString()},backgroundColor:i.colorToCssString,backgroundPosition:n.multiPositionToCssString,backgroundSize:n.multiSizeToCssString,baselineShift:n.lengthToCssString,border:c,borderBottom:c,borderBottomColor:i.colorToCssString,borderBottomLeftRadius:l,borderBottomRightRadius:l,borderBottomWidth:n.lengthToCssString,borderColor:function(t){return"string"==typeof t?t:t instanceof s.StringProxy?t.toString():Array.isArray(t)?n.arrayToCssString(t,i.colorToCssString," "):i.colorToCssString(t)},borderImageOutset:function t(e){return"string"==typeof e?e:"number"==typeof e?e.toString():Array.isArray(e)?n.arrayToCssString(e,t," "):e.toString()},borderImageWidth:h,borderLeft:c,borderLeftColor:i.colorToCssString,borderLeftWidth:n.lengthToCssString,borderRadius:function(t){if(Array.isArray(t)){if(Array.isArray(t[0])){let e=n.arrayToCssString(t[0],n.lengthToCssString," ");return e+=" / ",e+n.arrayToCssString(t[1],n.lengthToCssString," ")}return n.arrayToCssString(t,n.lengthToCssString," ")}return n.lengthToCssString(t)},borderRight:c,borderRightColor:i.colorToCssString,borderRightWidth:n.lengthToCssString,borderStyle:a,borderSpacing:function(t){return Array.isArray(t)?n.arrayToCssString(t,n.lengthToCssString," "):n.lengthToCssString(t)},borderTop:c,borderTopColor:i.colorToCssString,borderTopLeftRadius:l,borderTopRightRadius:l,borderTopWidth:n.lengthToCssString,borderWidth:h,bottom:n.lengthToCssString,boxShadow:function(t){return"string"==typeof t?t:Array.isArray(t)?n.stringArrayToCssString(t):t.toString()},caretColor:i.colorToCssString,clip:function(t){return"string"==typeof t?t:Array.isArray(t)?`rect(${n.arrayToCssString(t,n.lengthToCssString," ")}`:t.toString()},color:i.colorToCssString,columnGap:n.lengthToCssString,columnRule:function(t){return t?"string"==typeof t?t:n.objectToCssString(t,!1,["width",h],["style",a],["color",i.colorToCssString]):null},columnRuleColor:i.colorToCssString,columnRuleStyle:a,columnRuleWidth:h,columns:function(t){return t?"string"==typeof t?t:"number"==typeof t?t.toString():t instanceof s.StringProxy?t.toString():t[0].toString()+" "+n.lengthToCssString(t[1]):null},flex:function(t){if("string"==typeof t)return t;if("number"==typeof t)return t.toString();if(t instanceof s.StringProxy)return t.toString();if(Array.isArray(t)){if(2===t.length)return t.join(" ");{let e=t[0]+" "+t[1]+" ",r=t[2];return e+=n.lengthToCssString(r),e}}return n.lengthToCssString(t)},floodColor:i.colorToCssString,fontStyle:n.angleToCssString,gap:n.multiLengthToCssString,gridColumnGap:n.lengthToCssString,gridRowGap:n.lengthToCssString,height:n.lengthToCssString,left:n.lengthToCssString,letterSpacing:n.lengthToCssString,lightingColor:i.colorToCssString,margin:n.multiLengthToCssString,marginBottom:n.lengthToCssString,marginLeft:n.lengthToCssString,marginRight:n.lengthToCssString,marginTop:n.lengthToCssString,maxHeight:n.lengthToCssString,maxWidth:n.lengthToCssString,minHeight:n.lengthToCssString,minWidth:n.lengthToCssString,objectPosition:n.positionToCssString,outlineColor:i.colorToCssString,outlineOffset:n.lengthToCssString,outlineStyle:a,padding:n.multiLengthToCssString,paddingBottom:n.lengthToCssString,paddingLeft:n.lengthToCssString,paddingRight:n.lengthToCssString,paddingTop:n.lengthToCssString,perspective:n.lengthToCssString,perspectiveOrigin:n.positionToCssString,right:n.lengthToCssString,rowGap:n.lengthToCssString,stopColor:i.colorToCssString,tabSize:n.lengthToCssString,textDecorationColor:i.colorToCssString,textDecorationThickness:n.lengthToCssString,textEmphasisColor:i.colorToCssString,textEmphasisPosition:function(t){return Array.isArray(t)?n.stringArrayToCssString(t):n.lengthToCssString(t)},textIndent:function(t){if(Array.isArray(t)){let e=`${n.lengthToCssString(t[0])} ${t[1]}`;return t[2]&&(e+=" "+t[2]),e}return n.lengthToCssString(t)},top:n.lengthToCssString,translate:function(t){return Array.isArray(t)?n.multiLengthToCssString(t):n.lengthToCssString(t)},width:n.lengthToCssString,zoom:n.lengthToCssString};function p(t){if(!t)return"";if("string"==typeof t)return t;let e=Object.keys(t).filter(t=>"$negate"!=t);return 0===e.length?"":`${t.$negate?"not":""} (${e.map(e=>g(e,t[e])).join(") and (")})`}e.supportQueryToCssString=function(t){return t?"string"==typeof t?t:Array.isArray(t)?t.map(t=>p(t)).join(" or "):p(t):""},e.singleSupportQueryToCssString=p},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(2),n=r(1);class i extends n.Rule{constructor(t,e){super(t),this.styleset={},this.parents=[],this.important=new Set,e&&this.parseExtendedStyleset(e)}parseExtendedStyleset(t){if(t instanceof i)this.parents.push(t);else if(Array.isArray(t))for(let e of t)this.parents.push(e);else for(let e in t){let r=t[e];if("$extends"===e){let t=r;if(Array.isArray(t))for(let e of t)this.parents.push(e);else this.parents.push(t)}else if("$important"===e){let t=r;if(Array.isArray(t))for(let e of t)this.important.add(e);else this.important.add(t)}else this.styleset[e]=r}}process(t,e,r){if(super.process(t,e,r),this.parents.length>0){let t=this.styleset;this.styleset={};for(let t of this.parents)Object.assign(this.styleset,t.styleset);Object.assign(this.styleset,t)}}copyFrom(t){this.styleset=t.styleset,this.parents=t.parents,this.important=t.important}insert(t){let e=t.insertRule(`${this.geSelectorString()} ${s.stylesetToCssString(this.styleset,this.important)}`,t.cssRules.length);this.cssRule=t.cssRules[e]}get cssStyleRule(){return this.cssRule}}e.StyleRule=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0);function n(t,e,r=" "){return t&&0!==t.length?t.map(t=>e(t)).join(r):""}function i(t){return"string"==typeof t?t:t.toString()}function o(t){return(Number.isInteger(t)?t:t>-1&&t<1?Math.round(100*t):Math.round(t))+"%"}function u(t){return"string"==typeof t?t:"object"==typeof t?t.toString():o(t)}function l(t,e){return e?t+e:Number.isInteger(t)?t+"px":t>-1&&t<1?Math.round(100*t)+"%":t+"em"}function a(t){return"string"==typeof t?t:"object"==typeof t?t.toString():l(t)}function h(t,e){return 0===t?"0":e?t+e:Number.isInteger(t)?t+"deg":t+"rad"}function c(t,e){return 0===t?"0s":e?t+e:Number.isInteger(t)?t+"ms":t+"s"}function g(t){return"string"==typeof t?t:"object"==typeof t?t.toString():c(t)}function f(t){return"string"==typeof t?t:t instanceof s.StringProxy?t.toString():"object"==typeof t?d(t,!1,["w",a],["h",a]):a(t)}function p(t){return"string"==typeof t?t:t instanceof s.StringProxy?t.toString():"object"==typeof t?"xedge"in t?d(t,!1,"xedge",["x",a],"yedge",["y",a]):d(t,!1,["x",a],["y",a]):a(t)}function d(t,e,...r){if(null==t||0===r.length)return null;let s="";for(let n in r){let r="string"==typeof n?n:n[0],i="string"==typeof n?void 0:n[1],o=t[r];null!=o&&(s.length>0&&(s+=" "),e&&(s+=r),i?s+=" "+i(o):null!=o&&(s+=" "+o))}return s}e.dashToCamel=function(t){return t?t.replace(/-([a-zA-Z])/g,(t,e)=>e.toUpperCase()):t},e.camelToDash=function(t){return t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase()},e.arrayToCssString=n,e.stringArrayToCssString=function(t,e=" "){return n(t,t=>"string"==typeof t?t:t.toString())},e.numberToCssString=i,e.multiNumberToCssString=function(t){return Array.isArray(t)?n(t,i):i(t)},e.percentNumberToCssString=o,e.percentToCssString=u,e.multiPercentToCssString=function(t,e=" "){return Array.isArray(t)?n(t,u,e):u(t)},e.lengthNumberToCssString=l,e.lengthToCssString=a,e.multiLengthToCssString=function(t,e=" "){return Array.isArray(t)?n(t,a,e):a(t)},e.angleNumberToCssString=h,e.angleToCssString=function(t){return"string"==typeof t?t:"object"==typeof t?t.toString():h(t)},e.timeNumberToCssString=c,e.timeToCssString=g,e.multiTimeToCssString=function(t){return"string"==typeof t?t:"number"==typeof t?c(t):Array.isArray(t)?n(t,g):t.toString()},e.resolutionToCssString=function(t,e){return 0===t?"0":e?t+e:Number.isInteger(t)?t+"dpi":t+"dpcm"},e.sizeToCssString=f,e.multiSizeToCssString=function(t){return"string"==typeof t?t:t instanceof s.StringProxy?t.toString():Array.isArray(t)?n(t,f):f(t)},e.positionToCssString=p,e.multiPositionToCssString=function(t){return Array.isArray(t)?n(t,p):p(t)},e.objectToCssString=d},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(1),n=r(2);class i extends s.Rule{constructor(t,e,r){super(50),this.templatePropName=t,this.varValue=e,this.nameOverride=r}process(t,e,r){super.process(t,e,r),this.nameOverride?"string"==typeof this.nameOverride?this.varName=this.nameOverride:this.varName=this.nameOverride.name:this.varName=this.owner.getScopedRuleNamed(r)}get name(){return this.varName}get cssName(){return"--"+this.varName}get isRealCssRule(){return!1}clone(){let t=new i;return t.templatePropName=this.templatePropName,t.varValue=this.varValue,t.nameOverride=this.nameOverride,t}insert(t){}toCssString(){return`--${this.varName}: ${n.stylePropToCssString(this.templatePropName,this.varValue,!0)}`}}e.CustomVar=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(3);class n extends s.StyleRule{constructor(t,e){super(2,t),this.nameOverride=e}process(t,e,r){super.process(t,e,r),this.nameOverride?"string"==typeof this.nameOverride?this.className=this.nameOverride:this.className=this.nameOverride.name:this.className=this.owner.getScopedRuleNamed(r)}get name(){return this.className}get cssName(){return"."+this.className}clone(){let t=new n;return t.copyFrom(this),t.nameOverride=this.nameOverride,t}geSelectorString(){return"."+this.className}get class(){return this.className}}e.ClassRule=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(3);class n extends s.StyleRule{constructor(t,e){super(3,t),this.nameOverride=e}process(t,e,r){super.process(t,e,r),this.nameOverride?"string"==typeof this.nameOverride?this.idName=this.nameOverride:this.idName=this.nameOverride.name:this.idName=this.owner.getScopedRuleNamed(r)}get name(){return this.idName}get cssName(){return"#"+this.idName}clone(){let t=new n;return t.copyFrom(this),t.nameOverride=this.nameOverride,t}geSelectorString(){return"#"+this.idName}get id(){return this.idName}}e.IDRule=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{constructor(){}static useOptimizedStyleNames(t,e){this.useUniqueStyleNames=t,this.uniqueStyleNamesPrefix=e}static generateName(t,e){return this.useUniqueStyleNames?this.generateUniqueName(this.uniqueStyleNamesPrefix):`${t}_${e}`}static generateUniqueName(t){return(t||"n")+this.nextUniqueID++}static activate(t){if(!t)return;let e;if(t.isMultiplex){let r=document.createElement("style");document.head.appendChild(r),e=r.sheet,this.multiplexScopes.set(t,r)}else this.ensureDOM(),e=this.styleSheet;t.setDOMInfo(e),t.insert(e)}static deactivate(t){if(!t||!t.isMultiplex)return;t.clearDOMInfo();let e=this.multiplexScopes.get(t);e&&e.remove(),this.multiplexScopes.delete(t)}static addImportRule(t){this.ensureDOM();let e=this.styleSheetForImports.insertRule(t,this.styleSheetForImports.cssRules.length);return this.styleSheetForImports.cssRules[e]}static ensureDOM(){this.styleSheet||(this.styleElmForImports=document.createElement("style"),this.styleElmForImports.id="mimcssImports",document.head.appendChild(this.styleElmForImports),this.styleSheetForImports=this.styleElmForImports.sheet,this.styleElm=document.createElement("style"),this.styleElm.id="mimcssStyles",document.head.appendChild(this.styleElm),this.styleSheet=this.styleElm.sheet)}}e.TssManager=s,s.useUniqueStyleNames=!1,s.uniqueStyleNamesPrefix=void 0,s.nextUniqueID=1,s.multiplexScopes=new Map},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(10);function n(t){let e=t.toString(16);return 1===e.length?"0"+e:e}function i(t){if(t<=16777215){let e=(65280&t)>>8,r=255&t;return`#${n((16711680&t)>>16)}${n(e)}${n(r)}`}{let e=(16711680&t)>>16,r=(65280&t)>>8,s=255&t;return`#${n((4278190080&t)>>24)}${n(e)}${n(r)}${n(s)}}`}}function o(t,e,r,s){return t=this.colorSep(t),e=this.colorSep(e),r=this.colorSep(r),null==(s=null==s?null:"string"==typeof s?s:this.percent(s))?`rgb(${t},${e},${r})`:`rgba(${t},${e},${r},${s})`}function u(t,e){let r="string"==typeof t?s.Colors[t]:t;return o((16711680&r)>>16,(65280&r)>>8,255&r,e)}function l(t){return 1===t.length?a(t[0]):2===t.length?u(t[0],t[1]).toString():3===t.length?o(t[0],t[1],t[2]).toString():o(t[0],t[1],t[2],t[3]).toString()}function a(t){return"string"==typeof t?t:"number"==typeof t?i(t):Array.isArray(t)?l(t):t.toString()}e.sepToHex=n,e.colorNumberToCssString=i,e.colorSeparation=function(t){return null==t?"0":"string"==typeof t?t:Number.isInteger(t)?t.toString():this.percent(t)},e.rgb=o,e.hsl=function(t,e,r,s){return t="string"==typeof t?t:Number.isInteger(t)?t+"deg":t+"rad",e=null==e?"100%":"string"==typeof e?e:this.percent(e),r=null==r?"100%":"string"==typeof r?r:this.percent(r),null==(s=null==s?null:"string"==typeof s?s:this.percent(s))?`hsl(${t},${e},${r})`:`hsla(${t},${e},${r},${s})`},e.alpha=u,e.colorAsArrayToCssString=l,e.colorToCssString=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Colors={black:0,silver:12632256,gray:8421504,white:16777215,maroon:8388608,red:16711680,purple:8388736,fuchsia:16711935,green:32768,lime:65280,olive:8421376,yellow:16776960,navy:128,blue:255,teal:32896,aqua:65535,orange:16753920,aliceblue:15792383,antiquewhite:16444375,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,blanchedalmond:16772045,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,limegreen:3329330,linen:16445670,magenta:16711935,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,oldlace:16643558,olivedrab:7048739,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,whitesmoke:16119285,yellowgreen:10145074,rebeccapurple:6697881}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(3);class n extends s.StyleRule{constructor(t,e){super(1,e),this.tagName=t}clone(){let t=new n;return t.copyFrom(this),t.tagName=this.tagName,t}geSelectorString(){return this.tagName}get tag(){return this.tagName}}e.TagRule=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(11),n=r(6),i=r(7),o=r(0);class u{constructor(t){Array.isArray(t)?this.buf=t.slice():this.buf=[t]}get and(){return this.buf.push(", "),this}get child(){return this.buf.push(" > "),this}get descendand(){return this.buf.push(" "),this}get sibling(){return this.buf.push(" ~ "),this}get adjacent(){return this.buf.push(", "),this}raw(t){return this.buf.push(t),this}all(t){return this.buf.push(null==t?"*":`${t}|*`),this}tag(t){return this.buf.push(t),this}class(t){return this.buf.push("string"!=typeof t||t.startsWith(".")?t:"."+t),this}id(t){return this.buf.push("string"!=typeof t||t.startsWith("#")?t:"#"+t),this}attr(t,e,r,s,n){return this.buf.push(a(t,e,r,s,n)),this}get active(){return this.buf.push(":active"),this}get anyLink(){return this.buf.push(":any-link"),this}get blank(){return this.buf.push(":blank"),this}get checked(){return this.buf.push(":checked"),this}get default(){return this.buf.push(":default"),this}get defined(){return this.buf.push(":defined"),this}dir(t){return this.buf.push(":dir(${s})"),this}get disabled(){return this.buf.push(":disabled"),this}get empty(){return this.buf.push(":empty"),this}get enabled(){return this.buf.push(":enabled"),this}get first(){return this.buf.push(":first"),this}get firstChild(){return this.buf.push(":first-child"),this}get firstOfType(){return this.buf.push(":first-of-type"),this}get fullscreen(){return this.buf.push(":fullscreen"),this}get focus(){return this.buf.push(":focus"),this}get focusVisible(){return this.buf.push(":focus-visible"),this}get focusWithin(){return this.buf.push(":focus-within"),this}has(t){return this.buf.push(`:has(${t})`),this}host(t){return this.buf.push(`:host(${t})`),this}hostContext(t){return this.buf.push(`:host-context(${t})`),this}get hover(){return this.buf.push(":hover"),this}get indeterminate(){return this.buf.push(":indeterminate"),this}get inRange(){return this.buf.push(":in-range"),this}get invalid(){return this.buf.push(":invalid"),this}is(t){return this.buf.push(`:is(${t})`),this}lang(t){return this.buf.push(`:lang(${t})`),this}get lastChild(){return this.buf.push(":last-child"),this}get lastOfType(){return this.buf.push(":last-of-type"),this}get left(){return this.buf.push(":left"),this}get link(){return this.buf.push(":link"),this}not(t){return this.buf.push(`:not(${t})`),this}nthChild(t,e){return this.buf.push(`:nth-child(${l(t,e)})`),this}nthLastChild(t,e){return this.buf.push(`:nth-last-child(${l(t,e)})`),this}nthLastOfType(t,e){return this.buf.push(`:nth-last-of-type(${l(t,e)})`),this}nthOfType(t,e){return this.buf.push(`:nth-of-type(${l(t,e)})`),this}get onlyChild(){return this.buf.push(":only-child"),this}get onlyOfType(){return this.buf.push(":only-of-type"),this}get optional(){return this.buf.push(":optional"),this}get outOfRange(){return this.buf.push(":out-of-range"),this}get placeholderShown(){return this.buf.push(":placeholder-shown"),this}get readOnly(){return this.buf.push(":read-only"),this}get readWrite(){return this.buf.push(":read-write"),this}get required(){return this.buf.push(":required"),this}get right(){return this.buf.push(":right"),this}get root(){return this.buf.push(":root"),this}get scope(){return this.buf.push(":scope"),this}get target(){return this.buf.push(":target"),this}get valid(){return this.buf.push(":valid"),this}get visited(){return this.buf.push(":visited"),this}where(t){return this.buf.push(`:where(${t})`),this}get after(){return this.buf.push("::after"),this}get backdrop(){return this.buf.push("::backdrop"),this}get before(){return this.buf.push("::before"),this}get cue(){return this.buf.push("::cue"),this}get firstLetter(){return this.buf.push("::first-letter"),this}get firstLine(){return this.buf.push("::first-line"),this}get grammarError(){return this.buf.push("::grammar-error"),this}get marker(){return this.buf.push("::marker"),this}part(t){return this.buf.push(`::part(${t})`),this}get placeholder(){return this.buf.push("::placeholder"),this}get selection(){return this.buf.push("::selection"),this}slotted(t){return this.buf.push(`::slotted(${t})`),this}get spellingError(){return this.buf.push("::spelling-error"),this}toCssString(){return this.buf.map(t=>t instanceof s.TagRule?t.tagName:t instanceof n.ClassRule?"."+t.className:t instanceof i.IDRule?"#"+t.idName:t instanceof o.StringProxy?t.toString():t instanceof u?t.toCssString():t).join("")}}function l(t,e){return null==e?t.toString():`${t}n${e>=0?`+${e}`:`-${-e}`}`}function a(t,e,r,s,n){return`[${t}${e?`${e}"${r}"`:""}${s?" i":n?" s":""}]`}e.Selector=u,e.nth=l,e.attr=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(14),n=r(2),i=r(1),o=r(3);class u extends i.Rule{constructor(t,e){super(5),t&&(this.keyframeRules=t.map(t=>new l(t))),this.nameOverride=e}process(t,e,r){super.process(t,e,r),this.nameOverride?"string"==typeof this.nameOverride?this.animationName=this.nameOverride:this.animationName=this.nameOverride.name:this.animationName=this.owner.getScopedRuleNamed(r);for(let s of this.keyframeRules)s.process(t,e,r)}get name(){return this.animationName}get cssName(){return this.animationName}clone(){let t=new u;return t.keyframeRules=this.keyframeRules.map(t=>t.clone()),t.nameOverride=this.nameOverride,t}insert(t){let e=t.insertRule(`@keyframes ${this.animationName} {}`,t.cssRules.length);this.cssRule=t.cssRules[e];let r=this.cssRule;for(let t of this.keyframeRules)r.appendRule(t.toCssString())}get cssKeyframesRule(){return this.cssRule}}e.AnimationRule=u;class l extends o.StyleRule{constructor(t){super(6,t?t[1]:void 0),t&&(this.waypointString=this.parseWaypoint(t[0]))}parseWaypoint(t){return"string"==typeof t?t:Number.isInteger(t)?t+"%":s.tsh.percent(t)}clone(){let t=new l;return t.copyFrom(this),t.waypointString=this.waypointString,t}toCssString(){return`${this.waypointString} ${n.stylesetToCssString(this.styleset,this.important)}`}geSelectorString(){return this.waypointString}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0),n=r(4),i=r(9),o=r(2);e.tsh=class{static raw(t){return new s.StringProxy(t)}static val(t,e){return o.stylePropToCssString(t,e,!0)}static rgb(t,e,r,n){return new s.StringProxy(i.rgb(t,e,r,n))}static hsl(t,e,r,n){return new s.StringProxy(i.hsl(t,e,r,n))}static alpha(t,e){return new s.StringProxy(i.alpha(t,e))}static percent(t){return n.percentNumberToCssString(t)}static Q(t){return t+"Q"}static ch(t){return t+"ch"}static cm(t){return t+"cm"}static em(t){return t+"em"}static ex(t){return t+"ex"}static ic(t){return t+"ic"}static in(t){return t+"in"}static lh(t){return t+"lh"}static mm(t){return t+"mm"}static pc(t){return t+"pc"}static pt(t){return t+"pt"}static px(t){return t+"px"}static vb(t){return t+"vb"}static vh(t){return t+"vh"}static vi(t){return t+"vi"}static vw(t){return t+"vw"}static rem(t){return t+"rem"}static rlh(t){return t+"rlh"}static vmax(t){return t+"vmax"}static vmin(t){return t+"vmin"}static len(t,e){return n.lengthNumberToCssString(t,e)}static deg(t){return t+"deg"}static rad(t){return t+"rad"}static grad(t){return t+"grad"}static turn(t){return t+"turn"}static angle(t,e){return n.angleNumberToCssString(t,e)}static s(t){return t+"s"}static ms(t){return t+"ms"}static time(t,e){return n.timeNumberToCssString(t,e)}static hz(t){return t+"Hz"}static khz(t){}static dpi(t){return t+"dpi"}static dpcm(t){return t+"dpcm"}static dppx(t){return t+"dppx"}static resolution(t,e){return n.resolutionToCssString(t,e)}static fr(t){return t+"fr"}static custom(t,e){return{varDef:t,varValue:e}}static var(t,e){return new s.VarValue(t,e)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(16);class n extends s.RuleContainer{constructor(t,e){super(t,e)}process(t,e,r){super.process(t,e,r),this.processRules()}get cssGroupRule(){return this.cssRule}}e.GroupRule=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(1),n=r(6),i=r(7),o=r(13),u=r(5);class l extends s.Rule{constructor(t,e){super(t),this.definitionClass=e}get classes(){return this._classes}get ids(){return this._ids}get animations(){return this._animations}get vars(){return this._vars}get rules(){return this._rules}get varRule(){return this._varRule}processRules(){if(this.isProcessed)return;let t;if(this._allNames={},this._classes={},this._ids={},this._animations={},this._vars={},this._rules={},this._allRules=[],this._varRule=new a,this._varRule.process(this,this.owner,null),this._allRules.push(this._varRule),"function"==typeof this.definitionClass)try{t=new this.definitionClass}catch(t){return void console.error(`Error instantiating Rule Definition of type '${this.definitionClass.name}'`)}else t=this.definitionClass;this.processNamedRules(t)}processNamedRules(t){for(let e in t){if("$unnamed"===e){let e=t.$unnamed;this.processUnnamedRules(e);continue}let r=t[e];if(!(r instanceof s.Rule))continue;let l=e,a=r;51!==a.type?(a.owner&&(a=a.clone()),a.process(this,this.owner,l),a.isRealCssRule&&(this._rules[l]=a,this._allRules.push(a)),a instanceof n.ClassRule?(this._allNames[l]=a.className,this._classes[l]=a.className):a instanceof i.IDRule?(this._allNames[l]=a.idName,this._ids[l]=a.idName):a instanceof o.AnimationRule?(this._allNames[l]=a.animationName,this._animations[l]=a.animationName):a instanceof u.CustomVar&&(this._allNames[l]=a.varName,this._vars[l]=a.varName,this._varRule._vars[l]=a)):this.owner.addImportedScope(a)}}processUnnamedRules(t){if(t&&0!==t.length)for(let e of t)51!==e.type?(e.owner&&(e=e.clone()),e.process(this,this.owner,null),this._allRules.push(e)):this.owner.addImportedScope(e)}copyFrom(t){}insertRules(t){for(let e of this._allRules)e.insert(t)}get isProcessed(){return!!this._rules}}e.RuleContainer=l;class a extends s.Rule{constructor(){super(CSSRule.STYLE_RULE)}get vars(){return this._vars}process(t,e,r){super.process(t,e,r),this._vars={}}clone(){return null}insert(t){let e=Object.keys(this._vars);if(0===e.length)return;let r=`:root {${e.map(t=>this._vars[t].toCssString()).join(";")}}`,s=t.insertRule(r,t.cssRules.length);this.cssRule=t.cssRules[s]}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(4);function n(t){return"string"==typeof t?t:t+"px"}function i(t){if(!t)return null;let e=t.$mediaType,r=t.$only,s=t.$negate,n=[];e&&n.push((r?"only ":"")+e);for(let e in t)e.startsWith("$")||t[e]&&n.push(`(${o(e,t[e])})`);return`${s?"not ":""}${n.join(" and ")}`}function o(t,e,r){if(!t||null==e)return null;let n=u[t];for(;n;)if("string"==typeof n)n=u[n];else{if("object"!=typeof n)break;n=u[n.treatAs]}let i,o=s.camelToDash(t),l="object"==typeof n?n.defaultValue:void 0;if(void 0!==l&&e===l)return r?"":o;let a="function"==typeof n?n:"object"==typeof n?n.convert:void 0;return i=a?a(e):"string"==typeof e?e:Array.isArray(e)?s.arrayToCssString(e,t=>null==t?"":t.toString()):e.toString(),r?i:o+":"+i}e.mediaQueryToCssString=function(t){return t?Array.isArray(t)?t.map(t=>i(t)).join(", "):i(t):null},e.singleMediaQueryToCssString=i,e.mediaFeatureToCssString=o;let u={aspectRatio:function(t){return"string"==typeof t?t:t[0]+"/"+t[1]},minAspectRatio:"aspectRatio",maxAspectRatio:"aspectRatio",color:{defaultValue:0},minColor:"color",maxColor:"color",colorIndex:{defaultValue:0},minColorIndex:"color",maxColorIndex:"color",height:n,minHeight:"height",maxHeight:"height",monochrome:{defaultValue:0},minMonochrome:"monochrome",maxMonochrome:"monochrome",resolution:function(t){return"string"==typeof t?t:t+"dpi"},minResolution:"resolution",maxResolution:"resolution",width:n,minWidth:"width",maxWidth:"width"}},function(t,e,r){"use strict";function s(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),s(r(0)),s(r(10)),s(r(19)),s(r(26)),s(r(28)),s(r(14))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(11),n=r(6),i=r(7),o=r(20),u=r(13),l=r(5),a=r(21),h=r(22),c=r(23),g=r(24);e.$tag=function(t,e){return new s.TagRule(t,e)},e.$class=function(t,e){return new n.ClassRule(t,e)},e.$id=function(t,e){return new i.IDRule(t,e)},e.$rule=function(t,e){return new o.SelectorRule(t,e)},e.$animation=function(t,e){return new u.AnimationRule(t,e)},e.$custom=function(t,e,r){return new l.CustomVar(t,e,r)},e.$supports=function(t,e){return new a.SupportsRule(t,e)},e.$media=function(t,e){return new h.MediaRule(t,e)},e.$import=function(t,e){return new c.ImportRule(t,e)},e.$fontface=function(t){return new g.FontFaceRule(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(3),n=r(12);class i extends s.StyleRule{constructor(t,e){super(4,e),this.selector=new n.Selector(t)}clone(){let t=new i;return t.copyFrom(this),t.selector=this.selector,t}geSelectorString(){return this.selector.toCssString()}get selectorText(){return this.selector.toCssString()}}e.SelectorRule=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(15),n=r(2);class i extends s.GroupRule{constructor(t,e){super(7,e),this.queryString=n.supportQueryToCssString(t)}clone(){let t=new i;return t.queryString=this.queryString,t}insert(t){if(!CSS.supports(this.queryString))return;let e=t.insertRule(`@supports ${this.queryString} {}`,t.cssRules.length);this.cssRule=t.cssRules[e],this.insertRules(this.cssSupportsRule)}get cssSupportsRule(){return this.cssRule}}e.SupportsRule=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(15),n=r(17);class i extends s.GroupRule{constructor(t,e){super(8,e),this.query=t}clone(){let t=new i;return t.query=this.query,t}insert(t){let e="string"==typeof this.query?this.query:n.mediaQueryToCssString(this.query),r=t.insertRule(`@media ${e} {}`,t.cssRules.length);this.cssRule=t.cssRules[r],this.insertRules(this.cssMediaRule)}get cssMediaRule(){return this.cssRule}}e.MediaRule=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(1),n=r(17),i=r(8);class o extends s.Rule{constructor(t,e){super(10),this.url=t,this.query=e}clone(){let t=new o;return t.url=this.url,t.query=this.query,t}insert(t){let e;if(!this.url)return;e=this.url.startsWith("url")||this.url.startsWith('"')||this.url.startsWith("'")?this.url:`url(${this.url})`;let r=this.query?"string"==typeof this.query?this.query:n.mediaQueryToCssString(this.query):"";this.cssRule=i.TssManager.addImportRule(`@import ${e} ${r}`)}get cssImportRule(){return this.cssRule}}e.ImportRule=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(25),n=r(1);class i extends n.Rule{constructor(t){super(9),this.fontface=t}clone(){let t=new i;return t.fontface={},Object.assign(this.fontface,this.fontface),t}insert(t){let e=t.insertRule(`@font-face ${s.fontFaceToCssString(this.fontface)}`,t.cssRules.length);this.cssRule=t.cssRules[e]}get cssFontFaceRule(){return this.cssRule}}e.FontFaceRule=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(4);function n(t){return"string"==typeof t?t:"number"==typeof t?t+"%":`${t[0]}% ${t[1]}%`}function i(t){if("string"==typeof t)return t;if("number"==typeof t)return`oblique ${t}deg`;{let e="oblique ";return"string"==typeof t[0]?e+=t[0]:e+=`${t[0]}deg`,t[1]&&(e+=" ","string"==typeof t[1]?e+=t[1]:e+=`${t[1]}deg`),e}}function o(t){return"string"==typeof t?t:"number"==typeof t?t.toString():`${t[0].toString()} ${t[1].toString()}`}function u(t){return"string"!=typeof t&&Array.isArray(t)?t.map(t=>l(t)).join(","):l(t)}function l(t){if("string"==typeof t)return t.startsWith("local(")||t.startsWith("url(")?t:`url(${t})`;if("local"in t)return`local(${t.local})`;{let e=`url(${t.url})`;return t.format&&(e+=" format(","string"==typeof t.format?e+=`"${t.format}"`:e+=t.format.map(t=>`"${t}"`).join(","),e+=")"),e}}e.fontFaceToCssString=function(t){if(!t||!t.fontFamily)return null;let e="{";for(let r in t){e+=`${s.camelToDash(r)}:`;let l=t[r];e+="fontStretch"===r?n(l):"fontStyle"===r?i(l):"fontWeight"===r?o(l):"src"===r?u(l):l,e+=";"}return e+"}"},e.fontStretchToCssString=n,e.fontStyleToCssString=i,e.fontWeightToCssString=o,e.fontSrcToCssString=u,e.fontSingleSrcToCssString=l},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(27);function n(t){if(t.isMultiplex)return new s.StyleScope(t);{let e=t.styleScope;return e||(e=new s.StyleScope(t),t.styleScope=e),e}}e.$use=n,e.$activate=function(t){let e=n(t);return e.activate(),e};const i=r(8);e.useOptimizedStyleNames=function(t,e){i.TssManager.useOptimizedStyleNames(t,e)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(8),n=r(16);class i extends n.RuleContainer{constructor(t){super(51,t),this.definitionClass=t,this.activationRefCount=0,this.importedScopes=[],this.processScope()}get isRealCssRule(){return!1}clone(){return null}insert(t){super.insertRules(this.cssStyleSheet)}processScope(){this.isProcessed||(super.process(this,this,null),this.isMultiplex=!!this.definitionClass.isMultiplex,this.name=this.definitionClass.name,this.name||(this.name=s.TssManager.generateUniqueName("s")),this.processRules())}addImportedScope(t){this.importedScopes.push(t)}getScopedRuleNamed(t){return t in this._allNames?this._allNames[t]:this.generateScopedName(t)}generateScopedName(t){return this.isMultiplex?s.TssManager.generateUniqueName():s.TssManager.generateName(this.name,t)}activate(){for(let t of this.importedScopes)t.activate();1!=++this.activationRefCount||this.isActivated||s.TssManager.activate(this)}deactivate(){if(0!==this.activationRefCount){for(let t of this.importedScopes)t.deactivate();0==--this.activationRefCount&&this.isActivated&&s.TssManager.deactivate(this)}}setDOMInfo(t){this.cssStyleSheet=t}clearDOMInfo(){this.cssStyleSheet=void 0}get isActivated(){return!!this.cssStyleSheet}}e.StyleScope=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=r(0),n=r(12);e.SelectorHelper=class{static raw(t){return new s.StringProxy(t)}static all(t){return null==t?"*":`${t}|*`}static attr(t,e,r,i,o){return new s.StringProxy(n.attr(t,e,r,i,o))}static tag(t){return new s.StringProxy(t)}static rtl(){return new s.StringProxy(":dir(rtl)")}static ltr(){return new s.StringProxy(":dir(ltr)")}static has(t){return new s.StringProxy(`:has(${t})`)}static host(t){return new s.StringProxy(`:host(${t})`)}static hostContext(t){return new s.StringProxy(`:host-context(${t})`)}static is(t){return new s.StringProxy(`:is(${t})`)}static lang(t){return new s.StringProxy(`:lang(${t})`)}static not(t){return new s.StringProxy(`:not(${t})`)}static nthChild(t,e){return new s.StringProxy(`:nth-child(${n.nth(t,e)})`)}static nthLastChild(t,e){return new s.StringProxy(`:nth-last-child(${n.nth(t,e)})`)}static nthLastOfType(t,e){return new s.StringProxy(`:nth-last-of-type(${n.nth(t,e)})`)}static nthOfType(t,e){return new s.StringProxy(`:nth-of-type(${n.nth(t,e)})`)}static where(t){return new s.StringProxy(`:where(${t})`)}static part(t){return new s.StringProxy(`::part(${t})`)}static slotted(t){return new s.StringProxy(`::slotted(${t})`)}},e.$selector=function(){return new n.Selector}}])}));
//# sourceMappingURL=mimcss.js.map