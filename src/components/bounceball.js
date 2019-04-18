import React from "react"
import PropTypes from "prop-types"

const BounceBall= ({ color }) => {
    return (
        <div className="bouncing-zone">
            <div 
                className="bounce-ball"
                style={{
                    width: `80px`,
                    height: `80px`,
                    borderRadius: `50%`,
                    backgroundColor: `#${color}`,
                  }}
            ></div>
        </div>
    )
}

BounceBall.propTypes = {
    color: PropTypes.string,
}
  

export default BounceBall;