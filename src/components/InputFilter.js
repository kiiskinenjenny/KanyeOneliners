import Title from "./Title";

function InputFilter({ filter, setFilter }) {
  return (
    <div>
      <Title h2Title="Word count filter:" />
      <input
        type="text"
        placeholder="Number of words"
        className="inputti"
        id="filter"
        name="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default InputFilter;
