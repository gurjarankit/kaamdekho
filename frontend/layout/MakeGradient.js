import React from 'react';

const MakeGradient = (props) => {
    let linearGradient = ''
    props.forEach((element,i)=>{
        let addCamma = props.length-1 != i ? ',' : '';
        linearGradient += `linear-gradient(${element.degree}deg,${element.color}, transparent ${element.percent}%)${addCamma}`
    })
    return {background:linearGradient}
};

export default MakeGradient;