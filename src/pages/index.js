import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Wrapper, { CenteredDiv } from '../components/Wrapper';
import Web3 from 'web3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ethers } from "ethers";
import ReactCopyButtonWrapper from "react-copy-button-wrapper";
import globalUseStyles, { ConnectButton, ActionButton } from '../components/styleHook';
import { ContentCopyRounded, ArrowDownwardRounded, CallMadeRounded, CompareArrowsRounded } from '@mui/icons-material';
import { ButtonGroup } from '@mui/material';

export default function Home() {
  const [address, setAddress] = useState("");
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState("");

  const globalClasses = globalUseStyles();

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
    <Wrapper>
      <ConnectButton color="primary" variant="contained" onClick={connectWallet} size="large" disabled={connected}>
        {!connected ? "CONNECT" : "0x" + address.slice(2, 4) + "..." + address.slice(38, 42)}
      </ConnectButton>
      <Card sx={{ maxWidth: 345 }} className={globalClasses.userCard}>
        <Typography component="h2" className={globalClasses.addressText}>{"0x" + address.slice(2, 4) + "..." + address.slice(38, 42)}
          <ReactCopyButtonWrapper text={address}>
            <IconButton aria-label="settings" size="small">
              <ContentCopyRounded fontSize="small" />
            </IconButton>
          </ReactCopyButtonWrapper>
        </Typography>
        <CardContent>
          <img src="../person.svg" className={globalClasses.coverImage} data-nsfw-filter-status />
          <Typography component="h1" className={globalClasses.balanceText}>
            {balance}<span>BNB</span>
          </Typography>
          <CenteredDiv>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <ActionButton startIcon={<ArrowDownwardRounded fontSize="small" />}>Buy</ActionButton>
              <ActionButton startIcon={<CallMadeRounded fontSize="small" />}>Send</ActionButton>
              <ActionButton startIcon={<CompareArrowsRounded fontSize="small" />}>Send</ActionButton>
            </ButtonGroup>
          </CenteredDiv>
        </CardContent>
      </Card >
      <ToastContainer style={{ fontSize: 12, padding: "5px !important", lineHeight: "15px" }} />
    </Wrapper >
  );
}
