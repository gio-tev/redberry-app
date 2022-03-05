import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import PersonalInformation from './pages/PersonalInformation';
import TechnicalSkillset from './pages/TechnicalSkillset';
import PersonalContextProvider from './store/PersonalContext';

function App() {
  return (
    <PersonalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/personal-information"
            element={<PersonalInformation />}
          />
          <Route path="/technical-skillset" element={<TechnicalSkillset />} />
        </Routes>
      </BrowserRouter>
    </PersonalContextProvider>
  );
}

export default App;
