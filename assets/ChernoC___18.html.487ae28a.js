import{_ as n,f as a}from"./app.5bafefdc.js";const s={},p=a(`<h1 id="_18-c-\u7C7B" tabindex="-1"><a class="header-anchor" href="#_18-c-\u7C7B" aria-hidden="true">#</a> 18. C++\u7C7B</h1><h2 id="\u9762\u5411\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61</h2><p>\u5B9E\u9645\u4E0A\u53EA\u662F\u4E00\u79CD\u4F60\u53EF\u4EE5\u91C7\u7528\u7684\u65B9\u5F0F\u6765\u5199\u4EE3\u7801\u3002 Java,C#\u662F\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\uFF0C\u4E0D\u80FD\u5199\u4EFB\u4F55\u5176\u4ED6\u7C7B\u578B\u7684\u4EE3\u7801\uFF0C\u867D\u7136\u4E5F\u53EF\u4EE5\u5C1D\u8BD5\u3002 C + +\u6CA1\u6709\u5F3A\u52A0\u7ED9\u4E00\u79CD\u7279\u5B9A\u7684\u98CE\u683C\u3002 \u4E3A\u4E86\u9762\u5411\u5BF9\u8C61\uFF0C\u9700\u8981\u4E00\u4E9B\u6982\u5FF5\u6BD4\u5982\u7C7B\u548C\u5BF9\u8C61\u3002 C++\u589E\u52A0\u4E86\u8FD9\u4E9B\u529F\u80FD\u3002</p><p>C++\u652F\u6301\uFF0C\u9762\u5411\u8FC7\u7A0B\uFF0C\u57FA\u4E8E\u5BF9\u8C61\uFF0C\u9762\u5411\u5BF9\u8C61\uFF0C\u6CDB\u578B\u7F16\u7A0B</p><h2 id="\u4EC0\u4E48\u662F\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u7C7B" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u7C7B</h2><blockquote><p>\u662F\u4E00\u79CD\u5C06\u6570\u636E\u548C\u51FD\u6570\u7EC4\u7EC7\u5728\u4E00\u8D77\u7684\u65B9\u5F0F\u3002</p></blockquote><p>\u4F7F\u7528\u590D\u5236\u6216\u662F\u51FD\u6570\u8FBE\u5230\u591A\u6B21\u521B\u5EFA\u62E5\u6709\u540C\u6837\u5C5E\u6027\u7684\u884C\u4E3A\u4F1A\u8BA9\u4EE3\u7801\u6DF7\u4E71</p><h2 id="\u4E00\u6B21\u5305\u542B\u6240\u6709\u60F3\u8981\u7684\u6570\u636E-\u6700\u7EC8\u4F5C\u4E3A\u4E00\u4E2A\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u6B21\u5305\u542B\u6240\u6709\u60F3\u8981\u7684\u6570\u636E-\u6700\u7EC8\u4F5C\u4E3A\u4E00\u4E2A\u7C7B\u578B" aria-hidden="true">#</a> \u4E00\u6B21\u5305\u542B\u6240\u6709\u60F3\u8981\u7684\u6570\u636E\uFF0C\u6700\u7EC8\u4F5C\u4E3A\u4E00\u4E2A\u7C7B\u578B</h2><h3 id="\u7C7B\u5916\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5916\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> \u7C7B\u5916\u5B9A\u4E49\u51FD\u6570</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>class Player <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span> <span class="token comment">//\u4E0D\u5B9A\u4E49\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF0C\u9ED8\u8BA4\u79C1\u6709</span>
	<span class="token keyword">int</span> speed<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">Move</span><span class="token punctuation">(</span>Player<span class="token operator">&amp;</span> player <span class="token punctuation">,</span><span class="token keyword">int</span> xa<span class="token punctuation">,</span> <span class="token keyword">int</span> ya<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	player<span class="token punctuation">.</span>x <span class="token operator">+=</span> xa <span class="token operator">*</span> player<span class="token punctuation">.</span>speed<span class="token punctuation">;</span>
	player<span class="token punctuation">.</span>y <span class="token operator">+=</span> ya <span class="token operator">*</span> player<span class="token punctuation">.</span>speed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Player player<span class="token punctuation">;</span><span class="token comment">//\u5B9E\u4F8B\u5316\u4E86\u4E00\u4E2APlayer\u5BF9\u8C61</span>
	<span class="token function">Move</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u7C7B\u5185\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5185\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> \u7C7B\u5185\u5B9A\u4E49\u51FD\u6570</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>class Player <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span> <span class="token comment">//\u4E0D\u5B9A\u4E49\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF0C\u9ED8\u8BA4\u79C1\u6709</span>
	<span class="token keyword">int</span> speed<span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">Move</span><span class="token punctuation">(</span> <span class="token keyword">int</span> xa<span class="token punctuation">,</span> <span class="token keyword">int</span> ya<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		x <span class="token operator">+=</span> xa <span class="token operator">*</span> speed<span class="token punctuation">;</span>
		y <span class="token operator">+=</span> ya <span class="token operator">*</span> speed<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Player player<span class="token punctuation">;</span><span class="token comment">//\u5B9E\u4F8B\u5316\u4E86\u4E00\u4E2APlayer\u5BF9\u8C61</span>
	player<span class="token punctuation">.</span><span class="token function">Move</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u7C7B\u4E0D\u662F\u4E07\u80FD\u7684\uFF0C\u80FD\u7528\u7C7B\u5B8C\u6210\u7684\u540C\u6837\u4E5F\u80FD\u4E0D\u7528\u7C7B\u3002\u7C7B\u80FD\u8BA9\u6211\u4EEC\u66F4\u8F7B\u677E\uFF0C\u7CD6\u8863\u8BED\u6CD5\u8BA9\u4F60\u66F4\u597D\u7684\u7EC4\u7EC7\u66F4\u597D\u7684\u7EF4\u62A4\u4EE3\u7801\uFF0C\u4EC5\u6B64\u800C\u5DF2\u3002</p>`,13);function e(t,c){return p}var l=n(s,[["render",e]]);export{l as default};
