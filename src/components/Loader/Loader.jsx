import { MutatingDots } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div className="Loader">
      <MutatingDots
        height="70"
        width="70"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
