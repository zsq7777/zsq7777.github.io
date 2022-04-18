import{_ as n,f as s}from"./app.134359ce.js";const a={},e=s(`<h1 id="_17-c-\u5F15\u7528-reference" tabindex="-1"><a class="header-anchor" href="#_17-c-\u5F15\u7528-reference" aria-hidden="true">#</a> 17. C++\u5F15\u7528(reference)</h1><p>\u5F15\u7528\u5B9E\u9645\u4E0A\u662F\u6307\u9488\u7684\u6269\u5C55\uFF0C\u8BA1\u7B97\u673A\u7528\u4ED6\u4EEC\u505A\u7684\u4E8B\u51E0\u4E4E\u662F\u4E00\u6837\u7684\u3002\u5F15\u7528\u662F\u6307\u9488\u7684\u4F2A\u88C5\uFF0C\u53EA\u662F\u5728\u6307\u9488\u4E4B\u4E0A\u7684<strong>\u8BED\u6CD5\u7CD6</strong>\uFF0C\u8BA9\u4ED6\u4EEC\u66F4\u5BB9\u6613\u9605\u8BFB\uFF0C\u7406\u89E3\u3002 \u4E00\u79CD\u5F15\u7528\u73B0\u6709\u53D8\u91CF\u7684\u65B9\u5F0F\uFF0C</p><h2 id="\u548C\u6307\u9488\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u548C\u6307\u9488\u7684\u533A\u522B" aria-hidden="true">#</a> \u548C\u6307\u9488\u7684\u533A\u522B</h2><p>\u5F15\u7528\u73B0\u6709\u53D8\u91CF\uFF0C\u800C\u6307\u9488\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6307\u9488\u53D8\u91CF\uFF0C\u7136\u540E\u8BBE\u7F6E\u5B83\u7B49\u4E8E\u7A7A\u6307\u9488\u6216\u5176\u4ED6\u7C7B\u4F3C\u7684\u4E1C\u897F\u3002</p><h2 id="\u5F15\u7528-\u5BF9\u53D8\u91CF\u7684\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528-\u5BF9\u53D8\u91CF\u7684\u5F15\u7528" aria-hidden="true">#</a> \u5F15\u7528 --&gt;\u5BF9\u53D8\u91CF\u7684\u5F15\u7528</h2><p>\u5F15\u7528\u53EA\u80FD\u4F7F\u7528\u73B0\u6709\u7684\u53D8\u91CF\uFF0C\u5F15\u7528\u672C\u8EAB\u4E0D\u662F\u65B0\u7684\u53D8\u91CF\u3002\u4ED6\u4EEC\u5E76\u4E0D\u5360\u7528\u5185\u5B58\uFF0C\u6CA1\u6709\u771F\u6B63\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u800C\u662F\u4F5C\u4E3A\u53D8\u91CF\u7684\u5F15\u7528</p><h2 id="\u5F15\u7528\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u5F15\u7528\u7684\u4F7F\u7528</h2><h3 id="\u521B\u5EFA\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u522B\u540D" aria-hidden="true">#</a> \u521B\u5EFA\u522B\u540D</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">&amp;</span> ref <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u7F6E\u522B\u540D</span>
ref <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//\u6539\u53D8\u4E86a\u7684\u503C</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u7F16\u8BD1\u6E90\u7801 \uFF0C\u8FD9\u91CC\u5C31\u76F8\u5F53\u4E8Ea=2;</p></blockquote><h3 id="\u4F7F\u7528\u5F15\u7528\u5411\u51FD\u6570\u4F20\u503C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5F15\u7528\u5411\u51FD\u6570\u4F20\u503C" aria-hidden="true">#</a> \u4F7F\u7528\u5F15\u7528\u5411\u51FD\u6570\u4F20\u503C</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Increment</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	value<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u4E0D\u4F7F\u7528\u5F15\u7528\u7684\u60C5\u51B5</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token function">Increment</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4F1A\u5C065\u8FD9\u4E2A\u503C\u590D\u5236\u5230\u51FD\u6570\u4E2D\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u53D8\u91CFvalue</span>
std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> <span class="token comment">//\u8F93\u51FA5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u4F7F\u7528\u6307\u9488</span>
<span class="token keyword">void</span> <span class="token function">Increment</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">(</span><span class="token operator">*</span>value<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">//\u89E3\u5F15\u7528 ,\u5982\u679C\u4E0D\u52A0()\uFF0C\u4F1A\u5148\u505A\u589E\u91CF\u8FD0\u7B97\uFF0C\u518D\u505A\u9006\u5411\u5F15\u7528</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token function">Increment</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&amp;a \u83B7\u53D6a\u7684\u5185\u5B58\u5730\u5740</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>\u5C06\u5185\u5B58\u5730\u5740\u4F20\u8FDB\u53BB\uFF0C\u7136\u540E\u4FEE\u6539\u8BE5\u5185\u5B58\u91CC\u7684\u503C</p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u4F7F\u7528\u5F15\u7528</span>
<span class="token keyword">void</span> <span class="token function">Increment</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">&amp;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	value<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">//\u89E3\u5F15\u7528 ,\u5982\u679C\u4E0D\u52A0()\uFF0C\u4F1A\u5148\u505A\u589E\u91CF\u8FD0\u7B97\uFF0C\u518D\u505A\u9006\u5411\u5F15\u7528</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token function">Increment</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&amp;a \u83B7\u53D6a\u7684\u5185\u5B58\u5730\u5740</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>\u65E0\u5E8F\u9006\u5411\u5F15\u7528\uFF0C\u7B80\u5316\u64CD\u4F5C\uFF0C\u4F7F\u4EE3\u7801\u66F4\u7B80\u6D01</p></blockquote><h2 id="\u4E00\u65E6\u58F0\u660E\u4E86\u4E00\u4E2A\u5F15\u7528-\u4F60\u4E0D\u80FD\u6539\u53D8\u5B83\u5F15\u7528\u7684\u4E1C\u897F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u65E6\u58F0\u660E\u4E86\u4E00\u4E2A\u5F15\u7528-\u4F60\u4E0D\u80FD\u6539\u53D8\u5B83\u5F15\u7528\u7684\u4E1C\u897F" aria-hidden="true">#</a> \u4E00\u65E6\u58F0\u660E\u4E86\u4E00\u4E2A\u5F15\u7528\uFF0C\u4F60\u4E0D\u80FD\u6539\u53D8\u5B83\u5F15\u7528\u7684\u4E1C\u897F</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">&amp;</span> ref <span class="token operator">=</span> a<span class="token punctuation">;</span>
ref <span class="token operator">=</span> b<span class="token punctuation">;</span> <span class="token comment">//\u628Ab\u7684\u503C\u8D4B\u7ED9a</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u6539\u53D8\u5F15\u7528\u7684\u4E1C\u897F\u5E94\u8BE5\u600E\u4E48\u505A-\u6539\u53D8\u5F15\u7528\u5B9E\u9645\u4E0A\u662F\u6539\u53D8\u6307\u9488\u6240\u6307\u5411\u7684\u5185\u5B58\u4E2D\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8\u5F15\u7528\u7684\u4E1C\u897F\u5E94\u8BE5\u600E\u4E48\u505A-\u6539\u53D8\u5F15\u7528\u5B9E\u9645\u4E0A\u662F\u6539\u53D8\u6307\u9488\u6240\u6307\u5411\u7684\u5185\u5B58\u4E2D\u7684\u503C" aria-hidden="true">#</a> \u6539\u53D8\u5F15\u7528\u7684\u4E1C\u897F\u5E94\u8BE5\u600E\u4E48\u505A-&gt; \u6539\u53D8\u5F15\u7528\u5B9E\u9645\u4E0A\u662F\u6539\u53D8\u6307\u9488\u6240\u6307\u5411\u7684\u5185\u5B58\u4E2D\u7684\u503C</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> ref <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
<span class="token operator">*</span>ref <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
ref <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span>
<span class="token operator">*</span>ref <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span><span class="token string">&quot;---&quot;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ol><li>\u5F15\u7528\u662F\u5185\u5B58\u7684\u522B\u540D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5185\u5B58\u64CD\u4F5C\u91CC\u7684\u503C\u3002</li><li>\u7B80\u5316\u4E86\u6307\u9488\u64CD\u4F5C\uFF0C\u65E0\u9700\u89E3\u5F15\u7528\u3002</li><li>\u5F15\u7528\u4E0D\u53EF\u66F4\u6539\uFF0C\u5C31\u50CF\u53EF\u4EE5\u6709\u5C0F\u540D\uFF0C\u4F46\u662F\u4E0D\u80FD\u5E26\u7740\u5C0F\u540D\u53BB\u6539\u8EAB\u4EFD\u8BC1\u7684\u540D\u5B57\u3002 \u5982\u679C\u9700\u8981\u66F4\u6539</li></ol>`,23);function p(t,o){return e}var l=n(a,[["render",p]]);export{l as default};
