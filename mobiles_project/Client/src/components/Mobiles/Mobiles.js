import React from 'react';
import Mobile from "./Mobile/Mobile";

const Mobiles = ({ mobileDetails, setMobileDetails}) => {
    return (
        <React.Fragment>
        {mobileDetails.map((mobileInfo, index) => {
                    return <Mobile  
                        brandName= {mobileInfo.mobileBrand}
                        battery={mobileInfo.batterySize}
                        screenSize={mobileInfo.screenSize}
                        mobileColour={mobileInfo.colour}
                        key={mobileInfo.id}
                        mobileInfo={mobileInfo}
                        mobileDetails={mobileDetails}
                        setMobileDetails={setMobileDetails}
                    />
                })}
        </React.Fragment>
    )
}

export default Mobiles;