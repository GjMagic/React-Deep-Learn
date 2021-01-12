import TinyReact from './TinyReact'

const root = document.getElementById('root')

const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段被修改过得内容</span>
    <button onClick={() => alert("你好！！！")}>点击我</button>
    <input type="text" value="13" />
  </div>
)

// TinyReact.render(virtualDOM, root)

/* setTimeout(() => {
  TinyReact.render(modifyDOM, root)
}, 2000); */

function Demo () {
  return <div>Hello</div>
}

function Heart (props) {
  return (
    <div>
      {props.title}
      &hearts;
      <Demo />
    </div>
  )
}

// TinyReact.render(<Heart title='Hello React' />, root)

// console.log(<Heart title='Hello React' />)

class Alert extends TinyReact.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Default Title'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      title: 'Change Title'
    })
  }

  render () {
    const { title } = this.state
    const { name, age } = this.props
    return (
      <div>
        {name}{age}
        <button onClick={this.handleClick}>{title}</button>
      </div>
    )
  }
}

TinyReact.render(<Alert name='弓箭' age={26} />, root)

setTimeout(() => {
  TinyReact.render(<Alert name='弓箭123' age={20} />, root)
  // TinyReact.render(<Heart title='我是Heart组件' />, root)
}, 2000);