import React from "react";
import navigation from "./navigation.style.scss";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      width: "",
      marginLeft: "",
    };
  }
  openSlideMenu = () => {
    this.setState({
      width: "25rem",
      marginLeft: "25rem",
    });
  };

  closeSlideMenu = () => {
    this.setState({
      width: "0",
      marginLeft: "0",
    });
  };

  render() {
    return (
      <div
        className="navigation"
        id="content"
        style={{ marginLeft: this.state.marginLeft }}
      >
        <span className="slide">
          <a href="#" onClick={this.openSlideMenu}>
            &#9776;
          </a>
        </span>
        <div className="nav" id="menu" style={{ width: this.state.width }}>
          <a href="#" className="close" onClick={this.closeSlideMenu}>
            <i className="fa fa-times"></i>
          </a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
