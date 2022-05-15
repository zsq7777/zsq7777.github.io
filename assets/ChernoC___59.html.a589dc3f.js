import{_ as n,f as s}from"./app.593d268f.js";const a={},p=s(`<h1 id="_59-c-\u7684lambda" tabindex="-1"><a class="header-anchor" href="#_59-c-\u7684lambda" aria-hidden="true">#</a> 59. C++\u7684lambda</h1><p>lambda\u672C\u8D28\u662F\u4E00\u79CD\u5B9A\u4E49\u533F\u540D\u51FD\u6570\u7684\u65B9\u5F0F\u3002</p><p>\u53EA\u8981\u6709\u4E00\u4E2A\u51FD\u6570\u6307\u9488\uFF0C\u5C31\u53EF\u4EE5\u5728C++\u4E2D\u4F7F\u7528lambda\u3002</p><h2 id="_1-lambda\u6355\u83B7" tabindex="-1"><a class="header-anchor" href="#_1-lambda\u6355\u83B7" aria-hidden="true">#</a> 1. lambda\u6355\u83B7</h2><h3 id="_2-1-\u5B9A\u4E49\u51FD\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B9A\u4E49\u51FD\u6570\u7C7B\u578B" aria-hidden="true">#</a> 2.1 \u5B9A\u4E49\u51FD\u6570\u7C7B\u578B</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">ForEach</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token operator">::</span>vector<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token operator">&gt;</span><span class="token operator">&amp;</span> value<span class="token punctuation">,</span> std<span class="token operator">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span>std<span class="token operator">::</span>string<span class="token punctuation">)</span><span class="token operator">&gt;</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> value<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
		<span class="token function">f</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-2-\u6355\u83B7\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6355\u83B7\u7C7B\u578B" aria-hidden="true">#</a> 2.2 \u6355\u83B7\u7C7B\u578B</h3><ul><li><p>= \u503C\u7C7B\u578B\u6355\u83B7</p></li><li><p>&amp; \u5F15\u7528\u6355\u83B7</p></li><li><p>a a\u4EE5\u503C\u7C7B\u578B\u6355\u83B7</p></li><li><p>a&amp; a\u4EE5\u5F15\u7528\u7C7B\u578B\u6355\u83B7</p></li><li><p>object \u5BF9\u8C61\u4EE5\u5F15\u7528\u6355\u83B7</p></li><li><p>*object \u5BF9\u8C61\u4EE5\u590D\u5236\u6355\u83B7 C++ 17</p></li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">typedef</span> <span class="token keyword">void</span><span class="token punctuation">(</span><span class="token operator">*</span>Function<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token operator">::</span>string<span class="token operator">&amp;</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	Function f <span class="token operator">=</span> print<span class="token punctuation">;</span>

	std<span class="token operator">::</span>vector<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token operator">&gt;</span> values<span class="token punctuation">;</span><span class="token punctuation">;</span>
	values<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	values<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token string">&quot;zzz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token comment">//\u5F15\u7528\u7C7B\u578B\u6355\u83B7</span>
	<span class="token function">ForEach</span><span class="token punctuation">(</span>values<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>std<span class="token operator">::</span>string msg<span class="token punctuation">)</span>  <span class="token punctuation">{</span>a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u503C\u7C7B\u578B\u6355\u83B7</span>
	<span class="token function">ForEach</span><span class="token punctuation">(</span>values<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">(</span>std<span class="token operator">::</span>string msg<span class="token punctuation">)</span> mutable <span class="token punctuation">{</span>a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_2-\u56DE\u8C03\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a> 2. \u56DE\u8C03\u51FD\u6570</h2><p>\u5C06\u4E00\u4E2A\u51FD\u6570\u4F20\u9012\u7ED9api,\u5728\u672A\u6765\u7684\u67D0\u4E2A\u65F6\u95F4\u70B9\u8C03\u7528\u3002</p><p>\u6839\u636E\u6761\u4EF6\u5728\u8FED\u4EE3\u5668\u4E2D\u627E\u5230\u503C\u3002 \u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u8FD4\u56DEbool\u503C\u7684\u51FD\u6570\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>    std<span class="token operator">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> intValues<span class="token punctuation">;</span><span class="token punctuation">;</span>
	intValues<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	intValues<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	intValues<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u8FED\u4EE3\u5668\u5F00\u59CB\u5230\u7ED3\u675F\u7684\u503C\u904D\u5386\uFF0C\u5C06\u503C\u4F20\u5165\u51FD\u6570\uFF0C\u8FD4\u56DEbool\u503C\u83B7\u53D6\u8BA1\u7B97\u7ED3\u679C\u3002</span>
	<span class="token keyword">auto</span> it<span class="token operator">=</span>std<span class="token operator">::</span><span class="token function">find_if</span><span class="token punctuation">(</span>intValues<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> intValues<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> number <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>it <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,13);function t(o,e){return p}var l=n(a,[["render",t]]);export{l as default};
