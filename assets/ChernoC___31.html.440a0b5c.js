import{_ as n,f as s}from"./app.d43339be.js";const a={},p=s(`<h1 id="_31-c-\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_31-c-\u6570\u7EC4" aria-hidden="true">#</a> 31. C++\u6570\u7EC4</h1><p>\u6307\u9488\u662FC++\u6570\u7EC4\u5DE5\u4F5C\u65B9\u5F0F\u7684\u57FA\u7840 \u6570\u7EC4\u5C31\u662F\u4E00\u5806\u53D8\u91CF\u7EC4\u6210\u7684\u96C6\u5408\uFF0C\u4E00\u822C\u662F\u4E00\u884C\u76F8\u540C\u7C7B\u578B\u7684\u53D8\u91CF\u3002</p><p>\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u4E00\u7EC4\u540C\u6837\u7C7B\u578B\u7684\u6570\u636E\u7684\u65F6\u5019\u3002\u5982\u679C\u53EA\u7528\u53D8\u91CF\u5199\uFF0C \u9700\u8981\u4E00\u884C\u4E00\u884C \u592A\u9EBB\u70E6\u4E86\u3002</p><h2 id="\u6570\u7EC4\u5185\u5B58\u8BBF\u95EE\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5185\u5B58\u8BBF\u95EE\u5F02\u5E38" aria-hidden="true">#</a> \u6570\u7EC4\u5185\u5B58\u8BBF\u95EE\u5F02\u5E38</h2><p>\u5982\u679C\u8BBF\u95EE\u8D85\u8FC7\u6570\u7EC4\u7D22\u5F15\u8303\u56F4\u5916\u7684\u6570\u636E\uFF0C\u5728debug\u6A21\u5F0F\u4E0B\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u5728release\u6A21\u5F0F\u4E0B\u5C31\u4F1A\u5199\u5165\u4E0D\u5C5E\u4E8E\u6570\u7EC4\u7684\u5185\u5B58\uFF0C\u800C\u9020\u6210\u4E0D\u53EF\u9884\u77E5\u7684\u9519\u8BEF\u3002</p><h2 id="\u6570\u7EC4\u7684\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u5B58\u50A8" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u5B58\u50A8</h2><p>\u5728\u5185\u5B58\u4E2D\uFF0C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\u91CC\uFF0C\u8FDE\u7EED\u5B58\u50A8\u6570\u7EC4\u6570\u636E\uFF0C\u5982int\u53604\u4E2A\u5B57\u8282\uFF0C\u4E00\u4E2A\u957F\u5EA6\u4E3A2\u7684int\u6570\u7EC4\u5C31\u53608\u4E2A\u5B57\u8282</p><p>\u5F53\u6211\u4EEC\u8BBF\u95EE\u5230example[2]\uFF0C\u5B9E\u9645\u4E0A\u662F\u5BF9\u5185\u5B58\u53D6\u4E86\u4E00\u4E2A\u504F\u79FB\u91CF\uFF0C\u5B83\u53EA\u9700\u8981\u589E\u52A08\u4E2A\u5B57\u8282\u3002\u6240\u4EE5\u5143\u7D20\u6240\u5728\u4F4D\u7F6E\u662F \u6240\u5360\u5B57\u8282*\u7B2C\u51E0\u4E2A\u5143\u7D20</p><p>\u6570\u7EC4\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u6574\u578B\u6307\u9488\uFF0C\u8FD9\u4E2A\u5185\u5B58\u5305\u542B5\u4E2A\u6574\u6570</p><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u64CD\u4F5C\u6307\u9488\u5BF9int\u6570\u7EC4\u8D4B\u503C</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>

 <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 <span class="token keyword">int</span> example<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	 example<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	 example<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	 <span class="token keyword">int</span><span class="token operator">*</span> ptr <span class="token operator">=</span> example<span class="token punctuation">;</span>
	 <span class="token operator">*</span><span class="token punctuation">(</span>ptr <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">//\u6216\u662F\u66F4\u6539\u4E3A\u5B57\u8282\u7C7B\u578B*((char*)ptr+4)</span>
	 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> example<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>
 \u8F93\u51FA\uFF1A<span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span>ptr <span class="token operator">+</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">3</span> \u8FD9\u662F<span class="token number">1</span>\u4E2A\u5B57\u8282\u7684<span class="token keyword">char</span>  \u8F93\u51FA\u7684\u4F1A\u662F<span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token number">3</span>

<span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span>ptr <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span> \u8FD9\u662F<span class="token number">4</span>\u4E2A\u5B57\u8282\u7684<span class="token keyword">int</span> \u8F93\u51FA\u7684\u4F1A\u4F7F<span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span>   \u8FD9\u7B49\u4E8E   example<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6570\u7EC4\u7684\u539F\u7406\uFF0C\u8FDE\u7EED\u7684\u6570\u636E\u5757\uFF0C\u50CF\u7D22\u5F15\u4E00\u672C\u4E66\u4E00\u6837\u7D22\u5F15\u4ED6\u4EEC\uFF0C\u7136\u540E\u5199\u5230\u7279\u5B9A\u7684\u9875\u9762</p><h2 id="\u5806\u4E0A\u521B\u5EFA\u4E0E\u6808\u4E0A\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5806\u4E0A\u521B\u5EFA\u4E0E\u6808\u4E0A\u521B\u5EFA" aria-hidden="true">#</a> \u5806\u4E0A\u521B\u5EFA\u4E0E\u6808\u4E0A\u521B\u5EFA</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>

 <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 <span class="token keyword">int</span> example<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u6808\u4E0A\u521B\u5EFA\uFF0C\u5728\u4F5C\u7528\u57DF\u7ED3\u675F\u540E\u9500\u6BC1</span>
	 <span class="token keyword">int</span><span class="token operator">*</span> another <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u5806\u4E0A\u521B\u5EFA \uFF0C\u5728\u7A0B\u5E8F\u9500\u6BC1\u5B83\u4E4B\u524D\uFF0C\u5B83\u90FD\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001</span>
	 delete<span class="token punctuation">[</span><span class="token punctuation">]</span> another<span class="token punctuation">;</span><span class="token comment">//\u9500\u6BC1\u8BE5\u6570\u7EC4</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u751F\u5B58\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u5B58\u671F" aria-hidden="true">#</a> \u751F\u5B58\u671F</h2><p>\u6808\u4E0A\u521B\u5EFA\uFF0C\u5728\u4F5C\u7528\u57DF\u7ED3\u675F\u540E\u9500\u6BC1 \u5806\u4E0A\u521B\u5EFA \uFF0C\u5728\u7A0B\u5E8F\u9500\u6BC1\u5B83\u4E4B\u524D\uFF0C\u5B83\u90FD\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001</p><p>\u5982\u679C\u6211\u4EEC\u9700\u8981\u5728\u51FD\u6570\u5916\u90E8\u4F7F\u7528\u6570\u7EC4\uFF0C\u9700\u8981\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u90A3\u4E48\u6211\u4EEC\u5FC5\u987B\u5728\u5806\u4E0A\u521B\u5EFA\uFF0C\u6216\u8005\u9664\u975E\u5411\u51FD\u6570\u4F20\u5165\u5730\u5740\u53C2\u6570\u3002</p><blockquote><p>\u95F4\u63A5\u5BFB\u5740\uFF1A \u6709\u4E00\u4E2A\u6307\u9488\uFF0C\u8FD9\u4E2A\u6307\u9488\u6307\u5411\u53E6\u4E00\u4E2A\u5185\u5B58\u5757\uFF0C\u8FD9\u4E2A\u5185\u5B58\u5757\u4FDD\u5B58\u4E86\u6211\u4EEC\u5B9E\u9645\u7684\u6570\u7EC4\uFF0C\u8FD9\u4F1A\u4EA7\u751F\u5185\u5B58\u788E\u7247/\u7F13\u5B58\u4E22\u5931\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u590D\u6742\u7684\u4E1C\u897F\u3002</p></blockquote><ol><li>\u4F7F\u7528\u7C7B\u521B\u5EFA\u516C\u5171\u7684 \u5728\u5806\u4E0A\u521B\u5EFA\u7684\u6570\u7EC4\uFF0C\u5E76\u5728\u6784\u9020\u4E2D\u5411\u6BCF\u4E00\u4E2A\u5143\u7D20\u8D4B\u503C\u3002\u5728Main\u65B9\u6CD5\u4E2D\u521B\u5EFA\u8BE5\u7C7B\uFF08Entity\uFF09\u7684\u5B9E\u4F8B\u3002</li><li>\u8FDB\u5165Entity\u7684\u5185\u5B58\u5730\u5740\uFF0C\u770B\u5230exampl\u6307\u9488\u5730\u5740\uFF0C\u5C06\u8BE5\u5730\u5740\u5012\u8FC7\u6765(\u56E0\u4E3AEndian\u5B57\u8282\u5B58\u50A8\u6B21\u5E8F\u8981\u53CD\u8FC7\u6765\u5199--\u5B58\u653E\u6570\u636E\u5927\u5C0F\u7AEF) \uFF0C\u53BB\u67E5\u627E\uFF0C\u7136\u540E\u627E\u5230\u5BF9\u5E94\u7684\u6570\u7EC4\u6570\u636E\u3002 \u8FD9\u5C31\u662F<strong>\u5185\u5B58\u95F4\u63A5\u5BFB\u5740</strong></li></ol><p>\u5728\u7C7B\u7684\u5185\u5B58\u4E2D\u627E\u5230\u6570\u7EC4\u7684\u5730\u5740\uFF0C\u7136\u540E\u518D\u4ECE\u6570\u7EC4\u7684\u5730\u5740\u627E\u5230\u5BF9\u5E94\u7684\u5185\u5B58\u6570\u636E\u3002 \u4EE3\u7801\u9700\u8981\u8DF3\u6765\u8DF3\u53BB\u3002</p><p>\u6240\u4EE5\u5E94\u8BE5\u5C3D\u91CF\u5728\u6808\u4E2D\u521B\u5EFA\u6570\u7EC4\u6765\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u56E0\u4E3A\u50CF\u8FD9\u6837\u5728\u5185\u5B58\u4E2D\u8DF3\u8DC3\u80AF\u5B9A\u4F1A\u5F71\u54CD\u6027\u80FD\u3002</p><h2 id="c-11\u4E2D\u7684\u6570\u7EC4-\u6807\u51C6\u6570\u7EC4-std-array-\u5185\u7F6E\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#c-11\u4E2D\u7684\u6570\u7EC4-\u6807\u51C6\u6570\u7EC4-std-array-\u5185\u7F6E\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> C++11\u4E2D\u7684\u6570\u7EC4 \uFF1A\u6807\u51C6\u6570\u7EC4 std::array \u5185\u7F6E\u6570\u636E\u7ED3\u6784</h2><p>\u6709\u5F88\u591A\u4F18\u70B9\uFF1A\u5982\u8FB9\u754C\u68C0\u67E5 \uFF0C\u8BB0\u5F55\u6570\u7EC4\u5927\u5C0F \u3002 \u6709\u4E00\u5B9A\u5F00\u9500\uFF0C\u4F46\u901A\u5E38\u662F\u503C\u5F97\u7684</p><p>\u539F\u59CB\u6570\u7EC4\u4F1A\u66F4\u5FEB\uFF0C\u5982\u679C\u591A\u52A0\u6CE8\u610F\u4E5F\u4E0D\u4F1A\u51FA\u95EE\u9898\u3002 std\u6570\u7EC4\u6BD4\u539F\u59CB\u6570\u7EC4\u5B89\u5168\u7684\u591A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">include</span> <span class="token string">&lt;array&gt;</span></span>
class Entity<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    std<span class="token operator">::</span>array<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token operator">&gt;</span> another<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u539F\u59CB\u6570\u7EC4\u5B9E\u9645\u4E0A\u6CA1\u6709\u529E\u6CD5\u8BA1\u7B97\u51FA\u6570\u7EC4\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CB\u6570\u7EC4\u5B9E\u9645\u4E0A\u6CA1\u6709\u529E\u6CD5\u8BA1\u7B97\u51FA\u6570\u7EC4\u5927\u5C0F" aria-hidden="true">#</a> \u539F\u59CB\u6570\u7EC4\u5B9E\u9645\u4E0A\u6CA1\u6709\u529E\u6CD5\u8BA1\u7B97\u51FA\u6570\u7EC4\u5927\u5C0F</h2><p>\u6CA1\u6709\u5982 size() \u65B9\u6CD5\uFF0C \u4F46\u662F\u53EF\u4EE5 \u4F7F\u7528delete\u5220\u9664\u5185\u5B58\uFF0C\u7F16\u8BD1\u5668\u77E5\u9053\u91CA\u653E\u4E86\u591A\u5C11\u5185\u5B58\u3002 \u4F7F\u7528\u7F16\u8BD1\u5668\u76F8\u5173\u7684\u4E1C\u897F\uFF0C\u5B83\u6709\u65F6\u5B58\u50A8\u5728\u6570\u7EC4\u7684\u4E00\u4E2A\u8D1F\u7D22\u5F15\u91CC\u9762\uFF0C\u6BD4\u5982\u7D22\u5F15\u4E3A-1\uFF0C\u8FD9\u53D6\u51B3\u5F88\u591A\u56E0\u7D20\u3002\uFF08\u4E0D\u53EF\u9760\u7684\u65B9\u6CD5\uFF09</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">5</span> <span class="token comment">//\u5BF9\u5E94\u7684\u6570\u7EC4\u5927\u5C0F\u6216\u8005\u8BF4\u5143\u7D20\u8BA1\u6570  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F46\u662F\u4E5F\u4E0D\u80FD\u4FE1\u4EFB\u8BE5\u65B9\u6CD5\uFF0C\u4E00\u65E6\u53D8\u6210int\u6307\u9488 \uFF0C\u5728\u5806\u4E0A\u521B\u5EFA\uFF0C\u7ED3\u679C\u5C31\u4E0D\u5BF9\u4E86</p><p><strong>\u6240\u4EE5\u8981\u81EA\u5DF1\u7EF4\u62A4\u6570\u7EC4\u5927\u5C0F\u3002</strong></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">static</span> constexpr <span class="token keyword">int</span> exampleSize<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//\u521B\u5EFA\u9759\u6001\u5E38\u91CF  \u7C7B\u4E2D\u5E38\u91CF\u8868\u8FBE\u5F0F\u5FC5\u987B\u662F\u9759\u6001\u7684</span>
<span class="token keyword">int</span> example<span class="token punctuation">[</span>exampleSize<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u6570\u7EC4\u7684\u521B\u5EFA:</p><ol><li>\u6808\u4E0A\u521B\u5EFA int a[5]; \u4F5C\u7528\u57DF\u7ED3\u675F\u81EA\u52A8\u9500\u6BC1\u3002 \u5728\u5916\u90E8\u4F20\u5165\u6307\u9488\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728\u5916\u90E8\u4F7F\u7528\u8BE5\u6570\u7EC4\u3002</li><li>\u5806\u4E0A\u521B\u5EFA int* a=new int[5]; \u9700\u624B\u52A8\u9500\u6BC1\u3002 \u9700\u5728\u51FD\u6570\u5916\u90E8\u4F7F\u7528\u8BE5\u6570\u7EC4\u65F6\uFF0C\u4F7F\u7528\u8FD9\u79CD\u5B9A\u4E49\u65B9\u6CD5\u3002 \u6570\u7EC4\u7684\u539F\u7406\uFF1A \u5728\u4E00\u4E2A\u5185\u5B58\u5730\u5740\u4E0A\u4E00\u7EC4\u8FDE\u7EED\u7684\u540C\u7C7B\u578B\u7684\u6570\u636E\u3002 \u7C7B\u4E2D\uFF0C\u5806\u4E0A\u4E0A\u7684\u6570\u7EC4\u5B58\u5728\u95F4\u63A5\u5BFB\u5740\u95EE\u9898\uFF0C\u4F1A\u6709\u4E00\u5B9A\u7684\u6027\u80FD\u635F\u8017\u3002</li></ol>`,35);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};
