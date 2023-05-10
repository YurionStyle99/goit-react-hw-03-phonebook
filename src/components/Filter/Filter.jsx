import React from "react";
import PropTypes from 'prop-types';
import styles from "../styles.module.css";

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder="Name"
      onChange={onChangeFilter}
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};