import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1 className="page-not-found">
        Page is not found <span className="fa fa-frown-o"></span>
        <br />
        <small>
          Goto
          <Link to="/">
            Home <span className="fa fa-smile-o"></span>
          </Link>
        </small>
      </h1>
    </>
  );
};

export default PageNotFound;
