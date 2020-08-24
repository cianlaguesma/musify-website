import React, { Component } from "react";
import { Button } from "reactstrap";
class Download extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" id="downloadComponent">
        <div id="downloadTextDiv">
          <p id="downloadText">Download Musify Now!</p>
        </div>
        <div id="downloadButtonsBackground" className="container">
          <div id="buttonsCont">
            <Button
              id="windowsButton"
              type="submit"
              color="primary"
              outline
              color="black"
            >
              <span>
                <img
                  src="./assets/images/windows-logo.png"
                  placeholder="Windows"
                  style={{
                    margin: "0px 0px 5px 0px",
                    width: "25px",
                    height: "20px",
                  }}
                />
              </span>{" "}
              Windows
            </Button>
            <Button
              id="macButton"
              type="submit"
              color="primary"
              outline
              color="black"
            >
              <span>
                <img
                  src="./assets/images/apple-logo.png"
                  placeholder="Apple"
                  style={{
                    margin: "0px -10px 5px -50px",
                    width: "55px",
                    height: "40px",
                  }}
                />
              </span>{" "}
              Mac
            </Button>

            <Button
              id="androidButton"
              type="submit"
              color="primary"
              outline
              color="black"
            >
              <span>
                <img
                  src="./assets/images/Android-Logo.png"
                  placeholder="Android"
                  style={{
                    width: "50px",
                    height: "23px",
                    margin: "0px -6px 5px 0px",
                    padding: "0px 0px 0px 7px",
                  }}
                />
              </span>
              Android/iOS
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
