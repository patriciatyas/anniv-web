import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UnlockPage = () => {
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const expectedCode = "07012023";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputCode === expectedCode) {
      setError("");
      // Play the audio
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            console.log("Audio is playing!");
          })
          .catch((error) => {
            console.error("Failed to play audio:", error);
          });
      }
      // Redirect to the success page
      navigate("/success", { state: { playAudio: true } });
    } else {
      setError("incorrect password. try again? :)");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="block sm:hidden flex flex-col items-center justify-center">
      <img src="./images/lock-key.png" alt="lock-key" className="w-36 mb-3"/>
      <h1 className="text-xl font-sans text-center mb-1 text-[#F9437C]">ENTER THE PASSWORD</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-sm"
      >
        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="our day"
          className="mb-2 w-56 px-4 py-2 font-sans border rounded-lg shadow-sm outline-[#EBB7CC]"
        />
        <button
          type="submit"
          className="bg-[#EBB7CC] mt-2 font-sans text-white px-6 py-1 rounded-lg hover:bg-[#F9437C]"
        >
          SUBMIT
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <audio ref={audioRef} src="up.mp3" />
      </div>

      <div className="hidden sm:flex flex-col items-center justify-center  text-[#F9437C] w-full h-full">
        <h1 className="text-3xl font-bold mb-4">OPEN ON YOUR PHONE ONLY :) </h1>
        <p className="text-lg">This page is optimized for mobile devices. :3 </p>
      </div>
    </div>
  );
};

export default UnlockPage;
