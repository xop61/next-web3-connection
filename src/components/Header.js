import React, { useContext, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import ThemeSwitch from './ThemeSwitch';
import { ConnectButton } from './styleHook';
import ThemeContext from './ThemeContext';
import Web3 from 'web3';
import { ethers } from 'ethers';

export default function Header() {
  const { theme } = useContext(ThemeContext);

  const [address, setAddress] = useState("");
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {

    ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(
        async () => {
          setAccountInfo();
        }
      )
      .catch((error) => {
        if (error.code === -32002) {
          // EIP-1193 userRejectedRequest error
          toast.error('The wallet is opened. Please connect', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored"
          });
        } else if (error.code === 4001) {
          toast.error('You rejected the connect, please connect the MetaMask', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored"
          });
        }
      });
  }

  const setAccountInfo = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const balanceAccount = await web3.eth.getBalance(accounts[0]);

    setConnected(true);
    setAddress(accounts[0]);
    setBalance(ethers.utils.formatEther(balanceAccount));
  }

  useEffect(() => {
    connectWallet()
  }, [])
  return (
    <div className="header">
      <Container>
        <div className="header-content">
          <div className="logo">
            <img
              src="../logo.png"
              alt=""
              data-nsfw-filter-status
            />

          </div>
          <div className="header-actions">
            <ThemeSwitch />
            <ConnectButton color="primary" variant="contained" onClick={connectWallet} size="large" disabled={connected}>
              {!connected ? "CONNECT" : "0x" + address.slice(2, 4) + "..." + address.slice(38, 42)}
            </ConnectButton>
          </div>
        </div>
      </Container>
    </div>
  )
}