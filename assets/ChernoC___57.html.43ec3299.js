import{_ as n,f as s}from"./app.5bafefdc.js";const a={},p=s(`<h1 id="_57-c-\u7684\u9759\u6001\u6570\u7EC4-std-array" tabindex="-1"><a class="header-anchor" href="#_57-c-\u7684\u9759\u6001\u6570\u7EC4-std-array" aria-hidden="true">#</a> 57. C++\u7684\u9759\u6001\u6570\u7EC4(std::array)</h1><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;array&gt;</span></span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>array<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">&gt;</span> data<span class="token punctuation">;</span>
	data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
	data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;zhao&quot;</span><span class="token punctuation">;</span>
	data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u601D\u742A&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4F20\u7EDF\u7684\u521B\u5EFA\u6570\u7EC4\u65B9\u5F0F\uFF0C\u65E0\u6CD5\u901A\u8FC7\u51FD\u6570\u83B7\u53D6\u6570\u7EC4\u957F\u5EA6\u3002</p><p>\u800C\u9759\u6001\u6570\u7EC4\u83B7\u53D6\u957F\u5EA6\u65B9\u5F0F\uFF0C\u5185\u5B58\u4E2D\u5E76\u6CA1\u6709\u957F\u5EA6\u7684\u53D8\u91CF\uFF0C\u800C\u662F\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u5DF2\u7ECF\u83B7\u53D6\u5230\u7684\u5E38\u6570\u3002 \u5E76\u4E14\u4ED6\u4E5F\u662F\u6808\u4E2D\u521B\u5EFA\u7684\u3002</p>`,4);function t(e,o){return p}var r=n(a,[["render",t]]);export{r as default};
