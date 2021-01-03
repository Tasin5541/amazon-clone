import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
