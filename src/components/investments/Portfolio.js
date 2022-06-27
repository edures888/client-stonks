import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  HStack,
  Heading,
  TableContainer,
  Box
} from '@chakra-ui/react';
import { RepeatIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { v4 as uuidv4 } from 'uuid';

import chroma from 'chroma-js';
import { serverURL } from '../../services/investmentService';

import LoadingIcon from '../LoadingIcon';
import SearchPopover from './SearchPopover';
import HistoryDrawer from './HistoryDrawer';
import OwnedAssetRow from './OwnedAssetRow';
import { BarChart } from '../Charts';
import MetamaskAsset from './MetamaskAsset';

export default function Portfolio() {
  const [assets, setAssets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [metamaskLogin, setMetamaskLogin] = useState(false);
  const { getAccessTokenSilently, user } = useAuth0();
  /* Prop drilling of assets and Refresh state, consider Context */
  const promptRefresh = () => setRefresh(!refresh);
  const getOwnedAssets = async () => {
    setLoading(true);
    try {
      const token = await getAccessTokenSilently();
      const results = await axios.get(serverURL, { headers: { Authorization: `Bearer ${token}` } });

      if (results) {
        // bruh
        setAssets(results.data.data);
      }
      setLoading(false);

      setMetamaskLogin(user.sub.startsWith('oauth2|siwe'));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAssets(getOwnedAssets());
  }, []);
  useEffect(() => setAssets(getOwnedAssets()), [refresh]);

  const [chartData, setChartData] = useState();

  useEffect(
    () =>
      setChartData({
        labels: assets.map((asset) => asset.symbol),
        datasets: [
          {
            label: 'Amount',
            data: assets.map((asset) => asset.position * asset.cost_basis),
            backgroundColor: chroma.scale('Spectral').padding(0.7).colors(assets.length)
          }
        ]
      }),
    [refresh]
  );

  const loadMore = () => {};

  return (
    <Flex h="100vh" flexDir="column" overflow="auto" alignItems="center" gap={4} bgColor="gray.100">
      <Box display="block" padding={6}>
        {' '}
      </Box>
      {chartData ? (
        <Flex
          width={500}
          flexDir="column"
          size="md"
          bgColor="white"
          borderRadius={15}
          boxShadow="lg"
          alignItems="center"
          px={2}
          paddingTop={3}
          paddingBottom={6}
          gap={3}
          display="inline-block">
          <BarChart chartData={chartData} chartTitle="Investments" />
        </Flex>
      ) : null}
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <Flex
          flexDir="column"
          maxW="1200px"
          maxH="90%"
          width={{ base: '90%', md: '5xl' }}
          bgColor="white"
          borderRadius={15}
          boxShadow="lg"
          alignItems="center"
          px={6}
          py={2}
          gap={3}>
          <Flex w="100%" justifyContent="space-between" px={3}>
            <Heading size="lg" my={4}>
              {`${user.name || user.nickname}'s `}assets
            </Heading>
            <IconButton
              icon={<RepeatIcon />}
              aria-label="Refresh"
              onClick={promptRefresh}
              alignSelf="center"
              width={20}
            />
          </Flex>
          <TableContainer overflowY="auto">
            <Table colorScheme="blackAlpha">
              <Thead>
                <Tr color="gray.200">
                  <Th>SYMBOL/NAME</Th>
                  <Th>POSITION</Th>
                  <Th>COST BASIS</Th>
                  <Th>TYPE</Th>
                  <Th>DATE</Th>
                  <Th>MARKET VALUE</Th>
                  <Th>P/L</Th>
                  <Td />
                </Tr>
              </Thead>
              <Tbody>
                {assets.map((asset) => (
                  <OwnedAssetRow key={uuidv4()} asset={asset} promptRefresh={promptRefresh} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <IconButton
            variant="ghost"
            size="sm"
            icon={<ChevronDownIcon w={10} h={10} />}
            onClick={loadMore}
          />
        </Flex>
      )}
      <Flex
        flexDir="column"
        width={{ base: '90%', md: '5xl' }}
        bgColor="white"
        borderRadius={15}
        boxShadow="lg"
        alignItems="center"
        px={6}
        py={2}
        gap={3}>
        <MetamaskAsset />
      </Flex>
      <Box h="14" />
      <HStack pos="absolute" bottom="0" zIndex={10} m={2}>
        <SearchPopover promptRefresh={promptRefresh} />
      </HStack>
      <HistoryDrawer />
      <Box pb={10}> </Box>
    </Flex>
  );
}
