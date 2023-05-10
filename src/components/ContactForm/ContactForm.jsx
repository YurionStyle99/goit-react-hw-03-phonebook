import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../styles.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleNumberChange = (event) => {
    const number = event.target.value;
    this.setState({ number });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          placeholder="Name"
          className={styles.input}
          required
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
          placeholder="Phone number"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Add to contacts
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
