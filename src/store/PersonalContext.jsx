import { createContext, useState } from 'react';

export const PersonalContext = createContext();

const PersonalContextProvider = props => {
  // const [name, setName] = useState('');
  // const [nameTouched, setNameTouched] = useState(false);

  // const [lastName, setLastName] = useState('');
  // const [lastNameTouched, setLastNameTouched] = useState(false);

  // const [email, setEmail] = useState('');
  // const [emailTouched, setEmailTouched] = useState(false);

  // const [tel, setTel] = useState('');
  // const [telTouched, setTelTouched] = useState(false);

  // const nameChange = e => {
  //   setName(e.target.value);
  // };
  // const nameBlur = e => {
  //   setNameTouched(true);
  //   // if (e.target.value.length > 2) setNameIsValid(true);
  // };

  // const lastNameChange = e => {
  //   setLastName(e.target.value);
  // };
  // const lastNameBlur = e => {
  //   setLastNameTouched(true);
  //   // if (e.target.value.length > 2) setLastNameIsValid(true);
  // };

  // const emailChange = e => {
  //   setEmail(e.target.value);
  // };
  // const emailBlur = e => {
  //   setEmailTouched(true);
  //   // const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
  //   // if (validEmail) setEmailIsValid(true);
  // };

  // const telChange = e => {
  //   setTel(e.target.value);
  // };
  // const telBlur = e => {
  //   setTelTouched(true);
  //   // if (e.target.value.startsWith('+995') && e.target.value.length === 13)
  //   //   setTelIsValid(true);
  // };

  const state = {
    // name,
    // nameTouched,
    // lastName,
    // lastNameTouched,
    // email,
    // emailTouched,
    // tel,
    // telTouched,
    // nameChange,
    // nameBlur,
    // lastNameChange,
    // lastNameBlur,
    // emailChange,
    // emailBlur,
    // telChange,
    // telBlur,
  };

  return (
    <PersonalContext.Provider value={state}>
      {props.children}
    </PersonalContext.Provider>
  );
};

export default PersonalContextProvider;
