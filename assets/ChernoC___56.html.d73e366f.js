import{_ as n,f as s}from"./app.1f76b4a4.js";const a={},p=s(`<h1 id="_56-c-\u7684auto\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_56-c-\u7684auto\u5173\u952E\u5B57" aria-hidden="true">#</a> 56. C++\u7684auto\u5173\u952E\u5B57</h1><p>\u4ED6\u53EF\u4EE5\u81EA\u52A8\u63A8\u5BFC\u7C7B\u578B\u3002</p><h2 id="\u4E0D\u597D\u7684\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u597D\u7684\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4E0D\u597D\u7684\u4F7F\u7528\u65B9\u5F0F</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>


std<span class="token operator">::</span>string <span class="token function">getNmae</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">auto</span> a <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

	<span class="token keyword">auto</span> c <span class="token operator">=</span> b<span class="token punctuation">;</span>

	<span class="token keyword">auto</span> str <span class="token operator">=</span> <span class="token function">getNmae</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	str<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u597D\u5904\u662FAPI\u6539\u53D8\u65F6\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u7528\u505A\u4EFB\u4F55\u6539\u53D8\u3002</p><p>\u574F\u5904\u65F6\u8FD9\u56DE\u7834\u574F\u4F9D\u8D56\u7279\u5B9A\u7C7B\u578B\u7684\u4EE3\u7801\u3002</p><h2 id="\u9002\u5408\u7684\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9002\u5408\u7684\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u9002\u5408\u7684\u4F7F\u7528\u65B9\u5F0F</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>

std<span class="token operator">::</span>string <span class="token function">getNmae</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>vector<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token operator">&gt;</span> strings<span class="token punctuation">;</span>
	strings<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	strings<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token string">&quot;blue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span>std<span class="token operator">::</span>vector<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token operator">&gt;</span><span class="token operator">::</span>iterator it <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> strings<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>it <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token comment">//\u4F18\u5316\u540E</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> it <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> strings<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>it <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><p>auto\u4E0D\u4F1A\u5904\u7406\u5F15\u7528\uFF0C\u5982\u679C\u8FD4\u56DE\u7684\u662F\u5BF9\u8C61\uFF0C\u76F4\u63A5\u4F7F\u7528\u4F1A\u590D\u5236\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4F7F\u7528auto\u4F1A\u964D\u4F4E\u53EF\u8BFB\u6027\uFF0C\u4F46\u662F\u5728\u957F\u7C7B\u578B\uFF0C\u5982\u6A21\u677F\uFF0C\u4E0D\u5F97\u4E0D\u4F7F\u7528\uFF0C\u4F46\u662F\u6700\u597D\u4E0D\u8981\u8BA9\u4EE3\u7801\u90A3\u6837\u590D\u6742\u3002</p>`,12);function t(e,o){return p}var r=n(a,[["render",t]]);export{r as default};
