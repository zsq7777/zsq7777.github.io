import{_ as n,f as s}from"./app.1f76b4a4.js";const a={},p=s(`<h1 id="_27-c-\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_27-c-\u7EE7\u627F" aria-hidden="true">#</a> 27. C++\u7EE7\u627F</h1><p>\u516C\u5171\u529F\u80FD\u7684\u57FA\u7C7B\uFF0C\u5141\u8BB8\u6211\u4EEC\u4ECE\u90A3\u4E2A\u57FA\u7C7B\u5206\u79BB\u51FA\u6765\uFF0C\u4ECE\u6700\u521D\u7684\u7236\u7C7B\u4E2D\u521B\u5EFA\u5B50\u7C7B\u3002</p><h2 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h2><p>\u907F\u514D\u4EE3\u7801\u91CD\u590D</p><h2 id="\u591A\u6001-\u57281\u79CD\u7C7B\u578B\u4E0B\u6709\u591A\u79CD\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u591A\u6001-\u57281\u79CD\u7C7B\u578B\u4E0B\u6709\u591A\u79CD\u7C7B\u578B" aria-hidden="true">#</a> \u591A\u6001\uFF0C\u57281\u79CD\u7C7B\u578B\u4E0B\u6709\u591A\u79CD\u7C7B\u578B</h2><p>\u5728\u4EFB\u4F55\u80FD\u7528\u5230Enitiy\u7684\u5730\u65B9\uFF0C\u90FD\u53EF\u4EE5\u7528Player \u3002 Player\u603B\u662FEntity\u7684\u8D85\u96C6</p><p>\u91CD\u5199\u65B9\u6CD5\uFF0C\u5E76\u7ED9\u65B0\u7684\u65B9\u6CD5\u4EE3\u66FF\u7236\u7C7B\u65B9\u6CD5\u8FD0\u884C\u3002</p><p>\u6269\u5C55\u73B0\u6709\u7C7B\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u4EE3\u7801\u793A\u4F8B</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

class Entity <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token keyword">float</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//2\u4E2A8\u5B57\u8282</span>
	<span class="token keyword">void</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token keyword">float</span> changeX<span class="token punctuation">,</span><span class="token keyword">float</span> changeY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		x <span class="token operator">+=</span> changeX<span class="token punctuation">;</span>
		y <span class="token operator">+=</span> changeY<span class="token punctuation">;</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
class Player<span class="token operator">:</span>public Entity <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token keyword">char</span><span class="token operator">*</span> name<span class="token punctuation">;</span> <span class="token comment">//4\u5B57\u8282</span>
	<span class="token keyword">void</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> name <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">initEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Player p<span class="token punctuation">;</span> <span class="token comment">//\u5360\u752812\u5B57\u8282</span>
	p<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,9);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
