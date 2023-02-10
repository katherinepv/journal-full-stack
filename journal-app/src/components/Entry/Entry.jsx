import "./Entry.scss";

const Entry = ({ entry }) => {

  // shortens entry to 50 characters
  const firstFiftyCharOfEntry = entry.entry.substring(0,50);


  return (
    <div className="entry">
      <h2 className="entry__date">{entry.dateCreated}</h2>
      <p className="entry__text">{firstFiftyCharOfEntry}</p>
      <p className="entry__location">Location: {entry.location}</p>
      <p className="entry__mood">Today's mood: {entry.mood}</p>
    </div>
  );
};

export default Entry;
