import React from "react"

class ButtonState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0,
      label: this.props.label
    }
  }

  handleClick(evt) {
    let i = this.state.seconds
    this.setState({label: "new label value"})
    // console.log(evt)
    // setTimeout(function(){console.log('times up')}, 3000)
    setInterval(() => {
      i++
      // console.log(i)
      this.setState({seconds: i})
    }, 1000)
  }
  
  render() {
    return (
      <div>
        <h2>counter: {this.state.seconds}</h2>
        <button
          onClick={(evt) => this.handleClick(evt)}
        >
          {this.state.label}
        </button>
      </div>
    )
  }
}

export default ButtonState
