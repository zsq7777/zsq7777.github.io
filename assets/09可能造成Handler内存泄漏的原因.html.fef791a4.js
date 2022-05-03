import{_ as a,f as n}from"./app.5bafefdc.js";const s={},e=n(`<h1 id="_09-handler-\u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_09-handler-\u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0" aria-hidden="true">#</a> 09. handler \u5185\u5B58\u6CC4\u6F0F\u7684\u539F\u56E0</h1><h2 id="\u4EC0\u4E48\u662F\u5185\u5B58\u6CC4\u6F0F" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5185\u5B58\u6CC4\u6F0F" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5185\u5B58\u6CC4\u6F0F\uFF1F</h2><p>\u672C\u8BE5\u56DE\u6536\u7684\u5BF9\u8C61\uFF0C\u505C\u7559\u5728\u5185\u5B58\u4E2D\u6CA1\u88AB\u56DE\u6536\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u6CA1\u88AB\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6CA1\u88AB\u56DE\u6536" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6CA1\u88AB\u56DE\u6536\uFF1F</h2><p>\u6709\u6B63\u5728\u4F7F\u7528\u7684\u5BF9\u8C61\u6301\u6709\u4ED6\u7684\u5F15\u7528\uFF0C\u6240\u4EE5\u6CA1\u88AB\u56DE\u6536\u3002</p><h2 id="handler\u4E3A\u4EC0\u4E48\u4F1A\u6709\u8FD9\u79CD\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#handler\u4E3A\u4EC0\u4E48\u4F1A\u6709\u8FD9\u79CD\u60C5\u51B5" aria-hidden="true">#</a> Handler\u4E3A\u4EC0\u4E48\u4F1A\u6709\u8FD9\u79CD\u60C5\u51B5?</h2><ol><li>\u4F7F\u7528Handler\u975E\u9759\u6001\u5185\u90E8\u7C7B\uFF08\u533F\u540D\u5185\u90E8\u7C7B\u4E5F\u662F\uFF09\u521B\u5EFA\u7684\u5B9E\u4F8B\uFF0C\u5185\u90E8\u7C7B\u4F1A\u9690\u5F0F\u6301\u6709\u5916\u90E8\u7C7B\u7684\u5F15\u7528\uFF0C\u4E5F\u5C31\u662FHandler\u4F1A\u6301\u6709Activity\u7684\u5F15\u7528\u3002</li><li>\u5F53handler\u53D1\u9001Message\u6D88\u606F\u65F6\uFF0C\u6211\u4EEC\u77E5\u9053\uFF0CMessage\u4F1A\u6301\u6709Handler(target)\u5F15\u7528\uFF0CMessage\u6D88\u606F\u8FDB\u5165\u6D88\u606F\u961F\u5217\uFF0C\u961F\u5217\u91CC\u6CA1\u6709\u5C31\u52A0\u5230\u5934\u90E8\uFF0C\u6709\u5C31\u6839\u636E\u65F6\u95F4\u63D2\u5165\u3002 looper\u5FAA\u73AF\u4ECE\u961F\u5217\u91CC\u83B7\u53D6\u6D88\u606F\uFF0C\u5904\u7406\u5206\u53D1\u7684\u65F6\u5019\u4F1A\u505A\u963B\u585E\u64CD\u4F5C\uFF0C\u5982\u679C\u961F\u5217\u4E2D\u7684\u6D88\u606F\u672A\u5904\u7406\u5B8C\uFF0CActivity\u88AB\u5173\u95ED\uFF0CGC\u662F\u65E0\u6CD5\u56DE\u6536Activity\u7684\uFF0C\u4ECE\u800C\u9020\u6210\u5185\u5B58\u6CC4\u9732\u3002</li></ol><h2 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5</h2><ol><li>\u4F7F\u7528\u9759\u6001\u5185\u90E8\u7C7B\u6216\u5916\u90E8\u7C7B\uFF1A \u79FB\u9664\u4E86\u9690\u5F0F\u5F15\u7528\u3002\u5982\u9700\u6301\u6709\u5916\u90E8\u5BF9\u8C61\uFF0C\u5E94\u5C06handler\u6301\u6709\u7684\u5BF9\u8C61\u6539\u6210\u5F31\u5F15\u7528\uFF08WeakReference\uFF09\u3002</li></ol><blockquote><ul><li>\u5F31\u5F15\u7528\u7684\u5BF9\u8C61\u62E5\u6709\u77ED\u6682\u7684\u751F\u547D\u5468\u671F\uFF0C\u5728\u5783\u573E\u56DE\u6536\u5668\u7EBF\u7A0B\u626B\u63CF\u65F6\uFF0C\u4E00\u65E6\u53D1\u73B0\u4E86\u5177\u6709\u5F31\u5F15\u7528\u7684\u5BF9\u8C61\uFF0C\u4E0D\u7BA1\u5F53\u524D\u5185\u5B58\u7A7A\u95F4\u8DB3\u591F\u4E0E\u5426\uFF0C\u90FD\u4F1A\u56DE\u6536\u5B83\u7684\u5185\u5B58.</li><li>mHandler \u901A\u8FC7\u5F31\u5F15\u7528\u7684\u65B9\u5F0F\u6301\u6709Activity\uFF0C\u5F53GC \u6267\u884C\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u9047\u5230Activity\u5C31\u4F1A\u56DE\u6536\u5E76\u91CA\u653E\u6240\u5360\u636E\u7684\u5185\u5B58\u5355\u5143\u3002\u8FD9\u6837\u5C31\u4E0D\u4F1A\u53D1\u751F\u5185\u5B58\u6CC4\u9732\u4E86\u3002</li><li>GC\u5728\u56DE\u6536\u65F6\u4F1A\u5FFD\u7565\u6389\u5F31\u5F15\u7528\u5BF9\u8C61\uFF08\u5FFD\u7565\u6389\u8FD9\u79CD\u5F15\u7528\u5173\u7CFB\uFF09\uFF0C\u5373\uFF1A\u5C31\u7B97\u5F31\u5F15\u7528\u6307\u5411\u4E86\u67D0\u4E2A\u5BF9\u8C61\uFF0C\u4F46\u53EA\u8981\u8BE5\u5BF9\u8C61\u6CA1\u6709\u88AB\u5F3A\u5F15\u7528\u6307\u5411\uFF0C\u8BE5\u5BF9\u8C61\u4E5F\u4F1A\u88ABGC\u68C0\u67E5\u65F6\u56DE\u6536\u6389\u3002</li></ul></blockquote><p>\u5C31\u4F1A\u56DE\u6536\u5E76\u91CA\u653E\u6240\u5360\u636E\u7684\u5185\u5B58\u5355\u5143\u3002\u8FD9\u6837\u5C31\u4E0D\u4F1A\u53D1\u751F\u5185\u5B58\u6CC4\u9732\u4E86\u3002</p><ol start="2"><li>\u5916\u90E8\u7C7B\u751F\u547D\u5468\u671F\u7ED3\u675F\u65F6\uFF0C\u6E05\u7A7AHandler\u5185\u7684\u6D88\u606F\u3002 mHandler.removeCallbacksAndMessages(null);</li></ol><h2 id="\u5F3A-\u5F31-\u8F6F-\u865A\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F3A-\u5F31-\u8F6F-\u865A\u5F15\u7528" aria-hidden="true">#</a> \u5F3A/\u5F31/\u8F6F/\u865A\u5F15\u7528</h2><p>\u5F3A\u5F15\u7528\u5C31\u662F\u5BF9\u8C61\u88AB\u5F3A\u5F15\u7528\u540E\uFF0C\u65E0\u8BBA\u5982\u4F55\u90FD\u4E0D\u4F1A\u88AB\u56DE\u6536\u3002 \u5F31\u5F15\u7528\u5C31\u662F\u5728\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u5982\u679C\u8FD9\u4E2A\u5BF9\u8C61\u53EA\u88AB\u5F31\u5F15\u7528\u5173\u8054\uFF08\u6CA1\u6709\u4EFB\u4F55\u5F3A\u5F15\u7528\u5173\u8054\u4ED6\uFF09\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u4F1A\u88AB\u56DE\u6536\u3002 \u8F6F\u5F15\u7528\u5C31\u662F\u5728\u7CFB\u7EDF\u5C06\u53D1\u751F\u5185\u5B58\u6EA2\u51FA\u7684\u65F6\u5019\uFF0C\u56DE\u8FDB\u884C\u56DE\u6536\u3002 \u865A\u5F15\u7528\u662F\u5BF9\u8C61\u5B8C\u5168\u4E0D\u4F1A\u5BF9\u5176\u751F\u5B58\u65F6\u95F4\u6784\u6210\u5F71\u54CD\uFF0C\u4E5F\u65E0\u6CD5\u901A\u8FC7\u865A\u5F15\u7528\u6765\u83B7\u53D6\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u7528\u7684\u6BD4\u8F83\u5C11\u3002</p><p>\u5F15\u7528\u88AB\u5212\u4E3A4\u79CD\u7EA7\u522B\uFF0C\u5F3A\u5F15\u7528\uFF0C\u8F6F\u5F15\u7528\uFF0C\u5F31\u5F15\u7528\uFF0C\u865A\u5F15\u7528\u3002</p><ol><li>\u6211\u4EEC\u505A\u5E38\u7528\u7684\u5C31\u662F\u5F3A\u5F15\u7528</li><li>\u8F6F\u5F15\u7528\u5728\u5185\u5B58\u4E0D\u8DB3\u65F6\u56DE\u6536</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token class-name">SoftReference</span> softReference <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SoftReference</span><span class="token punctuation">(</span>\u5BF9\u8C61<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u5F31\u5F15\u7528\uFF1A\u5783\u573E\u56DE\u6536\u671F\u626B\u63CF\u65F6\uFF0C\u4E00\u65E6\u53D1\u73B0\u4E86\u5F31\u5F15\u7528\u5BF9\u8C61\uFF0C\u4E0D\u7BA1\u5185\u5B58\u662F\u5426\u8DB3\u591F\uFF0C\u90FD\u4F1A\u56DE\u6536\u3002</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> weakReference <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F31\u5F15\u7528\u8F6C\u5F3A\u5F15\u7528</span>
<span class="token class-name">String</span> strongReference <span class="token operator">=</span> weakReference<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="4"><li>\u865A\u5F15\u7528\uFF1A\u865A\u5F15\u7528\u4E3B\u8981\u7528\u6765\u8DDF\u8E2A\u5BF9\u8C61\u88AB\u5783\u573E\u56DE\u6536\u5668\u56DE\u6536\u7684\u6D3B\u52A8\u3002 \u53EF\u4EE5\u8DDF\u8E2A\u5BF9\u8C61\u662F\u5426\u88AB\u52A0\u5165\u5F15\u7528\u961F\u5217\u3002</li></ol>`,20);function t(l,p){return e}var r=a(s,[["render",t]]);export{r as default};
