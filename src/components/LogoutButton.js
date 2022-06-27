import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

function LogoutButton() {
  const { logout } = useAuth0();
  const redirectURL = process.env.REACT_APP_CLIENT_URL;
  return (
    <Button
      type="button"
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: redirectURL
        })
      }>
      Log out
    </Button>
  );
}

export default LogoutButton;
