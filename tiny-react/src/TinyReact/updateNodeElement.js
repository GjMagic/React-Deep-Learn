export default function updateNodeElement (newElement, virtualDOM) {
  // 获取节点对应的属性对象
  const { props } = virtualDOM;
  Object.keys(props).forEach(propsName => {
    // 获取属性值
    const newPropsValue = props[propsName]
    // 判断属性是否是事件属性，onClick => click
    if (propsName.slice(0, 2) === 'on') {
      // 事件名
      const eventName = propsName.toLowerCase().slice(2)
      // 为元素添加事件
      newElement.addEventListener(eventName, newPropsValue)
    } else if (propsName === 'value' || propsName === 'checked') {
      newElement[propsName] = newPropsValue
    } else if (propsName !== 'children') {
      if (propsName === 'className') {
        newElement.setAttribute('class', newPropsValue)
      } else {
        newElement.setAttribute(propsName, newPropsValue)
      }
    }
  })
}