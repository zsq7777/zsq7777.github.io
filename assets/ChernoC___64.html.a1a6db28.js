import{_ as n,f as s}from"./app.593d268f.js";const a={},p=s(`<h1 id="_64-c-\u7684\u591A\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_64-c-\u7684\u591A\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> 64. C++\u7684\u591A\u7EF4\u6570\u7EC4</h1><h2 id="\u4F20\u7EDF\u4E8C\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u4F20\u7EDF\u4E8C\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u4F20\u7EDF\u4E8C\u7EF4\u6570\u7EC4</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> a2d <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span><span class="token operator">*</span> newarray <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			newarray<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		a2d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> newarray<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a2d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>


	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span><span class="token operator">*</span> printA1d <span class="token operator">=</span> a2d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u7B2C&quot;</span> <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span><span class="token string">&quot;\u7EC4\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout<span class="token operator">&lt;&lt;</span>	 printA1d<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		delete<span class="token punctuation">[</span><span class="token punctuation">]</span> a2d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	delete<span class="token punctuation">[</span><span class="token punctuation">]</span> a2d<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u8FD9\u6837\u5904\u7406\u5185\u5B58\u9020\u6210\u4E86\u5185\u5B58\u788E\u7247\u7684\u95EE\u9898\u3002 \u6BCF\u4E00\u4E2A\u8FDE\u7EED\u7684\u5185\u5B58\u7F13\u51B2\u533A\uFF0C\u5728\u8FD9\u4E00\u884C\u4E2D\u4FDD\u5B58\u8FD9\u4E9B\u6574\u6570\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E865\u4E2A\u7F13\u51B2\u533A\uFF0C\u6BCF\u4E2A\u7F13\u51B2\u533A\u670910\u4E2A\u6574\u6570\uFF0C\u4ED6\u4EEC\u5728\u5185\u5B58\u4E2D\u7684\u5206\u914D\u5B8C\u5168\u968F\u673A\uFF0C\u53EF\u80FD\u79BB\u5F97\u8FD1\u53EF\u80FD\u79BB\u5F97\u8FDC\uFF0C\u4F46\u662F\u65E0\u6CD5\u4FDD\u8BC1\u3002</p><p>\u5728\u8BFB\u53D6\u4E0D\u540C\u6570\u7EC4\u4E2D\u7684\u503C\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u5185\u5B58\u4E2D\u8DF3\u6765\u8DF3\u53BB\uFF0C\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u5728\u6D6A\u8D39\u65F6\u95F4\u4ECEram\u4E2D\u83B7\u53D6\u6570\u636E\u3002</p><p>\u6240\u4EE5\uFF0C\u5C06\u4ED6\u4EEC\u5B58\u50A8\u5728\u4E00\u4E2A\u6570\u7EC4\u4E2D\u4F1A\u66F4\u597D\u3002</p><h2 id="\u4F18\u5316-\u4E00\u7EF4\u6570\u7EC4\u5B58\u50A8\u4E8C\u7EF4\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316-\u4E00\u7EF4\u6570\u7EC4\u5B58\u50A8\u4E8C\u7EF4\u6570\u636E" aria-hidden="true">#</a> \u4F18\u5316\uFF1A\u4E00\u7EF4\u6570\u7EC4\u5B58\u50A8\u4E8C\u7EF4\u6570\u636E</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	<span class="token keyword">int</span><span class="token operator">*</span> a1d <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
			a1d<span class="token punctuation">[</span>i<span class="token operator">*</span><span class="token number">10</span><span class="token operator">+</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span> 
			<span class="token comment">//\u5148\u5FAA\u73AF\u5185\u5C42\u5FAA\u73AF 0*10+0,0*10+1,0*10+2....</span>
			<span class="token comment">// 				3*10+0,3*10+1,3*10+2....</span>
			<span class="token comment">// 				5*10+0,5*10+1....5*10+9</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a1d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u540C\u6837\u7684\u6570\u636E\uFF0C\u4F46\u662F\u5728\u5185\u5B58\u4E2D1\u7EF4\u6570\u7EC4\u662F\u8FDE\u7EED\u7684\u3002</p>`,9);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
