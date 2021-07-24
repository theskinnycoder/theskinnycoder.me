import { useRouter } from 'next/router';

const useCustomRouter = () => {
  const router = useRouter();
  const path = router.asPath;
  const pathname = router.pathname;

  return { router, path, pathname };
};

export default useCustomRouter;
