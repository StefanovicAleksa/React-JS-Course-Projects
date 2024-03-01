import React, {useState, useEffect, useRef} from "react";
import "./Stopwatch.css"

function Stopwatch()
{
    const [elapsedTime, setElapsedTime] = useState(0);
    let runningFuncRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false);
    let startTimeRef = useRef(0);

    useEffect(() => {
        return(clearInterval(runningFuncRef));
    }, []);

    useEffect(() => {
        isRunning ? runningFuncRef.current = setInterval(update, 10) : clearInterval(runningFuncRef.current);
    }, [isRunning]);

    const update = () =>
        isRunning ? setElapsedTime(Date.now() - startTimeRef.current) : _;
         
    const formatTime = () => {
        let minutes = String(Math.floor(elapsedTime % (60 * 60 * 1000) / 1000 / 60)).padStart(2, "0");
        let seconds = String(Math.floor(elapsedTime % (60 * 1000) / 1000)).padStart(2, "0");
        let miliseconds = String(Math.floor(elapsedTime % 1000 / 10)).padStart(2, "0");

        return(`${minutes}:${seconds}:${miliseconds}`);
    }

    const startTimer = () => {   
        if(!isRunning)
        {
            startTimeRef.current = Date.now() - elapsedTime;
            setIsRunning(true);
        }
    }

    const stopTimer = () => 
        setIsRunning(false);

    const resetTimer = () =>
    {
        startTimeRef.current = 0;
        setElapsedTime(0);
        setIsRunning(false);
    }

    return(
        <>
            <div className="stopwatch-container">
                <h1 className="timer reset-margin">
                    {formatTime(elapsedTime)}
                </h1>
                <div className="button-wrapper">
                    <button onClick={startTimer} id="startBtn">
                        Start
                    </button>
                    <button onClick={stopTimer} id="stopBtn">
                        Stop
                    </button>
                    <button onClick={resetTimer} id="resetBtn">
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
    
}

export default Stopwatch;