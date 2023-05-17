import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import "../style/App.css";
import apto from "../image/aptocalypto.jpg";
import creed from "../image/creed.jpg";
import chosen from "../image/chosen.jpg";
import sebu from "../image/sebu.jpg";
import wick from "../image/Johnwick.jpg";
import block from "../image/99.jpg";
import teen from "../image/teen.jpg";
import gang from "../image/gangs.jpg";
function Series() {
  return (
    <>
      <Layout />
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
    </>
  );
}

export default Series;
