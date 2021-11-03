import { PrimaryTitle, SecondaryTitle } from "./App.styled.jsx";
import ContactsForm from "../components/ContactsForm/ContactsForm";
import ContactsList from "../components/ContactsList/ContactsList.jsx";

export default function App() {
  return (
    <>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactsForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <ContactsList />
    </>
  );
}
