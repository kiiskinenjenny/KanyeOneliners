const Total = ({ total, totalView }) => {
  return (
    <div>
      <p>Total quote count: {total}</p>
      <p>Quotes in view: {totalView.length}</p>
    </div>
  );
};

export default Total;
