import "./CreateEntry.scss";
import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";

const CreateEntry = () => {
  const handleSubmit = async (entry) => {
    await fetch("http://localhost:8080/entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
  };

  const defaultFormState = {
    entry: "",
    location: "",
    mood: "",
  };

  return (
    <section className="create-entry">
      <Link to={"/*"}>
        <button>Done</button>
      </Link>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Entry"
      />
    </section>
  );
};
export default CreateEntry;
