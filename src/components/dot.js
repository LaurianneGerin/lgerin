import React from "react"
import PropTypes from "prop-types"

const Dot= ({ color }) => {
    return (
        <div className="dot-space">
            <div className="dot">
                <div className="dot-face dot-front" style={{ backgroundColor: `#${color}` }}></div>
                <div className="dot-face dot-back" style={{ backgroundColor: `#${color}` }}></div>
            </div>
        </div>
    )
}

Dot.propTypes = {
    color: PropTypes.string,
}
  

export default Dot;