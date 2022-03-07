import { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  token: '1a9c3663-94ca-4525-9526-39b6c8c1ec06',
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  skills: [
    {
      id: 1,
      experience: 1,
    },
  ],
  work_preference: '',
  had_covid: false,
  had_covid_at: '',
  vaccinated: false,
  vaccinated_at: '',
  will_organize_devtalk: false,
  devtalk_topic: '',
  something_special: '',
};

const mainReducer = (state, action) => {
  if (action.type === 'PERSONAL_INPUT') {
    return { ...state, ...action.payload };
  }
  if (action.type === 'TECHNICAL_INPUT') {
    return { ...state, ...action.payload };
  }
  if (action.type === 'COVID_INPUT') {
    return { ...state, ...action.payload };
  }
  if (action.type === 'INSIGHTS_INPUT') {
    return { ...state, ...action.payload };
  }
};

const AppContextProvider = props => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
