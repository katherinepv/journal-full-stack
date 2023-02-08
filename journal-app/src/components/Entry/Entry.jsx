import "./Entry.scss";

const Entry = ({ entry }) => {
  return (
    <div className="entry">
      {/* <h2 className="entry__date">{entry.date_created}</h2> */}
      <p className="entry__text">{entry.entry}</p>
      <p className="entry__location">{entry.location}</p>
      <p className="entry__mood">{entry.mood}</p>
    </div>
  );
};

export default Entry;
