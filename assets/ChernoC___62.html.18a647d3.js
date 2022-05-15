import{_ as s,f as n}from"./app.593d268f.js";const a={},t=n(`<h1 id="_62-c-\u7684\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_62-c-\u7684\u7EBF\u7A0B" aria-hidden="true">#</a> 62. C++\u7684\u7EBF\u7A0B</h1><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;thread&gt;</span></span>


<span class="token keyword">static</span> bool isStart <span class="token operator">=</span> true<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	using namespace std<span class="token operator">::</span>literals<span class="token operator">::</span>chrono_literals<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>isStart<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		std<span class="token operator">::</span>this_thread<span class="token operator">::</span><span class="token function">sleep_for</span><span class="token punctuation">(</span><span class="token number">1</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;working..&quot;</span> <span class="token operator">&lt;&lt;</span>std<span class="token operator">::</span>this_thread<span class="token operator">::</span>get_id <span class="token operator">&lt;&lt;</span>std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>thread <span class="token function">worker</span><span class="token punctuation">(</span>doWork<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5F00\u542F\u7EBF\u7A0B\u5DE5\u4F5C</span>
	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B49\u5F85\u8F93\u5165</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5DE5\u4F5C\u7ED3\u675F&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>this_thread<span class="token operator">::</span>get_id <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	isStart <span class="token operator">=</span> false<span class="token punctuation">;</span><span class="token comment">//\u66F4\u6539\u72B6\u6001</span>
	worker<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B49\u5F85\u7EBF\u7A0B\u4EFB\u52A1\u7ED3\u675F</span>

	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u4E3B\u7EBF\u7A0B&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>this_thread<span class="token operator">::</span>get_id <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u5176\u4E2D\uFF0Cworker\u6267\u884C\u524D\uFF0C\u4F1A\u5148\u6267\u884C\u7EBF\u7A0Bworker\u4E4B\u5916\u7684\u4EE3\u7801\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B49\u5F85\u8F93\u5165</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5DE5\u4F5C\u7ED3\u675F&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>this_thread<span class="token operator">::</span>get_id <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	isStart <span class="token operator">=</span> false<span class="token punctuation">;</span><span class="token comment">//\u66F4\u6539\u72B6\u6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u518D\u6267\u884Cworker\u7684\u4EFB\u52A1</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	std<span class="token operator">::</span>thread <span class="token function">worker</span><span class="token punctuation">(</span>doWork<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5F00\u542F\u7EBF\u7A0B\u5DE5\u4F5C</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};
