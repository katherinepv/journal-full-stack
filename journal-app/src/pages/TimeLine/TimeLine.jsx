import TimeLineEntry from "../../components/TimeLineEntry/TimeLineEntry";
import "./TimeLine.scss";
import Layout from "../../components/Layout/Layout";

const TimeLine = () => {
  const title = "User's Journal";
  return (
    <Layout title={title}>
      <div className="timeline">
        <TimeLineEntry />
        <TimeLineEntry />
        <TimeLineEntry />
        <TimeLineEntry />
        <TimeLineEntry />
      </div>
    </Layout>
  );
};
export default TimeLine;
