import{_ as n,f as s}from"./app.d5bd46de.js";var a="/assets/image0.bfd033e7.png",e="/assets/image1.1d505193.png",p="/assets/image2.5e1cb060.png";const t={},o=s(`<h1 id="_05-c-\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#_05-c-\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> 05. C++\u662F\u5982\u4F55\u5DE5\u4F5C\u7684</h1><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p>Cpp\u6587\u4EF6\uFF0C\u7F16\u8BD1\u5668\u5C06\u5176\u8F6C\u53D8\u4E3A\u4E8C\u8FDB\u5236\uFF08\u5E93/\u53EF\u6267\u884C\u6587\u4EF6\u5939\uFF09</p><h2 id="\u9884\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9884\u5904\u7406" aria-hidden="true">#</a> \u9884\u5904\u7406</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF1A &quot;#&quot;\u7B26\u53F7\u4E4B\u540E\u7684\u90FD\u662F\u9884\u5904\u7406\uFF08\u7F16\u8BD1\u5668\u4F18\u5148\u6267\u884C\uFF09\u3002\u5728\u5B9E\u9645\u7F16\u8BD1\u4E4B\u524D\uFF0C\u627E\u5230<code>&lt;iostream&gt;</code>\u6587\u4EF6\uFF0C\u5C06<code>&lt;iostream&gt;</code>\u4E2D\u7684\u4EE3\u7801\u62F7\u8D1D\u5230\u5F53\u524D\u6587\u4EF6\u4E2D\uFF0C \u8FD9\u4E9B\u5305\u542B\u7684\u6587\u4EF6\uFF0C\u901A\u5E38\u88AB\u79F0\u4E3A\u5934\u6587\u4EF6\u3002</p><p>&quot;main&quot;\u51FD\u6570\u4E3A\u7A0B\u5E8F\u5165\u53E3,\u4EE3\u8868\u7740\u8BA1\u7B97\u673A\u4ECE\u8FD9\u4E2A\u51FD\u6570\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u3002 &quot;main&quot;\u51FD\u6570\u6BD4\u8F83\u7279\u522B\uFF0C\u5728\u4E0D\u5199\u7684\u65F6\u5019\uFF0C\u8FD4\u56DE0\u3002</p><p>&quot;&lt;&lt;&quot; \u5728\u8FD9\u91CC\uFF0C\u770B\u8D77\u6765\u50CF\u4F4D\u8FD0\u7B97\u7B26\uFF0C\u5B9E\u9645\u4E0A\u662F\u91CD\u8F7D\u8FD0\u7B97\u7B26\u3002\u662F\u4E00\u4E2A\u51FD\u6570\u3002 &quot;std::cout&quot; \u5C06&quot;Hello World&quot;\u63A8\u9001\u5230cout\u6D41\u4E2D\uFF0C\u6253\u5370\u5230\u7EC8\u7AEF\uFF0C\u7136\u540E&quot;std::endl&quot;\u63A8\u9001\u4E00\u4E2A\u884C\u7ED3\u675F\u7B26 &quot;std::cin.get()&quot;\u7B49\u5F85\u6309\u4E0Benter\u952E\uFF0C\u7136\u540E\u7EE7\u7EED\u8FD0\u884C\u4E0B\u4E00\u884C &quot;return 0&quot; \u8FD4\u56DE0 \uFF0C\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5</p><h2 id="visual-studio-c-\u6587\u4EF6\u7F16\u8BD1\u5668\u8F6C\u5316\u4E8C\u8FDB\u5236" tabindex="-1"><a class="header-anchor" href="#visual-studio-c-\u6587\u4EF6\u7F16\u8BD1\u5668\u8F6C\u5316\u4E8C\u8FDB\u5236" aria-hidden="true">#</a> Visual Studio C++\u6587\u4EF6\u7F16\u8BD1\u5668\u8F6C\u5316\u4E8C\u8FDB\u5236</h2><p><img src="`+a+'" alt="\u56FE\u7247" loading="lazy"> \u914D\u7F6E\u548C\u76EE\u6807\u5E73\u53F0 debug\u6BD4release\u5173\u95ED\u4E86\u5F88\u591A\u4F18\u5316\uFF0C\u4F46\u662F\u53EF\u4EE5\u66F4\u5FEB\u7684\u7F16\u8BD1\u548C\u8C03\u8BD5\u4EE3\u7801\u3002</p><h3 id="\u7F16\u8BD1\u65F6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u65F6" aria-hidden="true">#</a> \u7F16\u8BD1\u65F6</h3><p>\u9879\u76EE\u4E2D\u6BCF\u4E00\u4E2Acpp\u6587\u4EF6\u90FD\u4F1A\u88AB\u7F16\u8BD1\uFF0C\u5934\u6587\u4EF6\u4E0D\u4F1A\uFF0C\u5934\u6587\u4EF6\u5728\u9884\u5904\u7406\u65F6\u5DF2\u7ECF\u5C06\u4EE3\u7801\u62F7\u8D1D\u8FDB\u5165cpp\u6587\u4EF6\u4E00\u8D77\u88AB\u7F16\u8BD1\u3002 \u6BCF\u4E00\u4E2Acpp\u6587\u4EF6\u90FD\u88AB\u7F16\u8BD1\u6210object file,\u4F7F\u7528visual studio\u751F\u6210.obj\u6587\u4EF6\u3002\u9700\u8981\u628A.obj\u5408\u6210\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u8FD9\u5C31\u9700\u8981\u7528\u5230link\uFF1A</p><h3 id="linker" tabindex="-1"><a class="header-anchor" href="#linker" aria-hidden="true">#</a> linker</h3><p>linker\u5C06\u6240\u6709\u7684.obj\u6587\u4EF6\u5408\u5E76\u6210\u4E00\u4E2A.exe\u6587\u4EF6\u3002</p><p><img src="'+e+`" alt="\u56FE\u7247" loading="lazy"> build\u589E\u52A0&quot;\u7F16\u8BD1&quot;\u547D\u4EE4\u53EF\u4EE5\u770B\u5230\u66F4\u8BE6\u7EC6\u7684\u9519\u8BEF\u4FE1\u606F\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Log<span class="token punctuation">.</span>cpp

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> message <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Main<span class="token punctuation">.</span>cpp

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53EF\u4EE5\u4E0D\u7528\u6307\u5B9A\u53C2\u6570\u540D\u79F0</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5F53Main.cpp main\u65B9\u6CD5\u8C03\u7528Log\u51FD\u6570\uFF0C\u800C\u5F53\u524Dcpp\u6587\u4EF6\u5E76\u6CA1\u6709Log()\u7684\u5B9A\u4E49\uFF0C\u662F\u65E0\u6CD5\u751F\u6548\u7684\u3002 \u5176\u4ED6cpp\u6587\u4EF6(Log.cpp)\u6709\u8BE5\u51FD\u6570\u5B9A\u4E49\u65F6\uFF0C\u90A3\u4E48\u5728Main.cpp\u4E2D\u58F0\u660E\u51FD\u6570\u624D\u53EF\u4EE5\u8C03\u7528\u3002 \u58F0\u660E\u51FD\u6570\u65E0\u9700\u65B9\u6CD5\u4F53\u3002</p><h4 id="\u7F16\u8BD1\u5668\u5982\u4F55\u77E5\u9053log-\u51FD\u6570\u5728\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5668\u5982\u4F55\u77E5\u9053log-\u51FD\u6570\u5728\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D" aria-hidden="true">#</a> \u7F16\u8BD1\u5668\u5982\u4F55\u77E5\u9053Log()\u51FD\u6570\u5728\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF1F</h4><p><img src="`+p+'" alt="\u56FE\u7247" loading="lazy"> \u5F53\u6211\u4EEC\u5C06Log.cpp\u7684\u6587\u4EF6\u540D\u66F4\u6539\u65F6\uFF0CMain.cpp\u7F16\u8BD1\u65F6\u65E0\u6CD5\u627E\u5230Log()\u51FD\u6570\u3002 &quot;\u65E0\u6CD5\u89E3\u6790\u7684\u5916\u90E8\u7B26\u53F7&quot; \uFF1A\u94FE\u63A5\u5668\u65E0\u6CD5\u89E3\u6790\u8FD9\u4E2A\u7B26\u53F7\uFF0C\u94FE\u63A5\u5668\u7684\u4F5C\u7528\u5C31\u662F\u94FE\u63A5\u8FD9\u4E9B\u51FD\u6570\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u6587\u4EF6\u76EE\u5F55\u67E5\u770B\u5230\u7F16\u8BD1\u5668\u751F\u6210Log.obj\u548CMain.obj\u3002 linker\u4F1A\u5C06\u4ED6\u4EEC\u5408\u5E76\u6210\u4E00\u4E2Aexe\u6587\u4EF6\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>\u7F16\u8BD1\u5668\u4F18\u5148\u5904\u7406\u9884\u5904\u7406\u64CD\u4F5C\uFF0C\u5C06\u9884\u5904\u7406\u6587\u4EF6\u62F7\u8D1D\u81F3cpp\u6587\u4EF6\u751F\u6210\u5BF9\u5E94obj\u6587\u4EF6\u3002</li><li>\u8C03\u7528\u5916\u90E8\u6587\u4EF6\u7684\u51FD\u6570\u5FC5\u987B\u5148\u58F0\u660E\uFF0C\u58F0\u660E\u53EF\u4EE5\u4E0D\u7528\u6307\u5B9A\u53C2\u6570\u540D\u79F0\u3002</li><li>\u7F16\u8BD1\u5668\u5C06\u7F16\u5199\u597D\u7684cpp\u6587\u4EF6\u751F\u6210\u4E3A\u5BF9\u5E94obj\u6587\u4EF6\uFF0Clinker\u5C06\u51FD\u6570\u5173\u8054\u751F\u6210exe\uFF08\u4E8C\u8FDB\u5236\uFF09\u53EF\u6267\u884C\u6587\u4EF6\u3002</li></ul>',23);function c(l,r){return o}var u=n(t,[["render",c]]);export{u as default};
