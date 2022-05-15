import{_ as n,f as a}from"./app.1f76b4a4.js";const s={},e=a(`<h1 id="_48-c-\u7684std-vector\u4F7F\u7528\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_48-c-\u7684std-vector\u4F7F\u7528\u4F18\u5316" aria-hidden="true">#</a> 48. C++\u7684std::vector\u4F7F\u7528\u4F18\u5316</h1><h2 id="vector\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#vector\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> vector\u5DE5\u4F5C\u539F\u7406</h2><h3 id="\u5BF9\u8C61\u521B\u5EFA\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u521B\u5EFA\u65B9\u5F0F" aria-hidden="true">#</a> \u5BF9\u8C61\u521B\u5EFA\u65B9\u5F0F</h3><div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>#include &lt;iostream&gt; 
#include &lt;memory&gt;
#include &lt;vector&gt;

class Entity {
public:
	float x,y,z;

public:
	Entity(float a, float b, float c) :x(a), y(b), z(c) {}
	Entity(const Entity&amp; e) :x(e.x), y(e.y), z(e.z){ //\u62F7\u8D1D\u6784\u9020\u51FD\u6570
		std::cout &lt;&lt; &quot;Created&quot; &lt;&lt; std::endl;
	}

};

std::ostream&amp; operator&lt;&lt;( std::ostream&amp; stream, const Entity&amp; e) {
	return stream &lt;&lt; e.x &lt;&lt; e.y &lt;&lt; e.z;
}

int main() {

	std::vector&lt;Entity&gt; e;
	Entity data1 = { 1,2,3 }; 
	e.push_back( data1); // data1-&gt;\u65B0vector\u5185\u5B58 \u79FB\u52A81\u6B21
	Entity data2 = { 1,2,3 }; 
	e.push_back( data2 ); //data1-&gt;\u65B0vector\u5185\u5B58   data2-&gt;vector\u65B0vector\u5185\u5B58  \u5220\u9664\u65E7vector\u5185\u5B58 \u79FB\u52A82\u6B21  \u5C3E\u90E8\u589E\u52A0\u4E00\u4E2A\u5143\u7D20X
	Entity data3 = { 1,2,3 };
	e.push_back(data3);  // data1-&gt;\u65B0vector\u5185\u5B58  data2-&gt;vector\u65B0vector\u5185\u5B58  data3-&gt;vector\u65B0vector\u5185\u5B58,\u5220\u9664\u65E7vector.\u5185\u5B58\u79FB\u52A83\u6B21

	for (int i = 0; i &lt; e.size(); i++)
	{
		std::cout &lt;&lt; e[i] &lt;&lt; std::endl;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a> \u4F18\u5316</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>	std<span class="token operator">::</span>vector<span class="token operator">&lt;</span>Entity<span class="token operator">&gt;</span> e<span class="token punctuation">;</span>
	e<span class="token punctuation">.</span><span class="token function">reserve</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5B9A\u4E0B\u5927\u5C0F</span>
	Entity data1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	e<span class="token punctuation">.</span><span class="token function">emplace_back</span><span class="token punctuation">(</span>data1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4E0D\u4F1A\u590D\u5236</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,6);function t(r,p){return e}var c=n(s,[["render",t]]);export{c as default};
