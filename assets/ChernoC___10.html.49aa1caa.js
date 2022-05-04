import{_ as a,f as n}from"./app.7279925a.js";const e={},s=n(`<h1 id="_10-c-\u5934\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_10-c-\u5934\u6587\u4EF6" aria-hidden="true">#</a> 10. C++\u5934\u6587\u4EF6</h1><p>\u5934\u6587\u4EF6\u603B\u662F\u5305\u542B\u5728\u5176\u4ED6\u5730\u65B9\uFF0C\u4E3A\u4EC0\u4E48\uFF1F</p><h2 id="\u4E0D\u5149\u53EA\u662F\u58F0\u660E\u60F3\u8981\u7684\u58F0\u660E-\u5728\u591A\u4E2A\u6587\u4EF6\u4E2D\u4F7F\u7528\u3002" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5149\u53EA\u662F\u58F0\u660E\u60F3\u8981\u7684\u58F0\u660E-\u5728\u591A\u4E2A\u6587\u4EF6\u4E2D\u4F7F\u7528\u3002" aria-hidden="true">#</a> \u4E0D\u5149\u53EA\u662F\u58F0\u660E\u60F3\u8981\u7684\u58F0\u660E\uFF0C\u5728\u591A\u4E2A\u6587\u4EF6\u4E2D\u4F7F\u7528\u3002</h2><p>\u6211\u4EEC\u9700\u8981\u5728\u4E00\u4E2A\u516C\u5171\u7684\u5730\u65B9\u58F0\u660E\u51FD\u6570\uFF0C\u4EE5\u4F9B\u5176\u4ED6\u5730\u65B9\u4F7F\u7528\uFF0C\u53EA\u662F\u58F0\u660E\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5B58\u5728\u3002 <code>#pragma once</code></p><p>\u76D1\u7763\u5934\u6587\u4EF6\uFF0C\u963B\u6B62\u5355\u4E2A\u5934\u6587\u4EF6\u591A\u6B21\u88AB\u5305\u542B\uFF0C\u5E76\u8F6C\u6362\u4E3A\u5355\u4E2A\u7FFB\u8BD1\u5355\u5143\u3002 \u4E5F\u5C31\u662F\u8BF4\u591A\u6B21\u88AB#include\u7684\u65F6\u5019\uFF0C\u8BE5\u5934\u6587\u4EF6\u7684\u51FD\u6570\u6307\u6325\u88AB\u7FFB\u8BD1\u4E00\u6B21\u3002</p><h2 id="\u540C\u6837\u7684\u6548\u679C-\u5934\u6587\u4EF6\u4FDD\u62A4\u7B26" tabindex="-1"><a class="header-anchor" href="#\u540C\u6837\u7684\u6548\u679C-\u5934\u6587\u4EF6\u4FDD\u62A4\u7B26" aria-hidden="true">#</a> \u540C\u6837\u7684\u6548\u679C - \u5934\u6587\u4EF6\u4FDD\u62A4\u7B26</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">_LOG_H </span><span class="token comment">//\u5982\u679C\u88AB\u58F0\u660E</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">_LOG_H</span> <span class="token comment">//\u58F0\u660E</span></span>
<span class="token comment">//\u58F0\u660E\u7684\u51FD\u6570</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span>  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>#pragma</code></p><h2 id="include-\u548C-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#include-\u548C-\u7684\u533A\u522B" aria-hidden="true">#</a> include &quot;&quot;\u548C&lt;&gt; \u7684\u533A\u522B</h2><p>&lt;&gt; \u5BF9\u4E8E\u7F16\u8BD1\u5668\u5305\u542B\u8DEF\u5F84 &quot;&quot; \u53EF\u4EE5\u505A\u4E00\u4E14\uFF0C\u4F46\u901A\u5E38\u7528\u4E8E\u5BFB\u627E\u76F8\u5BF9\u8DEF\u5F84\u4E2D\u7684\u4EE3\u7801</p><h2 id="instream-\u4E3A\u4EC0\u4E48\u6CA1\u6709\u6269\u5C55\u540D-\u53EA\u662F\u4E00\u4E2A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#instream-\u4E3A\u4EC0\u4E48\u6CA1\u6709\u6269\u5C55\u540D-\u53EA\u662F\u4E00\u4E2A\u6587\u4EF6" aria-hidden="true">#</a> <code>&lt;instream&gt;</code>\u4E3A\u4EC0\u4E48\u6CA1\u6709\u6269\u5C55\u540D\uFF0C\u53EA\u662F\u4E00\u4E2A\u6587\u4EF6</h2><p>\u7F16\u5199C++\u6807\u51C6\u5E93\u7684\u5C06 C++\u6807\u51C6\u5E93\u548Cc\u6807\u51C6\u5E93\u533A\u5206</p><p>\u603B\u7ED3</p><blockquote><p>\u670D\u52A1\u4E8E\u4EE3\u7801/\u7A0B\u5E8F\u7684\u590D\u7528\u3002</p></blockquote>`,14);function c(r,p){return s}var o=a(e,[["render",c]]);export{o as default};
