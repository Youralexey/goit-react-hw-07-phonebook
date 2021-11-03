import { useState } from 'react';
import { useCreateContactMutation, useFetchContactsQuery } from '../../apiService';
import { Form, Label, Input } from './ContactsForm.styled';
import { Button } from '../../App/App.styled';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreateContactMutation();
  const {data: contacts} = useFetchContactsQuery();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const notification = () => {
      toast(`${name} is already in contacts`, {
        style: {
          borderRadius: '10px',
          background: '#e4cc17',
          color: '#000',
          duration: 2000,
        },})};
  
    const checkContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
      
    );
    if (checkContact) {
      notification();
      return;
    };
    
    createContact({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <>
      <Form action="" onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <Label htmlFor="number">Number</Label>
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <Button type="submit"> Add contact</Button>
      </Form>
      <Toaster />
    </>
  );
}


