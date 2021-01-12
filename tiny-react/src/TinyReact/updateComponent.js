import diff from "./diff";

export default function updateComponent (virtualDOM, oldComponent, oldDOM, container) {
  console.log(virtualDOM, 'virtualDOM')
  console.log(oldComponent, 'oldComponent')
  oldComponent.componentWillReceiveProps(virtualDOM.props)
  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    oldComponent.componentWillUpdate(virtualDOM.props)
    // 更新组件
    oldComponent.updateProps(virtualDOM.props)
    let nextVirtualDOM = oldComponent.render()
    console.log(nextVirtualDOM, 'nextVirtualDOM')
    nextVirtualDOM.component = oldComponent
    diff(nextVirtualDOM, container, oldDOM)
    oldComponent.componentDidUpdate(oldComponent.props)
  }
}