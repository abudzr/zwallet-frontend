import React from 'react'
import style from '../../../styles/button.module.css'

function Button({ title, btn, onClick, toggle, target }) {
    return (
        <div>
            <button
                className={`${style[btn]}`}
                onClick={onClick}
                data-toggle={toggle}
                data-target={target}
            >
                {title}
            </button>
        </div>
    )
}

export default Button