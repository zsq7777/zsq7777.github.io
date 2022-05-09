import{_ as n,f as s}from"./app.024c5519.js";const a={},p=s(`<h1 id="_45-c-\u7684\u590D\u5236\u4E0E\u62F7\u8D1D\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_45-c-\u7684\u590D\u5236\u4E0E\u62F7\u8D1D\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> 45. C++\u7684\u590D\u5236\u4E0E\u62F7\u8D1D\u6784\u9020\u51FD\u6570</h1><p>\u590D\u5236\u53EF\u4EE5\u7406\u89E3\u4E3A\u5185\u5B58\u62F7\u8D1D\uFF0CC++\u4E2D\u4F55\u65F6\u4F1A\u62F7\u8D1D\u3002</p><p>\u590D\u5236\u9700\u8981\u65F6\u95F4\uFF0C\u5E76\u4E14\u4E5F\u4F1A\u6D88\u8017\u5185\u5B58\u548C\u78C1\u76D8\uFF0C\u6D6A\u8D39\u6027\u80FD\u3002</p><p>\u601D\u8003\uFF1A \u4EC0\u4E48\u60C5\u51B5\u4E0B\u505A\u5185\u5B58\u62F7\u8D1D\uFF1F \u4EC0\u4E48\u60C5\u51B5\u4E0B\u53EA\u662F\u5BF9\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u5BF9\u8C61\u505A\u8BFB\u53D6\u6216\u4FEE\u6539\uFF1F</p><h2 id="\u590D\u5236\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u590D\u5236\u7684\u60C5\u51B5</h2><h3 id="\u590D\u5236-\u58F0\u660E\u4E14\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236-\u58F0\u660E\u4E14\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> \u590D\u5236\uFF08\u58F0\u660E\u4E14\u5B9A\u4E49\u53D8\u91CF\uFF09</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
	a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> 
    <span class="token comment">// \u8F93\u51FA\uFF1Ab=1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u53EF\u4EE5\u770B\u51FA <code>int b=a</code> \u662F\u590D\u5236\u4E86a\u7684\u503C\u800C\u975E (\u5F15\u7528/\u6307\u5411a\u7684\u5185\u5B58)\u3002</p><h3 id="\u590D\u5236\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u6307\u9488" aria-hidden="true">#</a> \u590D\u5236\u6307\u9488</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>    <span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span><span class="token operator">*</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
	<span class="token operator">*</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\uFF08\u58F0\u660E\u4E14\u5B9A\u4E49\u53D8\u91CF\uFF09\u7684\u4E00\u79CD\u65B9\u6CD5\uFF0C\u4E0E\u4E0A\u4E0B\u6587\u65E0\u5173\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>    <span class="token keyword">struct</span> <span class="token class-name">MyStruct</span>
    <span class="token punctuation">{</span>
    	<span class="token keyword">float</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    MyStruct a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5BF9\u6307\u9488\u7684\u4FEE\u6539\u5E76\u4E0D\u4F1A\u5F71\u54CD\u6307\u5411\u7684\u5185\u5B58\u7684\u503C\uFF0C \u4F46\u662F\u5185\u5B58\u4FEE\u6539\u4F1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>    MyStruct<span class="token operator">*</span> a <span class="token operator">=</span> new <span class="token function">MyStruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	MyStruct<span class="token operator">*</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
	<span class="token comment">//b++;  \u4FEE\u6539\u6307\u9488</span>
	b<span class="token operator">-&gt;</span>x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>  <span class="token comment">//\u4FEE\u6539\u5185\u5B58\u4E2D\u7684\u503C</span>

	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span> a<span class="token operator">-&gt;</span>x<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="\u5C0F\u8282\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u8282\u603B\u7ED3" aria-hidden="true">#</a> \u5C0F\u8282\u603B\u7ED3</h4><p>\u5728\u505A=\u64CD\u4F5C\u65F6\uFF0C\u8981\u5206\u6E05\u695A\u65F6\u5728\u590D\u5236\u6307\u9488\u8FD8\u662F\u5728\u590D\u5236\u5185\u5B58\u3002</p><h3 id="\u5B57\u7B26\u4E32\u590D\u5236-\u6808\u5BF9\u8C61\u6570\u636E\u590D\u5236\u5230\u5806\u4E0A-\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u590D\u5236-\u6808\u5BF9\u8C61\u6570\u636E\u590D\u5236\u5230\u5806\u4E0A-\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u590D\u5236 \u6808\u5BF9\u8C61\u6570\u636E\u590D\u5236\u5230\u5806\u4E0A \u6D45\u62F7\u8D1D</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

class String <span class="token punctuation">{</span>
private <span class="token operator">:</span>
	<span class="token keyword">char</span><span class="token operator">*</span> m_Buffer<span class="token punctuation">;</span>
	<span class="token keyword">unsigned</span> <span class="token keyword">int</span> m_Size<span class="token punctuation">;</span>
public <span class="token operator">:</span>
	<span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_Size <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5B57\u7B26\u6570\u7EC4\u957F\u5EA6</span>
		m_Buffer <span class="token operator">=</span> new <span class="token keyword">char</span><span class="token punctuation">[</span>m_Size<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u521B\u5EFA\u5806\u4E0A\u7684\u5B57\u7B26\u6570\u7EC4</span>
		<span class="token comment">//for (int i = 0; i &lt; m_Size; i++) {</span>
		<span class="token comment">//	m_Buffer[i] = str[i];</span>
		<span class="token comment">//}</span>
		<span class="token function">memcpy</span><span class="token punctuation">(</span>m_Buffer<span class="token punctuation">,</span> str<span class="token punctuation">,</span> m_Size<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5C06\u5B57\u7B26\u5B57\u9762\u91CF\u5185\u5B58</span>
		m_Buffer<span class="token punctuation">[</span>m_Size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//\u7ED3\u675F\u4F4D</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token operator">~</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		delete<span class="token punctuation">[</span><span class="token punctuation">]</span> m_Buffer<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	friend std<span class="token operator">::</span>ostream<span class="token operator">&amp;</span> operator<span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>std<span class="token operator">::</span>ostream<span class="token operator">&amp;</span> stream<span class="token punctuation">,</span> <span class="token keyword">const</span> String<span class="token operator">&amp;</span> string<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

std<span class="token operator">::</span>ostream<span class="token operator">&amp;</span> operator<span class="token operator">&lt;&lt;</span><span class="token punctuation">(</span>std<span class="token operator">::</span>ostream<span class="token operator">&amp;</span> stream<span class="token punctuation">,</span> <span class="token keyword">const</span> String<span class="token operator">&amp;</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	stream <span class="token operator">&lt;&lt;</span> string<span class="token punctuation">.</span>m_Buffer<span class="token punctuation">;</span>
	<span class="token keyword">return</span> stream<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
	String <span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4F20\u5165\u5B57\u7B26\u5B57\u9762\u91CF\uFF0C\u56E0\u4E3A\u5B83\u65F6\u53EA\u8BFB\u7684\uFF0C\u6240\u4EE5\u8981\u58F0\u660Econst</span>

	 <span class="token comment">//\u518D\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u7684\u65F6\u4FAF\uFF0C \u6CA1\u6709\u95EE\u9898</span>

	String a<span class="token operator">=</span>name<span class="token punctuation">;</span> <span class="token comment">//\u6D45\u62F7\u8D1D\uFF0C\u62F7\u8D1D\u4E86\u5185\u5B58\u4E2D\u7684\u5185\u5BB9\uFF0C  \u4F46\u662F\uFF0CString\u7684\u53D8\u91CF m_Buffer\u662F\u6307\u9488\uFF0C\u6240\u4EE5\uFF0Cname\u548Ca\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A\u6307\u9488\uFF0C\u540C\u4E00\u4E2A\u6307\u9488\u6307\u5411\u7684m_Buffer\u5185\u5B58,\u88AB\u9500\u6BC1\u4E86\u4E24\u6B21\uFF0C\u5BFC\u81F4\u62A5\u9519\u3002</span>
	<span class="token comment">//... \u62A5\u9519\u4E86 </span>

	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> name <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u95EE\u9898\uFF1A \u4E3A\u4EC0\u4E48\u7C7B\u4E2D\u4E0D\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49\u91CD\u8F7D&lt;&lt;\u8FD0\u7B97\u7B26?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h4 id="\u6D45\u62F7\u8D1D\u9020\u6210\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D\u9020\u6210\u7684\u95EE\u9898" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D\u9020\u6210\u7684\u95EE\u9898</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
	String <span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;able&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4F20\u5165\u5B57\u7B26\u5B57\u9762\u91CF\uFF0C\u56E0\u4E3A\u5B83\u65F6\u53EA\u8BFB\u7684\uFF0C\u6240\u4EE5\u8981\u58F0\u660Econst</span>

	 <span class="token comment">//\u518D\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u7684\u65F6\u4FAF\uFF0C \u6CA1\u6709\u95EE\u9898</span>
	String a<span class="token operator">=</span>name<span class="token punctuation">;</span> <span class="token comment">//\u6D45\u62F7\u8D1D\uFF0C\u62F7\u8D1D\u4E86\u5185\u5B58\u4E2D\u7684\u5185\u5BB9\uFF0C  \u4F46\u662F\uFF0CString\u7684\u53D8\u91CF m_Buffer\u662F\u6307\u9488\uFF0C\u6240\u4EE5\uFF0Cname\u548Ca\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A\u6307\u9488\uFF0C\u540C\u4E00\u4E2A\u6307\u9488\u6307\u5411\u7684m_Buffer\u5185\u5B58,\u88AB\u9500\u6BC1\u4E86\u4E24\u6B21\uFF0C\u5BFC\u81F4\u62A5\u9519\u3002</span>

	
	a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">;</span>

	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> name <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> 
	 <span class="token comment">//\u90FD\u8F93\u51FAabce</span>
<span class="token punctuation">}</span>
	<span class="token comment">//... \u4F5C\u7528\u57DF\u7ED3\u675F \uFF0C\u5D29\u6E83</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u9ED8\u8BA4\u7684\u62F7\u8D1D\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7684\u62F7\u8D1D\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u9ED8\u8BA4\u7684\u62F7\u8D1D\u6784\u9020\u51FD\u6570</h2><p>\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u514B\u9686\u8BE5\u5B57\u7B26\u4E32\u8FD4\u56DE\u4F46\u662F\uFF0C\u66F4\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528\u62F7\u8D1D\u6784\u9020\u51FD\u6570\u3002</p><p>String\u7C7B\u589E\u52A0\u62F7\u8D1D\u6784\u9020\u51FD\u6570</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">const</span> String<span class="token operator">&amp;</span> other<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5185\u5B58\u590D\u5236\uFF0C\u5C06other\u5BF9\u8C61\u7684\u5185\u5B58\u6D45\u62F7\u8D1D\u8FDB\u6210\u5458\u53D8\u91CF</span>

<span class="token comment">//\u6216\u662F</span>

<span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">const</span> String<span class="token operator">&amp;</span> other<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token function">memcpy</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span><span class="token operator">&amp;</span>other<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D</h2><h3 id="\u91CD\u5199\u9ED8\u8BA4\u62F7\u8D1D\u6784\u9020\u51FD\u6570-\u89E3\u51B32\u4E2A\u6307\u9488\u6307\u5411\u4E00\u4E2A\u5185\u5B58\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5199\u9ED8\u8BA4\u62F7\u8D1D\u6784\u9020\u51FD\u6570-\u89E3\u51B32\u4E2A\u6307\u9488\u6307\u5411\u4E00\u4E2A\u5185\u5B58\u7684\u95EE\u9898" aria-hidden="true">#</a> \u91CD\u5199\u9ED8\u8BA4\u62F7\u8D1D\u6784\u9020\u51FD\u6570\uFF0C\u89E3\u51B32\u4E2A\u6307\u9488\u6307\u5411\u4E00\u4E2A\u5185\u5B58\u7684\u95EE\u9898</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">const</span> String<span class="token operator">&amp;</span> other<span class="token punctuation">)</span><span class="token operator">=</span>delete<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7406\u89E3\u4E3A\u91CD\u5199\u9ED8\u8BA4\u7684\u6784\u9020\u51FD\u6570</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u590D\u5236\u65F6\uFF0C\u5BF9\u8BE5\u5BF9\u8C61\u7684m_Buffer\u91CD\u65B0\u5206\u914D\u5806\u5185\u5B58\u3002</span>
	<span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">const</span> String<span class="token operator">&amp;</span> other<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">m_Size</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>m_Size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_Buffer <span class="token operator">=</span> new <span class="token keyword">char</span><span class="token punctuation">[</span>m_Size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
		<span class="token function">memcpy</span><span class="token punctuation">(</span>m_Buffer<span class="token punctuation">,</span> other<span class="token punctuation">.</span>m_Buffer<span class="token punctuation">,</span> m_Size<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u6CE8" tabindex="-1"><a class="header-anchor" href="#\u6CE8" aria-hidden="true">#</a> \u6CE8</h2><p>\u53EF\u80FD\u518D\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u590D\u5236\u6BD4\u5F15\u7528\u66F4\u5FEB\u3002\u8FD9\u6D89\u53CA\u5230\u4F18\u5316\u3002</p><h2 id="\u4F7F\u7528kotlin-\u5224\u65AD-\u662F\u5F15\u7528\u8FD8\u662F\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528kotlin-\u5224\u65AD-\u662F\u5F15\u7528\u8FD8\u662F\u590D\u5236" aria-hidden="true">#</a> \u4F7F\u7528kotlin\uFF0C \u5224\u65AD=\u662F\u5F15\u7528\u8FD8\u662F\u590D\u5236</h2><h3 id="\u64CD\u4F5C\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u5BF9\u8C61" aria-hidden="true">#</a> \u64CD\u4F5C\u5BF9\u8C61</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">class</span> <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token operator">:</span>String <span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span>
    <span class="token keyword">var</span> age<span class="token operator">:</span>Int<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">val</span> entity <span class="token operator">=</span> <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    entity<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot;\u6D4B\u8BD5&quot;</span></span>
    <span class="token keyword">val</span> entity1<span class="token operator">=</span> entity
    entity1<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot;\u4F60\u597D&quot;</span></span>

    <span class="token function">println</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>entity1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    
<span class="token punctuation">}</span>

<span class="token comment">//\u8F93\u51FA\u4E24\u6B21\u201C\u4F60\u597D&quot; ,\u4EE3\u8868\u4ED6\u4EEC\u662F\u4E00\u4E2A\u5185\u5B58\u3002 \u5BF9\u8C61\u7684\u64CD\u4F5C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="\u64CD\u4F5C\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u64CD\u4F5C\u5B57\u7B26\u4E32</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>
<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">val</span> name <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;\u6D4B\u8BD5&quot;</span></span>
    <span class="token keyword">var</span> nameA <span class="token operator">=</span> name<span class="token punctuation">;</span>
    nameA<span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot;\u4F60\u597D&quot;</span></span>

    <span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>nameA<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//\u8F93\u51FA&quot;\u6D4B\u8BD5&quot; \u201C\u4F60\u597D&quot; ,\u4EE3\u8868\u662F\u590D\u5236\u64CD\u4F5C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>Java\u4E2D\u5BF9\u5B57\u7B26\u4E32\u7684\u64CD\u4F5C\u90FD\u662F\u590D\u5236\uFF0C\u800C\u5BF9\u8C61\u7684\u4F20\u9012\u90FD\u662F\u5F15\u7528\u3002 \u800C\u62F7\u8D1D\u7684\u8BDD \u9700\u8981\u7528\u5230Clone()\u65B9\u6CD5\u3002</p><p>C++\u4E2D,\u9ED8\u8BA4\u5B9A\u4E49\u53D8\u91CF(\u5BF9\u8C61),\u4F20\u9012\u7684\u662F\u590D\u5236,\u5411\u51FD\u6570\u4F20\u5165Entity* \uFF0C\u590D\u5236\u6307\u9488\u3002 Entity&amp; \u590D\u5236\u5F15\u7528(\u5F15\u7528\u4E5F\u662F\u522B\u540D\uFF0C\u4F46\u662F\u76F4\u63A5\u4EE3\u8868\u5185\u5B58)\u3002</p>`,39);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};
