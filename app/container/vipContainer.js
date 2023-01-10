const React = require('react');

const VipContainer = ({children}) => {
  return (
    <div className="vipContainer">
      {children}
    </div>
  )
}

module.exports = VipContainer;