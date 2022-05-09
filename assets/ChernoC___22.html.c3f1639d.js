import{_ as n,f as s}from"./app.024c5519.js";var a="/assets/image.636b562c.png";const p={},t=s(`<h1 id="_22-c-\u7C7B\u548C\u7ED3\u6784\u4F53\u4E2D\u7684\u9759\u6001" tabindex="-1"><a class="header-anchor" href="#_22-c-\u7C7B\u548C\u7ED3\u6784\u4F53\u4E2D\u7684\u9759\u6001" aria-hidden="true">#</a> 22. C++\u7C7B\u548C\u7ED3\u6784\u4F53\u4E2D\u7684\u9759\u6001</h1><h2 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h2><p>\u5728\u4E00\u4E2A\u7C7B\u6216\u7ED3\u6784\u4F53\u4E2D\uFF0C \u5982\u679C\u628A\u5B83\u548C\u53D8\u91CF\u4E00\u8D77\u4F7F\u7528\uFF0C\u8FD9\u4E2A\u7C7B\u7684\u6240\u6709\u5B9E\u4F8B\u4E2D\u8FD9\u4E2A\u53D8\u91CF\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\u3002</p><p>\u6240\u4EE5\uFF0C\u901A\u8FC7\u7C7B\u7684\u5B9E\u4F8B\u8BBF\u95EE\u9759\u6001\u53D8\u91CF\u662F\u6CA1\u6709\u610F\u4E49\u7684\u3002</p><h2 id="\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528" aria-hidden="true">#</a> \u5E94\u7528</h2><p>\u5C31\u50CF\uFF0C\u7C7B\u7684\u5168\u5C40\u5B9E\u4F8B\uFF0C\u9759\u6001\u65B9\u6CD5\u4E5F\u662F\u6837\uFF0C\u65E0\u6CD5\u8BBF\u95EE\u7C7B\u7684\u5B9E\u4F8B\u3002 \u9759\u6001\u65B9\u6CD5\u4E5F\u662F\u4E00\u6837\uFF0C\u65E0\u6CD5\u8BBF\u95EE\u7C7B\u7684\u5B9E\u4F8B\u3002</p><ul><li>\u9759\u6001\u65B9\u6CD5\u53EF\u4EE5\u88AB\u8C03\u7528\uFF0C\u4E0D\u9700\u8981\u901A\u8FC7\u7C7B\u7684\u5B9E\u4F8B\u3002</li><li>\u5728\u9759\u6001\u65B9\u6CD5\u5185\u90E8\uFF0C\u4F60\u4E0D\u80FD\u5199\u5F15\u7528\u5230\u7C7B\u5B9E\u4F8B\u7684\u4EE3\u7801\uFF0C\u56E0\u4E3A\u4F60\u4E0D\u80FD\u5F15\u7528\u5230\u7C7B\u7684\u5B9E\u4F8B</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u975E\u9759\u6001\u53D8\u91CF\u7684\u521D\u59CB\u5316\u53CA\u4F7F\u7528</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">struct</span> <span class="token class-name">Entity</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	e<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	Entity e1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//\u521D\u59CB\u5316\u5668\u521D\u59CB\u5316</span>
	e<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	e1<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u9759\u6001\u53D8\u91CF\u7684\u521D\u59CB\u5316\u53CA\u4F7F\u7528\uFF0C\u8FD9\u6837\u5199\u4F1A\u62A5\u9519\u672A\u627E\u5230x,y</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Entity</span>
<span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	e<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	Entity e1<span class="token punctuation">;</span>
	e1<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	e1<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
	e<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	e1<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><img src="`+a+`" alt="\u56FE\u7247" loading="lazy"></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u589E\u52A0\u5BF9\u53D8\u91CF\u7684\u5B9A\u4E49\uFF0C\u94FE\u63A5\u5668\u4F1A\u94FE\u63A5\u5230\u5408\u9002\u7684\u53D8\u91CF</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Entity</span>
<span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> Entity<span class="token operator">::</span>x<span class="token punctuation">;</span>
<span class="token keyword">int</span> Entity<span class="token operator">::</span>y<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	e<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	Entity e1<span class="token punctuation">;</span>
	e1<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u6837\u5F15\u7528\u6CA1\u6709\u610F\u4E49\uFF0C\u5B9E\u9645\u4E0A\u4F7F\u7528\u7684\u8FD8\u662F Entity::x=5</span>
	e1<span class="token punctuation">.</span>y<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">//</span>
	e<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	e1<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u8FD9\u6837\u5C31\u8F93\u51FA\u4E862\u6B215\u548C8\u3002</p><p>\u5F53\u6211\u4EEC\u5728\u7C7B\u4E2D\u58F0\u660E\u9759\u6001\u53D8\u91CF\u65F6\uFF0C\u5728\u8FD9\u4E2A\u7C7B\u4E2D\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A\u53D8\u91CF\u7684\u5B9E\u4F8B\u3002</p><h2 id="\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528" aria-hidden="true">#</a> \u4EC0\u4E48\u65F6\u5019\u4F7F\u7528</h2><p>\u5F53\u6211\u4EEC\u9700\u8981\u8DE8\u7C7B\u4F7F\u7528\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u8FD9\u6837\u505A\uFF0C\u6216\u8005\u58F0\u660E\u4E00\u4E2A\u9759\u6001\u5168\u5C40\u53D8\u91CF\uFF0C\u5B83\u662F\u5728\u5185\u90E8\u8FDB\u884C\u94FE\u63A5\u7684\u3002</p><p>\u4E3A\u4EC0\u4E48\u8981\u8FD9\u6837\u505A\uFF1F</p><p>\u6211\u9700\u8981\u5728\u6240\u6709\u7684Entity\u4E2D\u5171\u4EAB\u6570\u636E\uFF0C\u653E\u5728Entity\u4E2D\u662F\u6709\u610F\u4E49\u7684\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u58F0\u660E\u9759\u6001\u53D8\u91CF\u548C\u9759\u6001\u65B9\u6CD5\u548C\u5BF9\u5E94\u7684\u4F7F\u7528</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Entity</span>
<span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> Entity<span class="token operator">::</span>x<span class="token punctuation">;</span>
<span class="token keyword">int</span> Entity<span class="token operator">::</span>y<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Entity e; \u65E0\u9700\u518D\u5B9E\u4F8B\u5316</span>
	Entity<span class="token operator">::</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	Entity<span class="token operator">::</span>y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token comment">// Entity e1;</span>
	Entity<span class="token operator">::</span>x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u6837\u5F15\u7528\u6CA1\u6709\u610F\u4E49\uFF0C\u5B9E\u9645\u4E0A\u4F7F\u7528\u7684\u8FD8\u662F Entity::x=5</span>
	Entity<span class="token operator">::</span>y<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">//</span>
	Entity<span class="token operator">::</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	Entity<span class="token operator">::</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u975E\u9759\u6001\u53D8\u91CF\u65E0\u6CD5\u8BBF\u95EE\u9759\u6001\u65B9\u6CD5-\u300B-\u6362\u53E5\u8BDD\u8BF4-\u9759\u6001\u65B9\u6CD5\u65E0\u6CD5\u83B7\u53D6\u975E\u9759\u6001\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u975E\u9759\u6001\u53D8\u91CF\u65E0\u6CD5\u8BBF\u95EE\u9759\u6001\u65B9\u6CD5-\u300B-\u6362\u53E5\u8BDD\u8BF4-\u9759\u6001\u65B9\u6CD5\u65E0\u6CD5\u83B7\u53D6\u975E\u9759\u6001\u53D8\u91CF" aria-hidden="true">#</a> \u975E\u9759\u6001\u53D8\u91CF\u65E0\u6CD5\u8BBF\u95EE\u9759\u6001\u65B9\u6CD5-\u300B \u6362\u53E5\u8BDD\u8BF4 \u9759\u6001\u65B9\u6CD5\u65E0\u6CD5\u83B7\u53D6\u975E\u9759\u6001\u53D8\u91CF</h2><p>\u56E0\u4E3A\u9759\u6001\u65B9\u6CD5\u6CA1\u6709\u5B9E\u4F8B</p><p>\u6BCF\u4E2A\u975E\u9759\u6001\u65B9\u6CD5\u603B\u662F\u83B7\u5F97\u5F53\u524D\u7C7B\u7684\u4E00\u4E2A\u5B9E\u4F8B\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u5C31\u662F\u7C7B\u5728\u5E55\u540E\u7684\u5B9E\u9645\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u5728\u7C7B\u4E2D\u770B\u4E0D\u5230\u8FD9\u4E9B\u4E1C\u897F\u3002 \u4ED6\u4EEC\u901A\u8FC7\u9690\u85CF\u53C2\u6570\u53D1\u6325\u4F5C\u7528\uFF0C\u9759\u6001\u65B9\u6CD5\u4E0D\u4F1A\u5F97\u5230\u9690\u85CF\u53C2\u6570\uFF0C\u9759\u6001\u65B9\u6CD5\u4E0E\u5728\u7C7B\u5916\u90E8\u7F16\u5199\u65B9\u6CD5\u76F8\u540C</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4E00\u4E2A\u7C7B\u7684\u9759\u6001\u53D8\u91CF\u5B58\u5728\u4E0E\u8BE5\u7C7B\u7684\u6240\u6709\u5B9E\u4F8B\u4E2D\u3002 \u9759\u6001\u53D8\u91CF\u548C\u9759\u6001\u65B9\u6CD5\u5728\u7C7B\u4E2D\uFF0C\u975E\u9759\u6001\u53D8\u91CF/\u65B9\u6CD5\u662F\u65E0\u6CD5\u8BBF\u95EE\u7684\u3002 \uFF1F \u4E3A\u4EC0\u4E48</p><p>\u731C\u60F3\uFF1A\u9759\u6001\u65B9\u6CD5\u548C\u6570\u636E\u4E0E\u6BCF\u4E2A\u5B58\u50A8\u5B9E\u4F8B\u7684\u5185\u5B58\u7A7A\u95F4\u4E0D\u540C\uFF0C\u8BE5\u7C7B\u7684\u6240\u6709\u5B9E\u4F8B\u6307\u5411\u8BE5\u7C7B\u9759\u6001\u53D8\u91CF\u5730\u5740\uFF0C\u8FD9\u6837\u4ED6\u4EEC\u5C31\u53EF\u4EE5\u64CD\u4F5C\u540C\u4E00\u4E2A\u5730\u5740\u4E2D\u5185\u5B58\u7684\u6570\u636E\uFF0C\u90A3\u4E48\u9759\u6001\u65B9\u6CD5\u53BB\u8C03\u7528\u5B9E\u4F8B\u4E2D\u7684\u53D8\u91CF\u5C31\u9700\u8981\u4EE5\u67D0\u79CD\u65B9\u5F0F\u5B58\u50A8\u8BE5\u5B9E\u4F8B\u7684\u6307\u9488\uFF0C\u4F46\u662FC++\u6CA1\u6709\u63D0\u4F9B\u8FD9\u6837\u7684\u65B9\u5F0F\u3002</p><p>\u5728\u5916\u90E8\u4F7F\u7528\u9759\u6001\u53D8\u91CF\u5FC5\u987B\u58F0\u660E</p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\uFF1F</p>`,27);function e(c,o){return t}var r=n(p,[["render",e]]);export{r as default};
