import Title from "./components/Title";
import InputFilter from "./components/InputFilter";
import Total from "./components/Total";
import QuoteList from "./components/QuoteList";
import React, { useState } from "react";
import DeleteAll from "./components/DeleteAll";
import FetchQuote from "./components/FetchQuote";

function App() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");
  const [deedee, setDeedee] = useState("");

  const loadQuotes = async () => {
    const API_URL = "https://api.kanye.rest/";

    let response = await fetch(API_URL);

    let data = await response.json();

    setList([...list, `${data.quote}`]);
  };

  if (!list.length) {
    var empty = <p>No quotes!</p>;
  }

  const Remove = () => {
    const last = list.length - 1;
    setList(list.filter((k, index) => index !== last));

    var colors = list;
    var carIndex = colors
      .filter((k) => k.indexOf(deedee) === deedee)
      .map((k) => k);
    colors.splice(carIndex, deedee);

    console.log(colors.splice(carIndex, 1));
  };

  const RemoveAll = () => {
    list.splice(0, list.length);
    const last = list.length - 1;
    setList(list.filter((k, index) => index !== last));
  };

  let total = list.length;
  let totalView = list
    .filter((k) => filter == k.split(" ").length || filter === "")
    .map((k) => k);

  return (
    <div>
      <Title title="Kanye Oneliners" />

      <div className="container">
        <div>
          <FetchQuote loadQuotes={loadQuotes} />
          <DeleteAll RemoveAll={RemoveAll} />
        </div>
        <InputFilter filter={filter} setFilter={setFilter} />
        <Total total={total} totalView={totalView} />
      </div>

      <Title h2Title="Quotes" />
      <QuoteList Remove={Remove} list={list} empty={empty} filter={filter} />
    </div>
  );
}

export default App;
