import{_ as n,f as s}from"./app.d7ce3c02.js";const a={},p=s(`<h1 id="_36-c-\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_36-c-\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u5217\u8868" aria-hidden="true">#</a> 36. C++\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u5217\u8868</h1><p>\u5728\u6784\u9020\u51FD\u6570\u4E2D\u521D\u59CB\u5316\u6210\u5458\u53D8\u91CF\u7684\u4E00\u79CD\u65B9\u5F0F\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	<span class="token function">Entity</span><span class="token punctuation">(</span>std<span class="token operator">::</span>string name<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token comment">//...</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u521D\u59CB\u5316\u6784\u9020\u51FD\u6570\u5217\u8868\uFF0C\u5C31\u7F16\u7801\u98CE\u683C\u6765\u8BF4\u4E5F\u66F4\u52A0\u6E05\u6670\uFF0C\u521D\u59CB\u5316\u53D8\u91CF\u4E0E\u5176\u4ED6\u521D\u59CB\u5316\u4EE3\u7801\u5206\u5F00\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

class Example <span class="token punctuation">{</span>
public <span class="token operator">:</span>
	<span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">Example</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


class Entity <span class="token punctuation">{</span>
private<span class="token operator">:</span>
	std<span class="token operator">::</span>string m_Name<span class="token punctuation">;</span>
	<span class="token keyword">int</span> count<span class="token punctuation">;</span>
	Example e<span class="token punctuation">;</span>  <span class="token comment">//\u8FD9\u91CC\u4F7F\u7528\u4E86\u65E0\u53C2\u6784\u9020</span>
public<span class="token operator">:</span>
	<span class="token function">Entity</span><span class="token punctuation">(</span>std<span class="token operator">::</span>string name<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e <span class="token operator">=</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8FD9\u91CC\u4F7F\u7528\u4E86\u6709\u53C2</span>
	<span class="token punctuation">}</span><span class="token comment">//\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u5217\u8868</span>
    <span class="token keyword">const</span> std<span class="token operator">::</span>string<span class="token operator">&amp;</span> <span class="token function">getName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> m_Name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> count<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token operator">::</span>string msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> msg <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

 <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
	 Entity<span class="token operator">*</span> e <span class="token operator">=</span> new <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>Example\u7684\u6784\u9020\u88AB\u8C03\u7528\u4E862\u6B21\uFF0C\u4E5F\u5C31\u662F\u521B\u5EFA\u4E862\u6B21Entity\u5BF9\u8C61\u3002\u4E00\u6B21\u65E0\u53C2\uFF0C\u4E00\u6B21\u6709\u53C2</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	<span class="token function">Entity</span><span class="token punctuation">(</span>std<span class="token operator">::</span>string name<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">e</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token comment">//\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u5217\u8868</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5F53\u6211\u4EEC\u4F7F\u7528\u6784\u9020\u51FD\u6570\u5217\u8868\u7684\u65F6\u5019\uFF0C\u90A3\u4E48\u53EA\u4F1A\u521B\u5EFA\u4E00\u6B21Entity\u5BF9\u8C61\u3002\u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFA\u65E0\u53C2\u6784\u9020</p><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E0D\u4F1A\u81EA\u52A8\u521D\u59CB\u5316\uFF0C\u9664\u975E\u901A\u8FC7\u8D4B\u503C\u521D\u59CB\u5316</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u6784\u9020\u51FD\u6570\u9664\u521D\u59CB\u5316\u5217\u8868\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u907F\u514D\u5728\u521B\u5EFA\u5BF9\u8C61\u65F6\u6784\u9020\u51FD\u6570\u88AB\u8C03\u7528\u4E24\u6B21\u7684\u95EE\u9898\uFF0C\u5E76\u4E14\u4E5F\u53EF\u4F7F\u4EE3\u7801\u7ED3\u6784\u66F4\u52A0\u6E05\u6670\u3002</p>`,11);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
