import CounterFive from "./components/CounterFive";
import CounterOne from "./components/CounterOne";

function App() {
  console.log('At App');

  return (
    <div>
      <CounterOne />
      <CounterFive />
    </div>
  );
}

export default App;