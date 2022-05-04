import{_ as n,f as a}from"./app.7279925a.js";const s={},p=a(`<h1 id="_53-c-\u7684\u6A21\u677F-templates" tabindex="-1"><a class="header-anchor" href="#_53-c-\u7684\u6A21\u677F-templates" aria-hidden="true">#</a> 53. C++\u7684\u6A21\u677F(templates)</h1><p>\u7C7B\u4F3C\u4E8EJava\u7684\u6CDB\u578B\uFF0C\u4F46\u662F\u6BD4\u6CDB\u578B\u5F3A\u5927\u7684\u591A\u3002\u7C7B\u4F3C\u4E8E\u5B8F\uFF0C\u80FD\u505A\u5F88\u591A\u4E8B\u3002 \u7136\u800C\u6CDB\u578B\u53D7\u5236\u4E8E\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u4EE5\u53CA\u5176\u4ED6\u5F88\u591A\u56E0\u7D20\u3002</p><h2 id="_1-\u4EC0\u4E48\u662F\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u6A21\u677F" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u6A21\u677F</h2><p>\u6A21\u677F\u5141\u8BB8\u5B9A\u4E49\u4E00\u4E2A\u53EF\u4EE5\u6839\u636E\u7528\u9014\u8FDB\u884C\u7F16\u8BD1\u7684\u6A21\u677F\u3002 \u53EF\u4EE5\u8BA9\u7F16\u8BD1\u5668\u5199\u4EE3\u7801\uFF0C\u57FA\u4E8E\u4E00\u5957\u89C4\u5219\uFF0C\u6240\u8C13\u6A21\u677F\u5C31\u662F\u8BA9\u7F16\u8BD1\u5668\u57FA\u4E8E\u6211\u4EEC\u5199\u7684\u89C4\u5219\u5199\u4EE3\u7801\u3002</p><h3 id="_1-1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u793A\u4F8B" aria-hidden="true">#</a> 1.1 \u793A\u4F8B</h3><h4 id="_1-1-1-\u51FD\u6570\u91CD\u8F7D-\u5B9E\u73B0\u4E0D\u540C\u7684\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u51FD\u6570\u91CD\u8F7D-\u5B9E\u73B0\u4E0D\u540C\u7684\u8C03\u7528" aria-hidden="true">#</a> 1.1.1 \u51FD\u6570\u91CD\u8F7D\uFF0C\u5B9E\u73B0\u4E0D\u540C\u7684\u8C03\u7528</h4><p>\u5BF9\u4E00\u4E2A\u51FD\u6570\u8FDB\u884C\u91CD\u8F7D\uFF0C\u653E\u5165\u4E0D\u540C\u7C7B\u578B\u7684\u53C2\u6570\u3002</p><p>\u90A3\u4E48\uFF0C\u5982\u679C\u53EA\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E94\u8BE5\u600E\u4E48\u5B9E\u73B0\uFF1F</p><h4 id="_1-1-2-template" tabindex="-1"><a class="header-anchor" href="#_1-1-2-template" aria-hidden="true">#</a> 1.1.2 template</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

template<span class="token operator">&lt;</span>typename T<span class="token operator">&gt;</span> <span class="token comment">//\u6216\u8005 template&lt;class T&gt; \u540C\u4E49\u8BCD</span>
<span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span>T value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> value <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	print<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">print</span><span class="token punctuation">(</span><span class="token number">1.5f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u81EA\u52A8\u63A8\u5BFC\u51FAT\u4E3Afloat</span>
	<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>print\u51FD\u6570\uFF0C\u5E76\u4E0D\u662F\u771F\u7684\u51FD\u6570\uFF0C\u800C\u662F\u5728\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0C\u624D\u88AB\u4F5C\u4E3A\u6E90\u4EE3\u7801\u7F16\u8BD1\uFF0C\u624D\u88AB\u4F7F\u7528\u6211\u4EEC\u7ED9\u5B9A\u7684\u53C2\u6570\u521B\u5EFA\u3002</p><h5 id="\u4E3E\u4F8B\u8BC1\u660E" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4F8B\u8BC1\u660E" aria-hidden="true">#</a> \u4E3E\u4F8B\u8BC1\u660E</h5><p>\u53EA\u8981\u4E0D\u8C03\u7528\uFF0C\u7EB5\u7136\u51FD\u6570\u91CC\u4F7F\u7528\u4E0D\u5B58\u5728\u7684\u53D8\u91CF\u4E5F\u4E0D\u4F1A\u51FA\u73B0\u94FE\u63A5\u9519\u8BEF\u3002 \u56E0\u4E3A\u51FD\u6570\u672A\u88AB\u521B\u5EFA\u3002</p><p>\u5927\u91CFC++\u6807\u51C6\u6A21\u677F\u5E93\u4E5F\u540C\u6837\u4F7F\u7528\u6A21\u677F\u3002</p><h2 id="_2-\u7C7B\u4E0A\u4F7F\u7528template" tabindex="-1"><a class="header-anchor" href="#_2-\u7C7B\u4E0A\u4F7F\u7528template" aria-hidden="true">#</a> 2. \u7C7B\u4E0A\u4F7F\u7528template</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

template<span class="token operator">&lt;</span>typename T<span class="token punctuation">,</span><span class="token keyword">int</span> N<span class="token operator">&gt;</span>
class Array
<span class="token punctuation">{</span>

private<span class="token operator">:</span>
	T array<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
public<span class="token operator">:</span>
	T <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> N<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>



<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Array<span class="token operator">&lt;</span><span class="token keyword">float</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">&gt;</span> a<span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u8FD9\u6709\u70B9\u50CFC++\u7684\u5143\u7F16\u7A0B\uFF0C\u76F8\u6BD4\u4E8E\u5B9E\u9645\u7684\u7F16\u7A0B\uFF0C\u7F16\u8BD1\u5668\u5728\u7F16\u8BD1\u65F6\uFF0C\u5B9E\u9645\u5728\u8FDB\u884C\u7F16\u7A0B\u3002</p><h3 id="\u54EA\u91CC\u53EF\u4EE5\u7528\u6A21\u677F-\u54EA\u91CC\u4E0D\u8981\u7528" tabindex="-1"><a class="header-anchor" href="#\u54EA\u91CC\u53EF\u4EE5\u7528\u6A21\u677F-\u54EA\u91CC\u4E0D\u8981\u7528" aria-hidden="true">#</a> \u54EA\u91CC\u53EF\u4EE5\u7528\u6A21\u677F\uFF0C\u54EA\u91CC\u4E0D\u8981\u7528</h3><p>\u6709\u4E9B\u516C\u53F8\u5B8C\u5168\u4E0D\u4F7F\u7528\u6A21\u677F\uFF0C\u4F46\u662F\u5982log\u5C31\u5F88\u9002\u5408\u3002</p><p>\u6A21\u677F\u4E0D\u9002\u5408\u5F88\u590D\u6742\u7684\u573A\u666F\u3002\u4E0D\u8981\u521B\u5EFA\u5E9E\u5927\u7684\u6A21\u677F\u3002\u4F1A\u96BE\u4EE5\u7406\u89E3\u3002</p><p>\u65E5\u5FD7\u7CFB\u7EDF /\u6750\u8D28\u7CFB\u7EDF\u3002 \u6A21\u677F\u975E\u5E38\u6709\u7528\u3002</p>`,22);function e(t,c){return p}var l=n(s,[["render",e]]);export{l as default};
