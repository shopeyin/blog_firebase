import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../../pages/homepage/HomePage";
import Profile from "../../pages/profilepage/Profile";
import "./container.scss";
import SignIn from "../../pages/signinpage/SignIn";
import SearchBox from "../search/SearchBox";
import photo4 from "../../img/photo4.jpg";
import photo5 from "../../img/photo5.jpg";
import photo from "../../img/photo.jpg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

function Container({ currentUser }) {
  return (
    <div className="Container">
      <div className="left__sidebar">
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                {" "}
                Home
              </Link>
            </li>
            <li className="navigation__item">
              {" "}
              <Link to="/profile" className="navigation__link">
                Profile
              </Link>
            </li>

            {currentUser ? (
              <li className="navigation__item">
                <Link
                  className="navigation__link"
                  to="/"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  LOGOUT <br />
                  {/* {currentUser.displayName} */}
                </Link>
              </li>
            ) : (
              <div>
                <li className="navigation__item">
                  <Link className="navigation__link" to="/signin">
                    SIGN IN
                  </Link>
                </li>

                <li className="navigation__item">
                  <Link className="navigation__link" to="/">
                    SIGNUP
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </div>

      <div className="body">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={Profile} />

        <Route exact path="/signin" component={SignIn} />
      </div>

      <div className="right__sidebar">
        <div className="search-box">
          <SearchBox />
        </div>

        <div
          className="image"
          style={{
            backgroundImage: `url(${photo4})`,
          }}
        >
          image
        </div>
        <div className="title">
          A lottery prize winner got her check from a robot. Because, pandemic
        </div>
        <div className="text">
          Consetetur , sed diam nonumy eirmod tempor invidunt labore dolore
          magna aliquyam eratsed diam justo duo dolores rebum.
        </div>
        <div className="news__1">
          <figure
            className="news__image"
            style={{
              backgroundImage: `url(${photo4})`,
            }}
          >
            image
          </figure>
          <div>
            Things get a little trickier when you start using three or four
            values, but you also get more
          </div>
        </div>
        <div className="news__1">
          <figure
            className="news__image"
            style={{
              backgroundImage: `url(${photo})`,
            }}
          >
            image
          </figure>
          <div>
            {" "}
            Things get a little trickier when you start using three or four
            values, but you also get more
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
