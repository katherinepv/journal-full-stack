import TimeLineEntry from "../../components/TimeLineEntry/TimeLineEntry";
import "./TimeLine.scss";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const TimeLine = () => {
  const title = "User's Journal";
  const buttonText = "+ New Entry";
  return (
    <Layout title={title}>
      <div className="timeline">
        <TimeLineEntry />
        <TimeLineEntry />
        <TimeLineEntry />
        <TimeLineEntry />
        <TimeLineEntry />
        <Link to="/new">
          <Button buttonText={buttonText} />
        </Link>
      </div>
    </Layout>
  );
};
export default TimeLine;
