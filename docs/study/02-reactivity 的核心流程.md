# 02-reactivity 的核心流程 

- 接收一个对象
- 转换为一个 Proxy 代理对象
- 通过代理对象 访问原先对象上的值

![reactive流程图1](/mini-vue3/reactive流程图1.png)

![reactive流程图2](/mini-vue3/reactive流程图2.png)


## 流程

- reactive
  - createReactiveObject
  - new Proxy
    - 基于target的类型区分获取Handlers
    - TargetType.COLLECTION collectionHandlers 集合
    - else baseHandlers 非集合

- init
  - effect(fn)
  - 创建effect
  - 执行fn
  - 触发get操作
  - 执行track
  - 把effect收集起来作为依赖

- update
  - 修改响应式对象的值
  - 触发set操作
  - 执行trigger
  - 重新运行effect函数
  - 执行fn
  - 触发get操作

## baseHandlers

- mutableHandlers
  - get
    - createGetter
    ```js
    Reflect.get(target, key, receiver)
    ```
    - track (收集依赖)
  - set
    - createSetter
    ```js
    Reflect.set(target, key, value, receiver)
    ```
    - trigger (触发依赖)
  - deleteProperty
    - trigger(触发依赖)
  - has
    - track (收集依赖)
  - ownKeys
    - track (收集依赖)

## track

- 初始化 dep
- 基于activeEffect 来获取当前的依赖
- dep.push(activeEffect)

## trigger

## 分析 dep.n 和 dep.w 的流程

## TargetType


## 单测

vscode 安装 jest 插件
打断点，会有debug提示