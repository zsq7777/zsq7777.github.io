import{_ as n,f as s}from"./app.28a0acac.js";const a={},p=s(`<h1 id="_54-c-\u7684\u5806\u4E8E\u6808\u5185\u5B58\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_54-c-\u7684\u5806\u4E8E\u6808\u5185\u5B58\u6BD4\u8F83" aria-hidden="true">#</a> 54. C++\u7684\u5806\u4E8E\u6808\u5185\u5B58\u6BD4\u8F83</h1><p>\u6808\u548C\u5806\u65F6RAM\u4E2D\u5B9E\u9645\u5B58\u5728\u7684\u4E24\u4E2A\u533A\u57DF\u3002</p><ul><li><p>\u6808\u901A\u5E38\u662F\u4E00\u4E2A\u9884\u5B9A\u4E49\u5927\u5C0F\u7684\u5185\u5B58\u533A\u57DF\uFF0C\u7EA6\u4E3A2M\u5B57\u8282\u5DE6\u53F3\u3002</p></li><li><p>\u5806\u4E5F\u662F\u9884\u5B9A\u4E86\u9ED8\u8BA4\u503C\u7684\u533A\u57DF\uFF0C\u4F46\u662F\u5B83\u53EF\u4EE5\u6210\u957F\uFF0C\u5E76\u968F\u7740\u5E94\u7528\u7A0B\u5E8F\u7684\u8FDB\u884C\u800C\u6539\u53D8\u3002</p></li></ul><p>\u6808\u548C\u5806\u7684\u7269\u7406\u4F4D\u7F6E\uFF0C\u5728RAM\u4E2D\u662F\u4E00\u6837\u7684\u3002</p><p>\u6808\u6D3B\u8DC3\u5728\u7F13\u5B58\u4E2D\uFF0C\u5B83\u9891\u7E41\u8BBF\u95EE\uFF0C\u4F46\u662F\u5E76\u4E0D\u662F\u5728\u6240\u6709\u7684\u6808\u5185\u5B58\u90FD\u5728\u7F13\u5B58\u4E2D\u3002</p><p>\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u5730\u65B9\u6765\u5B58\u50A8\u8FD0\u884C\u7A0B\u5E8F\u6240\u9700\u7684\u6570\u636E\uFF0C\u4E0D\u7BA1\u662F\u5C40\u90E8\u53D8\u91CF\u8FD8\u662F\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u3002</p><p>\u4ED6\u4EEC\u7684\u5DE5\u4F5C\u539F\u7406\u4E0D\u540C\uFF0C\u4F46\u662F\u505A\u7684\u4E8B\u60C5\u662F\u4E00\u6837\u7684\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u4ECE\u6808\u6216\u8005\u5806\u4E2D\u7533\u8BF7\u4E00\u90E8\u5206\u5185\u5B58\uFF0C\u5B83\u4F1A\u7ED9\u6211\u8981\u6C42\u5927\u5C0F\u7684\u5185\u5B58\u5757\u3002</p><h2 id="\u4ED6\u4EEC\u662F\u5982\u4F55\u627E\u5230\u5185\u5B58\u5757\u7684" tabindex="-1"><a class="header-anchor" href="#\u4ED6\u4EEC\u662F\u5982\u4F55\u627E\u5230\u5185\u5B58\u5757\u7684" aria-hidden="true">#</a> \u4ED6\u4EEC\u662F\u5982\u4F55\u627E\u5230\u5185\u5B58\u5757\u7684</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>


<span class="token keyword">struct</span> <span class="token class-name">Vector3</span>
<span class="token punctuation">{</span>
	<span class="token keyword">float</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">;</span>

	<span class="token function">Vector3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">x</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">y</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">z</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	array<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	array<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
	array<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	
	Vector3<span class="token operator">*</span> vector <span class="token operator">=</span> new <span class="token function">Vector3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>b8 <span class="token number">92</span> b5 <span class="token number">00</span> cc cc cc cc cc cc cc cc <span class="token number">01</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">02</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">03</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">04</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">05</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span> cc cc cc  <span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token punctuation">.</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">?</span><span class="token operator">?</span><span class="token operator">?</span>
<span class="token number">0x006FF8AF</span>  cc cc cc cc cc <span class="token number">05</span> <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4ECE\u5185\u5B58\u4E2D\u6211\u4EEC\u53EF\u4EE5\u89C2\u5BDF\u5230,\u6808\u5185\u5B58\u548C\u5806\u5185\u5B58\u975E\u5E38\u63A5\u8FD1\u3002</p><h3 id="\u5728\u6808\u4E2D\u5206\u914D\u5185\u5B58\u5757" tabindex="-1"><a class="header-anchor" href="#\u5728\u6808\u4E2D\u5206\u914D\u5185\u5B58\u5757" aria-hidden="true">#</a> \u5728\u6808\u4E2D\u5206\u914D\u5185\u5B58\u5757</h3><p>\u5728\u6808\u4E2D\u5206\u914D\u53D8\u91CF\u65F6\uFF0C\u6808\u9876\u90E8\u6307\u9488\u5C31\u79FB\u52A8\u8FD9\u4E48\u591A\u5B57\u8282\uFF0C\u4E00\u4E2Aint 4\u4E2A\u5B57\u8282\uFF0C\u5C31\u79FB\u52A84\u4E2A\u5B57\u8282\uFF0C\u5982\u679C\u662F\u4E2A\u957F\u5EA6\u4E3A5\u7684\u6570\u7EC4\uFF0C\u5C31\u662F4*5\u4E2A\u5B57\u8282\u3002</p><p>\u53EA\u662F\u79FB\u52A8\u6808\u6307\u9488\uFF0C\u5185\u5B58\u5B9E\u9645\u4E0A\u662F\u4E92\u76F8\u53E0\u52A0\u5B58\u50A8\u7684\uFF0C\u5C31\u50CF\u4E00\u4E2A\u6808\uFF0C\u5C31\u50CF\u4E0A\u9762\u6240\u793A\u3002\u6808\u53EA\u662F\u4E0D\u505C\u7684\u5C06\u5185\u5B58\u5806\u4E0A\u53BB\uFF0C\u6240\u4EE5\u5206\u914D\u7684\u90A3\u4E48\u5FEB\u3002CUP\u6307\u4EE4\u6240\u4F5C\u7684\u5C31\u662F\u79FB\u52A8\u6808\u6307\u9488\uFF0C\u7136\u540E\u8FD4\u56DE\u6808\u6307\u9488\u5730\u5740\u3002</p><p>\u5728<strong>\u4F5C\u7528\u57DF</strong>\u7ED3\u675F\u4E4B\u540E\uFF0C\u4F5C\u7528\u57DF\u5185\u7684\u6808\u5185\u5B58\u4ECE\u6808\u4E2D\u88AB\u5F39\u51FA\u88AB\u56DE\u6536\uFF0C\u6808\u79FB\u52A8\u5230\u8FDB\u5165\u8FD9\u4E2A\u4F5C\u7528\u57DF\u4E4B\u524D\u7684\u4F4D\u7F6E\u3002 <strong>\u6808\u7684\u91CA\u653E\u548C\u5206\u914D\u4E00\u6837\uFF0C\u6CA1\u6709\u4EFB\u4F55\u5185\u5B58\u5F00\u9500\u3002</strong> \u4E0D\u9700\u8981\u8FD4\u56DE\u6307\u9488\uFF0C\u53EA\u9700\u8981\u5C06\u6808\u4E2D\u7684\u4E1C\u897F\u5F39\u51FA\uFF0C\u81EA\u7136\u5C31\u8FD4\u56DE\u5230\u4E86\u4F5C\u7528\u57DF\u4E4B\u524D\u3002\u4E00\u6761\u5220\u9664\u6307\u4EE4\u5C31\u53EF\u4EE5\u91CA\u653E\u6240\u6709\u4E1C\u897F\u3002</p><h3 id="\u5728\u5806\u4E2D\u5206\u914D\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5728\u5806\u4E2D\u5206\u914D\u5185\u5B58" aria-hidden="true">#</a> \u5728\u5806\u4E2D\u5206\u914D\u5185\u5B58</h3><ul><li><p>new\u5B9E\u9645\u8C03\u7528\u4E86malloc\u51FD\u6570\uFF0C\u8FD9\u6837\u901A\u5E38\u4F1A\u8C03\u7528\u5E95\u5C42\u64CD\u4F5C\u7CFB\u7EDF\u7279\u5B9A\u51FD\u6570\u3002\u7A0B\u5E8F\u542F\u52A8\u65F6\u4F1A\u5F97\u5230\u4E00\u5B9A\u6570\u91CF\u7684\u7269\u7406RAM\uFF0C\u7A0B\u5E8F\u4F1A\u7EF4\u62A4\u4E00\u4E2A\u7A7A\u95F2\u5217\u8868(free list)\uFF0C\u4ED6\u8DDF\u8E2A\u54EA\u4E9B\u5185\u5B58\u5757\u662F\u7A7A\u95F2\u7684\uFF0C\u8FD8\u6709\u4ED6\u4EEC\u5728\u90A3\u3002\u5728\u9700\u8981\u5206\u914D\u7684\u65F6\u5019\uFF0C\u4ED6\u4F1A\u6D4F\u89C8\u7A7A\u95F2\u5217\u8868\uFF0C\u627E\u5230\u4E00\u5757\u548C\u4F60\u9700\u8981\u7684\u5185\u5B58\u5927\u5C0F\u4E00\u6837\u7684\u7A7A\u95F2\u5185\u5B58\uFF0C\u7ED9\u4F60\u4E00\u4E2A\u5B83\u7684\u6307\u9488\u3002\u8FD8\u9700\u8981\u8BB0\u5F55\u5927\u5C0F\uFF0C\u88AB\u5206\u914D\u7684\u60C5\u51B5\u7B49\u7B49\u3002</p></li><li><p>\u5982\u679C\u7533\u8BF7\u7684\u5185\u5B58\u8D85\u51FA\u4E86\u7CFB\u7EDF\u7684\u5206\u914D\u7684\u5185\u5B58\uFF0C\u8FD9\u79CD\u6F5C\u5728\u6210\u672C\u662F\u5DE8\u5927\u7684\uFF08\u5185\u5B58\u6EA2\u51FA\uFF09\u3002</p></li></ul><h2 id="\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD" aria-hidden="true">#</a> \u6027\u80FD</h2><h3 id="\u5206\u914D" tabindex="-1"><a class="header-anchor" href="#\u5206\u914D" aria-hidden="true">#</a> \u5206\u914D</h3><ul><li><p>\u5728\u6808\u4E2D\u5206\u914D\u5185\u5B58\uFF0C\u662F\u64CD\u4F5CCPU\u6307\u4EE4\uFF0C\u79FB\u52A8\u6307\u9488\uFF0C\u5F39\u51FA/\u5220\u9664\u6808\u79CD\u7684\u5185\u5BB9\u3002</p></li><li><p>\u800C\u5728\u5806\u4E2D\u5206\u914D\u5185\u5B58\uFF0C\u662F\u4E00\u5BF9\u4E8B\u60C5\uFF0C\u548Cmalloc\u7684\u5B9E\u73B0\u6709\u5173\uFF0C</p></li></ul><h3 id="cpu\u7F13\u5B58\u7EBF" tabindex="-1"><a class="header-anchor" href="#cpu\u7F13\u5B58\u7EBF" aria-hidden="true">#</a> CPU\u7F13\u5B58\u7EBF</h3><ul><li><p>\u6808\u7684\u5185\u5B58\u5206\u914D\u5F88\u8FD1\uFF0C\u56E0\u6B64\u4ED6\u4EEC\u53EF\u4EE5\u653E\u5728CPU\u7F13\u5B58\u7EBF\u4E0A</p></li><li><p>\u5806\u53EF\u80FD\u4F1A\u662F\u4E00\u4E9Bcache miss \uFF08CPU\u8981\u8BBF\u95EE\u7684\u6570\u636E\u5728Cache\u79CD\uFF0C\u6709\u88AB\u79F0\u4E3Ahit,\u65E0\u88AB\u79F0\u4E4BMiss\uFF09</p></li></ul><h2 id="\u5982\u4F55\u6700\u5C0F\u5316\u5206\u914D\u5F00\u9500" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u6700\u5C0F\u5316\u5206\u914D\u5F00\u9500" aria-hidden="true">#</a> \u5982\u4F55\u6700\u5C0F\u5316\u5206\u914D\u5F00\u9500\uFF1F</h2><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4ED6\u4EEC\u6700\u5927\u7684\u533A\u522B\u5728\u4E8E\u5BF9\u4E8E\u5185\u5B58\u7684\u5206\u914D\u65B9\u5F0F\u3002\u6808\u7684\u5206\u914D\u6BD4\u5806\u7684\u5206\u914D\u66F4\u52A0\u9AD8\u6548\u3002\u6808\u53EA\u9700\u8981\u64CD\u4F5CCPU\u6307\u4EE4\uFF0C\u800C\u5806\u8981\u7EF4\u62A4\u7A7A\u95F2\u5217\u8868\u7B49\u4E00\u7CFB\u5217\u64CD\u4F5C\uFF0C\u5E76\u4E14\u5BF9\u4E8ECPU\u7F13\u5B58\u7EBF\u7684\u4F7F\u7528\u4E5F\u4E0D\u540C\u3002</p>`,26);function e(t,c){return p}var l=n(a,[["render",e]]);export{l as default};
