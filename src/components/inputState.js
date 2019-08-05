import React from "react"
import { css } from "@emotion/core"

class InputState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.value}</h3>
        <input
          css={css({
            border: "2px solid blue",
          })}
          value={this.state.value}
          onChange={(evt) => this.setState({value : evt.target.value})}
        />
      </div>
    )
  }
}

export default InputState
