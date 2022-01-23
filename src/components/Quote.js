const Quote = ({ quote, Remove }) => {
  return (
    <div>
      <div className="quotediv">
        <div>
          <p>{quote}</p>
        </div>
        <div>
          <input
            onClick={Remove}
            type="button"
            value="Delete"
            className="button"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
