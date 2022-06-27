import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Box, Flex } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';

export default function ProtectedRoute({ component }) {
  const redirectLoad = () => <Loading message="Logging In..." />;
  const Component = withAuthenticationRequired(component, {
    onRedirecting: redirectLoad
  });
  return (
    <>
      <NavBar />
      <Component />
    </>
  );
}
