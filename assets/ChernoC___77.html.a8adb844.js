import{_ as n,f as a}from"./app.593d268f.js";const s={},t=a(`<h1 id="_77-\u5355\u4E00\u53D8\u91CF\u5B58\u653E\u591A\u79CD\u6570\u636E\u7C7B\u578B-variant" tabindex="-1"><a class="header-anchor" href="#_77-\u5355\u4E00\u53D8\u91CF\u5B58\u653E\u591A\u79CD\u6570\u636E\u7C7B\u578B-variant" aria-hidden="true">#</a> 77. \u5355\u4E00\u53D8\u91CF\u5B58\u653E\u591A\u79CD\u6570\u636E\u7C7B\u578B(variant)</h1><p>\u5BF9\u4E8E\u591A\u79CD\u7C7B\u578B\u7684\u5904\u7406\u3002</p><p>\u5982\u6211\u6709\u4E00\u7EC4\u7C7B\u578B\u4E0D\u540C\u7684\u6570\u636E\uFF0C\u6BCF\u4E2A\u7C7B\u578B\u53EA\u5B58\u5728\u4E00\u4E2A\uFF0C\u4F46\u662F\u6211\u9700\u8981\u6309\u7167\u7C7B\u578B\u505A\u4E0D\u540C\u7684\u5904\u7406\u3002\u8FD9\u65F6\uFF0C\u4F7F\u7528variant\u5C31\u662F\u5F88\u597D\u7684\u9009\u62E9\u3002</p><p>\u4ED6\u5C31\u50CF\u7C7B\u578B\u5B89\u5168\u7684Union\u3002</p><h2 id="\u4E00\u4E2A\u53D8\u91CF\u6709\u591A\u79CD\u6570\u636E\u7C7B\u578B\u7684\u53EF\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u53D8\u91CF\u6709\u591A\u79CD\u6570\u636E\u7C7B\u578B\u7684\u53EF\u80FD" aria-hidden="true">#</a> \u4E00\u4E2A\u53D8\u91CF\u6709\u591A\u79CD\u6570\u636E\u7C7B\u578B\u7684\u53EF\u80FD</h2><h3 id="_1-1-\u83B7\u53D6\u6307\u5B9A\u7C7B\u578B\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#_1-1-\u83B7\u53D6\u6307\u5B9A\u7C7B\u578B\u7684\u503C" aria-hidden="true">#</a> 1.1 \u83B7\u53D6\u6307\u5B9A\u7C7B\u578B\u7684\u503C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	std<span class="token operator">::</span>variant<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> data<span class="token punctuation">;</span>
	data <span class="token operator">=</span> <span class="token string">&quot;zz&quot;</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>get<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
	data <span class="token operator">=</span> <span class="token number">27</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>get<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u5728\u91CC\uFF0Cdata\u6BCF\u6B21\u8D4B\u503C\uFF0C\u4E0A\u9762\u7684\u7C7B\u578B\u88AB\u8986\u76D6\u3002</p><p>\u6240\u4EE5\uFF0C\u5982\u679Cget\u7684data\u4E0D\u662F\u503C\u771F\u6B63\u7684\u7C7B\u578B\uFF0C\u5C06\u629B\u51FA\u5F02\u5E38 \u3002 \u6216\u662F \uFF0C\u4F7F\u7528get_if</p><h3 id="_1-2-\u4F7F\u7528get-if\u5224\u65AD\u662F\u5426\u6709\u8BE5\u7C7B\u578B\u7684\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4F7F\u7528get-if\u5224\u65AD\u662F\u5426\u6709\u8BE5\u7C7B\u578B\u7684\u6307\u9488" aria-hidden="true">#</a> 1.2 \u4F7F\u7528get_if\u5224\u65AD\u662F\u5426\u6709\u8BE5\u7C7B\u578B\u7684\u6307\u9488</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>variant<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> data<span class="token punctuation">;</span>
	data <span class="token operator">=</span> <span class="token number">27</span><span class="token punctuation">;</span>
	data <span class="token operator">=</span> <span class="token string">&quot;zz&quot;</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> value <span class="token operator">=</span> std<span class="token operator">::</span>get_if<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5224\u65AD\u662F\u5426\u6709\u8BE5\u7C7B\u578B\u7684\u503C</span>

		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>value <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> value <span class="token operator">=</span> std<span class="token operator">::</span>get_if<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5224\u65AD\u662F\u5426\u6709\u8BE5\u7C7B\u578B\u7684\u503C</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>value <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u76F8\u6BD4\u4E8Eoptional\u7684\u53EA\u5173\u5FC3\u6709\u6216\u65E0\u7684\u53EF\u80FD\uFF0Cvariant\u53EF\u4EE5\u6709\u591A\u79CD\u7C7B\u578B\u7684\u53EF\u80FD\u3002</p>`,13);function p(e,o){return t}var r=n(s,[["render",p]]);export{r as default};
