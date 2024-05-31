"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[379],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>k});var n=l(67294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(l),c=a,k=u["".concat(s,".").concat(c)]||u[c]||y[c]||r;return l?n.createElement(k,i(i({ref:e},d),{},{components:l})):n.createElement(k,i({ref:e},d))}));function k(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,i=new Array(r);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<r;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},25391:(t,e,l)=>{l.r(e),l.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=l(87462),a=(l(67294),l(3905));const r={},i="Get Users Cursor",o={type:"api",id:"get-users-cursor",unversionedId:"get-users-cursor",title:"Get Users Cursor",description:"",slug:"/get-users-cursor",frontMatter:{},api:{tags:["users"],operationId:"get_users_cursor_api_v1_users_cursor_get",parameters:[{required:!1,schema:{title:"Before",type:"string"},name:"before",in:"query"},{required:!1,schema:{title:"After",type:"string"},name:"after",in:"query"},{required:!1,schema:{title:"Sort Key",maxLength:32,type:"string",default:"username"},name:"sort_key",in:"query"},{required:!1,schema:{title:"Max Count",maximum:1e4,exclusiveMinimum:0,type:"integer",default:100},name:"max_count",in:"query"},{required:!1,schema:{title:"Api Client Id",type:"string",format:"uuid"},name:"api_client_id",in:"query"},{required:!1,schema:{title:"Search Text",type:"string"},name:"search_text",in:"query"},{required:!1,schema:{title:"Auth Method",type:"string"},name:"auth_method",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"FrontEndUserPage",required:["sort_key","items","order"],type:"object",properties:{prev:{title:"Prev",type:"string"},next:{title:"Next",type:"string"},sort_key:{title:"Sort Key",type:"string"},items:{title:"Items",type:"array",items:{title:"FrontEndUser",required:["id","display_name","auth_method","user_id","enabled","deleted","notes","show_on_leaderboard"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","google","local","system"],type:"string"},user_id:{title:"User Id",type:"string",format:"uuid"},enabled:{title:"Enabled",type:"boolean"},deleted:{title:"Deleted",type:"boolean"},notes:{title:"Notes",type:"string"},created_date:{title:"Created Date",type:"string",format:"date-time"},show_on_leaderboard:{title:"Show On Leaderboard",type:"boolean"},streak_days:{title:"Streak Days",type:"integer"},streak_last_day_date:{title:"Streak Last Day Date",type:"string",format:"date-time"},last_activity_date:{title:"Last Activity Date",type:"string",format:"date-time"},tos_acceptance_date:{title:"Tos Acceptance Date",type:"string",format:"date-time"}}}},order:{title:"Order",enum:["asc","desc"],type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],description:"Get Users Cursor",method:"get",path:"/api/v1/users/cursor",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Users Cursor",description:{type:"text/plain"},url:{path:["api","v1","users","cursor"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"before",value:"<string>"},{description:{content:"",type:"text/plain"},key:"after",value:"<string>"},{description:{content:"",type:"text/plain"},key:"sort_key",value:"username"},{description:{content:"",type:"text/plain"},key:"max_count",value:"100"},{description:{content:"",type:"text/plain"},key:"api_client_id",value:"<uuid>"},{description:{content:"",type:"text/plain"},key:"search_text",value:"<string>"},{description:{content:"",type:"text/plain"},key:"auth_method",value:"<string>"}],variable:[]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-users-cursor",previous:{title:"Get Users Ordered By Display Name",permalink:"/Open-Assistant/api/get-users-ordered-by-display-name"},next:{title:"Get User",permalink:"/Open-Assistant/api/get-user"}},s=[],p={toc:s},d="wrapper";function u(t){let{components:e,...l}=t;return(0,a.kt)(d,(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-users-cursor"},"Get Users Cursor"),(0,a.kt)("p",null,"Get Users Cursor"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"before"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Before"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"after"),(0,a.kt)("span",{style:{opacity:"0.6"}}," After"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sort_key"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Sort Key"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," length \u2264 32")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"max_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Max Count"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," 0 < value \u2264 10000")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"api_client_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"search_text"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Search Text"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"auth_method"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Auth Method"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"prev"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Prev"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"next"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Next"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sort_key"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Sort Key"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"items"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Id"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"display_name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Display Name"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"auth_method"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Auth Method"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"discord"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"google"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"system"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enabled"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Enabled"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"deleted"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Deleted"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"notes"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Notes"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"created_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"show_on_leaderboard"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Show On Leaderboard"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"streak_days"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Streak Days"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"streak_last_day_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"last_activity_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"tos_acceptance_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"order"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Order"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"asc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"desc"),"]"))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"422")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"detail"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"loc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"msg"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}u.isMDXComponent=!0}}]);