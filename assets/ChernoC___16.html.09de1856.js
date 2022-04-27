import{_ as n,f as a}from"./app.14edde5e.js";const s={},e=a(`<h1 id="_16-c-\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#_16-c-\u6307\u9488" aria-hidden="true">#</a> 16. C++\u6307\u9488</h1><p>\u8BA1\u7B97\u673A\u4E2D\uFF0C\u5185\u5B58\u5C31\u662F\u4E00\u5207\u3002\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0C\u6240\u6709\u7A0B\u5E8F\u90FD\u88AB\u8F7D\u5165\u5230\u5185\u5B58\u4E2D,\u6240\u6709\u7684\u6307\u4EE4\u544A\u8BC9\u8BA1\u7B97\u673A\u5728\u4F60\u5199\u7684\u4EE3\u7801\u4E2D\u8981\u505A\u4EC0\u4E48\uFF0C\u6240\u6709\u8FD9\u4E9B\u90FD\u88AB\u52A0\u8F7D\u5230\u5185\u5B58\u91CC\u3002cpu\u5C31\u662F\u8FD9\u6837\u8BBF\u95EE\u4F60\u7684\u7A0B\u5E8F\u5E76\u5F00\u59CB\u6267\u884C\u5B83\u7684\u6307\u4EE4\uFF0C \u5F53\u4F60\u521B\u5EFA\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5F53\u4F60\u4ECE\u78C1\u76D8\u52A0\u8F7D\u6570\u636E\uFF0C\u6240\u6709\u7684\u4E1C\u897F\u90FD\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\uFF0C\u6CA1\u6709\u5185\u5B58\uFF0C\u5C31\u4EC0\u4E48\u4E5F\u505A\u4E0D\u4E86\u3002 \u800C\u6307\u9488\u5BF9\u7BA1\u7406\u548C\u64CD\u7EB5\u5185\u5B58\u975E\u5E38\u91CD\u8981\u3002</p><blockquote><p>\u6307\u9488\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u4E00\u79CD\u5B58\u50A8\u5185\u5B58\u5730\u5740\u7684\u6570\u5B57\u3002 \u5185\u5B58\u653E\u5728\u7535\u8111\u4E2D\uFF0C\u5C31\u50CF\u4E00\u4E2A\u5927\u76F4\u7EBF\uFF0C\u7EBF\u4E0A\u6709\u4E00\u5806\u623F\u5B50\uFF0C\u623F\u5B50\u6709\u4E00\u4E2A\u53F7\u7801\u548C\u5730\u5740\uFF0C\u5730\u5740\u53601\u4E2A\u5B57\u8282\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u65B9\u6CD5\u5BFB\u5740\u6240\u6709byte\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u8FD9\u4E9B\u623F\u5B50\u4E2D\u8FDB\u884C\u5185\u5B58\u5B57\u8282\u8BFB\u5199\u3002 \u5185\u5B58\u88AB\u7528\u4E8E\u505A\u6240\u6709\u7684\u4E8B\u60C5\uFF0C\u6240\u4EE5\u5BF9\u5185\u5B58\u6709\u66F4\u591A\u7684\u63A7\u5236\u662F\u81F3\u5173\u91CD\u8981\u7684\u3002</p></blockquote><h2 id="\u539F\u59CB\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CB\u6307\u9488" aria-hidden="true">#</a> \u539F\u59CB\u6307\u9488</h2><h3 id="\u6307\u9488\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u7C7B\u578B" aria-hidden="true">#</a> \u6307\u9488\u7C7B\u578B</h3><p>\u7C7B\u578B\u662F\u4E3A\u4E86\u8BA9\u6211\u4EEC\u7684\u7BA1\u7406\u66F4\u8F7B\u677E\uFF0C\u4E0D\u7BA1\u662Fint\u7C7B\u578B\uFF0C\u6216\u662Fentity\u7C7B\uFF0C\u6709\u4E00\u4E2Aentity\u6307\u9488\uFF0C\u7C7B\u578B\u672C\u8EAB\u65E0\u610F\u4E49\u3002 <strong>\u6240\u6709\u7C7B\u578B\u7684\u6307\u9488\u90FD\u662F\u6574\u6570\uFF0C\u5B58\u653E\u4E00\u4E2A\u5185\u5B58\u5730\u5740\u3002</strong></p><h3 id="void-\u6700\u7B80\u5355\u7684\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#void-\u6700\u7B80\u5355\u7684\u6307\u9488" aria-hidden="true">#</a> void* \u6700\u7B80\u5355\u7684\u6307\u9488</h3><p>void\u6307\u5B83\u5B8C\u5168\u6CA1\u6709\u7C7B\u578B,\u6211\u4EEC\u53EA\u662F\u5728\u5185\u5B58\u4E2D\u5B58\u653E\u4E00\u4E2A\u6307\u9488\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span><span class="token operator">*</span> ptr<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u521B\u5EFA\u4E86\u4E00\u4E2A\u4E3A0\u7684\u5185\u5B58\u5730\u5740  \u8FD9\u662F\u4E00\u4E2A\u65E0\u6548\u7684\u5185\u5B58\u5730\u5740</span>
<span class="token keyword">void</span><span class="token operator">*</span> ptr<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">//\u53EA\u662F\u4E00\u4E2A\u7ED90\u7684 #defind  \u6216\u8005 C++11\u5F15\u5165\u7684 nullptr  void* ptr=nullptr;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u627E\u5230\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u627E\u5230\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740" aria-hidden="true">#</a> \u627E\u5230\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740 &amp;</h3><blockquote><p>\u5B57\u8282\u662F\u6700\u5C0F\u5BFB\u5740\u5355\u4F4D</p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> var<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">;</span>
<span class="token keyword">void</span><span class="token operator">*</span> prt<span class="token operator">=</span><span class="token operator">&amp;</span>var<span class="token punctuation">;</span> <span class="token comment">//var\u7684\u5185\u5B58\u5730\u5740\uFF0C\u8D4B\u503C\u7ED9\u65B0\u53D8\u91CFprt\u3002 \u5F97\u5230\u4E86\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740\uFF0C\u5C06\u5B83\u5B58\u50A8\u5230\u53E6\u4E00\u4E2A\u53D8\u91CF\u4E2D\uFF0C\u53E6\u4E00\u4E2A\u6307\u9488\u4E2D\u3002</span>
<span class="token keyword">double</span><span class="token operator">*</span> prt<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token operator">*</span><span class="token punctuation">)</span> prt <span class="token comment">// \u4F9D\u7136\u53EF\u4EE5\u4ECE\u5730\u5740\u4E2D\u627E\u5230\u8BE5\u5185\u5B58\u4E2D\u5B58\u50A8\u7684\u5B57\u8282\u6570\u636E\u3002</span>

<span class="token comment">//\u6211\u4EEC\u53EF\u4EE5\u5728\u5185\u5B58\u4E2D\u627E\u5230\uFF0C\u8BE5\u5730\u5740\u6240\u5B58\u50A8\u7684\u5B57\u8282\uFF0C\u5B57\u8282\u91CC\u5B58\u50A8\u67098</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7C7B\u578B\u5BF9\u5BFB\u5740\u65E0\u5F71\u54CD\uFF0C\u5BF9\u64CD\u4F5C\u8FD9\u5757\u7684\u5185\u5B58\u6709\u7528\uFF0C\u5982\u679C\u6211\u60F3\u8BFB\u5199\u5B83\uFF0C\u5185\u5B58\u7C7B\u578B\u4F1A\u5E2E\u52A9\u5230\u6211\uFF0C\u56E0\u4E3A\u7F16\u8BD1\u5668\u53EF\u4EE5\u77E5\u9053int\u7C7B\u578B4\u4E2A\u5B57\u8282,\u6240\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u503C\uFF0C\u4F1A\u8BBE\u7F6E4\u4E2A\u5B57\u8282\u7684\u5185\u5B58\u3002</p><h3 id="\u62FF\u5230\u5730\u5740\u4E86-\u5982\u4F55\u8BBF\u95EE-dereference\u8FD0\u7B97\u7B26-\u9006\u5411\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u62FF\u5230\u5730\u5740\u4E86-\u5982\u4F55\u8BBF\u95EE-dereference\u8FD0\u7B97\u7B26-\u9006\u5411\u5F15\u7528" aria-hidden="true">#</a> \u62FF\u5230\u5730\u5740\u4E86\uFF0C\u5982\u4F55\u8BBF\u95EE-&gt; dereference\u8FD0\u7B97\u7B26 \u9006\u5411\u5F15\u7528</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> var<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">;</span>
<span class="token keyword">void</span><span class="token operator">*</span> prt<span class="token operator">=</span><span class="token operator">&amp;</span>var<span class="token punctuation">;</span>
<span class="token operator">*</span>prt<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//\u62A5\u9519 \uFF0C\u6211\u4EEC\u4E0D\u80FD\u5C06\u503C\u653E\u5165\u4E00\u4E2A\u7A7A\u7C7B\u578B\uFF0C\u800C\u5E94\u8BE5\u662F\u6307\u5B9A\u7684\u7C7B\u578B\u3002\u8FD9\u4EE3\u8868\u8FD9\u7F16\u8BD1\u5668\u77E5\u9053\u5B83\u6709\u591A\u5C11\u5B57\u8282\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> var<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">//\u6808\u4E2D\u521B\u5EFA</span>
<span class="token keyword">int</span><span class="token operator">*</span> prt<span class="token operator">=</span><span class="token operator">&amp;</span>var<span class="token punctuation">;</span>
<span class="token operator">*</span>prt<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4F7F\u7528\u6307\u9488\u5728\u5185\u5B58\u521B\u5EFA\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6307\u9488\u5728\u5185\u5B58\u521B\u5EFA\u6570\u636E" aria-hidden="true">#</a> \u4F7F\u7528\u6307\u9488\u5728\u5185\u5B58\u521B\u5EFA\u6570\u636E</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">char</span><span class="token operator">*</span> buffer<span class="token operator">=</span>new <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u5728char\u4E0A\u5206\u914D8\u4E2A\u5B57\u8282\uFF0C\u8FD4\u56DE\u6307\u5411\u8BE5\u5185\u5B58\u7684\u6307\u9488</span>
<span class="token function">memset</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6307\u5B9A\u7684\u6570\u636E\u586B\u5145\u4E00\u4E2A\u5185\u5B58\u5757\uFF0C \u7533\u8BF7\u4E86\u4E00\u4E2A\u5185\u5B58</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token comment">//\u5728\u6211\u4EEC\u4F7F\u7528\u5B8C\u6210\u540E\u91CA\u653E\u8BE5\u5185\u5B58</span>
delete<span class="token punctuation">[</span><span class="token punctuation">]</span> buffer<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u6307\u9488\u7684\u672C\u8EAB\u4E5F\u662F\u53D8\u91CF\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u4E5F\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u3002 \u4E5F\u5C31\u662F\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u53CC\u6307\u9488\u6216\u4E09\u6307\u9488\uFF0C \u610F\u601D\u662F\u6307\u5411\u6307\u9488\u7684\u6307\u9488</p></blockquote><h3 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">char</span><span class="token operator">*</span> buffer<span class="token operator">=</span>new <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
<span class="token function">memeset</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> prt<span class="token operator">=</span><span class="token operator">&amp;</span>buffer<span class="token punctuation">;</span> <span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u6307\u5411\u6307\u9488\u7684\u6307\u9488\u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u4ECE\u8BE5\u5730\u5740\u53EF\u4EE5\u67E5\u5230\u6307\u5411\u7684\u6307\u9488\u5730\u5740\uFF0C\u518D\u6839\u636E\u6307\u9488\u5730\u5740</p></blockquote><h2 id="\u667A\u80FD\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u667A\u80FD\u6307\u9488" aria-hidden="true">#</a> \u667A\u80FD\u6307\u9488</h2><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u6307\u9488\u662F\u6574\u6570\u578B\uFF0C\u5B58\u653E\u5728\u5185\u5B58\u7A7A\u95F4\u7684\u4E00\u4E2A\u5730\u5740\u3002 \u8FD9\u4E2A\u5730\u5740\u6307\u5411\u5185\u5B58\u3002</p>`,25);function p(t,o){return e}var r=n(s,[["render",p]]);export{r as default};
