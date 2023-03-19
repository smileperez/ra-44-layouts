import React from 'react';

function IconSwitch( {icon, onSwitch} ) {
    if (icon === "view_list") {
        return (
            <button className="btn" onClick={() => onSwitch(icon)}>
                <span class="material-icons md-48">view_module</span>
            </button>
        )
    } else {
        return (
            <button className="btn" onClick={() => onSwitch(icon)}>
                <span class="material-icons md-48">view_list</span>
            </button>
        )
    }
}

export default IconSwitch;