import{_ as n,f as s}from"./app.7279925a.js";const a={},p=s(`<h1 id="_02-\u81EA\u7531\u843D\u4F53\u7684\u5C0F\u7403" tabindex="-1"><a class="header-anchor" href="#_02-\u81EA\u7531\u843D\u4F53\u7684\u5C0F\u7403" aria-hidden="true">#</a> 02. \u81EA\u7531\u843D\u4F53\u7684\u5C0F\u7403</h1><h2 id="\u5C0F\u7403\u843D\u5730\u53CD\u5F39" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7403\u843D\u5730\u53CD\u5F39" aria-hidden="true">#</a> \u5C0F\u7403\u843D\u5730\u53CD\u5F39</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;graphics.h&gt;</span><span class="token comment">//\u56FE\u5F62\u5316\u6587\u4EF6</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;conio.h&gt;</span><span class="token comment">//\u8F93\u5165\u8F93\u51FA\u6587\u4EF6</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">const</span> <span class="token keyword">int</span> mWidth <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span> mHigth <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span> initRadius <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

	<span class="token comment">//\u521B\u5EFA\u56FE\u5F62</span>
	<span class="token function">initgraph</span><span class="token punctuation">(</span>mWidth<span class="token punctuation">,</span> mHigth<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">float</span> y <span class="token operator">=</span> initRadius<span class="token punctuation">;</span>

	<span class="token keyword">float</span> vy <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">float</span> g <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u91CD\u529B\u52A0\u901F\u5EA6</span>
	
	bool flag <span class="token operator">=</span> false<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>true<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">cleardevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6E05\u9664</span>
		<span class="token function">fillcircle</span><span class="token punctuation">(</span>mWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> initRadius<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5728\u5BF9\u5E94\u7684\u5750\u6807\u7ED8\u5236\u5706</span>
		<span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		vy <span class="token operator">+=</span> g<span class="token punctuation">;</span> <span class="token comment">//\u901F\u5EA6\u968F\u7740\u4E0B\u843D\u589E\u52A0</span>
	
		y <span class="token operator">+=</span>  vy<span class="token punctuation">;</span> <span class="token comment">//\u5750\u6807\u968F\u7740\u4E0B\u843D\u65B9\u5411\u589E\u52A0</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;</span> mHigth<span class="token operator">-</span>initRadius<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5C0F\u7403\u843D\u5730</span>
			vy <span class="token operator">=</span> <span class="token operator">-</span>vy<span class="token operator">*</span><span class="token number">0.95</span><span class="token punctuation">;</span> <span class="token comment">// \u6A21\u62DF\u56DE\u5F39\u65F6\u901F\u5EA6\u964D\u4F4E</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;=</span> mHigth <span class="token operator">-</span> initRadius<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u5F53\u4F4D\u7F6E\u8BA1\u7B97&gt;=\u56DE\u5F39\u4F4D\u7F6E\u65F6</span>
			y <span class="token operator">=</span> mHigth <span class="token operator">-</span> initRadius<span class="token punctuation">;</span> <span class="token comment">//\u4FEE\u6B63\u4F4D\u7F6E\u4E3A\u89E6\u5E95</span>
		<span class="token punctuation">}</span>

	

	<span class="token punctuation">}</span>
	
	<span class="token function">_getch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">closegraph</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;graphics.h&gt;</span><span class="token comment">//\u56FE\u5F62\u5316\u6587\u4EF6</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;conio.h&gt;</span><span class="token comment">//\u8F93\u5165\u8F93\u51FA\u6587\u4EF6</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">const</span> <span class="token keyword">float</span> mWidth <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">float</span> mHigth <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">float</span> initRadius <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

	<span class="token comment">//\u521B\u5EFA\u56FE\u5F62</span>
	<span class="token comment">//initgraph(mWidth, mHigth);</span>

	<span class="token keyword">float</span> vy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u91CD\u529B\u901F\u5EA6</span>
	<span class="token keyword">float</span> g <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u91CD\u529B\u52A0\u901F\u5EA6</span>
	<span class="token keyword">float</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//\u8D77\u59CB\u5750\u6807</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u91CD\u529B\u901F\u5EA6\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> vy <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
		std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;y\u8F74\u5750\u6807\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
		vy <span class="token operator">+=</span> g<span class="token punctuation">;</span>
		y <span class="token operator">+=</span> vy<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;=</span> mHigth <span class="token operator">-</span> initRadius<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u89E6\u5E95</span>
			vy <span class="token operator">=</span> <span class="token operator">-</span>vy<span class="token operator">*</span><span class="token number">0.95</span><span class="token punctuation">;</span> <span class="token comment">//\u53CD\u5F39\u901F\u5EA6 \u963B\u5C3C\u5F71\u54CD \u7EDD\u5BF9\u503C\u51CF\u5C0F</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;=</span> mHigth <span class="token operator">-</span> initRadius<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u4F4D\u7F6E\u4FEE\u6B63</span>
			y <span class="token operator">=</span> mHigth <span class="token operator">-</span> initRadius<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//cleardevice();</span>
		<span class="token comment">//fillcircle(mWidth/2,y,initRadius);</span>
		<span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//_getch();</span>
	<span class="token comment">//closegraph();</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="\u629B\u7269\u7EBF\u8FD0\u52A8\u7684\u5C0F\u7403" tabindex="-1"><a class="header-anchor" href="#\u629B\u7269\u7EBF\u8FD0\u52A8\u7684\u5C0F\u7403" aria-hidden="true">#</a> \u629B\u7269\u7EBF\u8FD0\u52A8\u7684\u5C0F\u7403</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;graphics.h&gt;</span><span class="token comment">//\u56FE\u5F62\u5316\u6587\u4EF6</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;conio.h&gt;</span><span class="token comment">//\u8F93\u5165\u8F93\u51FA\u6587\u4EF6</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">const</span> <span class="token keyword">float</span> mWidth <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">float</span> mHigth <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">float</span> initRadius <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

	<span class="token function">initgraph</span><span class="token punctuation">(</span>mWidth<span class="token punctuation">,</span> mHigth<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">float</span> y <span class="token operator">=</span> initRadius<span class="token punctuation">;</span><span class="token comment">//y\u8F74\u8D77\u59CB\u70B9</span>
	<span class="token keyword">float</span> speed <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">float</span> g <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u91CD\u529B\u52A0\u901F\u5EA6</span>



	 
	<span class="token keyword">float</span> x <span class="token operator">=</span> initRadius<span class="token punctuation">;</span><span class="token comment">//x\u8F74\u8D77\u59CB\u70B9</span>
	<span class="token keyword">float</span> xSpeed <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//x\u8F74\u8D77\u59CB\u901F\u5EA6</span>


	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">cleardevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		speed <span class="token operator">=</span> speed <span class="token operator">+</span> g<span class="token punctuation">;</span><span class="token comment">//\u6BCF\u4E0B\u843D\u4E00\u5E27\uFF0C\u901F\u5EA6\u589E\u52A01</span>
		y <span class="token operator">+=</span> speed<span class="token punctuation">;</span> <span class="token comment">//y\u8F74\u5750\u6807\u6839\u636E\u901F\u5EA6\u589E\u52A0  -&gt; \u6700\u540E\u4E00\u5E27\u5982\u679C\u9AD8\u5EA6\u4E3A799\uFF0C\u4E0B\u843D\u8DDD\u79BB\u4E3A30\uFF0C\u90A3\u4E48y\u8F74\u5C31\u4F1A\u8D85\u8FC7\u5E95\u90E8\uFF0C\u9700\u8981\u4FEE\u6B63\u4E3A\u5E95\u90E8\u3002</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;=</span> mHigth <span class="token operator">-</span> initRadius<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5C0F\u7403\u89E6\u5E95</span>
			speed <span class="token operator">=</span> <span class="token operator">-</span>speed<span class="token operator">*</span><span class="token number">0.9</span><span class="token punctuation">;</span> <span class="token comment">//\u5C0F\u7403\u56DE\u5F39 -&gt; \u56DE\u5F39\u4EE5\u540E\uFF0C\u4ED6\u7684\u56DE\u5F39\u901F\u5EA6\u4F1A\u9012\u51CF\uFF0C\u56E0\u4E3A\u91CD\u529B\u901F\u5EA6\u5728\u589E\u52A0..    *0.9 \u6A21\u62DF\u56DE\u5F39\u65F6\u901F\u5EA6\u6BD4\u4E0B\u843D\u66F4\u4F4E</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;=</span> mHigth <span class="token operator">-</span> initRadius<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u4E0B\u843D\u4FEE\u6B63</span>
			y <span class="token operator">=</span> mHigth <span class="token operator">-</span> initRadius<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>


		x <span class="token operator">+=</span> xSpeed<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;=</span> mWidth <span class="token operator">-</span> initRadius<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//x\u8F74\u89E6\u5E95</span>
			xSpeed <span class="token operator">=</span> <span class="token operator">-</span>xSpeed <span class="token operator">*</span> <span class="token number">0.95</span><span class="token punctuation">;</span> <span class="token comment">//\u56DE\u5F39\u901F\u5EA6\u51CF\u5C11   *0.9 \u5C31\u4F1A\u505C\u4F4F</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;=</span> initRadius<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u56DE\u5230x\u8F74\u539F\u70B9\uFF0C\u89E6\u5E95</span>
			xSpeed <span class="token operator">=</span> <span class="token operator">-</span>xSpeed <span class="token operator">*</span> <span class="token number">0.95</span><span class="token punctuation">;</span> <span class="token comment">//\u518D\u51CF\u5C11\u56DE\u5F39\u901F\u5EA6</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//std::cout &lt;&lt;&quot;x\u8F74\u901F\u5EA6&quot; &lt;&lt; xSpeed &lt;&lt; std::endl;</span>

		<span class="token function">fillcircle</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> initRadius<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token function">_getch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">closegraph</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div>`,6);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
