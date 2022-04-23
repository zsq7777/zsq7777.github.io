import{_ as n,f as s}from"./app.d5bd46de.js";const a={},p=s(`<h1 id="_46-c-\u7684\u7BAD\u5934\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#_46-c-\u7684\u7BAD\u5934\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> 46. C++\u7684\u7BAD\u5934\u64CD\u4F5C\u7B26</h1><h2 id="\u7B80\u5316\u5BF9\u8C61\u751F\u5B58\u671F\u7BA1\u7406-\u4F7F\u7528\u7BAD\u5934\u64CD\u4F5C\u7B26\u91CD\u8F7D\u7B80\u5316\u4EE3\u7801\u3002" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5316\u5BF9\u8C61\u751F\u5B58\u671F\u7BA1\u7406-\u4F7F\u7528\u7BAD\u5934\u64CD\u4F5C\u7B26\u91CD\u8F7D\u7B80\u5316\u4EE3\u7801\u3002" aria-hidden="true">#</a> \u7B80\u5316\u5BF9\u8C61\u751F\u5B58\u671F\u7BA1\u7406\uFF0C\u4F7F\u7528\u7BAD\u5934\u64CD\u4F5C\u7B26\u91CD\u8F7D\u7B80\u5316\u4EE3\u7801\u3002</h2><p>\u7BAD\u5934\u8FD0\u7B97\u7B26\uFF0C\u5BF9\u4E8E\u7ED3\u6784\u4F53\u548C\u7C7B\u7684\u6307\u9488\u53EF\u4EE5\u505A\u4EC0\u4E48\u3002</p><h3 id="\u4F7F\u7528\u7BAD\u5934\u4EE3\u66FF\u9006\u5F15\u7528\u5BF9\u65B9\u6CD5\u7684\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7BAD\u5934\u4EE3\u66FF\u9006\u5F15\u7528\u5BF9\u65B9\u6CD5\u7684\u8C03\u7528" aria-hidden="true">#</a> \u4F7F\u7528\u7BAD\u5934\u4EE3\u66FF\u9006\u5F15\u7528\u5BF9\u65B9\u6CD5\u7684\u8C03\u7528</h3><ul><li>\u5B9A\u4E49\u53D8\u91CF\u7684\u65B9\u5F0F</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	Entity e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6307\u9488\u7684\u65B9\u5F0F</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	Entity<span class="token operator">*</span> e1 <span class="token operator">=</span> new <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token punctuation">(</span><span class="token operator">*</span>e1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u89E3\u5F15\u7528</span>
	
	e1<span class="token operator">-&gt;</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7BAD\u5934\u64CD\u4F5C\u7B26</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7B80\u5316\u64CD\u4F5C\uFF0C\u65E0\u9700\u624B\u52A8\u9006\u5F15\u7528\u3002</p><h3 id="\u91CD\u8F7D\u7BAD\u5934\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8F7D\u7BAD\u5934\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u91CD\u8F7D\u7BAD\u5934\u64CD\u4F5C\u7B26</h3><p>\u600E\u4E48\u505A\uFF0C\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A\u3002</p><ul><li>\u5728\u7C7B\u4E2D\u672A\u91CD\u8F7D\u7BAD\u5934\u64CD\u4F5C\u7B26\u3002</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

class Entity <span class="token punctuation">{</span>
public<span class="token operator">:</span>
	<span class="token keyword">int</span> x<span class="token punctuation">;</span>
public<span class="token operator">:</span>
	<span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Created&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

class ScopedPtr <span class="token punctuation">{</span>

private<span class="token operator">:</span>
	Entity<span class="token operator">*</span> e<span class="token punctuation">;</span>

public<span class="token operator">:</span>
	<span class="token function">ScopedPtr</span><span class="token punctuation">(</span>Entity<span class="token operator">*</span> entity<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">e</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token operator">~</span><span class="token function">ScopedPtr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		delete e<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	Entity<span class="token operator">*</span> <span class="token function">getObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> e<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	ScopedPtr s<span class="token operator">=</span>new <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	s<span class="token punctuation">.</span><span class="token function">getObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><ul><li>\u91CD\u8F7D\u7BAD\u5934\u64CD\u4F5C\u7B26</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#include &lt;iostream&gt; 
#include &lt;memory&gt;
#include &lt;string&gt;

class Entity {
public:
	int x;
public:
	void print() const { std::cout &lt;&lt; &quot;Created&quot; &lt;&lt; std::endl; }
};

class ScopedPtr {

private:
	Entity* e;

public:
	ScopedPtr(Entity* entity) :e(entity) {};

	~ScopedPtr() {
		delete e;
	}

	const Entity* operator-&gt;() const {
		return e;
	}
};


int main() {
	Entity e;
	e.print();

	ScopedPtr s=new Entity();
	s-&gt;print();
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u81EA\u52A8\u5316\u7684\u7BA1\u7406\u7C7B\u4E2D\u7684\u5BF9\u8C61\u7684\u751F\u5B58\u671F\uFF0C\u5C31\u50CF\u6211\u4EEC\u5199\u666E\u901A\u4EE3\u7801\u4E00\u6837\u3002\u8BA9\u4EE3\u7801\u4FDD\u6301\u5E72\u51C0\u3002</p><h2 id="\u7BAD\u5934\u64CD\u4F5C\u7B26\u83B7\u53D6\u6210\u5458\u53D8\u91CF\u5728\u5185\u5B58\u4E2D\u7684\u504F\u79FB\u91CF" tabindex="-1"><a class="header-anchor" href="#\u7BAD\u5934\u64CD\u4F5C\u7B26\u83B7\u53D6\u6210\u5458\u53D8\u91CF\u5728\u5185\u5B58\u4E2D\u7684\u504F\u79FB\u91CF" aria-hidden="true">#</a> \u7BAD\u5934\u64CD\u4F5C\u7B26\u83B7\u53D6\u6210\u5458\u53D8\u91CF\u5728\u5185\u5B58\u4E2D\u7684\u504F\u79FB\u91CF</h2><p>\u56E0\u4E3A\u5185\u5B58\u5BF9\u9F50\u7684\u539F\u56E0\uFF0C\u76F4\u63A5\u4F7F\u7528sizeof()\u4F5C\u4E3A\u53D8\u91CF\u7684\u504F\u79FB\u91CF\u5F88\u5BB9\u6613\u51FA\u9519\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Entity e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	ScopedPtr s<span class="token operator">=</span>new <span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	s<span class="token operator">-&gt;</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Entity<span class="token operator">*</span><span class="token punctuation">)</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span>y<span class="token punctuation">;</span>
	<span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Entity<span class="token operator">*</span><span class="token punctuation">)</span>nullptr<span class="token punctuation">)</span><span class="token operator">-&gt;</span>y<span class="token punctuation">;</span>  <span class="token comment">//\u4ECE\u8D77\u59CB\u4F4D\uFF0C\u627E\u5230\u53D8\u91CFy,\u83B7\u53D6\u5F15\u7528\uFF0C\u5E76\u8F6C\u4E3Aint\u7C7B\u578B</span>
	std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> number <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8F6C\u5316\u5B57\u8282\u6D41\uFF0C\u8BA1\u7B97\u504F\u79FB\u91CF\u7684\u65F6\u5019\uFF0C\u8FD9\u5F88\u6709\u7528\u3002</p>`,21);function t(e,c){return p}var o=n(a,[["render",t]]);export{o as default};
