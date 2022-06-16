import { useAuth0 } from '@auth0/auth0-react';
import { Stack, Button, Grid, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import navBar from './navBar';

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
      <navBar />
      <Grid minH="100vh">
        <Stack spacing="20px" direction="row" align="center" justify="center">
          <Link to="/profile">
            <Button type="button">View Profile</Button>
          </Link>
          <Link to="/investments">
            <Button type="button">View Investments</Button>
          </Link>
          <Link to="/savings">
            <Button type="button">SavingsWallet</Button>
          </Link>
        </Stack>
        <Stack direction="column" spacing="20px" align="center">
          <Button type="button" onClick={getMessage}>
            Get Message
          </Button>
          <h1>{message}</h1>
          <LogoutButton />
        </Stack>
      </Grid>
    </main>
  );
}
