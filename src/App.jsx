import "./App.css";
import Header from "./components/Header.jsx";

const myself = {
  firstName: "Laurent",
  lastName: "Bauduin",
  img: "src/assets/Laurent.jpg",
  location: "Valenciennes - France",
  job: "Full-stack Web Developer",
};

function App() {
  return (
    <>
      <Header myselfProps={myself} />
      <main>
        <section id="section-photo">
          <img src="src/assets/Laurent.jpg" id="photo" />
          <p>Valenciennes - France</p>
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

export default App;
