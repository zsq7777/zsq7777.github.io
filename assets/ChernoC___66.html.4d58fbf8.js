import{_ as n,f as a}from"./app.593d268f.js";const s={},p=a(`<h1 id="_66-c-\u7684\u7C7B\u578B\u53CC\u5173" tabindex="-1"><a class="header-anchor" href="#_66-c-\u7684\u7C7B\u578B\u53CC\u5173" aria-hidden="true">#</a> 66. C++\u7684\u7C7B\u578B\u53CC\u5173</h1><p>\u7C7B\u578B\u53CC\u5173\u7528\u6765\u518DC++\u4E2D\u7ED5\u8FC7\u7C7B\u578B\u7CFB\u7EDF\u3002</p><p>\u8BF8\u5982C++,java,python\u90FD\u662F\u5F3A\u7C7B\u578B\u8BED\u8A00\uFF0C\u521B\u5EFA\u53D8\u91CF\u65F6\u9700\u8981\u5F3A\u5236\u58F0\u660E\u53D8\u91CF\u3002</p><h2 id="_1-\u64CD\u4F5C\u5185\u5B58-\u7ED5\u5F00\u7C7B\u578B\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_1-\u64CD\u4F5C\u5185\u5B58-\u7ED5\u5F00\u7C7B\u578B\u9650\u5236" aria-hidden="true">#</a> 1. \u64CD\u4F5C\u5185\u5B58\uFF0C\u7ED5\u5F00\u7C7B\u578B\u9650\u5236</h2><ol><li>int\u5411double\u8F6C\u6362\uFF0C\u4F1A\u81EA\u52A8\u9690\u5F0F\u8F6C\u6362\u4E3Adouble\u7684\u5185\u5B58\u3002</li></ol><h2 id="_2-\u5C06int\u7684\u5185\u5B58\u590D\u5236\u5230double\u4E2D" tabindex="-1"><a class="header-anchor" href="#_2-\u5C06int\u7684\u5185\u5B58\u590D\u5236\u5230double\u4E2D" aria-hidden="true">#</a> 2. \u5C06int\u7684\u5185\u5B58\u590D\u5236\u5230double\u4E2D</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>  <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
  std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
  std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> b <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token number">10</span>
  -9.25596e+61
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u663E\u7136\u8F93\u51FA\u7684\u4E0D\u5BF9\uFF0C\u4ECE\u5185\u5B58\u4E2D\u89C2\u5BDF</p><p>a\u662F</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token number">0</span>a <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span> cc cc cc cc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>b\u662F,\u5269\u4E0B\u7684\u662F\u672A\u521D\u59CB\u5316\u7684\u5185\u5B58</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token number">0</span>a <span class="token number">00</span> <span class="token number">00</span> <span class="token number">00</span> cc cc cc cc cc cc cc cc cc cc cc cc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-int\u5F53\u6210double\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_3-int\u5F53\u6210double\u8BBF\u95EE" aria-hidden="true">#</a> 3. int\u5F53\u6210double\u8BBF\u95EE</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>  <span class="token keyword">double</span><span class="token operator">&amp;</span> b <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6837\u51FA\u73B0\u7684\u95EE\u9898\u5C31\u662F\uFF0C\u4ED6\u7684\u5185\u5B58\u53EA\u67094\u4E2A\u5B57\u8282\uFF0C\u4F46\u662Fdouble\u5141\u8BB8\u8D85\u8FC74\u4E2A\u5B57\u8282\uFF0C\u8FD9\u5C31\u4F1A\u51FA\u73B0\u95EE\u9898\u3002</p><h2 id="_4-\u901A\u8FC7\u5185\u5B58\u8BBF\u95EE\u7C7B\u7684\u6570\u636E-\u50CF\u8BBF\u95EE\u6570\u7EC4\u4E00\u6837\u8BBF\u95EE\u7C7B" tabindex="-1"><a class="header-anchor" href="#_4-\u901A\u8FC7\u5185\u5B58\u8BBF\u95EE\u7C7B\u7684\u6570\u636E-\u50CF\u8BBF\u95EE\u6570\u7EC4\u4E00\u6837\u8BBF\u95EE\u7C7B" aria-hidden="true">#</a> 4. \u901A\u8FC7\u5185\u5B58\u8BBF\u95EE\u7C7B\u7684\u6570\u636E, \u50CF\u8BBF\u95EE\u6570\u7EC4\u4E00\u6837\u8BBF\u95EE\u7C7B</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	Entity e <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>e<span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_5-\u64CD\u4F5C\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#_5-\u64CD\u4F5C\u5185\u5B58" aria-hidden="true">#</a> 5. \u64CD\u4F5C\u5185\u5B58</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	<span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>e <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5C06\u5BF9\u8C61\u5185\u5B58\u4F4D\u7F6E\u524D\u79FB4\u4E2A\u5B57\u8282,\u8F6C\u6362\uFF0C\u5C31\u53EF\u4EE5\u83B7\u5F978</span>
	<span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>e<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">//char\u524D\u79FB3\u4E2A\u5B57\u8282\uFF0C\u4E5F\u662F\u540C\u6837\u7684\u7ED3\u679C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E2A\u4EBA\u601D\u8003" tabindex="-1"><a class="header-anchor" href="#\u4E2A\u4EBA\u601D\u8003" aria-hidden="true">#</a> \u4E2A\u4EBA\u601D\u8003</h2><p>\u6570\u7EC4\u7684\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u662F\u5F3A\u5236\u7C7B\u578B\uFF0C\u6240\u4EE5\u6BCF\u6B21\u7684\u67E5\u627E\u53EA\u9700\u8981\u4F4D\u79FB\u7684\u5B57\u8282\uFF0C\u800C\u8BBF\u95EE\u7C7B\u4E2D\u53D8\u91CF\u7684\u5185\u5B58\u4E5F\u662F\u5BF9\u4E8E\u5B57\u8282\u7684\u4F4D\u79FB\u3002</p><p>\u6240\u4EE5\u6570\u7EC4\u548C\u540C\u7C7B\u578B\u53D8\u91CF,\u5728\u5185\u5B58\u4E2D\u662F\u4E00\u6837\u7684\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Entity</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity e <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	

	<span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="reinterpret-cast\u53EF\u4EE5\u505A\u540C\u6837\u7684\u4E8B" tabindex="-1"><a class="header-anchor" href="#reinterpret-cast\u53EF\u4EE5\u505A\u540C\u6837\u7684\u4E8B" aria-hidden="true">#</a> reinterpret_cast\u53EF\u4EE5\u505A\u540C\u6837\u7684\u4E8B</h2><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u5B9E\u9645\u4E0A\u7C7B\u578B\u53CC\u5173\uFF0C\u5C31\u662F\u5C06\u4E00\u4E2A\u7C7B\u578B\u7684\u6307\u9488\u8F6C\u6362\u4E3A\u53E6\u4E00\u4E2A\u7C7B\u578B\u4F7F\u7528\u3002</p>`,28);function e(t,o){return p}var l=n(s,[["render",e]]);export{l as default};
