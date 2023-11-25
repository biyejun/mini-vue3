# 04-runtime-core 更新的核心流程 

- update流程
  - 响应式变更 count++
  - ① 触发当前组件的 effect 函数,执行(instance.update)
    - 再次执行当前组件的 render函数 获取最新的 vnode (Subtree)
    - 触发 BeforeUpdate hook
    - 触发 onVnodeBeforeUpdate
    - 重新调用 patch(prevTree.nextTree)
      - 基于vnode的类型进行不同类型组件处理
        - 处理shapeFlag & shapeFlags.COMPONENT类型
          - 处理组件更新
          - 检测是否需要更新组件
          - 需要的话 跳转到 ①
        - 处理 shapeFlag & shapeFlags.ELEMENT类型
          - 处理element更新
    - 触发update hook
    - 触发 onVnodeUpdated