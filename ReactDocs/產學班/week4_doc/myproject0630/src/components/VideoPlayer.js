import React, { useState, useRef, useEffect } from 'react';
function VideoPlayer() {
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current && videoRef.current.currentTime) {
                setCurrentTime(videoRef.current.currentTime);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div>
            <video ref={videoRef} src="startrek.mp4" controls />
            <div>Current Time: {currentTime}</div>
        </div>
    );
}
export default VideoPlayer;