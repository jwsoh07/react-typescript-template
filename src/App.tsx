import { hot } from "react-hot-loader";
import React from "react";

const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => {
        setCount((count) => count + 1);
    }

    const decrement = () => {
        setCount((count) => count - 1);
    }

    return (
        <main>
            <h2>Number: <b>{count}</b></h2>
            <br />
            <button onClick={() => increment()}>Increment</button>{' '}
            <button onClick={() => decrement()}>Decrement</button>{' '}
        </main>
    );
}


export default hot(module)(App);
