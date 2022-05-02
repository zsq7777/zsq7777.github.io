import{_ as n,f as s}from"./app.05b86968.js";const a={},t=s(`<h1 id="_28-c-\u865A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_28-c-\u865A\u51FD\u6570" aria-hidden="true">#</a> 28. C++\u865A\u51FD\u6570</h1><p>\u5B50\u7C7B\u91CD\u5199\u65B9\u6CD5\u3002</p><blockquote><p>\u865A\u51FD\u6570\u5F15\u5165\u4E86\u4E00\u79CD\u53EB\u505ADynamic Dispatch(\u52A8\u6001\u8054\u7F16)\u7684\u4E1C\u897F\uFF0C\u5B83\u901A\u5E38\u901A\u8FC7v\u8868(\u865A\u51FD\u6570\u8868)\u6765\u5B9E\u73B0\u7F16\u8BD1\u3002v\u8868\u5C31\u662F\u4E00\u4E2A\u8868\uFF0C\u5B83\u5305\u542B\u57FA\u7C7B\u4E2D\u6240\u6709\u865A\u51FD\u6570\u7684\u6620\u5C04\uFF0C \u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u5728\u5B83\u8FD0\u884C\u65F6\uFF0C\u5C06\u4ED6\u4EEC\u94F6\u86C7\u5230\u6B63\u786E\u7684\u8986\u5199(override)\u51FD\u6570\u3002</p></blockquote><p>V\u8868\u65F6\u5982\u4F55\u8FD0\u4F5C\u7684\uFF1F</p><h2 id="\u5982\u679C\u6211\u4EEC\u9700\u8981\u8986\u5199-\u90A3\u4E48\u9700\u8981\u628A\u57FA\u7C7B\u7684\u51FD\u6570\u6807\u8BB0\u4E3A\u865A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u6211\u4EEC\u9700\u8981\u8986\u5199-\u90A3\u4E48\u9700\u8981\u628A\u57FA\u7C7B\u7684\u51FD\u6570\u6807\u8BB0\u4E3A\u865A\u51FD\u6570" aria-hidden="true">#</a> \u5982\u679C\u6211\u4EEC\u9700\u8981\u8986\u5199\uFF0C\u90A3\u4E48\u9700\u8981\u628A\u57FA\u7C7B\u7684\u51FD\u6570\u6807\u8BB0\u4E3A\u865A\u51FD\u6570</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u672A\u8986\u5199\u72B6\u6001</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
class Entity <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	std<span class="token operator">::</span>string <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;Entity&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
class Player <span class="token operator">:</span> public Entity <span class="token punctuation">{</span>
private<span class="token operator">:</span>
	std<span class="token operator">::</span>string m_Name<span class="token punctuation">;</span>
	<span class="token keyword">float</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token function">Player</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token operator">::</span>string<span class="token operator">&amp;</span> name<span class="token punctuation">,</span><span class="token keyword">float</span> x<span class="token punctuation">,</span><span class="token keyword">float</span> y<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">m_Name</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">x</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">y</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u5217\u8868</span>
	std<span class="token operator">::</span>string <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> m_Name<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	<span class="token keyword">float</span> <span class="token function">GetX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span> <span class="token punctuation">}</span>
	<span class="token keyword">float</span> <span class="token function">GetY</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Player<span class="token operator">*</span> p <span class="token operator">=</span> new <span class="token function">Player</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> p<span class="token operator">-&gt;</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span>p<span class="token operator">-&gt;</span><span class="token function">GetX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> p<span class="token operator">-&gt;</span><span class="token function">GetY</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>

	Entity<span class="token operator">*</span> e <span class="token operator">=</span> p<span class="token punctuation">;</span>  <span class="token comment">//\u6307\u5411\u7236\u7C7B\uFF0C</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> e<span class="token operator">-&gt;</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> <span class="token comment">//\u8F93\u51FA\u7684\u662F\u7236\u7C7B\u7684GetName\u7ED3\u679C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u8986\u5199\u540E
#include &lt;iostream&gt;
#include &lt;string&gt;

class Entity {
public:
  virtual std::string GetName() {  //\u88AB\u8986\u5199\u4F1A\u6307\u5411\u6B63\u786E\u7684\u51FD\u6570
		return &quot;Entity&quot;;
	}
};
class Player : public Entity {
private:
	std::string m_Name;
	float x, y;
public:
	Player(const std::string&amp; name,float x,float y) : m_Name(name),x(x),y(y) {} //\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u5217\u8868
	std::string GetName() override { return m_Name; }
	float GetX() { return x; }
	float GetY() { return y; }
};


int main() {
	Player* p = new Player(&quot;\u8D75\u601D\u7426&quot;, 11, 13);
	std::cout &lt;&lt; p-&gt;GetName() &lt;&lt; p-&gt;GetX() &lt;&lt; p-&gt;GetY() &lt;&lt; std::endl;

	Entity* e = p;  //\u6307\u5411\u7236\u7C7B\uFF0C
	std::cout &lt;&lt; e-&gt;GetName() &lt;&lt; std::endl; //\u8F93\u51FA\u7684\u662F\u5B50\u7C7B\u7684GetName\u7ED3\u679C\u3002 \u201C\u8D75\u601D\u7426\u201D
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u865A\u51FD\u6570\u7684\u989D\u5916\u5F00\u9500" tabindex="-1"><a class="header-anchor" href="#\u865A\u51FD\u6570\u7684\u989D\u5916\u5F00\u9500" aria-hidden="true">#</a> \u865A\u51FD\u6570\u7684\u989D\u5916\u5F00\u9500</h2><ol><li>\u9700\u8981\u989D\u5916\u7684\u5185\u5B58\u6765\u5B58\u50A8v\u8868\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5206\u914D\u5230\u6B63\u786E\u7684\u51FD\u6570\uFF0C\u5305\u62EC\u57FA\u7C7B\u8981\u6709\u4E00\u4E2A\u6210\u5458\u6307\u9488\uFF0C\u6307\u5411v\u8868\u3002</li><li>\u6BCF\u6B21\u6211\u4EEC\u8C03\u7528\u865A\u51FD\u6570\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u904D\u5386\u8FD9\u4E2A\u8868\uFF0C\u6765\u786E\u5B9A\u8981\u6620\u5C04\u5230\u54EA\u4E2A\u51FD\u6570\uFF0C\u8FD9\u662F\u989D\u5916\u7684\u6027\u80FD\u635F\u5931\u3002</li></ol><p>\u53EF\u80FD\u67D0\u4E9B\u5D4C\u5165\u5F0F\u5E73\u53F0\uFF0CCPU\u6027\u80FD\u5F88\u5DEE\uFF0C\u90A3\u4E48\u53EF\u4EE5\u907F\u514D\u4F7F\u7528\u865A\u51FD\u6570\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u57FA\u7C7B\u51FD\u6570\u524D\u6807\u8BB0 virtual \uFF0C\u5B50\u7C7B\u51FD\u6570\u540D\u540E \u6807\u8BB0 override.</p>`,12);function p(e,o){return t}var c=n(a,[["render",p]]);export{c as default};
