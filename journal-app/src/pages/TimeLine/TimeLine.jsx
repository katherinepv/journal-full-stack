import Entry from "../../components/Entry/Entry";
import "./TimeLine.scss";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import EntriesList from "../../components/EntriesList/EntriesList";

const TimeLine = () => {
  const title = "User's Journal";
  const buttonText = "+ New Entry";
  return (
    <Layout title={title}>
      <div className="timeline">
        <EntriesList />
        <Link to="/new">
          <Button buttonText={buttonText} />
        </Link>
      </div>
    </Layout>
  );
};
export default TimeLine;
