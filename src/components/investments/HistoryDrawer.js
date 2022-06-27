import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Text,
  VStack,
  IconButton,
  Button,
  useDisclosure,
  Flex,
  TableContainer
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { serverURL } from '../../services/investmentService';
import Loading from '../Loading';

export default function HistoryDrawer() {
  const [history, setHistory] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getHistory = async () => {
    setLoading(true);
    try {
      const token = await getAccessTokenSilently();
      const results = await axios.get(serverURL, { headers: { Authorization: `Bearer ${token}` } });
      if (results) {
        // bruh
        setHistory(results.data.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isOpen) getHistory();
  }, [isOpen]);

  const loadMore = () => {};
  return (
    <>
      <Button
        variant="ghost"
        colorScheme="blackAlpha"
        pos="absolute"
        bottom="0"
        right="0"
        zIndex={10}
        m={4}
        p={2}
        onClick={onOpen}>
        view history -{'>'}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>history</DrawerHeader>

          <DrawerBody>
            {isLoading ? (
              <Loading message="fetching history" />
            ) : (
              <Flex flexDir="column" gap={3} maxH="99%">
                {/* OverflowX auto if cut out column */}
                <TableContainer overflowY="auto" overflowX="hidden">
                  <Table>
                    <Thead>
                      <Tr color="gray.200">
                        <Th>SYMBOL/NAME</Th>
                        <Th>UNITS</Th>
                        <Th>TYPE</Th>
                        <Th>DATE</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {history.map((item) => (
                        <Tr key={uuidv4()} _hover={{ background: 'gray.100' }}>
                          <Td>
                            <VStack alignItems="start">
                              <Heading size="sm" letterSpacing="tight">
                                {item.symbol}
                              </Heading>
                              <Text fontWeight="semibold" fontSize="sm">
                                {item.name}
                              </Text>
                            </VStack>
                          </Td>
                          <Td>{item.position}</Td>
                          <Td>{item.type}</Td>
                          <Td>{item.date}</Td>
                          <Td>{item.action}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
                <IconButton
                  variant="ghost"
                  size="md"
                  icon={<ChevronDownIcon w={10} h={10} />}
                  onClick={loadMore}
                  m={2}
                />
              </Flex>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
