import withCounter from "./HOC/withCounter";

function CounterFive({count, increment}) {
    return (
        <button onClick={() => increment(5)}>Increment Five - {count}</button>
    );
}

export default withCounter(CounterFive);