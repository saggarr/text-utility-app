import React from 'react'

function Alert(props) {
    //alert er success er s capital kore
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    // if null then show alert alse button wise alert show korbe type soho
    // if(props.alert === null){
    //     return props.alert;
    // }
    // else{
        return (
            //alert area fixed kore jate alert show korle page er layout change na hoy
            <div style={{height:'46px'}}>
                {props.alert && <div className={`container alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" id='alert'>
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
                </div>}
            </div>
        )
    // }

}

export default Alert