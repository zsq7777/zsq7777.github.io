import{_ as a,f as e}from"./app.c9d61a15.js";var n="/assets/image.cf93e7f8.png";const i={},r=e('<h1 id="_07-c-\u94FE\u63A5\u5668\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#_07-c-\u94FE\u63A5\u5668\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> 07. C++\u94FE\u63A5\u5668\u662F\u5982\u4F55\u5DE5\u4F5C\u7684</h1><h2 id="linker\u7684\u4E3B\u8981\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#linker\u7684\u4E3B\u8981\u4F5C\u7528" aria-hidden="true">#</a> Linker\u7684\u4E3B\u8981\u4F5C\u7528</h2><p>\u5F53\u7F16\u8BD1\u5668\u5C06\u6587\u4EF6\u7F16\u8BD1\u597D\u540E\uFF0Clinker\u627E\u5230\u6BCF\u4E2A\u7B26\u53F7\u548C\u51FD\u6570\u5728\u54EA\u91CC\uFF0C\u5E76\u5C06\u5B83\u4EEC\u94FE\u63A5\u8D77\u6765\u3002 \u5373\u4F7F\u6CA1\u6709\u7528\u5230\u5916\u90E8\u6587\u4EF6\u7684\u51FD\u6570\uFF0C\u4F9D\u7136\u9700\u8981linker\uFF0C\u7A0B\u5E8F\u4ECD\u7136\u9700\u8981\u5165\u53E3\uFF0C\u627E\u5230main\u51FD\u6570\uFF0C\u6240\u4EE5\u4ECD\u7136\u9700\u8981\u5C06main\u51FD\u6570\u94FE\u63A5\u8D77\u6765\u3002</p><ul><li>\u7F16\u8BD1\u6709\u4E24\u4E2A\u9636\u6BB5 \u7F16\u8BD1,linker</li></ul><p>\u5F53\u6CA1\u6709Main\u51FD\u6570\u65F6\uFF0C\u4F60\u4F1A\u53D1\u73B0\uFF0C\u7F16\u8BD1\u6B63\u786E\u4F46Linker\u9519\u8BEF\u3002</p><p><img src="'+n+`" alt="\u56FE\u7247" loading="lazy"></p><p><strong>\u5165\u53E3\u70B9\u4E0D\u4E00\u662F\u65F6Main\u51FD\u6570\uFF0C\u53EA\u8981\u662F\u4E00\u4E2A\u5165\u53E3\u70B9\u5C31\u884C\u4E86</strong></p><h2 id="static-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#static-\u5173\u952E\u5B57" aria-hidden="true">#</a> static \u5173\u952E\u5B57</h2><ul><li>\u7B2C\u4E00\u6B65\uFF1A \u4E00\u4E2A\u58F0\u660E\u4E86\u65B9\u6CD5\u4F46\u672A\u5B9A\u4E49\u7684\u51FD\u6570</li><li>\u7B2C\u4E8C\u6B65\uFF1A \u5176\u4ED6\u65B9\u6CD5\u8C03\u7528\u8BE5\u65B9\u6CD5\u4F1A\u51FA\u73B0linker\u9519\u8BEF\uFF0C\u867D\u7136\u8BE5\u65B9\u6CD5\u672A\u5728main\u51FD\u6570\u4E2D\u4F7F\u7528\u3002 \u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u8FD9\u79CD\u9519\u8BEF\uFF1F \u56E0\u4E3A\u8BE5\u65B9\u6CD5\u4E5F\u6709\u53EF\u80FD\u5728\u5176\u4ED6\u6587\u4EF6\u4E2D\u88AB\u4F7F\u7528</li><li>\u7B2C\u4E09\u6B65\uFF1A\u6211\u4EEC\u4F7F\u7528static\u5173\u952E\u5B57\uFF0C\u53EA\u5728\u5F53\u524D\u6587\u4EF6\u8C03\u7528\uFF0C\u800C\u5982\u679C\u7A0B\u5E8F\u4E2D\u672A\u4F7F\u7528\u5230\u8BE5\u51FD\u6570\uFF0C\u90A3\u4E48\u5728linker\u4E0D\u751F\u6548\u3002</li></ul><h2 id="\u8C03\u7528\u51FD\u6570\u65F6-\u6211\u4EEC\u9700\u8981\u51C6\u786E\u4E00\u81F4\u7684\u624D\u53EF\u4EE5\u88ABlinker\u53D1\u73B0" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u51FD\u6570\u65F6-\u6211\u4EEC\u9700\u8981\u51C6\u786E\u4E00\u81F4\u7684\u624D\u53EF\u4EE5\u88ABlinker\u53D1\u73B0" aria-hidden="true">#</a> \u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u51C6\u786E\u4E00\u81F4\u7684\u624D\u53EF\u4EE5\u88ABLinker\u53D1\u73B0</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>\u8FD4\u56DE\u503C \u51FD\u6570\u540D \u53C2\u6570  \u90FD\u5FC5\u987B\u4E0E\u8C03\u7528\u4E00\u81F4
<span class="token keyword">void</span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E24\u4E2A\u76F8\u540C\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A\u76F8\u540C\u7684\u51FD\u6570" aria-hidden="true">#</a> \u4E24\u4E2A\u76F8\u540C\u7684\u51FD\u6570</h2><p>\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u7F16\u8BD1\u65F6\u5C31\u4F1A\u51FA\u73B0\u9519\u8BEF\u3002 \u4F46\u5982\u679C\u6211\u4EEC\u5C06\u5176\u4E2D\u4E00\u4E2A\u51FD\u6570\u653E\u5165Main\u6587\u4EF6\u4E2D\u7F16\u8BD1\uFF0C\u5C31\u4F1A\u51FA\u73B0linker\u9519\u8BEF\uFF0Clinker\u4E0D\u77E5\u9053\u5E94\u8BE5\u94FE\u63A5\u5230Log.cpp\u8FD8\u662FMian.cpp\uFF0C\u6240\u4EE5\u62A5\u9519\u3002</p><h3 id="\u5728\u5934\u6587\u4EF6\u4E2D\u5B9A\u4E49\u51FD\u6570-\u4E0D\u540C\u7684cpp\u6587\u4EF6\u4E2D\u4F7F\u7528-\u4E5F\u4F1A\u51FA\u73B0linker\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5728\u5934\u6587\u4EF6\u4E2D\u5B9A\u4E49\u51FD\u6570-\u4E0D\u540C\u7684cpp\u6587\u4EF6\u4E2D\u4F7F\u7528-\u4E5F\u4F1A\u51FA\u73B0linker\u9519\u8BEF" aria-hidden="true">#</a> \u5728\u5934\u6587\u4EF6\u4E2D\u5B9A\u4E49\u51FD\u6570\uFF0C\u4E0D\u540C\u7684cpp\u6587\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u4E5F\u4F1A\u51FA\u73B0linker\u9519\u8BEF</h3><p>\u539F\u56E0\uFF1A\u5F53\u6211\u4EEC\u5305\u542B\u5934\u6587\u4EF6\u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u5C06\u5934\u6587\u4EF6\u7684\u4EE3\u7801\u62F7\u8D1D\u5230\u8BE5\u5904\u3002</p><h3 id="\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> \u5982\u4F55\u89E3\u51B3</h3><ol><li>static \u5C06\u51FD\u6570\u6807\u8BB0\u4E3A\u9759\u6001\u7684\uFF0Clinker\u94FE\u63A5\u65F6\u53EA\u610F\u5473\u7740\u8FD9\u662F\u5185\u90E8\u51FD\u6570\u3002</li><li>inline \u83B7\u53D6\u5B9E\u9645\u7684\u51FD\u6570\u4F53\u5E76\u5C06\u51FD\u6570\u8C03\u7528\u66FF\u6362\u4E3A\u51FD\u6570\u4F53\u3002</li><li>\u4E0D\u5C06\u51FD\u6570\u5B9A\u4E49\u81F3\u5934\u6587\u4EF6\uFF0C\u800C\u53EA\u505A\u51FD\u6570\u58F0\u660E\uFF0C\u5C06\u51FD\u6570\u5B9A\u4E49\u81F3cpp\u6587\u4EF6\u4E2D\uFF0C\u5728\u8C03\u7528\u65F6include\u5934\u6587\u4EF6\u8C03\u7528\u51FD\u6570\u3002</li></ol><h2 id="\u52A8\u6001\u94FE\u63A5-\u9759\u6001\u94FE\u63A5\u7B49" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u94FE\u63A5-\u9759\u6001\u94FE\u63A5\u7B49" aria-hidden="true">#</a> \u52A8\u6001\u94FE\u63A5 \u9759\u6001\u94FE\u63A5\u7B49</h2><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>linker\u7684\u5173\u952E\u5728\u4E8Ecpp\u6587\u4EF6\u53CA\u5176\u51FD\u6570\u4E4B\u95F4\u7684\u8C03\u7528\uFF0C\u4E3A\u4E86\u8FBE\u6210\u8FD9\u6837\u7684\u529F\u80FD\u3002\u9700\u8981\u4E00\u79CD\u5BFB\u627E\u673A\u5236\uFF0C\u5982\u51FD\u6570\u552F\u4E00\u6027\uFF0C\u591Acpp\u6587\u4EF6\u5F15\u5165\u5934\u6587\u4EF6\u3002 static\u5173\u952E\u5B57 \u5728\u6807\u8BB0\u51FD\u6570\u65F6\uFF0C\u8868\u793A\u8BE5\u6570\u636E\u6210\u5458\u90A3\u5C31\u662F\u7C7B\u5185\u7684\u9759\u6001\u6570\u636E\u6210\u5458\u3002</p>`,20);function s(l,c){return r}var t=a(i,[["render",s]]);export{t as default};
