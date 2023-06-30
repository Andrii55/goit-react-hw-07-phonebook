import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>error...</p>}
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
