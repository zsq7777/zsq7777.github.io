import{_ as e,r as p,o as t,a as o,b as n,e as c,F as r,d as a,f as l}from"./app.d43339be.js";const u={},i=n("h1",{id:"_08-carson-handler\u603B\u7ED3\u7684\u673A\u5236\u6E90\u7801\u89E3\u6790",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_08-carson-handler\u603B\u7ED3\u7684\u673A\u5236\u6E90\u7801\u89E3\u6790","aria-hidden":"true"},"#"),a(" 08. Carson Handler\u603B\u7ED3\u7684\u673A\u5236\u6E90\u7801\u89E3\u6790")],-1),d=n("p",null,"\u5728\u9605\u8BFB\u4E00\u6B21\u6E90\u7801\u540E\u6A21\u7CCA\u4E0D\u61C2\u7684\u70B9\uFF0C\u89E3\u6790\u53CA\u5F71\u54CD\u52A0\u6DF1",-1),k={href:"https://www.jianshu.com/p/b4d745c7ff7a",target:"_blank",rel:"noopener noreferrer"},h=a("\u5730\u5740"),b=l(`<h2 id="\u6D88\u606F\u7684\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u7684\u5904\u7406" aria-hidden="true">#</a> \u6D88\u606F\u7684\u5904\u7406</h2><h3 id="\u4E00-handler\u662F\u5982\u4F55\u7ED1\u5B9A\u5F53\u524D\u7EBF\u7A0B\u7684" tabindex="-1"><a class="header-anchor" href="#\u4E00-handler\u662F\u5982\u4F55\u7ED1\u5B9A\u5F53\u524D\u7EBF\u7A0B\u7684" aria-hidden="true">#</a> \u4E00.Handler\u662F\u5982\u4F55\u7ED1\u5B9A\u5F53\u524D\u7EBF\u7A0B\u7684\uFF1F</h3><p>Handler\u521D\u59CB\u5316\u7684\u65F6\u5019\uFF0C\u505A\u4E862\u4EF6\u4E8B</p><h4 id="_1-\u6307\u5B9Alooper\u5BF9\u8C61\u3002" tabindex="-1"><a class="header-anchor" href="#_1-\u6307\u5B9Alooper\u5BF9\u8C61\u3002" aria-hidden="true">#</a> 1. \u6307\u5B9ALooper\u5BF9\u8C61\u3002</h4><p>Looper\u5BF9\u8C61\u7684\u83B7\u53D6\u6765\u81EALocalThread.get(). Looper\u5BF9\u8C61\u7684\u521B\u5EFA\u6765\u81EA\u4E8ELooper.prepare(),\u4F7F\u7528ThreadLocal.set(new Looper()). \u800CThreadLocal\u5C06Looper\u5BF9\u8C61\u4E0E\u5F53\u524D\u7EBF\u7A0B\u7ED1\u5B9A\u3002</p><h4 id="threadlocal" tabindex="-1"><a class="header-anchor" href="#threadlocal" aria-hidden="true">#</a> ThreadLocal</h4><p>ThreadLocal \u5B9E\u4F8B\u901A\u5E38\u662F\u5E0C\u671B\u5C06\u72B6\u6001\u4E0E\u7EBF\u7A0B\u76F8\u5173\u8054\u7684\u7C7B\u4E2D\u7684\u79C1\u6709\u9759\u6001\u5B57\u6BB5</p><h3 id="_2-\u7ED1\u5B9Amessagequeue" tabindex="-1"><a class="header-anchor" href="#_2-\u7ED1\u5B9Amessagequeue" aria-hidden="true">#</a> 2. \u7ED1\u5B9AMessageQueue</h3><p>Handler\u7684MessageQueue\u6765\u81EALooper.mQueue\u3002\u800CLooper.mQueue\u5728 Looper\u5BF9\u8C61\u521B\u5EFA\u65F6\u521D\u59CB\u5316\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>Handler\u521D\u59CB\u5316\u7684\u65F6\u5019\u4ECEThreadLocal,\u5C06Looper\u5B9E\u4F8B\u4E0E\u7EBF\u7A0B\u5173\u8054,\u6301\u6709Looper\u4E2D\u7684MessageQueue\u5BF9\u8C61\u7684\u5F15\u7528\u3002\u6240\u4EE5\u4ECE\u5B50\u7EBF\u7A0B\u53D1\u9001\u7684\u6D88\u606F\uFF0C\u53EF\u4EE5\u901A\u8FC7MessageQueue\u83B7\u53D6Messager\u5230looper\uFF0C\u5E76\u4F7F\u7528 msg.target.dispatchMessage(msg)\u5206\u53D1\u6D88\u606F\u3002</p><h2 id="\u4E8C-messagequeue\u662F\u5982\u4F55\u5C06\u6D88\u606F\u51FA\u961F\u7684" tabindex="-1"><a class="header-anchor" href="#\u4E8C-messagequeue\u662F\u5982\u4F55\u5C06\u6D88\u606F\u51FA\u961F\u7684" aria-hidden="true">#</a> \u4E8C.MessageQueue\u662F\u5982\u4F55\u5C06\u6D88\u606F\u51FA\u961F\u7684</h2><p>\u6309\u7167Messager\u5BF9\u8C61\u7684\u521B\u5EFA\u65F6\u95F4\u987A\u5E8F\u51FA\u961F\u3002</p><h2 id="\u4E09-handler-dispatchmessage" tabindex="-1"><a class="header-anchor" href="#\u4E09-handler-dispatchmessage" aria-hidden="true">#</a> \u4E09.Handler.dispatchMessage</h2><h3 id="_1-handler-handlecallback" tabindex="-1"><a class="header-anchor" href="#_1-handler-handlecallback" aria-hidden="true">#</a> 1. Handler.handleCallback()</h3><p>\u56DE\u8C03Runnable\u5BF9\u8C61\u91CC\u590D\u5199\u7684run\uFF08\uFF09</p><h3 id="_2-handler-handlemessage" tabindex="-1"><a class="header-anchor" href="#_2-handler-handlemessage" aria-hidden="true">#</a> 2. Handler.handleMessage</h3><p>\u590D\u5199\u5B50\u7C7BhandleMessage\u65B9\u6CD5</p><h2 id="\u6D88\u606F\u7684\u53D1\u9001" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u7684\u53D1\u9001" aria-hidden="true">#</a> \u6D88\u606F\u7684\u53D1\u9001</h2><h3 id="_1-\u4F7F\u7528message-target-dispatchmessage-\u4E2Dtarget-message\u662F\u4EC0\u4E48\u65F6\u5019\u6301\u6709handler\u5F15\u7528\u7684" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528message-target-dispatchmessage-\u4E2Dtarget-message\u662F\u4EC0\u4E48\u65F6\u5019\u6301\u6709handler\u5F15\u7528\u7684" aria-hidden="true">#</a> 1. \u4F7F\u7528Message.target.dispatchMessage() \u4E2Dtarget\uFF0CMessage\u662F\u4EC0\u4E48\u65F6\u5019\u6301\u6709Handler\u5F15\u7528\u7684</h3><p>Handler.enqueueMessage\u4E2D\uFF0C\u5C06\u5F53\u524DHandler\u5B9E\u4F8B\u4F5C\u4E3Amessage\u7684target\u5C5E\u6027\u3002</p><h3 id="_2-enqueuemessage-\u6D88\u606F\u5165\u961F" tabindex="-1"><a class="header-anchor" href="#_2-enqueuemessage-\u6D88\u606F\u5165\u961F" aria-hidden="true">#</a> 2. enqueueMessage \u6D88\u606F\u5165\u961F</h3><p>\u6D88\u606F\u961F\u5217\u91CC\uFF0C\u65E0\u6D88\u606F\u5C31\u63D2\u5165\u961F\u5934\uFF0C\u6709\u6D88\u606F\u5C31\u6309\u7167Message\u5165\u961F\u65F6\u95F4\u63D2\u5165\u5230\u961F\u5217\u4E2D\u3002</p><p>\u4E4B\u540E\u968F\u7740Looper\u5BF9\u8C61\u7684\u65E0\u9650\u5FAA\u73AF\u6D88\u606F\uFF0C\u4E0D\u65AD\u4ECE\u6D88\u606F\u961F\u5217\u4E2D\u53D6\u51FA\u6D88\u606F\uFF0C\u5206\u53D1\u5230\u5BF9\u5E94\u7684handler</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">enqueueMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> msg<span class="token punctuation">,</span> <span class="token keyword">long</span> when<span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token comment">// \u4EC5\u8D34\u51FA\u5173\u952E\u4EE3\u7801</span>

                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                    msg<span class="token punctuation">.</span><span class="token function">markInUse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    msg<span class="token punctuation">.</span>when <span class="token operator">=</span> when<span class="token punctuation">;</span>
                    <span class="token class-name">Message</span> p <span class="token operator">=</span> mMessages<span class="token punctuation">;</span>
                    <span class="token keyword">boolean</span> needWake<span class="token punctuation">;</span>

                    <span class="token comment">// \u5224\u65AD\u6D88\u606F\u961F\u5217\u91CC\u6709\u65E0\u6D88\u606F</span>
                        <span class="token comment">// a. \u82E5\u65E0\uFF0C\u5219\u5C06\u5F53\u524D\u63D2\u5165\u7684\u6D88\u606F \u4F5C\u4E3A\u961F\u5934 &amp; \u82E5\u6B64\u65F6\u6D88\u606F\u961F\u5217\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\uFF0C\u5219\u5524\u9192</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> when <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> when <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>when<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            msg<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
                            mMessages <span class="token operator">=</span> msg<span class="token punctuation">;</span>
                            needWake <span class="token operator">=</span> mBlocked<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                            needWake <span class="token operator">=</span> mBlocked <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span>target <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> msg<span class="token punctuation">.</span><span class="token function">isAsynchronous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token class-name">Message</span> prev<span class="token punctuation">;</span>

                        <span class="token comment">// b. \u5224\u65AD\u6D88\u606F\u961F\u5217\u91CC\u6709\u6D88\u606F\uFF0C\u5219\u6839\u636E \u6D88\u606F\uFF08Message\uFF09\u521B\u5EFA\u7684\u65F6\u95F4 \u63D2\u5165\u5230\u961F\u5217\u4E2D</span>
                            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                prev <span class="token operator">=</span> p<span class="token punctuation">;</span>
                                p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                                <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> when <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>when<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                                <span class="token punctuation">}</span>
                                <span class="token keyword">if</span> <span class="token punctuation">(</span>needWake <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span><span class="token function">isAsynchronous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                    needWake <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span>

                            msg<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">;</span> 
                            prev<span class="token punctuation">.</span>next <span class="token operator">=</span> msg<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>

                        <span class="token keyword">if</span> <span class="token punctuation">(</span>needWake<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token function">nativeWake</span><span class="token punctuation">(</span>mPtr<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> post</h2><p>\u5185\u90E8\u6839\u636ERunnable\u5BF9\u8C61\u800C\u5C01\u88C5\u3002 \u5B9E\u9645\u4E0A\u662F\u521B\u5EFAMessager\u5BF9\u8C61\uFF0C\u8BA9Messager\u6301\u6709callback\uFF0C\u7136\u540E\u5728dispatchMessage\u7684\u65F6\u5019\u8C03\u7528messager.callback.run();</p>`,27);function m(g,_){const s=p("ExternalLinkIcon");return t(),o(r,null,[i,d,n("p",null,[n("a",k,[h,c(s)])]),b],64)}var w=e(u,[["render",m]]);export{w as default};
