(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{487:function(t,e,a){"use strict";a.r(e);var s=a(44),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security considerations")]),t._v(" "),a("p",[t._v("JSON Schema, if properly used, can replace data sanitisation. It doesn't replace other API security considerations. It also introduces additional security aspects to consider.")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#security-contact"}},[t._v("Security contact")])]),a("li",[a("a",{attrs:{href:"#untrusted-schemas"}},[t._v("Untrusted schemas")])]),a("li",[a("a",{attrs:{href:"#circular-references-in-javascript-objects"}},[t._v("Circular references in JavaScript objects")])]),a("li",[a("a",{attrs:{href:"#security-risks-of-trusted-schemas"}},[t._v("Security risks of trusted schemas")])]),a("li",[a("a",{attrs:{href:"#redos-attack"}},[t._v("ReDoS attack")])]),a("li",[a("a",{attrs:{href:"#content-security-policy"}},[t._v("Content Security Policy")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"security-contact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-contact"}},[t._v("#")]),t._v(" Security contact")]),t._v(" "),a("p",[t._v("To report a security vulnerability, please use the\n"),a("a",{attrs:{href:"https://tidelift.com/security",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tidelift security contact"),a("OutboundLink")],1),t._v(".\nTidelift will coordinate the fix and disclosure. Please do NOT report security vulnerabilities via GitHub issues.")]),t._v(" "),a("h2",{attrs:{id:"untrusted-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#untrusted-schemas"}},[t._v("#")]),t._v(" Untrusted schemas")]),t._v(" "),a("p",[t._v("Ajv treats JSON schemas as trusted as your application code. This security model is based on the most common use case, when the schemas are static and bundled together with the application.")]),t._v(" "),a("p",[t._v("If your schemas are received from untrusted sources (or generated from untrusted data) there are several scenarios you need to prevent:")]),t._v(" "),a("ul",[a("li",[t._v("compiling schemas can cause stack overflow (if they are too deep)")]),t._v(" "),a("li",[t._v("compiling schemas can be slow (e.g. "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/557",target:"_blank",rel:"noopener noreferrer"}},[t._v("#557"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("validating certain data can be slow")])]),t._v(" "),a("p",[t._v("It is difficult to predict all the scenarios, but at the very least it may help to limit the size of untrusted schemas (e.g. limit JSON string length) and also the maximum schema object depth (that can be high for relatively small JSON strings). You also may want to mitigate slow regular expressions in "),a("code",[t._v("pattern")]),t._v(" and "),a("code",[t._v("patternProperties")]),t._v(" keywords.")]),t._v(" "),a("p",[t._v("Regardless the measures you take, using untrusted schemas increases security risks.")]),t._v(" "),a("h2",{attrs:{id:"circular-references-in-javascript-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#circular-references-in-javascript-objects"}},[t._v("#")]),t._v(" Circular references in JavaScript objects")]),t._v(" "),a("p",[t._v("Ajv does not support schemas and validated data that have circular references in objects. See "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/802",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue #802"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("An attempt to compile such schemas or validate such data would cause stack overflow (or will not complete in case of asynchronous validation). Depending on the parser you use, untrusted data can lead to circular references.")]),t._v(" "),a("h2",{attrs:{id:"security-risks-of-trusted-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-risks-of-trusted-schemas"}},[t._v("#")]),t._v(" Security risks of trusted schemas")]),t._v(" "),a("p",[t._v("Some keywords in JSON Schemas can lead to very slow validation for certain data. These keywords include (but may be not limited to):")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pattern")]),t._v(" and "),a("code",[t._v("format")]),t._v(" for large strings - in some cases using "),a("code",[t._v("maxLength")]),t._v(" can help mitigate it, but certain regular expressions can lead to exponential validation time even with relatively short strings (see "),a("a",{attrs:{href:"#redos-attack"}},[t._v("ReDoS attack")]),t._v(").")]),t._v(" "),a("li",[a("code",[t._v("patternProperties")]),t._v(" for large property names - use "),a("code",[t._v("propertyNames")]),t._v(" to mitigate, but some regular expressions can have exponential evaluation time as well.")]),t._v(" "),a("li",[a("code",[t._v("uniqueItems")]),t._v(" for large non-scalar arrays - use "),a("code",[t._v("maxItems")]),t._v(" to mitigate")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Do NOT use allErrors in production")]),t._v(" "),a("p",[t._v("The suggestions above to prevent slow validation would only work if you do NOT use "),a("code",[t._v("allErrors: true")]),t._v(" in production code (using it would continue validation after validation errors).")])]),t._v(" "),a("p",[t._v("You can validate your JSON schemas against "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/lib/refs/json-schema-secure.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("this meta-schema"),a("OutboundLink")],1),t._v(" to check that these recommendations are followed:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ajv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("strictTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this option is required for this schema")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isSchemaSecure "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv/lib/refs/json-schema-secure.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSchemaSecure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maxLength"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_LENGTH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSchemaSecure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Untrusted data")]),t._v(" "),a("p",[t._v("Following all these recommendation is not a guarantee that validation using of untrusted data is safe - it can still lead to some undesirable results.")])]),t._v(" "),a("h2",{attrs:{id:"redos-attack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redos-attack"}},[t._v("#")]),t._v(" ReDoS attack")]),t._v(" "),a("p",[t._v("Certain regular expressions can lead to the exponential evaluation time even with relatively short strings.")]),t._v(" "),a("p",[t._v("Please assess the regular expressions you use in the schemas on their vulnerability to this attack - see "),a("a",{attrs:{href:"https://github.com/substack/safe-regex",target:"_blank",rel:"noopener noreferrer"}},[t._v("safe-regex"),a("OutboundLink")],1),t._v(", for example.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ReDoS attack")]),t._v(" "),a("p",[t._v("Some formats that "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats"),a("OutboundLink")],1),t._v(" package implements use "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats/blob/master/src/formats.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("regular expressions"),a("OutboundLink")],1),t._v(" that can be vulnerable to ReDoS attack.")])]),t._v(" "),a("p",[t._v("If you use Ajv to validate data from untrusted sources "),a("strong",[t._v("it is strongly recommended")]),t._v(" to consider the following:")]),t._v(" "),a("ul",[a("li",[t._v('making assessment of "format" implementations in '),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("passing "),a("code",[t._v('"fast"')]),t._v(" option to ajv-formats plugin (see its docs) that simplifies some of the regular expressions (although it does not guarantee that they are safe).")]),t._v(" "),a("li",[t._v('replacing format implementations provided by ajv-formats with your own implementations of "format" keyword that either use different regular expressions or another approach to format validation. Please see '),a("a",{attrs:{href:"#api-addformat"}},[t._v("addFormat")]),t._v(" method.")]),t._v(" "),a("li",[t._v('disabling format validation by ignoring "format" keyword with option '),a("code",[t._v("format: false")])])]),t._v(" "),a("p",[t._v("Whatever mitigation you choose, please assume all formats provided by ajv-formats as potentially unsafe and make your own assessment of their suitability for your validation scenarios.")]),t._v(" "),a("h2",{attrs:{id:"content-security-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy"}},[t._v("#")]),t._v(" Content Security Policy")]),t._v(" "),a("p",[t._v("When using Ajv in a browser page with enabled Content Security Policy (CSP), "),a("code",[t._v("script-src")]),t._v(" directive must include "),a("code",[t._v("'unsafe-eval'")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Cross-site scripting attacks")]),t._v(" "),a("p",[a("code",[t._v("unsafe-eval")]),t._v(" is NOT recommended in a secure CSP"),a("a",{attrs:{href:"https://developer.chrome.com/extensions/contentSecurityPolicy#relaxing-eval",target:"_blank",rel:"noopener noreferrer"}},[t._v("[1]"),a("OutboundLink")],1),t._v(", as it has the potential to open the document to cross-site scripting (XSS) attacks.")])]),t._v(" "),a("p",[t._v("In order to use Ajv without relaxing CSP, you can "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-cli#compile-schemas",target:"_blank",rel:"noopener noreferrer"}},[t._v("compile the schemas using CLI"),a("OutboundLink")],1),t._v(" or programmatically in your build code - see "),a("RouterLink",{attrs:{to:"/standalone.html"}},[t._v("Standalone validation code")]),t._v(". Compiled JavaScript file can export one or several validation functions that have the same code as the schemas compiled at runtime.")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);