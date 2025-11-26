import { useState } from "react"
import "./Counter.css"

function Counter() {

    const initialValue = 0;
    const [count, setCount] = useState(initialValue)

    const increase = () => setCount(count + 1);
    // const decrease = () => setCount(count - 1);
    const decrease = () => {
        if (count > 0)
        setCount(count - 1);
    }
    const reset = () => setCount(initialValue);

    return(
    <div className="counter-container">
        <h1>{count}</h1>
        <div className="button-group">
            <button onClick={increase}>INCREMENT</button>
            <button onClick={reset}>RESET</button>
            <button onClick={decrease}>DECREMENT</button>
        </div>
    </div>)
}

export default Counter;