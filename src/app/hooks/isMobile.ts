import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Check for component mounting

  useEffect(() => {
    setIsMounted(true); // Set to true after component mounts

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (isMounted) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMounted]); // Dependency array includes isMounted

  return isMobile;
};

export default useIsMobile;
