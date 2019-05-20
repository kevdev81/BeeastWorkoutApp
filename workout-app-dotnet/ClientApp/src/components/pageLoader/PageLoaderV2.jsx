import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./pageLoaderV2.css";

class PageLoaderV2 extends React.Component {
  render() {
    return (
      <div className="pageLoaderWrapper">
        <div className="pageLoader">
          <ButtonToolbar>
            <Button variant="dark" size="lg" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default PageLoaderV2;
