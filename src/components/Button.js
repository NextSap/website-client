import React from 'react';
const Button = ({colorText, backgroundColor, hoverBackgroundColor, name, redirect, margin}) => {
    return (
        <button /* onClick={() => {window.location.replace(redirect)}}  */
            className={backgroundColor + " rounded text-[16px] w-40 h-10 " + margin + " " + colorText + " duration-300 hover:" + hoverBackgroundColor}>
            {name}
        </button>
    );
};

export default Button;