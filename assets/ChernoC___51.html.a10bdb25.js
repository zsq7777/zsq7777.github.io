import{_ as n,f as s}from"./app.7279925a.js";const a={},e=s(`<h1 id="_51-c-\u4E2D\u521B\u5EFA\u4E0E\u4F7F\u7528\u5E93-visualstudio-\u9759\u6001\u5E93" tabindex="-1"><a class="header-anchor" href="#_51-c-\u4E2D\u521B\u5EFA\u4E0E\u4F7F\u7528\u5E93-visualstudio-\u9759\u6001\u5E93" aria-hidden="true">#</a> 51. C++\u4E2D\u521B\u5EFA\u4E0E\u4F7F\u7528\u5E93(VisualStudio) \u9759\u6001\u5E93</h1><ol><li>\u5728\u540C\u4E00\u4E2A\u89E3\u51B3\u65B9\u6848\u4E2D\u521B\u5EFA\u4E24\u4E2A\u9879\u76EE\u3002</li></ol><p>Engine.h</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

namespace engine <span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Engine.cpp</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Engine.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

namespace engine <span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;HelloEngine&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Application.cpp</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//#include &quot;../../Engine/src/Engine.h&quot;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Engine.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	engine<span class="token operator">::</span><span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li><p>\u4E00\u4E2A\u9879\u76EE\u8BBE\u7F6E\u4E3AApplication,\u4E00\u4E2A\u9879\u76EE\u8BBE\u7F6E\u4E3A.lib\u9759\u6001\u5E93\u3002</p></li><li><p>Apllication\u4E2D\u5F15\u7528\u51FD\u6570\u9700\u8981\uFF1A</p></li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//#include &quot;../../Engine/src/Engine.h&quot;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;Engine.h&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5230\u5C5E\u6027 -&gt; C++ -&gt; \u5E38\u89C4 -&gt; \u9644\u52A0\u5305\u542B\u76EE\u5F55 $(SolutionDir)\\Engine\\src \u5C31\u53EF\u4EE5\u76F4\u63A5\u627E\u5230\u8BE5\u8DEF\u5F84\u4E0B\u5934\u6587\u4EF6\u3002</p><ol start="4"><li>\u6DFB\u52A0Engine\u5F15\u7528\u5230Game, \u53F3\u952EGame-&gt;\u6DFB\u52A0-&gt;\u5F15\u7528</li></ol>`,12);function p(t,c){return e}var i=n(a,[["render",p]]);export{i as default};
