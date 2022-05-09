import{_ as n,f as s}from"./app.024c5519.js";const a={},p=s(`<h1 id="_40-c-\u9690\u5F0F\u6784\u9020\u51FD\u6570-\u9690\u5F0F\u8F6C\u6362\u4E0Eexplicit\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_40-c-\u9690\u5F0F\u6784\u9020\u51FD\u6570-\u9690\u5F0F\u8F6C\u6362\u4E0Eexplicit\u5173\u952E\u5B57" aria-hidden="true">#</a> 40. C++(\u9690\u5F0F\u6784\u9020\u51FD\u6570)\u9690\u5F0F\u8F6C\u6362\u4E0Eexplicit\u5173\u952E\u5B57</h1><p>\u9690\u5F0F\u53EF\u4EE5\u7406\u89E3\u4E3A\u81EA\u52A8\u7684\uFF0C\u6839\u636E\u4E0A\u4E0B\u6587\u5224\u65AD\uFF0C\u53BB\u6267\u884C\u51FD\u6570\u3002</p><h2 id="cast\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362-\u9690\u5F0F\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#cast\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362-\u9690\u5F0F\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> cast\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362 / \u9690\u5F0F\u6784\u9020\u51FD\u6570</h2><ol><li>\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5F88\u7B80\u5355\u7684\u6784\u9020\u6808\u5BF9\u8C61\u3002</li><li>\u53EF\u5C06\u6784\u9020\u51FD\u6570\u53C2\u6570\u5F53\u4F5C\u5BF9\u8C61\u4F20\u5165\u51FD\u6570\u4E2D\u4F7F\u7528\u3002</li><li>\u4F46\u662F\u4F1A\u5BF9\u4EE3\u7801\u9605\u8BFB\u9020\u6210\u5F71\u54CD\uFF0C\u63A8\u8350\u4F7F\u7528Entity e(&quot;\u8D75\u601D\u7426&quot;)</li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

using String <span class="token operator">=</span> std<span class="token operator">::</span>string<span class="token punctuation">;</span>

class Entity <span class="token punctuation">{</span>
private<span class="token operator">:</span>
  String s_Name<span class="token punctuation">;</span>
  <span class="token keyword">int</span> s_Age<span class="token punctuation">;</span>
public<span class="token operator">:</span>
  <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token keyword">const</span> String nameStr<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">s_Name</span><span class="token punctuation">(</span>nameStr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">s_Age</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">s_Name</span><span class="token punctuation">(</span><span class="token string">&quot;\u9ED8\u8BA4\u540D\u5B57&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">s_Age</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> String<span class="token operator">&amp;</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> s_Name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> s_Age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">showData</span><span class="token punctuation">(</span><span class="token keyword">const</span> Entity<span class="token operator">&amp;</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> e<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
   std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> e<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   Entity nameE <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u662F\u4E00\u4E2A\u6570\u7EC4\u800C\u4E0D\u662FString \u6240\u4EE5\u4E0D\u80FD\u76F4\u63A5\u5411\u6784\u9020\u51FD\u6570\u91CC\u4F20\u503C</span>
   Entity ageE <span class="token operator">=</span> <span class="token number">27</span><span class="token punctuation">;</span>

   Entity <span class="token function">nameE0</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   Entity nameE1 <span class="token operator">=</span> <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> nameE<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
   std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> nameE<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

   std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> ageE<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
   std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> ageE<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
   
   <span class="token comment">//\u8C03\u7528\u51FD\u6570\uFF0C\u4F20\u5165\u5BF9\u8C61</span>
   <span class="token function">showData</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">showData</span><span class="token punctuation">(</span><span class="token function">Entity</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">showData</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">showData</span><span class="token punctuation">(</span><span class="token function">Entity</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="explicit-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#explicit-\u5173\u952E\u5B57" aria-hidden="true">#</a> explicit \u5173\u952E\u5B57</h2><p>\u58F0\u660E\u6784\u9020\u51FD\u6570\u5FC5\u987B\u663E\u5F0F\u521B\u5EFA\u3002 \u6709\u52A9\u4E8E\u6211\u4EEC\u907F\u514Dbug\u6216\u6027\u80FD\u95EE\u9898\u3002</p><p>\u6700\u5927\u6536\u83B7\u662F\u8981\u610F\u8BC6\u5230\u9690\u5F0F\u6784\u9020\u51FD\u6570\u7684\u5B58\u5728\u3002</p>`,8);function t(o,e){return p}var l=n(a,[["render",t]]);export{l as default};
