import { useState } from "react";
import AddRecords from "./components/AddRecords";
import PhoneBookList from "./components/PhoneBookList";
import "./App.css";
function App() {
  const [showList, setShowList] = useState(true);
  const [records, setRecords] = useState([{ name: "Amirhosein", number: 10 }]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  return (
    <>
      {showList ? (
        <PhoneBookList
          remove={(name) => {
            setRecords(records.filter((i) => i.name !== name));
          }}
          edit={(record) => {
            setSelectedRecord(record);
            setShowList(false);
          }}
          records={records}
          onClick={() => {
            setSelectedRecord(null);
            setShowList(false);
          }}
        />
      ) : (
        <AddRecords
          add={(record) => {
            setRecords([...records, record]);
          }}
          edit={(record) => {
            const newRecords = records.filter(
              (r) => r.name != selectedRecord.name
            );
            setRecords([...newRecords, record]);
          }}
          selectedRecord={selectedRecord}
          goBack={() => setShowList(true)}
        />
      )}
    </>
  );
}

export default App;
