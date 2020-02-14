(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(293)),i={id:"debugging",title:"Debugging"},l={id:"debugging",title:"Debugging",description:"## Templates",source:"@site/../docs/debugging.md",permalink:"/docs/debugging",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/debugging.md",lastUpdatedBy:"Sebastien Rosset",lastUpdatedAt:1580964032,sidebar:"docs",previous:{title:"Customization",permalink:"/docs/customization"},next:{title:"Workflow Integrations",permalink:"/docs/integrations"}},c=[{value:"Templates",id:"templates",children:[]},{value:"Runtime",id:"runtime",children:[]},{value:"Logs",id:"logs",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"templates"},"Templates"),Object(a.b)("p",null,"Sometimes, you may have issues with variables in your templates. As discussed in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/templating"}),"templating")," docs, we offer a variety of system properties for inspecting the models bound to templates."),Object(a.b)("dl",null,Object(a.b)("dt",null,Object(a.b)("code",null,"-DdebugOpenAPI")),Object(a.b)("dd",null,"Prints out the JSON model of the OpenAPI Document, as seen by OpenAPI Generator"),Object(a.b)("dt",null,Object(a.b)("code",null,"-DdebugModels")),Object(a.b)("dd",null,"Prints out the JSON model passed to model templates"),Object(a.b)("dt",null,Object(a.b)("code",null,"-DdebugOperations")),Object(a.b)("dd",null,"Prints out the JSON model passed to operation (api) templates"),Object(a.b)("dt",null,Object(a.b)("code",null,"-DdebugSupportingFiles")),Object(a.b)("dd",null,"Prints out the JSON model passed to supporting files")),Object(a.b)("p",null,"One or more of these properties can be passed alongside other command line options:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -g go \\\n    -o out \\\n    -i petstore-minimal.yaml \\\n    -DdebugModels \\\n    -DdebugOperations\n")),Object(a.b)("p",null,"Or you can add these to your ",Object(a.b)("inlineCode",{parentName:"p"},"JAVA_OPTS")," environment variable (this applies to every invocation of the tool):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'export JAVA_OPTS="${JAVA_OPTS} -DdebugModels -DdebugOperations"\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"NOTE: Globally available system options like these will apply to all invocations of the generator (CLI and plugins)")),Object(a.b)("h2",{id:"runtime"},"Runtime"),Object(a.b)("p",null,"When you're working with a custom generator, a new generator, or otherwise trying to understand the behavior of the toolset, you may need to attach a remote debugger in order to step through the code."),Object(a.b)("p",null,"The steps are shown here for a specific version of the generator, but apply the same if you're working off master or a feature branch."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Determine the version of ",Object(a.b)("inlineCode",{parentName:"li"},"openapi-generator")," you're using. For the CLI, this is:  ",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"openapi-generator version\n"))),Object(a.b)("li",{parentName:"ul"},"Navigate to the ",Object(a.b)("inlineCode",{parentName:"li"},"openapi-generator")," source directory (see ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/contribute-building"}),"building")," docs for obtaining source code and brief introduction)."),Object(a.b)("li",{parentName:"ul"},"Checkout the branch/tag for the target version. Branches are not prefixed, but tags are prefixed with a ",Object(a.b)("inlineCode",{parentName:"li"},"v"),". For instance if you're using version ",Object(a.b)("inlineCode",{parentName:"li"},"3.3.0"),", you will execute:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"git checkout v3.3.0\n"))),Object(a.b)("li",{parentName:"ul"},"Open the project in your IDE."),Object(a.b)("li",{parentName:"ul"},"Setup your IDE for remote debugging. You'll want to define a port used for connecting the remote debugger. For this example, we'll use ",Object(a.b)("inlineCode",{parentName:"li"},"5005"),". See external tutorials for ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.jetbrains.com/help/idea/run-debug-configuration-remote-debug.html"}),"IntelliJ")," and ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/developerworks/library/os-eclipse-javadebug/index.html"}),"Eclipse")),Object(a.b)("li",{parentName:"ul"},"Export the debug configuration, specifying ",Object(a.b)("inlineCode",{parentName:"li"},"suspend=y")," so you have time to attach a remote debugger. These are passed as Java system properties, either on command line or as part of the ",Object(a.b)("inlineCode",{parentName:"li"},"JAVA_OPTS")," environment variable. This will look like:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'export JAVA_OPTS="${JAVA_OPTS} -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005"\n'))),Object(a.b)("li",{parentName:"ul"},"Execute the generator with your desired options. You should see the application output ",Object(a.b)("em",{parentName:"li"},"only"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Listening for transport dt_socket at address: 5005\n"))),Object(a.b)("li",{parentName:"ul"},"Set breakpoints in code, and then attach your remote debugger from your IDE (see above). The generator will automatically unblock once the remote debugger is attached. You can now step through the code.")),Object(a.b)("h2",{id:"logs"},"Logs"),Object(a.b)("p",null,"You can try to enable debugging log with ",Object(a.b)("inlineCode",{parentName:"p"},"-Dlog.level=debug")," option to the ",Object(a.b)("inlineCode",{parentName:"p"},"JAVA_OPTS")," environment variable to see more information:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'export JAVA_OPTS="${JAVA_OPTS} -Dlog.level=debug"\n')),Object(a.b)("p",null,"Set the option then DEBUG logs are printed out:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -g go ...\n\n...\n...\n[main] DEBUG o.o.codegen.DefaultCodegen - debugging fromProperty for files : class Schema {\n    type: null\n    format: null\n    $ref: #/components/schemas/File\n...\n...\n")))}p.isMDXComponent=!0},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||a;return n?o.a.createElement(m,l({ref:t},b,{components:n})):o.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);