import{_ as n,f as s}from"./app.14edde5e.js";const a={},t=s(`<h1 id="_38-\u521B\u5EFA\u5E76\u521D\u59CB\u5316c-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_38-\u521B\u5EFA\u5E76\u521D\u59CB\u5316c-\u5BF9\u8C61" aria-hidden="true">#</a> 38. \u521B\u5EFA\u5E76\u521D\u59CB\u5316C++\u5BF9\u8C61</h1><h2 id="\u521D\u59CB\u5316c-\u5BF9\u8C61\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316c-\u5BF9\u8C61\u7684\u533A\u522B" aria-hidden="true">#</a> \u521D\u59CB\u5316C++\u5BF9\u8C61\u7684\u533A\u522B</h2><p>\u5185\u5B58\u4ECE\u54EA\u6765\uFF0C\u6211\u4EEC\u4ECE\u54EA\u521B\u5EFA\u5BF9\u8C61</p><h2 id="\u7C7B\u5BF9\u5185\u5B58\u7684\u5F71\u54CD" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5BF9\u5185\u5B58\u7684\u5F71\u54CD" aria-hidden="true">#</a> \u7C7B\u5BF9\u5185\u5B58\u7684\u5F71\u54CD</h2><p>\u4E00\u4E2A\u7C7B\u4EC0\u4E48\u4E5F\u6CA1\u6709\u4E5F\u4F1A\u5360\u75281\u4E2A\u5B57\u8282\u7684\u5185\u5B58</p><h2 id="\u5185\u5B58\u4E3B\u8981\u5206\u4E3A\u4E24\u90E8\u5206-\u6808\u548C\u5806-\u8FD8\u6709\u5176\u4ED6\u90E8\u5206\u5185\u5B58-\u5982\u6E90\u4EE3\u7801\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u4E3B\u8981\u5206\u4E3A\u4E24\u90E8\u5206-\u6808\u548C\u5806-\u8FD8\u6709\u5176\u4ED6\u90E8\u5206\u5185\u5B58-\u5982\u6E90\u4EE3\u7801\u533A\u57DF" aria-hidden="true">#</a> \u5185\u5B58\u4E3B\u8981\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u6808\u548C\u5806 \uFF0C\u8FD8\u6709\u5176\u4ED6\u90E8\u5206\u5185\u5B58\uFF0C\u5982\u6E90\u4EE3\u7801\u533A\u57DF</h2><h3 id="\u6808\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u6808\u5BF9\u8C61" aria-hidden="true">#</a> \u6808\u5BF9\u8C61</h3><p>\u4E00\u4E2A\u81EA\u52A8\u7684\u751F\u5B58\u671F\uFF0C\u751F\u5B58\u671F\u5B9E\u9645\u4E0A\u7531\u5B83\u58F0\u660E\u7684\u5730\u65B9\u4F5C\u7528\u57DF\u51B3\u5B9A\u7684\uFF0C\u53D8\u91CF\u8D85\u51FA\u4F5C\u7528\u57DF\u5C31\u88AB\u91CA\u653E\u4E86\u3002 \u6808\u5BF9\u8C61\u7684\u751F\u5B58\u671F\u7531\u5B83\u6240\u58F0\u660E\u7684\u4F5C\u7528\u57DF\u51B3\u5B9A\u3002</p><h4 id="\u521B\u5EFA\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u65B9\u6CD5" aria-hidden="true">#</a> \u521B\u5EFA\u65B9\u6CD5</h4><p>\u901A\u5E38\u5E94\u8BE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u521B\u5EFA\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u8FD9\u662FC++\u4E2D\u6700\u5FEB\u7684\u65B9\u6CD5\uFF0C\u4E5F\u662F\u53EF\u4EE5\u201D\u7BA1\u63A7\u7684\u65B9\u6CD5\u201C\uFF0C\u53BB\u521D\u59CB\u5316\u5BF9\u8C61\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Entity entity<span class="token punctuation">;</span>
Entity <span class="token function">entity1</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Entity entity2<span class="token operator">=</span><span class="token function">Entity</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u8D75&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> entity2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u4E0D\u80FD\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u80FD\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u4E0D\u80FD\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u7684\u60C5\u51B5</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

using String <span class="token operator">=</span> std<span class="token operator">::</span>string<span class="token punctuation">;</span>

class Entity <span class="token punctuation">{</span>
private<span class="token operator">:</span>
	String name<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">Entity</span><span class="token punctuation">(</span>String nameStr<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">name</span><span class="token punctuation">(</span>nameStr<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> String <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> name<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 Entity entity<span class="token punctuation">;</span>
	 Entity <span class="token function">entity1</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	 Entity entity2<span class="token operator">=</span><span class="token function">Entity</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u8D75&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> entity2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u51FD\u6570\u7ED3\u675F\u65F6\uFF0C\u6808\u5E27\u4F1A\u88AB\u9500\u6BC1\u3002\u6240\u6709\u5185\u5B58\uFF0C\u53D8\u91CF\u90FD\u88AB\u9500\u6BC1/\u91CA\u653E\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

using String <span class="token operator">=</span> std<span class="token operator">::</span>string<span class="token punctuation">;</span>

class Entity <span class="token punctuation">{</span>
private<span class="token operator">:</span>
	String name<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">Entity</span><span class="token punctuation">(</span>String nameStr<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">name</span><span class="token punctuation">(</span>nameStr<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> String <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> name<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 Entity<span class="token operator">*</span> entityW<span class="token punctuation">;</span>
	 <span class="token punctuation">{</span>
		 Entity <span class="token function">entity</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 entityW <span class="token operator">=</span> <span class="token operator">&amp;</span>entity<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>
	 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span> <span class="token operator">*</span> entityW<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> <span class="token comment">//\u6216\u8005\u4F7F\u7528entityW-&gt;getName()</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u6808\u4E0A\u7684\u5185\u5B58\u540C\u4E0A\u90FD\u6BD4\u8F83\u5C0F</p><h2 id="\u5806\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5806\u5BF9\u8C61" aria-hidden="true">#</a> \u5806\u5BF9\u8C61</h2><p>\u5806\u4E2D\u5206\u914D\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E4B\u9645\u4E0A\u5DF2\u7ECF\u5728\u5806\u4E0A\u521B\u5EFA\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u77E5\u9053\u505A\u51FA\u51B3\u5B9A\u4E0D\u518D\u9700\u8981\u5B83\uFF0C\u6211\u9700\u8981\u91CA\u653E\u3002 \u5806\u5BF9\u8C61\u7684\u751F\u5B58\u671F\uFF0C\u9664\u975E\u624B\u52A8\u91CA\u653E\uFF0C\u4E0D\u7136\u4F1A\u4E00\u76F4\u5B58\u5728\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Entity<span class="token operator">*</span> entityW <span class="token operator">=</span> new <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u5C31\u662FJava\u6216C++\u4E2D\u521B\u5EFA\u5BF9\u8C61\u7684\u6837\u5B50\u3002</p><h3 id="\u4E0Ejava-c-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E0Ejava-c-\u7684\u533A\u522B" aria-hidden="true">#</a> \u4E0EJava/C#\u7684\u533A\u522B</h3><p>C++\u989D\u5916\u53EF\u4EE5\u5728\u6808\u4E0A\u5206\u914D\u3002 C#\u4E2D\u7684struct\uFF0C\u57FA\u4E8E\u503C\u7C7B\u578B\uFF0C\u4ED6\u4EEC\u5B9E\u9645\u4E0A\u65F6\u5728\u6808\u4E0A\u5206\u914D\u7684\uFF0C\u5373\u4F7F\u4F7F\u7528new\u5173\u952E\u5B57\u3002C#\u6240\u6709\u7C7B\u90FD\u662F\u5728\u6808\u4E0A\u5206\u914D\u7684 Java\u6240\u6709\u7684\u4E1C\u897F\u90FD\u5728\u5806\u4E0A</p><h3 id="\u5806\u4E0A\u5206\u914D\u7684\u6027\u80FD\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5806\u4E0A\u5206\u914D\u7684\u6027\u80FD\u95EE\u9898" aria-hidden="true">#</a> \u5806\u4E0A\u5206\u914D\u7684\u6027\u80FD\u95EE\u9898</h3><p>\u5806\u4E0A\u5206\u914D\u5185\u5B58\u8981\u6BD4\u6808\u82B1\u8D39\u66F4\u957F\u65F6\u95F4\uFF0C\u800C\u4E14\u5982\u679C\u5728\u5806\u4E0A\u5206\u914D\u7684\u8BDD\uFF0C\u5FC5\u987B\u624B\u52A8\u91CA\u653E\u88AB\u5206\u914D\u7684\u5185\u5B58</p><h3 id="\u5220\u9664\u8BE5\u5BF9\u8C61\u6240\u5360\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8BE5\u5BF9\u8C61\u6240\u5360\u5185\u5B58" aria-hidden="true">#</a> \u5220\u9664\u8BE5\u5BF9\u8C61\u6240\u5360\u5185\u5B58</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>delete entityW<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4F7F\u7528\u4E0D\u540C\u65B9\u6CD5\u521B\u5EFA\u5BF9\u8C61\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E0D\u540C\u65B9\u6CD5\u521B\u5EFA\u5BF9\u8C61\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u4F7F\u7528\u4E0D\u540C\u65B9\u6CD5\u521B\u5EFA\u5BF9\u8C61\u7684\u60C5\u51B5</h2><p>\u7C7B\u6BD4\u8F83\u5927\uFF0C\u9700\u8981\u663E\u5F0F\u63A7\u5236\u5BF9\u8C61\u751F\u5B58\u671F\uFF0C\u5C31\u7528\u5806\u4E0A\u521B\u5EFA\u3002\u5426\u5219 \u5C31\u7528\u6808\u4E0A\u521B\u5EFA</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u6808\u4E0A\u7684\u5BF9\u8C61\u7684\u751F\u5B58\u671F\u4E0E\u53D8\u91CF\u6240\u58F0\u660E\u7684\u4F5C\u7528\u57DF\u6709\u5173\u3002\u4F5C\u7528\u57DF\u7ED3\u675F\uFF0C \u6808\u5E27\u9500\u6BC1\u3002 \u5806\u4E0A\u521B\u5EFA\u7684\u5BF9\u8C61\u9700\u8981\u81EA\u5DF1\u624B\u52A8\u91CA\u653E\u5185\u5B58\u3002 \u5806\u5BF9\u8C61\u9700\u8981new\u5173\u952E\u5B57\uFF0C\u6808\u4E0D\u7528\u3002 \u6808\u5BF9\u8C61\u7684\u521B\u5EFA\u66F4\u5FEB\uFF0C\u4E14\u6613\u4E8E\u7BA1\u7406\uFF0C\u4F46\u662F\u53EF\u7528\u5185\u5B58\u5C0F\u3002 \u5806\u5BF9\u8C61\u751F\u5B58\u671F\u66F4\u957F\uFF0C\u4F46\u8981\u6CE8\u610F\u63A7\u5236\uFF0C\u53EF\u7528\u5185\u5B58\u5927\u3002</p>`,30);function p(e,c){return t}var l=n(a,[["render",p]]);export{l as default};
