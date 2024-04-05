import React, { useState, useEffect } from "react";
import './count.css';

function Count() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [countdownOver, setCountdownOver] = useState(false);

    const targetDate = new Date("2024-05-01T10:00:00").getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date().getTime();
            const timeLeft = targetDate - currentDate;

            if (timeLeft <= 0) {
                clearInterval(interval);
                setCountdownOver(true);
                return;
            }

            const newDays = ("0" + Math.floor(timeLeft / (1000 * 60 * 60 * 24))).slice(-2);
            const newHours = ("0" + Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
            const newMinutes = ("0" + Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
            const newSeconds = ("0" + Math.floor((timeLeft % (1000 * 60)) / 1000)).slice(-2);

            setDays(newDays);
            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {countdownOver ? (
                <div>Countdown Over</div>
            ) : (
                <div className='d-flex countdown'>
                    <div className='date'>
                        <div className="c1">{days}</div>
                        <div className="c2">Days</div>
                    </div>
                    <div className='colon'>:</div>
                    <div className='hour'>
                        <div className="c1">{hours}</div>
                        <div className="c2">Hours</div>
                    </div>
                    <div className='colon'>:</div>
                    <div className='min'>
                        <div className="c1">{minutes}</div>
                        <div className="c2">Minutes</div>
                    </div>
                    <div className='colon'>:</div>
                    <div className='sec'>
                        <div className="c1">{seconds}</div>
                        <div className="c2">Seconds</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Count;
