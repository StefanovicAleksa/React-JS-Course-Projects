import { useState } from "react"

function CounterProgram() {
    let [count, setCount] = useState(0);

    const increment = () =>
        setCount(count + 1);

    const decrement = () =>
        setCount(count - 1)

    const reset = () =>
        setCount(0)

    return(
        <>
            <div className="main-widget">
                <h1 className="reset-margin program-title">
                    Counter Program
                </h1>
                <div className="counter-widget">
                    <h3 id="counter" className="reset-margin">
                        {count}
                    </h3>
                    <div className="buttons">
                        <button onClick={decrement}>
                            Decrement
                        </button>
                        <button onClick={reset}>
                            Reset
                        </button>
                        <button onClick={increment}>
                           Increment
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterProgram