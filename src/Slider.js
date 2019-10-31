import React, { useState, useEffect } from 'react';
import { useGlobal, setGlobal } from 'reactn';

export default Slider;

function Slider(props) {
    return (
        <div className="slidecontainer">
    <input type="range" min={props.MinValue} max={props.MaxValue}  defaultValue={props.Value}  className="presetSlider" />{props.Name}
    </div>

        

    );
}