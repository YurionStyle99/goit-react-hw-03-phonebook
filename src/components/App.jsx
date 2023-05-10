import React, { Component } from "react";
import { nanoid } from "nanoid/non-secure";
import styles from "./styles.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };
componentDidMount(){
  const contacts = localStorage.getItem("contacts");
  const parse = JSON.parse(contacts);
  if(parse){
    this.setState({contacts:parse})
  }
}

  componentDidUpdate(prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  handleAddContact = (name, number) => {
    const id = nanoid();
    const newContact = { id, name, number };
    const isNameExist = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  

  handleFilterChange = (event) => {
    const filter = event.target.value.toLowerCase();
    this.setState({ filter });
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <div className={styles.container}>
        <h1>Name</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact}/>

      </div>
    );
  }
}

export default App;
