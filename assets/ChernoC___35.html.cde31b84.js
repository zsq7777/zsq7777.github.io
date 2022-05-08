import{_ as n,f as s}from"./app.e0697572.js";const a={},p=s(`<h1 id="_35-c-\u7684mutable\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_35-c-\u7684mutable\u5173\u952E\u5B57" aria-hidden="true">#</a> 35. C++\u7684mutable\u5173\u952E\u5B57</h1><p>mutable \u542B\u4E49\u662F\u53EF\u4EE5\u6539\u53D8</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

class Entity <span class="token punctuation">{</span>
private<span class="token operator">:</span>
	std<span class="token operator">::</span>string name<span class="token punctuation">;</span>
	mutable <span class="token keyword">int</span> count<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token function">Entity</span><span class="token punctuation">(</span>std<span class="token operator">::</span>string namestr<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
		name <span class="token operator">=</span> namestr<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token comment">//\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u5217\u8868</span>
	<span class="token keyword">const</span> std <span class="token operator">::</span> string<span class="token operator">&amp;</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token operator">::</span>string msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> msg <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

 <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 Entity<span class="token operator">*</span> e <span class="token operator">=</span> new <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426q&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 e<span class="token operator">-&gt;</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 <span class="token function">log</span><span class="token punctuation">(</span>e<span class="token operator">-&gt;</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 delete e<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u4F7F\u7528\u5B83\u53EF\u4EE5\u6539\u53D8\u51FD\u6570\u5B9A\u4E49\u4E0D\u53EF\u4FEE\u6539\u53D8\u91CF\u5185\u5BB9\u7684\u9650\u5236\u3002</p><h2 id="lambda\u4E2D\u4F7F\u7528mutable" tabindex="-1"><a class="header-anchor" href="#lambda\u4E2D\u4F7F\u7528mutable" aria-hidden="true">#</a> lambda\u4E2D\u4F7F\u7528mutable</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code> <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
	 <span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// []\u4E2D\u7684 x:\u76F4\u63A5\u4F20\u503C,=\uFF1A\u5BF9\u6240\u6709\u53D8\u91CF\u8FDB\u884C\u4F20\u503C,&amp;\u5BF9\u6240\u6709\u53D8\u91CF\u8FDB\u884C\u5F15\u7528\u4F20\u9012</span>
		 <span class="token keyword">int</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span>
		 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span><span class="token punctuation">;</span>
	 <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5BF9x\u8FDB\u884C\u66F4\u6539</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>     <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
	 <span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u503C\u4F20\u9012\u62A5\u9519\uFF0C\u65E0\u6CD5\u76F4\u63A5\u66F4\u6539\u503C</span>
		 <span class="token comment">// x++; //\u62A5\u9519\uFF0C</span>
		 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span><span class="token punctuation">;</span>
	 <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u65E0\u6CD5\u76F4\u63A5\u5BF9x\u8FDB\u884C\u53D8\u66F4\uFF0C\u4F7F\u7528\u65B0\u7684\u53D8\u91CF\u66F4\u6539\u503C</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	 <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
	 <span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 <span class="token keyword">int</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span>
		 y<span class="token operator">++</span><span class="token punctuation">;</span>
		 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span><span class="token punctuation">;</span>
	 <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F7F\u7528mutable\uFF0C\u503C\u4F20\u9012\u66F4\u6539\u3002\u76F4\u63A5\u4F20\u503C\uFF0C\u4E0D\u4F1A\u4FEE\u6539x\u7684\u5185\u5BB9\u3002 \u5F15\u7528\u4F20\u9012\uFF0C\u66F4\u6539x\u53D8\u91CF\u5185\u5BB9\u6210\u529F\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
	 <span class="token keyword">auto</span> f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> mutable<span class="token punctuation">{</span>
		 x<span class="token operator">++</span><span class="token punctuation">;</span>
		 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x<span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span><span class="token punctuation">;</span>
	 <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	 <span class="token comment">//\u8F93\u51FA8\uFF0C9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,12);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
