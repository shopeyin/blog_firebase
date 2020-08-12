import React from "react";
import "./homepage.style.scss";
import photo from "../../img/photo.jpg";
import photo3 from "../../img/photo3.jpg";

function HomePage() {
  return (
    <div className="home__container">
      <div className="home">Home</div>
      <div className="banner">
        <figure
          className="image"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        ></figure>
        <div className="title">
          The Asian American voters who could help Trump win a second term
        </div>
        <div className="date">March 18 2020</div>
      </div>
      <div
        className="box__1"
        style={{
          backgroundImage: `url(${photo3})`,
        }}
      >
        {" "}
        Box 1
      </div>
      <div
        className="box__2"
        style={{
          backgroundImage: `url(${photo})`,
        }}
      >
        Box2
      </div>
      <div
        className="box__1"
        style={{
          backgroundImage: `url(${photo})`,
        }}
      >
        {" "}
        Box 1
      </div>
      <div
        className="box__2"
        style={{
          backgroundImage: `url(${photo3})`,
        }}
      >
        Box2
      </div>
    </div>
  );
}

export default HomePage;
