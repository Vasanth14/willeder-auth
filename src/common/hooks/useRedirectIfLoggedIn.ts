import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectIfLoggedIn = (redirectPath = '/dashboard') => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, redirectPath]);
};

export default useRedirectIfLoggedIn;
