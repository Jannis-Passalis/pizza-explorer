import "./App.css";
import AddPizzaForm from "./components/PizzaForm";
import PizzaList from "./components/PizzaList";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;
