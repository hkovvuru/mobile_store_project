import React, { useState } from 'react';
import './NewMobile.css';


const AddNewMobile = ({ mobileDetails, setMobileDetails }) => {
    const [data, setData] = useState({});

    const addNewMobileHandler = (event) => {
        event.preventDefault();
        let name = event.target.name;
        setData ({
            ...data,
            [name] : event.target.value,
            id: parseInt(Math.floor(Math.random() * 100))
        })
    }

    console.log(data);
    const submitHandler = (event) => {
        event.preventDefault();
        setMobileDetails([
            ...mobileDetails,
            data
        ]);
    }

    return (
        <div className="NewMobile">
            <header>Add New Mobile</header><br/>
            <form>
                <label for="mobileBrandbatterySize">Brand Name : </label>
                <input type="text" id="mobileBrandbatterySize" name="mobileBrand" onChange={addNewMobileHandler}/>
                <label for="batterySize">Battery : </label>
                <input type="text" id="batterySize" name="batterySize" onChange={addNewMobileHandler}/>
                <label for="screenSize">Size : </label>
                <input type="text" id="screenSize" name="screenSize" onChange={addNewMobileHandler}/>
                <label for="colour">Color : </label>
                <input type="text" id="colour" name="colour" onChange={addNewMobileHandler}/>            
                <button type="submit" value="submit" onClick={submitHandler}>Add Mobile</button>
            </form>
        </div>
    )
}

export default AddNewMobile;

