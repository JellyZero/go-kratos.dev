"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2844],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6204:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],l={id:"overview",title:"Overview"},p=void 0,s={unversionedId:"component/middleware/overview",id:"component/middleware/overview",title:"Overview",description:"Kratos has a series of built-in middleware to deal with common purpose such as logging or metrics. You could also implement Middleware interface to develop your custom middleware to process common business such as the user authentication etc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/01-overview.md",sourceDirName:"component/middleware",slug:"/component/middleware/overview",permalink:"/en/docs/component/middleware/overview",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Routing and Load Balancing",permalink:"/en/docs/component/selector"},next:{title:"Authentication",permalink:"/en/docs/component/middleware/auth"}},d=[{value:"Built-in Middleware",id:"built-in-middleware",children:[{value:"logging",id:"logging",children:[],level:3},{value:"metrics",id:"metrics",children:[],level:3},{value:"recovery",id:"recovery",children:[],level:3},{value:"status",id:"status",children:[],level:3},{value:"tracing",id:"tracing",children:[],level:3},{value:"validate",id:"validate",children:[],level:3},{value:"auth",id:"auth",children:[],level:3},{value:"ratelimit",id:"ratelimit",children:[],level:3},{value:"circuitbreaker",id:"circuitbreaker",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Custom Middleware",id:"custom-middleware",children:[],level:2}],c={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kratos has a series of built-in middleware to deal with common purpose such as logging or metrics. You could also implement Middleware interface to develop your custom middleware to process common business such as the user authentication etc."),(0,a.kt)("h2",{id:"built-in-middleware"},"Built-in Middleware"),(0,a.kt)("p",null,"Their codes are located in ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware")," directory."),(0,a.kt)("h3",{id:"logging"},"logging"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware/logging"),", this middleware is for logging the request."),(0,a.kt)("h3",{id:"metrics"},"metrics"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware/metrics"),", this middleware is for enabling metric."),(0,a.kt)("h3",{id:"recovery"},"recovery"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware/recovery"),"\uff0c, this middleware is for panic recovery."),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware/status"),", this middleware is for transformation of gRPC error."),(0,a.kt)("h3",{id:"tracing"},"tracing"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware/tracing"),", this middleware is for enabling trace."),(0,a.kt)("h3",{id:"validate"},"validate"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware/validate"),", this middleware is for parameter validation."),(0,a.kt)("h3",{id:"auth"},"auth"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware/auth"),", this middleware is for authority check using JWT."),(0,a.kt)("h3",{id:"ratelimit"},"ratelimit"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware/ratelimit"),", this middleware is for traffic control in server side."),(0,a.kt)("h3",{id:"circuitbreaker"},"circuitbreaker"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware/circuitbreaker"),", this middleware is for breaker control in client side."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Register it with ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerOption")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"NewGRPCServer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NewHTTPServer"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// http\n// define opts\nvar opts = []http.ServerOption{\n    http.Middleware(\n        recovery.Recovery(),\n        tracing.Server(),\n        logging.Server(),\n    ),\n}\n// create server\nhttp.NewServer(opts...)\n\n\n\n//grpc\nvar opts = []grpc.ServerOption{\n        grpc.Middleware(\n            recovery.Recovery(),\n            status.Server(),\n            tracing.Server(),\n            logging.Server(),\n        ),\n    }\n// create server\ngrpc.NewServer(opts...)\n\n")),(0,a.kt)("h2",{id:"custom-middleware"},"Custom Middleware"),(0,a.kt)("p",null,"Customized middleware for specific routes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"server:",(0,a.kt)("inlineCode",{parentName:"li"},"selector.Server(ms...)")," "),(0,a.kt)("li",{parentName:"ul"},"client:",(0,a.kt)("inlineCode",{parentName:"li"},"selector.Client(ms...)"))),(0,a.kt)("p",null,"Matching rule (multi parameter)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Path(path...)"),"        path match")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Regex(regex...)"),"      regex match")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Prefix(prefix...)"),"    prefix path match")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Match(fn)"),"            function match, The function format is ",(0,a.kt)("inlineCode",{parentName:"p"},"func(ctx context.Context,operation string) bool"),","),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"operation")," is path,If the return value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),",match successful, ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"transport.FromServerContext(ctx)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"transport.FromClientContext(ctx")," get ",(0,a.kt)("inlineCode",{parentName:"p"},"Transporter")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"http server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/middleware/selector"\n\nhttp.Middleware(\n            selector.Server(recovery.Recovery(), tracing.Server(),testMiddleware).\n                Path("/hello.Update/UpdateUser", "/hello.kratos/SayHello").\n                Regex(`/test.hello/Get[0-9]+`).\n                Prefix("/kratos.", "/go-kratos.", "/helloworld.Greeter/").\n                Build(),\n        )\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"http client")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/middleware/selector"\n\nhttp.WithMiddleware(\n            selector.Client(recovery.Recovery(), tracing.Server(),testMiddleware).\n                Path("/hello.Update/UpdateUser", "/hello.kratos/SayHello").\n                Regex(`/test.hello/Get[0-9]+`).\n                Prefix("/kratos.", "/go-kratos.", "/helloworld.Greeter/").\n                Match(func(ctx context.Context,operation string) bool {\n                    if strings.HasPrefix(operation, "/go-kratos.dev") || strings.HasSuffix(operation, "world") {\n                        return true\n                    }\n                    tr, ok := transport.FromClientContext(ctx)\n                    if !ok {\n                        return false\n                    }\n                    if tr.RequestHeader().Get("go-kratos") == "kratos" {\n                        return true\n                    }\n                    return false\n                }).Build(),\n        )\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"grpc server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/middleware/selector"\n\ngrpc.Middleware(\n            selector.Server(recovery.Recovery(), tracing.Server(),testMiddleware).\n                Path("/hello.Update/UpdateUser", "/hello.kratos/SayHello").\n                Regex(`/test.hello/Get[0-9]+`).\n                Prefix("/kratos.", "/go-kratos.", "/helloworld.Greeter/").\n                Build(),\n        )\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"grpc client")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/middleware/selector"\n\ngrpc.Middleware(\n            selector.Client(recovery.Recovery(), tracing.Server(),testMiddleware).\n                Path("/hello.Update/UpdateUser", "/hello.kratos/SayHello").\n                Regex(`/test.hello/Get[0-9]+`).\n                Prefix("/kratos.", "/go-kratos.", "/helloworld.Greeter/").\n                Build(),\n        )\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note: the customized middleware matches through ",(0,a.kt)("inlineCode",{parentName:"strong"},"operation"),", not is the HTTP routing\uff01\uff01\uff01")," "),(0,a.kt)("p",{parentName:"blockquote"},"operation is the unified GRC path of HTTP and GRC")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"operation find")),(0,a.kt)("p",null,"gRPC path's splicing rule is ",(0,a.kt)("inlineCode",{parentName:"p"},"/package.service/method")),(0,a.kt)("p",null,"For example, in the following proto file\uff0cif we want to call the sayhello method, then the operation is ",(0,a.kt)("inlineCode",{parentName:"p"},"/helloworld.Greeter/SayHello")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage helloworld;\n\nimport "google/api/annotations.proto";\n\noption go_package = "github.com/go-kratos/kratos/examples/helloworld/helloworld";\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply)  {\n        option (google.api.http) = {\n            get: "/helloworld/{name}",\n        };\n  }\n}\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n')))}u.isMDXComponent=!0}}]);