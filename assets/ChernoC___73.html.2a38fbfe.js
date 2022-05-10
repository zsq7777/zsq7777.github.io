import{_ as c,r as o,o as l,a as r,b as n,d as e,w as t,F as i,e as s,f as p}from"./app.28a0acac.js";const u={},d=n("h1",{id:"_73-c-\u7684dynamic-cast",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_73-c-\u7684dynamic-cast","aria-hidden":"true"},"#"),s(" 73. C++\u7684dynamic_cast")],-1),b=n("p",null,[s("dynamic_cast\u7528\u4E8E\u5B50\u7C7B\u4E0E\u7236\u7C7B\u95F4\u7684\u5411\u4E0B\u7C7B\u578B\u8F6C\u6362\uFF0C \u53EA\u5E94\u7528\u4E8E"),n("strong",null,"\u591A\u6001\u7C7B"),s("\u7C7B\u578B")],-1),k=n("p",null,"\u800C\u5411\u4E0A\u7684\u7C7B\u578B\u8F6C\u6362\u5F80\u5F80\u662F\u9690\u5F0F\u8F6C\u6362\u5B8C\u6210\u7684\u3002",-1),m=n("h2",{id:"_1-\u7EE7\u627F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u7EE7\u627F","aria-hidden":"true"},"#"),s(" 1. \u7EE7\u627F")],-1),h=s("\u8BE6\u7EC6\u53EF\u89C1"),_=s("C++\u7EE7\u627F"),y=p(`<div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>class Entity {
public:
	void print() {
		std::cout &lt;&lt; &quot;\u57FA\u7C7B\u6253\u5370&quot; &lt;&lt; std::endl;
	}
};

class Player : public Entity{

};

class Enemy : public Entity {

};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_2-c\u98CE\u683C\u7684\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-c\u98CE\u683C\u7684\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 2. C\u98CE\u683C\u7684\u7C7B\u578B\u8F6C\u6362</h2><h3 id="_2-1-\u5411\u4E0A\u8F6C\u578B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5411\u4E0A\u8F6C\u578B" aria-hidden="true">#</a> 2.1 \u5411\u4E0A\u8F6C\u578B</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	Entity<span class="token operator">*</span> e <span class="token operator">=</span> new <span class="token function">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-2-\u5411\u4E0B\u8F6C\u578B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5411\u4E0B\u8F6C\u578B" aria-hidden="true">#</a> 2.2 \u5411\u4E0B\u8F6C\u578B</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	Player<span class="token operator">*</span> p <span class="token operator">=</span> <span class="token punctuation">(</span>Player<span class="token operator">*</span><span class="token punctuation">)</span>new <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6837\u7684\u8F6C\u6362\u4E0B\uFF0C\u4F7F\u7528Player\u4E2D\u7279\u5B9A\u7684\u5C5E\u6027\u6216\u51FD\u6570\uFF0C\u5C31\u4F1A\u51FA\u73B0\u8FD0\u884C\u65F6\u9519\u8BEF/\u6216\u8005\u6211\u4EEC\u4E0D\u60F3\u9884\u89C1\u7684\u7ED3\u679C\u3002</p><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3>`,8),f=s("C\u7684\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF0C\u53EF\u4EE5\u5C06\u7C7B\u578B\u8F6C\u6210\u4EFB\u610F\u7C7B\u578B\u3002 \u5177\u4F53\u53EF\u89C1 "),g=s("C++\u7684\u7C7B\u578B\u53CC\u5173"),v=p(`<h2 id="_3-c-\u98CE\u683C\u7684\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_3-c-\u98CE\u683C\u7684\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 3. C++\u98CE\u683C\u7684\u7C7B\u578B\u8F6C\u6362</h2><h3 id="_3-1-dynamic-cast\u53EA\u5E94\u7528\u4E8E\u591A\u6001\u7C7B-\u7ED9\u57FA\u7C7B\u52A0\u4E0A\u4E00\u4E2A\u865A\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-1-dynamic-cast\u53EA\u5E94\u7528\u4E8E\u591A\u6001\u7C7B-\u7ED9\u57FA\u7C7B\u52A0\u4E0A\u4E00\u4E2A\u865A\u65B9\u6CD5" aria-hidden="true">#</a> 3.1 dynamic_cast\u53EA\u5E94\u7528\u4E8E\u591A\u6001\u7C7B\uFF0C\u7ED9\u57FA\u7C7B\u52A0\u4E0A\u4E00\u4E2A\u865A\u65B9\u6CD5</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>class Entity <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	virtual <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u57FA\u7C7B\u6253\u5370&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-2-\u4ED6\u4F1A\u81EA\u4E0B\u800C\u4E0A\u68C0\u67E5-\u5982\u679C\u5E76\u975E\u5305\u542B-\u76F8\u7B49\u5173\u7CFB-\u5C31\u4F1A\u8FD4\u56DEnull-\u53EF\u4EE5\u907F\u514Dc\u98CE\u683C\u7C7B\u578B\u8F6C\u5316\u6240\u51FA\u73B0\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4ED6\u4F1A\u81EA\u4E0B\u800C\u4E0A\u68C0\u67E5-\u5982\u679C\u5E76\u975E\u5305\u542B-\u76F8\u7B49\u5173\u7CFB-\u5C31\u4F1A\u8FD4\u56DEnull-\u53EF\u4EE5\u907F\u514Dc\u98CE\u683C\u7C7B\u578B\u8F6C\u5316\u6240\u51FA\u73B0\u7684\u95EE\u9898" aria-hidden="true">#</a> 3.2 \u4ED6\u4F1A\u81EA\u4E0B\u800C\u4E0A\u68C0\u67E5\uFF0C\u5982\u679C\u5E76\u975E\u5305\u542B/\u76F8\u7B49\u5173\u7CFB,\u5C31\u4F1A\u8FD4\u56DEnull,\u53EF\u4EE5\u907F\u514DC\u98CE\u683C\u7C7B\u578B\u8F6C\u5316\u6240\u51FA\u73B0\u7684\u95EE\u9898</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>
<span class="token keyword">void</span> <span class="token function">checkNullptr</span><span class="token punctuation">(</span>Entity<span class="token operator">*</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">checkNullptr</span><span class="token punctuation">(</span>Entity<span class="token operator">*</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> nullptr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u7A7A\u6307\u9488&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u975E\u7A7A\u6307\u9488&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity<span class="token operator">*</span> a <span class="token operator">=</span> new <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	Player<span class="token operator">*</span> b <span class="token operator">=</span> new <span class="token function">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	Enemy<span class="token operator">*</span> c <span class="token operator">=</span> new <span class="token function">Enemy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	Entity<span class="token operator">*</span> b2a <span class="token operator">=</span> b<span class="token punctuation">;</span> <span class="token comment">// B \u8F6C\u5316\u4E3A A</span>
	Player<span class="token operator">*</span> b2a2b <span class="token operator">=</span> dynamic_cast<span class="token operator">&lt;</span>Player<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>b2a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8F6C\u56DE\u53BB</span>
	<span class="token function">checkNullptr</span><span class="token punctuation">(</span>b2a2b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	Player<span class="token operator">*</span> a2b <span class="token operator">=</span> dynamic_cast<span class="token operator">&lt;</span>Player<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">checkNullptr</span><span class="token punctuation">(</span>a2b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="_4-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_4-\u539F\u7406" aria-hidden="true">#</a> 4. \u539F\u7406</h3><p>\u4ED6\u5B58\u50A8\u4E86\u8FD0\u884C\u65F6\u7C7B\u578B\u4FE1\u606F(runtime type information)RTTI ,\u5B58\u50A8\u4E86\u6211\u4EEC\u8FD0\u884C\u65F6\u7684\u7C7B\u578B\u4FE1\u606F\u3002 \u8FD9\u4F1A\u589E\u52A0\u5185\u5B58\u7684\u5F00\u9500\u3002</p><p>\u5982\u679C\u6211\u4EEC\u5173\u95ED\u4E86RTTI,\u90A3\u4E48\u5C31\u65E0\u6CD5\u5B8C\u6210cast\u7684\u52A8\u6001\u7C7B\u578B\u8F6C\u6362\u3002</p>`,8);function x(C,E){const a=o("RouterLink");return l(),r(i,null,[d,b,k,m,n("p",null,[h,e(a,{to:"/nodes/c/chernocpp/ChernoC++_27.html"},{default:t(()=>[_]),_:1})]),y,n("p",null,[f,e(a,{to:"/nodes/c/chernocpp/ChernoC++_27.html"},{default:t(()=>[g]),_:1})]),v],64)}var P=c(u,[["render",x]]);export{P as default};
