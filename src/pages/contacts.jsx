import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

export default function Contacts() {
  const diaspatch = useDispatch();
  const [contacts, ssetContacts] = useState([]);

  const gettedContacts = diaspatch(authOperations.getContacts);
  console.log(gettedContacts);

  return (
    <div>
      <p>there will be some contacts</p>
    </div>
  );
}
