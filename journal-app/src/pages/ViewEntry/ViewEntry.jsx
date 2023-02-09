import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ConfirmDeletePane from "../../components/ConfirmDeletePane/ConfirmDeletePane";

import "./ViewEntry.scss";

const ViewEntry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [showDelete, setShowDelete] = useState(false);


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

  // for 2 step delete process

  const handleClick = () => {
    setShowDelete(!showDelete);
  }

  const showDeletePane = () => {
    setShowDelete(true);
  }

  // delete entry

  async function handleDeleteEntry() {
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
  }

  if (!entry) return <p>loading...</p>;

  return (
    <div className="view-entry">
      <Link to={`/update/${entry.id}`}>
        <p>Edit</p>
      </Link>
      <button onClick={showDeletePane}>Delete</button>

      {showDelete && <ConfirmDeletePane handleClick={handleClick} handleDeleteEntry={handleDeleteEntry} />}

      <div className="entry">
        <h2 className="entry__date">{entry.dateCreated}</h2>
        <p className="entry__text">{entry.entry}</p>
        <p className="entry__location">Location: {entry.location}</p>
        <p className="entry__mood">Today's mood: {entry.mood}</p>
      </div>
    </div>
  );
};
export default ViewEntry;
