import { useState } from "react";

function Events(){
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [type, setType] = useState()
    const mynameinput = (event) => {
        setName(event.target.value)
    }
    const mynuminput = (event) => {
        setQuantity(event.target.value)
    }
    const typeinput = (event) => {
        setType(event.target.value)
    }
    return (
        <>
            <div>
                <input type="text" value={name} onChange={mynameinput}></input>
                <p>Name: {name}</p>
            </div>
            <div>
                <input type='number' value={quantity} onChange={mynuminput}></input>
                <p>Quantity: {quantity}</p>
            </div>
            <div>
                <select value={type} onChange={typeinput}>
                    <option value="">Select Option</option>
                    <option value="Apple">Apple</option>
                    <option value="Andriod">Andriod</option>
                </select>
                <p>Product Selected: {type}</p>
            </div>
        </>
    );
}
export default Events