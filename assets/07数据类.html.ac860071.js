const e={key:"v-489aa49b",path:"/nodes/android/kotlin/HandFirstKotlin%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/07%E6%95%B0%E6%8D%AE%E7%B1%BB.html",title:"07. \u6570\u636E\u7C7B",lang:"zh-CN",frontmatter:{icon:"edit",date:"2022-05-11T00:00:00.000Z",category:["Kotlin"],tag:["\u5B66\u4E60\u7B14\u8BB0"],summary:"07. \u6570\u636E\u7C7B 1. \u6570\u636E\u7C7B\u7684\u6765\u6E90 \u6570\u636E\u7C7B\u6765\u6E90\u4E8E\u6240\u6709\u7C7B\u7684\u7236\u7C7B:Any\u3002 \u4E5F\u5C31\u662F\u8BF4\u6240\u6709\u7C7B\u90FD\u662F\u591A\u6001\u7684\u3002\u4ED6\u4EEC\u62E5\u6709\u4E00\u4E9B\u5171\u540C\u7684\u884C\u4E3A(\u65B9\u6CD5/\u51FD\u6570)\uFF0C\u4F46\u6570\u636E\u7C7B\u91CD\u5199\u4E86\u4E00\u4E9B\u65B9\u6CD5 1.1 equals(any:Any) Boolean 1.1.1 \u666E\u901A\u7C7B equals\u7B49\u4EF7\u4E8E==\uFF0C\u6BD4\u5BF9\u4E86\u4ED6\u4EEC\u7684\u5F15\u7528\uFF0C\u662F\u5426\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002 1.1.2 \u6570\u636E\u7C7B \u6BD4\u5BF9\u4E86\u5BF9\u8C61\u4E0E\u5BF9\u8C61\u5C5E\u6027\u7684\u503C\uFF0C\u5982\u679C\u4ED6\u4EEC\u76F8\u540C\uFF0C\u90A3",head:[["meta",{property:"og:url",content:"https://zhaosiqi.com/nodes/android/kotlin/HandFirstKotlin%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/07%E6%95%B0%E6%8D%AE%E7%B1%BB.html"}],["meta",{property:"og:site_name",content:"Able Blog"}],["meta",{property:"og:title",content:"07. \u6570\u636E\u7C7B"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"\u5B66\u4E60\u7B14\u8BB0"}],["meta",{property:"article:published_time",content:"2022-05-11T00:00:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. \u6570\u636E\u7C7B\u7684\u6765\u6E90",slug:"_1-\u6570\u636E\u7C7B\u7684\u6765\u6E90",children:[{level:3,title:"1.1 equals(any:Any) Boolean",slug:"_1-1-equals-any-any-boolean",children:[]},{level:3,title:"1.2 hashcode():Int",slug:"_1-2-hashcode-int",children:[]},{level:3,title:"1.3 toString():String",slug:"_1-3-tostring-string",children:[]},{level:3,title:"1.4 \u91CD\u5199/\u751F\u6210\u8FD9\u4E9B\u65B9\u6CD5",slug:"_1-4-\u91CD\u5199-\u751F\u6210\u8FD9\u4E9B\u65B9\u6CD5",children:[]}]},{level:2,title:"2. \u6570\u636E\u7C7B\u7684coye\u65B9\u6CD5",slug:"_2-\u6570\u636E\u7C7B\u7684coye\u65B9\u6CD5",children:[]},{level:2,title:"3. componentN\u65B9\u6CD5",slug:"_3-componentn\u65B9\u6CD5",children:[{level:3,title:"3.1 \u4F9D\u6B21\u83B7\u53D6\u6570\u636E\u7C7B\u4E2D\u5C5E\u6027\u7684\u503C",slug:"_3-1-\u4F9D\u6B21\u83B7\u53D6\u6570\u636E\u7C7B\u4E2D\u5C5E\u6027\u7684\u503C",children:[]},{level:3,title:"3.2 \u5C06\u5C5E\u6027\u503C\u4F9D\u6B21\u8D4B\u503C\u7ED9\u53D8\u91CF",slug:"_3-2-\u5C06\u5C5E\u6027\u503C\u4F9D\u6B21\u8D4B\u503C\u7ED9\u53D8\u91CF",children:[]}]},{level:2,title:"4. \u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570",slug:"_4-\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570",children:[{level:3,title:"4.1 \u6784\u9020\u51FD\u6570\u4E2D\u4F7F\u7528",slug:"_4-1-\u6784\u9020\u51FD\u6570\u4E2D\u4F7F\u7528",children:[]},{level:3,title:"4.2 \u666E\u901A\u51FD\u6570\u4E2D\u4E5F\u53EF\u4F7F\u7528",slug:"_4-2-\u666E\u901A\u51FD\u6570\u4E2D\u4E5F\u53EF\u4F7F\u7528",children:[]},{level:3,title:"4.3 \u8F85\u52A9\u6784\u9020\u51FD\u6570",slug:"_4-3-\u8F85\u52A9\u6784\u9020\u51FD\u6570",children:[]}]},{level:2,title:"5. \u6570\u636E\u7C7B\u7684\u4F7F\u7528\u6280\u5DE7\u53CA\u6CE8\u610F\u4E8B\u9879",slug:"_5-\u6570\u636E\u7C7B\u7684\u4F7F\u7528\u6280\u5DE7\u53CA\u6CE8\u610F\u4E8B\u9879",children:[]}],git:{createdTime:1652283936e3,updatedTime:1652283936e3,contributors:[{name:"zsqan",email:"zsqandzyr@gmail.com",commits:1}]},readingTime:{minutes:1.95,words:584},filePathRelative:"nodes/android/kotlin/HandFirstKotlin\u7A0B\u5E8F\u8BBE\u8BA1/07\u6570\u636E\u7C7B.md"};export{e as data};
