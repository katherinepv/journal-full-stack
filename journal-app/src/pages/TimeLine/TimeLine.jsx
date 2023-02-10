import "./TimeLine.scss";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import EntriesList from "../../components/EntriesList/EntriesList";
import { useEffect, useState } from "react";

const TimeLine = () => {
  const [entries, setEntries] = useState([]);
  const title = "User's Journal";
  const buttonText = "+ New Entry";

  const getEntries = async () => {
    const response = await fetch("http://localhost:8080/entries");
    const entriesData = await response.json();
    entriesData.reverse();
    setEntries(entriesData);
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <Layout title={title}>
      <div className="timeline">
        <EntriesList entries={entries} />
        <Link to="/new">
          <Button buttonText={buttonText} />
        </Link>
      </div>
    </Layout>
  );
};
export default TimeLine;
