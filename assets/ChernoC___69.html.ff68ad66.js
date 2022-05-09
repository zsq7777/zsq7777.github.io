import{_ as n,f as s}from"./app.024c5519.js";const a={},p=s(`<h1 id="_69-c-\u7684\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_69-c-\u7684\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 69. C++\u7684\u7C7B\u578B\u8F6C\u6362</h1><h2 id="_1-c\u98CE\u683C\u7684\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_1-c\u98CE\u683C\u7684\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 1. C\u98CE\u683C\u7684\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	<span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">10.5</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>a <span class="token operator">+</span> <span class="token number">1.1</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u548Cjava\u4E00\u6837\uFF0Cdouble\u5411int\u8F6C\u6362\u4F1A\u622A\u53D6\u5C0F\u6570\u90E8\u5206\u3002</p><h2 id="_2-c-\u98CE\u683C\u7684\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-c-\u98CE\u683C\u7684\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 2. C++\u98CE\u683C\u7684\u7C7B\u578B\u8F6C\u6362</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">10.5</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> b <span class="token operator">=</span> static_cast<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1.1</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-c-\u98CE\u683C\u76844\u79CD\u4E3B\u8981\u8F6C\u6362-cast-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-c-\u98CE\u683C\u76844\u79CD\u4E3B\u8981\u8F6C\u6362-cast-\u65B9\u5F0F" aria-hidden="true">#</a> 3. C++\u98CE\u683C\u76844\u79CD\u4E3B\u8981\u8F6C\u6362(cast)\u65B9\u5F0F</h2><p>\u4ED6\u4EEC\u662FC\u98CE\u683C\u7684\u8BED\u6CD5\u7CD6</p><ul><li>static_cast\uFF1A\u9759\u6001\u7C7B\u578B\u8F6C\u6362</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>class A <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token function">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6211\u662F\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span><span class="token punctuation">}</span>
	virtual	<span class="token operator">~</span><span class="token function">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6211\u662F\u7236\u7C7B\u7684\u865A\u6790\u6784\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">10.5</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> b <span class="token operator">=</span> static_cast<span class="token operator">&lt;</span>A<span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1.1</span><span class="token punctuation">;</span> <span class="token comment">//\u9519\u8BEF\u7684\u8F6C\u6362</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F53\u6211\u5C06double\u8F6C\u6362\u4E3A\u7C7B\u7684\u6307\u9488\u65F6\uFF0Cstatic_cast\u4F1A\u63D0\u793A\u9519\u8BEF</p><ul><li>reinterpret_cast\uFF1A\u7C7B\u578B\u53CC\u5173\u5F62\u5F0F\u8F6C\u6362</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	A<span class="token operator">*</span> a<span class="token operator">=</span> reinterpret_cast<span class="token operator">&lt;</span>A<span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>dynamic_cast\uFF1A\u7C7B\u7684\u5F3A\u5236\u8F6C\u6362\uFF0C\u68C0\u67E5</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>class A <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token function">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6211\u662F\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span><span class="token punctuation">}</span>
	virtual	<span class="token operator">~</span><span class="token function">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6211\u662F\u7236\u7C7B\u7684\u865A\u6790\u6784\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
class B <span class="token operator">:</span> public A <span class="token punctuation">{</span>
private<span class="token operator">:</span>
	<span class="token keyword">int</span><span class="token operator">*</span> mArray<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token function">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		mArray <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//\u5728\u5806\u5185\u5B58\u4E0A\u5F00\u8F9F\u4E86\u4E00\u4E2A\u8FDE\u7EED\u76845*4\u5B57\u8282\u7684int\u5185\u5B58\u7A7A\u95F4</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6211\u662F\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> 
	<span class="token punctuation">}</span>
	<span class="token operator">~</span><span class="token function">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		delete mArray<span class="token punctuation">;</span><span class="token comment">//\u91CA\u653E\u5185\u5B58</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6211\u662F\u5B50\u7C7B\u7684\u6790\u6784\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

class C <span class="token operator">:</span> public A <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	B<span class="token operator">*</span> b <span class="token operator">=</span> new <span class="token function">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	A<span class="token operator">*</span> a <span class="token operator">=</span> b<span class="token punctuation">;</span>
	C<span class="token operator">*</span> c<span class="token operator">=</span> dynamic_cast<span class="token operator">&lt;</span>C<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5BF9\u8C61a\u65E0\u6CD5\u8F6C\u5316\u4E3Ac\u6307\u9488&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u6B63\u786E\u7684\u8F6C\u6362\uFF0C\u56E0\u4E3A\u6211\u4EEC\u77E5\u9053a\u5B9E\u9645\u4E0A\u6307\u5411\u7684\u65F6b\u7684\u5185\u5B58\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	B<span class="token operator">*</span> b <span class="token operator">=</span> new <span class="token function">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	A<span class="token operator">*</span> a <span class="token operator">=</span> b<span class="token punctuation">;</span>
	B<span class="token operator">*</span> c<span class="token operator">=</span> dynamic_cast<span class="token operator">&lt;</span>B<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5BF9\u8C61b\u65E0\u6CD5\u8F6C\u5316\u4E3Ac\u6307\u9488&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5BF9\u8C61b\u6210\u529F\u8F6C\u5316\u4E3Ac\u6307\u9488&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>const_cast\uFF1A\u79FB\u9664\u6216\u6DFB\u52A0\u53D8\u91CF\u7684const\u9650\u5236</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	<span class="token keyword">const</span> <span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span><span class="token operator">*</span> b <span class="token operator">=</span> const_cast<span class="token operator">&lt;</span><span class="token keyword">double</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">*</span>b <span class="token operator">=</span> <span class="token number">10.1</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>b <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F7F\u7528\u5B83\u4EEC\u597D\u5904\u662F\u6211\u4EEC\u5F88\u5BB9\u6613\u7684\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u627E\u5230\u8F6C\u6362\u4E86\u4EC0\u4E48\uFF0C\u5E76\u4E14\u4ED6\u4E5F\u4F1A\u51CF\u5C11\u8F6C\u6362\u65F6\u53EF\u80FD\u53D1\u751F\u7684\u610F\u5916\u9519\u8BEF\uFF0C\u5982\u7C7B\u578B\u4E0D\u517C\u5BB9(class)\u5411(int)\u8F6C\u6362</p><p>\u5728\u5199\u65B0\u7684\u5C0F\u9879\u76EE\u65F6\uFF0C\u4F7F\u7528\u8FD9\u4E9B\u66F4\u53EF\u9760\uFF0C\u66F4\u9002\u5408\u591A\u4EBA\u534F\u4F5C\u3002</p>`,21);function t(o,e){return p}var l=n(a,[["render",t]]);export{l as default};
