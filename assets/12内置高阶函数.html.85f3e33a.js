import{_ as n,f as s}from"./app.6bf1f908.js";const a={},p=s(`<h1 id="_12-\u5185\u7F6E\u9AD8\u9636\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_12-\u5185\u7F6E\u9AD8\u9636\u51FD\u6570" aria-hidden="true">#</a> 12. \u5185\u7F6E\u9AD8\u9636\u51FD\u6570</h1><h2 id="_1-\u83B7\u53D6\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C" tabindex="-1"><a class="header-anchor" href="#_1-\u83B7\u53D6\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C" aria-hidden="true">#</a> 1. \u83B7\u53D6\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C</h2><h3 id="_1-1-\u5904\u7406\u57FA\u7840\u7C7B\u578B-min-max" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5904\u7406\u57FA\u7840\u7C7B\u578B-min-max" aria-hidden="true">#</a> 1.1 \u5904\u7406\u57FA\u7840\u7C7B\u578B min/max</h3><p><code>minOrNull</code>\u548C<code>maxOrNull</code></p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>    <span class="token keyword">val</span> array <span class="token operator">=</span> <span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    array<span class="token punctuation">.</span><span class="token function">minOrNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    array<span class="token punctuation">.</span><span class="token function">minOrNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> list <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">321</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> minOrNull <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">minOrNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> maxOrNull <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">maxOrNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>minOrNull<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>maxOrNull<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_1-2-\u5904\u7406\u6240\u6709\u7C7B\u578B\u6700\u5927\u503C-\u6700\u5C0F\u503C-minby-maxby" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5904\u7406\u6240\u6709\u7C7B\u578B\u6700\u5927\u503C-\u6700\u5C0F\u503C-minby-maxby" aria-hidden="true">#</a> 1.2 \u5904\u7406\u6240\u6709\u7C7B\u578B\u6700\u5927\u503C\uFF0C\u6700\u5C0F\u503C(minBy,maxBy)</h3><p>\u6839\u636E\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u627E\u51FA\u5BF9\u5E94\u7684\u96C6\u5408\u4E2D\u7684\u5143\u7D20</p><p>\u6570\u636E\u7C7B</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">data</span> <span class="token keyword">class</span> <span class="token function">People</span><span class="token punctuation">(</span><span class="token keyword">val</span> name<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;\u6D4B\u8BD5&quot;</span></span><span class="token punctuation">,</span> <span class="token keyword">val</span> age<span class="token operator">:</span> Double<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>    <span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u8D75&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u94B1&quot;</span></span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B59&quot;</span></span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u674E&quot;</span></span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">val</span> minByOrNull <span class="token operator">=</span> <span class="token keyword">data</span><span class="token punctuation">.</span><span class="token function">minByOrNull</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span>name <span class="token punctuation">}</span>
    <span class="token keyword">val</span> maxByOrNull <span class="token operator">=</span> <span class="token keyword">data</span><span class="token punctuation">.</span><span class="token function">maxByOrNull</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span>name <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>minByOrNull<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>maxByOrNull<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_2-\u6C42\u548C-sumof" tabindex="-1"><a class="header-anchor" href="#_2-\u6C42\u548C-sumof" aria-hidden="true">#</a> 2. \u6C42\u548C(sumof)</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>  <span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u8D75&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u94B1&quot;</span></span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B59&quot;</span></span><span class="token punctuation">,</span> <span class="token number">51.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u674E&quot;</span></span><span class="token punctuation">,</span> <span class="token number">54.0</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">val</span> minByOrNull <span class="token operator">=</span> <span class="token keyword">data</span><span class="token punctuation">.</span><span class="token function">sumOf</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span>age <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-\u8F6C\u6362\u96C6\u5408-map" tabindex="-1"><a class="header-anchor" href="#_3-\u8F6C\u6362\u96C6\u5408-map" aria-hidden="true">#</a> 3. \u8F6C\u6362\u96C6\u5408(map)</h2><p>\u6839\u636Elambda\u8868\u8FBE\u5F0F\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u7684\u96C6\u5408</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>    <span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u8D75&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u94B1&quot;</span></span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B59&quot;</span></span><span class="token punctuation">,</span> <span class="token number">51.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u674E&quot;</span></span><span class="token punctuation">,</span> <span class="token number">54.0</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">val</span> minByOrNull<span class="token operator">:</span>List<span class="token operator">&lt;</span>Double<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">data</span><span class="token punctuation">.</span><span class="token function">map</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span>age <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_4-fliter" tabindex="-1"><a class="header-anchor" href="#_4-fliter" aria-hidden="true">#</a> 4. fliter</h2><p>\u6839\u636E\u8868\u8FBE\u5F0F\u6761\u4EF6\u8F6C\u6362\u96C6\u5408</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>   <span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u8D75&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u94B1&quot;</span></span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B59&quot;</span></span><span class="token punctuation">,</span> <span class="token number">51.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u674E&quot;</span></span><span class="token punctuation">,</span> <span class="token number">54.0</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">val</span> minByOrNull<span class="token operator">:</span>List<span class="token operator">&lt;</span>Double<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">data</span><span class="token punctuation">.</span><span class="token function">map</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span>age <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">filter</span> <span class="token punctuation">{</span> it<span class="token operator">&lt;</span><span class="token number">10</span> <span class="token punctuation">}</span>
    minByOrNull<span class="token punctuation">.</span><span class="token function">forEach</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_5-\u5206\u7EC4-groupby" tabindex="-1"><a class="header-anchor" href="#_5-\u5206\u7EC4-groupby" aria-hidden="true">#</a> 5. \u5206\u7EC4(groupBy)</h2><p>\u6839\u636E\u5143\u7D20\u4E2D\u7684\u5C5E\u6027\u7684\u503C\u5206\u7EC4</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>    <span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u8D75&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u94B1&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B59&quot;</span></span><span class="token punctuation">,</span> <span class="token number">51.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u674E&quot;</span></span><span class="token punctuation">,</span> <span class="token number">54.0</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">val</span> minByOrNull<span class="token operator">:</span>Map<span class="token operator">&lt;</span>Double<span class="token punctuation">,</span>List<span class="token operator">&lt;</span>People<span class="token operator">&gt;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">data</span><span class="token punctuation">.</span><span class="token function">groupBy</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span>age <span class="token punctuation">}</span>
    minByOrNull<span class="token punctuation">.</span><span class="token function">forEach</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_6-fold" tabindex="-1"><a class="header-anchor" href="#_6-fold" aria-hidden="true">#</a> 6. fold</h2><p>\u6307\u5B9A\u4E00\u4E2A\u521D\u59CB\u503C\uFF0C\u8BA9\u96C6\u5408\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u5BF9\u5B83\u6267\u884C\u64CD\u4F5C\u3002</p><p>\u64CD\u4F5C\u7684\u53C2\u6570\u6709\u4E24\u4E2A\uFF0C\u7D2F\u8BA1\u503C\u548C\u96C6\u5408\u5143\u7D20\u3002</p><p>\u53EF\u4EE5\u505A\u9012\u589E\uFF0C\u9012\u51CF\uFF0C\u5B57\u7B26\u4E32\u8FDE\u63A5\uFF0C\u521D\u59CB\u503C\u51CF\u53BB\u5143\u7D20\u7684\u603B\u548C\u7B49\u3002</p><h3 id="_6-1-\u9012\u589E" tabindex="-1"><a class="header-anchor" href="#_6-1-\u9012\u589E" aria-hidden="true">#</a> 6.1 \u9012\u589E</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u8D75&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u94B1&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B59&quot;</span></span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u674E&quot;</span></span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">val</span> fold <span class="token operator">=</span> <span class="token keyword">data</span><span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> run<span class="token punctuation">,</span>item  <span class="token operator">-&gt;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>run<span class="token operator">+</span>item<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
        run<span class="token operator">+</span>item<span class="token punctuation">.</span>age
      <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>fold<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u6BCF\u6B21\u8F93\u5165\u7684\u503C\u90FD\u5728\u4F9D\u6B21\u6539\u53D8</p><h3 id="_6-2-\u5B57\u7B26\u4E32\u8FDE\u63A5-\u4F9D\u6B21\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_6-2-\u5B57\u7B26\u4E32\u8FDE\u63A5-\u4F9D\u6B21\u6267\u884C" aria-hidden="true">#</a> 6.2 \u5B57\u7B26\u4E32\u8FDE\u63A5-\u4F9D\u6B21\u6267\u884C</h3><h4 id="fold" tabindex="-1"><a class="header-anchor" href="#fold" aria-hidden="true">#</a> fold</h4><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u8D75&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u94B1&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B59&quot;</span></span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u674E&quot;</span></span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">val</span> fold <span class="token operator">=</span> <span class="token keyword">data</span><span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> run<span class="token punctuation">,</span>item  <span class="token operator">-&gt;</span>
        run<span class="token operator">+</span><span class="token string-literal singleline"><span class="token string">&quot;\u59D3\u6C0F\uFF1A&quot;</span></span><span class="token operator">+</span>item<span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string-literal singleline"><span class="token string">&quot; \u5E74\u9F84\uFF1A&quot;</span></span><span class="token operator">+</span>item<span class="token punctuation">.</span>age<span class="token operator">+</span><span class="token string-literal singleline"><span class="token string">&quot;\\n&quot;</span></span>
      <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>fold<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u4ECE\u53F3\u5411\u5DE6\u5C31\u662Ffoldright" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u53F3\u5411\u5DE6\u5C31\u662Ffoldright" aria-hidden="true">#</a> \u4ECE\u53F3\u5411\u5DE6\u5C31\u662FfoldRight</h3><h4 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> reduce</h4><p>reduce\u7528\u6CD5\u548Cfold\u7C7B\u4F3C\uFF0Creduce\u7B2C\u4E00\u6B65\u5C06\u7B2C\u4E00\u4E2A\u5143\u7D20\u548C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4F5C\u4E3A\u7B2C\u4E00\u6B65\u7684\u64CD\u4F5C\u53C2\u6570\u3002</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>   <span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u8D75&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u94B1&quot;</span></span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B59&quot;</span></span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">People</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u674E&quot;</span></span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">val</span> fold <span class="token operator">=</span> <span class="token keyword">data</span><span class="token punctuation">.</span><span class="token function">reduce</span> <span class="token punctuation">{</span>sum<span class="token punctuation">,</span> element <span class="token operator">-&gt;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">.</span>age<span class="token operator">+</span>element<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
        element
      <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>fold<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>10
56
105
People(name=\u674E, age=54)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>reduce\u53EA\u80FD\u8FD4\u56DE\u96C6\u5408\u7684\u5143\u7D20\u7684\u7C7B\u578B</p>`,38);function t(e,o){return p}var c=n(a,[["render",t]]);export{c as default};
