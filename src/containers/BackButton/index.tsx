import { VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButtonView } from './BackButtonView';

export const BackButton: VFC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return <BackButtonView goBack={goBack} />;
};
