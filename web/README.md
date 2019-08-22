# web-tlblogs

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).








## 使用vue-cli初始化项目

运行初始化命令：$ vue init webpack project_name生成初始化目录

## 这些选项没用，推荐不安装
``` bash
? Use ESLint to lint your code? (Y/n) n
? Use ESLint to lint your code? No
? Set up unit tests (Y/n) n
? Set up unit tests No
? Setup e2e tests with Nightwatch? (Y/n) n
? Setup e2e tests with Nightwatch? No
```

修改初始化目录结构
## 修改目录文件如下

``` bash
│  .babelrc
│  .editorconfig
│  .gitignore
│  .postcssrc.js
│  index.html                ---项目入口文件
│  package-lock.json
│  package.json             ---打包文件
│  README.md
│
├─build
│      build.js
│      check-versions.js
│      logo.png
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│
├─config
│      dev.env.js
│      index.js
│      prod.env.js
│
├─node_modules                ---npm安装模块
│
├─src
│  │  App.vue
│  │  main.js                ---项目主文件
│  │
│  ├─assets                    ---静态文件文件夹
│  │      logo.png
│  │
│  ├─components
│  │      HelloWorld.vue    ---项目模板文件
│  │
│  ├─routes                    ---路由控制文件夹
│  │      index.js            ---控制路由文件
│  │
│  └─style
│      │  style.scss        ---样式文件
│      └─scss                ---样式文件夹
└─static
```
