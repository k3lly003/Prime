import { useState } from "react";
import apto from "./image/aptocalypto.jpg";
import me from "./image/IMG_6227.jpg";
import creed from "./image/creed.jpg";
import chosen from "./image/chosen.jpg";
import sebu from "./image/sebu.jpg";
import wick from "./image/Johnwick.jpg";
import block from "./image/99.jpg";
import image from "../src/image/download.jpg";
import Card from "./components/Card";
import teen from "./image/teen.jpg";
import gang from "./image/gangs.jpg";
import Search from "./components/Search";
import "../src/style/App.css";
import Menu from "./components/Menu";
import Bigcard from "./components/Bigcard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container1">
        <div className="menu">
          <Menu />
        </div>
        <div className="two">
          <div className="only">
            <a href="account.jsx">
              <img src={me} className="me" />
            </a>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="search">
          <Search />
        </div>
        <div className="center">
          <div className="treding">Treding</div>
          <div className="Bigcards">
            <Bigcard
              year="2019"
              type="Movie"
              character="PG"
              name="Beyond Earth"
            />
            <Bigcard
              year="2019"
              type="Movie"
              character="PG"
              name="Beyond Earth"
            />
            <Bigcard
              year="2019"
              type="Movie"
              character="PG"
              name="Beyond Earth"
            />
          </div>
          <div className="recomanded">Recomanded for you</div>
          <div className="cards">
            <Card
              Image={wick}
              name=" John Wick"
              type="Movie"
              character="+18"
              year="2023"
            />
            <Card
              Image={apto}
              name="Aptocalipto"
              type="Movie"
              character="+16"
              year="2006"
            />
            <Card
              Image={chosen}
              name="The Chosen"
              type="TV Series"
              character="PG"
              year="2019"
            />
            <Card
              Image={creed}
              name="Creed III"
              type="Movie"
              character="Action"
              year="2021"
            />
          </div>
          <div className="cards">
            <Card
              Image={sebu}
              name="Seburikoko"
              type="TV Series"
              character="PG"
              year="2019"
            />
            <Card
              Image={teen}
              name="Teen wolf"
              type="TV Series"
              character="+15"
              year="2011"
            />
            <Card
              Image={gang}
              name="Gangs Of London"
              type="TV Series"
              character="+18"
              year="2020"
            />
            <Card
              Image={block}
              name="Brooklyn nine-nine"
              type="TV Series"
              character="PG"
              year="2013"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
