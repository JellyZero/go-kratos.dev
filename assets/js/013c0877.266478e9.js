"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2005],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return g}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,v=u["".concat(l,".").concat(g)]||u[g]||s[g]||i;return n?t.createElement(v,c(c({ref:r},d),{},{components:n})):t.createElement(v,c({ref:r},d))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7907:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var t=n(3117),o=n(102),i=(n(7294),n(3905)),c=["components"],a={id:"grpc",title:"gRPC",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,p={unversionedId:"component/transport/grpc",id:"component/transport/grpc",title:"gRPC",description:"transporter/grpc \u4e2d\u57fa\u4e8e\u8c37\u6b4c\u7684 grpc \u6846\u67b6\u5b9e\u73b0\u4e86Transporter\uff0c\u7528\u4ee5\u6ce8\u518c grpc \u5230 kratos.Server() \u4e2d\u3002",source:"@site/docs/component/transport/03-grpc.md",sourceDirName:"component/transport",slug:"/component/transport/grpc",permalink:"/docs/component/transport/grpc",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/transport/03-grpc.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"grpc",title:"gRPC",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"HTTP",permalink:"/docs/component/transport/http"},next:{title:"Protobuf \u89c4\u8303",permalink:"/docs/guide/api-protobuf"}},d=[{value:"server",id:"server",children:[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"<code>Network()</code>",id:"network",children:[],level:4},{value:"<code>Address()</code>",id:"address",children:[],level:4},{value:"<code>Timeout()</code>",id:"timeout",children:[],level:4},{value:"<code>Logger()</code>",id:"logger",children:[],level:4},{value:"<code>Middleware()</code>",id:"middleware",children:[],level:4},{value:"<code>UnaryInterceptor()</code>",id:"unaryinterceptor",children:[],level:4},{value:"<code>Options()</code>",id:"options",children:[],level:4}],level:3},{value:"\u4e3b\u8981\u7684\u5b9e\u73b0\u7ec6\u8282",id:"\u4e3b\u8981\u7684\u5b9e\u73b0\u7ec6\u8282",children:[{value:"<code>NewServer()</code>",id:"newserver",children:[],level:4},{value:"<code>unaryServerInterceptor()</code>",id:"unaryserverinterceptor",children:[],level:4}],level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[{value:"\u6ce8\u518c grpc server",id:"\u6ce8\u518c-grpc-server",children:[],level:4},{value:"grpc server \u4e2d\u4f7f\u7528 kratos middleware",id:"grpc-server-\u4e2d\u4f7f\u7528-kratos-middleware",children:[],level:4},{value:"middleware \u4e2d\u5904\u7406 grpc \u8bf7\u6c42",id:"middleware-\u4e2d\u5904\u7406-grpc-\u8bf7\u6c42",children:[],level:4}],level:3}],level:2},{value:"client",id:"client",children:[{value:"\u914d\u7f6e",id:"\u914d\u7f6e-1",children:[{value:"<code>WithEndpoint()</code>",id:"withendpoint",children:[],level:4},{value:"<code>WithTimeout()</code>",id:"withtimeout",children:[],level:4},{value:"<code>WithMiddleware()</code>",id:"withmiddleware",children:[],level:4},{value:"<code>WithDiscovery()</code>",id:"withdiscovery",children:[],level:4},{value:"<code>WithUnaryInterceptor()</code>",id:"withunaryinterceptor",children:[],level:4},{value:"<code>WithOptions()</code>",id:"withoptions",children:[],level:4}],level:3},{value:"\u4e3b\u8981\u7684\u5b9e\u73b0\u7ec6\u8282",id:"\u4e3b\u8981\u7684\u5b9e\u73b0\u7ec6\u8282-1",children:[{value:"<code>dial()</code>",id:"dial",children:[],level:4}],level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f-1",children:[{value:"\u521b\u5efa\u5ba2\u6237\u7aef\u8fde\u63a5",id:"\u521b\u5efa\u5ba2\u6237\u7aef\u8fde\u63a5",children:[],level:4},{value:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",children:[],level:4},{value:"\u4f7f\u7528\u670d\u52a1\u53d1\u73b0",id:"\u4f7f\u7528\u670d\u52a1\u53d1\u73b0",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],s={toc:d};function u(e){var r=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"transporter/grpc \u4e2d\u57fa\u4e8e\u8c37\u6b4c\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://www.grpc.io/"},"grpc")," \u6846\u67b6\u5b9e\u73b0\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"Transporter"),"\uff0c\u7528\u4ee5\u6ce8\u518c grpc \u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"kratos.Server()")," \u4e2d\u3002"),(0,i.kt)("h2",{id:"server"},"server"),(0,i.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("h4",{id:"network"},(0,i.kt)("inlineCode",{parentName:"h4"},"Network()")),(0,i.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u7684 network \u534f\u8bae\uff0c\u5982 tcp"),(0,i.kt)("h4",{id:"address"},(0,i.kt)("inlineCode",{parentName:"h4"},"Address()")),(0,i.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u76d1\u542c\u7684\u5730\u5740"),(0,i.kt)("h4",{id:"timeout"},(0,i.kt)("inlineCode",{parentName:"h4"},"Timeout()")),(0,i.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u7684\u8d85\u65f6\u8bbe\u7f6e"),(0,i.kt)("h4",{id:"logger"},(0,i.kt)("inlineCode",{parentName:"h4"},"Logger()")),(0,i.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u4f7f\u7528\u65e5\u5fd7"),(0,i.kt)("h4",{id:"middleware"},(0,i.kt)("inlineCode",{parentName:"h4"},"Middleware()")),(0,i.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u7684 kratos \u4e2d\u95f4\u4ef6"),(0,i.kt)("h4",{id:"unaryinterceptor"},(0,i.kt)("inlineCode",{parentName:"h4"},"UnaryInterceptor()")),(0,i.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u4f7f\u7528\u7684 grpc \u62e6\u622a\u5668"),(0,i.kt)("h4",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h4"},"Options()")),(0,i.kt)("p",null,"\u914d\u7f6e\u4e00\u4e9b\u989d\u5916\u7684 grpc.ServerOption"),(0,i.kt)("h3",{id:"\u4e3b\u8981\u7684\u5b9e\u73b0\u7ec6\u8282"},"\u4e3b\u8981\u7684\u5b9e\u73b0\u7ec6\u8282"),(0,i.kt)("h4",{id:"newserver"},(0,i.kt)("inlineCode",{parentName:"h4"},"NewServer()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func NewServer(opts ...ServerOption) *Server {\n  // grpc server \u9ed8\u8ba4\u914d\u7f6e\n    srv := &Server{\n        network: "tcp",\n        address: ":0",\n        timeout: 1 * time.Second,\n        health:  health.NewServer(),\n        log:     log.NewHelper(log.DefaultLogger),\n    }\n  // \u9012\u5f52 opts\n    for _, o := range opts {\n        o(srv)\n    }\n  // kratos middleware \u8f6c\u6362\u6210 grpc \u62e6\u622a\u5668\uff0c\u5e76\u5904\u7406\u4e00\u4e9b\u7ec6\u8282\n    var ints = []grpc.UnaryServerInterceptor{\n        srv.unaryServerInterceptor(),\n    }\n\n    if len(srv.ints) > 0 {\n        ints = append(ints, srv.ints...)\n    }\n\n  // \u5c06 UnaryInterceptor \u8f6c\u6362\u6210 ServerOption\n    var grpcOpts = []grpc.ServerOption{\n        grpc.ChainUnaryInterceptor(ints...),\n    }\n    if len(srv.grpcOpts) > 0 {\n        grpcOpts = append(grpcOpts, srv.grpcOpts...)\n    }\n  // \u521b\u5efa grpc server\n    srv.Server = grpc.NewServer(grpcOpts...)\n  // \u521b\u5efa metadata server\n    srv.metadata = apimd.NewServer(srv.Server)\n    // \u5185\u90e8\u6ce8\u518c\n    grpc_health_v1.RegisterHealthServer(srv.Server, srv.health)\n    apimd.RegisterMetadataServer(srv.Server, srv.metadata)\n    reflection.Register(srv.Server)\n    return srv\n}\n')),(0,i.kt)("h4",{id:"unaryserverinterceptor"},(0,i.kt)("inlineCode",{parentName:"h4"},"unaryServerInterceptor()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (s *Server) unaryServerInterceptor() grpc.UnaryServerInterceptor {\n    return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {\n    // \u628a\u4e24\u4e2a ctx \u5408\u5e76\u6210\u4e00\u4e2a\n        ctx, cancel := ic.Merge(ctx, s.ctx)\n        defer cancel()\n    // \u4ece ctx \u4e2d\u53d6\u51fa metadata\n        md, _ := grpcmd.FromIncomingContext(ctx)\n    // \u628a\u4e00\u4e9b\u4fe1\u606f\u7ed1\u5b9a\u5230 ctx \u4e0a\n        ctx = transport.NewServerContext(ctx, &Transport{\n            endpoint:  s.endpoint.String(),\n            operation: info.FullMethod,\n            header:    headerCarrier(md),\n        })\n    // ctx \u8d85\u65f6\u8bbe\u7f6e\n        if s.timeout > 0 {\n            ctx, cancel = context.WithTimeout(ctx, s.timeout)\n            defer cancel()\n        }\n    // \u4e2d\u95f4\u4ef6\u5904\u7406\n        h := func(ctx context.Context, req interface{}) (interface{}, error) {\n            return handler(ctx, req)\n        }\n        if len(s.middleware) > 0 {\n            h = middleware.Chain(s.middleware...)(h)\n        }\n        return h(ctx, req)\n    }\n}\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"\u7b80\u5355\u5217\u4e3e\u4e86\u4e00\u4e9b kratos \u4e2d grpc \u7684\u7528\u6cd5\uff0c\u5176\u4ed6 grpc \u7528\u6cd5\u53ef\u4ee5\u5230 grpc \u4ed3\u5e93\u4e2d\u67e5\u770b\u3002"),(0,i.kt)("h4",{id:"\u6ce8\u518c-grpc-server"},"\u6ce8\u518c grpc server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'gs := grpc.NewServer()\napp := kratos.New(\n    kratos.Name("kratos"),\n    kratos.Version("v1.0.0"),\n    kratos.Server(gs),\n)\n')),(0,i.kt)("h4",{id:"grpc-server-\u4e2d\u4f7f\u7528-kratos-middleware"},"grpc server \u4e2d\u4f7f\u7528 kratos middleware"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'grpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        logging.Server(),\n    ),\n)\n')),(0,i.kt)("h4",{id:"middleware-\u4e2d\u5904\u7406-grpc-\u8bf7\u6c42"},"middleware \u4e2d\u5904\u7406 grpc \u8bf7\u6c42"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"if info, ok := transport.FromServerContext(ctx); ok {\n  kind = info.Kind().String()\n  operation = info.Operation()\n}\n")),(0,i.kt)("h2",{id:"client"},"client"),(0,i.kt)("h3",{id:"\u914d\u7f6e-1"},"\u914d\u7f6e"),(0,i.kt)("h4",{id:"withendpoint"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithEndpoint()")),(0,i.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u5bf9\u7aef\u8fde\u63a5\u5730\u5740\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u670d\u52a1\u53d1\u73b0\u5219\u4e3aip:port,\u5982\u679c\u4f7f\u7528\u670d\u52a1\u53d1\u73b0\u5219\u683c\u5f0f\u4e3adiscovery://\\<authority",">","/\\<serviceName",">"),(0,i.kt)("h4",{id:"withtimeout"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithTimeout()")),(0,i.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\uff0c\u5982\u679c\u6709\u94fe\u8def\u8d85\u65f6\u4f18\u5148\u4f7f\u7528\u94fe\u8def\u8d85\u65f6\u65f6\u95f4"),(0,i.kt)("h4",{id:"withmiddleware"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithMiddleware()")),(0,i.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u4f7f\u7528\u7684 kratos \u4e2d\u95f4\u4ef6"),(0,i.kt)("h4",{id:"withdiscovery"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithDiscovery()")),(0,i.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u670d\u52a1\u53d1\u73b0 "),(0,i.kt)("h4",{id:"withunaryinterceptor"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithUnaryInterceptor()")),(0,i.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u4f7f\u7528\u7684 grpc \u539f\u751f\u62e6\u622a\u5668"),(0,i.kt)("h4",{id:"withoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithOptions()")),(0,i.kt)("p",null,"\u914d\u7f6e\u4e00\u4e9b\u989d\u5916\u7684 grpc.ClientOption"),(0,i.kt)("h3",{id:"\u4e3b\u8981\u7684\u5b9e\u73b0\u7ec6\u8282-1"},"\u4e3b\u8981\u7684\u5b9e\u73b0\u7ec6\u8282"),(0,i.kt)("h4",{id:"dial"},(0,i.kt)("inlineCode",{parentName:"h4"},"dial()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func dial(ctx context.Context, insecure bool, opts ...ClientOption) (*grpc.ClientConn, error) {\n    // \u9ed8\u8ba4\u914d\u7f6e\n  options := clientOptions{\n        timeout: 500 * time.Millisecond,\n    }\n  // \u904d\u5386 opts\n    for _, o := range opts {\n        o(&options)\n    }\n  // \u5c06 kratos \u4e2d\u95f4\u4ef6\u8f6c\u5316\u6210 grpc \u62e6\u622a\u5668\n    var ints = []grpc.UnaryClientInterceptor{\n        unaryClientInterceptor(options.middleware, options.timeout),\n    }\n    if len(options.ints) > 0 {\n        ints = append(ints, options.ints...)\n    }\n    var grpcOpts = []grpc.DialOption{\n    // \u8d1f\u8f7d\u5747\u8861\n        grpc.WithBalancerName(roundrobin.Name),\n        grpc.WithChainUnaryInterceptor(ints...),\n    }\n    if options.discovery != nil {\n    // \u5982\u679c\u5b58\u5728\u670d\u52a1\u53d1\u73b0\u914d\u7f6e\uff0c\u5c31\u914d\u7f6e grpc \u7684 Resolvers\n        grpcOpts = append(grpcOpts, grpc.WithResolvers(discovery.NewBuilder(options.discovery)))\n    }\n    if insecure {\n    // \u8df3\u8fc7\u8bc1\u4e66\u9a8c\u8bc1\n        grpcOpts = append(grpcOpts, grpc.WithInsecure())\n    }\n    if len(options.grpcOpts) > 0 {\n        grpcOpts = append(grpcOpts, options.grpcOpts...)\n    }\n    return grpc.DialContext(ctx, options.endpoint, grpcOpts...)\n}\n")),(0,i.kt)("h4",{id:""}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func unaryClientInterceptor(ms []middleware.Middleware, timeout time.Duration) grpc.UnaryClientInterceptor {\n    return func(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {\n    // \u628a\u4e00\u4e9b\u4fe1\u606f\u7ed1\u5b9a\u5230 ctx \u4e0a\n        ctx = transport.NewClientContext(ctx, &Transport{\n            endpoint:  cc.Target(),\n            operation: method,\n            header:    headerCarrier{},\n        })\n        if timeout > 0 {\n      // timeout \u5982\u679c\u5927\u4e8e 0\uff0c\u5c31\u91cd\u65b0\u8bbe\u7f6e\u4e00\u4e0b ctx \u7684\u8d85\u65f6\u65f6\u95f4\n            var cancel context.CancelFunc\n            ctx, cancel = context.WithTimeout(ctx, timeout)\n            defer cancel()\n        }\n    // \u4e2d\u95f4\u4ef6\u5904\u7406\n        h := func(ctx context.Context, req interface{}) (interface{}, error) {\n            if tr, ok := transport.FromClientContext(ctx); ok {\n                keys := tr.Header().Keys()\n                keyvals := make([]string, 0, len(keys))\n                for _, k := range keys {\n                    keyvals = append(keyvals, k, tr.Header().Get(k))\n                }\n                ctx = grpcmd.AppendToOutgoingContext(ctx, keyvals...)\n            }\n            return reply, invoker(ctx, method, req, reply, cc, opts...)\n        }\n        if len(ms) > 0 {\n            h = middleware.Chain(ms...)(h)\n        }\n        _, err := h(ctx, req)\n        return err\n    }\n}\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f-1"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("h4",{id:"\u521b\u5efa\u5ba2\u6237\u7aef\u8fde\u63a5"},"\u521b\u5efa\u5ba2\u6237\u7aef\u8fde\u63a5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'    conn, err := grpc.DialInsecure(\n        context.Background(),\n        grpc.WithEndpoint("127.0.0.1:9000"),\n    )\n')),(0,i.kt)("h4",{id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6"},"\u4f7f\u7528\u4e2d\u95f4\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := grpc.DialInsecure(\n    context.Background(),\n    transport.WithEndpoint("127.0.0.1:9000"),\n    transport.WithMiddleware(\n          recovery.Recovery(),\n    ),\n)\n')),(0,i.kt)("h4",{id:"\u4f7f\u7528\u670d\u52a1\u53d1\u73b0"},"\u4f7f\u7528\u670d\u52a1\u53d1\u73b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("discovery:///helloworld"),\n    grpc.WithDiscovery(r),\n)\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.grpc.io/"},"https://www.grpc.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.grpc.io/docs/languages/go/quickstart/"},"https://www.grpc.io/docs/languages/go/quickstart/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc-go"},"https://github.com/grpc/grpc-go"))))}u.isMDXComponent=!0}}]);