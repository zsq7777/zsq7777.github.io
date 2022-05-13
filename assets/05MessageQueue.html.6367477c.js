import{_ as n,f as s}from"./app.9bc8c786.js";const a={},p=s(`<h1 id="_05-messagequeue\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_05-messagequeue\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> 05. MessageQueue\u6E90\u7801\u89E3\u6790</h1><p>\u5728looper\u4E2D\u8C03\u7528MessageQueue\u65B9\u6CD5\u3002</p><p>MessageQueue\u4F5C\u4E3A\u6700\u6838\u5FC3\u7684\u7EC4\u4EF6\uFF0C\u5176\u5B58\u50A8\u6D88\u606F\u548C\u53D6\u51FA\u6D88\u606F\u90FD\u6709\u4E0D\u540C\u7684\u60C5\u51B5\u5904\u7406 \u6D88\u606F\u5206\u7C7B Message \u6709\u5173\u4E8E\u540C\u6B65\u4E0E\u5426\u7684flag, 0\u540C\u6B65 1\u5F02\u6B65 Message.setAsynchronous()</p><h2 id="\u540C\u6B65message" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65message" aria-hidden="true">#</a> \u540C\u6B65Message</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6D88\u606F\u90FD\u662F\u540C\u6B65\u7684\uFF0C\u4F7F\u7528Message.obtain\u65B9\u6CD5\u83B7\u53D6\u7684\u6D88\u606F\u90FD\u662F\u540C\u6B65</p><h2 id="\u5F02\u6B65message" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65message" aria-hidden="true">#</a> \u5F02\u6B65Message</h2><p>\u6D88\u606F\u961F\u5217\u88AB\u963B\u585E\u65F6\uFF0C\u5F02\u6B65\u6D88\u606F\u53EF\u4EE5\u6B63\u5E38\u6267\u884C</p><h2 id="barrier" tabindex="-1"><a class="header-anchor" href="#barrier" aria-hidden="true">#</a> Barrier</h2><p>\u53EF\u963B\u585E\u6D88\u606F\u961F\u5217\u3002 MessageQueue\u6709\u751F\u4EA7\u8FD9\u79CD\u6D88\u606F\u7684\u4E13\u5C5E\u65B9\u6CD5postSyncBarrier\u3002 \u7528\u4E8E\u4FE1\u53F7\u540C\u6B65\u573A\u666F\u3002</p><h2 id="next-\u65B9\u6CD5\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#next-\u65B9\u6CD5\u5206\u6790" aria-hidden="true">#</a> Next()\u65B9\u6CD5\u5206\u6790</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token class-name">Message</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u6D88\u606F\u5FAA\u73AF\u5DF2\u7ECF\u9000\u51FA\u5E76\u88AB\u91CA\u653E\uFF0C\u5219\u8FD4\u56DE\u6B64\u5904\u3002 \u5982\u679C\u5E94\u7528\u7A0B\u5E8F\u5728\u4E0D\u652F\u6301\u7684\u9000\u51FA\u540E\u5C1D\u8BD5\u91CD\u65B0\u542F\u52A8\u5FAA\u73AF\u5668\uFF0C\u5219\u53EF\u80FD\u4F1A\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\u3002</span>
        <span class="token keyword">final</span> <span class="token keyword">long</span> ptr <span class="token operator">=</span> mPtr<span class="token punctuation">;</span>  <span class="token comment">//mPtr\u5728MessageQueue\u6784\u9020\u91CC\u88AB\u521D\u59CB\u5316\uFF0C\u6765\u81EA\u4E8ENative\u65B9\u6CD5mPtr =nativeInit();</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> pendingIdleHandlerCount <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// -1 \u4EC5\u5728\u7B2C\u4E00\u6B21\u8FED\u4EE3\u671F\u95F4</span>
        <span class="token keyword">int</span> nextPollTimeoutMillis <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u4E0B\u4E00\u6B21\u8F6E\u8BAD\u8D85\u65F6\u6BEB\u79D2</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nextPollTimeoutMillis <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u8D85\u65F6</span>
                <span class="token class-name">Binder</span><span class="token punctuation">.</span><span class="token function">flushPendingCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u65BD\u653E\u6302\u8D77\u7684\u5BF9\u8C61\u5F15\u7528</span>
            <span class="token punctuation">}</span>

            <span class="token function">nativePollOnce</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span> nextPollTimeoutMillis<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//-1\u8868\u793A\u65E0\u9650\u963B\u585E \u4E00\u4E2A\u975E\u9759\u6001\u56DE\u8C03\u3002JNI\u65B9\u6CD5\uFF0C\u4F5C\u7528\u662F\u5426\u963B\u585E\u5F53\u524D\u65B9\u6CD5</span>

            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Try to retrieve the next message.  Return if found.</span>
                <span class="token keyword">final</span> <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token class-name">SystemClock</span><span class="token punctuation">.</span><span class="token function">uptimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4ECE\u5F00\u673A\u5230\u73B0\u5728\u7684\u6BEB\u79D2\u6570</span>
                <span class="token class-name">Message</span> prevMsg <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                <span class="token class-name">Message</span> msg <span class="token operator">=</span> mMessages<span class="token punctuation">;</span>
                
                <span class="token comment">//Handler==null,\u4ECE\u5C3E\u90E8\u8282\u70B9\u53D6\u5230\u6700\u540E\u4E00\u6761Message\u548C\u5012\u6570\u7B2C\u4E8C\u6761</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>msg <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> msg<span class="token punctuation">.</span>target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// Stalled by a barrier.  Find the next asynchronous message in the queue.</span>
                    <span class="token keyword">do</span> <span class="token punctuation">{</span>
                        prevMsg <span class="token operator">=</span> msg<span class="token punctuation">;</span>  <span class="token comment">//\u5012\u6570\u7B2C\u4E8C\u6761</span>
                        msg <span class="token operator">=</span> msg<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//\u5012\u6570\u7B2C\u4E00\u6761Message </span>
                    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>msg <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>msg<span class="token punctuation">.</span><span class="token function">isAsynchronous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>msg <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">&lt;</span> msg<span class="token punctuation">.</span>when<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u89E6\u53D1\u54CD\u5E94\u7684\u65F6\u95F4\u5927\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u5C31\u662F\u6CA1\u51C6\u5907\u597D</span>
                        <span class="token comment">// \u4E0B\u4E00\u6761\u6D88\u606F\u6CA1\u6709\u51C6\u5907\u597D\u3002 \u8BBE\u7F6E\u8D85\u65F6\u4EE5\u5728\u5B83\u51C6\u5907\u597D\u65F6\u5524\u9192\u3002</span>
                        nextPollTimeoutMillis <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>when <span class="token operator">-</span> now<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token comment">// Got a message.</span>
                        mBlocked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        <span class="token comment">//\u4ECE\u5C3E\u90E8\u8282\u70B9\u53D6\u51FAMessage\u3002 </span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>prevMsg <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                            prevMsg<span class="token punctuation">.</span>next <span class="token operator">=</span> msg<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                            mMessages <span class="token operator">=</span> msg<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        msg<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>DEBUG<span class="token punctuation">)</span> <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">v</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string">&quot;Returning message: &quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        msg<span class="token punctuation">.</span><span class="token function">markInUse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">// No more messages.</span>
                    nextPollTimeoutMillis <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// Process the quit message now that all pending messages have been handled.</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>mQuitting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// If first time idle, then get the number of idlers to run.</span>
                <span class="token comment">// Idle handles only run if the queue is empty or if the first message</span>
                <span class="token comment">// in the queue (possibly a barrier) is due to be handled in the future.</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>pendingIdleHandlerCount <span class="token operator">&lt;</span> <span class="token number">0</span>
                        <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>mMessages <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> now <span class="token operator">&lt;</span> mMessages<span class="token punctuation">.</span>when<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    pendingIdleHandlerCount <span class="token operator">=</span> mIdleHandlers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>pendingIdleHandlerCount <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// No idle handlers to run.  Loop and wait some more.</span>
                    mBlocked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>mPendingIdleHandlers <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    mPendingIdleHandlers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IdleHandler</span><span class="token punctuation">[</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>pendingIdleHandlerCount<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                mPendingIdleHandlers <span class="token operator">=</span> mIdleHandlers<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span>mPendingIdleHandlers<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// Run the idle handlers.</span>
            <span class="token comment">// We only ever reach this code block during the first iteration.</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pendingIdleHandlerCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">final</span> <span class="token class-name">IdleHandler</span> idler <span class="token operator">=</span> mPendingIdleHandlers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                mPendingIdleHandlers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// release the reference to the handler</span>

                <span class="token keyword">boolean</span> keep <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    keep <span class="token operator">=</span> idler<span class="token punctuation">.</span><span class="token function">queueIdle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">wtf</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string">&quot;IdleHandler threw exception&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>keep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        mIdleHandlers<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>idler<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// Reset the idle handler count to 0 so we do not run them again.</span>
            pendingIdleHandlerCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

            <span class="token comment">// While calling an idle handler, a new message could have been delivered</span>
            <span class="token comment">// so go back and look again for a pending message without waiting.</span>
            nextPollTimeoutMillis <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div><h2 id="enqueuemessage-\u5165\u961F-\u5B58\u5165\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#enqueuemessage-\u5165\u961F-\u5B58\u5165\u6D88\u606F" aria-hidden="true">#</a> enqueueMessage() \u5165\u961F\uFF0C\u5B58\u5165\u6D88\u606F</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">boolean</span> <span class="token function">enqueueMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> msg<span class="token punctuation">,</span> <span class="token keyword">long</span> when<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span>target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Message must have a target.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">isInUse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span>msg <span class="token operator">+</span> <span class="token string">&quot; This message is already in use.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>mQuitting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">IllegalStateException</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span>
                        msg<span class="token punctuation">.</span>target <span class="token operator">+</span> <span class="token string">&quot; sending message to a Handler on a dead thread&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">w</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                msg<span class="token punctuation">.</span><span class="token function">recycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            msg<span class="token punctuation">.</span><span class="token function">markInUse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            msg<span class="token punctuation">.</span>when <span class="token operator">=</span> when<span class="token punctuation">;</span>
            <span class="token class-name">Message</span> p <span class="token operator">=</span> mMessages<span class="token punctuation">;</span>
            <span class="token keyword">boolean</span> needWake<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> when <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> when <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>when<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token comment">// \u65B0\u5934\u8282\u70B9\uFF0C\u5982\u679C\u963B\u585E\u5219\u5524\u9192\u4E8B\u4EF6\u961F\u5217\u3002</span>
                msg<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
                mMessages <span class="token operator">=</span> msg<span class="token punctuation">;</span><span class="token comment">//\u4F20\u5165\u7684\u8282\u70B9\u4E3A\u65B0\u5934\u7ED3\u70B9</span>
                needWake <span class="token operator">=</span> mBlocked<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u63D2\u5165\u5230\u961F\u5217\u4E2D\u95F4\u3002 \u901A\u5E38\u6211\u4EEC\u4E0D\u5FC5\u9192\u6765</span>
                 <span class="token comment">// \u5411\u4E0A\u4E8B\u4EF6\u961F\u5217\uFF0C\u9664\u975E\u961F\u5217\u5934\u90E8\u6709\u969C\u788D</span>
                 <span class="token comment">// \u5E76\u4E14\u6D88\u606F\u662F\u961F\u5217\u4E2D\u6700\u65E9\u7684\u5F02\u6B65\u6D88\u606F\u3002</span>
                needWake <span class="token operator">=</span> mBlocked <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span>target <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> msg<span class="token punctuation">.</span><span class="token function">isAsynchronous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Message</span> prev<span class="token punctuation">;</span>
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
                msg<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">;</span> <span class="token comment">// invariant: p == prev.next</span>
                prev<span class="token punctuation">.</span>next <span class="token operator">=</span> msg<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u5047\u8BBE mPtr != 0 \u56E0\u4E3A mQuitting \u662Ffalse\u7684\u3002</span>
            <span class="token comment">//\u5524\u9192\u961F\u5217</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>needWake<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">nativeWake</span><span class="token punctuation">(</span>mPtr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div>`,13);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};
