import "./Entry.scss";

const Entry = ({ entry }) => {
  console.log(entry)
  return (
    <div className="entry">
      <h2 className="entry__date">{entry.dateCreated}</h2>
      <p className="entry__text">{entry.entry}</p>
      <p className="entry__location">Location: {entry.location}</p>
      <p className="entry__mood">Today's mood: {entry.mood}</p>
    </div>
  );
};

export default Entry;
