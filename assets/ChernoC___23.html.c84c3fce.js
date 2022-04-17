import{_ as n,f as s}from"./app.b38bafeb.js";const a={},p=s(`<h1 id="_23-c-\u4E2D\u7684\u5C40\u90E8\u9759\u6001" tabindex="-1"><a class="header-anchor" href="#_23-c-\u4E2D\u7684\u5C40\u90E8\u9759\u6001" aria-hidden="true">#</a> 23.C++\u4E2D\u7684\u5C40\u90E8\u9759\u6001</h1><p>\u5C40\u90E8\u4F5C\u7528\u57DF\u58F0\u660E\u9759\u6001\u53D8\u91CF\uFF1A</p><h2 id="\u53D8\u91CF\u751F\u5B58\u671F" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u751F\u5B58\u671F" aria-hidden="true">#</a> \u53D8\u91CF\u751F\u5B58\u671F</h2><p>\u5728\u88AB\u5220\u9664\u4E4B\u524D\uFF0C\u4F1A\u5728\u5185\u5B58\u4E2D\u5B58\u5728\u591A\u4E45</p><h2 id="\u53D8\u91CF\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u53D8\u91CF\u4F5C\u7528\u57DF</h2><p>\u53EF\u4EE5\u8BBF\u95EE\u53D8\u91CF\u7684\u8303\u56F4\uFF0C\u5728\u51FD\u6570\u5185\u90E8\u58F0\u660E\u53D8\u91CF\uFF0C\u5728\u51FD\u6570\u5916\u90E8\u662F\u65E0\u6CD5\u8BBF\u95EE\u7684\u3002\u56E0\u4E3A\u6211\u4EEC\u58F0\u660E\u7684\u662F\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u3002</p><h2 id="\u9759\u6001\u5C40\u90E8\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C40\u90E8\u53D8\u91CF" aria-hidden="true">#</a> \u9759\u6001\u5C40\u90E8\u53D8\u91CF</h2><p>\u751F\u5B58\u671F\u57FA\u672C\u76F8\u5F53\u4E8E\u6574\u4E2A\u7A0B\u5E8F\u7684\u751F\u5B58\u671F\uFF0C\u4F46\u662F\u5B83\u7684\u4F5C\u7528\u8303\u56F4\u88AB\u9650\u5236\u5728\u51FD\u6570\u5185\u3002 \u5728\u4EFB\u4F55\u5C40\u90E8\u90FD\u662F\u8FD9\u6837\uFF0Cif\uFF0Cfor \u4EE3\u7801\u5757\u4E2D</p><p>\u9759\u6001\u5C40\u90E8\u53D8\u91CF\u548C\u9759\u6001\u5168\u5C40\u53D8\u91CF\u751F\u5468\u671F\u5B9E\u9645\u662F\u76F8\u540C\u7684</p><p>\u53EF\u4EE5\u5728\u5916\u90E8\u5B9A\u4E49\u53D8\u91CF\u5B9E\u73B0\u540C\u6837\u7684\u6548\u679C\uFF0C\u6216\u662F\u4F7F\u7528\u7C7B\uFF08\u7C7B\u4E2D\u521B\u5EFA\u9759\u6001\u5168\u5C40\u53D8\u91CF\uFF09\u3002</p><h2 id="\u5355\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B" aria-hidden="true">#</a> \u5355\u4F8B</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
class Single <span class="token punctuation">{</span>

public<span class="token operator">:</span>
	<span class="token keyword">static</span> Single<span class="token operator">&amp;</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
		<span class="token keyword">static</span> Single single<span class="token punctuation">;</span>
		<span class="token keyword">return</span> single<span class="token punctuation">;</span> 
	<span class="token punctuation">}</span>
	 <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Single<span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,12);function t(e,c){return p}var l=n(a,[["render",t]]);export{l as default};
