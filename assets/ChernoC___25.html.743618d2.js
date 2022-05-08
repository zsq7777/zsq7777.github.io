import{_ as n,f as s}from"./app.e0697572.js";const a={},p=s(`<h1 id="_25-c-\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_25-c-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> 25.C++\u6784\u9020\u51FD\u6570</h1><p>\u6784\u9020\u51FD\u6570\u65F6\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u65F6\u4E00\u79CD\u6BCF\u6B21\u6784\u9020\u4E00\u4E2A\u5BF9\u8C61\u65F6\u90FD\u4F1A\u8C03\u7528\u7684\u65B9\u6CD5\u3002</p><blockquote><p>C++\u9700\u8981\u624B\u52A8\u521D\u59CB\u5316\u57FA\u672C\u7C7B\u578B</p></blockquote><p>\u5982\u679C\u4E0D\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u5C31\u4E0D\u4F1A\u8FD0\u884C\u6784\u9020\u51FD\u6570\u3002 \u5982\u679C\u53EA\u4F7F\u7528\u4E00\u4E2A\u7C7B\u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u4ED6\u4E0D\u4F1A\u6267\u884C</p><h2 id="\u7C7B\u7684\u5806\u5185\u5B58\u5206\u914D" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u5806\u5185\u5B58\u5206\u914D" aria-hidden="true">#</a> \u7C7B\u7684\u5806\u5185\u5B58\u5206\u914D</h2><h2 id="log-delete-\u5220\u9664\u9ED8\u8BA4\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#log-delete-\u5220\u9664\u9ED8\u8BA4\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> Log()=delete \u5220\u9664\u9ED8\u8BA4\u6784\u9020\u51FD\u6570</h2><p>\u8FD8\u6709\u590D\u5236\u6784\u9020\u51FD\u6570\uFF0C\u79FB\u52A8\u6784\u9020\u51FD\u6570</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ol><li>\u4E0D\u521D\u59CB\u5316\u57FA\u672C\u7C7B\u578B\uFF0C\u76F4\u63A5\u8C03\u7528\u7C7B\u4E2D\u7684\u65B9\u6CD5\uFF0C\u4F1A\u8F93\u51FA\u7C7B\u4F3C\u4E8E\u9ED8\u8BA4\u7684\u503C\u3002</li><li>\u6784\u9020\u51FD\u6570\u53EA\u4F1A\u5728\u5BF9\u8C61\u88AB\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u8C03\u7528\uFF0C\u800C\u4F7F\u7528\u9759\u6001\u65B9\u6CD5\u4E0D\u4F1A\u6267\u884C\u6784\u9020\u51FD\u6570\u3002</li></ol><p>\u4EE3\u7801\u793A\u4F8B</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

class Entity <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
private <span class="token operator">:</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;,&#39;</span> <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,11);function e(t,c){return p}var o=n(a,[["render",e]]);export{o as default};
