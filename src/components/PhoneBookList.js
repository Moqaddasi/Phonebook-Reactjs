import { useState } from "react";
import PhoneBookRecord from "./PhoneBookRecord";
function PhoneBookList(props) {
  const [search, setSearch] = useState("");
  const searchedRecords = props.records.filter((record) =>
    record.name.includes(search)
  );
  return (
    <div className="container">
      <h2>My phoneBook</h2>
      <div className="row">
        <div className="col-sm-11 flex-first">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Enter Name Please"
          />
        </div>
        <div className="col-sm-1 flex-first">
          <button onClick={props.onClick} className="btn btn-primary">
            add
          </button>
        </div>
      </div>
      {searchedRecords.map((record, index) => (
        <PhoneBookRecord
          key={index}
          remove={props.remove}
          edit={props.edit}
          name={record.name}
          number={record.number}
        />
      ))}
    </div>
  );
}
export default PhoneBookList;
