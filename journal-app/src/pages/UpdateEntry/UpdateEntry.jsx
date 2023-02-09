import "./UpdateEntry.scss";
import Form from "../../components/Form/Form";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";


const UpdateEntry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);

  const getEntryById = async (id) => {
    const response = await fetch(`http://localhost:8080/entry/${id}`);
    const entryData = await response.json();
    setEntry(entryData);
  };

  useEffect(() => {
    getEntryById(id);
  }, [id]);

  const handleUpdateEntry = async (updatedEntry) => {
    console.log(updatedEntry);
    const result = await fetch(`http://localhost:8080/entry/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEntry),
    });

    if (result.ok) {
      alert("Entry updated");
      setEntry(updatedEntry);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  console.log(entry);

  if (!entry) return <p>loading...</p>;

  return <div className="edit">
    <Form defaultFormState={entry} formTitle="Edit entry" handleSubmit={handleUpdateEntry}/>
  </div>
};

export default UpdateEntry;
