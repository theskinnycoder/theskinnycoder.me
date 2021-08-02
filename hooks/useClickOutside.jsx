import { useEffect, useRef } from 'react';

const useClickOutside = (handler) => {
  const domNode = useRef(null);

  useEffect(() => {
    const callHandler = (e) => {
      if (!domNode.current.contains(e.target)) handler();
    };

    document?.addEventListener('mousedown', callHandler);

    return () => document?.removeEventListener('mousedown', callHandler);
  }, [handler]);

  return domNode;
};

export default useClickOutside;
