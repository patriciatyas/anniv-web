import React from "react";  

const Third = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dots2 relative">
            <img src="./images/third-letters.png" alt="letters" className="absolute top-40 w-80"/>
            <img src="./images/stripe-1.png" alt="stripe" className="absolute bottom-16 left-0 w-64 animate-float"/>
            <img src="./images/stripe-2.png" alt="stripe" className="absolute top-36 left-16 w-48 animate-float"/>
            <img src="./images/bouquet.png" alt="bouquet" className="absolute right-36 w-24 bottom-64"/>
            <img src="./images/stripe-3.png" alt="stripe" className="absolute right-0 bottom-32 w-44 animate-float"/>
        </div>
    )
}

export default Third;