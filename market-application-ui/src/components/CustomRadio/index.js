import React from "react";
import PropTypes from "prop-types";
import classes from "./index.module.css";
import logos from "../../resources/img/img";

/**
 * A customized radio button based on the designs.
 * Due to its complex css, CSSModules were used instead of styled components
 */
function CustomRadio({ id, name, checked, onChange }) {
  return (
    <div className={classes.CustomRadio} onClick={onChange}>
      <div>
        <input
          type="radio"
          id={id}
          name={name}
          checked={checked}
        />
        <label htmlFor="color">
          <span>
            <img src={logos.tick} alt="Checked Icon" />
          </span>
        </label>
      </div>
    </div>
  );
}

CustomRadio.propTypes = {
  /** The id of the input */
  id: PropTypes.string,
  /** The name of the input */
  name: PropTypes.string,
  /** Whether the input is checked or not */
  checked: PropTypes.bool,
  /** The action to perform on change*/
  onChange: PropTypes.func,
};

export default CustomRadio;
