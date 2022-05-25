import{_ as a,f as e}from"./app.01d44aa7.js";const r={},d=e('<h1 id="_71-c-\u4E2D\u7684\u6307\u9488\u5B89\u5168\u95EE\u9898\u7684\u4E89\u8BBA" tabindex="-1"><a class="header-anchor" href="#_71-c-\u4E2D\u7684\u6307\u9488\u5B89\u5168\u95EE\u9898\u7684\u4E89\u8BBA" aria-hidden="true">#</a> 71. C++\u4E2D\u7684\u6307\u9488\u5B89\u5168\u95EE\u9898\u7684\u4E89\u8BBA</h1><p>\u4F7F\u7528\u6307\u9488\u7684\u539F\u56E0\u662F\u6211\u4EEC\u9700\u8981\u5728\u5806\u4E0A\u5206\u914D\u5185\u5B58\u3002</p><p>\u539F\u59CB\u6307\u9488\u5BF9\u4E8E\u5185\u5B58\u7684\u7BA1\u7406\u4F9D\u8D56\u4E8E\u7A0B\u5E8F\u5458\u7684\u6C34\u5E73\uFF0C\u800C\u667A\u80FD\u6307\u9488\u6BD4\u539F\u59CB\u6307\u9488\u5360\u7528\u66F4\u5927\u7684\u6027\u80FD\u5F00\u9500\u3002</p><h2 id="_1-\u5B89\u5168\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u5168\u95EE\u9898" aria-hidden="true">#</a> 1.\u5B89\u5168\u95EE\u9898</h2><h3 id="_1-1-\u5185\u5B58\u6CC4\u6F0F" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5185\u5B58\u6CC4\u6F0F" aria-hidden="true">#</a> 1.1 \u5185\u5B58\u6CC4\u6F0F</h3><p>\u95EE\u9898\u5C0F\u5230\u53EF\u80FD\u4E0D\u4F1A\u6CE8\u610F\u5230\uFF0C\u5927\u5230\u6216\u53EF\u80FD\u5BFC\u81F4\u7A0B\u5E8F\u5D29\u6E83\uFF0C\u56E0\u4E3A\u5185\u5B58\u88AB\u8017\u5C3D\u3002</p><h3 id="_1-2-\u5185\u5B58\u5206\u914D-\u6E05\u7406\u662F\u8C01\u6765\u5B8C\u6210\u3002\u8FD9\u662F\u6240\u6709\u6743\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5185\u5B58\u5206\u914D-\u6E05\u7406\u662F\u8C01\u6765\u5B8C\u6210\u3002\u8FD9\u662F\u6240\u6709\u6743\u95EE\u9898" aria-hidden="true">#</a> 1.2 \u5185\u5B58\u5206\u914D\uFF0C\u6E05\u7406\u662F\u8C01\u6765\u5B8C\u6210\u3002\u8FD9\u662F\u6240\u6709\u6743\u95EE\u9898</h3><p>\u5982\u679C\u603B\u662F\u624B\u52A8\u7684\u53BB\u91CA\u653E\u5185\u5B58\uFF0C\u8FD9\u4F1A\u6781\u5927\u7684\u63D0\u5347\u590D\u6742\u5EA6\u3002 -&gt; \u4FDD\u8BC1\u5185\u5B58\u7684\u6B63\u786E\u91CA\u653E\u4E0D\u80FD\u9760(\u6210\u4E3A\u4E00\u4E2A\u53EF\u9760\u7684\u7A0B\u5E8F\u5458\u8FD9\u79CD\u8BF4\u6CD5\u6765\u5B8C\u6210) \uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u53EF\u9760\u7684\u771F\u6B63\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528\u7F16\u7A0B\u81EA\u52A8\u5316\uFF0C\u4EFB\u4F55\u65F6\u5019\u5B8C\u6210\u81EA\u52A8\u5316\u90FD\u662F\u5F88\u597D\u7684\uFF0C\u7279\u522B\u662F\u91CA\u653E\u5185\u5B58\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u6784\u9020\u81EA\u5DF1\u7684\u667A\u80FD\u6307\u9488\u6216\u662F\u4F7F\u7528\u6807\u51C6\u5E93\u4E2D\u7684\u3002</p><ul><li><p>\u57FA\u4E8E\u4F5C\u7528\u57DF\u7684\u6307\u9488 std::unique_ptr</p></li><li><p>\u5F15\u7528\u8BA1\u6570\u7CFB\u7EDF\u7684 std::shared_ptr</p></li><li><p>\u6216\u662F\u5F31\u5F15\u7528\u6982\u5FF5\u7684 std::weak_ptr</p></li></ul><h3 id="_1-3-\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\u539F\u59CB\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\u539F\u59CB\u6307\u9488" aria-hidden="true">#</a> 1.3 \u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\u539F\u59CB\u6307\u9488</h3><p>\u5C0F\u7684\u6C99\u76D2\u5E94\u7528\uFF0Cdemo\uFF0C\u5199\u8D77\u6765\u66F4\u8F7B\u677E\uFF0C\u4EE3\u7801\u66F4\u5E72\u51C0\uFF0C\u4E0D\u9700\u5173\u5FC3\u662F\u5426\u91CA\u653E\u4E86\u5185\u5B58\uFF0C\u4E0D\u9700\u8981\u5173\u5FC3\u6240\u6709\u6743\u3002</p><p>\u771F\u6B63\u7684\u6846\u67B6\uFF0C\u771F\u6B63\u7684\u5E94\u7528\uFF0C\u771F\u6B63\u7684\u751F\u4EA7\u73AF\u5883\u4E0B\uFF0C\u5E94\u8BE5\u4F7F\u7528\u667A\u80FD\u6307\u9488\u3002\u66F4\u52A0\u53EF\u9760\uFF0C\u4E0D\u9700\u8981\u8003\u8651\u662F\u5426\u91CA\u653E\u4E86\u5185\u5B58\u3002</p>',14);function h(i,t){return d}var _=a(r,[["render",h]]);export{_ as default};
