import{_ as n,f as a}from"./app.28a0acac.js";const s={},e=a(`<h1 id="_39-c-new\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_39-c-new\u5173\u952E\u5B57" aria-hidden="true">#</a> 39. C++ new\u5173\u952E\u5B57</h1><p>C++\u7684\u5173\u952E\uFF0C\u5185\u5B58\uFF0C\u6027\u80FD\uFF0C\u4F18\u5316\u3002</p><h2 id="\u4F7F\u7528\u53D8\u91CF\u5411\u7CFB\u7EDF\u7533\u8BF7\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53D8\u91CF\u5411\u7CFB\u7EDF\u7533\u8BF7\u5185\u5B58" aria-hidden="true">#</a> \u4F7F\u7528\u53D8\u91CF\u5411\u7CFB\u7EDF\u7533\u8BF7\u5185\u5B58</h2><p>\u521B\u5EFA\u4E00\u4E2Aint\u53D8\u91CF\uFF0C\u5411\u5185\u5B58\u4E2D\u7533\u8BF74byte\u7684\u8FDE\u7EED\u5185\u5B58\u5757\uFF0C\u9700\u8981\u627E\u5230\u8FD94\u4E2A\u5730\u5740\u7684\u5730\u5740\u7A7A\u95F4\uFF0C\u627E\u5230\u4E4B\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u8BE5\u5185\u5B58\u7684\u6307\u9488\u3002 <strong>\u4ECE\u7A7A\u95F2\u5217\u8868\u4E2D\u627E\u5230\u7A7A\u95F2\u7684\u5B57\u8282\u7684\u5730\u5740</strong> \u5B83\u4E0D\u662F\u4E00\u884C\u884C\u626B\u63CF\u3002 \u4F46\u662F\u4F9D\u7136\u5F88\u6162</p><h2 id="new-\u4ECE\u5806\u4E2D\u521B\u5EFA\u5185\u5B58-\u4E5F\u5C31\u662F\u627E\u5230\u4E00\u4E2A\u8DB3\u591F\u5927\u7684\u5185\u5B58\u5757-\u4EE5\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\u3002\u4ED6\u7ED9\u6211\u4EEC\u8BE5\u5185\u5B58\u7684\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#new-\u4ECE\u5806\u4E2D\u521B\u5EFA\u5185\u5B58-\u4E5F\u5C31\u662F\u627E\u5230\u4E00\u4E2A\u8DB3\u591F\u5927\u7684\u5185\u5B58\u5757-\u4EE5\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\u3002\u4ED6\u7ED9\u6211\u4EEC\u8BE5\u5185\u5B58\u7684\u6307\u9488" aria-hidden="true">#</a> new \u4ECE\u5806\u4E2D\u521B\u5EFA\u5185\u5B58\uFF0C\u4E5F\u5C31\u662F\u627E\u5230\u4E00\u4E2A\u8DB3\u591F\u5927\u7684\u5185\u5B58\u5757\uFF0C\u4EE5\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\u3002\u4ED6\u7ED9\u6211\u4EEC\u8BE5\u5185\u5B58\u7684\u6307\u9488</h2><h2 id="new-\u662F\u4E00\u4E2A\u64CD\u4F5C\u7B26-\u4F60\u53EF\u4EE5\u91CD\u8F7D\u8FD9\u4E2A\u64CD\u4F5C\u7B26-\u5E76\u6539\u53D8\u4ED6\u7684\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#new-\u662F\u4E00\u4E2A\u64CD\u4F5C\u7B26-\u4F60\u53EF\u4EE5\u91CD\u8F7D\u8FD9\u4E2A\u64CD\u4F5C\u7B26-\u5E76\u6539\u53D8\u4ED6\u7684\u884C\u4E3A" aria-hidden="true">#</a> new \u662F\u4E00\u4E2A\u64CD\u4F5C\u7B26\uFF0C \u4F60\u53EF\u4EE5\u91CD\u8F7D\u8FD9\u4E2A\u64CD\u4F5C\u7B26\uFF0C\u5E76\u6539\u53D8\u4ED6\u7684\u884C\u4E3A</h2><h2 id="new-\u5B9E\u9645\u4E0A\u505A\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#new-\u5B9E\u9645\u4E0A\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> new \u5B9E\u9645\u4E0A\u505A\u4E86\u4EC0\u4E48</h2><ol><li>new\u4F1A\u8C03\u7528C\u51FD\u6570malloc()\u51FD\u6570\uFF0C\u4ED6\u4EE3\u8868\u5185\u5B58\u5206\u914D\u3002</li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u5C31\u50CF\u8FD9\u6837\u5206\u914D\u5185\u5B58</span>
Entity<span class="token operator">*</span> entityW <span class="token operator">=</span> <span class="token punctuation">(</span>Entity<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Entity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li><p>\u8C03\u7528\u6784\u9020\u51FD\u6570\u3002</p></li><li><p>delete \u91CA\u653E\u5185\u5B58\u3002</p></li></ol><p>delete\u4E5F\u662F\u64CD\u4F5C\u7B26\uFF0C\u6709\u4E00\u4E2Ablock\u5185\u5B58\u5757\u548Csize\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5E38\u89C4\u51FD\u6570\uFF0C\u5B83\u8C03\u7528\u4E86C\u51FD\u6570free,free\u53EF\u4EE5\u91CA\u653Emalloc\u7533\u8BF7\u7684\u5185\u5B58\u3002 \u5982\u679C\u662F\u6570\u7EC4 \u90A3\u4E48\u5E94\u8BE5\u4F7F\u7528 delete[]</p><h2 id="plcement-new-\u51B3\u5B9A\u524D\u9762\u7684\u5185\u5B58\u6765\u81EA\u54EA\u91CC" tabindex="-1"><a class="header-anchor" href="#plcement-new-\u51B3\u5B9A\u524D\u9762\u7684\u5185\u5B58\u6765\u81EA\u54EA\u91CC" aria-hidden="true">#</a> plcement new \u51B3\u5B9A\u524D\u9762\u7684\u5185\u5B58\u6765\u81EA\u54EA\u91CC</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	 <span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	 Entity<span class="token operator">*</span> entityW <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u9644\u52A0\u7684" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u7684" aria-hidden="true">#</a> \u9644\u52A0\u7684</h2><p>\u4F5C\u7528\u57DF\u6307\u9488/\u5F15\u7528\u8BA1\u6570/</p>`,15);function t(p,c){return e}var r=n(s,[["render",t]]);export{r as default};
