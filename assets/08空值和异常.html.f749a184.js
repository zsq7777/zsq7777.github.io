const l={key:"v-6b123ab0",path:"/nodes/android/kotlin/HandFirstKotlin%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/08%E7%A9%BA%E5%80%BC%E5%92%8C%E5%BC%82%E5%B8%B8.html",title:"08. \u7A7A\u503C\u548C\u5F02\u5E38",lang:"zh-CN",frontmatter:{icon:"edit",date:"2022-05-12T00:00:00.000Z",category:["Kotlin"],tag:["\u5B66\u4E60\u7B14\u8BB0"],summary:"08. \u7A7A\u503C\u548C\u5F02\u5E38 0. null\u662F\u4EC0\u4E48 null\u662F\u7A7A\u503C\u7684\u610F\u601D\uFF0C\u4ED6\u5728kotlin\u4E2D\u662F\u4E00\u79CD\u5F02\u5E38\u3002 \u5C31\u50CF\u4E00\u4E2A\u7A7A\u676F\u5B50\uFF0C\u559D\u7684\u65F6\u5019\u5FC5\u987B\u6709\u6C34\uFF0C\u6CA1\u6C34\u5C31\u662F\u5F02\u5E38\u3002 \u94B1\u5305\u91CC\u5FC5\u987B\u6709\u94B1\uFF0C\u82B1\u94B1\u7684\u65F6\u5019\u6CA1\u94B1\u5C31\u662F\u5F02\u5E38\u3002 \u5F53\u7136\uFF0C\u6211\u7684\u676F\u5B50\uFF0C\u6211\u53EF\u4EE5\u5728\u4E00\u5F00\u59CB\u7684\u65F6\u5019\u58F0\u660E\u4ED6\u6CA1\u6C34(\u53EF\u7A7A\u7C7B\u578B) \u4F46\u662F\u6211\u559D\u7684\u65F6\u5019\uFF0C\u676F\u5B50\u53EF\u80FD\u6CA1\u6C34\u8FD9\u4EF6\u4E8B\uFF0Ckotlin\u4F1A\u663E\u5F0F\u7684\u63D0\u9192\u6211\u4EEC\uFF0C\u5144\u5F1F\u8FD9\u53EF\u80FD\u6CA1\u6C34\uFF08\u544A\u8BC9\u4F60\u5FC5\u987B\u5B89\u5168\u7684\u8C03\u7528\u5B83\uFF09\uFF0C\u4F60\u5F97",head:[["meta",{property:"og:url",content:"https://zhaosiqi.com/nodes/android/kotlin/HandFirstKotlin%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/08%E7%A9%BA%E5%80%BC%E5%92%8C%E5%BC%82%E5%B8%B8.html"}],["meta",{property:"og:site_name",content:"Able Blog"}],["meta",{property:"og:title",content:"08. \u7A7A\u503C\u548C\u5F02\u5E38"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"\u5B66\u4E60\u7B14\u8BB0"}],["meta",{property:"article:published_time",content:"2022-05-12T00:00:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"0. null\u662F\u4EC0\u4E48",slug:"_0-null\u662F\u4EC0\u4E48",children:[]},{level:2,title:"1. \u7A7A\u53D8\u91CF\u7684\u58F0\u660E",slug:"_1-\u7A7A\u53D8\u91CF\u7684\u58F0\u660E",children:[]},{level:2,title:"1.1 \u5C40\u90E8\u53D8\u91CF",slug:"_1-1-\u5C40\u90E8\u53D8\u91CF",children:[{level:3,title:"1.1.1 \u4E0D\u4F7F\u7528a\u53D8\u91CF\u7684\u60C5\u51B5",slug:"_1-1-1-\u4E0D\u4F7F\u7528a\u53D8\u91CF\u7684\u60C5\u51B5",children:[]},{level:3,title:"1.1.2 \u4F7F\u7528\u672A\u521D\u59CB\u5316\u7684a\u53D8\u91CF\u65F6",slug:"_1-1-2-\u4F7F\u7528\u672A\u521D\u59CB\u5316\u7684a\u53D8\u91CF\u65F6",children:[]}]},{level:2,title:"1.2 (\u6210\u5458\u53D8\u91CF/\u5B9E\u4F8B\u53D8\u91CF) \uFF0C(\u7C7B\u53D8\u91CF/\u9759\u6001\u53D8\u91CF)",slug:"_1-2-\u6210\u5458\u53D8\u91CF-\u5B9E\u4F8B\u53D8\u91CF-\u7C7B\u53D8\u91CF-\u9759\u6001\u53D8\u91CF",children:[]},{level:2,title:"1.3 \u4F8B\u5916\u7684\u60C5\u51B5",slug:"_1-3-\u4F8B\u5916\u7684\u60C5\u51B5",children:[{level:3,title:"1.3.1 \u62BD\u8C61\u5C5E\u6027",slug:"_1-3-1-\u62BD\u8C61\u5C5E\u6027",children:[]},{level:3,title:"1.3.2 lateinit\u7684\u975E\u57FA\u672C\u7C7B\u578B\u53D8\u91CF",slug:"_1-3-2-lateinit\u7684\u975E\u57FA\u672C\u7C7B\u578B\u53D8\u91CF",children:[]},{level:3,title:"\u603B\u7ED3",slug:"\u603B\u7ED3",children:[]}]},{level:2,title:"2. \u663E\u5F0F\u7684\u58F0\u660E\u7C7B\u578B\u53EF\u7A7A",slug:"_2-\u663E\u5F0F\u7684\u58F0\u660E\u7C7B\u578B\u53EF\u7A7A",children:[]},{level:2,title:"3. \u907F\u514D\u7A7A\u503C(null)\u9020\u6210\u7684\u5F02\u5E38\u95EE\u9898",slug:"_3-\u907F\u514D\u7A7A\u503C-null-\u9020\u6210\u7684\u5F02\u5E38\u95EE\u9898",children:[{level:3,title:"3.1 ?.\u64CD\u4F5C\u7B26",slug:"_3-1-\u64CD\u4F5C\u7B26",children:[]},{level:3,title:"3.2 Elvis\u64CD\u4F5C\u7B26",slug:"_3-2-elvis\u64CD\u4F5C\u7B26",children:[]},{level:3,title:"3.3 !! \u975E\u7A7A\u65AD\u8A00",slug:"_3-3-\u975E\u7A7A\u65AD\u8A00",children:[]},{level:3,title:"3.2 \u4F5C\u7528\u57DF\u51FD\u6570let",slug:"_3-2-\u4F5C\u7528\u57DF\u51FD\u6570let",children:[]},{level:3,title:"3.2.2 \u8FD4\u56DE\u8868\u8FBE\u5F0F\u7ED3\u679C",slug:"_3-2-2-\u8FD4\u56DE\u8868\u8FBE\u5F0F\u7ED3\u679C",children:[]},{level:3,title:"3.2.3 \u603B\u7ED3",slug:"_3-2-3-\u603B\u7ED3",children:[]}]},{level:2,title:"4. \u5F02\u5E38",slug:"_4-\u5F02\u5E38",children:[{level:3,title:"4.1 \u6355\u83B7\u5F02\u5E38",slug:"_4-1-\u6355\u83B7\u5F02\u5E38",children:[]},{level:3,title:"4.2 \u629B\u51FA\u5F02\u5E38",slug:"_4-2-\u629B\u51FA\u5F02\u5E38",children:[]},{level:3,title:"4.3 \u8868\u8FBE\u5F0F\u65B9\u5F0F",slug:"_4-3-\u8868\u8FBE\u5F0F\u65B9\u5F0F",children:[]}]},{level:2,title:"4.3.1 try\u8868\u8FBE\u5F0F",slug:"_4-3-1-try\u8868\u8FBE\u5F0F",children:[]},{level:2,title:"4.3.2 throw\u8868\u8FBE\u5F0F",slug:"_4-3-2-throw\u8868\u8FBE\u5F0F",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},readingTime:{minutes:3.56,words:1069},filePathRelative:"nodes/android/kotlin/HandFirstKotlin\u7A0B\u5E8F\u8BBE\u8BA1/08\u7A7A\u503C\u548C\u5F02\u5E38.md"};export{l as data};
