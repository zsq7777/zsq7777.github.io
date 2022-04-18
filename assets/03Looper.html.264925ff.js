import{_ as n,f as a}from"./app.134359ce.js";const s={},e=a(`<h1 id="_03-looper\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_03-looper\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> 03. Looper\u6E90\u7801\u5206\u6790</h1><h2 id="looper\u7C7B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#looper\u7C7B\u8BF4\u660E" aria-hidden="true">#</a> Looper\u7C7B\u8BF4\u660E</h2><p>\u7528\u4E8E\u4E3A\u7EBF\u7A0B\u8FD0\u884C\u6D88\u606F\u5FAA\u73AF\u7684\u7C7B\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7EBF\u7A0B\u6CA1\u6709\u4E0E\u4E4B\u5173\u8054\u7684\u6D88\u606F\u5FAA\u73AF\uFF1B \u8981\u521B\u5EFA\u4E00\u4E2A\uFF0C\u8BF7\u5728\u8981\u8FD0\u884C\u5FAA\u73AF\u7684\u7EBF\u7A0B\u4E2D\u8C03\u7528 {@link #prepare}\uFF0C\u7136\u540E {@link #loop} \u8BA9\u5B83\u5904\u7406\u6D88\u606F\uFF0C\u76F4\u5230\u5FAA\u73AF\u505C\u6B62\u3002 <code>&lt;p&gt;</code>\u4E0E\u6D88\u606F\u5FAA\u73AF\u7684\u5927\u591A\u6570\u4EA4\u4E92\u662F\u901A\u8FC7 {@link Handler} \u7C7B\u8FDB\u884C\u7684\u3002 <code>&lt;p&gt;</code>\u8FD9\u662F\u4E00\u4E2ALooper\u7EBF\u7A0B\u5B9E\u73B0\u7684\u5178\u578B\u4F8B\u5B50\uFF0C\u5229\u7528{@link #prepare}\u548C{@link #loop}\u7684\u5206\u79BB\u6765\u521B\u5EFA\u4E00\u4E2A\u521D\u59CB\u7684Handler\u6765\u4E0ELooper\u8FDB\u884C\u901A\u4FE1\u3002</p><h2 id="api-\u5B9E\u73B0\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#api-\u5B9E\u73B0\u8BF4\u660E" aria-hidden="true">#</a> API \u5B9E\u73B0\u8BF4\u660E</h2><p>\u6B64\u7C7B\u5305\u542B\u8BBE\u7F6E\u548C\u7BA1\u7406\u57FA\u4E8E MessageQueue \u7684\u4E8B\u4EF6\u5FAA\u73AF\u6240\u9700\u7684\u4EE3\u7801\u3002 \u5F71\u54CD\u961F\u5217\u72B6\u6001\u7684 API \u5E94\u8BE5\u5728 MessageQueue \u6216 Handler \u4E0A\u5B9A\u4E49\uFF0C\u800C\u4E0D\u662F\u5728 Looper \u672C\u8EAB\u4E0A\u5B9A\u4E49\u3002 \u4F8B\u5982\uFF0C\u7A7A\u95F2\u5904\u7406\u7A0B\u5E8F\u7EBF\u7A0B\u3001\u5FAA\u73AF\u548C\u9000\u51FA\u662F\u5728\u5FAA\u73AF\u5668\u4E0A\u5B9A\u4E49\u7684\u3002</p><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Looper</span><span class="token punctuation">&gt;</span></span> sThreadLocal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Looper</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Looper</span> sMainLooper<span class="token punctuation">;</span>  <span class="token comment">// guarded by Looper.class</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Observer</span> sObserver<span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">MessageQueue</span> mQueue<span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">Thread</span> mThread<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="sthreadlocal" tabindex="-1"><a class="header-anchor" href="#sthreadlocal" aria-hidden="true">#</a> sThreadLocal</h2><p>Looper\u6570\u636E\u4E0E\u7EBF\u7A0B\u7ED1\u5B9A\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u4E0B\u5BF9\u5E94\u4E00\u4E2ALooper\u3002</p><h2 id="smainlooper" tabindex="-1"><a class="header-anchor" href="#smainlooper" aria-hidden="true">#</a> sMainLooper</h2><h3 id="\u521D\u59CB\u5316\u8C03\u7528\u94FE" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u8C03\u7528\u94FE" aria-hidden="true">#</a> \u521D\u59CB\u5316\u8C03\u7528\u94FE</h3><p>// MainLooper\u7531Android\u73AF\u5883\u521B\u5EFA\uFF0C\u4E0D\u7528\u624B\u52A8\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002 prepareMainLooper()\u5DF2\u5F03\u7528 &lt;-- myLooper() &lt;-- sThreadLocal.get()</p><p>\u4F7F\u7528getMainLooper()\u53EF\u76F4\u63A5\u83B7\u53D6MainLoopr\u5F15\u7528</p><h2 id="threadlocal\u662F\u4EC0\u4E48\u65F6\u5019set-looper\u7684" tabindex="-1"><a class="header-anchor" href="#threadlocal\u662F\u4EC0\u4E48\u65F6\u5019set-looper\u7684" aria-hidden="true">#</a> ThreadLocal\u662F\u4EC0\u4E48\u65F6\u5019set looper\u7684\uFF1F</h2><p>//\u5C06\u5F53\u524D\u7EBF\u7A0B\u521D\u59CB\u5316\u4E3Alooper\u3002 \u8FD9\u4F7F\u60A8\u6709\u673A\u4F1A\u521B\u5EFA\u5904\u7406\u7A0B\u5E8F\uFF0C\u7136\u540E\u5728\u5B9E\u9645\u5F00\u59CB\u5FAA\u73AF\u4E4B\u524D\u5F15\u7528\u6B64\u5FAA\u73AF\u5668\u3002 \u8BF7\u52A1\u5FC5\u5728\u8C03\u7528\u6B64\u65B9\u6CD5\u540E\u8C03\u7528 {@link #loop()}\uFF0C\u5E76\u901A\u8FC7\u8C03\u7528 {@link #quit()} \u7ED3\u675F\u5B83\u3002</p><p>prepare(boolean quitAllowed) &lt;-- prepare()</p><blockquote><p>prepare\u5B9E\u9645\u4E0A\u662F\u5C06\u5F53\u524DLooper\u7ED1\u5B9A\u5728\u6240\u5728\u7EBF\u7A0B\u4E0A\u3002 \u6216\u8005\u8BF4 \u521B\u5EFA\u4E0E\u5F53\u524D\u7EBF\u7A0B\u76F8\u5173\u7684Looper.</p></blockquote><h2 id="\u6CE8\u91CA\u4E2D\u63D0\u5230\u5728\u8C03\u7528\u6B64\u65B9\u6CD5\u540E\u8C03\u7528loop-\u4E3A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA\u4E2D\u63D0\u5230\u5728\u8C03\u7528\u6B64\u65B9\u6CD5\u540E\u8C03\u7528loop-\u4E3A\u4EC0\u4E48" aria-hidden="true">#</a> \u6CE8\u91CA\u4E2D\u63D0\u5230\u5728\u8C03\u7528\u6B64\u65B9\u6CD5\u540E\u8C03\u7528loop(), \u4E3A\u4EC0\u4E48\uFF1F</h2><p>\u8C03\u7528\u6B64\u65B9\u6CD5\u5FAA\u73AF\u5904\u7406MessageQueue\u4E2D\u7684\u6D88\u606F. \u600E\u4E48\u505A\u7684\uFF1F</p><h3 id="loop" tabindex="-1"><a class="header-anchor" href="#loop" aria-hidden="true">#</a> loop()</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">final</span> <span class="token class-name">Looper</span> me <span class="token operator">=</span> <span class="token function">myLooper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u7EBF\u7A0Blooper</span>
 
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">loopOnce</span><span class="token punctuation">(</span>me<span class="token punctuation">,</span> ident<span class="token punctuation">,</span> thresholdOverride<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        
<span class="token operator">*</span> \u8F6E\u8BE2\u5E76\u4F20\u9012\u5355\u4E2A\u6D88\u606F\uFF0C\u5982\u679C\u5916\u90E8\u5FAA\u73AF\u5E94\u8BE5\u7EE7\u7EED\uFF0C\u5219\u8FD4\u56DE <span class="token boolean">true</span>\u3002
 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">loopOnce</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Looper</span> me<span class="token punctuation">,</span>
            <span class="token keyword">final</span> <span class="token keyword">long</span> ident<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token keyword">int</span> thresholdOverride<span class="token punctuation">)</span>  \u65B9\u6CD5

<span class="token comment">//\u5FAA\u73AF\u4ECEMessageQueue\u4E2D\u83B7\u53D6Message\uFF0C\u8BFB\u53D6\u5B8C\u6BD5\uFF0C\u4E0D\u518D\u6709\u6570\u636E\uFF0C\u8FD4\u56DEfalse\uFF0Cloop()\u65B9\u6CD5\u8DF3\u51FA</span>
     <span class="token class-name">Message</span> msg <span class="token operator">=</span> me<span class="token punctuation">.</span>mQueue<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// might block</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>msg <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// No message indicates that the message queue is quitting.</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    msg<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">dispatchMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8C03\u7528Handler.dispatchMessage</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment">//\u56DE\u6536message\u5BF9\u8C61</span>
    msg<span class="token punctuation">.</span><span class="token function">recycleUnchecked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u8C03\u7528quit-\u7ED3\u675Flooper-\u662F\u5982\u4F55\u5B9E\u73B0\u7684" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528quit-\u7ED3\u675Flooper-\u662F\u5982\u4F55\u5B9E\u73B0\u7684" aria-hidden="true">#</a> \u8C03\u7528quit()\u7ED3\u675Flooper, \u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F</h2><p>??</p><h2 id="\u9636\u6BB5\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u9636\u6BB5\u603B\u7ED3" aria-hidden="true">#</a> \u9636\u6BB5\u603B\u7ED3</h2><p>Message \u94FE\u8868\u7ED3\u6784\u6570\u636E\u7C7B \u53EF\u4EE5\u4F7F\u7528obtain()\u521B\u5EFA\u548C\u590D\u7528Message\u5BF9\u8C61\u3002 Looper\u521B\u5EFA<code>ThreadLocal&lt;Looper&gt;</code>\u5B58\u50A8\u4E0E\u7EBF\u7A0B\u5173\u8054\u7684Looper\u5B9E\u4F8B\u3002 \u5728Looper.prepare()\u4E2D\u521B\u5EFA\uFF0C\u5E76\u4F7F\u7528ThreadLocal.set\u3002</p><p>Looper.loop() \u5FAA\u73AF\u8C03\u7528MessageQueue\u4E2D\u7684next\u65B9\u6CD5\u3002\u5168\u90E8\u53D6\u51FA\u540E\u8DF3\u51FA\u65B9\u6CD5\u3002 \u6BCF\u6B21\u53D6\u51FAMessage\u5BF9\u8C61\u65F6\u90FD\u4F1A\u56DE\u6536\u81F3\u5BF9\u8C61\u6C60\u3002</p>`,26);function p(o,t){return e}var l=n(s,[["render",p]]);export{l as default};
