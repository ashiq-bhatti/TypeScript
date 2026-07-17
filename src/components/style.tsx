import React from 'react'

type StyleProps={
    style:React.CSSProperties
}
function Style(props:StyleProps) {
  return (
    <div className='' style={props.style}>
      this is styling components
    </div>
  )
}

export default Style
