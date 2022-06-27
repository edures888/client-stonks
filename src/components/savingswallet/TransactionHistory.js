import {
  Tr,
  Td,
  IconButton,
  Heading,
  Text,
  VStack,
  useDisclosure,
  Button,
  Box
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { DeleteIcon } from '@chakra-ui/icons';
import useHover from '../hooks/useHover';
import DeleteAlert from '../DeleteAlert';

export default function TransactionHistory({ txn, promptRefresh }) {
  const [hover, handleMouseIn, handleMouseOut] = useHover();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr
      _hover={{ background: 'gray.100' }}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      blockSize="20">
      <Td>
        <Heading size="sm">{txn.note || '-'}</Heading>
      </Td>
      <Td>
        <Text color={txn.amount > 0 ? 'green' : 'red'}>
          {txn.amount > 0
            ? `$${txn.amount
                .toFixed(2)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
            : `-$${Math.abs(txn.amount).toFixed(2).toString()}`}
        </Text>
      </Td>
      <Td>{txn.category || '-'}</Td>
      <Td>{format(parseISO(txn.date), 'MMM dd, yyyy')}</Td>
      <Td>
        {hover ? (
          <>
            <IconButton size="sm" w={5} p={0} m={0} icon={<DeleteIcon />} onClick={onOpen} />
            <DeleteAlert
              isOpen={isOpen}
              onClose={onClose}
              assetId={txn._id}
              name={txn.note}
              promptRefresh={promptRefresh}
              serverURL={`${process.env.REACT_APP_SERVER_URL}/api/v1/transactions/`}
            />
          </>
        ) : (
          <Box w={8}> </Box>
        )}
      </Td>
    </Tr>
  );
}
