"use strict";(self.webpackChunkmodelstar_docs=self.webpackChunkmodelstar_docs||[]).push([[894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={},r="Quickstart: Install Modelstar and Connect to Snowflake",l={unversionedId:"quickstart/index",id:"quickstart/index",title:"Quickstart: Install Modelstar and Connect to Snowflake",description:"In just a few minutes you can train and deploy a ML model inside your data warehouses/lakehouse.",source:"@site/docs/quickstart/index.md",sourceDirName:"quickstart",slug:"/quickstart/",permalink:"/docs/quickstart/",draft:!1,editUrl:"https://github.com/modelstar-labs/docs/docs/quickstart/index.md",tags:[],version:"current",lastUpdatedAt:1669795253,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Modelstar introduction",permalink:"/docs/introduction/"},next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},s={},d=[{value:"Step #1: Install Modelstar CLI tool",id:"step-1-install-modelstar-cli-tool",level:2},{value:"Step #2: Initialize a Modelstar ML Project",id:"step-2-initialize-a-modelstar-ml-project",level:2},{value:"Step #3: Handshake with Snowflake",id:"step-3-handshake-with-snowflake",level:2},{value:"Config <code>modelstar.config.yaml</code>",id:"config-modelstarconfigyaml",level:4},{value:"Ping Snowflake",id:"ping-snowflake",level:4},{value:"Step #4: Register a Modelstar ML Algorithm",id:"step-4-register-a-modelstar-ml-algorithm",level:2},{value:"Step #5: Use this in Snowflake",id:"step-5-use-this-in-snowflake",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart-install-modelstar-and-connect-to-snowflake"},"Quickstart: Install Modelstar and Connect to Snowflake"),(0,o.kt)("p",null,"In just a few minutes you can train and deploy a ML model inside your data warehouses/lakehouse."),(0,o.kt)("h2",{id:"step-1-install-modelstar-cli-tool"},"Step #1: Install Modelstar CLI tool"),(0,o.kt)("p",null,"To get started, let's install the Modelstar command line tool. Modelstar is written in Python and distributed through ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/"},"Pypi"),", so we can simply use ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),":  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ pip install modelstar\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Modelstar has dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"Snowflake Python Connector"),", which is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/python-connector-install.html#python"},"only compatible with Python 3.6-3.9"),". During our tests on M1 MacOS, we found Python 3.9 is more stable.  ")),(0,o.kt)("h2",{id:"step-2-initialize-a-modelstar-ml-project"},"Step #2: Initialize a Modelstar ML Project"),(0,o.kt)("p",null,"This step creates a local project folder, named ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"my_project")),", at the location you are running this command. The folder includes ",(0,o.kt)("inlineCode",{parentName:"p"},"modelstar.config.yaml")," file, some sample data and some internal files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ modelstar init my_project\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"modelstar init <project_name>")," is the base command, where <project_name> can be replaced with the name of your choice."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"modelstar init .")," can be used to initialize the project inside the current folder location. Running this command will create all the necessary files within the current folder location and name the project using the folder's name."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"}," For DBT users: ")," You can also initialize a Modelstar project inside a DBT project using ",(0,o.kt)("inlineCode",{parentName:"p"},"modelstar init . "),". A more detailed tutorial on how to use DBT to orchestrate Modelstar ML will be posted.")),(0,o.kt)("h2",{id:"step-3-handshake-with-snowflake"},"Step #3: Handshake with Snowflake"),(0,o.kt)("h4",{id:"config-modelstarconfigyaml"},"Config ",(0,o.kt)("inlineCode",{parentName:"h4"},"modelstar.config.yaml")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This step requires manual editing of a yaml file. Find the file and open it with your favorite editor.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"modelstar.config.yaml")," file is used to set and configure the parameter of modelstar. This file will also be used to enter your credentials to communicate with your data platform."),(0,o.kt)("p",null,"The following is an example to use a Snowflake account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./modelstar.config.yaml"',title:'"./modelstar.config.yaml"'},"# MODELSTAR CONFIGURATION FILE\n---\nsessions:\n    - name: snowflake-test\n      connector: snowflake\n      config:\n          account: WQA6****\n          username: [username]\n          password: [password]\n          database: MODELSTAR_TEST\n          schema: PUBLIC\n          stage: test\n          warehouse: COMPUTE_WH\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"These credentials are never shared with Modelstar and only live on your local machine.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Don't commit this file to your version control, since it contains sensitive information. The best way is to add ",(0,o.kt)("inlineCode",{parentName:"p"},"modelstar.config.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".modelstar")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file.")),(0,o.kt)("p",null,"First, you configure a named session, which will contain the details of your account you will be working with. As an example, here we are using a Snowflake account, and naming the session as ",(0,o.kt)("inlineCode",{parentName:"p"},"snowflake-test"),", which contains the account details. You will later use this session name when starting a modelstar session."),(0,o.kt)("h4",{id:"ping-snowflake"},"Ping Snowflake"),(0,o.kt)("p",null,"We can now start a Modelstar session from your terminal. Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ modelstar use snowflake-test\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you are running all the ",(0,o.kt)("inlineCode",{parentName:"p"},"modelstar")," commands from the root of your project folder and have also activated the Python virtual environment that contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"modelstar")," package.")),(0,o.kt)("p",null,"This will give the following output, which shows you the available databases for your named-session, here it is ",(0,o.kt)("inlineCode",{parentName:"p"},"snowflake-test"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  Setting session with configuration:  snowflake-test\n\n  Loaded session:  snowflake-test\n\n  Showing available databases for config:  snowflake-test\n\n+----------------------+-----------------------+-------------------------------------------------------+--------------+\n|      created_on      |         name          |                        origin                         |    owner     |\n+----------------------+-----------------------+-------------------------------------------------------+--------------+\n| Sep 05, 2022 - 14:19 |    MODELSTAR_TEST     |                                                       | ACCOUNTADMIN |\n| Aug 15, 2022 - 23:43 |       SNOWFLAKE       |                SNOWFLAKE.ACCOUNT_USAGE                |              |\n| Aug 15, 2022 - 23:43 | SNOWFLAKE_SAMPLE_DATA | SFSALESSHARED.SFC_SAMPLES_AWS_US_WEST_2_2.SAMPLE_DATA | ACCOUNTADMIN |\n| Aug 19, 2022 - 17:05 | SNOWPARK_PYTHON_DEMOS |                                                       | ACCOUNTADMIN |\n+----------------------+-----------------------+-------------------------------------------------------+--------------+\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Congratulations!")," Modelstar is correctly installed and configured. Now it's ready to use. "),(0,o.kt)("p",{parentName:"admonition"},"The following sections show an example of using one of the Modelstar ML algorithms to build a time series model. Check our ",(0,o.kt)("a",{parentName:"p",href:"../category/tutorials/"},"tutorials")," for other examples.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"step-4-register-a-modelstar-ml-algorithm"},"Step #4: Register a Modelstar ML Algorithm"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"modelstar")," cli you can register a builtin Modelstar Python function as a UDF/Stored-Procedure to your warehouse. Using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"modelstar register <function_pointer>"),". As an example for a Modelstar builtin forecasting function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ modelstar register forecast:univariate_time_series_forecast\n")),(0,o.kt)("p",null,"After the registration is complete, you get the output with information about the status and, about how to use your UDF and where it is located."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n  Registering `univariate_time_series_forecast` into MODELSTAR_TEST.PUBLIC of your data warehouse.\n\n+----------------------------------------------------------------+\n|                             status                             |\n+----------------------------------------------------------------+\n| Function UNIVARIATE_TIME_SERIES_FORECAST successfully created. |\n+----------------------------------------------------------------+\n\n  Stored Procedure available at:  `MODELSTAR_TEST.PUBLIC`\n\n")),(0,o.kt)("h2",{id:"step-5-use-this-in-snowflake"},"Step #5: Use this in Snowflake"),(0,o.kt)("p",null,"Use the following command in Snowflake to build the forecasting model (example below uses the sample data uploaded in step #6):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CALL UNIVARIATE_TIME_SERIES_FORECAST('SALES', 'DS', 'Y', 40, 'M');\n")),(0,o.kt)("p",null,"It means: to predict the next ",(0,o.kt)("inlineCode",{parentName:"p"},"40")," ",(0,o.kt)("inlineCode",{parentName:"p"},"M")," (months) of ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," value based on historical data in ",(0,o.kt)("inlineCode",{parentName:"p"},"SALES")," table, where ",(0,o.kt)("inlineCode",{parentName:"p"},"DS")," is the time column."),(0,o.kt)("p",null,"Mode information on this can be found in ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/sales-forecasting-inside-snowflake/"},(0,o.kt)("strong",{parentName:"a"},"this tutorial"))," and information about the forecasting model ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/ml-sql-functions/univariate-time-series-forecast/"},"here")))}c.isMDXComponent=!0}}]);