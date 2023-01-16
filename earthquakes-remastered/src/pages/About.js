import React from "react";
import "./About.css";
import img from "../components/dan-floruta.jpg";

const About = () => {
  return (
    <div className="about-containment">
      <div className="about-container">
        <h1>About</h1>
        <br />
      </div>
      <div className="aboutText">
        <img src={img} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt
          iste molestiae atque quas totam laboriosam nihil eaque facere earum
          nam delectus at adipisci illum, obcaecati voluptas, explicabo ab
          fugiat minima, non neque error? Alias unde cupiditate nam, odio iusto
          magnam provident, odit ad sed suscipit laudantium placeat, ut facere?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus sit
          et tempora eum ex aliquid incidunt, culpa, dolorum vero reprehenderit
          alias eius. Quidem illo laboriosam fugiat eaque dolorum repudiandae.
          Reiciendis rerum harum hic, voluptatem a recusandae, mollitia quisquam
          ducimus nulla at similique porro eos deleniti quasi magnam vero magni
          quaerat.
        </p>
      </div>
    </div>
  );
};

export default About;
