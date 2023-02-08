import "./EntriesList.scss";
import Entry from "../Entry/Entry";
import { Link } from "react-router-dom";

const EntriesList = ({ entries }) => {
  const entriesListJSX = entries.map((entry) => (
    <Link key={entry.id} to={`/entry/${entry.id}`}>
      <Entry entry={entry} />{" "}
    </Link>
  ));

  return <div className="entries-list">{entriesListJSX}</div>;
};

export default EntriesList;
