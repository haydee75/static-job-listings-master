import "./App.scss";
import datas from "./data.json";
import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CardList datas={datas} />
    </div>
  );
};

export default App;
