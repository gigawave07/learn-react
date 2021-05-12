import React, {useState} from "react";

export default function Ezinput() {
    const [value, setValue] = useState('')

    let display;

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = (e) => {
        display = <textarea name="" id="" cols="30" rows="10">{value}</textarea>
    }

    if (value.length < 10) {
        display = <input type="text" value={value} onChange={onChange}/>
    } else {
        const newVal = value.substring(0, 10) + '...' + <span onClick={handleClick}>more</span>
        display = <input type="text" value={newVal} onChange={onChange}/>
    }



    return (
        <div>
            {display}
        </div>
    )
}
