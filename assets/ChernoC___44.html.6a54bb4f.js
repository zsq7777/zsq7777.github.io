import{_ as n,f as s}from"./app.5bafefdc.js";const a={},p=s(`<h1 id="_44-c-\u7684\u667A\u80FD\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#_44-c-\u7684\u667A\u80FD\u6307\u9488" aria-hidden="true">#</a> 44. C++\u7684\u667A\u80FD\u6307\u9488</h1><p>\u5B9E\u73B0\u81EA\u52A8new\u5806\u4E0A\u5206\u914D\u5185\u5B58\uFF0C\u81EA\u52A8delete\u5220\u9664\u5185\u5B58\u3002 \u667A\u80FD\u6307\u9488\u662F\u5B9E\u73B0\u8FD9\u4EE5\u529F\u80FD\u7684\u65B9\u6CD5\u4E4B\u4E00\u3002 \u667A\u80FD\u6307\u9488\u672C\u8D28\u4E0A\u662F\u539F\u59CB\u6307\u9488\u7684\u5305\u88C5\u3002</p><h2 id="unique-ptr-\u4F5C\u7528\u57DF\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#unique-ptr-\u4F5C\u7528\u57DF\u6307\u9488" aria-hidden="true">#</a> unique_ptr \u4F5C\u7528\u57DF\u6307\u9488</h2><p>\u8D85\u51FA\u4F5C\u7528\u65F6\uFF0C\u88ABdelete\u9500\u6BC1\u3002</p><p>\u590D\u5236unique_ptr\u6307\u9488\uFF0C\u4F1A\u5BFC\u81F4\u4E24\u4E2A\u6307\u9488\u6307\u5411\u540C\u4E00\u4E2A\u5185\u5B58\uFF0C\u5176\u4E2D\u4E00\u4E2A\u6307\u9488\u91CA\u653E\u5185\u5B58\uFF0C\u90A3\u4E48\u53E6\u4E00\u4E2A\u4F1A\u6307\u5411\u5DF2\u7ECF\u88AB\u91CA\u653E\u7684\u5185\u5B58\u3002 \u6240\u4EE5\uFF0C\u4E0D\u80FD\u590D\u5236unique_ptr\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span></span>

class Entity <span class="token punctuation">{</span>
public<span class="token operator">:</span>

	<span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Created&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token operator">~</span><span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Destoryed&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>



<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u4EE5\u4E0B\u4E24\u79CD\u521B\u5EFA\u65B9\u5F0F</span>
	<span class="token punctuation">{</span>
		std<span class="token operator">::</span>unique_ptr<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> <span class="token function">e</span><span class="token punctuation">(</span>new Entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    
	<span class="token punctuation">{</span>
		std<span class="token operator">::</span>unique_ptr<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> e <span class="token operator">=</span> std<span class="token operator">::</span>make_unique<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5F02\u5E38\u5B89\u5168</span>
        std<span class="token operator">::</span>unique_ptr<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> a<span class="token operator">=</span>e<span class="token punctuation">;</span><span class="token comment">//\u62A5\u9519</span>
	<span class="token punctuation">}</span>
	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="\u4E0D\u80FD\u91CD\u590D\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u80FD\u91CD\u590D\u7684\u539F\u56E0" aria-hidden="true">#</a> \u4E0D\u80FD\u91CD\u590D\u7684\u539F\u56E0</h3><p>\u4F5C\u7528\u4E8E\u6307\u9488\u7684\uFF0C\u62F7\u8D1D\u6784\u9020\u51FD\u6570\u548C\u62F7\u8D1D\u64CD\u4F5C\u7B26\u88AB\u5220\u9664\u4E86\u3002</p><h2 id="shared-ptr-\u5171\u4EAB\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#shared-ptr-\u5171\u4EAB\u6307\u9488" aria-hidden="true">#</a> shared_ptr \u5171\u4EAB\u6307\u9488</h2><p>shared_ptr\u7684\u5B9E\u73B0\u65B9\u5F0F\u5B9E\u9645\u4E0A\u53D6\u51B3\u4E8E\u7F16\u8BD1\u5668\u548C\u5728\u7F16\u8BD1\u5668\u4F7F\u7528\u7684\u6807\u51C6\u5E93\u3002 \u4F7F\u7528\u7684\u662F<strong>\u5F15\u7528\u8BA1\u6570</strong></p><h3 id="\u5F15\u7528\u8BA1\u6570" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u8BA1\u6570" aria-hidden="true">#</a> \u5F15\u7528\u8BA1\u6570</h3><p>\u53EF\u4EE5\u8DDF\u8E2A\u6307\u9488\u6709\u591A\u5C11\u4E2A\u5F15\u7528,\u6BCF\u4E2A\u5F15\u7528\u6B7B\u4EA1\uFF0C\u5F15\u7528\u8BA1\u6570-1\uFF0C\u5F15\u7528\u8BA1\u6570\u4E3A0\uFF0C\u9500\u6BC1\u5185\u5B58\u3002</p><h3 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h3><p>shared_ptr\u9700\u8981\u5206\u914D\u4E00\u5757\u5185\u5B58\uFF0C\u53EB\u63A7\u5236\u5757\uFF0C\u6765\u5B58\u50A8\u5F15\u7528\u8BA1\u6570\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	std<span class="token operator">::</span>shared_ptr<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> <span class="token function">a</span><span class="token punctuation">(</span>new Entity<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u505A\u4E86\u4E24\u6B21\u5185\u5B58\u5206\u914D</span>

    std<span class="token operator">::</span>shared_ptr<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> c<span class="token operator">=</span> std<span class="token operator">::</span>make_shared<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//\u7EC4\u5408\u8D77\u6765\uFF0C\u66F4\u6709\u6548\u7387</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u53EA\u8981\u5B83\u8FD8\u88AB\u5F15\u7528\uFF0C\u5C31\u4E0D\u4F1A\u88AB\u9500\u6BC1\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">{</span>
		std<span class="token operator">::</span>shared_ptr<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> data<span class="token punctuation">;</span>
		<span class="token punctuation">{</span>
			std<span class="token operator">::</span>shared_ptr<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> c <span class="token operator">=</span> std<span class="token operator">::</span>make_shared<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			data <span class="token operator">=</span> c<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="weak-ptr-\u5F31\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#weak-ptr-\u5F31\u6307\u9488" aria-hidden="true">#</a> weak_ptr \u5F31\u6307\u9488</h2><p>\u4E0Eshared_ptr\u4E0D\u540C\u7684\u662F\uFF0C \u5B83\u4E0D\u4F1A\u589E\u52A0\u6307\u9488\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">{</span>
		std<span class="token operator">::</span>shared_ptr<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> data<span class="token punctuation">;</span>
		<span class="token punctuation">{</span>
			std<span class="token operator">::</span>shared_ptr<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> c <span class="token operator">=</span> std<span class="token operator">::</span>make_shared<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			data <span class="token operator">=</span> c<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> <span class="token comment">//\u5230\u8FD9\u91CCdata\u6307\u5411\u65E0\u6548\u7684Entity,\u88AB\u9500\u6BC1\u7684\u5185\u5B58\u3002</span>

	<span class="token punctuation">}</span>

   std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

   std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4ED6\u4EEC\u81EA\u52A8\u7684new\u548C\u56DE\u6536\u5185\u5B58\u3002\u66F4\u52A0\u65B9\u4FBF\u7684\u7BA1\u7406\u5185\u5B58\u3002</p><p>\u5C3D\u91CF\u4F7F\u7528unique_ptr \uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u62E5\u6709\u66F4\u4F4E\u7684\u5F00\u9500\u3002 \u5426\u5219\u5C31\u4F7F\u7528shared_ptr\u3002</p>`,23);function t(e,o){return p}var r=n(a,[["render",t]]);export{r as default};
