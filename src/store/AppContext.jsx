import { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  token: 'b50bb2d5-2012-4d87-9931-0c88c752cfad',
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
