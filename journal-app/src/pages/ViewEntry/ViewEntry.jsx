import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./ViewEntry.scss";

const ViewEntry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const navigate = useNavigate();

  // get entry

  const getEntryById = async (id) => {
    const response = await fetch(`http://localhost:8080/entry/${id}`);
    const entryData = await response.json();
    setEntry(entryData);
  };

  useEffect(() => {
    getEntryById(id);
  }, [id]);

  // delete entry

  const handleDeleteEntry = async () => {
    const result = await fetch(`http://localhost:8080/entry/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Entry deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  return (
    <>
      <Link to={`/edit/:${entry.id}`}>
        <p>Edit</p>
      </Link>
      <button onClick={handleDeleteEntry}>Delete</button>
    </>
  );
};
export default ViewEntry;
