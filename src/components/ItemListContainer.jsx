import PropTypes from "prop-types";

const ItemListContainer = (props) => {
  return <p className="text-xl text-center m-10">{props.greeting}</p>;
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};
export default ItemListContainer;
