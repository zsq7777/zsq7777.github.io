import{_ as n,f as s}from"./app.024c5519.js";const a={},p=s(`<h1 id="_24-c-\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#_24-c-\u679A\u4E3E" aria-hidden="true">#</a> 24. C++\u679A\u4E3E</h1><h2 id="enum\u662F-enumeration" tabindex="-1"><a class="header-anchor" href="#enum\u662F-enumeration" aria-hidden="true">#</a> enum\u662F enumeration</h2><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u57FA\u672C\u4E0A\uFF0C\u5B83\u5C31\u662F\u4E2A\u6570\u503C\u96C6\u5408\u3002 \u66F4\u5B9E\u9645\u7684\u5B9A\u4E49\uFF0C\u662F\u4E00\u79CD\u7ED9\u3010\u503C\u547D\u540D\u7684\u4E00\u79CD\u65B9\u6CD5\u3011</p><h2 id="\u4F7F\u7528\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6CE8\u610F" aria-hidden="true">#</a> \u4F7F\u7528\u6CE8\u610F</h2><p>\u7C7B\u4E2D\u7684\u679A\u4E3E\u7684\u547D\u540D\u4E0D\u80FD\u548C \u7C7B\u4E2D\u7684\u65B9\u6CD5\u540D\u4E00\u6837</p><h2 id="\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#\u597D\u5904" aria-hidden="true">#</a> \u597D\u5904</h2><p>\u8BA9\u6211\u4EEC\u7684\u4EE3\u7801\u66F4\u5E72\u51C0\uFF0C\u679A\u4E3E\u7684\u540E\u9762\u5176\u5B9E\u5C31\u662F\u6574\u6570\u3002 \u5982\u679C\u4F60\u6709\u4E00\u4E2A\u6570\u503C\u96C6\u5408\uFF0C\u800C\u4F60\u60F3\u7528\u6570\u5B57\u6765\u8868\u793A\u4ED6\u4EEC\u3002\u679A\u4E3E\u5C31\u662F\u4F60\u60F3\u8981\u7684\u3002</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

class Log <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token keyword">enum</span> <span class="token class-name">LevelLog</span> <span class="token punctuation">{</span>
		Level_ERROR <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> Level_WARNING<span class="token punctuation">,</span> Level_INFO
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
private<span class="token operator">:</span>
	LevelLog m_LogLevel<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token keyword">void</span> <span class="token function">SetLevel</span><span class="token punctuation">(</span>LevelLog Level<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		m_LogLevel <span class="token operator">=</span> Level<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>m_LogLevel <span class="token operator">&gt;=</span> Level_ERROR<span class="token punctuation">)</span>
			std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;[Error:]&quot;</span> <span class="token operator">&lt;&lt;</span> message <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
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
	
	log<span class="token punctuation">.</span><span class="token function">SetLevel</span><span class="token punctuation">(</span>Log<span class="token operator">::</span>Level_INFO<span class="token punctuation">)</span><span class="token punctuation">;</span>
	log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;error\u7EA7\u522B\u65E5\u5FD7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	log<span class="token punctuation">.</span><span class="token function">INFO</span><span class="token punctuation">(</span><span class="token string">&quot;info\u7EA7\u522B\u65E5\u5FD7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	log<span class="token punctuation">.</span><span class="token function">WARNING</span><span class="token punctuation">(</span><span class="token string">&quot;warning\u7EA7\u522B\u65E5\u5FD7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,10);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
