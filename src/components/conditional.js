import React from 'react'


const Conditional=()=>{

    const returnValue=()=>{return true}
    const showIt=()=>{
        return (returnValue()?<div>True</div>:<div>False</div>)
    }
    
    
    return (
        <div>{showIt()}</div>
    )
}

export default Conditional;