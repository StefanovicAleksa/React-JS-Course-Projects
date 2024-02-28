import React, {useState, useEffect} from "react"
import "./DigitalClock.css"

function DigitalClock()
{
    let [time, setTime] = useState();

    useEffect(() => {
        const timeInterval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, 0);
            const minutes = now.getMinutes().toString().padStart(2, 0);
            const seconds = now.getSeconds().toString().padStart(2, 0);
            setTime(t => t = `${hours}:${minutes}:${seconds}`);
        }, 500)

        return () => {
            clearInterval(timeInterval);
        }
    }, [])

    useEffect(() => {
        document.title = time;
    }, [time])

    return(
        <>
            <div className="clock-container glass-effect">
                <h1 className="clock reset-margin">
                    {time}
                </h1>
            </div>
        </>
    )
}

export default DigitalClock