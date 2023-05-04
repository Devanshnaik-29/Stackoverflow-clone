import React from 'react'

const Avatar = ({ children, backgroundColor, py , px, color, cursor, borderRadius, fontSize, width , minWidth}) => {
  
  const style ={
    backgroundColor,
    padding : `${py} ${px} `,
    color : color || "black",
    borderRadius,
    fontSize,
    textAlign :"center",
    cursor : cursor || null,
    textDecoration : "none",
    minWidth,
    width,


  }
  
  return (
    <div style={style}>
      { children }
      
    </div>
  )
}

export default Avatar
