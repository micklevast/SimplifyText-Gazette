import React from 'react'

export default function (props) {
    let capitilise=(str)=>{
        // str=str.toLowercase();
        return (str.charAt(0).toUpperCase()+str.slice(1));
    }
    return (
        // if props.alert  is null then return nothing else return all content of <div>
            props.alert && <div className={`alert alert-${props.alert.mode} alert-dismissible fade show`} role="alert">
                <strong>{capitilise(props.alert.mode)}</strong>:{props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        
    )
}
