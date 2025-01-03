import React from 'react';

const First = () => {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <img src="./images/happy-anniv.png" alt="happy anniv" className="w-80 z-10"/>
            <img src= "./images/calendar.png" alt="calendar" className="w-80 mt-10 z-10"/>
            <img src= "./images/dots.png" alt="dots" className="w-full h-full absolute z-1"/>
            <img src= "./images/footer.png" alt="footer" className="w-full h-96 absolute bottom-0"/>
        </div>
    )
}

export default First;