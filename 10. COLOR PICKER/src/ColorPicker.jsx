import React, {useState} from 'react';

function ColorPicker() {

    const [color, setColor] = useState("FFFFFF");

    return(
        <div>
            <h1>COLOR PICKER</h1>
            <div>
                <p>Your color is: {color}</p>
            </div>
            <h2>Select color</h2>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        </div>
    )
}

export default ColorPicker;