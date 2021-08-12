import "./App.scss";
import datas from "./data.json";
import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";

const App = () => {
  const formatedDatas = datas.map((data) => {
    const tag = [data.role, data.level, ...data.languages, ...data.tools];
    data.tags = tag;
    return data;
  });

  return (
    <div className="App">
      <Header />
      <CardList datas={formatedDatas} />
    </div>
  );
};

export default App;
