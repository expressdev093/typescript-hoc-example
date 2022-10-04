import "./styles.css";
import MyChild from "./hoc-enhancer/child";
import Counter from "./hoc-injector/counter";

export default function App() {
  return (
    <div className="App">
      <MyChild loading={true} />
      <Counter minValue={0} maxValue={5} />
    </div>
  );
}
