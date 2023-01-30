import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./Button.module.css";

function Button({ text }) {
  useEffect(() => {
    console.log("Calling the api...");
  }, []);
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
