import { useEffect } from 'react';

function RedirectTemplate() {
  useEffect(() => {
    window.location.replace(`${window.location.origin}/register`);
  }, []);

  return (
    <h2>
      Redirecting...
    </h2>
  );
}

export default RedirectTemplate;
