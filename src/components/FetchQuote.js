const FetchQuote = ({ loadQuotes }) => {
  return (
    <div>
      <input
        type="button"
        value="Fetch 1 quote"
        className="button2"
        onClick={loadQuotes}
      />
    </div>
  );
};

export default FetchQuote;
