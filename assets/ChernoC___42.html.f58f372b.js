import{_ as n,f as s}from"./app.d7ce3c02.js";const a={},p=s(`<h1 id="_42-c-\u7684this\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_42-c-\u7684this\u5173\u952E\u5B57" aria-hidden="true">#</a> 42. C++\u7684this\u5173\u952E\u5B57</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>this\u662F\u4E00\u4E2A\u6307\u5411\u5F53\u524D\u5BF9\u8C61\u5B9E\u4F8B\u7684\u6307\u9488\uFF0C\u8BE5\u65B9\u6CD5\u5C5E\u4E8E\u8FD9\u4E2A\u5BF9\u8C61\u5B9E\u4F8B\u3002\u5FC5\u987B\u8981\u62E5\u6709\u5BF9\u8C61\uFF0C\u4E00\u4E2A\u975E\u9759\u6001\u65B9\u6CD5\u624D\u53EF\u4EE5\u4F7F\u7528this(\u6211\u81EA\u5DF1\u8BF4\u7684\uFF1A\u9759\u6001\u4E5F\u5C31\u8BF4\u660E\u53EA\u5B58\u5728\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u6240\u4EE5this\u4E5F\u6CA1\u6709\u610F\u4E49)</p><p>\u5173\u952E\u5B57*this\u662F\u6307\u5411\u8BE5\u5BF9\u8C61\u7684\u6307\u9488\u3002</p><h2 id="\u53EF\u4EE5\u505A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u505A\u4EC0\u4E48" aria-hidden="true">#</a> \u53EF\u4EE5\u505A\u4EC0\u4E48</h2><p>\u901A\u8FC7this\u53EF\u4EE5\u8BBF\u95EE\u6210\u5458\u53D8\u91CF\uFF0C\u6210\u5458\u51FD\u6570\u3002\u5C5E\u4E8E\u67D0\u4E2A\u7C7B\u7684\u51FD\u6570\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

class Entity
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
	<span class="token function">Entity</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		this<span class="token operator">-&gt;</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
		this<span class="token operator">-&gt;</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>



<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity <span class="token function">e</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,7);function t(e,c){return p}var r=n(a,[["render",t]]);export{r as default};
