import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContextProvider from './store/AppContext';
import Welcome from './pages/welcome/Welcome';
import PersonalInformation from './pages/personal-information/PersonalInformation';
import TechnicalSkillset from './pages/technical-skillset/TechnicalSkillset';
import Covid from './pages/covid/Covid';
import RedberrianInsights from './pages/redberrian-insights/RedberrianInsights';
import Submit from './pages/submit/Submit';
import SubmittedApplications from './pages/submitted-applications/SubmittedApplications';

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
