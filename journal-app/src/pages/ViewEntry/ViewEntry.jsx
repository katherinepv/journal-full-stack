import { useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";

import "./ViewEntry.scss";

const ViewEntry = () => {
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

  return (
    <>
      <Link to={`/edit/:${entry.id}`}>
        <p>Edit</p>
      </Link>
      <p>Delete</p>
    </>
  );
};
export default ViewEntry;
