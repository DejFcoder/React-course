import React, {useState, useEffect} from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridien = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridien)}`;
    }

    function padZero(num) {
        return String(num).padStart(2, '0');
    }

    return(<div className='backdrop-blur-sm w-screen py-6'>
        <div className="text-white text-6xl font-bold font-mono text-center text-shadow-lg">
            <span>{formatTime()}</span>
        </div>
    </div>)
}

export default DigitalClock;