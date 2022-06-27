import {
  Tabs,
  TabList,
  Tab,
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  background,
  useDisclosure,
  Button,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, logout } = useAuth0();
  // const { picture } = user;

  // TODO: user avatar, check route for correct tab, responsive UI (hamburger menu)

  return (
    <Flex justifyContent="space-between">
      <Flex pos="fixed" zIndex={2}>
        <Heading
          size="xl"
          color="white"
          fontFamily="alegreya"
          fontWeight={900}
          align="center"
          mt={1}
          ml={3}
          mb={1}>
          <Link to="/dashboard">stonks!</Link>
        </Heading>
      </Flex>
      <Box>
        <Heading> </Heading>
      </Box>
      <Flex bg="black" align="center" justify="center" w="100%" pos="fixed" zIndex={1}>
        <Tabs isFitted variant="unstyled" size="lg" align="center" color="lightgray">
          <TabList gap={50}>
            <Link to="/dashboard">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 800,
                  borderBottom: '2x solid white',
                  transition: '200ms'
                }}>
                Dashboard
              </Tab>
            </Link>
            <Link to="/savings">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 800,
                  borderBottom: '2x solid white',
                  transition: '200ms'
                }}>
                Wallet
              </Tab>
            </Link>
            <Link to="/investments">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 800,
                  borderBottom: '2x solid white',
                  transition: '200ms'
                }}>
                Investments
              </Tab>
            </Link>
          </TabList>
        </Tabs>
      </Flex>
      <Flex top={0} right={0} pos="fixed" zIndex={2} pr={4}>
        <Flex align="center" justify="center">
          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              w="50px"
              pt={2.5}
              _focusVisible="false">
              <Avatar size="sm" />
              {/* <Avatar size="sm" src={picture} /> */}
            </MenuButton>
            <MenuList>
              <Link to="/profile">
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem
                onClick={() =>
                  logout({
                    returnTo: process.env.REACT_APP_CLIENT_URL
                  })
                }>
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}
