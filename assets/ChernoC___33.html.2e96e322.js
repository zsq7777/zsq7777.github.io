import{_ as s,f as n}from"./app.7ad50c40.js";const a={},e=n(`<h1 id="_33-c-\u5B57\u7B26\u4E32\u5B57\u9762\u91CF" tabindex="-1"><a class="header-anchor" href="#_33-c-\u5B57\u7B26\u4E32\u5B57\u9762\u91CF" aria-hidden="true">#</a> 33. C++\u5B57\u7B26\u4E32\u5B57\u9762\u91CF</h1><p>\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u65F6\u5B58\u50A8\u5728\u5185\u5B58\u7684\u53EA\u8BFB\u90E8\u5206\u7684\u3002 \u76F4\u63A5\u5B58\u50A8\u5728\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u90E8\u5206\u3002 &quot;able&quot; \u5C31\u50CF\u8FD9\u6837</p><h2 id="wchar-t-\u5BBD\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#wchar-t-\u5BBD\u5B57\u7B26" aria-hidden="true">#</a> wchar_t \u5BBD\u5B57\u7B26</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> name<span class="token operator">=</span>u8<span class="token string">&quot;Cherno&quot;</span><span class="token punctuation">;</span>  <span class="token comment">//1\u4E2A\u5B57\u8282</span>
<span class="token keyword">const</span> <span class="token class-name">wchar_t</span><span class="token operator">*</span> name2<span class="token operator">=</span> L<span class="token string">&quot;Cherno&quot;</span><span class="token punctuation">;</span><span class="token comment">//2\u4E2A\u5B57\u8282           \u7531\u7F16\u8BD1\u5668\u51B3\u5B9A  Windows 2\u5B57\u8282 Linux 4\u5B57\u8282</span>
<span class="token keyword">const</span> <span class="token class-name">char16_t</span> name3<span class="token operator">=</span> u<span class="token string">&quot;Cherno&quot;</span><span class="token punctuation">;</span> <span class="token comment">//2\u4E2A\u5B57\u828216\u6BD4\u7279</span>
<span class="token keyword">const</span> <span class="token class-name">char32_t</span> name4 <span class="token operator">=</span>U<span class="token string">&quot;Chaerno&quot;</span><span class="token punctuation">;</span> <span class="token comment">//4\u5B57\u828232\u6BD4\u7279</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u5B57\u7B26\u4E32\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u8FDE\u63A5" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u8FDE\u63A5</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>std<span class="token operator">::</span>string name0<span class="token operator">=</span> <span class="token string">&quot;Cherno&quot;</span>s<span class="token operator">+</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span> <span class="token comment">//s\u8868\u793A\u5B83\u662F\u4E00\u4E2A\u51FD\u6570 \u8FD4\u56DE\u6807\u51C6\u5B57\u7B26\u4E32\u5BF9\u8C61</span>
std<span class="token operator">::</span>wstring name0<span class="token operator">=</span> L<span class="token string">&quot;Cherno&quot;</span>s<span class="token operator">+</span>L<span class="token string">&quot;hello&quot;</span>
std<span class="token operator">::</span>u32string name0<span class="token operator">=</span> U<span class="token string">&quot;Cherno&quot;</span>s<span class="token operator">+</span>U<span class="token string">&quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u66F4\u7B80\u5355\u7684R&quot;()&quot;</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>R&quot;<span class="token punctuation">(</span>Line1
Line2
Line3
<span class="token punctuation">)</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u6C38\u8FDC\u4FDD\u5B58\u5728\u53EA\u8BFB\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u6C38\u8FDC\u4FDD\u5B58\u5728\u53EA\u8BFB\u533A\u57DF" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u6C38\u8FDC\u4FDD\u5B58\u5728\u53EA\u8BFB\u533A\u57DF</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
 <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;able&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u6808\u4E0A\u58F0\u660E\u7684\u53D8\u91CF</span>
	 name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">;</span>
	 std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> name <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5C06&quot;able&quot;\u8FD9\u4E2A\u5B57\u9762\u91CF\u590D\u5236\u5230\u4E86name\u8FD9\u4E2A\u53D8\u91CF\u7684\u5185\u5B58\u91CC\u3002</p>`,11);function t(p,o){return e}var r=s(a,[["render",t]]);export{r as default};
