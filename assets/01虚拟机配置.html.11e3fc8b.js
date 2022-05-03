import{_ as i,r as l,o as p,a as o,b as n,d as e,F as c,f as a,e as r}from"./app.5bafefdc.js";const t={},d=a(`<h1 id="_01-\u4F7F\u7528vmware\u5B89\u88C5ubuntu14-04\u7F16\u8BD1aosp" tabindex="-1"><a class="header-anchor" href="#_01-\u4F7F\u7528vmware\u5B89\u88C5ubuntu14-04\u7F16\u8BD1aosp" aria-hidden="true">#</a> 01. \u4F7F\u7528VMware\u5B89\u88C5Ubuntu14.04\u7F16\u8BD1AOSP</h1><h2 id="_1-vmware\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-vmware\u914D\u7F6E" aria-hidden="true">#</a> 1. VMware\u914D\u7F6E</h2><h3 id="_1-1-\u66F4\u6362\u8F6F\u4EF6\u6E90" tabindex="-1"><a class="header-anchor" href="#_1-1-\u66F4\u6362\u8F6F\u4EF6\u6E90" aria-hidden="true">#</a> 1.1 \u66F4\u6362\u8F6F\u4EF6\u6E90</h3><p>\u8BBE\u7F6E-&gt; \u5173\u4E8E -&gt; \u8F6F\u4EF6\u66F4\u65B0 \uFF0C \u6D4B\u8BD5\u5E76\u66F4\u6362\u81F3\u6700\u9002\u5408\u7684\u6E90\u3002</p><h3 id="\u5B89\u88C5vmware-tools" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5vmware-tools" aria-hidden="true">#</a> \u5B89\u88C5VMware Tools</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> open-vm-tools-desktop -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6E\u4F7F\u7528\u5BBF\u4E3B\u673A\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4F7F\u7528\u5BBF\u4E3B\u673A\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u4F7F\u7528\u5BBF\u4E3B\u673A\u4EE3\u7406</h3><ol><li><p>\u8BBE\u7F6E -&gt; \u7F51\u7EDC -&gt; \u624B\u52A8</p></li><li><p>windows ipconfig \u67E5\u770B\u4EE5\u592A\u7F51IPv4\u5730\u5740\u3002</p></li><li><p>\u8BBE\u7F6EHttps\u4EE3\u7406\u53CA\u7AEF\u53E3\u3002</p></li></ol><h3 id="\u66F4\u6362\u8BED\u8A00\u5305" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6362\u8BED\u8A00\u5305" aria-hidden="true">#</a> \u66F4\u6362\u8BED\u8A00\u5305</h3><p>\u8BBE\u7F6E-&gt;\u8BED\u8A00</p><h2 id="_2-aosp\u6E90\u7801\u548C\u5185\u6838\u6E90\u7801\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_2-aosp\u6E90\u7801\u548C\u5185\u6838\u6E90\u7801\u4E0B\u8F7D" aria-hidden="true">#</a> 2. AOSP\u6E90\u7801\u548C\u5185\u6838\u6E90\u7801\u4E0B\u8F7D</h2><p>\u5207\u6362\u5230root\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> -s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-1-\u5B89\u88C5git" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B89\u88C5git" aria-hidden="true">#</a> 2.1 \u5B89\u88C5git</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:git-core/ppa
<span class="token function">sudo</span> add-apt-repository ppa:git-core/ppa
<span class="token function">sudo</span> add-apt-repository ppa:git-core/ppa

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">git</span> config --global --list

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-2-\u5B89\u88C5repo" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5B89\u88C5repo" aria-hidden="true">#</a> 2.2 \u5B89\u88C5repo</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token function">sudo</span> <span class="token function">apt-get</span> update
  <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> repo
  <span class="token function">sudo</span> repo version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-3-\u4E0B\u8F7D\u6E90\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4E0B\u8F7D\u6E90\u4EE3\u7801" aria-hidden="true">#</a> 2.3 \u4E0B\u8F7D\u6E90\u4EE3\u7801</h3>`,19),u={href:"https://source.android.com/setup/start/build-numbers?hl=zh-cn#source-code-tags-and-builds",target:"_blank",rel:"noopener noreferrer"},b=r("\u4EE3\u53F7\uFF0C\u6807\u8BB0\u548Cbuild ID"),h=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> WORKING_DIRECTORY
<span class="token builtin class-name">cd</span> WORKING_DIRECTORY

<span class="token function">git</span> config --global user.name Your Name
<span class="token function">git</span> config --global user.email you@example.com

//\u9ED8\u8BA4
repo init -u https://aosp.tuna.tsinghua.edu.cn/platform/manifest
//\u6307\u5B9A\u5206\u652F\u5206\u652F
repo init -u https://aosp.tuna.tsinghua.edu.cn/platform/manifest -b android-12.1.0_r3

repo <span class="token function">sync</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u5206\u652F\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5207\u6362" aria-hidden="true">#</a> \u5206\u652F\u5207\u6362</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u4ED3\u5E93\u7684\u6240\u6709\u5206\u652F</span>
<span class="token builtin class-name">cd</span> .repo/manifests
<span class="token function">git</span> branch -a <span class="token operator">|</span> <span class="token function">cut</span> -d / -f <span class="token number">3</span>

<span class="token comment"># \u5207\u6362\u5206\u652F</span>

//android-12.1.0_r3

repo init -b android-10.0.0_r39
repo <span class="token function">sync</span>
repo start android-10.0.0_r39 --all 

repo start android-12.1.0_r3 --all 
<span class="token comment"># \u67E5\u770B\u5206\u652F</span>
repo branches
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="\u5185\u6838\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u5185\u6838\u6E90\u7801" aria-hidden="true">#</a> \u5185\u6838\u6E90\u7801</h4>`,4),m={href:"https://source.android.com/setup/start/build-numbers?hl=zh-cn#source-code-tags-and-builds",target:"_blank",rel:"noopener noreferrer"},g=r("\u5185\u6838"),_=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>repo init -u https://android.googlesource.com/kernel/manifest -b android-msm-coral-4.14-android12L
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="aosp\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#aosp\u7F16\u8BD1" aria-hidden="true">#</a> AOSP\u7F16\u8BD1</h4>`,2),f={href:"https://www.sunofbeach.net/course",target:"_blank",rel:"noopener noreferrer"},v=r("\u9633\u5149\u6C99\u6EE9"),k=a(`<h4 id="\u6E90\u7801\u6574\u7F16" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u6574\u7F16" aria-hidden="true">#</a> \u6E90\u7801\u6574\u7F16</h4><h5 id="_1-\u521D\u59CB\u5316\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_1-\u521D\u59CB\u5316\u73AF\u5883" aria-hidden="true">#</a> 1.\u521D\u59CB\u5316\u73AF\u5883</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> build/envsetup.sh
<span class="token function">make</span> clobber
lunch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3);function x(w,I){const s=l("ExternalLinkIcon");return p(),o(c,null,[d,n("p",null,[n("a",u,[b,e(s)])]),h,n("p",null,[n("a",m,[g,e(s)])]),_,n("p",null,[n("a",f,[v,e(s)])]),k],64)}var N=i(t,[["render",x]]);export{N as default};
