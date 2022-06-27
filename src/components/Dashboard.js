import { useAuth0 } from '@auth0/auth0-react';
import { Stack, Button, Grid, Box, Flex, Center } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

export default function Dashboard() {
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const { getAccessTokenSilently } = useAuth0();

  const getMessage = async () => {
    try {
      const token = await getAccessTokenSilently();
      /* scope: 'read:messages' */
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/details`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      navigate('*', { status: 500, message: error.message });
    }
  };

  return (
    <main>
      <Flex align="center" justify="center" w="100%" h="100%">
        <Stack direction="column" spacing="20px" mt="15%">
          <Button type="button" onClick={getMessage}>
            Get Message
          </Button>
          <h1>{message}</h1>
          <LogoutButton />
        </Stack>
      </Flex>
    </main>
  );
}
