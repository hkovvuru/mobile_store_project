import React, { useState } from 'react';
import NewMobile from '../../components/Forms/NewMobile';
import Mobiles from '../../components/Mobiles/Mobiles';
import './MobilesStore.css';


const MobilesStore = (props) => {
    const [mobileDetails, setMobileDetails] = useState([
        {
            mobileBrand: 'one plus',
            batterySize: 3000,
            screenSize: 5.6,
            colour: 'blue',
            id: parseInt(Math.floor(Math.random() * 100))
        },
    ]);

    return (
        <>
        <header className= "App-header">Sutherland Global Services Branded Mobiles Store</header>
            <div className="MobilesStore FirstContainer">
                <Mobiles 
                    mobileDetails={mobileDetails}
                    setMobileDetails={setMobileDetails}
                />
            </div>
            <div className="MobilesStore SecondContainer">
                <NewMobile 
                    mobileDetails={mobileDetails}
                    setMobileDetails={setMobileDetails}
                /> 
            </div>
        </>
    )
}

export default MobilesStore;

