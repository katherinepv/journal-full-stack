import "./Form.scss";
import { useState } from "react";

const Form = ({ formTitle, defaultFormState, handleSubmit }) => {
  const [entry, setEntry] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(entry).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }
    handleSubmit(entry);
  };
  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="your journal entry..."
          value={entry.entry}
          onInput={(event) => setEntry({ ...entry, entry: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="location"
          value={entry.location}
          onInput={(event) =>
            setEntry({ ...entry, location: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="mood"
          value={entry.mood}
          onInput={(event) => setEntry({ ...entry, mood: event.target.value })}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
