import { useState } from "react";

function Mycomponent() {
    const [hobbies, setHobby] = useState(['football', 'coding', 'reading']);

    const addhobby = () => {
        const newhobby = document.getElementById('inputhobby').value;
        setHobby(h => [...h, newhobby]);
        document.getElementById('inputhobby').value = '';
    }
    const removehobby = (index) => {
        const newlist = hobbies.filter((_, i) => i !== index)
        setHobby(newlist);
    }
    return (
        <>
            <h1>My Hobbies</h1>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index} onClick={() => removehobby(index)}>{hobby}</li>
                ))}
            </ul>
            <input type='text' id="inputhobby"></input>
            <button onClick={addhobby}>Add Hobby</button>
        </>
    );
}

export default Mycomponent;
