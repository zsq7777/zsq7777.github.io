import{_ as e,f as a}from"./app.5bafefdc.js";const s={},r=a('<h1 id="_07-\u6E90\u7801\u9605\u8BFB\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_07-\u6E90\u7801\u9605\u8BFB\u603B\u7ED3" aria-hidden="true">#</a> 07. \u6E90\u7801\u9605\u8BFB\u603B\u7ED3</h1><p>Message\u662F\u4E00\u4E2A\u6570\u636E\u7C7B\uFF0C\u4E3A\u94FE\u8868\u7684\u5B58\u50A8\u7ED3\u6784\uFF0C\u53EF\u4EE5\u4F7F\u7528obtain()\u65B9\u6CD5\u83B7\u53D6\u56DE\u6536\u6C60\u5BF9\u8C61\uFF0C\u4E5F\u6709\u5BF9\u5E94\u7684\u5BF9\u8C61\u56DE\u6536\u65B9\u6CD5\u3002 Looper\u4E2D\u6301\u6709<code>ThreadLocal&lt;Looper&gt;</code>,ThreadLocal set looper\u5BF9\u8C61\uFF08Looper.prepare\uFF09, Looper.loop()\u5FAA\u73AF\u4ECEMessagerQueue.next()\u65B9\u6CD5\u53D6\u51FAMessage,\u7136\u540E\u8C03\u7528Handler.dispatchMessage(msg),\u5C06\u6D88\u606F\u53D1\u9001\u7ED9Handler\u3002\u6700\u540E\u56DE\u6536message\u5230\u5BF9\u8C61\u56DE\u6536\u6C60\u3002</p><p>MessageQueue, \u4ECEnext()\u65B9\u6CD5\u5F00\u59CB\u5206\u6790, \u4ECE\u94FE\u8868\u5C3E\u90E8\u53D6\u51FAMessage\u3002 \u5176\u4E2D\u5305\u542B\uFF0C\u963B\u585E\u6D88\u606F\u7684native\u65B9\u6CD5\u3002 \u5982\u679C\u6CA1\u6709Message\u5C31\u65E0\u9650\u963B\u585E\u7B49\u5F85\u6D88\u606F\u5230\u6765\u3002</p><p>Handler\u7684\u5B58\u5165\u4E0E\u5904\u7406\uFF1AenqueueMessage() dispatchMessage()</p><p>enqueueMessage() \u5165\u961F\uFF0C\u5B58\u5165Message;</p><p>\u4ECE\u961F\u5217\u4E2D\u83B7\u53D6\u6D88\u606F\u540E\u8C03\u7528handler.dispatchMessage(), \u5982\u679C\u6709callback \u90A3\u4E48\uFF0C\u4F7F\u7528Message.callback\u56DE\u8C03\u65B9\u6CD5\u3002 \u5982\u679C\u6CA1\u6709\u90A3\u4E48\u5FC5\u987B\u5728\u5B50\u7C7B\u4E2D\u5B9E\u73B0Handler.handlerMessage\u65B9\u6CD5\u63A5\u6536Message\u3002</p><ol><li>\u6D88\u606F\u5165\u961F\uFF0C \u600E\u4E48\u5165\u961F\u7684\uFF1F \u600E\u4E48\u5165\u961F\u4E4B\u540E\u5148\u8FDB\u5148\u51FA\uFF1F</li><li>Handler\u662F\u5982\u4F55\u4E0E\u5F53\u524D\u7EBF\u7A0B\u7ED1\u5B9A\u7684\uFF1F</li></ol>',7);function o(t,l){return r}var d=e(s,[["render",o]]);export{d as default};
