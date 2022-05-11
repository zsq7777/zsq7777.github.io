import{_ as a,r as p,o as t,a as e,b as n,d as c,F as o,f as l,e as u}from"./app.601cf996.js";const i={},r=l(`<h1 id="_02-serializable\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_02-serializable\u7684\u4F7F\u7528" aria-hidden="true">#</a> 02. Serializable\u7684\u4F7F\u7528</h1><h2 id="_1-\u6700\u7B80\u5355\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-\u6700\u7B80\u5355\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> 1. \u6700\u7B80\u5355\u4F7F\u7528\u793A\u4F8B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainJavaTest</span> <span class="token punctuation">{</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Entity</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entity</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8D75\u601D\u7426&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u539F\u5BF9\u8C61\u5806\u5185\u5B58\u5730\u5740:&quot;</span><span class="token operator">+</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">identityHashCode</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token function">serializeEntity</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Entity</span> entity <span class="token operator">=</span> <span class="token function">deserializeEntity</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u59D3\u540D\uFF1A&quot;</span><span class="token operator">+</span>entity<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E74\u9F84\uFF1A&quot;</span><span class="token operator">+</span>entity<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53CD\u5E8F\u5217\u5316\u540E\u7684\u5BF9\u8C61\u5806\u5185\u5B58\u5730\u5740:&quot;</span><span class="token operator">+</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">identityHashCode</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> classNotFoundException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;error:&quot;</span> <span class="token operator">+</span> classNotFoundException<span class="token punctuation">.</span><span class="token function">getLocalizedMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;error:&quot;</span> <span class="token operator">+</span> ex<span class="token punctuation">.</span><span class="token function">getLocalizedMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5BF9\u8C61\u8F6C\u5316\u4E3A\u5B57\u8282\u5E8F\u5217
     * \u8FD4\u56DE\u5B57\u8282\u5E8F\u5217
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">serializeEntity</span><span class="token punctuation">(</span><span class="token class-name">Entity</span> entity<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5B57\u8282\u6570\u7EC4\u8F93\u51FA\u6D41</span>
        <span class="token class-name">ByteArrayOutputStream</span> byteArrayOutputStream<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5BF9\u8C61\u8F93\u51FA\u6D41</span>
        <span class="token class-name">ObjectOutputStream</span> objectOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>byteArrayOutputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5BF9\u8C61\u5199\u5165\u8F93\u51FA\u6D41\u4E2D</span>
        objectOutputStream<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> byteArrayOutputStream<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Entity</span> <span class="token function">deserializeEntity</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ByteArrayInputStream</span> byteArrayInputStream<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectInputStream</span> objectInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>byteArrayInputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Entity</span> e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Entity</span><span class="token punctuation">)</span> objectInputStream<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> e<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="_2-\u5E8F\u5217\u5316id" tabindex="-1"><a class="header-anchor" href="#_2-\u5E8F\u5217\u5316id" aria-hidden="true">#</a> 2. \u5E8F\u5217\u5316ID</h2><p>\u5BA2\u6237\u7AEF\u4E4B\u95F4\u4F20\u8F93\u6570\u636E\u65F6\uFF0C\u4F7F\u7528\u8BE5ID\u5224\u65AD\uFF0C\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u53CD\u5E8F\u5217\u5316\u5931\u8D25</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>     <span class="token comment">//\u5E8F\u5217\u5316\u7248\u672C  \u7528\u4E8E\u9A8C\u8BC1\u53D1\u9001\u7AEF\u4E0E\u63A5\u6536\u7AEF\u7684\u5BF9\u8C61\u662F\u5426\u517C\u5BB9</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID<span class="token operator">=</span><span class="token number">1L</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_3-\u5176\u4ED6\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_3-\u5176\u4ED6\u9650\u5236" aria-hidden="true">#</a> 3. \u5176\u4ED6\u9650\u5236</h2><ul><li>\u7C7B\u4E2D\u9759\u6001\u53D8\u91CF\u4E0D\u4F1A\u5E8F\u5217\u5316</li><li>\u672A\u5B9E\u73B0\u6807\u8BB0Serializable\u7684\u7236\u7C7B\u4E0D\u4F1A\u5E8F\u5217\u5316\uFF0C\u8D4B\u9ED8\u8BA4\u503C</li><li>\u4F7F\u7528transient\u4FEE\u9970\u53D8\u91CF\u4E0D\u4F1A\u5E8F\u5217\u5316\uFF0C\u8D4B\u9ED8\u8BA4\u503C</li></ul><h2 id="_4-\u81EA\u5B9A\u4E49-writeobject-\u548Creadobject" tabindex="-1"><a class="header-anchor" href="#_4-\u81EA\u5B9A\u4E49-writeobject-\u548Creadobject" aria-hidden="true">#</a> 4. \u81EA\u5B9A\u4E49 writeObject()\u548CreadObject()</h2><p>\u53EF\u5BF9\u5E8F\u5217\u5316\u5BF9\u8C61\u505A\u52A0\u5BC6\u64CD\u4F5C/\u989D\u5916\u7684\u5904\u7406\uFF0C\u53CD\u5E8F\u5217\u5316\u5BF9\u8C61\u89E3\u5BC6\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Entity</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5E8F\u5217\u5316\u7248\u672C  \u7528\u4E8E\u9A8C\u8BC1\u53D1\u9001\u7AEF\u4E0E\u63A5\u6536\u7AEF\u7684\u5BF9\u8C61\u662F\u5426\u517C\u5BB9</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Entity</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">writeObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">ObjectOutputStream</span> stream<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//        stream.defaultWriteObject();</span>
        <span class="token comment">//putFields() \u68C0\u7D22\u7F13\u51B2\u5BF9\u8C61\u5B57\u6BB5</span>
        <span class="token class-name">ObjectOutputStream<span class="token punctuation">.</span>PutField</span> putField <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">putFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        putField<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> name <span class="token operator">+</span> <span class="token string">&quot;zsq&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        putField<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> age <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stream<span class="token punctuation">.</span><span class="token function">writeFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">readObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">ObjectInputStream</span> stream<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token comment">//        stream.defaultReadObject();</span>
        <span class="token class-name">ObjectInputStream<span class="token punctuation">.</span>GetField</span> getField <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">readFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> getField<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> getField<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;zsq&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">readObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">ObjectInputStream</span> stream<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        stream<span class="token punctuation">.</span><span class="token function">defaultReadObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="_5-\u5199\u5165\u65F6\u66FF\u6362\u5BF9\u8C61-writereplace" tabindex="-1"><a class="header-anchor" href="#_5-\u5199\u5165\u65F6\u66FF\u6362\u5BF9\u8C61-writereplace" aria-hidden="true">#</a> 5. \u5199\u5165\u65F6\u66FF\u6362\u5BF9\u8C61\uFF1AwriteReplace()</h2><p>\u9ED8\u8BA4\u548C\u81EA\u5B9A writeObject\u5931\u6548\u3002 \u5728\u5BF9\u8C61\u7F13\u51B2\u524D\u8C03\u7528\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token class-name">Object</span> <span class="token function">writeReplace</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ObjectStreamException</span> <span class="token punctuation">{</span>
       <span class="token comment">//\u81EA\u5B9A\u4E49\u5199\u5165\u7684\u5BF9\u8C61</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_6-\u4FDD\u62A4\u6027\u6062\u590D\u5BF9\u8C61-readresolve" tabindex="-1"><a class="header-anchor" href="#_6-\u4FDD\u62A4\u6027\u6062\u590D\u5BF9\u8C61-readresolve" aria-hidden="true">#</a> 6. \u4FDD\u62A4\u6027\u6062\u590D\u5BF9\u8C61\uFF1AreadResolve()</h2><p>readObject \u8C03\u7528\u540E\u81EA\u52A8\u8C03\u7528\u3002 \u5BF9\u8FD4\u56DE\u7684\u5E8F\u5217\u5316\u5BF9\u8C61\u505A\u5904\u7406</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token class-name">Object</span> <span class="token function">readResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ObjectStreamException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_7-\u81EA\u5B9A\u4E49\u5E8F\u5217\u5316\u63A5\u53E3-externalizable" tabindex="-1"><a class="header-anchor" href="#_7-\u81EA\u5B9A\u4E49\u5E8F\u5217\u5316\u63A5\u53E3-externalizable" aria-hidden="true">#</a> 7. \u81EA\u5B9A\u4E49\u5E8F\u5217\u5316\u63A5\u53E3\uFF1AExternalizable</h2><p>\u624B\u52A8\u4F7F\u7528ObjectOutput,ObjectInput\u5B8C\u6210\u5BF9\u5BF9\u8C61\u7684\u5E8F\u5217\u5316\u64CD\u4F5C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">writeExternal</span><span class="token punctuation">(</span><span class="token class-name">ObjectOutput</span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">readExternal</span><span class="token punctuation">(</span><span class="token class-name">ObjectInput</span> in<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_8-\u6E90\u7801\u89E3\u8BFB" tabindex="-1"><a class="header-anchor" href="#_8-\u6E90\u7801\u89E3\u8BFB" aria-hidden="true">#</a> 8. \u6E90\u7801\u89E3\u8BFB</h2>`,21),k={href:"https://www.cnblogs.com/binarylei/p/10987933.html",target:"_blank",rel:"noopener noreferrer"},b=u("\u535A\u5BA2\u56ED");function m(d,y){const s=p("ExternalLinkIcon");return t(),e(o,null,[r,n("p",null,[n("a",k,[b,c(s)])])],64)}var h=a(i,[["render",m]]);export{h as default};
