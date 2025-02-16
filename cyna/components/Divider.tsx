import React from 'react'

function Divider({orientation, width ="10px", height = "10px"}: DividerProps) {
  return ( orientation === "vertical"?
    <div className={`w-[0.06rem] bg-[#a4a7aa]`}style={{height}}></div>: <div className={`h-[0.06rem] bg-[#a4a7aa]`} style={{width: width}}></div>
  )
}

export default Divider
