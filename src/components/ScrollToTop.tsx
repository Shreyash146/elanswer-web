import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);

    // Also try with smooth behavior as fallback
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Force scroll to top after a small delay to ensure it works
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
