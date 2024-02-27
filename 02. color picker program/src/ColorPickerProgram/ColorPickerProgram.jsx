import React, {useState} from 'react'
import './ColorPickerProgram.css'
function ColorPickerProgram() {

    let [color, setColor] = useState('#ffffff');

    const colorChange = (e) =>
        setColor(e.target.value);

    return(
    <>
    <section className="main-widget">
        <h1 className="program-name reset-margin">
            Color Picker
        </h1>
        <div className="color-picker-widget">
            <div className="color-show" style={{backgroundColor: color}}>
                <p className='reset-margin'>
                    Selected color: {color}
                </p>
            </div>
            <form className="color-picker">
                <label htmlFor="color-pick">
                    Select a color:
                </label>
                <input type="color" name="color pick" id="color-pick" onChange={colorChange} />
            </form>
        </div>
    </section>
    </>
    );
}

export default ColorPickerProgram