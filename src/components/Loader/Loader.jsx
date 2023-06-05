import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <TailSpin
      height="30"
      width="30"
      color="#2196f3"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
    />
  );
};
