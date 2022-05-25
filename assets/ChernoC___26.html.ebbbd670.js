import{_ as n,f as s}from"./app.01d44aa7.js";const a={},t=s(`<h1 id="_26-c-\u6790\u6784\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_26-c-\u6790\u6784\u51FD\u6570" aria-hidden="true">#</a> 26. C++ \u6790\u6784\u51FD\u6570</h1><p>\u6784\u9020\u51FD\u6570\u65F6\u7C7B\u5B9E\u4F8B\u5316\u65F6\u88AB\u8C03\u7528\uFF0C\u800C\u6790\u6784\u51FD\u6570\u65F6\u5BF9\u8C61\u88AB\u9500\u6BC1\u65F6\u8C03\u7528\u3002</p><h2 id="entity-\u52A0-\u4E3A\u6790\u6784\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#entity-\u52A0-\u4E3A\u6790\u6784\u51FD\u6570" aria-hidden="true">#</a> <code>~Entity(){}</code> \u52A0~\u4E3A\u6790\u6784\u51FD\u6570</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

class Entity <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Created Entity&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token operator">~</span><span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Destroyed Entity&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> <span class="token comment">//\u6790\u6784\u51FD\u6570\u5728\u5BF9\u8C61\u88AB\u9500\u6BC1\u540E\u8C03\u7528</span>
	<span class="token punctuation">}</span>
private <span class="token operator">:</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;,&#39;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">initEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">initEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;end&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528\u6790\u6784\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528\u6790\u6784\u51FD\u6570" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4F7F\u7528\u6790\u6784\u51FD\u6570</h2><p>\u5982\u679C\u5728\u6784\u9020\u51FD\u6570\u4E2D\u8C03\u7528\u4E86\u7279\u5B9A\u7684\u521D\u59CB\u5316\u4EE3\u7801\uFF0C\u53EF\u80FD\u9700\u8981\u5728\u6790\u6784\u51FD\u6570\u4E2D\u5378\u8F7D\u6216\u9500\u6BC1\u6240\u6709\u8FD9\u4E9B\u4E1C\u897F\u3002\u5982\u679C\u4F60\u4E0D\u8FD9\u6837\u505A\uFF0C\u5C31\u53EF\u80FD\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u3002</p><blockquote><p>\u5806\u4E0A\u5206\u914D\u5BF9\u8C61\uFF0C\u5982\u679C\u60A8\u5DF2\u7ECF\u624B\u52A8\u5206\u914D\u4E86\u4EFB\u4F55\u7C7B\u578B\u7684\u5185\u5B58\uFF0C\u90A3\u4E48\u60A8\u9700\u8981\u624B\u52A8\u6E05\u7406\u3002\u3002 \u5982\u679C\u5728Enitiy\u7C7B\u4E2D\u6216\u6784\u9020\u4E2D\u5206\u914D\u4E86\u5185\u5B58\uFF0C\u4F60\u53EF\u4EE5\u4F1A\u8981\u5728\u6790\u6784\u51FD\u6570\u4E2D\u5220\u9664\u4ED6\u4EEC(\u5185\u5B58)\uFF0C\u56E0\u4E3A\u5F53\u6790\u6784\u51FD\u6570\u8C03\u7528\u65F6\uFF0C\u90A3\u4E2AEntity\u5B9E\u4F8B\u5BF9\u8C61\u6D88\u5931\u4E86\u3002</p></blockquote><h2 id="\u624B\u52A8\u8C03\u7528\u6790\u6784\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u8C03\u7528\u6790\u6784\u51FD\u6570" aria-hidden="true">#</a> \u624B\u52A8\u8C03\u7528\u6790\u6784\u51FD\u6570</h2><p>\u4F7F\u7528new\u5206\u914D\uFF0C\u5F53\u4F60delelt\u5BF9\u8C61\u65F6\uFF0C\u51B3\u5B9A\u7528free\u51FD\u6570\u4E4B\u7C7B\u7684\u4E1C\u897F\uFF0C\u7136\u540E\u4F60\u9700\u8981\u624B\u52A8\u8C03\u7528\u5B83\u3002</p><blockquote><p>\u624B\u52A8\u8C03\u7528\u6790\u6784\u51FD\u6570\u4F1A\u8C03\u7528\u4E24\u6B21\uFF0C\u800C\u4E24\u6B21\u91CA\u653E\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u662F\u4E0D\u786E\u5B9A\u7684\u3002 c++plus</p></blockquote>`,10);function p(e,o){return t}var l=n(a,[["render",p]]);export{l as default};
