import{_ as n,f as s}from"./app.c9d61a15.js";const a={},e=s(`<h1 id="_06-c-\u7F16\u8BD1\u5668\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#_06-c-\u7F16\u8BD1\u5668\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> 06. C++\u7F16\u8BD1\u5668\u662F\u5982\u4F55\u5DE5\u4F5C\u7684</h1><p>\u6BCF\u4E2ACPP\u6587\u4EF6\u90FD\u4F1A\u4E00\u4E2A\u7FFB\u8BD1\u5355\u5143\uFF0C\u6BCF\u4E00\u4E2ACPP\u6587\u4EF6\u90FD\u4F1A\u751F\u6210\u4E00\u4E2Aobj\u6587\u4EF6\u3002</p><h2 id="\u5E38\u89C1\u7684\u9884\u5904\u7406\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684\u9884\u5904\u7406\u8BED\u53E5" aria-hidden="true">#</a> \u5E38\u89C1\u7684\u9884\u5904\u7406\u8BED\u53E5</h2><p>include if ifdef pragme</p><h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3><p>\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u62F7\u8D1D\u8BE5\u6587\u4EF6\u7684\u6240\u6709\u5185\u5BB9\u5230\u6211\u4EEC\u5199\u7684cpp\u6587\u4EF6\u4E2D\u3002</p><h3 id="define" tabindex="-1"><a class="header-anchor" href="#define" aria-hidden="true">#</a> define</h3><p>\u521B\u5EFA\u7B26\u53F7\u5E38\u91CF\uFF0C\u8BE5\u7B26\u53F7\u5E38\u91CF\u7EDF\u79F0\u4E3A\u5B8F\u3002 \u4ED6\u53EF\u4EE5\u66FF\u6362\u6587\u4EF6\u4E2D\u4F60\u60F3\u66FF\u6362\u7684 \u5982int \u5982\u51FD\u6570</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PI</span> <span class="token expression"><span class="token number">3.14159</span></span></span>
<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value of PI :&quot;</span> <span class="token operator">&lt;&lt;</span> PI <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> 
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u9884\u5904\u7406\u7ED3\u679C</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
 
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value of PI :&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token number">3.14159</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> 

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u53C2\u6570\u5B8F" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u5B8F" aria-hidden="true">#</a> \u53C2\u6570\u5B8F</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">MIN</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token punctuation">(</span>a<span class="token operator">&lt;</span>b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">)</span></span></span>
 
<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
   i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
   j <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
   cout <span class="token operator">&lt;&lt;</span><span class="token string">&quot;\u8F83\u5C0F\u7684\u503C\u4E3A\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token function">MIN</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
 
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="if-endif" tabindex="-1"><a class="header-anchor" href="#if-endif" aria-hidden="true">#</a> if endif</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">0</span>   </span><span class="token comment">//\u4E0D\u7F16\u8BD1   1//\u7F16\u8BD1</span></span>
<span class="token comment">//\u4EE3\u7801</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6839\u636E\u8BE5\u5224\u65AD\u6761\u4EF6\uFF0C\u8F93\u51FA\u8BE5\u4EE3\u7801\u5757\u662F\u5426\u7F16\u8BD1</p><h2 id="\u9884\u5904\u7406\u9636\u6BB5\u7ED3\u675F" tabindex="-1"><a class="header-anchor" href="#\u9884\u5904\u7406\u9636\u6BB5\u7ED3\u675F" aria-hidden="true">#</a> \u9884\u5904\u7406\u9636\u6BB5\u7ED3\u675F</h2><p>\u9884\u5904\u7406\u9636\u6BB5\u7ED3\u675F\uFF0C\u8F93\u51FAobj,obj\u6587\u4EF6\u6253\u5F00\u53EF\u89C1\u90FD\u662F\u673A\u5668\u7801\u3002</p><p>\u5C06\u673A\u5668\u7801\u8F6C\u4E3AASM \u6C47\u7F16\u3002</p><p>\u7F16\u8BD1\u5668\u4F1A\u81EA\u52A8\u4F18\u5316\u4EE3\u7801\u3002 \u5982\uFF1A\u5728\u7F16\u8BD1\u65F6\u76F4\u63A5\u5199\u5E38\u6570\u7684\u8BA1\u7B97\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5728\u7F16\u8BD1\u65F6\u5C31\u8BA1\u7B97\u5B8C\u6210\u5E76\u7F16\u8BD1\u81F3\u673A\u5668\u7801\u3002</p><p>obj\u5305\u542B\u4E86\u8FD0\u884C\u7684\u4EE3\u7801\u548C\u5E38\u6570\u5B9A\u4E49\u3002</p>`,20);function p(t,c){return e}var r=n(a,[["render",p]]);export{r as default};
