import useInView from 'react-cool-inview';

export default function useView() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });
  return { observe, inView };
}
