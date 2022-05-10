import{_ as n,f as s}from"./app.28a0acac.js";const a={},p=s(`<h1 id="_63-c-\u7684\u8BA1\u65F6" tabindex="-1"><a class="header-anchor" href="#_63-c-\u7684\u8BA1\u65F6" aria-hidden="true">#</a> 63. C++\u7684\u8BA1\u65F6</h1><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;chrono&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">MyStruct</span>
<span class="token punctuation">{</span>
	std<span class="token operator">::</span>chrono<span class="token operator">::</span>time_point<span class="token operator">&lt;</span>std<span class="token operator">::</span>chrono<span class="token operator">::</span>steady_clock<span class="token operator">&gt;</span> startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">;</span>
	std<span class="token operator">::</span>chrono<span class="token operator">::</span>duration<span class="token operator">&lt;</span><span class="token keyword">float</span><span class="token operator">&gt;</span> duration<span class="token punctuation">;</span>

	<span class="token function">MyStruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    startTime<span class="token operator">=</span>	std<span class="token operator">::</span>chrono<span class="token operator">::</span>high_resolution_clock<span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token operator">~</span><span class="token function">MyStruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 endTime <span class="token operator">=</span> std<span class="token operator">::</span>chrono<span class="token operator">::</span>high_resolution_clock<span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 duration <span class="token operator">=</span> endTime <span class="token operator">-</span> startTime<span class="token punctuation">;</span>
		 <span class="token keyword">float</span> ms <span class="token operator">=</span> duration<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000.0f</span><span class="token punctuation">;</span>
		 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span><span class="token string">&quot;\u4F5C\u7528\u57DF\u8FD0\u884C\u65F6\u957F/\u5BF9\u8C61\u751F\u5B58\u65F6\u957F&quot;</span> <span class="token operator">&lt;&lt;</span> ms <span class="token operator">&lt;&lt;</span><span class="token string">&quot;ms&quot;</span><span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	MyStruct myStruct<span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u8F93\u51FA\u8F93\u51FA&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p>\u53EF\u4EE5\u4F7F\u7528\u63D2\u7801(instrumentation), \u5904\u7406\u5E94\u7528\u6027\u80FD\u5206\u6790\u7B49\u4EFB\u52A1\u3002</p><h2 id="\u66F4\u597D\u7684\u51C6\u786E\u6027" tabindex="-1"><a class="header-anchor" href="#\u66F4\u597D\u7684\u51C6\u786E\u6027" aria-hidden="true">#</a> \u66F4\u597D\u7684\u51C6\u786E\u6027</h2><p>\u4F7F\u7528\u7279\u5B9A\u5E73\u53F0\u7684\u5E93\uFF0C\u5982win32 api\u7684\u9AD8\u7CBE\u5EA6\u8BA1\u65F6\u5668(QueryPerformanceCounter)</p>`,6);function t(o,e){return p}var r=n(a,[["render",t]]);export{r as default};
