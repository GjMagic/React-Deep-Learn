export default function updateNodeElement (newElement, virtualDOM, oldVirtualDOM = {}) {
  // 获取节点对应的属性对象
  const newProps = virtualDOM.props || {};
  const oldProps = oldVirtualDOM.props || {};

  Object.keys(newProps).forEach(propsName => {
    // 获取属性值
    const newPropsValue = newProps[propsName]
    const oldPropsValue = oldProps[propsName]

    if (newPropsValue !== oldPropsValue) {
      // 判断属性是否是事件属性，onClick => click
      if (propsName.slice(0, 2) === 'on') {
        // 事件名
        const eventName = propsName.toLowerCase().slice(2)
        // 为元素添加事件
        newElement.addEventListener(eventName, newPropsValue)
        // 删除原有事件的事件处理函数
        if (oldPropsValue) {
          newElement.removeEventListener(eventName, oldPropsValue)
        }
      } else if (propsName === 'value' || propsName === 'checked') {
        newElement[propsName] = newPropsValue
      } else if (propsName !== 'children') {
        if (propsName === 'className') {
          newElement.setAttribute('class', newPropsValue)
        } else {
          newElement.setAttribute(propsName, newPropsValue)
        }
      }
    }
  })

  // 判断属性被删除的情况
  Object.keys(oldProps).forEach(propsName => {
    const newPropsValue = newProps[propsName]
    const oldPropsValue = oldProps[propsName]

    if (!newPropsValue) {
      // 属性被删了
      if (propsName.slice(0, 2) === 'on') {
        const eventName = propsName.toLowerCase().slice(2)
        newElement.removeEventListener(eventName, oldPropsValue)
      } else if (propsName !== 'children') {
        newElement.removeAttribute(propsName)
      }
    }
  })
}