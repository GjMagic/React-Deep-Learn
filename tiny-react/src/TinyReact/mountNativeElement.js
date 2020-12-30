import createDOMElement from './createDOMElement'

export default function mountNativeElement (virtualDOM, container) {
  let newElement = createDOMElement(virtualDOM)

  // 将转换之后的真实DOM对象放置在页面中
  container.appendChild(newElement)
}