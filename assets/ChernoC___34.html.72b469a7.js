import{_ as n,f as s}from"./app.9bc8c786.js";const a={},e=s(`<h1 id="_34-c-\u4E2D\u7684const" tabindex="-1"><a class="header-anchor" href="#_34-c-\u4E2D\u7684const" aria-hidden="true">#</a> 34. C++\u4E2D\u7684CONST</h1><p>\u5E76\u4E0D\u5F71\u54CD\u751F\u6210\u7684\u4EE3\u7801\uFF0C\u6216\u662F\u6027\u80FD\u3002\u7C7B\u4F3C\u4E8E\u53EF\u89C1\u6027\u7684\u63A7\u5236\u3002\u4E00\u4E2A\u673A\u5236\uFF0C\u8BA9\u4EE3\u7801\u66F4\u5E72\u51C0\u3002</p><h2 id="const-\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#const-\u5E38\u91CF" aria-hidden="true">#</a> const \u5E38\u91CF</h2><ol><li>\u58F0\u660E\u8BE5\u53D8\u91CF\u4E0D\u53EF\u53D8\u3002 \u6BD4\u5982\u6700\u5927\u5E74\u9F84</li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">int</span> MAX_AGE<span class="token operator">=</span><span class="token number">90</span><span class="token punctuation">;</span>
MAX_AGE<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span><span class="token comment">//\u8FD9\u6837\u5C31\u4F1A\u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u4FEE\u6539\u6307\u9488</li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">int</span> MAX_AGE <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">;</span>
<span class="token operator">*</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>MAX_AGE<span class="token punctuation">;</span>  <span class="token comment">//\u53EF\u4EE5\u4FEE\u6539\u6307\u9488</span>
std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>\u9650\u5236\u6307\u9488\u7684\u4FEE\u6539</li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token keyword">const</span><span class="token operator">*</span> a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">;</span> <span class="token comment">//\u662F\u4E00\u6837\u7684</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>\u9650\u5236\u8D4B\u503C</li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code> <span class="token keyword">int</span><span class="token operator">*</span> <span class="token keyword">const</span> a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>\u65E2\u4E0D\u80FD\u6539\u53D8\u6307\u9488\u7684\u5185\u5BB9\uFF0C\u4E5F\u4E0D\u80FD\u6539\u53D8\u6307\u9488\u672C\u8EAB</li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">*</span>  <span class="token keyword">const</span> <span class="token operator">=</span>new <span class="token keyword">int</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u7C7B\u53CA\u65B9\u6CD5\u4E2D\u4F7F\u7528const" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u53CA\u65B9\u6CD5\u4E2D\u4F7F\u7528const" aria-hidden="true">#</a> \u7C7B\u53CA\u65B9\u6CD5\u4E2D\u4F7F\u7528const</h2><p>\u8FD4\u56DE\u4E0D\u80FD\u88AB\u4FEE\u6539\u7684\u6307\u9488\uFF0C\u4E0D\u80FD\u505A\u5199\u64CD\u4F5C\u7684\u51FD\u6570\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>class Entity <span class="token punctuation">{</span>
private<span class="token operator">:</span>
	<span class="token keyword">int</span><span class="token operator">*</span> x<span class="token punctuation">,</span> <span class="token operator">*</span>y<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">*</span> <span class="token keyword">const</span> <span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token comment">//\u4E0D\u80FD\u4FEE\u6539\u6307\u9488\uFF0C\u4E0D\u80FD\u4FEE\u6539\u5185\u5BB9\uFF0C\u8BE5\u65B9\u6CD5\u4E0D\u80FD\u4FEE\u6539\u7C7B\u4E2D\u7684\u53D8\u91CF</span>
		<span class="token keyword">return</span> x<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>const\u5728*\u524D\u9762\uFF0C\u4E0D\u53EF\u4FEE\u6539\u6307\u9488\u5185\u5BB9\uFF0C\u4F46\u662F\u53EF\u4EE5\u4FEE\u6539\u6307\u9488\u672C\u8EAB\u3002&amp;\u5F15\u7528\u672C\u8EAB\u4E5F\u662F\u5185\u5BB9\uFF0C\u5982\u679C\u58F0\u660E\uFF0C\u90A3\u4E48\u5185\u5BB9\u4E5F\u662F\u65E0\u6CD5\u4FEE\u6539\u7684\u3002</p><h2 id="\u4F7F\u7528const\u6807\u8BB0\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528const\u6807\u8BB0\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528const\u6807\u8BB0\u65B9\u6CD5</h2><p>\u4E00\u4E2A\u51FD\u6570\uFF0C\u5982\u679C\u53C2\u6570\u88AB\u58F0\u660Ecanst\uFF0C\u5728\u4F7F\u7528<strong>\u5F15\u7528</strong>/<strong>\u6307\u9488</strong>\u521B\u5EFA\u5BF9\u8C61\u8C03\u7528\u65B9\u6CD5\u65F6\uFF0C\u65B9\u6CD5\u662F\u65E0\u6CD5\u88AB\u8C03\u7528\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u53EF\u80FD\u4F1A\u66F4\u6539\u8BE5\u7C7B\uFF0C\u6240\u4EE5<strong>\u7ED9\u51FD\u6570\u6DFB\u52A0const\u58F0\u660E\u51FD\u6570\u4E0D\u4F1A\u88AB\u66F4\u6539\uFF0C\u81EA\u7136\u4E5F\u5C31\u53EF\u4EE5\u88AB\u8C03\u7528\u4E86</strong></p><h2 id="\u5C06\u53D8\u91CF\u58F0\u660E\u4E3A-mutable-\u5728const\u65B9\u6CD5\u4E2D\u662F\u53EF\u4EE5\u4FEE\u6539\u53D8\u91CF\u7684" tabindex="-1"><a class="header-anchor" href="#\u5C06\u53D8\u91CF\u58F0\u660E\u4E3A-mutable-\u5728const\u65B9\u6CD5\u4E2D\u662F\u53EF\u4EE5\u4FEE\u6539\u53D8\u91CF\u7684" aria-hidden="true">#</a> \u5C06\u53D8\u91CF\u58F0\u660E\u4E3A mutable \uFF0C\u5728const\u65B9\u6CD5\u4E2D\u662F\u53EF\u4EE5\u4FEE\u6539\u53D8\u91CF\u7684</h2><p>\u5141\u8BB8\u51FD\u6570\u662F\u5E38\u91CF\u65B9\u6CD5\uFF0C\u4F46\u53EF\u4EE5\u4FEE\u6539\u53D8\u91CF</p>`,21);function p(t,o){return e}var r=n(a,[["render",p]]);export{r as default};
