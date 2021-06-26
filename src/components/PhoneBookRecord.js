function PhoneBookRecord({ name, number, remove, edit }) {
  return (
    <div id="list" className="row">
      <div className="col-4">{name}</div>
      <div className="col-4">{number}</div>
      <div className="col-4">
        <button
          onClick={() => edit({ name, number })}
          className="btn btn-outline-dark"
        >
          Edit
        </button>
        <button onClick={() => remove(name)} className="btn btn-outline-dark">
          Delete
        </button>
      </div>
    </div>
  );
}
export default PhoneBookRecord;
