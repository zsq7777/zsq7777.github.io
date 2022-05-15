import{_ as t,r as o,o as i,a as s,b as e,d as r,F as l,f as h,e as n}from"./app.1f76b4a4.js";const d={},c=h(`<h1 id="_01-\u5E8F\u5217\u5316\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_01-\u5E8F\u5217\u5316\u65B9\u6848" aria-hidden="true">#</a> 01. \u5E8F\u5217\u5316\u65B9\u6848</h1><p>\u5E8F\u5217\u5316\u5728\u7A0B\u5E8F\u4E2D\u7684\u5E94\u7528\u65E0\u5904\u4E0D\u5728\uFF0C\u5B83\u662F\u8BA1\u7B97\u673A\u8F6F\u4EF6\u901A\u4FE1\u91CD\u8981\u7684\u4E00\u90E8\u5206\uFF0C\u5E94\u7528\u8303\u56F4\u5305\u62EC\u7F51\u7EDC\u4F20\u8F93\uFF0C\u6587\u4EF6\u53CA\u6570\u636E\u5E93\u6301\u4E45\u5316\uFF0C\u8FDB\u7A0B\u95F4\u901A\u4FE1\u7B49\uFF0CRIM(\u8FDC\u7A0B\u65B9\u6CD5\u8C03\u7528)\u3002</p><p>\u5E8F\u5217\u5316\uFF1A\u5C06\u5BF9\u8C61\u8F6C\u5316\u4E3A\u4E8C\u8FDB\u5236\u6D41\u7684\u8FC7\u7A0B\u3002</p><h2 id="\u5217\u4E3E\u5E38\u89C1\u7684\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u65B9\u6848-objectxxstream\u3001xml\u3001json" tabindex="-1"><a class="header-anchor" href="#\u5217\u4E3E\u5E38\u89C1\u7684\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u65B9\u6848-objectxxstream\u3001xml\u3001json" aria-hidden="true">#</a> \u5217\u4E3E\u5E38\u89C1\u7684\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u65B9\u6848\uFF08ObjectXXStream\u3001XML\u3001JSON\uFF09</h2><h3 id="objectxxxstream" tabindex="-1"><a class="header-anchor" href="#objectxxxstream" aria-hidden="true">#</a> ObjectXXXStream</h3><h4 id="serializable" tabindex="-1"><a class="header-anchor" href="#serializable" aria-hidden="true">#</a> Serializable</h4><p>\u8FD9\u662F\u4E00\u4E2A\u6807\u8BB0\u63A5\u53E3\uFF0CObjectOutputSteam/ObjectInputStream\u5B8C\u6210\u5BF9\u8C61\u7684\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316\u3002\u901A\u8FC7\u53CD\u5C04\u5B9E\u73B0\uFF0C\u8FC7\u7A0B\u6162\uFF0C\u5E8F\u5217\u5316\u65F6\u4EA7\u751F\u4E86\u5927\u91CF\u4E34\u65F6\u53D8\u91CF\uFF0C\u5F15\u8D77\u9891\u7E41GC\u3002\u4F46\u6613\u4E8E\u6301\u4E45\u5316\uFF0C\u4F46\u662F\u7531\u4E8E\u4ED6\u7684\u8F6C\u6362\u89C4\u5219\u662F\u6839\u636E.class\u6587\u4EF6\uFF0C\u6240\u4EE5\u53EA\u80FD\u5728java\u4E2D\u4F7F\u7528\u3002</p><h3 id="parcelable" tabindex="-1"><a class="header-anchor" href="#parcelable" aria-hidden="true">#</a> Parcelable</h3><p>Android\u539F\u751F\u5E8F\u5217\u5316\uFF0C\u4F7F\u7528native\u65B9\u6CD5\uFF0C\u5BF9\u6307\u9488\u7684\u64CD\u4F5C\u3002 \u5185\u5B58\u4E2D\u5B8C\u6210\u5E8F\u5217\u5316\u4E0E\u53CD\u5E8F\u5217\u5316\u3002\u7528\u4E8EIntent\u6570\u636E\u4F20\u9012\uFF0C\u8FDB\u7A0B\u95F4\u901A\u4FE1IPC\u3002</p><h3 id="xml\u3001json" tabindex="-1"><a class="header-anchor" href="#xml\u3001json" aria-hidden="true">#</a> XML\u3001JSON</h3><ul><li>\u4ED6\u4EEC\u90FD\u5177\u6709\u4EBA\u773C\u53EF\u8BFB\u7684\u7279\u6027\u3002</li><li>\u90FD\u5FC5\u4F1A\u7ECF\u5386 \u5BF9\u8C61-&gt; String-&gt;byte[]\u7684\u8FC7\u7A0B\uFF0C\u56E0\u4E3A\u6570\u636E\u7C7B\u578B\u7684\u95EE\u9898\uFF0C\u6570\u636E\u653E\u5927\u3002</li><li>\u5305\u542BObject\u7C7B\u578B\uFF0C\u4E1A\u52A1\u672C\u8EAB\u4E5F\u4E0D\u660E\u786E\uFF0C\u5904\u7406\u8D77\u6765\u4F1A\u5F88\u9EBB\u70E6\u3002</li></ul><h4 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h4><p>IDL \uFF1A\u901A\u8BAF\u5404\u65B9\u5BF9\u901A\u8BAF\u5185\u5BB9\u7684\u7EA6\u5B9A</p><h4 id="xml" tabindex="-1"><a class="header-anchor" href="#xml" aria-hidden="true">#</a> XML</h4><div class="language-XML ext-XML line-numbers-mode"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;&gt;
&lt;Msg&gt;
    &lt;userId&gt;102333320132133&lt;/userId&gt;
&lt;Msg&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h4><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;userId&quot;:102333320132133
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u6570\u636E\u653E\u5927" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u653E\u5927" aria-hidden="true">#</a> \u6570\u636E\u653E\u5927</h4><p>JSON\u6839\u636E\u8F6C\u6362\u539F\u7406 \uFF0C\u5BF9\u8C61\u539F\u672Clong\u7C7B\u578B\u7684\u6570\u636E\u5728\u5185\u5B58\u4E2D\u5360\u75288\u4E2A\u5B57\u8282\uFF0C\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\uFF0C\u6570\u636E\u653E\u5927\u5230\u4E8630\u5B57\u8282,3.78\u500D\u3002</p><h4 id="\u6570\u636E\u653E\u5927\u7684\u95EE\u9898\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u653E\u5927\u7684\u95EE\u9898\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u6570\u636E\u653E\u5927\u7684\u95EE\u9898\u662F\u4EC0\u4E48</h4><ol><li>\u82B1\u8D39\u65F6\u95F4\u53BB\u62FC\u63A5\u5B57\u7B26\u4E32\uFF0C\u62F7\u8D1D\u5185\u5B58\uFF0C\u5360\u7528\u66F4\u591A\u7684java\u5185\u5B58\uFF0C\u4EA7\u751F\u66F4\u591A\u5185\u5B58\u788E\u7247\u3002</li><li>\u5BF9\u8C61\u5230string\u518D\u5230byte[]\u5FC5\u7136\u8981\u591A\u4E00\u6B21\u5168\u91CF\u5185\u5B58\u62F7\u8D1D</li><li>\u4F20\u8F93\u6570\u636E\u653E\u5927\uFF0C\u66F4\u5360\u6D41\u91CF</li><li>package\u53D8\u591A\uFF0C\u5728\u7F51\u7EDC\u5EF6\u8FDF\u9AD8\uFF0C\u4E22\u5305\u53EF\u80FD\u6027\u66F4\u5927\u3002</li><li>\u63A5\u6536\u65B9\u82B1\u66F4\u591A\u7684\u65F6\u95F4\u5904\u7406\u3002</li><li>string\u4E0E\u5176\u4ED6\u7C7B\u578B\u7684\u8F6C\u6362\uFF0C\u989D\u5916\u7684\u5185\u5B58\u548C\u8BA1\u7B97\u5F00\u9500\u3002</li></ol><h2 id="mysql-jdbc\u7ED3\u679C\u96C6\u7684\u5904\u7406\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#mysql-jdbc\u7ED3\u679C\u96C6\u7684\u5904\u7406\u65B9\u6848" aria-hidden="true">#</a> MySQL JDBC\u7ED3\u679C\u96C6\u7684\u5904\u7406\u65B9\u6848</h2><p>binary\u534F\u8BAE</p><p>byte\u7F16\u7801\u548C\u89E3\u7801\u3002</p><h2 id="\u4E8C\u8FDB\u5236\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u534F\u8BAE" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u534F\u8BAE</h2><p>protobuf, protostuff, thrift, msgpack, avro</p><h3 id="google-protocol-buffer\u5904\u7406\u65B9\u6848-protobuf" tabindex="-1"><a class="header-anchor" href="#google-protocol-buffer\u5904\u7406\u65B9\u6848-protobuf" aria-hidden="true">#</a> Google Protocol Buffer\u5904\u7406\u65B9\u6848 protobuf</h3><p>XML\uFF0CJSON\u662F\u81EA\u63CF\u8FF0\u6027\u7684\uFF0C\u9700\u8981\u81EA\u5DF1\u5B9A\u4E49IDL\u3002</p><p>\u534F\u8BAEbuffer</p><p>protobuf, \u6570\u636E\u653E\u5927\u6781\u5C0F\u3002</p><h2 id="\u5E8F\u5217\u5316\u6280\u672F\u9009\u578B" tabindex="-1"><a class="header-anchor" href="#\u5E8F\u5217\u5316\u6280\u672F\u9009\u578B" aria-hidden="true">#</a> \u5E8F\u5217\u5316\u6280\u672F\u9009\u578B</h2><p>thrift \u3001protobuf - \u9002\u7528\u4E8E\u5BF9\u6027\u80FD\u654F\u611F\uFF0C\u5BF9\u5F00\u53D1\u4F53\u9A8C\u8981\u6C42\u4E0D\u9AD8\u3002 hessian - \u9002\u7528\u4E8E\u5BF9\u5F00\u53D1\u4F53\u9A8C\u654F\u611F\uFF0C\u6027\u80FD\u6709\u8981\u6C42\u3002 jackson \u3001gson (opens new window)\u3001fastjson (opens new window)- \u9002\u7528\u4E8E\u5BF9\u5E8F\u5217\u5316\u540E\u7684\u6570\u636E\u8981\u6C42\u6709\u826F\u597D\u7684\u53EF\u8BFB\u6027</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,33),p={href:"https://zhuanlan.zhihu.com/p/48045115",target:"_blank",rel:"noopener noreferrer"},u=n("\u963F\u91CC\u4E91\u4E91\u6816\u53F7\uFF1A\u5E38\u89C1Serialize\u6280\u672F\u63A2\u79D8\uFF08XML\u3001JSON\u3001JDBC byte\u7F16\u7801\u3001Protobuf\uFF09"),b={href:"https://tech.meituan.com/2015/02/26/serialization-vs-deserialization.html",target:"_blank",rel:"noopener noreferrer"},_=n("\u7F8E\u56E2\uFF1A\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316"),f={href:"https://www.cnblogs.com/binarylei/p/10987540.html",target:"_blank",rel:"noopener noreferrer"},m=n("\u535A\u5BA2\u56ED\uFF1Ajava\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u6E90\u7801\u89E3\u6790"),g={href:"https://dunwu.github.io/javacore/io/java-serialization.html#_4-2-readresolve-%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},x=n("java\u535A\u5BA2"),j={href:"https://juejin.cn/post/6850418112501268494",target:"_blank",rel:"noopener noreferrer"},v=e("strong",null,"\u6398\u91D1(\u8D85\u8BE6\u7EC6)",-1),S=n("\uFF1ASerializable\u662F\u600E\u4E48\u4E00\u56DE\u4E8B"),k={href:"https://www.jianshu.com/p/74d81bac6539",target:"_blank",rel:"noopener noreferrer"},O=n("\u7B80\u4E66\uFF1AJVM\u773C\u4E2D\u7684class,\u6709\u52A9\u4E8E\u7406\u89E3java\u5E8F\u5217\u5316\u539F\u7406"),E={href:"https://gitee.com/code_to_attack/onJava8/blob/master/docs/book/Appendix-Object-Serialization.md",target:"_blank",rel:"noopener noreferrer"},J=n("Java\u7F16\u7A0B\u601D\u60F3"),w={href:"https://sufushi.github.io/2018/01/24/android%E4%B8%AD%E7%9A%84%E5%BA%8F%E5%88%97%E5%8C%96%E6%9C%BA%E5%88%B6%E5%8E%9F%E7%90%86/",target:"_blank",rel:"noopener noreferrer"},L=n("Android\u4E2D\u7684\u5E8F\u5217\u5316\u673A\u5236\u539F\u7406");function M(N,X){const a=o("ExternalLinkIcon");return i(),s(l,null,[c,e("ul",null,[e("li",null,[e("a",p,[u,r(a)])]),e("li",null,[e("a",b,[_,r(a)])]),e("li",null,[e("a",f,[m,r(a)])]),e("li",null,[e("a",g,[x,r(a)])]),e("li",null,[e("a",j,[v,S,r(a)])]),e("li",null,[e("a",k,[O,r(a)])]),e("li",null,[e("a",E,[J,r(a)])]),e("li",null,[e("a",w,[L,r(a)])])])],64)}var z=t(d,[["render",M]]);export{z as default};
