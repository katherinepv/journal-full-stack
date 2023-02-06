import TimeLineEntry from "../../components/TimeLineEntry/TimeLineEntry";
import "./TimeLine.scss";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";

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
        <Button buttonText={buttonText} />
      </div>
    </Layout>
  );
};
export default TimeLine;
