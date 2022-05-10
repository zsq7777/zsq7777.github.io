import{_ as a,f as s}from"./app.28a0acac.js";const n={},e=s(`<h1 id="_52-c-\u4E2D\u5982\u4F55\u5904\u7406\u591A\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#_52-c-\u4E2D\u5982\u4F55\u5904\u7406\u591A\u8FD4\u56DE\u503C" aria-hidden="true">#</a> 52. C++\u4E2D\u5982\u4F55\u5904\u7406\u591A\u8FD4\u56DE\u503C</h1><p>\u4EC0\u4E48\u662F\u5143\u7EC4tuple,\u4EC0\u4E48\u662Fpair</p><h2 id="_1-\u5982\u4F55\u8FD4\u56DE\u4E0D\u540C\u7C7B\u578B\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u8FD4\u56DE\u4E0D\u540C\u7C7B\u578B\u7684\u53D8\u91CF" aria-hidden="true">#</a> 1. \u5982\u4F55\u8FD4\u56DE\u4E0D\u540C\u7C7B\u578B\u7684\u53D8\u91CF</h2><p>\u53EF\u4EE5\u4F7F\u7528\u7ED3\u6784\u4F53\u3002</p><h3 id="_1-1-\u5BF9\u8C61\u4F20\u5165\u5F15\u7528\u7684\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5BF9\u8C61\u4F20\u5165\u5F15\u7528\u7684\u5F62\u5F0F" aria-hidden="true">#</a> 1.1 \u5BF9\u8C61\u4F20\u5165\u5F15\u7528\u7684\u5F62\u5F0F</h3><p>\u5728\u51FD\u6570\u5916\u90E8\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5C06\u5F15\u7528\u4F20\u5165\u5E76\u8D4B\u503C\uFF0C\u5916\u90E8\u5BF9\u8C61\u6539\u53D8\uFF0C\u53EF\u8BA4\u4E3A\u8FD4\u56DE\u4E86\u591A\u4E2A\u503C\u3002</p><h3 id="_1-2-\u8FD4\u56DE\u5806\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_1-2-\u8FD4\u56DE\u5806\u6570\u7EC4" aria-hidden="true">#</a> 1.2 \u8FD4\u56DE\u5806\u6570\u7EC4</h3><p>\u6307\u9488/\u6216\u662F\u6307\u5B9A\u5927\u5C0F\u7684std::Array(\u6808\u4E0A\u521B\u5EFA)/ vector \u5806\u4E0A\u5B58\u50A8</p><p>\u5F00\u9500\u8F83\u5927</p><h3 id="_1-3-tuple-\u5143\u7EC4" tabindex="-1"><a class="header-anchor" href="#_1-3-tuple-\u5143\u7EC4" aria-hidden="true">#</a> 1.3 tuple \u5143\u7EC4</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;functional&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;utility&gt;</span></span>

std<span class="token operator">::</span>tuple<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token punctuation">,</span>std<span class="token operator">::</span>string<span class="token operator">&gt;</span>
std<span class="token operator">::</span><span class="token function">make_pair</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">auto</span>\u8FD4\u56DE\u503C
std<span class="token operator">::</span>get<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_2-\u603B\u7ED3" aria-hidden="true">#</a> 2. \u603B\u7ED3</h2><p>\u6700\u597D\u7528struct\u7ED3\u6784\u4F53\u6765\u505A\u8FD4\u56DE\u503C,\u53EF\u4EE5\u660E\u786E\u7684\u77E5\u9053\u5BF9\u5E94\u7684\u503C\u7684\u542B\u4E49\u3002</p>`,13);function t(p,r){return e}var o=a(n,[["render",t]]);export{o as default};
