import Layout from "../../components/Layout/Layout";
import "./Quote.scss";
const Quote = () => {
  return (
    <Layout title="Quote of the Day">
      <div className="quote">
        <p className="quote__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sint
          dolores natus quibusdam modi distinctio? Soluta sunt aspernatur natus
          tenetur sapiente cum et possimus quos placeat, dolor labore commodi
          similique!
        </p>
      </div>
    </Layout>
  );
};

export default Quote;
