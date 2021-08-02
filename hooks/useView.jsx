import useInView from 'react-cool-inview';

const useView = () => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });
  return { observe, inView };
};

export default useView;
