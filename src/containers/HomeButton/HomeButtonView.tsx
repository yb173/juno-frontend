import { VFC } from 'react';

export type Props = {
  redirectToHome?: () => void;
};

export const HomeButtonView: VFC<Props> = ({
  redirectToHome = () => undefined,
}) => (
  <button type="button" onClick={redirectToHome}>
    {/* <Icon name="home" /> */}
    ホームへ
  </button>
);
