import "./CreateEntry.scss";
import Form from "../../components/Form/Form";

const CreateEntry = () => {
  const defaultFormState = {
    entry: "",
    location: "",
    mood: "",
  };

  return (
    <section className="create-entry">
      <Form defaultFormState={defaultFormState} formTitle="Add a new entry" />
    </section>
  );
};
export default CreateEntry;
