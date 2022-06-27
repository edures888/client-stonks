import { useEffect, useRef, useState } from 'react';

import {
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Text,
  RadioGroup,
  Radio,
  Stack,
  FormLabel,
  Input,
  Table,
  Tbody,
  Tr,
  Box,
  useDisclosure
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../Loading';
import SearchAssetRow from './SearchAssetRow';
import { findCryptoSymbol, findStockSymbol } from '../../services/investmentService';
import AssetFormModal from './AssetFormModal';

export default function SearchPopover({ promptRefresh }) {
  // use CONSTANTS for asset type
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [selected, setSelected] = useState(null);
  const [type, setType] = useState('stocks');
  const [isLoading, setLoading] = useState(false);
  const initialFocusRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  /**
   * Switch to useReducer as soon as possible!!!
   */
  const updateAssets = async (keyword) => {
    let results = [];
    setLoading(true);
    try {
      if (!keyword) {
        setSearchResults(null);
        setLoading(false);
        return;
      }
      if (type === 'stocks') {
        results = findStockSymbol(keyword);
        setSearchResults(results);
      } else if (type === 'crypto') {
        results = findCryptoSymbol(keyword);
        setSearchResults(results);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    updateAssets(search);
  }, [search, type]);

  const handleRadioTypeChange = (event) => {
    setType(event);
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <Popover initialFocusRef={initialFocusRef} placement="top" isLazy arrowSize={10} closeOnBlur>
        <PopoverTrigger>
          <Button variant="black">
            <Text color="white">Add New Asset</Text>
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent minW="500px" shadow="lg">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Flex flexDir="column">
                {/* Searchbar & Options */}
                <FormLabel htmlFor="search" ml={1} mt={1} fontWeight="semibold">
                  TICKER / NAME
                </FormLabel>
                <Input
                  size="md"
                  id="search"
                  onChange={handleSearchChange}
                  value={search}
                  placeholder="Name / Symbol"
                  ref={initialFocusRef}
                />
                <RadioGroup onChange={handleRadioTypeChange} value={type} mt={1}>
                  <Stack direction="row" justifyContent="center" gap={2}>
                    <Radio value="stocks">Stocks</Radio>
                    <Radio value="crypto">Cryptocurrency</Radio>
                  </Stack>
                </RadioGroup>

                {isLoading && <Loading />}
                {searchResults ? (
                  /* Search Results Display */
                  <Box maxHeight="300px" overflowY="auto" my={3}>
                    <Table size="sm">
                      <Tbody>
                        {
                          // Can use _focus if it can be seen
                          searchResults.map((result) => (
                            <Tr
                              key={uuidv4()}
                              _hover={{ bgColor: 'gray.50' }}
                              blockSize="10"
                              onClick={() => {
                                setSelected(result);
                                onOpen();
                              }}>
                              <SearchAssetRow type={type} asset={result} />
                            </Tr>
                          ))
                        }
                      </Tbody>
                    </Table>
                  </Box>
                ) : (
                  <Flex p={5} justifyContent="center" alignItems="center">
                    <Text fontWeight="semibold">{search ? 'No results' : 'Find Asset'}</Text>
                  </Flex>
                )}
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <AssetFormModal
        isOpen={isOpen}
        onClose={onClose}
        type={type}
        asset={selected}
        promptRefresh={promptRefresh}
      />
    </>
  );
}
