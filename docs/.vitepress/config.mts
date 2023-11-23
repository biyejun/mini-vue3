import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'mini-vue3',
  description: '学习vue3',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/min-vue3.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Examples',
        activeMatch: '/test/',
        link: '/test/markdown-examples',
      },
      { text: '笔记', activeMatch: '/study/', link: '/study/01-Vue3 源码结构的介绍' },
    ],
    sidebar: {
      '/test/': {
        base: '/test/',
        items: [
          {
            text: 'hhhh',
            collapsed: false,
            items: [
              { text: 'Markdown Examples', link: 'markdown-examples' },
              { text: 'Runtime API Examples', link: 'api-examples' },
              { text: '测试', link: 'test' },
            ],
          },
        ],
      },
      '/study/': {
        base: '/study/',
        items: [
          {
            text: '01-Vue3 源码结构的介绍',
            link: '01-Vue3 源码结构的介绍',
          },
          {
            text: '02-reactivity 的核心流程',
            link: '02-reactivity 的核心流程',
          },
          {
            text: '03-runtime-core 初始化的核心流程',
            link: '03-runtime-core 初始化的核心流程',
          },
          {
            text: '04-runtime-core 更新的核心流程',
            link: '04-runtime-core 更新的核心流程',
          },
          {
            text: '05-setup环境-集成jest做单元测试-集成 ts',
            link: '05-setup环境-集成jest做单元测试-集成 ts',
          },
          {
            text: '06-实现 effect & reactive & 依赖收集 & 触发依赖',
            link: '06-实现 effect & reactive & 依赖收集 & 触发依赖',
          },
          {
            text: '07-实现 effect 返回 runner',
            link: '07-实现 effect 返回 runner',
          },
          {
            text: '08-实现 effect 的scheduler 功能',
            link: '08-实现 effect 的scheduler 功能',
          },
          {
            text: '09-实现 effect 的 stop 功能',
            link: '09-实现 effect 的 stop 功能',
          },
          {
            text: '10-实现 readonly 功能',
            link: '10-实现 readonly 功能',
          },
          {
            text: '11-实现 isReactive 和 isReadonly',
            link: '11-实现 isReactive 和 isReadonly',
          },
          {
            text: '12-优化 stop 功能',
            link: '12-优化 stop 功能',
          },
          {
            text: '13-实现 reactive 和 readonly 嵌套对象转换功能',
            link: '13-实现 reactive 和 readonly 嵌套对象转换功能',
          },
          {
            text: '14-实现 shallowReadonly 功能',
            link: '14-实现 shallowReadonly 功能',
          },
          {
            text: '15-实现 isProxy 功能',
            link: '15-实现 isProxy 功能',
          },
          {
            text: '16-实现 ref 功能',
            link: '16-实现 ref 功能',
          },
          {
            text: '17-实现 isRef 和 unRef 功能',
            link: '17-实现 isRef 和 unRef 功能',
          },
          {
            text: '18-实现 proxyRefs 功能',
            link: '18-实现 proxyRefs 功能',
          },
          {
            text: '19-实现 computed 计算属性',
            link: '19-实现 computed 计算属性',
          },
          {
            text: '20-实现初始化 component 主流程',
            link: '20-实现初始化 component 主流程',
          },
          {
            text: '21-使用 rollup 打包库',
            link: '21-使用 rollup 打包库',
          },
          {
            text: '22-实现初始化 element 主流程',
            link: '22-实现初始化 element 主流程',
          },
          {
            text: '23-实现组件代理对象',
            link: '23-实现组件代理对象',
          },
          {
            text: '24-实现 shapeFlags',
            link: '24-实现 shapeFlags',
          },
          {
            text: '25-实现注册事件功能',
            link: '25-实现注册事件功能',
          },
          {
            text: '26-实现组件 props 功能',
            link: '26-实现组件 props 功能',
          },
          {
            text: '27-实现组件 emit 功能',
            link: '27-实现组件 emit 功能',
          },
          {
            text: '28-实现组件 slots 功能',
            link: '28-实现组件 slots 功能',
          },
          {
            text: '29-实现 Fragment 和 Text 类型节点',
            link: '29-实现 Fragment 和 Text 类型节点',
          },
          {
            text: '30-实现 getCurrentInstance',
            link: '30-实现 getCurrentInstance',
          },
          {
            text: '31-实现provide-inject 功能',
            link: '31-实现provide-inject 功能',
          },
          {
            text: '32-实现自定义渲染器 custom renderer',
            link: '32-实现自定义渲染器 custom renderer',
          },
          {
            text: '33-更新element流程搭建',
            link: '33-更新element流程搭建',
          },
          {
            text: '34-更新element 的 props',
            link: '34-更新element 的 props',
          },
          {
            text: '35-更新 element 的 children',
            link: '35-更新 element 的 children',
          },
          {
            text: '36-更新 element 的 children - 双端对比diff 算法 （1）',
            link: '36-更新 element 的 children - 双端对比diff 算法 （1）',
          },
          {
            text: '37-更新 element 的 children - 双端对比diff 算法 （2）',
            link: '37-更新 element 的 children - 双端对比diff 算法 （2）',
          },
          {
            text: '38-更新 element 的 children - 双端对比diff 算法 （3）',
            link: '38-更新 element 的 children - 双端对比diff 算法 （3）',
          },
          {
            text: '39-学习尤大解决bug的处理方式',
            link: '39-学习尤大解决bug的处理方式',
          },
          {
            text: '40-实现组件更新功能',
            link: '40-实现组件更新功能',
          },
          {
            text: '41-实现 nextTick 功能',
            link: '41-实现 nextTick 功能',
          },
          {
            text: '42-编译模块概述',
            link: '42-编译模块概述',
          },
          {
            text: '43-实现解析插值功能',
            link: '43-实现解析插值功能',
          },
          {
            text: '44-实现解析 element',
            link: '44-实现解析 element',
          },
          {
            text: '45-实现解析 text 功能',
            link: '45-实现解析 text 功能',
          },
          {
            text: '46-实现解析三种联合类型',
            link: '46-实现解析三种联合类型',
          },
          {
            text: '47-parse 的实现原理&有限状态机',
            link: '47-parse 的实现原理&有限状态机',
          },
          {
            text: '48-实现 transform 功能',
            link: '48-实现 transform 功能',
          },
          {
            text: '49-实现代码生成 string 类型',
            link: '49-实现代码生成 string 类型',
          },
          {
            text: '50-实现代码生成插值类型',
            link: '50-实现代码生成插值类型',
          },
          {
            text: '51-实现代码生成三种联合类型',
            link: '51-实现代码生成三种联合类型',
          },
          {
            text: '52-实现编译 template 成 render 函数',
            link: '52-实现编译 template 成 render 函数',
          },
        ],
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/biyejun/mini-vue3' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present biyejun',
    },

    search: {
      provider: 'local',
    },
  },
});
