import { VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeButtonView } from './HomeButtonView';

export const HomeButton: VFC = () => {
  const navigate = useNavigate();
  const redirectToHome = () => navigate('/');

  return <HomeButtonView redirectToHome={redirectToHome} />;
};
