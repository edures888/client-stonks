import { useState } from 'react';
import { ethers } from 'ethers';
import { Box, Button } from '@chakra-ui/react';

export default function MetamaskAsset() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(null);

  const getBalance = (add) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [add, 'latest']
      })
      .then((bal) => {
        // Setting balance
        setBalance(ethers.utils.formatEther(bal));
      });
  };

  const accountChangeHandler = (account) => {
    // Setting an address data
    setAddress(account);

    // Setting a balance
    getBalance(account);
  };

  const buttonHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert('Missing metamask extension!!');
    }
  };

  return (
    <>
      <p>
        <strong>Address: </strong>
        {address}
      </p>
      <p>
        <strong>Balance: </strong>
        {balance} ETH
      </p>
      <Button onClick={buttonHandler}>Connect to Metamask</Button>
    </>
  );
}
