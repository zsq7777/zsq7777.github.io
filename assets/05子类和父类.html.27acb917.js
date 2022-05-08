import{_ as n,f as s}from"./app.e0697572.js";const a={},p=s(`<h1 id="_05-\u5B50\u7C7B\u548C\u7236\u7C7B" tabindex="-1"><a class="header-anchor" href="#_05-\u5B50\u7C7B\u548C\u7236\u7C7B" aria-hidden="true">#</a> 05. \u5B50\u7C7B\u548C\u7236\u7C7B</h1><p>\u5B50\u7C7B\u4E0E\u7236\u7C7B\u7684\u5173\u7CFB\u662F\uFF0CIS-A\u3002 \u72FC\u662F\u4E00\u4E2A\u52A8\u7269\uFF0C\u8FD9\u662FIS-A \uFF0C\u72FC\u662F\u5B50\u7C7B\uFF0C\u52A8\u7269\u662F\u7236\u7C7B\u3002</p><h2 id="_1-\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_1-\u7EE7\u627F" aria-hidden="true">#</a> 1. \u7EE7\u627F</h2><p>\u7EE7\u627F\u662F\u4E00\u79CD\u8868\u793A\u7C7B\u4E0E\u7C7B\u5173\u8054\u5173\u7CFB\u7684\u65B9\u5F0F\uFF0C\u4F7F\u7528\u7EE7\u627F\u8981\u4FDD\u8BC1IS-A\u5173\u7CFB\u3002</p><p>\u5982\u4E0B\u4EE3\u7801\u6240\u793A\uFF1A</p><p>\u52A8\u7269\u662F\u72AC\u79D1\u7236\u7C7B\uFF0C\u72AC\u79D1\u662F\u72FC\u7684\u7236\u7C7B\uFF0C\u5B50\u7C7B\u62E5\u6709\u7236\u7C7B\u7684\u7279\u6027(\u5C5E\u6027)\u548C\u884C\u4E3A(\u65B9\u6CD5)</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Animal <span class="token punctuation">{</span>
    <span class="token keyword">open</span> <span class="token keyword">var</span> name<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;\u6CA1\u6709\u540D\u5B57\u7684\u52A8\u7269&quot;</span></span>
    <span class="token keyword">open</span> <span class="token keyword">fun</span> <span class="token function">makeNoise</span><span class="token punctuation">(</span>make<span class="token operator">:</span>String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>name<span class="token operator">+</span><span class="token string-literal singleline"><span class="token string">&quot;\u53D1\u51FA\u4E86&quot;</span></span><span class="token operator">+</span>make<span class="token operator">+</span><span class="token string-literal singleline"><span class="token string">&quot;\u7684\u53EB\u58F0&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">open</span> <span class="token keyword">class</span> Canine <span class="token operator">:</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> Wolf <span class="token operator">:</span> <span class="token function">Canine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> wolf<span class="token operator">:</span> Animal <span class="token operator">=</span> <span class="token function">Wolf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wolf<span class="token punctuation">.</span><span class="token function">makeNoise</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u55F7\u55F7\u55F7\u55F7\u545C~&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_2-\u8986\u5199-\u590D\u5199-\u8986\u76D6" tabindex="-1"><a class="header-anchor" href="#_2-\u8986\u5199-\u590D\u5199-\u8986\u76D6" aria-hidden="true">#</a> 2. \u8986\u5199/\u590D\u5199/\u8986\u76D6</h2><p>\u5728\u4E2D\u6587\u8BED\u4E49\u4E0B\uFF0Coverride\u88AB\u7406\u89E3\u4E3A\u8986\u76D6\u5728kotlin\u4E2D\u66F4\u4E3A\u51C6\u786E</p><h3 id="_2-1-\u8986\u76D6\u7236\u7C7B\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8986\u76D6\u7236\u7C7B\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5" aria-hidden="true">#</a> 2.1 \u8986\u76D6\u7236\u7C7B\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5</h3><p>\u72FC\u7C7B\u9700\u8981\u81EA\u5DF1\u7684\u540D\u5B57\u548C\u66F4\u52A0\u5E05\u6C14\u7684\u568E\u53EB</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Animal <span class="token punctuation">{</span>
    <span class="token keyword">open</span> <span class="token keyword">var</span> name<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span>
    <span class="token keyword">open</span> <span class="token keyword">fun</span> <span class="token function">makeNoise</span><span class="token punctuation">(</span>make<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u53D1\u51FA\u4E86&quot;</span></span> <span class="token operator">+</span> make <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u7684\u53EB\u58F0&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">open</span> <span class="token keyword">class</span> Canine <span class="token operator">:</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> Wolf <span class="token operator">:</span> <span class="token function">Canine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;\u4E00\u5339\u5317\u65B9\u7684\u72FC&quot;</span></span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">makeNoise</span><span class="token punctuation">(</span>make<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u53D1\u51FA\u4E86--\u72EC\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5E05\u6C14\u7684&quot;</span></span> <span class="token operator">+</span> make <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u7684\u53EB\u58F0&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5E76\u4E14&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span>make<span class="token operator">+</span><span class="token string-literal singleline"><span class="token string">&quot;\u53C8\u53EB\u4E86\u4E00\u6B21&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> wolf<span class="token operator">:</span> Animal <span class="token operator">=</span> <span class="token function">Wolf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wolf<span class="token punctuation">.</span><span class="token function">makeNoise</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u55F7\u55F7\u55F7\u55F7\u545C~&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u4F7F\u7528override\u5173\u952E\u5B57\uFF0C \u8986\u5199\u7684\u65B9\u6CD5\u6309\u7167\u7531\u4E0B\u5411\u4E0A\u67E5\u627E\u3002</p><h3 id="_2-2-\u4E0D\u5141\u8BB8\u88AB\u8986\u76D6" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E0D\u5141\u8BB8\u88AB\u8986\u76D6" aria-hidden="true">#</a> 2.2 \u4E0D\u5141\u8BB8\u88AB\u8986\u76D6</h3><p>\u5F53\u7236\u7C7B\u88AB\u4FEE\u9970final\u65F6\uFF0C\u4EE3\u8868\u7740\u5B83\u4E0D\u53EF\u88AB\u8986\u76D6</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">open</span> <span class="token keyword">class</span> Canine <span class="token operator">:</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">override</span> <span class="token keyword">var</span> name<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;\u72AC\u79D1&quot;</span></span>
    <span class="token keyword">final</span> <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">makeNoise</span><span class="token punctuation">(</span>make<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u72AC\u79D1&quot;</span></span> <span class="token operator">+</span> make <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u7684\u53EB\u58F0&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> Wolf <span class="token operator">:</span> <span class="token function">Canine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;\u4E00\u5339\u5317\u65B9\u7684\u72FC&quot;</span></span>  <span class="token comment">//\u63D0\u793A\u9519\u8BEF</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">makeNoise</span><span class="token punctuation">(</span>make<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u63D0\u793A\u9519\u8BEF</span>
        <span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u53D1\u51FA\u4E86--\u72EC\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5E05\u6C14\u7684&quot;</span></span> <span class="token operator">+</span> make <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u7684\u53EB\u58F0&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5E76\u4E14&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span>make <span class="token operator">+</span> <span class="token string-literal singleline"><span class="token string">&quot;\u53C8\u53EB\u4E86\u4E00\u6B21&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_2-3-\u7236\u7C7B\u7684val\u53D8\u91CF\u53EF\u4EE5\u88AB\u8986\u76D6\u4E3Avar" tabindex="-1"><a class="header-anchor" href="#_2-3-\u7236\u7C7B\u7684val\u53D8\u91CF\u53EF\u4EE5\u88AB\u8986\u76D6\u4E3Avar" aria-hidden="true">#</a> 2.3 \u7236\u7C7B\u7684val\u53D8\u91CF\u53EF\u4EE5\u88AB\u8986\u76D6\u4E3Avar</h3><p>\u5F53val\u5411var\u8F6C\u6362\u65F6\uFF0C\u589E\u52A0\u4E86set\u65B9\u6CD5\u3002</p><p>\u7236\u7C7B\u7684var\u5982\u679C\u88AB\u5B50\u7C7B\u8986\u76D6\u4E3Aval\u90A3\u4E48\u8FD9\u662F\u4E0D\u5408\u7406\u7684\uFF0C\u8FD9\u76F8\u5F53\u4E8E\u544A\u8BC9\u7F16\u8BD1\u5668\uFF0C\u53BB\u6389set\u65B9\u6CD5\uFF0C\u8FD9\u7834\u574F\u4E86\u5B50\u7C7B\u4E0E\u7236\u7C7B\u7684\u516C\u5171\u5173\u7CFB\u3002</p><p>\u7B80\u5355\u7406\u89E3\uFF0C\u4E00\u5F20\u5C0F\u7684\u7EB8\u662F\u65E0\u6CD5\u5B8C\u5168\u8986\u76D6\u4E00\u5F20\u6BD4\u5B83\u5927\u7684\u7EB8\u7684\u3002</p><p>\u95EE\uFF1A\u5982\u679C\u5B50\u7C7B\u53EF\u4EE5\u5C06var\u8986\u76D6\u4E3Aval\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</p><p>\u7B54\uFF1A\u53EF\u4EE5\u60F3\u8C61\uFF0C\u5F53\u5B50\u7C7B\u5BF9\u8C61\u6307\u5411\u7236\u7C7B\u65F6\uFF0C\u7236\u7C7B\u8C03\u7528set\u65B9\u6CD5\uFF0C\u4F46\u662F\u5B50\u7C7B\u4E2D\u5E76\u4E0D\u5B58\u5728\uFF0C\u8FD9\u5C31\u4F1A\u53D1\u751F\u9519\u8BEF\u3002</p>`,22);function e(t,o){return p}var c=n(a,[["render",e]]);export{c as default};
