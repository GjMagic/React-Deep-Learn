import mountElement from './mountElement'

export default function diff (virtualDOM, container, oldDOM) {
  // 判断旧节点是否存在
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  }
}