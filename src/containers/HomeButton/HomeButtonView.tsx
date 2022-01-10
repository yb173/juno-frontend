import { VFC } from 'react';

export const HomeButtonView: VFC<{ redirectToHome?: () => void }> = ({
  redirectToHome = () => undefined,
}) => (
  <button type="button" onClick={redirectToHome}>
    {/* <Icon name="home" /> */}
    ホームへ
  </button>
);
