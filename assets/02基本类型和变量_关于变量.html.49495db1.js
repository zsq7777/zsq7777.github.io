import{_ as n,f as a}from"./app.024c5519.js";const s={},e=a(`<h1 id="_02-\u57FA\u672C\u7C7B\u578B\u548C\u53D8\u91CF-\u5173\u4E8E\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_02-\u57FA\u672C\u7C7B\u578B\u548C\u53D8\u91CF-\u5173\u4E8E\u53D8\u91CF" aria-hidden="true">#</a> 02. \u57FA\u672C\u7C7B\u578B\u548C\u53D8\u91CF\uFF1A\u5173\u4E8E\u53D8\u91CF</h1><h2 id="_1-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-\u53D8\u91CF" aria-hidden="true">#</a> 1. \u53D8\u91CF</h2><ol><li><p>\u53D8\u91CF\u6301\u6709\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u5728Kotlin\u4E2D\u57FA\u672C\u7C7B\u578B\u4E5F\u662F\u5BF9\u8C61\u3002</p></li><li><p>\u867D\u7136\u57FA\u672C\u7C7B\u578B\u662F\u5BF9\u8C61\uFF0C\u4F46\u662F\u5728\u505A\u5982\u4E0B\u64CD\u4F5C\u65F6</p></li></ol><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b<span class="token operator">=</span>a<span class="token punctuation">;</span>
<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
<span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>3
1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>var b=a \u662F\u53D6\u51FAa\u7684\u503C\uFF0C\u590D\u5236\u4ED6\u4EEC\uFF0C\u5E76\u5C06\u8BE5\u526F\u672C\u4FDD\u5B58\u81F3b\u3002 \u8FD9\u610F\u5473\u7740a\u7684\u53D8\u66F4\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5230b\u7684\u503C\uFF0C\u548Cjava\u4E00\u6837\u3002</p><p>\u4F46\u662F<strong>\u521B\u5EFA\u7C7B\u7684\u5BF9\u8C61\u7684\u60C5\u51B5</strong></p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">class</span> Entity<span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span></span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> a
    a<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot;\u725B\u63B0&quot;</span></span>
    <span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>123
123
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>a\u4E5F\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u5E76\u4E0D\u662F\u590D\u5236\uFF0C\u800C\u662F\u5F15\u7528\u3002</p><h2 id="_2-\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 2. \u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">var</span> b<span class="token operator">:</span>Double<span class="token operator">=</span><span class="token number">1.0</span>
<span class="token keyword">var</span> a<span class="token operator">:</span>Int<span class="token operator">=</span>b<span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5C06b\u7684\u503C\u590D\u5236\u5230a\u7684\u5185\u5B58\u4E2D\uFF0C\u5982\u679Cb\u7684\u5360\u7528\u5185\u5B58\u7A7A\u95F4\u5927\u4E8Ea,\u90A3\u4E48\u5C31\u4F1A\u51FA\u73B0\u6EA2\u51FA\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6\u7F16\u8BD1\u5668\u4F1A\u820D\u5F03\u6389\u8D85\u51FA\u7684\u90E8\u5206\u3002</p><p>\u5F53\u7136\uFF0C\u8FD9\u4E0D\u662F\u76F4\u63A5\u622A\u53D6\u3002 \u7740\u6D89\u53CA\u5230\u6570\u503C\u6B63\u8D1F/\u4F4D\u8FD0\u7B97/\u4E8C\u8FDB\u5236/2\u7684\u8865\u6570\u3002</p><h2 id="_3-\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u7EC4" aria-hidden="true">#</a> 3. \u6570\u7EC4</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>    <span class="token keyword">var</span> a<span class="token operator">=</span> <span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;1&quot;</span></span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u4E0A\uFF0C\u5B83\u652F\u6301\u4E0D\u540C\u7C7B\u578B\u7684\u53D8\u91CF\u7684\u96C6\u5408\u3002\u7F16\u8BD1\u5668\u4F1A\u81EA\u52A8\u63A8\u65AD\u5BF9\u5E94\u7684\u7C7B\u578B\u3002</p><p>\u6570\u7EC4\u4E2D\u6301\u6709\u53D8\u91CF\uFF0C\u800C\u53D8\u91CF\u6301\u6709\u503C\u7684\u5F15\u7528\u3002</p><h3 id="_3-1-val\u53EF\u4EE5\u9650\u5236\u53D8\u91CF\u4E0D\u80FD\u6307\u5411\u5176\u4ED6\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_3-1-val\u53EF\u4EE5\u9650\u5236\u53D8\u91CF\u4E0D\u80FD\u6307\u5411\u5176\u4ED6\u6570\u7EC4" aria-hidden="true">#</a> 3.1 val\u53EF\u4EE5\u9650\u5236\u53D8\u91CF\u4E0D\u80FD\u6307\u5411\u5176\u4ED6\u6570\u7EC4</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>  <span class="token keyword">val</span> a<span class="token operator">=</span> <span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;1&quot;</span></span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
   a<span class="token operator">=</span> <span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-2-val\u4E0D\u80FD\u9650\u5236\u6570\u7EC4\u4E2D\u7684\u53D8\u91CF\u66F4\u5F15\u7528-\u6216\u8005\u8BF4\u6570\u7EC4\u4E2D\u7684\u53D8\u91CF\u91CD\u65B0\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#_3-2-val\u4E0D\u80FD\u9650\u5236\u6570\u7EC4\u4E2D\u7684\u53D8\u91CF\u66F4\u5F15\u7528-\u6216\u8005\u8BF4\u6570\u7EC4\u4E2D\u7684\u53D8\u91CF\u91CD\u65B0\u8D4B\u503C" aria-hidden="true">#</a> 3.2 val\u4E0D\u80FD\u9650\u5236\u6570\u7EC4\u4E2D\u7684\u53D8\u91CF\u66F4\u5F15\u7528\uFF0C\u6216\u8005\u8BF4\u6570\u7EC4\u4E2D\u7684\u53D8\u91CF\u91CD\u65B0\u8D4B\u503C</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>  <span class="token keyword">val</span> a<span class="token operator">=</span> <span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
  a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-3-\u53EA\u8BFB\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_3-3-\u53EA\u8BFB\u6570\u7EC4" aria-hidden="true">#</a> 3.3 \u53EA\u8BFB\u6570\u7EC4</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>  <span class="token keyword">val</span> a<span class="token operator">=</span> <span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;1&quot;</span></span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
  a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span> <span class="token comment">//\u8FD9\u91CC\u7F16\u8BD1\u901A\u8FC7\uFF0C\u4F46\u662F\u4F1A\u8FD0\u884C\u65F6\u5F02\u5E38</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,26);function p(t,o){return e}var c=n(s,[["render",p]]);export{c as default};
