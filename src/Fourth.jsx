import React from "react";  

const Fourth = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dots2 relative">
            <img src="./images/paper-1.png" alt="paper1" className="absolute top-40 left-4 animate-float w-72"/>
            <img src="./images/pen.png" alt="pen" className="absolute top-60 right-20 w-14"/>
            <img src="./images/paper-2.png" alt="paper2" className="absolute right-4 bottom-28 animate-float w-72"/>
            <img src="./images/fourth-stars.png" alt="stars" className="absolute animate-pulse w-80"/>
        </div>
    )
}

export default Fourth;