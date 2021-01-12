import diff from "./diff"

export default class Component {
  constructor (props) {
    this.props = props
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state)
    // 获取最新要渲染的virtualDOM对象
    let virtualDOM = this.render()
    // 获取旧的virtualDOM对象进行比对
    let oldDOM = this.getDOM()
    // 容器
    let container = oldDOM.parentNode
    // 实现对比
    diff(virtualDOM, container, oldDOM)
  }

  setDOM(dom) {
    this._dom = dom
  }

  getDOM() {
    return this._dom
  }

  updateProps(props) {
    this.props = props
  }

  // 生命周期函数
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {}
}