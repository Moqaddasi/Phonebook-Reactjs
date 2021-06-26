import { useState } from "react";

function AddRecords(props) {
  const initialValue = props.selectedRecord ?? { name: "", number: 0 };
  const [name, setName] = useState(initialValue.name);
  const [number, setNumber] = useState(initialValue.number);
  return (
    <div className="container">
      <h2>My PhoneBook</h2>
      <div className="nameInfo" style={{ margin: "1rem" }}>
        <h5>Name</h5>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
          placeholder="sara"
        />
      </div>
      <div className="phoneInfo" style={{ margin: "1rem" }}>
        <h5>number</h5>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="form-control"
          type="text"
          placeholder="09152222222"
        />
      </div>
      {props.selectedRecord ? (
        <button
          onClick={() => {
            props.edit({ name, number });
            props.goBack();
          }}
          className="btn btn-primary"
        >
          Edit
        </button>
      ) : (
        <button
          onClick={() => {
            props.add({ name, number });
            props.goBack();
          }}
          className="btn btn-primary"
        >
          add
        </button>
      )}
      <button onClick={props.goBack} className="btn btn-secondary">
        cancel
      </button>
    </div>
  );
}

export default AddRecords;
