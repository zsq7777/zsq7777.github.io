import{_ as a,f as e}from"./app.7ad50c40.js";const r={},h=e('<h1 id="_09-c-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_09-c-\u51FD\u6570" aria-hidden="true">#</a> 09. C++\u51FD\u6570</h1><p>\u51FD\u6570\u5C31\u662F\u6211\u4EEC\u5199\u7684\u4EE3\u7801\u5757\uFF0C\u88AB\u8BBE\u8BA1\u6765\u6267\u884C\u7279\u5B9A\u7684\u4EFB\u52A1\u3002 \u5728class\u4E2D\uFF0C\u8FD9\u4E9B\u4EE3\u7801\u5757\u88AB\u79F0\u4E3A\u65B9\u6CD5\u3002</p><h2 id="\u51FD\u6570\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u4F5C\u7528" aria-hidden="true">#</a> \u51FD\u6570\u7684\u4F5C\u7528</h2><h3 id="\u907F\u514D\u91CD\u590D\u76F8\u540C\u7684\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u91CD\u590D\u76F8\u540C\u7684\u4EE3\u7801" aria-hidden="true">#</a> \u907F\u514D\u91CD\u590D\u76F8\u540C\u7684\u4EE3\u7801</h3><p>\u867D\u7136\u4E5F\u53EF\u4EE5\u590D\u5236\u7C98\u8D34\uFF0C\u4F46\u662F\u4F1A\u5F62\u6210\u4EE3\u7801\u6DF7\u4E71\uFF0C\u5F53\u8BE5\u4EE3\u7801\u5757\u9700\u8981\u66F4\u6539\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u6240\u6709\u7528\u5230\u7684\u5730\u65B9\u4FEE\u6539\u3002</p><p>\u51FD\u6570\u6709\u4E00\u4E2A\u8F93\u5165\uFF0C\u4E00\u4E2A\u8F93\u51FA</p><blockquote><p>\u7ECF\u5E38\u590D\u5236\u7C98\u8D34\u4EE3\u7801\uFF0C\u5F88\u5BB9\u6613\u6211\u4EEC\u5FD8\u8BB0\u67D0\u4E00\u4E2A\u53D8\u91CF\u7684\u540D\u79F0\u5FD8\u8BB0\u4FEE\u6539\uFF0C\u800C\u5BFC\u81F4\u4E0E\u9884\u671F\u7684\u7ED3\u679C\u4E0D\u7B26\u3002\uFF08\u8FD9\u5B9E\u9645\u4E0A\u4E5F\u662F\u6211\u4EEC\u5DE5\u4F5C\u4E2D\u7ECF\u5E38\u9047\u5230\u7684\uFF09</p></blockquote><h2 id="\u51FD\u6570\u7684\u5F62\u6210-\u53EF\u4EE5\u662F\u4E00\u4E2A\u8BA1\u7B97-\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u8FC7\u7A0B-\u5B83\u4E3B\u8981\u5E2E\u52A9\u6211\u4EEC\u63D0\u5347\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u590D\u7528\u6027" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u5F62\u6210-\u53EF\u4EE5\u662F\u4E00\u4E2A\u8BA1\u7B97-\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u8FC7\u7A0B-\u5B83\u4E3B\u8981\u5E2E\u52A9\u6211\u4EEC\u63D0\u5347\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u590D\u7528\u6027" aria-hidden="true">#</a> \u51FD\u6570\u7684\u5F62\u6210\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u8BA1\u7B97\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u8FC7\u7A0B\uFF0C\u5B83\u4E3B\u8981\u5E2E\u52A9\u6211\u4EEC\u63D0\u5347\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u590D\u7528\u6027</h2><h2 id="\u8C03\u7528\u51FD\u6570\u65F6" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u51FD\u6570\u65F6" aria-hidden="true">#</a> \u8C03\u7528\u51FD\u6570\u65F6</h2><p>\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u7F16\u8BD1\u5668\u751F\u6210\u4E00\u4E2Acall\u6307\u4EE4\u3002 \u4E3A\u4E86\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u7CFB\u7EDF\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5806\u6808\u7ED3\u6784\uFF0C\u8FD9\u610F\u5473\u7740\u9700\u8981\u628A\u50CF\u53C2\u6570\u4E00\u6837\u7684\u4E1C\u897F\u5806\u8FDB\u5806\u6808\uFF0C\u8FD8\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u53EB\u505A\u201C\u8FD4\u56DE\u5730\u5740\u201D\u7684\u4E1C\u897F\uFF0C\u538B\u5165\u5806\u6808\uFF0C\u7136\u540E\u5C31\u662F\u6211\u4EEC\u5C31\u662F\u9700\u8981\u8DF3\u5230\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u7684\u4E0D\u540C\u90E8\u5206\uFF0C\u4EE5\u4FBF\u5F00\u59CB\u6267\u884C\u6211\u4EEC\u7684\u51FD\u6570\u6307\u4EE4\uFF0C\u7136\u540E\u4E3A\u4E86\u5C06push\u7684\u7ED3\u679C\u8FD4\u56DE\uFF0C\u6211\u4EEC\u5F97\u56DE\u53BB\u5230\u8C03\u7528\u51FD\u6570\u4E4B\u524D\u3002 \u5C31\u50CF\u5728\u5185\u5B58\u4E2D\u8DF3\u8DC3\uFF0C\u6267\u884C\u51FD\u6570\u3002 \u8FD9\u4E9B\u8DF3\u8DC3\u548C\u6267\u884C\u90FD\u9700\u8981\u65F6\u95F4\u3002</p><h2 id="\u5185\u8054\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5185\u8054\u51FD\u6570" aria-hidden="true">#</a> \u5185\u8054\u51FD\u6570</h2><p>\u5185\u8054\u51FD\u6570\u4E0D\u9700\u8981\u505A\u8C03\u7528\uFF0C\u800C\u662F\u76F4\u63A5\u62F7\u8D1D\u51FD\u6570\u4F53\u7684\u4EE3\u7801\u5757\u5230\u5BF9\u5E94\u7684\u4F4D\u7F6E\u3002</p><h2 id="\u53EA\u6709main\u51FD\u6570\u88AB\u6307\u5B9A\u4E86\u8FD4\u56DE\u7C7B\u578B\u800C\u65E0\u9700\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u53EA\u6709main\u51FD\u6570\u88AB\u6307\u5B9A\u4E86\u8FD4\u56DE\u7C7B\u578B\u800C\u65E0\u9700\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u53EA\u6709Main\u51FD\u6570\u88AB\u6307\u5B9A\u4E86\u8FD4\u56DE\u7C7B\u578B\u800C\u65E0\u9700\u8FD4\u56DE\u503C</h2><blockquote><p>\u5728\u7F16\u8BD1\u6A21\u5F0F\u4E0B\uFF0C\u5982\u679C\u51FD\u6570\u672A\u88AB\u4F7F\u7528\uFF0C\u90A3\u4E48\u4F1A\u88AB\u7F16\u8BD1\u5668\u81EA\u52A8\u4F18\u5316\u3002</p></blockquote>',14);function d(i,c){return h}var t=a(r,[["render",d]]);export{t as default};
