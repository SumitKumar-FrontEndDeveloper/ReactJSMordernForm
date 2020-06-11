import React from "react";
import styles from "./Content.module.css";
import {Container} from "react-bootstrap";
import Account from "../Account/Account";

interface ContentData {
  data:any,
  title:string
}

class Content extends React.Component<ContentData,any> {
  constructor(props:ContentData) {
      super(props);
      this.state = { };
  }
  render() {
  return (
  <div className={styles.Content} data-testid="Content">
    <Container fluid>
      <div className="row">
        <div className="col-sm-12">
        <Account />
        </div>
      </div>
    </Container>
  </div> );
  }

}

export default Content;
