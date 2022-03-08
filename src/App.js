import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContextProvider from './store/AppContext';
import Welcome from './pages/Welcome';
import PersonalInformation from './pages/PersonalInformation';
import TechnicalSkillset from './pages/TechnicalSkillset';
import Covid from './pages/Covid';
import RedberrianInsights from './pages/RedberrianInsights';
import Submit from './pages/Submit';
import SubmittedApplications from './pages/SubmittedApplications';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/personal-information"
            element={<PersonalInformation />}
          />
          <Route path="/technical-skillset" element={<TechnicalSkillset />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/redberrian-insights" element={<RedberrianInsights />} />
          <Route path="/submit" element={<Submit />} />
          <Route
            path="/submitted-applications"
            element={<SubmittedApplications />}
          />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
