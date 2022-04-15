import { useState, useContext, useRef } from 'react';
import { AppContext } from '../../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import styles from './PersonalInput.module.css';

const PersonalInput = () => {
  const stored = JSON.parse(window.localStorage.getItem('personal'));

  const { dispatch } = useContext(AppContext);

  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();

  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const navigate = useNavigate();

  const nameClick = () => setNameError(false);
  const lastNameClick = () => setLastNameError(false);
  const emailClick = () => setEmailError(false);
  const phoneNumberClick = () => setPhoneNumberError(false);

  const handleBackwardClick = () => {
    navigate('/');
  };

  const handleForwardClick = () => {
    if (
      nameRef.current.value.trim().length === 0 ||
      lastNameRef.current.value.trim().length === 0 ||
      emailRef.current.value.trim().length === 0 ||
      (nameRef.current.value.trim().length > 0 &&
        nameRef.current.value.trim().length < 3) ||
      (lastNameRef.current.value.trim().length > 0 &&
        lastNameRef.current.value.trim().length < 3) ||
      (emailRef.current.value.trim().length > 0 &&
        !/\S+@\S+\.\S+/.test(emailRef.current.value)) ||
      (phoneNumberRef.current.value.trim().length > 0 &&
        phoneNumberRef.current.value.trim().length !== 13) ||
      (phoneNumberRef.current.value.trim().length > 0 &&
        !phoneNumberRef.current.value.trim().startsWith('+995'))
    ) {
      setNameError(true);
      setLastNameError(true);
      setEmailError(true);
      setPhoneNumberError(true);
      return;
    }

    dispatch({
      type: 'PERSONAL_INPUT',
      payload: {
        first_name: nameRef.current.value,
        last_name: lastNameRef.current.value,
        email: emailRef.current.value,
        phone: phoneNumberRef.current.value,
      },
    });

    window.localStorage.setItem(
      'personal',
      JSON.stringify({
        name: nameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
      })
    );

    navigate('/technical-skillset');
  };

  return (
    <form className={styles.form} noValidate>
      <input
        key={1}
        ref={nameRef}
        onClick={nameClick}
        defaultValue={stored ? stored.name : ''}
        type={'text'}
        placeholder={'First Name'}
      />

      {nameError && nameRef.current.value.trim().length === 0 && (
        <p>* First name is required</p>
      )}
      {nameError &&
        nameRef.current.value.trim().length > 0 &&
        nameRef.current.value.trim().length < 3 && (
          <p>* Name should include 3 or more characters</p>
        )}

      <input
        key={2}
        ref={lastNameRef}
        onClick={lastNameClick}
        defaultValue={stored ? stored.lastName : ''}
        type={'text'}
        placeholder={'Last Name'}
      />

      {lastNameError && lastNameRef.current.value.trim().length === 0 && (
        <p>* Last name is required</p>
      )}
      {lastNameError &&
        lastNameRef.current.value.trim().length > 0 &&
        lastNameRef.current.value.trim().length < 3 && (
          <p>* Last name should include 3 or more characters</p>
        )}

      <input
        key={3}
        ref={emailRef}
        onClick={emailClick}
        defaultValue={stored ? stored.email : ''}
        type={'email'}
        placeholder={'E Mail'}
      />
      {emailError && emailRef.current.value.trim().length === 0 && (
        <p>* Email is required</p>
      )}
      {emailError &&
        emailRef.current.value.trim().length > 0 &&
        !/\S+@\S+\.\S+/.test(emailRef.current.value) && <p>* Invalid email</p>}

      <input
        key={4}
        ref={phoneNumberRef}
        onClick={phoneNumberClick}
        defaultValue={stored ? stored.phoneNumber : ''}
        type={'text'}
        placeholder={'+995 5__ __ __ __'}
      />
      {phoneNumberError &&
        ((phoneNumberRef.current.value.trim().length > 0 &&
          phoneNumberRef.current.value.trim().length !== 13) ||
          (phoneNumberRef.current.value.trim().length > 0 &&
            !phoneNumberRef.current.value.trim().startsWith('+995'))) && (
          <p>* Invalid phone number</p>
        )}
      <Pagination onBack={handleBackwardClick} onNext={handleForwardClick} />
    </form>
  );
};

export default PersonalInput;
