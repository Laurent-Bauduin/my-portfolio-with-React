import PropTypes from "prop-types";
import { useState } from "react";

function Main({ myselfProps }) {
  return (
    <>
      <main>
        <section id="section-photo">
          <img
            src={myselfProps.img}
            alt={`${myselfProps.firstName} ${myselfProps.lastName}`}
            id="photo"
          />
          <p>{myselfProps.location}</p>
        </section>
        <section className="summary">
          <h2>En bref...</h2>
          <p>
            Je suis étudiant en Développement Web à la Wild Code School, où je
            suis un cursus de 5 mois orienté JavaScript (front-end).
          </p>
          <a href="https://github.com/Laurent-Bauduin">
            <img
              src="src/assets/github_git_icon_145985.svg"
              alt="GitHub logo"
              id="GH"
            />
          </a>
          <a href="https://www.linkedin.com/in/laurent-bauduin-868601250/">
            <img src="src/assets/linked-in.png" alt="LinkedIn logo" id="LI" />
          </a>
        </section>
      </main>
    </>
  );
}

Main.propTypes = {
  myselfProps: PropTypes.shape({
    img: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
