import { useAuth0 } from '@auth0/auth0-react';
import { Button, Flex, Image, Heading, Stack, Grid } from '@chakra-ui/react';
import stonksguy from './assets/stonksguy.png';

function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  const registerRedirect = () => {
    loginWithRedirect({
      screen_hint: 'signup'
    });
  };

  return (
    <main>
      <Grid minH="100vh" p={3} bg="black">
        <Flex align="center" justify="center" mt={15}>
          <Image
            src={stonksguy}
            boxSize="175"
            objectFit="scale-down"
            alt="Stonksguy Logo"
            align="20px"
          />
        </Flex>
        <Heading
          as="h1"
          size="4xl"
          mt="-17vh"
          color="white"
          fontFamily="alegreya"
          fontWeight={900}
          align="center">
          stonks!
        </Heading>
        <Stack direction="column" spacing="5vh" align="center" mt="-30vh">
          <Button type="button" onClick={loginWithRedirect} h="50px">
            Login
          </Button>
          <Button
            type="button"
            onClick={registerRedirect}
            h="50px"
            _hover={{
              bg: '#FFB6C1',
              transform: 'scale(1.05)'
            }}
            _active={{
              bg: '#ff8396',
              transform: 'scale(0.99)'
            }}>
            Register
          </Button>
        </Stack>
      </Grid>
    </main>
  );
}

export default LandingPage;
