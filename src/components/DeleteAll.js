const DeleteAll = ({ RemoveAll }) => {
  return (
    <div>
      <input
        onClick={RemoveAll}
        type="button"
        value="Delete all"
        className="button2"
      />
    </div>
  );
};

export default DeleteAll;
