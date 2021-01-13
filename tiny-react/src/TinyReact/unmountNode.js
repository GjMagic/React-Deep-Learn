export default function unmountNode (node) {
  // 获取节点的virtualDOM
  const virtualDOM = node._virtualDOM
  // 1、文本节点可以直接删除
  if (virtualDOM.type === 'text') {
    node.remove()
    return
  }

  // 2、节点是否是由组件生产的
  const { component } = virtualDOM
  if (component) {
    component.componentWillUnmount()
  }

  // 3、节点身上是否有ref属性
  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(null)
  }

  // 4、节点的属性中是否有事件处理函数
  Object.keys(virtualDOM.props).forEach(propName => {
    if (propName.slice(0, 2) === 'on') {
      const eventName = propName.toLowerCase().slice(2)
      const eventHandle = virtualDOM.props[eventName]
      node.removeEventListener(eventName, eventHandle)
    }
  })

  // 5、递归删除子节点
  if (node.childNodes.length) {
    for (let i = 0; i < node.childNodes.length; i++) {
      const element = node.childNodes[i];
      unmountNode(element)
      i--
    }
  }

  // 删除节点
  node.remove()
}