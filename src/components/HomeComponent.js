import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <>
      <div id="lefthalf">
        <div className="container">
          <p id="homeText">
            We are offering a <span id="freeWord">free</span> music streaming
            platform for you!
          </p>
        </div>
      </div>
      <div id="righthalf">
        <div className="container">
          <Link to="/download">
            <Button type="submit" color="primary" outline color="white">
              Download Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
