import PropTypes from "prop-types"
import React from "react"
import classnames from "classnames"
import "./alertBEM.css"

const Alert = ({ type, heading, message, onClick  }) => (
  <div
    role="alert"
    className={classnames('alert', `alert--${type}`)}
  >
    <div
      className="alert__grid"
    >
      <div
        className="alert__cell--icon"
      >
        <span
          className="alert__icon"
        />
      </div>
      <div>
        <div
          className="alert__heading"
        >
          {heading}
          {onClick && (
            <button onClick={() => onClick('are you sure?')}>X</button>
          )}
        </div>
        <div
          className="alert__message"
        >
          {message}
        </div>
      </div>
    </div>
  </div>   
)

Alert.propTypes = {
  type: PropTypes.oneOf(["error", "warning", "info", "success"]),
  heading: PropTypes.string,
  message: PropTypes.string,
  onClick: PropTypes.func,
}

Alert.defaultProps = {
  type: "info",
  heading: undefined,
  message: undefined,
  onClick: undefined,
}

export default Alert
