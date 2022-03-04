import { useNavigate } from 'react-router-dom';
import Card from '../components/card/Card';
import InputSide from '../components/input-side/InputSide';
import DescriptionSide from '../components/description-side/DescriptionSide';

const PersonalInformation = () => {
  const navigate = useNavigate();

  const handleBackwardClick = () => {
    navigate('/');
  };
  const handleForwardClick = () => {
    navigate('/technical-skillset');
  };

  return (
    <Card>
      <InputSide onBack={handleBackwardClick} onNext={handleForwardClick} />
      <DescriptionSide />
    </Card>
  );
};

export default PersonalInformation;
