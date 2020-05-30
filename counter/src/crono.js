import React from "react";


function Base(props){
    
    return(
    <>  
        <li className="list-group-item clockit">{props.nu1}</li>
        <li className="list-group-item clockit">{props.nu2}</li>
        <li className="list-group-item clockit">{props.nu3}</li>
        <li className="list-group-item clockit">{props.nu4}</li>
        <li className="list-group-item clockit">{props.nu5}</li>
        <li className="list-group-item clockit">{props.nu6}</li>
    </>
    )
    
}

export default Base;