import{_ as n,f as s}from"./app.52f3483b.js";const a={},p=s(`<h1 id="_12-c-\u6761\u4EF6\u5206\u652F\u8BED\u53E5-if\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_12-c-\u6761\u4EF6\u5206\u652F\u8BED\u53E5-if\u8BED\u53E5" aria-hidden="true">#</a> 12. C++\u6761\u4EF6\u5206\u652F\u8BED\u53E5\uFF08if\u8BED\u53E5\uFF09</h1><h2 id="\u6761\u4EF6\u8BED\u53E5-\u5206\u652F\u8BED\u53E5-if\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u8BED\u53E5-\u5206\u652F\u8BED\u53E5-if\u8BED\u53E5" aria-hidden="true">#</a> \u6761\u4EF6\u8BED\u53E5 / \u5206\u652F\u8BED\u53E5 / if\u8BED\u53E5</h2><p>\u5728\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6839\u636E\u6761\u4EF6\u8BED\u53E5\u5224\u65AD\u6267\u884C\u54EA\u4E2A\u5206\u652F\u3002\u4ED6\u5B9E\u9645\u4E0A\u662F\u673A\u5668\u6307\u4EE4\u3002\u5224\u65AD\u6267\u884C\u54EA\u4E00\u6BB5CPU\u6307\u4EE4\u3002</p><blockquote><p>\u6240\u6709\u7684\u6267\u884C\u6307\u4EE4\u90FD\u5B58\u50A8\u5728\u4E86\u5185\u5B58\u4E2D\u3002\u90A3\u4E48\u6761\u4EF6\u8BED\u53E5\u5B9E\u9645\u4E0A\u662F\u5728\u6267\u884C\u8DF3\u8F6C\u5230\u8BE5\u6307\u4EE4\u7684\u884C\u4E3A\u3002 \u5728\u5185\u5B58\u548C\u5206\u652F\u4E4B\u95F4\u8DF3\u8F6C\u7684\u884C\u4E3A\u3002\u5E76\u5728\u6B64\u6267\u884C\u6307\u4EE4\u3002</p></blockquote><h2 id="\u4EE3\u7801\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u4F18\u5316" aria-hidden="true">#</a> \u4EE3\u7801\u4F18\u5316</h2><blockquote><p>\u8FD9\u4E5F\u8BF4\u660E\u4E86if\u8BED\u53E5\u548C\u5206\u652F\u901A\u5E38\u4F1A\u6709\u6BD4\u8F83\u5927\u7684\u5F00\u9500\u3002\u5982\u679C\u9700\u8981\u5199\u5FEB\u901F\u4EE3\u7801\uFF0C\u53EF\u80FD\u51B3\u5B9A\u6839\u672C\u4E0D\u4F7F\u7528if\u8BED\u53E5\u3002</p></blockquote><p>\u4EE3\u7801\u4F18\u5316\u907F\u514D\u4F7F\u7528\u5206\u652F\uFF0C\u907F\u514D\u4F7F\u7528if</p><h2 id="bool\u503C-\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#bool\u503C-\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> bool\u503C ==\u64CD\u4F5C\u7B26</h2><p>\u68C0\u67E5\u4E24\u4E2A\u6570\u7684\u5185\u5B58\u4EE5\u786E\u4FDD\u5B83\u4EEC\u76F8\u7B49\u3002</p><blockquote><p>\u8FD9\u4E9B\u64CD\u4F5C\u7B26\uFF0C\u5728\u6807\u51C6\u5E93\u7C7B\u6709\u786E\u5B9A\u7684\u5E94\u7528\u65B9\u5F0F\u3002 \u5982\u6574\u6570\u6216\u5927\u90E8\u5206\u539F\u59CB\u6570\u636E\u7ED3\u6784\u4E2D\uFF0C\u68C0\u67E5\u4E24\u4E2A\u6570\u662F\u5426\u76F8\u7B49\uFF0C\u57FA\u672C\u4E0A\u662F\u83B7\u53D6\u4ED6\u4EEC4\u4E2A\u5B57\u8282\u7684\u5185\u5B58\uFF0C\u6BD4\u8F83\u6BCF\u4E2A\u5B57\u8282\u3002\u4E3A\u4E86\u786E\u5B9A\u8FD9\u4E24\u4E2A\u6574\u6570\u76F8\u7B49\uFF0C\u5185\u5B58\u7684\u6BCF\u4E00\u4F4D\u90FD\u5FC5\u987B\u76F8\u540C\u3002</p></blockquote><h2 id="\u5728\u8C03\u8BD5\u6A21\u5F0F\u4E0B-\u53F3\u952E\u8BE5\u884C\u4EE3\u7801-\u8F6C\u5230\u53CD\u6C47\u7F16\u3002-\u4ECE\u6C47\u7F16\u53BB\u67E5\u770Bcpu\u6267\u884C\u4E86\u4EC0\u4E48\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5728\u8C03\u8BD5\u6A21\u5F0F\u4E0B-\u53F3\u952E\u8BE5\u884C\u4EE3\u7801-\u8F6C\u5230\u53CD\u6C47\u7F16\u3002-\u4ECE\u6C47\u7F16\u53BB\u67E5\u770Bcpu\u6267\u884C\u4E86\u4EC0\u4E48\u6307\u4EE4" aria-hidden="true">#</a> \u5728\u8C03\u8BD5\u6A21\u5F0F\u4E0B \u53F3\u952E\u8BE5\u884C\u4EE3\u7801 \uFF0C\u8F6C\u5230\u53CD\u6C47\u7F16\u3002 \u4ECE\u6C47\u7F16\u53BB\u67E5\u770BCPU\u6267\u884C\u4E86\u4EC0\u4E48\u6307\u4EE4</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241CD0  push        rbp  
<span class="token number">00007FF</span><span class="token number">75</span>D241CD2  push        rdi  
<span class="token number">00007FF</span><span class="token number">75</span>D241CD3  sub         rsp<span class="token punctuation">,</span><span class="token number">128</span>h  
<span class="token number">00007FF</span><span class="token number">75</span>D241CDA  lea         rbp<span class="token punctuation">,</span><span class="token punctuation">[</span>rsp<span class="token operator">+</span><span class="token number">20</span>h<span class="token punctuation">]</span>  
<span class="token number">00007FF</span><span class="token number">75</span>D241CDF  lea         rcx<span class="token punctuation">,</span><span class="token punctuation">[</span>__89B6A1B7_Main@<span class="token function">cpp</span> <span class="token punctuation">(</span><span class="token number">07FF</span><span class="token number">75</span>D2530E3h<span class="token punctuation">)</span><span class="token punctuation">]</span>  
<span class="token number">00007FF</span><span class="token number">75</span>D241CE6  call        <span class="token function">__CheckForDebuggerJustMyCode</span> <span class="token punctuation">(</span><span class="token number">07FF</span><span class="token number">75</span>D2413F2h<span class="token punctuation">)</span>  
	<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
	<span class="token comment">//\u5C066 move \u5230\u5BC4\u5B58x\u4E2D</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241CEB  mov         dword ptr <span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">6</span>  
	bool comparisonResult <span class="token operator">=</span> x <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token comment">//\u5C065 \u52A0\u8F7D\u5230x\u5BC4\u5B58\u5668\u4E2D</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241CF2  cmp         dword ptr <span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">5</span>  
<span class="token comment">//jump not equal  \u5982\u679C\u4ED6\u4EEC\u4E0D\u76F8\u7B49-\u300B\u8DF3\u8F6C\u523007FF75D241D04h \u5185\u5B58\u5730\u5740\u4E2D</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241CF6  jne         main<span class="token operator">+</span><span class="token number">34</span>h <span class="token punctuation">(</span><span class="token number">07FF</span><span class="token number">75</span>D241D04h<span class="token punctuation">)</span>  

<span class="token number">00007FF</span><span class="token number">75</span>D241CF8  mov         dword ptr <span class="token punctuation">[</span>rbp<span class="token operator">+</span><span class="token number">0F</span><span class="token number">4</span>h<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span>  <span class="token comment">//\u8FD9\u91CC\u672A\u6267\u884C\uFF0C\u56E0\u4E3Abool\u4E3Afalse</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241D02  jmp         main<span class="token operator">+</span><span class="token number">3</span>Eh <span class="token punctuation">(</span><span class="token number">07FF</span><span class="token number">75</span>D241D0Eh<span class="token punctuation">)</span>  <span class="token comment">//\u672A\u6267\u884C</span>
<span class="token comment">// \u7531\u4E8E\u5B83\u4E0D\u76F8\u7B49\uFF0C\u8DF3\u5230\u4E86\u8BE5\u884C\u4EE3\u7801 -&gt;  mov \u5C060\u79FB\u52A8\u5230\u4E86\u8BE5\u5BC4\u5B58\u5668  rbp+\u4E00\u5B9A\u7684\u504F\u79FB\u91CF \u5C060\u8D4B\u503C\u5230bool\u53D8\u91CF</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241D04  mov         dword ptr <span class="token punctuation">[</span>rbp<span class="token operator">+</span><span class="token number">0F</span><span class="token number">4</span>h<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span>  

<span class="token number">00007FF</span><span class="token number">75</span>D241D0E  movzx       eax<span class="token punctuation">,</span>byte ptr <span class="token punctuation">[</span>rbp<span class="token operator">+</span><span class="token number">0F</span><span class="token number">4</span>h<span class="token punctuation">]</span>  <span class="token comment">//?</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241D15  mov         byte ptr <span class="token punctuation">[</span>comparisonResult<span class="token punctuation">]</span><span class="token punctuation">,</span>al   <span class="token comment">//?</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>comparisonResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241D18  movzx       eax<span class="token punctuation">,</span>byte ptr <span class="token punctuation">[</span>comparisonResult<span class="token punctuation">]</span>  
<span class="token number">00007FF</span><span class="token number">75</span>D241D1C  test        eax<span class="token punctuation">,</span>eax   <span class="token comment">//\u6D4B\u8BD5eax\u5BC4\u5B58\u5668\u662F\u5426\u901A\u8FC7\u6761\u4EF6 -&gt;\u5BF9\u4E24\u4E2A\u5BC4\u5B58\u5668\u8FDB\u884C\u903B\u8F91\u53CA\u8FD0\u7B97</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241D1E  je          main<span class="token operator">+</span><span class="token number">5</span>Ch <span class="token punctuation">(</span><span class="token number">07FF</span><span class="token number">75</span>D241D2Ch<span class="token punctuation">)</span>  <span class="token comment">//\u6210\u529F jump equal -&gt;\u8DF3\u8F6C\u51FD\u6570</span>
		<span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//\u5C06\u503C\u52A0\u8F7D\u5230rxc\u5BC4\u5B58\u5668\u4E2D</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241D20  lea         rcx<span class="token punctuation">,</span><span class="token punctuation">[</span>string <span class="token string">&quot;Hello World&quot;</span> <span class="token punctuation">(</span><span class="token number">07FF</span><span class="token number">75</span>D24AC38h<span class="token punctuation">)</span><span class="token punctuation">]</span>  
<span class="token number">00007FF</span><span class="token number">75</span>D241D27  call        <span class="token function">Log</span> <span class="token punctuation">(</span><span class="token number">07FF</span><span class="token number">75</span>D24134Dh<span class="token punctuation">)</span>  
	<span class="token punctuation">}</span>
	std<span class="token operator">::</span>cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">00007FF</span><span class="token number">75</span>D241D2C  mov         rcx<span class="token punctuation">,</span>qword ptr <span class="token punctuation">[</span>__imp_std<span class="token operator">::</span><span class="token function">cin</span> <span class="token punctuation">(</span><span class="token number">07FF</span><span class="token number">75</span>D251190h<span class="token punctuation">)</span><span class="token punctuation">]</span>  
<span class="token number">00007FF</span><span class="token number">75</span>D241D33  call        qword ptr <span class="token punctuation">[</span>__imp_std<span class="token operator">::</span>basic_istream<span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token punctuation">,</span>std<span class="token operator">::</span>char_traits<span class="token operator">&lt;</span><span class="token keyword">char</span><span class="token operator">&gt;</span> <span class="token operator">&gt;</span><span class="token operator">::</span><span class="token function">get</span> <span class="token punctuation">(</span><span class="token number">07FF</span><span class="token number">75</span>D251150h<span class="token punctuation">)</span><span class="token punctuation">]</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><blockquote><p>\u5E38\u719F\u6298\u53E0\uFF1A\u5F53\u90FD\u662F\u5E38\u6570\u7684\u65F6\u5019\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5728\u7F16\u8BD1\u9636\u6BB5\u8FDB\u884C\u8FD0\u7B97\u5E76\u4F18\u5316\u3002</p></blockquote><h2 id="\u9010\u884C\u6267\u884C-\u53EF\u4EE5\u4E0D\u8981\u82B1\u62EC\u53F7\u4F46\u662F\u5FC5\u987B\u5199\u5728\u4E0B\u4E00\u884C" tabindex="-1"><a class="header-anchor" href="#\u9010\u884C\u6267\u884C-\u53EF\u4EE5\u4E0D\u8981\u82B1\u62EC\u53F7\u4F46\u662F\u5FC5\u987B\u5199\u5728\u4E0B\u4E00\u884C" aria-hidden="true">#</a> \u9010\u884C\u6267\u884C \u53EF\u4EE5\u4E0D\u8981\u82B1\u62EC\u53F7\u4F46\u662F\u5FC5\u987B\u5199\u5728\u4E0B\u4E00\u884C</h2><h2 id="if\u6761\u4EF6\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#if\u6761\u4EF6\u6280\u5DE7" aria-hidden="true">#</a> if\u6761\u4EF6\u6280\u5DE7</h2><p>0\u662Ffalse,\u5176\u4ED6\u662Ftrue\u3002 \u5224\u65AD\u4E00\u4E2A\u6307\u9488\u662F\u5426\u4E3Anull\uFF0Cnull\u662F0 \u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> ptr<span class="token operator">=</span>nullptr<span class="token punctuation">;</span> \u662Ffalse   <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> ptr<span class="token operator">=</span><span class="token string">&quot;Hello&quot;</span>\u3002 \u662Ftrue
<span class="token keyword">if</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span> <span class="token comment">//\u5224\u65AD\u6307\u9488\u662F\u5426\u4E3A\u6709\u6548\u503C</span>
<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>nullptr \u7A7A\u6307\u9488</p></blockquote><h2 id="else-if-\u5176\u5B9E\u4E0D\u662Fc-\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#else-if-\u5176\u5B9E\u4E0D\u662Fc-\u5173\u952E\u5B57" aria-hidden="true">#</a> else if \u5176\u5B9E\u4E0D\u662FC++\u5173\u952E\u5B57</h2><p>\u5176\u5B9E\u662Felse \u548Cif\u5408\u5E76\u8D77\u6765 \u5C31\u50CF</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">if</span><span class="token punctuation">(</span>false<span class="token punctuation">)</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span><span class="token keyword">else</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u7F16\u7A0B\u5206\u4E3A\u903B\u8F91\u7F16\u7A0B\u548C\u6570\u5B66\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5206\u4E3A\u903B\u8F91\u7F16\u7A0B\u548C\u6570\u5B66\u7F16\u7A0B" aria-hidden="true">#</a> \u7F16\u7A0B\u5206\u4E3A\u903B\u8F91\u7F16\u7A0B\u548C\u6570\u5B66\u7F16\u7A0B</h2><p>\u5927\u591A\u6570\u5FEB\u901F\u4EE3\u7801\u90FD\u50CF\u662F\u6570\u5B66\u8FD0\u7B97\u3002 \u903B\u8F91\u7F16\u7A0B\u5C31\u662F\uFF0C\u8BA9\u8FD9\u4E2A\u53BB\u8FD9\u4E2A\uFF0C\u90A3\u4E2A\u53BB\u5E72\u90A3\u4E2A\uFF0C\u5982\u679C \u7136\u540E\u3002\u3002</p><h2 id="\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD" aria-hidden="true">#</a> \u6027\u80FD</h2><p>if else\u4F1A\u727A\u7272\u76F8\u5F53\u591A\u7684\u6027\u80FD\u3002\u591A\u53BB\u505A\u6570\u5B66\u7F16\u7A0B\u884C\u4E3A</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><blockquote><p>if else \u5728\u5185\u5B58\u4E2D\u7684\u64CD\u4F5C\u884C\u4E3A\uFF0C\u5B9E\u9645\u4E0A\u662F\u5411\u5BC4\u5B58\u5668\u5199\u503C\uFF0C\u7136\u540E\u503C\u4E0E\u503C\u4E4B\u95F4\u505A\u6BD4\u5BF9\uFF0C\u8F93\u51FAbool\u7ED3\u679C0\u8868\u793Afalse\uFF0C\u5176\u4ED6\u8868\u793Atrue\u3002\u6839\u636Ebool\u8DF3\u8F6C\u81F3\u5BF9\u5E94\u7684\u51FD\u6570\u5185\u5B58\u5730\u5740\uFF0C\u6267\u884C\u5BF9\u5E94\u7684\u8BA1\u7B97\u673A\u6307\u4EE4\u4EE3\u7801\u5757\u3002 nullptr=0\uFF1B \u6240\u4EE5\u4E5F\u53EF\u4EE5\u9A8C\u8BC1\u7A7A\u6307\u9488\u3002 if else\u4F1A\u727A\u7272\u6027\u80FD\uFF0C\u6240\u4EE5\u591A\u53BB\u7528\u6570\u5B66\u903B\u8F91\u3002</p></blockquote>`,27);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};
