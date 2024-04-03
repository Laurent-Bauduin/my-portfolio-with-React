import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

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
      <Main myselfProps={myself} />
    </>
  );
}

export default App;
