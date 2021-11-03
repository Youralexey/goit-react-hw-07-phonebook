import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../apiService';

import { List, ListItem } from './ContactsList.styled';
import { Button } from '../../App/App.styled';
import Filter from '../Filter/Filter';

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  useEffect(() => {
    if (data) {
      setContacts(data);
    }
  }, [data]);

  const filteredContacts = filter => {
    if (filter) {
      const normalizeFilter = filter.toLowerCase();
      const filterValue = contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizeFilter),
      );

      setContacts(filterValue);
    } else {
      setContacts(data);
    }
  };

  return (
    <div>
      <Filter filter={filteredContacts} />
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name} - {number}{' '}
            <Button type="button" onClick={() => deleteContact(id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
  filteredContacts: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.number,
}