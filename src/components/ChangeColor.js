import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';
function ChangeColor() {
    const dispatch = useDispatch();
    const [color, setColor] = useState("");

    return (
        <div>
            <input type="text" onChange={(event) => {
                setColor(event.target.value)
            }} />
            <span>{color}</span>

            <button onClick={() => {
                dispatch(changeColor({theme: color}))
            }}>CHANGE COLOR</button>
        </div>
    );
}

export default ChangeColor;