import createDOMElement from './createDOMElement'
import unmountNode from './unmountNode'

export default function mountNativeElement (virtualDOM, container, oldDOM) {
  let newElement = createDOMElement(virtualDOM)

  // 判断旧DOM对象是否存在，若存在，则删除
  if (oldDOM) {
    unmountNode(oldDOM)
  }

  // 将转换之后的真实DOM对象放置在页面中
  container.appendChild(newElement)

  // 获取类组件实例对象
  const component = virtualDOM.component
  if (component) {
    // 将DOM对象存储在类组件实例对象中
    component.setDOM(newElement)
  }
}