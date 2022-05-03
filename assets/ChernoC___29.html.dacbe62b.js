import{_ as n,f as s}from"./app.5bafefdc.js";const a={},p=s(`<h1 id="_29-c-\u7EAF\u865A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_29-c-\u7EAF\u865A\u51FD\u6570" aria-hidden="true">#</a> 29. C++\u7EAF\u865A\u51FD\u6570</h1><p>\u7EAF\u865A\u51FD\u6570\u5141\u8BB8\u6211\u4EEC\u5728\u57FA\u7C7B\u4E2D\u5B9A\u4E49\u4E00\u4E2A\u6CA1\u6709\u5B9E\u73B0\u7684\u51FD\u6570\uFF0C\u7136\u540E\u5F3A\u5236\u5B50\u7C7B\u53BB\u5B9E\u73B0\u8BE5\u51FD\u6570\u3002</p><h2 id="\u5BF9\u6BD4\u865A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4\u865A\u51FD\u6570" aria-hidden="true">#</a> \u5BF9\u6BD4\u865A\u51FD\u6570</h2><p>\u662F\u5426\u8986\u5199\u65B9\u6CD5\u7531\u5B50\u7C7B\u81EA\u5DF1\u51B3\u5B9A\uFF0C\u800C\u5728\u6211\u4EEC\u9700\u8981\u5F3A\u5236\u5B50\u7C7B\u4E3A\u7279\u5B9A\u7684\u51FD\u6570\u63D0\u4F9B\u81EA\u5DF1\u7684\u5B9A\u4E49\uFF0C\u5C31\u9700\u8981\u7528\u5230\u7EAF\u865A\u51FD\u6570(\u63A5\u53E3)\u3002</p><blockquote><p>\u7EAF\u865A\u51FD\u6570\u5FC5\u987B\u5B9E\u73B0\uFF0C\u624D\u80FD\u521B\u5EFA\u8FD9\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u3002</p></blockquote><h2 id="\u5728c-\u4E2D\u63A5\u53E3\u53EA\u662Fc-\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5728c-\u4E2D\u63A5\u53E3\u53EA\u662Fc-\u7684\u7C7B" aria-hidden="true">#</a> \u5728C++ \u4E2D\u63A5\u53E3\u53EA\u662FC++\u7684\u7C7B</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u4EE3\u7801\u793A\u4F8B</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

class Printable <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	virtual std<span class="token operator">::</span>string <span class="token function">GetClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

class Entity<span class="token operator">:</span>public Printable <span class="token punctuation">{</span>
public<span class="token operator">:</span>
  virtual std<span class="token operator">::</span>string <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u88AB\u8986\u5199\u4F1A\u6307\u5411\u6B63\u786E\u7684\u51FD\u6570</span>
		<span class="token keyword">return</span> <span class="token string">&quot;Entity&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  std<span class="token operator">::</span>string <span class="token function">GetClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> override <span class="token punctuation">{</span>
	  <span class="token keyword">return</span> <span class="token string">&quot;Entity&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
class Player <span class="token operator">:</span> public Entity <span class="token punctuation">{</span>
private<span class="token operator">:</span>
	std<span class="token operator">::</span>string m_Name<span class="token punctuation">;</span>
	<span class="token keyword">float</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token function">Player</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token operator">::</span>string<span class="token operator">&amp;</span> name<span class="token punctuation">,</span><span class="token keyword">float</span> x<span class="token punctuation">,</span><span class="token keyword">float</span> y<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">x</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">y</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u5217\u8868</span>
	std<span class="token operator">::</span>string <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> override <span class="token punctuation">{</span> <span class="token keyword">return</span> m_Name<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	<span class="token keyword">float</span> <span class="token function">GetX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	<span class="token keyword">float</span> <span class="token function">GetY</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    std<span class="token operator">::</span>string <span class="token function">GetClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> override<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;Player&quot;</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>


<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">Print</span><span class="token punctuation">(</span>Printable<span class="token operator">*</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>cout<span class="token operator">&lt;&lt;</span> obj<span class="token operator">-&gt;</span><span class="token function">GetClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Player<span class="token operator">*</span> p <span class="token operator">=</span> new <span class="token function">Player</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> p<span class="token operator">-&gt;</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> p<span class="token operator">-&gt;</span><span class="token function">GetX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> p<span class="token operator">-&gt;</span><span class="token function">GetY</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

	Entity<span class="token operator">*</span> e <span class="token operator">=</span> p<span class="token punctuation">;</span>  <span class="token comment">//\u6307\u5411\u7236\u7C7B\uFF0C</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> e<span class="token operator">-&gt;</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> <span class="token comment">//\u8F93\u51FA\u7684\u662F\u5B50\u7C7B\u7684GetName\u7ED3\u679C\u3002 \u201C\u8D75\u601D\u7426\u201D</span>

	Entity<span class="token operator">*</span> newe<span class="token operator">=</span>new <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">Print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5B9E\u73B0\u63A5\u53E3\u65B9\u6CD5\u7136\u540E\u8C03\u7528\u5E76\u6839\u636E\u5B9E\u4F8B\u4E0D\u540C\u8F93\u51FA\u4E0D\u540C\u7684\u503C</span>
	<span class="token function">Print</span><span class="token punctuation">(</span>newe<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5B9E\u73B0\u63A5\u53E3\u65B9\u6CD5\u7136\u540E\u8C03\u7528\u5E76\u6839\u636E\u5B9E\u4F8B\u4E0D\u540C\u8F93\u51FA\u4E0D\u540C\u7684\u503C</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u7EAF\u865A\u51FD\u6570\u7684\u58F0\u660E\uFF1A\u5728\u51FD\u6570\u524D\u52A0virtual ,\u5C06\u51FD\u6570\u4F53\u66FF\u6362\u4E3A =0; \u7EAF\u865A\u51FD\u6570(\u63A5\u53E3)\u5FC5\u987B\u88AB\u5B9E\u73B0\u3002 \u5199\u6CD5\u548C\u865A\u51FD\u6570\u7684\u8986\u5199\u4E00\u6837\u3002\u5728\u51FD\u6570\u540D() \u540E\u52A0 override</p>`,9);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
