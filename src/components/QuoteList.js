import Quote from "./Quote";

const QuoteList = ({ Remove, list, empty, filter }) => {
  return (
    <div>
      {list
        .filter((k) => filter == k.split(" ").length || filter === "")
        .map((k, index) => (
          <Quote key={k + "-" + index} quote={k} Remove={Remove} />
        ))}

      {empty}
    </div>
  );
};

export default QuoteList;
