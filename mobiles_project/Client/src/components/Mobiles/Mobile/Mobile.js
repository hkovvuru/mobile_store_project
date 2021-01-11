import React from 'react';
import './Mobile.css';


const Mobile = ({ brandName, battery, screenSize, mobileColour, mobileInfo, mobileDetails, setMobileDetails}) => {

    const deleteMobileHandler = () => {
        setMobileDetails(mobileDetails.filter(data => data.id !== mobileInfo.id));
    }
    return (
        <div className="Mobile">
            <img src='iphone.jpeg' alt="mobile" />
            <h3>Brand Name : {brandName}</h3>
            <h3>Battery : {battery} mAh</h3>
            <h3>Size : {screenSize} inches</h3>
            <h3>Colour : {mobileColour}</h3>
            <button type="submit" value="submit" onClick={deleteMobileHandler}>Delete</button>
        </div>
    )
}

export default Mobile;