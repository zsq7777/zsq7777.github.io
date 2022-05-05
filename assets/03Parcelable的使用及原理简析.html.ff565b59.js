import{_ as n,f as s}from"./app.52f3483b.js";var a="/assets/image.cfcb8c28.webp";const p={},e=s('<h1 id="_03-parcelable\u7684\u4F7F\u7528\u53CA\u539F\u7406\u7B80\u6790" tabindex="-1"><a class="header-anchor" href="#_03-parcelable\u7684\u4F7F\u7528\u53CA\u539F\u7406\u7B80\u6790" aria-hidden="true">#</a> 03. Parcelable\u7684\u4F7F\u7528\u53CA\u539F\u7406\u7B80\u6790</h1><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>Parcelable\u7684\u5B9E\u73B0\u539F\u7406\u4E3B\u8981\u5C31\u662F\u5728\u5185\u5B58\u4E2D\u5F00\u8F9F\u4E00\u4E2A\u5171\u4EAB\u5185\u5B58\u5757\u3002</p><p><img src="'+a+`" alt="\u56FE\u7247" loading="lazy"></p><p>AB\u4E24\u4E2A\u8FDB\u7A0B\u4E2D\u8981\u8FDB\u884C\u4F20\u8F93\uFF0C\u4E0D\u80FD\u76F4\u63A5\u628A\u4E00\u4E2A\u5BF9\u8C61\u4F20\u8F93\u8FC7\u53BB\uFF0C\u5F00\u8F9F\u4E00\u5757\u5185\u5B58\uFF0C\u901A\u8FC7Parcel\uFF0C\u4E5F\u5C31\u662F\u6253\u5305\u7684\u65B9\u5F0F\uFF0C\u628A\u6570\u636E\u5B58\u5728\u4E86\u5171\u4EAB\u5185\u5B58\uFF0C\u518D\u628A\u5171\u4EAB\u5185\u5B58\u4E2D\u7684\u6570\u636E\u7528Parcel\u53D6\u51FA\u6765\uFF0C\u5B9E\u73B0\u6570\u636E\u4F20\u8F93\u3002</p><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>able<span class="token punctuation">.</span>handlerdemo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Parcel</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Parcelable</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Create by \u8D75\u601D\u7426 on 2022/4/19
 * email zsqandzyr@gmail.com
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Entity</span> <span class="token keyword">implements</span> <span class="token class-name">Parcelable</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>


    <span class="token comment">//\u53CD\u5E8F\u5217\u5316</span>
    <span class="token keyword">protected</span> <span class="token class-name">Entity</span><span class="token punctuation">(</span><span class="token class-name">Parcel</span> in<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u987A\u5E8F\u9700\u548C\u5199\u5165\u987A\u5E8F\u4E00\u81F4</span>
        age <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        name <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Creator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Entity</span><span class="token punctuation">&gt;</span></span> CREATOR <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Creator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Entity</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//\u4ECEParcel\u91CC\u62FF\u5230\u5BF9\u5E94\u7684\u6570\u636E</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Entity</span> <span class="token function">createFromParcel</span><span class="token punctuation">(</span><span class="token class-name">Parcel</span> in<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Entity</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//\u5BF9\u8C61\u6570\u7EC4</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Entity</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">newArray</span><span class="token punctuation">(</span><span class="token keyword">int</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Entity</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">//\u53EF\u6307\u660E\u6587\u4EF6\u5305\u542B\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF0C\u7CFB\u7EDF\u5185\u90E8\u8FDB\u884C\u5B89\u5168\u4FDD\u62A4\u4F7F\u7528\u3002</span>
    <span class="token comment">//\u5176\u4ED6\u552F\u4E00\u6709\u6548\u503CCONTENTS_FILE_DESCRIPTOR(-1)</span>
    <span class="token comment">//\u5982\u679C\u60A8\u9700\u8981\u5C06FileDescriptor\uFF08\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF09\u5BF9\u8C61\u653E\u5165Parcelable\u4E2D,\u5219\u5E94\u8BE5\u5C06CONTENTS_FILE_DESCRIPTOR\u8BBE\u4E3A\u8FD4\u56DE\u503C</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">describeContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u5E8F\u5217\u5316</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">writeToParcel</span><span class="token punctuation">(</span><span class="token class-name">Parcel</span> parcel<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5411\u5BB9\u5668\u4F20\u5165\u6570\u636E</span>
        parcel<span class="token punctuation">.</span><span class="token function">writeInt</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        parcel<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>`,7);function t(c,l){return e}var r=n(p,[["render",t]]);export{r as default};
