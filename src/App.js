
import ExpenselistItem from "./components/ExpenselistItem";

function App() {

  const data = [
    {title: "car service", date: new Date(2022,1,10), price: 16000},
    {title: "grossiry", date: new Date(2021,7,12), price: 5000}
  ]
  return (
    <div className="App">
      <h1>Lets get started</h1>
      <ExpenselistItem data={data[0]}></ExpenselistItem>
      <ExpenselistItem data={data[1]}></ExpenselistItem>
      
    </div>
  );
}

export default App;
