import { useRouter } from 'next/router';

const useCustomRouter = () => {
  const router = useRouter();
  const { pathname, asPath: path } = router;

  return { router, path, pathname };
};

export default useCustomRouter;
