import mountElement from "./mountElement"
import updateComponent from "./updateComponent"

export default function diffComponent (virtualDOM, oldComponent, oldDOM, container) {
  if (isSameComponent(virtualDOM, oldComponent)) {
    // 同一个组件 做组件更新操作
    console.log('同一个组件')
    updateComponent(virtualDOM, oldComponent, oldDOM, container)
  } else {
    // 不是同一个组件
    console.log('不是同一个组件')
    mountElement(virtualDOM, container, oldDOM)
  }
}

function isSameComponent (virtualDOM, oldComponent) {
  return oldComponent && oldComponent.constructor === virtualDOM.type
}