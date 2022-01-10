import { VFC } from 'react';

export const BackButtonView: VFC<{ goBack?: () => void }> = ({
  goBack = () => undefined,
}) => (
  <button type="button" onClick={goBack}>
    {/* <Icon name="home" /> */}
    戻る
  </button>
);
