import React from "react";

const Sixth = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dots2 relative">
            <div className="flex items-center justify-center">
                <video
                    className="w-full"
                    controls
                >
                    <source src="video-pres.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Sixth;