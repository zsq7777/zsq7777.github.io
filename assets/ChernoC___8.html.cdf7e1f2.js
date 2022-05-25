import{_ as a,f as e}from"./app.01d44aa7.js";const r={},h=e('<h1 id="_08-c-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_08-c-\u53D8\u91CF" aria-hidden="true">#</a> 08. C++\u53D8\u91CF</h1><h2 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h2><p>\u53D8\u91CF\u5141\u8BB8\u6211\u4EEC\u5411\u5185\u5B58\u4E2D\u5B58\u50A8\u6570\u636E\uFF0C\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\u3002\u5B83\u5B58\u50A8\u5728\u6808\u548C\u5806\u4E2D\u3002</p><h2 id="\u57FA\u672C\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u672C\u6570\u636E\u7C7B\u578B</h2><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u57FA\u672C\u6784\u6210\u4E86\u6211\u4EEC\u7A0B\u5E8F\u4E2D\u5B58\u50A8\u7684\u4EFB\u4F55\u6570\u636E\u7C7B\u578B\u3002 \u5728\u6B64\u57FA\u7840\u4E0A\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u5E76\u5B58\u50A8\u6211\u4EEC\u7684\u4EFB\u4F55\u6570\u636E\u3002 \u800C\u4E0D\u540C\u53D8\u91CF\u7C7B\u578B\u4E4B\u95F4\u7684\u533A\u522B\u5728C++\u4E2D\u662F\u4F1A\u5360\u7528\u591A\u5C11\u5185\u5B58\u3002</p><h2 id="\u6240\u8868\u793A\u7684\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u6240\u8868\u793A\u7684\u5927\u5C0F" aria-hidden="true">#</a> \u6240\u8868\u793A\u7684\u5927\u5C0F</h2><ul><li>int \u5185\u5B58\u5360\u7528\u7684\u5927\u5C0F\u548C\u6570\u5B57\u5927\u5C0F\u6709\u76F4\u63A5\u76F8\u5173,\u4E00\u4E2A\u6574\u6570\u662F4\u4E2A\u5B57\u8282\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD94\u4E2A\u5B57\u8282\u4E2D\u5B58\u50A8\u503C\u3002\u4E00\u4E2A\u5B57\u8282\u662F8\u6BD4\u7279\uFF0C\u6BD4\u7279\u662F\u8BA1\u7B97\u673A\u5185\u5B58\u4E2D\u7684\u6700\u5C0F\u5355\u4F4D\u30020\u548C1\u8868\u793A\u6BD4\u7279\u503C\u3002\u8FD932\u4E3A\u4E2D\u6709\u4E00\u4F4D\u662F\u7B26\u53F7\u4F4D\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\u4ED6\u53EF\u4EE5\u662F\u8D1F\u7684\u3002\u5269\u4E0B31\u4E2A\u6BD4\u7279\u30022\u768431\u6B21\u65B9\u5C31\u662F\u4ED6\u7684\u6700\u5927\u503C\u300220\u591A\u4EBF\u3002</li><li>unsigned int \u65E0\u7B26\u53F7\u6570\uFF0C\u53BB\u6389\u7B26\u53F7\u4F4D\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u591A\u51FA\u4E86\u4E00\u4E2Abit\u4F4D\uFF0C\u523040\u591A\u4EBF\u3002</li><li>char 1byte \u5B57\u7B26\u7C7B\u578B</li><li>short 2byte \u77ED\u6574\u578B</li><li>int 4byte \u6574\u578B 16\u4F4D2\u5B57\u8282 32\u4F4D\u4E0B4\u5B57\u8282</li><li>long 4byte \u957F\u6574\u578B 16\u4F4D4\u5B57\u8282 32\u4F4D4\u5B57\u8282 64\u4F4D8\u5B57\u8282</li><li>long long 8byte \u5B57\u8282\u957F\u5EA6\u7531\u7F16\u8BD1\u5668\u51B3\u5B9A</li></ul><p>\u4ED6\u4EEC\u90FD\u53EF\u4EE5\u53BB\u6389\u7B26\u53F7\u4F4D\u3002</p><h3 id="char-1\u5B57\u8282" tabindex="-1"><a class="header-anchor" href="#char-1\u5B57\u8282" aria-hidden="true">#</a> Char 1\u5B57\u8282</h3><p>\u5982\u679C\u8F93\u5165\u5B57\u7B26A,\u90A3\u4E48\u8F93\u51FAA \u5982\u679C\u8F93\u5165\u6570\u5B5765\uFF0C\u4E5F\u8F93\u51FAA</p><h3 id="float-\u5355\u7CBE\u5EA6\u6D6E\u70B9\u578B-8byte" tabindex="-1"><a class="header-anchor" href="#float-\u5355\u7CBE\u5EA6\u6D6E\u70B9\u578B-8byte" aria-hidden="true">#</a> float \u5355\u7CBE\u5EA6\u6D6E\u70B9\u578B 8byte</h3><p>float\u540E\u9762\u52A0f</p><h3 id="double-\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B-8byte" tabindex="-1"><a class="header-anchor" href="#double-\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B-8byte" aria-hidden="true">#</a> double \u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B 8byte</h3><h3 id="boolean-1\u4E2A\u5B57\u8282-true-\u548Cfalse" tabindex="-1"><a class="header-anchor" href="#boolean-1\u4E2A\u5B57\u8282-true-\u548Cfalse" aria-hidden="true">#</a> boolean 1\u4E2A\u5B57\u8282 true \u548Cfalse</h3><p>0\u8868\u793Afalse\uFF0C\u5176\u4ED6\u8868\u793Atrue</p><p>\u90A3\u4ED6\u53EA\u7528\u5360\u75281byte\u5C31\u884C\u4E86\u3002\u4E3A\u4EC0\u4E48\u89818byte\uFF1F \u5185\u5B58\u5BFB\u5740\u65F6\uFF0C\u9700\u8981\u4ECE\u5185\u5B58\u4E2D\u627E\u5230bool\u53D8\u91CF\u7684\u503C\uFF0C\u6CA1\u6CD5\u5BFB\u5740\u53EA\u67091byte\u7684\u503C\uFF0C\u53EA\u80FD\u5BFB\u5740\u5B57\u8282\u3002 <strong>\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728\u4E00\u4E2A\u5B57\u8282\u4E2D\u5B58\u50A88\u4E2Abyte\u7684bool\u3002\u9AD8\u7EA7\u6280\u5DE7</strong></p><h2 id="sizeof\u64CD\u4F5C\u7B26-\u83B7\u53D6\u5F53\u524D\u7F16\u8BD1\u5668\u5B57\u8282\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#sizeof\u64CD\u4F5C\u7B26-\u83B7\u53D6\u5F53\u524D\u7F16\u8BD1\u5668\u5B57\u8282\u5927\u5C0F" aria-hidden="true">#</a> sizeOf\u64CD\u4F5C\u7B26 \u83B7\u53D6\u5F53\u524D\u7F16\u8BD1\u5668\u5B57\u8282\u5927\u5C0F</h2><h2 id="\u539F\u59CB\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6307\u9488-\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CB\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6307\u9488-\u5F15\u7528" aria-hidden="true">#</a> \u539F\u59CB\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6307\u9488* \u5F15\u7528&amp;</h2><p>bool* bool&amp;</p><hr><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u53D8\u91CF\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5411\u5185\u5B58\u4E2D\u5B58\u50A8\uFF0C\u4FEE\u6539\uFF0C\u8BFB\u53D6\u6570\u636E\uFF0C\u800C\u8FD9\u4E9B\u6570\u636E\u7531\u57FA\u7840\u6570\u636E\u7C7B\u578B\u7EC4\u6210\uFF0C\u800C\u8FD9\u4E9B\u6570\u636E\u7C7B\u578B\u5206\u522B\u5360\u7528\u4E86\u4E0D\u540C\u7684\u5185\u5B58\u7A7A\u95F4\u3002</p>',22);function i(t,d){return h}var l=a(r,[["render",i]]);export{l as default};
