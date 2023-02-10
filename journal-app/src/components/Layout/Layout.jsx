import User from "../../images/user.png";
import "./Layout.scss";

const Layout = ({ title, children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1 className="layout__title">{title}</h1>
        <img className="layout__img" src={User} alt="user" />
      </header>
      {children}
      {/* <footer className="layout__footer">
        <h2>Timeline</h2>
        <h2>Quote of the Day</h2>
      </footer> */}
    </div>
  );
};
export default Layout;
