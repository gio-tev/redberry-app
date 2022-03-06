import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import styles from './PersonalInput.module.css';

const PersonalInput = () => {
  const [name, setName] = useState('');
  const [nameIsEmpty, setNameIsEmpty] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(true);

  const [lastName, setLastName] = useState('');
  const [lastNameIsEmpty, setLastNameIsEmpty] = useState(false);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);

  const [email, setEmail] = useState('');
  const [emailIsEmpty, setEmailIsEmpty] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(true);

  const navigate = useNavigate();

  const nameChange = e => {
    setName(e.target.value);
  };

  const lastNameChange = e => {
    setLastName(e.target.value);
  };

  const emailChange = e => {
    setEmail(e.target.value);
  };

  const phoneNumberChange = e => {
    setPhoneNumber(e.target.value);
  };

  const handleBackwardClick = () => {
    navigate('/');
  };

  const handleForwardClick = () => {
    if (name.trim().length === 0) {
      return setNameIsEmpty(true);
    } else setNameIsEmpty(false);

    if (name.trim().length > 0 && name.trim().length < 3) {
      return setNameIsValid(false);
    } else setNameIsValid(true);

    if (lastName.trim().length === 0) {
      return setLastNameIsEmpty(true);
    } else setLastNameIsEmpty(false);

    if (lastName.trim().length > 0 && lastName.trim().length < 3) {
      return setLastNameIsValid(false);
    } else setLastNameIsValid(true);

    if (email.trim().length === 0) {
      return setEmailIsEmpty(true);
    } else setEmailIsEmpty(false);

    if (email.trim().length > 0 && !/\S+@\S+\.\S+/.test(email)) {
      return setEmailIsValid(false);
    } else setEmailIsValid(true);

    if (
      phoneNumber.trim().length !== 13 ||
      !phoneNumber.trim().startsWith('+995')
    ) {
      return setPhoneNumberIsValid(false);
    } else setPhoneNumberIsValid(true);

    // Send data to global state
    navigate('/technical-skillset');
  };

  return (
    <form noValidate>
      <input
        key={1}
        onChange={nameChange}
        value={name}
        type={'text'}
        placeholder={'First Name'}
      />
      {nameIsEmpty && <p>* First name is required</p>}
      {!nameIsValid && <p>* Name should include 3 or more characters</p>}
      <input
        key={2}
        onChange={lastNameChange}
        value={lastName}
        type={'text'}
        placeholder={'Last Name'}
      />
      {lastNameIsEmpty && <p>* Last name is required</p>}
      {!lastNameIsValid && (
        <p>* Last name should include 3 or more characters</p>
      )}
      <input
        key={3}
        onChange={emailChange}
        value={email}
        type={'email'}
        placeholder={'E Mail'}
      />
      {emailIsEmpty && <p>* Email is required</p>}
      {!emailIsValid && <p>* Invalid email</p>}
      <input
        key={4}
        onChange={phoneNumberChange}
        value={phoneNumber}
        type={'text'}
        placeholder={'+995 5__ __ __ __'}
      />
      {!phoneNumberIsValid && <p>* Invalid phone number</p>}
      <Pagination
        className={styles['custom-pagination']}
        onBack={handleBackwardClick}
        onNext={handleForwardClick}
      />
    </form>
  );
};

export default PersonalInput;
