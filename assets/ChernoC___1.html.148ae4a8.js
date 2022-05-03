import{_ as n,r as c,o,a as h,b as a,d as t,F as s,f as i,e}from"./app.5bafefdc.js";const d={},p=i('<h1 id="_01-\u6B22\u8FCE\u6765\u5230c" tabindex="-1"><a class="header-anchor" href="#_01-\u6B22\u8FCE\u6765\u5230c" aria-hidden="true">#</a> 01. \u6B22\u8FCE\u6765\u5230C++</h1><h2 id="c-\u4E3B\u8981\u7528\u5728\u90A3\u4E9B\u5730\u65B9" tabindex="-1"><a class="header-anchor" href="#c-\u4E3B\u8981\u7528\u5728\u90A3\u4E9B\u5730\u65B9" aria-hidden="true">#</a> C++\u4E3B\u8981\u7528\u5728\u90A3\u4E9B\u5730\u65B9</h2><p>C++\u5728\u8BA1\u7B97\u673A\u7CFB\u7EDF\u4E2D\u7684\u5E94\u7528\u6709\u54EA\u4E9B\uFF0C\u5982\u6E38\u620F\uFF0C\u786C\u4EF6\u63A7\u5236\uFF0Ccpu\u5BC6\u96C6\u578B\u4EFB\u52A1\u4E2D\u90FD\u4F1A\u4F7F\u7528\u5230\u4ED6\u3002 \u4E3A\u4EC0\u4E48\uFF1F</p><h2 id="\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u5DE5\u4F5C\u539F\u7406</h2><p>C++\u4EE3\u7801-&gt;\u9001\u53BB\u7F16\u8BD1\u5668-&gt;\u7F16\u8BD1\u5668\u7F16\u8BD1\u76EE\u6807\u5E73\u53F0\uFF08\u5982\uFF1Aarm64_v8a x86_64\uFF09\u673A\u5668\u7801-&gt;cpu\u6839\u636E\u6307\u4EE4\u8FD0\u884C</p><p>java\u4EE3\u7801-&gt;\u7F16\u8BD1class\u6587\u4EF6\uFF08\u5B57\u8282\u7801\uFF09-&gt;\u9001\u53BBjava\u865A\u62DF\u673A\u8FD0\u884C-&gt;java\u865A\u62DF\u673A\u8FD0\u884C\u65F6\u7FFB\u8BD1\u4E3A\u5BF9\u5E94\u5E73\u53F0\u673A\u5668\u7801-&gt;cpu\u6839\u636E\u6307\u4EE4\u8FD0\u884C</p><p>\u4F18\u52BF\u5728\u4E8Ec++\u65E0\u9700\u8FD0\u884C\u65F6\u7684\u7FFB\u8BD1\u5DE5\u4F5C\u3002 \u4F46\u662Fjava\u8BED\u8A00\u53EF\u4EE5\u505A\u8FD0\u884C\u65F6\u4F18\u5316\u3002 \u8FD9\u610F\u5473\u7740\uFF0C\u5982\u679C\u5199\u5783\u573E\u4EE3\u7801\uFF0C\u4ED6\u7684\u8FD0\u884C\u4F1A\u6BD4java\u66F4\u6162\u3002</p><p>\u73B0\u9636\u6BB5\u51E0\u4E4E\u6240\u6709\u7684\u8BED\u8A00\u90FD\u4F9D\u8D56\u4E8EC\uFF0C\u56E0\u4E3A\u4E3B\u6D41\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6807\u51C6\u5E93\u51FD\u6570\u90FD\u7531\u6709C\u548C\u6C47\u7F16\u5B8C\u6210\u3002</p><p>\u89E3\u91CA\u578B\u7684\u8BED\u8A00\u96BE\u70B9\u5728\u4E8E\u89E3\u91CA\u5668\uFF0C\u4F46\u5982\u679C\u89E3\u91CA\u5668\u4E0D\u4F9D\u8D56\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u90A3\u4E48\u8BED\u8A00\u672C\u8EAB\u4E5F\u53EF\u4EE5\u505A\u5230\u4E0D\u4F9D\u8D56\u3002</p><p>\u5982JNode\u53EA\u7528\u4E86\u4E24\u79CD\u8BED\u8A00java\u548C\u6C47\u7F16</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li><p>\u7531\u4E8EC++\u7F16\u8BD1\u5668\u53EF\u7F16\u8BD1\u51FA\u7CFB\u7EDF\u6240\u5E94\u7528\u7684\u5E73\u53F0\u7684\u53EF\u6267\u884C\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u65E0\u9700Java\u7B49\u8BED\u8A00\u7684\u7FFB\u8BD1\u8FC7\u7A0B\uFF0C\u6240\u4EE5\u6267\u884C\u6548\u7387\u6700\u9AD8\u3002\u800C\u4E14\uFF0C\u7531\u4E8E\u4E3B\u6D41\u64CD\u4F5C\u7CFB\u7EDF\u4E3B\u8981\u7531C\u548C\u6C47\u7F16\u7F16\u5199\uFF0C\u90A3\u4E48\u5728\u8FD9\u4E9B\u8BED\u8A00\u7684\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u51E0\u4E4E\u65E0\u6CD5\u907F\u514D\u4F7F\u7528FFI\uFF08\u8BED\u8A00\u4EA4\u4E92\u63A5\u53E3\uFF09\u3002</p></li><li><p>ABI\uFF08\u5E94\u7528\u4E8C\u8FDB\u5236\u63A5\u53E3\uFF09\u63D0\u4F9B\u4E86C/C++\u5E93\u7684\u8DE8\u5E73\u53F0\u88AB\u8C03\u7528\u7684\u80FD\u529B\u3002</p></li></ul><h2 id="\u4E3A\u4EC0\u4E48c-\u5FC5\u5B66\u4E0D\u53EF" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48c-\u5FC5\u5B66\u4E0D\u53EF" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48C++\u5FC5\u5B66\u4E0D\u53EF</h2><p>\u5E02\u9762\u4E0A\u901A\u7528\u7684\u8BED\u8A00\u90FD\u5B9E\u73B0\u4E86\u8BED\u8A00\u4EA4\u4E92\u63A5\u53E3(Foreign Function Interface)\uFF0C\u7B80\u79F0FFI\u3002 \u4E5F\u53EF\u4EE5\u8BA4\u4E3A\u4ED6\u662F\u8BED\u8A00\u4E2D\u7684\u901A\u7528\u534F\u8BAE\u3002</p>',14),_=e("\u53C2\u8003\uFF1A "),l={href:"https://www.infoq.cn/article/PQi0LYV7HhmsgHkPzkJI",target:"_blank",rel:"noopener noreferrer"},f=e("C \u4E0D\u518D\u662F\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00"),u={href:"https://gankra.github.io/blah/c-isnt-a-language/",target:"_blank",rel:"noopener noreferrer"},g=e("\u539F\u6587");function C(x,b){const r=c("ExternalLinkIcon");return o(),h(s,null,[p,a("p",null,[_,a("a",l,[f,t(r)]),a("a",u,[g,t(r)])])],64)}var v=n(d,[["render",C]]);export{v as default};
