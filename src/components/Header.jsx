import PropTypes from "prop-types";

function Header({ myselfProps }) {
  return (
    <>
      <header>
        <h1>
          {myselfProps.firstName} {myselfProps.lastName}
        </h1>
        <button className="theme">Nuit/Jour</button>
        <p>{myselfProps.job}</p>
      </header>
    </>
  );
}

Header.propTypes = {
  myselfProps: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
