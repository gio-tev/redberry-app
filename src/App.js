import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalContextProvider from './store/PersonalContext';
import Welcome from './pages/Welcome';
import PersonalInformation from './pages/PersonalInformation';
import TechnicalSkillset from './pages/TechnicalSkillset';
import Covid from './pages/Covid';
import RedberrianInsights from './pages/RedberrianInsights';

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
          <Route path="/covid" element={<Covid />} />
          <Route path="/redberrian-insights" element={<RedberrianInsights />} />
        </Routes>
      </BrowserRouter>
    </PersonalContextProvider>
  );
}

export default App;
