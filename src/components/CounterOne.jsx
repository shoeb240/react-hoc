import withCounter from "./HOC/withCounter";

function CounterOne({count, increment}){
    console.log('At CounterOne');

    return (
        <div>
            <button onClick={() => increment(1)}>Increment One - {count}</button>
        </div>
    );
}

export default withCounter(CounterOne);