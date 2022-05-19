import{_ as n,f as s}from"./app.6bf1f908.js";const a={},e=s(`<h1 id="_55-c-\u7684\u5B8F-\u4F7F\u7528\u9884\u5904\u7406\u5668-\u5B8F-\u5316\u67D0\u4E9B\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_55-c-\u7684\u5B8F-\u4F7F\u7528\u9884\u5904\u7406\u5668-\u5B8F-\u5316\u67D0\u4E9B\u64CD\u4F5C" aria-hidden="true">#</a> 55. C++\u7684\u5B8F \uFF08\u4F7F\u7528\u9884\u5904\u7406\u5668\u201C\u5B8F\u201D\u5316\u67D0\u4E9B\u64CD\u4F5C\uFF09</h1><p>\u9884\u5904\u7406\u9636\u6BB5\u57FA\u672C\u662F\u4E00\u4E2A\u6587\u672C\u7F16\u8F91\u9636\u6BB5\uFF0C\u63A7\u5236\u4EC0\u4E48\u4EE3\u7801\u5728\u7F16\u8BD1\u5668\u79CD\u8FD0\u884C\u3002</p><p>\u4F7F\u7528\u5B8F\u7684\u8FF7\u60D1\u884C\u4E3A\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">WHIT</span> <span class="token expression">std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OPEN_CURLY</span> <span class="token expression"><span class="token punctuation">{</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> OPEN_CURLY

	<span class="token function">LOG</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	WHIT

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8F83\u4E3A\u5408\u9002\u7684\u4F7F\u7528</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">ZSQ_DEBUG</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">LOG</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> std<span class="token operator">::</span>cout<span class="token operator">&lt;&lt;</span>x<span class="token operator">&lt;&lt;</span>std<span class="token operator">::</span>endl<span class="token punctuation">;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">LOG</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> </span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> OPEN_CURLY

	<span class="token function">LOG</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u901A\u5E38\u4F1A\u8D4B\u503C\u53D8\u66F4</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">ZSQ_DEBUG<span class="token operator">==</span><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">LOG</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> std<span class="token operator">::</span>cout<span class="token operator">&lt;&lt;</span>x<span class="token operator">&lt;&lt;</span>std<span class="token operator">::</span>endl<span class="token punctuation">;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">LOG</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> </span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> OPEN_CURLY

	<span class="token function">LOG</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ZSQ_DEBUG</span> <span class="token expression"><span class="token number">1</span> </span><span class="token comment">//\u5B9A\u4E49\u539F\u672C\u7684\u503C</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">ZSQ_DEBUG<span class="token operator">==</span><span class="token number">1</span></span></span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5168\u90E8\u7981\u7528</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">0</span></span></span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u751A\u81F3\u5B9A\u4E49\u51FD\u6570,\u4F7F\u7528\u53CD\u659C\u6760\u8F6C\u4E49\u6362\u884C\u7B26</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAIN</span> <span class="token expression"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span><span class="token punctuation">\\</span>
<span class="token expression">std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> </span><span class="token string">&quot;\u4F60\u597D&quot;</span> <span class="token expression"><span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> </span><span class="token punctuation">\\</span>
<span class="token expression"><span class="token punctuation">}</span></span><span class="token punctuation">\\</span>
</span>

MAIN

<span class="token comment">//\u8F93\u51FA&quot;\u4F60\u597D&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4E00\u4E9B\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4E00\u4E9B\u4F7F\u7528\u65B9\u6CD5</h2><p>\u628Anew\u66FF\u6362\u4E3A\u81EA\u5B9A\u4E49\u7684\u5355\u8BCD\uFF0C\u4ED6\u4F1A\u81EA\u52A8\u8DDF\u8E2A\u90A3\u4E2A\u6587\u4EF6\u7684\u54EA\u4E00\u884C\u8FDB\u884C\u5206\u914D\uFF0C\u5206\u914D\u591A\u5927\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4F7F\u7528\u5B8F\u53EF\u4EE5\u5B8C\u6210\u9884\u5904\u7406\u9636\u6BB5\u5BF9\u6587\u672C\u7684\u66FF\u6362,\u4ED6\u4EEC\u5FC5\u987B\u5199\u5728\u540C\u4E00\u884C\u3002</p>`,17);function p(t,c){return e}var r=n(a,[["render",p]]);export{r as default};
