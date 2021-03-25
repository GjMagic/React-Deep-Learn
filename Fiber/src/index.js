import React, { render, Component } from './React'

const root = document.getElementById('root')

const jsx = (
  <div>
    <p>Hello React</p>
    <p>Hello Fiber</p>
  </div>
)

// render(jsx, root)

class Greating extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>Fiber</div>
    )
  }
}

// render(<Greating />, root)

function FnComponent(props) {
  return <div>{props.title} FnComponent</div>
}

render(<FnComponent title="hello" />, root)