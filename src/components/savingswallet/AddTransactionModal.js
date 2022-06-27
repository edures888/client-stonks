import { useAuth0 } from '@auth0/auth0-react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  FormLabel,
  Input
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import useCompletionToast from '../hooks/useCompletionToast';

export default function AddTransactionModal({ promptRefresh }) {
  const { getAccessTokenSilently, user } = useAuth0();
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(Date.now);
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const noteInputRef = useRef();
  const [showSuccessToast, showErrorToast] = useCompletionToast();

  const addTransaction = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/v1/transactions/`,
      {
        user,
        amount,
        date,
        category,
        note
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTransaction()
      .then(
        onClose,
        promptRefresh(),
        showSuccessToast('Transaction Added', `${note} has been added.`)
      )
      .catch((err) => console.log(err));
    setAmount('');
    setNote('');
    setDate(Date.now);
    setCategory('');
  };

  return (
    <>
      <Box justify="center" align="center" pb={2}>
        <Button onClick={onOpen} variant="black">
          Add New Transaction
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={noteInputRef} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Transaction</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={onSubmit}>
            <ModalBody>
              <Box>
                <div>
                  <FormLabel htmlFor="Note">
                    Transaction Label:
                    <Input
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Enter transaction label"
                      ref={noteInputRef}
                      required
                    />
                  </FormLabel>
                </div>
                <div>
                  <FormLabel htmlFor="amount">
                    Amount:
                    {/* TODO form validation: prevent zero input */}
                    <Input
                      type="Number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      required
                    />
                  </FormLabel>
                </div>
                <div>
                  <FormLabel htmlFor="date">
                    Date:
                    <Input
                      type="Date"
                      defaultValue={Date.now}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </FormLabel>
                </div>
                <div>
                  <FormLabel htmlFor="Category">
                    Category:
                    <Input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Category (Optional)"
                    />
                  </FormLabel>
                </div>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="green" marginInline={3}>
                Add Transaction
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
