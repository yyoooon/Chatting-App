import { useCallback, useEffect, useRef } from 'react';

const useScrollToBottom = (deps: any[]) => {
  const ref = useRef<HTMLElement>(null);
  const chattingContainer = ref.current;

  const scrollToBottom = useCallback(() => {
    if (chattingContainer) {
      chattingContainer.scrollTop = chattingContainer.scrollHeight;
    }
  }, [chattingContainer]);

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToBottom, ...deps]);

  return ref;
};

export default useScrollToBottom;
