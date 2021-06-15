import { useEffect, useRef } from 'react';

const useClickOutside = (handler) => {
  let domNode = useRef(null);

  useEffect(() => {
    const maybeHandler = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  }),
    [];

  return domNode;
};

export default useClickOutside;
