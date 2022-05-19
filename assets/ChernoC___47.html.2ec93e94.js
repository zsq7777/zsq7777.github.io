import{_ as n,f as s}from"./app.6bf1f908.js";const a={},p=s(`<h1 id="_47-c-\u7684\u52A8\u6001\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_47-c-\u7684\u52A8\u6001\u6570\u7EC4" aria-hidden="true">#</a> 47. C++\u7684\u52A8\u6001\u6570\u7EC4</h1><h2 id="\u4F7F\u7528\u53CA\u539F\u7406\u7B80\u6790" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53CA\u539F\u7406\u7B80\u6790" aria-hidden="true">#</a> \u4F7F\u7528\u53CA\u539F\u7406\u7B80\u6790</h2><p>C++\u6807\u51C6\u6A21\u677F\u5E93\u4E2D\u7684vector\u7C7B\u3002\u6216\u79F0\u4E3AArrayList \u52A8\u6001\u6570\u7EC4\u3002</p><p>\u52A8\u6001\u6570\u7EC4\u7684\u5927\u5C0F\u4F1A\u6839\u636E\u6570\u636E\u6539\u53D8\u3002\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5927\u5C0F\u3002</p><p>\u5F53\u7136\uFF0C\u6807\u51C6\u6A21\u677F\u5E93\u7684\u201C\u901F\u5EA6\u201D\u4E0D\u662F\u4F18\u5148\u8003\u8651\u7684\u4E1C\u897F\u3002 \u5DE5\u4F5C\u5BA4\u4E00\u822C\u4F1A\u6709\u81EA\u5DF1\u7684\u6807\u51C6\u6A21\u677F\u5E93 \uFF0C\u5982EA\u7684EASTL\u3002</p><p>\u95EE\u9898\uFF0C\u5982\u4F55\u8BA9\u6570\u7EC4\u6539\u53D8\u5927\u5C0F\uFF1F</p><p>\u5BF9\u8C61\u5B58\u50A8\uFF1Avector\u7684\u5927\u5C0F\u8C03\u6574\uFF0C\u4ED6\u9700\u8981\u590D\u5236\u6240\u6709\u6570\u636E\u3002string\u7C7B\u578B\u7684vector\u7684\u5927\u5C0F\uFF0C\u9700\u8981\u91CD\u65B0\u5206\u914D\u548C\u590D\u5236\u6240\u6709\u4E1C\u897F\u3002 \u5185\u5B58\u8FDE\u7EED\u7684\u6570\u7EC4\u3002\u5728\u5185\u5B58\u4E2D\u4E0D\u662F\u788E\u7247\u3002</p><p>\u6307\u9488\uFF1A\u5B9E\u9645\u5185\u5B58\u4E0D\u53D8\uFF0C\u53EA\u662F\u4FDD\u5B58\u4E86\u6307\u5411\u5185\u5B58\u7684\u6307\u9488\uFF0C\u6240\u4EE5\u5B9E\u9645\u5185\u5B58\u4FDD\u6301\u4E0D\u53D8\u3002\u8C03\u6574\u5927\u5C0F\u7684\u65F6\u5019\uFF0C\u56E0\u4E3A\u662F\u6307\u9488\uFF0C\u6570\u636E\u53EA\u662F\u5B58\u50A8\u5728\u5185\u5B58\u7684\u4E0D\u540C\u4F4D\u7F6E\u4E2D\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>

class Entity <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token keyword">int</span> x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

std<span class="token operator">::</span>ostream<span class="token operator">&amp;</span> operator<span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span> std<span class="token operator">::</span>ostream<span class="token operator">&amp;</span> stream<span class="token punctuation">,</span> <span class="token keyword">const</span> Entity<span class="token operator">&amp;</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> stream <span class="token operator">&lt;&lt;</span> e<span class="token punctuation">.</span>x <span class="token operator">&lt;&lt;</span> e<span class="token punctuation">.</span>y <span class="token operator">&lt;&lt;</span> e<span class="token punctuation">.</span>z<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	std<span class="token operator">::</span>vector<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> e<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span>Entity<span class="token operator">&amp;</span> item <span class="token operator">:</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u5982\u679C\u4E0D\u662F\u5F15\u7528 \uFF0C\u5B9E\u9645\u4E0A\u662F\u5C06\u5185\u5B58\u590D\u5236\u8FDB\u53BB</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> item <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//e.erase(e.begin() + 1);//\u79FB\u9664\u7B2C\u4E8C\u4E2A\u5143\u7D20</span>
	e<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6E05\u9664\u52A8\u6001\u6570\u7EC4</span>

	<span class="token comment">//std::vector&lt;Entity&gt;* e = new std::vector&lt;Entity&gt;;</span>
	

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="\u4F7F\u7528\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5EFA\u8BAE" aria-hidden="true">#</a> \u4F7F\u7528\u5EFA\u8BAE</h2><p>\u5C3D\u91CF\u4F7F\u7528\u5BF9\u8C61\u800C\u4E0D\u662F\u6307\u9488\uFF0C \u6307\u9488\u7684\u4F7F\u7528\u548C\u6808/\u5806\u5206\u914D\u903B\u8F91\u4E00\u6837\uFF0C\u5BF9\u4E8E\u751F\u5B58\u671F\u7684\u7BA1\u7406\u4E2D\uFF0C\u6CA1\u6709\u5FC5\u8981\u5C31\u4E0D\u8981\u4F7F\u7528\u3002</p>`,11);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
