import{_ as n,f as s}from"./app.01d44aa7.js";const a={},p=s(`<h1 id="_32-c-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_32-c-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 32. C++\u5B57\u7B26\u4E32</h1><p>\u5B57\u7B26\u4E32\u672C\u8D28\u662F\u4E00\u4E2A\u63A5\u4E00\u4E2A\u5B57\u7B26\u7EC4\u6210\u7684\u4E00\u7EC4\u5B57\u7B26\uFF0C\u5982\u5B57\u6BCD\u6570\u5B57\u6587\u672C \u8FD9\u4E9B\u90FD\u662F\u5B57\u7B26\u3002 <strong>\u4E00\u79CD\u8868\u793A\u548C\u5904\u7406\u6587\u672C\u7684\u65B9\u5F0F\u3002</strong></p><h2 id="\u9898\u5916\u8BDD" tabindex="-1"><a class="header-anchor" href="#\u9898\u5916\u8BDD" aria-hidden="true">#</a> \u9898\u5916\u8BDD</h2><p>\u5DE5\u4F5C\u539F\u7406\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u7684\u7406\u89E3\u600E\u6837\u4F7F\u7528\u4ED6\u3002</p><h2 id="\u5B57\u7B26\u662F\u600E\u6837\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u662F\u600E\u6837\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> \u5B57\u7B26\u662F\u600E\u6837\u5DE5\u4F5C\u7684</h2><p>C++ \u4E2D\u7684char\uFF08Character\uFF09\u4E00\u4E2A\u5B57\u8282\u7684\u5185\u5B58\u3002</p><h2 id="char\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#char\u7684\u4F5C\u7528" aria-hidden="true">#</a> char\u7684\u4F5C\u7528</h2><ol><li>\u628A\u6307\u9488\u8F6C\u6362\u6210char\u578B\u6307\u9488\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7528\u5B57\u8282\u6765\u505A\u6307\u9488\u8FD0\u7B97\u3002</li><li>\u4ED6\u5BF9\u4E8E\u5206\u914D\u5185\u5B58\u7F13\u51B2\u533A\u4E5F\u5F88\u6709\u7528\uFF0C\u5982\u679C\u8981\u5206\u914D1K\u7684\u5185\u5B58\uFF0C\u53EF\u4EE5\u5206\u914D1024\u4E2Achar\u3002</li><li>\u5BF9\u5B57\u7B26\u4E32\u548C\u6587\u672C\u4E5F\u5F88\u6709\u7528\uFF0C\u56E0\u4E3AC++\u5BF9\u5F85\u5B57\u7B26\u9ED8\u8BA4\u662F\u901A\u8FC7Ascii\u5B57\u7B26\u8FDB\u884C\u6587\u672C\u7F16\u7801\u3002</li></ol><h3 id="\u5B57\u7B26\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u7F16\u7801" aria-hidden="true">#</a> \u5B57\u7B26\u7F16\u7801</h3><blockquote><p>Ascii\u53EF\u4EE5\u6269\u5C55UTF-8 UTF-16 UTF-32</p></blockquote><p>\u5F53\u7136\uFF0C\u4E5F\u6709\u4E24\u4E2A\u5B57\u8282\u7684\u5B57\u7B26\uFF0C3\u4E2A\u5B57\u8282\u7B49\u7B49 \u5982\u65E5\u6587 \u4E2D\u6587\u53CA\u5176\u4ED6\u8BED\u8A00\u3002</p><p>1\u4E2A\u5B57\u8282\u67098byte,\u4E5F\u5C31\u662F2\u76848\u6B21\u65B9 256\u79CD\u53EF\u80FD\u3002 \u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u7B26\u53F7\uFF0C\u4E2D\u6587\uFF0C\u65E5\u6587\u7B49 8\u6BD4\u7279\u5C31\u4E0D\u591F\u3002 \u6240\u4EE5\u4E0D\u540C\u7684\u7F16\u7801 \u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u53EF\u80FD\u6027\u3002</p><p>\u666E\u901A\u7684\u5B57\u7B26\u4E32\u4F7F\u7528\u666E\u901A\u7684char\uFF0C\u6211\u4EEC\u4E3B\u8981\u8BA8\u8BBA\u82F1\u6587\u5B57\u7B26\u3002</p><blockquote><p>\u5982\u6E38\u620F\u79CD\u7684\u5B57\u7B26\u6E32\u67D3\uFF0C\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u975E\u5E38\u590D\u6742\u7684\u95EE\u9898\u3002\u6587\u672C\u548C\u8BED\u8A00\u662F\u4E00\u4E2A\u5E9E\u5927 \u5927\u89C4\u6A21\u7684\u95EE\u9898\u3002</p></blockquote><h2 id="\u5B57\u7B26\u4E32\u5B9E\u9645\u4E0A\u662F\u5B57\u7B26\u6570\u7EC4-\u5B57\u7B26\u6570\u7EC4\u9700\u8981\u4E00\u4E2A\u7A7A\u7EC8\u6B62\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u5B9E\u9645\u4E0A\u662F\u5B57\u7B26\u6570\u7EC4-\u5B57\u7B26\u6570\u7EC4\u9700\u8981\u4E00\u4E2A\u7A7A\u7EC8\u6B62\u5B57\u7B26" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u5B9E\u9645\u4E0A\u662F\u5B57\u7B26\u6570\u7EC4\uFF0C\u5B57\u7B26\u6570\u7EC4\u9700\u8981\u4E00\u4E2A\u7A7A\u7EC8\u6B62\u5B57\u7B26</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">char</span><span class="token operator">*</span> name<span class="token operator">=</span><span class="token string">&quot;cherno&quot;</span> \u5728\u5185\u5B58\u79CD\u5B58\u5728\u7A7A\u7EC8\u6B62\u5B57\u7B26\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u77E5\u9053\u5B57\u7B26\u4E32\u6709\u591A\u5927\uFF0C\u4ECE\u5185\u5B58\u5730\u5740\u5F00\u59CB\u5230\u7ED3\u675F
<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;cherno&quot;</span> \u5728\u5185\u5B58\u79CD\u7684\u8868\u73B0\u548C<span class="token keyword">char</span><span class="token operator">*</span> name<span class="token operator">=</span><span class="token string">&quot;cherno&quot;</span>\u4E00\u6837
<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;h&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;e&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;r&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;n&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;o&#39;</span><span class="token punctuation">}</span> \u8F93\u51FAcherno\u540E\u8DDF\u4E71\u7801\uFF0C\u8FD9\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u6570\u7EC4\u5B88\u536B\uFF0C\u8BA9\u6211\u4EEC\u77E5\u9053\u5185\u5B58\u662F\u5728\u6211\u4EEC\u5206\u914D\u4E4B\u5916\u3002\uFF08\u6808\u5B88\u536B\u5C31\u77E5\u9053\u662F\u4E0D\u662F\u5206\u914D\u5728\u5185\u5B58\u4E4B\u5916\uFF09
\u56E0\u4E3Astd<span class="token operator">::</span>cout\u4E0D\u77E5\u9053\u6253\u5370\u5230\u54EA\u91CC\u7ED3\u675F\uFF0C\u6240\u4EE5\u8F93\u51FA\u4E86\u4E00\u6BB5\u4E71\u7801
<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;h&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;e&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;r&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;n&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;o&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;\\0&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  \u6216\u8005<span class="token char">&#39;\\0&#39;</span>\u76F4\u63A5\u5199<span class="token number">0</span>\uFF0C\u8FD9\u662F\u5728\u7ED9\u4E00\u4E2A\u7A7A\u7EC8\u6B62\u5B57\u7B26\uFF0C\u6700\u540E\u8F93\u51FA\u6B63\u5E38\u3002


<span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> name<span class="token operator">=</span><span class="token string">&quot;cherno&quot;</span> \u4E0D\u53EF\u66F4\u6539\u7684\u5E38\u91CF


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="c-\u79CD\u7684\u6807\u51C6\u5E93-string" tabindex="-1"><a class="header-anchor" href="#c-\u79CD\u7684\u6807\u51C6\u5E93-string" aria-hidden="true">#</a> C++\u79CD\u7684\u6807\u51C6\u5E93 String</h2><p>\u5B9E\u9645\u4E0A\u6709\u4E00\u4E2A\u7C7B\u53EBBasicString \u4ED6\u662F\u4E00\u4E2A\u6A21\u677F\u7C7B\uFF0C\u57FA\u672C\u662FbaseString\u7C7B\u7684\u6A21\u677F\u7248\u672C\uFF0C\u6A21\u677F\u53C2\u6570\u662Fchar\u3002 \u8FD9\u53EB\u6A21\u677F\u7279\u5316 template specialization. \u5C31\u662F\u5C06baseString\u6A21\u677F\u7C7B\u4E2D\u7684\u6A21\u677F\u53C2\u6570\u8BBE\u4E3Achar\uFF0Cchar\u662F\u6BCF\u4E2A\u5B57\u7B26\u80CC\u540E\u7684\u5B9E\u9645\u7C7B\u578B\u3002</p><h2 id="\u63A8\u8350wstirng" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350wstirng" aria-hidden="true">#</a> \u63A8\u8350Wstirng</h2><h2 id="c-\u4E2D\u7684std-string" tabindex="-1"><a class="header-anchor" href="#c-\u4E2D\u7684std-string" aria-hidden="true">#</a> C++\u4E2D\u7684std::string</h2><h3 id="\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> \u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684</h3><p>char\u6570\u7EC4\u548C\u4E00\u4E9B\u51FD\u6570\uFF0C\u6765\u64CD\u4F5C\u4ED6\u4EEC\u3002</p><h2 id="\u4E00\u4E9B\u5B57\u7B26\u4E32\u76F8\u5173\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u5B57\u7B26\u4E32\u76F8\u5173\u51FD\u6570" aria-hidden="true">#</a> \u4E00\u4E9B\u5B57\u7B26\u4E32\u76F8\u5173\u51FD\u6570</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">char</span><span class="token operator">*</span> name<span class="token operator">=</span><span class="token string">&quot;able&quot;</span><span class="token punctuation">;</span>
<span class="token function">strlen</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token function">strcpy</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
std<span class="token operator">::</span>string name<span class="token operator">=</span><span class="token string">&quot;able&quot;</span><span class="token punctuation">;</span>
name<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u62FC\u63A5\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u62FC\u63A5\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u62FC\u63A5\u5B57\u7B26\u4E32</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token operator">::</span>string name<span class="token operator">=</span> <span class="token string">&quot;\u8D75\u601D\u742A&quot;</span><span class="token punctuation">;</span>
    name <span class="token operator">+=</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">;</span><span class="token comment">//\u5728string\u7C7B\u4E2D\u91CD\u8F7D\u4E86&quot;+=&quot;\u64CD\u4F5C\u7B26</span>
   <span class="token comment">// \u6216\u662F</span>
    std<span class="token operator">::</span>string name <span class="token operator">=</span> std<span class="token operator">::</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u742A&quot;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">//\u5224\u65AD\u662F\u5426\u5B58\u5728</span>
    bool contains <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> std<span class="token operator">::</span>string<span class="token operator">::</span>npos<span class="token punctuation">;</span><span class="token comment">//std::string::npos\u8868\u793A\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u4F4D\u7F6E</span>

    std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> name <span class="token operator">&lt;&lt;</span>name<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u5B57\u7B26\u4E32\u4F20\u9012\u7ED9\u5176\u4ED6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u4F20\u9012\u7ED9\u5176\u4ED6\u51FD\u6570" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u4F20\u9012\u7ED9\u5176\u4ED6\u51FD\u6570</h2><ul><li><strong>\u5F53\u628A\u5BF9\u8C61\u4F20\u9012\u7ED9\u51FD\u6570\u65F6\uFF0C\u5B9E\u9645\u4E0A\u5728\u590D\u5236\u8FD9\u4E2A\u5BF9\u8C61\uFF0C</strong></li><li><strong>\u590D\u5236\u5B57\u7B26\u4E32\u610F\u5473\u7740\u5FC5\u987B\u52A8\u6001\u7684\u5728\u5806\u4E0A\u5206\u914D\u4E00\u4E2A\u5168\u65B0\u7684\u6570\u7EC4\u6765\u5B58\u50A8\u76F8\u540C\u7684\u6587\u672C\uFF0C\u590D\u5236\u5B57\u7B26\u4E32\u592A\u6162\u4E86\u3002</strong></li><li><strong>\u53EA\u8BFB\u7684\u60C5\u51B5\uFF0C\u786E\u4FDD\u5C3D\u91CF\u901A\u8FC7\u5E38\u91CF\u5F15\u7528\u4F20\u9012\u5B83\u3002</strong></li></ul><h2 id="c-string\u53C2\u8003\u94FE\u63A5-\u300B\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#c-string\u53C2\u8003\u94FE\u63A5-\u300B\u6269\u5C55" aria-hidden="true">#</a> c++ string\u53C2\u8003\u94FE\u63A5-\u300B\u6269\u5C55</h2>`,29);function t(e,o){return p}var r=n(a,[["render",t]]);export{r as default};
