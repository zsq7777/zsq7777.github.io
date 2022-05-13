import{_ as n,f as s}from"./app.9bc8c786.js";const a={},p=s(`<h1 id="_20-\u5982\u4F55\u5199\u4E00\u4E2Ac-\u7C7B" tabindex="-1"><a class="header-anchor" href="#_20-\u5982\u4F55\u5199\u4E00\u4E2Ac-\u7C7B" aria-hidden="true">#</a> 20. \u5982\u4F55\u5199\u4E00\u4E2AC++\u7C7B</h1><h2 id="\u5199\u4E00\u4E2Alog\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5199\u4E00\u4E2Alog\u7C7B" aria-hidden="true">#</a> \u5199\u4E00\u4E2ALog\u7C7B</h2><p>Log\u7C7B\uFF0C\u7BA1\u7406\u65E5\u5FD7\u4FE1\u606F\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u6253\u5370\u6D88\u606F\u5230\u63A7\u5236\u53F0\uFF0C\u901A\u5E38\u7528\u4E8E\u8C03\u8BD5\u3002 \u6211\u4EEC\u4E0D\u5149\u53EF\u4EE5\u7528\u5B83\u6253\u5370\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E0D\u540C\u989C\u8272\u6253\u5370\uFF0C\u6216\u662F\u901A\u8FC7\u7F51\u7EDC\u8F93\u51FA\u65E5\u5FD7\u6D88\u606F\u5230\u4E00\u4E2A\u6587\u4EF6\uFF0C\u53EF\u4EE5\u505A\u5F88\u591A\u4E8B\u3002</p><h2 id="log\u7C7B\u7684\u57FA\u672C\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#log\u7C7B\u7684\u57FA\u672C\u529F\u80FD" aria-hidden="true">#</a> Log\u7C7B\u7684\u57FA\u672C\u529F\u80FD</h2><p>\u63D0\u4F9B\u5411\u63A7\u5236\u53F0\u5199\u5165\u6587\u672C\u7684\u80FD\u529B\uFF0C\u5E76\u4FDD\u6301\u67D0\u79CD\u7EA7\u522B\u7684\u65E5\u5FD7\uFF0CError,Warning,Info</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

class Log <span class="token punctuation">{</span>
public <span class="token operator">:</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span> Level_ERROR <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span> Level_WARNING <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span> Level_INFO <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
private<span class="token operator">:</span>
	<span class="token keyword">int</span> m_LogLevel<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token keyword">void</span> <span class="token function">SetLevel</span><span class="token punctuation">(</span> <span class="token keyword">int</span> Level<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_LogLevel <span class="token operator">=</span> Level<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_LogLevel <span class="token operator">&gt;=</span> Level_ERROR<span class="token punctuation">)</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[Error:]&quot;</span> <span class="token operator">&lt;&lt;</span> message<span class="token operator">&lt;&lt;</span>std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">WARNING</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_LogLevel <span class="token operator">&gt;=</span> Level_WARNING<span class="token punctuation">)</span>
			std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[WARNING:]&quot;</span> <span class="token operator">&lt;&lt;</span> message <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">INFO</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_LogLevel <span class="token operator">&gt;=</span> Level_INFO<span class="token punctuation">)</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[INFO:]&quot;</span> <span class="token operator">&lt;&lt;</span> message <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Log log<span class="token punctuation">;</span>
	log<span class="token punctuation">.</span><span class="token function">SetLevel</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Level_ERROR<span class="token punctuation">)</span><span class="token punctuation">;</span>
	log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;error\u7EA7\u522B\u65E5\u5FD7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	log<span class="token punctuation">.</span><span class="token function">INFO</span><span class="token punctuation">(</span><span class="token string">&quot;info\u7EA7\u522B\u65E5\u5FD7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	log<span class="token punctuation">.</span><span class="token function">WARNING</span><span class="token punctuation">(</span><span class="token string">&quot;warning\u7EA7\u522B\u65E5\u5FD7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u7B80\u5355log\u7C7B</p><h1 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h1><p>\u7F16\u5199\u7684\u7C7B\u7684\u601D\u8DEF\uFF0C\u8981\u8FBE\u6210\u4EC0\u4E48\u76EE\u7684\uFF0C\u5B9A\u4E49\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u7136\u540E\u53BB\u5B9E\u73B0\u3002</p>`,9);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
