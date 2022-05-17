import{_ as a,f as n}from"./app.d7ce3c02.js";const s={},e=n(`<h1 id="_02-message\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_02-message\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> 02. Message\u6E90\u7801\u5206\u6790</h1><h2 id="handler\u662F\u5982\u4F55\u6267\u884C\u7684" tabindex="-1"><a class="header-anchor" href="#handler\u662F\u5982\u4F55\u6267\u884C\u7684" aria-hidden="true">#</a> handler\u662F\u5982\u4F55\u6267\u884C\u7684</h2><p>handler \u53EF\u4EE5\u53D1\u9001\u548C\u5904\u7406\u7EBF\u7A0B\u7684---&gt; MessageQueue\u5173\u8054\u7684Message\u548CRunnable\u5BF9\u8C61\u3002</p><p>hanlder\u5B9E\u4F8B\u4E0E\u5355\u4E2A\u7EBF\u7A0B\u548C\u8BE5\u7EBF\u7A0B\u7684\u6D88\u606F\u961F\u5217\u76F8\u5173\u8054</p><p>\u5F53\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684Handler\u65F6\uFF0C\u4ED6\u4F1A\u7ED1\u5B9A\u5230\u4E00\u4E2ALooper,\u4ED6\u5C06\u6D88\u606F\u548Crunnable\u4F20\u9012\u5230Looper\u7684\u6D88\u606F\u961F\u5217\u5E76\u5728\u8BE5Looper\u7684\u7EBF\u7A0B\u4E0A\u6267\u884C\u4ED6\u4EEC</p><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a> \u4E3B\u8981\u7528\u9014</h2><ol><li>\u5B89\u6392message\u548CRunnable\u5728\u672A\u6765\u67D0\u4E2A\u65F6\u95F4\u70B9\u6267\u884C</li><li>\u6392\u961F\u7B49\u5F85\u4E00\u4E2A\u52A8\u4F5C\uFF0C\u5728\u4E0D\u540C\u4E8E\u81EA\u5DF1\u7684\u7EBF\u7A0B\u4E0A\u6267\u884C</li></ol><h2 id="post\u548Csendmessageattime" tabindex="-1"><a class="header-anchor" href="#post\u548Csendmessageattime" aria-hidden="true">#</a> post\u548CsendMessageAtTime</h2><ol><li>post\u5141\u8BB8\u5728\u63A5\u6536\u5230Runnable\u5BF9\u8C61\u65F6\u88AB\u6D88\u606F\u961F\u5217\u8C03\u7528\u3002</li><li>sendMessage\u5141\u8BB8\u5C06\u6570\u636E\u5305\u7684Messager\u5BF9\u8C61\u653E\u5165\u961F\u5217\uFF0C\u8BE5\u6570\u636E\u5305\u88ABHandler\u7684HandlerMessager\u65B9\u6CD5\u5904\u7406\uFF08\u9700\u8981\u5B9E\u73B0Handler\u7684\u5B50\u7C7B\uFF09</li></ol><h2 id="\u53D1\u9001\u6D88\u606F\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u6D88\u606F\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u53D1\u9001\u6D88\u606F\u7684\u65B9\u5F0F</h2><h3 id="\u7ACB\u5373\u53D1\u9001" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u53D1\u9001" aria-hidden="true">#</a> \u7ACB\u5373\u53D1\u9001</h3><h3 id="\u57FA\u4E8E\u65F6\u95F4\u7684\u53D1\u9001\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u65F6\u95F4\u7684\u53D1\u9001\u884C\u4E3A" aria-hidden="true">#</a> \u57FA\u4E8E\u65F6\u95F4\u7684\u53D1\u9001\u884C\u4E3A</h3><p>\u5982\u65F6\u949F\u53D8\u5316\uFF0C\u8D85\u65F6\uFF0C\u5B9A\u65F6</p><h3 id="\u8FDB\u7A0B\u521B\u5EFA\u65F6\u8FD0\u884C\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u521B\u5EFA\u65F6\u8FD0\u884C\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> \u8FDB\u7A0B\u521B\u5EFA\u65F6\u8FD0\u884C\u6D88\u606F\u961F\u5217</h3><p>\u5F53\u4E3A\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u521B\u5EFA\u4E00\u4E2A\u8FDB\u7A0B\u65F6\uFF0C\u5B83\u7684\u4E3B\u7EBF\u7A0B\u4E13\u7528\u4E8E\u8FD0\u884C\u4E00\u4E2A\u6D88\u606F\u961F\u5217\uFF0C\u8BE5\u961F\u5217\u8D1F\u8D23\u7BA1\u7406\u9876\u7EA7\u5E94\u7528\u7A0B\u5E8F\u5BF9\u8C61\uFF08\u6D3B\u52A8\u3001\u5E7F\u64AD\u63A5\u6536\u5668\u7B49\uFF09\u4EE5\u53CA\u5B83\u4EEC\u521B\u5EFA\u7684\u4EFB\u4F55\u7A97\u53E3\u3002 \u60A8\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u7EBF\u7A0B\uFF0C\u5E76\u901A\u8FC7 Handler \u4E0E\u4E3B\u5E94\u7528\u7A0B\u5E8F\u7EBF\u7A0B\u8FDB\u884C\u901A\u4FE1\u3002 \u8FD9\u662F\u901A\u8FC7\u8C03\u7528\u4E0E\u4EE5\u524D\u76F8\u540C\u7684 <code>&lt;em&gt;</code>post<code>&lt;/em&gt;</code> \u6216 <code>&lt;em&gt;</code>sendMessage<code>&lt;/em&gt;</code> \u65B9\u6CD5\u6765\u5B8C\u6210\u7684\uFF0C\u4F46\u6765\u81EA\u60A8\u7684\u65B0\u7EBF\u7A0B\u3002 \u7136\u540E\uFF0C\u7ED9\u5B9A\u7684 Runnable \u6216 Message \u5C06\u88AB\u5B89\u6392\u5728 Handler \u7684\u6D88\u606F\u961F\u5217\u4E2D\uFF0C\u5E76\u5728\u9002\u5F53\u7684\u65F6\u5019\u8FDB\u884C\u5904\u7406\u3002</p><h2 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> post</h2><p>\u4E5F\u662FsendMessage,\u4E0D\u8FC7\u4F1A\u4ECEMessage.Obtain()\u83B7\u53D6Message,\u5C06Message.callback=\u4F20\u5165\u7684runnable\u3002\u5728\u672A\u6765\u67D0\u4E2A\u65F6\u95F4\u70B9\u6267\u884C\u3002</p><h2 id="handler\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#handler\u521D\u59CB\u5316" aria-hidden="true">#</a> Handler\u521D\u59CB\u5316</h2><ul><li>\u6307\u5B9ALooper\u3002 \u5916\u90E8\u521D\u59CB\u5316Looper\u5BF9\u8C61\uFF1F \u505A\u4E86\u4EC0\u4E48</li><li>\u9ED8\u8BA4\u6301\u6709 Looper.mQueue \u5F15\u7528</li><li>mCallback Handler.Callback</li><li>mAsynchronous ?</li></ul><h2 id="handler-dispatchmessage-\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#handler-dispatchmessage-\u5206\u6790" aria-hidden="true">#</a> Handler dispatchMessage()\u5206\u6790</h2><p>callback\u4E3A\u4E0D\u4E3A\u7A7A-&gt; handleCallback else handleMessage()</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dispatchMessage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">Message</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span>callback <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">handleCallback</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>mCallback <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>mCallback<span class="token punctuation">.</span><span class="token function">handleMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token function">handleMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="handler-handlercallback" tabindex="-1"><a class="header-anchor" href="#handler-handlercallback" aria-hidden="true">#</a> Handler.handlerCallback()</h2><p>message.callback.run()</p><h2 id="handler-handlermessage" tabindex="-1"><a class="header-anchor" href="#handler-handlermessage" aria-hidden="true">#</a> Handler.handlerMessage()</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
*\u5B50\u7C7B\u5B9E\u73B0handlerMessage\u65B9\u6CD5
*/</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">Message</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,26);function l(p,t){return e}var o=a(s,[["render",l]]);export{o as default};
