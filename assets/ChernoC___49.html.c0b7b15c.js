import{_ as e,r as t,o as p,a as o,b as n,d as c,F as r,f as a,e as l}from"./app.593d268f.js";const i={},d=a('<h1 id="_49-c-\u4E2D\u4F7F\u7528\u9759\u6001\u94FE\u63A5\u5E93" tabindex="-1"><a class="header-anchor" href="#_49-c-\u4E2D\u4F7F\u7528\u9759\u6001\u94FE\u63A5\u5E93" aria-hidden="true">#</a> 49. C++\u4E2D\u4F7F\u7528\u9759\u6001\u94FE\u63A5\u5E93</h1><p>\u9879\u76EE\u4E2D\u4F7F\u7528\u6E90\u4EE3\u7801(\u81EA\u5DF1\u7F16\u8BD1)\u66F4\u6709\u52A9\u4E8E\u8C03\u8BD5\uFF0C\u94FE\u63A5\u5230\u9884\u6784\u5EFA\u7684\u4E8C\u8FDB\u5236\u5E93\u4F1A\u66F4\u5FEB\u3002</p><h2 id="\u4F7F\u7528glfw" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528glfw" aria-hidden="true">#</a> \u4F7F\u7528GLFW</h2><h3 id="\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E0B\u8F7D" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u6587\u4EF6\u4E0B\u8F7D</h3><p>32\u548C64\u4F4D\u4E0D\u53D6\u51B3\u4E0E\u81EA\u5DF1\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u800C\u5728\u4E8E\u7F16\u8BD1\u7684\u5E94\u7528\u7A0B\u5E8F\u76EE\u6807\u5E73\u53F0\uFF0C\u5982\uFF1Ax86\u4E5F\u5C31\u662Fwin32\uFF0C\u90A3\u5C31\u898132\u4F4D\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002</p>',5),u={href:"https://www.glfw.org/download.html",target:"_blank",rel:"noopener noreferrer"},h=l("GLFW\u4E0B\u8F7D"),k=a(`<h4 id="\u5E93\u6587\u4EF6\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5E93\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a> \u5E93\u6587\u4EF6\u7ED3\u6784</h4><p>\u901A\u5E38\u5305\u542Bincludes\uFF08\u4E00\u5806\u5934\u6587\u4EF6\uFF09\u548Clibrary\uFF08\u9884\u5148\u6784\u5EFA\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6 \u9759\u6001\u94FE\u63A5 \u540C\u53F0\u94FE\u63A5\uFF09,\u5305\u542B\u76EE\u5F55\u548C\u5E93\u7ED3\u6784\u3002</p><h4 id="\u9759\u6001\u94FE\u63A5\u5E93\u548C\u52A8\u6001\u94FE\u63A5\u5E93" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u94FE\u63A5\u5E93\u548C\u52A8\u6001\u94FE\u63A5\u5E93" aria-hidden="true">#</a> \u9759\u6001\u94FE\u63A5\u5E93\u548C\u52A8\u6001\u94FE\u63A5\u5E93</h4><ul><li>\u9759\u6001\u94FE\u63A5\u5E93\uFF1A\u4F1A\u653E\u5230\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\uFF0C\u5982exe\u3002</li><li>\u52A8\u6001\u94FE\u63A5\u5E93\u662F\u5728\u8FD0\u884C\u65F6\u88AB\u94FE\u63A5\u7684\uFF0C\u6240\u4EE5\u6709\u4E00\u4E9B\u94FE\u63A5\uFF0C\u53EF\u4EE5\u9009\u62E9\u5728\u7A0B\u5E8F\u8FD0\u884C\u65F6\uFF0C\u88C5\u8F7D\u52A8\u6001\u94FE\u63A5\u5E93\uFF0CloadLibrary\u51FD\u6570\u3002\u4ED6\u4F1A\u8F7D\u5165\u52A8\u6001\u5E93\uFF0C\u4ECE\u4E2D\u62C9\u53D6\u51FD\u6570\uFF0C\u7136\u540E\u5F00\u59CB\u8C03\u7528\u51FD\u6570\u3002\u4E5F\u53EF\u4EE5\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0C\u52A0\u8F7Ddll\u6587\u4EF6</li></ul><p>\u533A\u522B\u662F\u4ED6\u4EEC\u662F\u5426\u88AB\u7F16\u8BD1\u5230exe\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\uFF0C\u8FD8\u662F\u5355\u72EC\u7684\u6587\u4EF6\uFF0C\u8FD0\u884C\u65F6\u9700\u8981\u653E\u5728exe\u6587\u4EF6\u7684\u5176\u4ED6\u5730\u65B9\uFF0C\u7136\u540Eexe\u52A0\u8F7D\u5B83\u3002</p><h4 id="\u6267\u884C\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u901F\u5EA6" aria-hidden="true">#</a> \u6267\u884C\u901F\u5EA6</h4><p>\u9759\u6001\u94FE\u63A5\u66F4\u5FEB\uFF0C\u56E0\u4E3A\u7F16\u8BD1\u5668\u548C\u94FE\u63A5\u5668\u5B9E\u9645\u4E0A\u53EF\u4EE5\u6267\u884C\u94FE\u63A5\u65F6\u7684\u4F18\u5316\uFF0C\u5728\u6280\u672F\u4E0A\u53EF\u4EE5\u4EA7\u751F\u66F4\u5FEB\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p><p>\u52A8\u6001\u94FE\u63A5\u9700\u8981\u8FD0\u884C\u65F6\u88C5\u8F7D\u3002</p><h3 id="visual-studio-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#visual-studio-\u914D\u7F6E" aria-hidden="true">#</a> Visual Studio \u914D\u7F6E</h3><h4 id="\u5934\u6587\u4EF6\u76EE\u5F55\u914D\u7F6E-\u544A\u8BC9\u7F16\u8BD1\u5668\u6709\u8FD9\u4E2A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5934\u6587\u4EF6\u76EE\u5F55\u914D\u7F6E-\u544A\u8BC9\u7F16\u8BD1\u5668\u6709\u8FD9\u4E2A\u51FD\u6570" aria-hidden="true">#</a> \u5934\u6587\u4EF6\u76EE\u5F55\u914D\u7F6E \u544A\u8BC9\u7F16\u8BD1\u5668\u6709\u8FD9\u4E2A\u51FD\u6570</h4><p>\u9879\u76EE\u76EE\u5F55-&gt; \u5C5E\u6027 -&gt; C++ -&gt; \u5E38\u89C4 -&gt; \u9644\u52A0\u5305\u542B\u76EE\u5F55 -&gt; \u7F16\u8F91 -&gt; \u5B8F -&gt; \u89E3\u51B3\u65B9\u6848\u76EE\u5F55<code>&quot;$(SolutionDir)&quot;</code> \u9879\u76EE\u76EE\u5F55<code>&quot;\${ProjectDir}&quot;</code> -&gt; <code>$(SolutionDir)dependencies\\GLFW\\include</code></p><h4 id="\u5B9E\u9645\u5B9A\u4E49\u6587\u4EF6\u914D\u7F6E-\u8BA9linker\u53EF\u4EE5\u94FE\u63A5\u5230\u6B63\u786E\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9645\u5B9A\u4E49\u6587\u4EF6\u914D\u7F6E-\u8BA9linker\u53EF\u4EE5\u94FE\u63A5\u5230\u6B63\u786E\u7684\u51FD\u6570" aria-hidden="true">#</a> \u5B9E\u9645\u5B9A\u4E49\u6587\u4EF6\u914D\u7F6E \u8BA9linker\u53EF\u4EE5\u94FE\u63A5\u5230\u6B63\u786E\u7684\u51FD\u6570</h4><p>\u9879\u76EE\u76EE\u5F55-&gt; \u5C5E\u6027 -&gt; \u94FE\u63A5\u5668 -&gt; \u5E38\u89C4 -&gt; $(SolutionDir)\\dependencies\\GLFW\\lib-vc2022 \u53EF\u4EE5\u7406\u89E3\u4E3A\u5728\u6B64\u76EE\u5F55\u4E0B\u627E\u5230\u94FE\u63A5\u7684\u9759\u6001\u4E8C\u8FDB\u5236\u6587\u4EF6</p><p>\u9879\u76EE\u76EE\u5F55-&gt; \u5C5E\u6027 -&gt; \u94FE\u63A5\u5668 -&gt; \u8F93\u5165 -&gt; glfw3.lib</p><p>glfw3.dll \u52A8\u6001\u5E93</p><p>glfw3.lib \u9759\u6001\u94FE\u63A5</p><p>glfw3dll.lib \u52A8\u6001\u94FE\u63A5\u548C\u9759\u6001\u4E00\u8D77</p><p>\u6CE8\u610F\uFF1A \u7F16\u8BD1\u76EE\u6807\u5E73\u53F0\u8981\u548C\u5E93\u5E73\u53F0\u4E00\u81F4\uFF1A x86 \u8981\u5BF9\u5E94 x86 \u4E0D\u8981 x64</p><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;GLFW/glfw3.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token function">glfwInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="c\u4E0Ec-\u6DF7\u5408\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#c\u4E0Ec-\u6DF7\u5408\u4F7F\u7528" aria-hidden="true">#</a> C\u4E0EC++\u6DF7\u5408\u4F7F\u7528</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span> <span class="token keyword">int</span> <span class="token function">glfwInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token function">glfwInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5934\u6587\u4EF6\u58F0\u660E\u53EF\u7528\u51FD\u6570\uFF0C\u5E93\u6587\u4EF6\u6709\u5BF9\u8FD9\u4E9B\u51FD\u6570\u7684\u5177\u4F53\u5B9A\u4E49\uFF0C\u8FD9\u6837\u6211\u4EEC\u7684\u6587\u4EF6\u4E2D\u7684\u51FD\u6570\u5C31\u53EF\u4EE5\u6B63\u786E\u94FE\u63A5\u5230\u5E93\u6587\u4EF6\uFF0C\u4EE5\u6267\u884C\u6B63\u786E\u7684\u4EE3\u7801\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u9759\u6001\u94FE\u63A5\u5E93\u7684\u6B63\u786E\u4F7F\u7528\uFF0C\u8981\u4FDD\u8BC1\u5934\u6587\u4EF6\u548C\u5E93\u6587\u4EF6\u6B63\u786E\u88AB\u7F16\u8BD1\u5668\u914D\u7F6E\uFF0C\u4EE5\u94FE\u63A5\u5230\u6211\u4EEC\u6240\u9700\u8981\u7684\u51FD\u6570\u4E2D\u3002</p>`,25);function b(g,m){const s=t("ExternalLinkIcon");return p(),o(r,null,[d,n("p",null,[n("a",u,[h,c(s)])]),k],64)}var x=e(i,[["render",b]]);export{x as default};
