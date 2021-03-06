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

class Ref extends TinyReact.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>Ref</div>
    )
  }
}

class Alert extends TinyReact.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Default Title'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log(this.input.value)
    console.log(this.ref, 'this.ref')
    this.setState({
      title: 'Change Title'
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render () {
    const { title } = this.state
    const { name, age } = this.props
    return (
      <div>
        {name}{age}
        <input type='text' ref={input => this.input = input} />
        <button onClick={this.handleClick}>{title}</button>
        <Ref ref={ref => this.ref = ref} />
      </div>
    )
  }
}

/* TinyReact.render(<Alert name='弓箭' age={26} />, root)

setTimeout(() => {
  TinyReact.render(<Alert name='弓箭123' age={20} />, root)
  TinyReact.render(<Heart title='我是Heart组件' />, root)
}, 2000); */

class KeyDome extends TinyReact.Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [{
        id: 0,
        name: '张三'
      }, {
        id: 1,
        name: '李四'
      }, {
        id: 2,
        name: '王五'
      }, {
        id: 3,
        name: '赵六'
      }]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const newState = JSON.parse(JSON.stringify(this.state))
    // newState.persons.push(newState.persons.shift())
    // newState.persons.splice(1, 0, { id: 4, name: '李逵' })
    newState.persons.pop()
    this.setState(newState)
  }

  render () {
    const { persons } = this.state
    return (
      <div>
        <ul>
          {
            persons.map(person => {
              const { id, name } = person
              return (
                <li key={id}>
                  {name}
                  <Alert name='弓箭' age={26} />
                </li>
              )
            })
          }
        </ul>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}

TinyReact.render(<KeyDome />, root)