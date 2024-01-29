import React from "react";
import { Link } from "react-router-dom";
import "../landing.css";
const Landing = () => {
  return (
    <>
      <header style={{margin: "59px 0 0 0"}}>
        <article>
          <h1 className="title big">
            {" "}
            <em>NEWSEMON</em> a <em>Perfect</em> Place To Keep You Updated<em>.</em>{" "}
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Link to="/topheadlines" className="bottom btn btn_3">
            Explore more
          </Link>
        </article>
      </header>
    </>
  );
};

export default Landing;
