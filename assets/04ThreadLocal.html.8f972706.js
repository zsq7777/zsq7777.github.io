import{_ as t,r as e,o,a as c,b as n,e as a,F as l,f as u,d as p}from"./app.b38bafeb.js";const i={},r=u(`<h1 id="_04-threadlocal\u7684\u4F7F\u7528\u53CA\u6E90\u7801\u89E3\u6790\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#_04-threadlocal\u7684\u4F7F\u7528\u53CA\u6E90\u7801\u89E3\u6790\u6587\u7AE0" aria-hidden="true">#</a> 04. ThreadLocal\u7684\u4F7F\u7528\u53CA\u6E90\u7801\u89E3\u6790\u6587\u7AE0</h1><p>\u7EBF\u7A0B\u5185\u90E8\u5B58\u50A8\u6570\u636E\u7684\u5DE5\u5177\u7C7B\u3002 \u7EBF\u7A0B\u4E2D\u5B58\u50A8\u81EA\u5DF1\u7684\u79C1\u6709\u6570\u636E</p><p>ThreadLocal \u53EF\u4EE5\u5728\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\u4F20\u9012\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C \u8DE8\u65B9\u6CD5\u8C03\u7528\uFF0C\u907F\u514D\u5F15\u7528\u4F20\u9012\u7684\u9EBB\u70E6\u3002</p><p>\u7EBF\u7A0B\u5C40\u90E8\u53D8\u91CF</p><blockquote><p>ThreadLocal\u5B9E\u4F8B\u901A\u5E38\u662F\u5E0C\u671B\u5C06\u72B6\u6001\u4E0E\u7EBF\u7A0B\u76F8\u5173\u8054\u7684\u7C7B\u4E2D\u7684\u79C1\u6709\u9759\u6001\u5B57\u6BB5.</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">testThreadLocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> threadLocal <span class="token operator">=</span> ThreadLocal<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    threadLocal<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u4E3B\u7EBF\u7A0B&quot;</span></span><span class="token punctuation">)</span>
    <span class="token function">Thread</span><span class="token punctuation">(</span>Runnable <span class="token punctuation">{</span>
        threadLocal<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B50\u7EBF\u7A0B1&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;ThreadLocation\u5B502\uFF1A&quot;</span></span><span class="token operator">+</span>threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u6CA1\u6709\u5B50\u7EBF\u7A0B1&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
            threadLocal<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B50\u7EBF\u7A0B1&quot;</span></span><span class="token operator">+</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">Thread</span><span class="token punctuation">(</span>Runnable <span class="token punctuation">{</span>
        threadLocal<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B50\u7EBF\u7A0B2&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;ThreadLocation\u5B502\uFF1A&quot;</span></span><span class="token operator">+</span>threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u6CA1\u6709\u5B50\u7EBF\u7A0B2&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
            threadLocal<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u5B50\u7EBF\u7A0B2&quot;</span></span><span class="token operator">+</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;ThreadLocation\u4E3B\uFF1A&quot;</span></span><span class="token operator">+</span>threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">testThreadLocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u51FA
ThreadLocation\u4E3B\uFF1A\u4E3B\u7EBF\u7A0B
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B2
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B1
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B10
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B20
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B21
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B11
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B12
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B22
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B13
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B23
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B24
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B14
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B25
ThreadLocation\u5B502\uFF1A\u5B50\u7EBF\u7A0B15
...

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u4EE5\u4E0A\u6211\u4EEC\u53D1\u73B0\uFF0C\u5728\u4E0D\u540C\u7684\u7EBF\u7A0B\u4E2DThreadLocal.set\u5E76\u4E0D\u4F1A\u6539\u53D8\u5F53\u524D\u7EBF\u7A0B\u7684get(),\u53EA\u6709\u6240\u5728\u7EBF\u7A0Bset\u53EF\u4EE5\u66F4\u6539\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>ThreadLocal\u5C06\u6570\u636E\u7ED1\u5B9A\u5728\u4E0D\u540C\u7684\u7EBF\u7A0B\u4E2D \u3002\u9002\u7528\u4E8E\u4E0D\u540C\u7EBF\u7A0B\u4F5C\u7528\u57DF\u7684\u6570\u636E\u5907\u4EFD\u3002</p><h2 id="\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> \u6E90\u7801\u89E3\u6790</h2>`,11),k={href:"https://juejin.cn/post/6844903552477822989",target:"_blank",rel:"noopener noreferrer"},b=p("ThreadLocal\u6E90\u7801\u89E3\u6790"),d={href:"https://www.jianshu.com/p/3c5d7f09dfbd",target:"_blank",rel:"noopener noreferrer"},h=p("ThreadLocal\u6E90\u7801\u89E3\u6790"),m={href:"https://github.com/zxiaofan/JDK",target:"_blank",rel:"noopener noreferrer"},f=p("JDK\u6E90\u7801");function g(L,T){const s=e("ExternalLinkIcon");return o(),c(l,null,[r,n("p",null,[n("a",k,[b,a(s)])]),n("p",null,[n("a",d,[h,a(s)])]),n("p",null,[n("a",m,[f,a(s)])])],64)}var q=t(i,[["render",g]]);export{q as default};
