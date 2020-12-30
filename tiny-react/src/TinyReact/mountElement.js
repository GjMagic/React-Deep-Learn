import mountNativeElement from './mountNativeElement'

export default function mountElement (virtualDOM, container) {
  // Component vs NativeElement
  mountNativeElement(virtualDOM, container)
}