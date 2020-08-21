import React from "react";
import { Button } from "reactstrap";
function Home(props) {
  return (
    <>
      <img className="background" src="assets/images/background2.jpg" />

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
          <Button type="submit" color="primary" outline color="white">
            Download Now
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
