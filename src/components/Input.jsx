import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input
                className={props.className}
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required = {props.required}
                onClick={props.onClick}
            />
        </div>
    )
}

export default Input