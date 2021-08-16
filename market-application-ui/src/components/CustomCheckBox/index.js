import React from "react";
import PropTypes from "prop-types";
import classes from "./index.module.css";

/**
 * A customized checkbox based on the designs.
 * Due to its complex css, CSSModules were used instead of styled components
 */
function CustomCheckBox({ id, checked, disabled, onChange }) {
  return (
    <div className={classes.Container}>
      <div className={classes.Round}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <label htmlFor={id}></label>
      </div>
    </div>
  );
}

CustomCheckBox.propTypes = {
  /** The id of the input */
  id: PropTypes.string,
  /** Whether this should be disabled */
  disbaled: PropTypes.bool,
  /** Whether the input is checked or not */
  checked: PropTypes.bool,
  /** The action to perform on change*/
  onChange: PropTypes.func,
};

export default CustomCheckBox;
