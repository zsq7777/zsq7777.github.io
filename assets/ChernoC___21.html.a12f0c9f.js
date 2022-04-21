import{_ as a,f as s}from"./app.d43339be.js";var n="/assets/image.a3cddcb8.png";const e={},t=s(`<h1 id="_21-c-\u4E2D\u7684\u9759\u6001" tabindex="-1"><a class="header-anchor" href="#_21-c-\u4E2D\u7684\u9759\u6001" aria-hidden="true">#</a> 21. C++\u4E2D\u7684\u9759\u6001</h1><p>static\u5728C++\u4E2D\u67092\u79CD\u5206\u522B\uFF0C\u6839\u636E\u4E0A\u4E0B\u6587\u533A\u5206</p><h2 id="\u7C7B\u6216\u7ED3\u6784\u4F53\u5916\u90E8\u4F7F\u7528static\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6216\u7ED3\u6784\u4F53\u5916\u90E8\u4F7F\u7528static\u5173\u952E\u5B57" aria-hidden="true">#</a> \u7C7B\u6216\u7ED3\u6784\u4F53\u5916\u90E8\u4F7F\u7528static\u5173\u952E\u5B57</h2><p>\u7C7B\u5916\u9762\u7684static\uFF0C\u4EE5\u4E3A\u4F60\u7533\u660E\u4E3Astatic\u7684\u51FD\u6570\uFF0C\u94FE\u63A5\u53EA\u662F\u5728\u5185\u90E8\uFF0C\u53EA\u80FD\u5BF9\u4F60\u5B9A\u4E49\u5B83\u7684\u7FFB\u8BD1\u5355\u5143\u53EF\u89C1\u3002</p><h2 id="\u7C7B\u6216\u7ED3\u6784\u4F53\u5185\u90E8\u4F7F\u7528static\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6216\u7ED3\u6784\u4F53\u5185\u90E8\u4F7F\u7528static\u5173\u952E\u5B57" aria-hidden="true">#</a> \u7C7B\u6216\u7ED3\u6784\u4F53\u5185\u90E8\u4F7F\u7528static\u5173\u952E\u5B57</h2><p>\u4E0E\u7C7B\u7684\u6240\u6709\u5B9E\u4F8B\u5171\u4EAB\u5185\u5B58\uFF0C\u6240\u6709\u8BE5\u7C7B\u7684\u5B9E\u4F8B\u53EA\u6709\u8FD9\u4E00\u4E2A\u9759\u6001\u53D8\u91CF\u3002 \u4E5F\u9002\u7528\u4E8E\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u5728\u7C7B\u4E2D\u6CA1\u6709\u5B9E\u4F8B\u4F1A\u4F20\u9012\u8BE5\u65B9\u6CD5</p><h2 id="todo-\u9759\u6001static\u5728\u7C7B\u6216\u7ED3\u6784\u4F53\u8303\u56F4\u5185\u7684\u5B9E\u9645\u542B\u4E49" tabindex="-1"><a class="header-anchor" href="#todo-\u9759\u6001static\u5728\u7C7B\u6216\u7ED3\u6784\u4F53\u8303\u56F4\u5185\u7684\u5B9E\u9645\u542B\u4E49" aria-hidden="true">#</a> //TODO \u9759\u6001static\u5728\u7C7B\u6216\u7ED3\u6784\u4F53\u8303\u56F4\u5185\u7684\u5B9E\u9645\u542B\u4E49</h2><h2 id="\u7C7B\u548C\u7ED3\u6784\u4F53\u7684\u5916\u90E8\u9759\u6001" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u548C\u7ED3\u6784\u4F53\u7684\u5916\u90E8\u9759\u6001" aria-hidden="true">#</a> \u7C7B\u548C\u7ED3\u6784\u4F53\u7684\u5916\u90E8\u9759\u6001</h2><p>linker\u4E0D\u4F1A\u518D\u8FD9\u4E2A\u7FFB\u8BD1\u5355\u5143\u7684\u4F5C\u7528\u57DF\u4E4B\u5916\uFF0C\u5BFB\u627E\u8FD9\u4E2A\u7B26\u53F7\u7684\u5B9A\u4E49</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//Static.cpp</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> s_Variable <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">//\u8BE5\u53D8\u91CF\u53EA\u5728\u6587\u4EF6\u5185\u90E8\u94FE\u63A5 \uFF0C\u5916\u90E8\u4E0D\u8BBF\u95EE\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//Main.cpp</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token keyword">int</span> s_Variable <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> 
 <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> s_Variable <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u50CF\u4E0A\u9762\u8FD9\u6837\u8FD0\u884C\u662F\u6CA1\u95EE\u9898</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//Static.cpp</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> s_Variable <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">//\u8BE5\u53D8\u91CF\u53EA\u5728\u6587\u4EF6\u5185\u90E8\u94FE\u63A5 \uFF0C\u5916\u90E8\u4E0D\u8BBF\u95EE\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5F53\u6539\u6210\u8FD9\u6837\uFF1A \u5C31\u4F1A\u63D0\u793A\u94FE\u63A5\u5F02\u5E38\uFF0C\u5728\u5176\u4ED6\u7FFB\u8BD1\u5355\u5143\u5DF2\u7ECF\u5B9A\u4E49 <img src="`+n+`" alt="\u56FE\u7247" loading="lazy"></p><h2 id="extern-\u4FEE\u6539\u53D8\u91CF\u7684\u5B9E\u9645\u6307\u5411-\u8BA9\u4ED6\u53BB\u5916\u90E8\u7FFB\u8BD1\u5355\u5143\u5BFB\u627E" tabindex="-1"><a class="header-anchor" href="#extern-\u4FEE\u6539\u53D8\u91CF\u7684\u5B9E\u9645\u6307\u5411-\u8BA9\u4ED6\u53BB\u5916\u90E8\u7FFB\u8BD1\u5355\u5143\u5BFB\u627E" aria-hidden="true">#</a> extern \u4FEE\u6539\u53D8\u91CF\u7684\u5B9E\u9645\u6307\u5411\uFF0C\u8BA9\u4ED6\u53BB\u5916\u90E8\u7FFB\u8BD1\u5355\u5143\u5BFB\u627E</h2><blockquote><p>\u8FD9\u88AB\u79F0\u4E3Aexternal linkage\u6216external linking</p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token keyword">extern</span> <span class="token keyword">int</span>  s_Variable <span class="token punctuation">;</span> 
 <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> s_Variable <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u94FE\u63A5\u5668\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u90FD\u4E0D\u4F1A\u770B\u5230\u88ABstatic\u4FEE\u9970\u7684\u53D8\u91CF-\u53EA\u6709\u5B83\u6240\u5728\u7684\u7FFB\u8BD1\u5355\u5143\u53EF\u4EE5\u627E\u5230" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5\u5668\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u90FD\u4E0D\u4F1A\u770B\u5230\u88ABstatic\u4FEE\u9970\u7684\u53D8\u91CF-\u53EA\u6709\u5B83\u6240\u5728\u7684\u7FFB\u8BD1\u5355\u5143\u53EF\u4EE5\u627E\u5230" aria-hidden="true">#</a> \u94FE\u63A5\u5668\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u90FD\u4E0D\u4F1A\u770B\u5230\u88ABstatic\u4FEE\u9970\u7684\u53D8\u91CF\uFF0C\u53EA\u6709\u5B83\u6240\u5728\u7684\u7FFB\u8BD1\u5355\u5143\u53EF\u4EE5\u627E\u5230</h3><h2 id="\u51FD\u6570\u88ABstatic\u4FEE\u9970" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u88ABstatic\u4FEE\u9970" aria-hidden="true">#</a> \u51FD\u6570\u88ABstatic\u4FEE\u9970</h2><p>static\u4FEE\u9970\u51FD\u6570\u65F6\uFF0C\u4E5F\u610F\u5473\u7740\u5B83\u53EA\u80FD\u88AB\u7FFB\u8BD1\u5355\u5143\u5185\u94FE\u63A5\uFF0C\u800C\u4E0D\u80FD\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u770B\u5230</p><ul><li>\u5728\u5934\u6587\u4EF6\u4E2D\u4F7F\u7528\u65F6\uFF0C\u4E5F\u53EA\u662F\u5C06\u8FD9\u4E2A\u9759\u6001\u53D8\u91CF\u7684\u4EE3\u7801\u62F7\u8D1D\u5230\u4E0D\u540C\u7684\u7FFB\u8BD1\u5355\u5143\u3002</li></ul><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5982\u679C\u4E0D\u9700\u8981\u5168\u5C40\u53D8\u91CF\uFF0C\u5C31\u5C3D\u53EF\u80FD\u591A\u7684\u4F7F\u7528\u9759\u6001\u53D8\u91CF\uFF0C\u56E0\u4E3A\u4E00\u65E6\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u7533\u660E\u4E1C\u897F\u7684\u65F6\u5019\uFF0C\u6CA1\u6709\u7533\u660Estatic\uFF0C\u94FE\u63A5\u5668\u5C31\u4F1A\u8DE8\u7F16\u8BD1\u5355\u5143\u8FDB\u884C\u94FE\u63A5\uFF0C\u8FD9\u610F\u5473\u5DF2\u7ECF\u521B\u5EFA\u4E86\u4E00\u4E2A\u5168\u5C40\u7684\u53D8\u91CF\u3002</p><p>\u5728\u4EFB\u4F55\u5730\u65B9\u4F7F\u7528\uFF0C\u5F88\u5BB9\u6613\u9020\u6210bug\u3002\u6240\u4EE5\u5168\u5C40\u53D8\u91CF\u8981\u614E\u7528</p><p>\u91CD\u70B9\uFF1A \u8981\u8BA9\u51FD\u6570\u548C\u53D8\u91CF\u6807\u8BB0\u4E3Astatic\uFF0C\u9664\u975E\u4F60\u771F\u7684\u9700\u8981\u4ED6\u4EEC\u8DE8\u7FFB\u8BD1\u5355\u5143\u94FE\u63A5</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u5728\u7C7B\u6216\u7ED3\u6784\u4F53\u7684\u5916\u90E8\u4F7F\u7528static\u4FEE\u9970\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u4F1A\u8BA9\u4ED6\u4EEC\u62E5\u6709\u4E0D\u88AB\u5916\u90E8\u7FFB\u8BD1\u5355\u5143\u94FE\u63A5\u7684\u80FD\u529B\u3002\u5C11\u7528\u5168\u5C40\u53D8\u91CF\uFF0C\u8FD9\u53EF\u80FD\u9020\u6210\u4EE3\u7801\u6DF7\u4E71\u3002</p>`,27);function p(c,r){return t}var l=a(e,[["render",p]]);export{l as default};
