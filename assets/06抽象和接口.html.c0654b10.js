import{_ as n,f as s}from"./app.1f76b4a4.js";const a={},p=s(`<h1 id="_06-\u62BD\u8C61\u548C\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_06-\u62BD\u8C61\u548C\u63A5\u53E3" aria-hidden="true">#</a> 06. \u62BD\u8C61\u548C\u63A5\u53E3</h1><h2 id="_1-\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#_1-\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> 1. \u62BD\u8C61\u7C7B</h2><p>\u62BD\u8C61\u7C7B\u7684\u542B\u4E49\u5C31\u662F\u6211\u4EEC\u65E0\u6CD5\u5177\u4F53\u63CF\u8FF0\u4E00\u4E2A\u7C7B\u7684\u5C5E\u6027\u4E0E\u884C\u4E3A\uFF0C\u53EA\u662F\u5927\u81F4\u77E5\u9053\u4ED6\u4F1A\u505A\u4EC0\u4E48\u3002</p><p>\u6211\u4EEC\u77E5\u9053\u52A8\u7269\uFF0C\u4F46\u662F\u4E0D\u77E5\u9053\u52A8\u7269\u5E94\u8BE5\u53EB\u4EC0\u4E48\uFF0C\u52A8\u7269\u7684\u5F53\u524D\u5E74\u9F84\uFF0C\u52A8\u7269\u65F6\u5982\u4F55\u53EB\u7684\u3002\u72AC\u79D1\u7684\u52A8\u7269\u53C8\u662F\u5982\u4F55\u568E\u53EB\u7684\u3002</p><p>\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u51C6\u786E\u7684\u77E5\u9053\u4E00\u5339\u72FC\u6216\u662F\u4E00\u53EA\u72D7\u662F\u600E\u4E48\u53EB\u7684\uFF0C\u5728\u4F7F\u7528\u65F6\uFF0C\u6211\u53EA\u9700\u8981\u8BA9\u52A8\u7269\u53EB\uFF0C\u800C\u65E0\u9700\u5173\u5FC3\u4ED6\u662F\u4EC0\u4E48\u52A8\u7269\u3002</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> Animal <span class="token punctuation">{</span>
    <span class="token keyword">open</span> <span class="token keyword">val</span> name<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span>
    <span class="token keyword">abstract</span> <span class="token keyword">val</span> age<span class="token operator">:</span> Int
    <span class="token keyword">abstract</span> <span class="token keyword">val</span> make<span class="token operator">:</span> String
    <span class="token keyword">abstract</span> <span class="token keyword">fun</span> <span class="token function">makeNoise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> Canine <span class="token operator">:</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> Wolf <span class="token operator">:</span> <span class="token function">Canine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;\u4E00\u5339\u5317\u65B9\u7684\u72FC&quot;</span></span>
    <span class="token keyword">override</span> <span class="token keyword">var</span> age<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">18</span>
    <span class="token keyword">override</span> <span class="token keyword">val</span> make<span class="token operator">:</span> String<span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot;\u55F7\u545C\u545C\u545C&quot;</span></span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">makeNoise</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u53D1\u51FA\u4E86--\u72EC\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5E05\u6C14\u7684&quot;</span></span> <span class="token operator">+</span> make <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u7684\u53EB\u58F0&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5E76\u4E14&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span>make <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u53C8\u53EB\u4E86\u4E00\u6B21&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u5C81\u4E86&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> Dog <span class="token operator">:</span> <span class="token function">Canine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;\u4E00\u53EA\u62C6\u5BB6\u7684\u54C8\u58EB\u5947&quot;</span></span>
    <span class="token keyword">override</span> <span class="token keyword">var</span> age<span class="token operator">:</span> Int <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">override</span> <span class="token keyword">val</span> make<span class="token operator">:</span> String<span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot;\u6C6A\u6C6A\u6C6A\u545C\u545C\u545C&quot;</span></span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">makeNoise</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u5E72\u4E86\u9519\u4E8B\uFF0C\u53EA\u4F1A&quot;</span></span> <span class="token operator">+</span> make <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u7684\u72D7\u53EB&quot;</span></span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">makeNoise</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Animal<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span>animal<span class="token punctuation">.</span><span class="token function">makeNoise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> wolf<span class="token operator">:</span> Animal <span class="token operator">=</span> <span class="token function">Wolf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> dog<span class="token operator">:</span>Animal<span class="token operator">=</span><span class="token function">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">makeNoise</span><span class="token punctuation">(</span>wolf<span class="token punctuation">)</span>
    <span class="token function">makeNoise</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="_2-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-\u63A5\u53E3" aria-hidden="true">#</a> 2. \u63A5\u53E3</h2><p>\u63A5\u53E3\u662F\u4E00\u4E2A\u7C7B\u7684\u9644\u52A0\u529F\u80FD\uFF0C\u5728\u9700\u8981\u589E\u52A0\u67D0\u79CD\u80FD\u529B\u65F6\uFF0C\u6216\u662F\u6211\u9700\u8981\u67D0\u5199\u7C7B\u6709\u5171\u540C\u7684\u80FD\u529B\uFF0C\u8FD9\u65F6\u4F7F\u7528\u63A5\u53E3\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u52A8\u7269\u7684\u5B50\u7C7B\u9A6C\uFF0C\u9A6C\u53C8\u53EF\u4EE5\u4F5C\u4E3A\u4EA4\u901A\u5DE5\u5177\uFF0C\u4F5C\u4E3A\u4EA4\u901A\u5DE5\u5177\u5C31\u662F\u4ED6\u7684\u4E00\u79CD\u80FD\u529B\u3002 \u6C7D\u8F66\u4E5F\u662F\u4EA4\u901A\u5DE5\u5177\uFF0C\u4F46\u662F\u6C7D\u8F66\u7EDD\u4E0D\u662F\u52A8\u7269.</p><p>\u6240\u4EE5\uFF0C\u4EA4\u901A\u5DE5\u5177\u662F\u4E00\u79CD\u9644\u52A0\u80FD\u529B\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u63A5\u53E3\u8D4B\u4E88\u9A6C\u6216\u8005\u9A86\u9A7C\u3002</p><p>\u5982\u4E0B\u6240\u793A\uFF1A</p><p>\u53EA\u662F\u4F5C\u4E3A\u52A8\u7269\u65F6\uFF0C\u9A6C\u65E0\u6CD5\u88AB\u4F5C\u4E3A\u4EA4\u901A\u5DE5\u5177\u9A7E\u9A76\u3002 \u4F5C\u4E3A\u4EA4\u901A\u5DE5\u5177\u65F6\uFF0C\u4ED6\u4E5F\u4E0D\u518D\u62E5\u6709\u52A8\u7269\u7684\u80FD\u529B\u3002</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token comment">//\u4EA4\u901A\u5DE5\u5177</span>
<span class="token keyword">interface</span> Transportation<span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u52A8\u7269</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> Animal <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">//\u9A6C</span>
<span class="token keyword">class</span> Horse<span class="token operator">:</span><span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>Transportation<span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u88AB\u4EBA\u9A91\u7740\u8DD1&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token comment">//\u6C7D\u8F66</span>
 <span class="token keyword">class</span> Car<span class="token operator">:</span>Transportation <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u53D1\u52A8\u673A\u9A71\u52A8\u884C\u9A76&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">val</span> horse<span class="token operator">:</span>Animal<span class="token operator">=</span><span class="token function">Horse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>horse <span class="token keyword">is</span> Transportation<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">val</span> horseMount<span class="token operator">:</span>Transportation<span class="token operator">=</span>horse
        horseMount<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="_3-\u62BD\u8C61\u7C7B-\u63A5\u53E3\u7684\u601D\u8003\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_3-\u62BD\u8C61\u7C7B-\u63A5\u53E3\u7684\u601D\u8003\u603B\u7ED3" aria-hidden="true">#</a> 3. \u62BD\u8C61\u7C7B/\u63A5\u53E3\u7684\u601D\u8003\u603B\u7ED3</h2><p>\u62BD\u8C61\u7C7B\u662F\u6A21\u677F\uFF0C\u4ED6\u62E5\u6709\u57FA\u7840\u7684\u80FD\u529B\uFF0C\u4F46\u662F\u53C8\u65E0\u6CD5\u5B8C\u5168\u81EA\u6211\u63CF\u8FF0\u3002 \u4ED6\u9700\u8981\u5B50\u7C7B\u53BB\u5B8C\u5584\u5B83\uFF0C\u8BA9\u4ED6\u53D8\u5F97\u5B8C\u6574\u3002</p><p>\u63A5\u53E3\u662F\u4E00\u79CD\u9644\u52A0\u80FD\u529B\uFF0C\u6216\u662F\u9700\u8981\u4E00\u4E9B\u7C7B\u6709\u516C\u5171\u884C\u4E3A\u3002</p><h2 id="_4-\u7C7B-\u5B50\u7C7B-\u62BD\u8C61\u7C7B-\u63A5\u53E3\u7684\u521B\u5EFA\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_4-\u7C7B-\u5B50\u7C7B-\u62BD\u8C61\u7C7B-\u63A5\u53E3\u7684\u521B\u5EFA\u89C4\u5219" aria-hidden="true">#</a> 4. \u7C7B\uFF0C\u5B50\u7C7B\uFF0C\u62BD\u8C61\u7C7B\uFF0C\u63A5\u53E3\u7684\u521B\u5EFA\u89C4\u5219</h2><ol><li><p>\u901A\u8FC7IS-A\u6D4B\u8BD5\u624D\u53EF\u4EE5\u521B\u5EFA\u5B50\u7C7B\u3002</p></li><li><p>\u5982\u679C\u9700\u8981\u67D0\u4E2A\u7C7B\u66F4\u5177\u4F53\u7684\u7248\u672C\uFF0C\u5E76\u4E14\u8986\u76D6\u6216\u589E\u52A0\u65B0\u7684\u884C\u4E3A\uFF0C\u90A3\u4E48\u521B\u5EFA\u4E00\u4E2A\u5B50\u7C7B\u3002</p></li><li><p>\u9700\u8981\u4E3A\u5B50\u7C7B\u5B9A\u4E49\u4E00\u4E2A\u6A21\u677F\uFF0C\u786E\u4FDD\u65E0\u6CD5\u521B\u5EFA\u8BE5\u7C7B\u7684\u5BF9\u8C61\uFF0C\u4F7F\u7528\u62BD\u8C61\u7C7B\u3002</p></li><li><p>\u5B9A\u4E49\u5171\u540C\u7684\u884C\u4E3A\uFF0C\u6216\u662F\u9700\u8981\u67D0\u4E2A\u7C7B\u6709\u989D\u5916\u7684\u529F\u80FD,\u4F7F\u7528\u63A5\u53E3\u3002</p></li></ol>`,18);function e(t,o){return p}var c=n(a,[["render",e]]);export{c as default};
