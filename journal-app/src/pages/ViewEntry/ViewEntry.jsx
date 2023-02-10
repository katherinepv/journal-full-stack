import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ConfirmDeletePane from "../../components/ConfirmDeletePane/ConfirmDeletePane";
import Arrow from "../../images/arrow.svg";
import Bin from "../../images/bin.svg";
import Edit from "../../images/edit.svg";
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
      <Link to={"/"}>
        <img className="view-entry__arrow" src={Arrow} alt="back button" />
      </Link>
      <div className="view-entry__buttons">
        <Link to={`/update/${entry.id}`}>
          <img src={Edit} alt="edit button" className="view-entry__edit" />
        </Link>
        <img src={Bin} alt="delete button" className="view-entry__delete" onClick={showDeletePane} />
      </div>
      {showDelete && <div className="view-entry__delete-pane-container"><ConfirmDeletePane handleClick={handleClick} handleDeleteEntry={handleDeleteEntry} /></div>}
      <div className="view-entry__content">
      <h2 className="view-entry__date">{entry.dateCreated}</h2>
      <p className="view-entry__text">{entry.entry}</p>
      <p className="view-entry__location">Location: {entry.location}</p>
      <p className="view-entry__mood">Today's mood: {entry.mood}</p>
    </div>
    </div>
  );
};
export default ViewEntry;
