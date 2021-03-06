import React, { useContext, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import ThemeSwitch from './ThemeSwitch';
import { ConnectButton } from './styleHook';
import ThemeContext from './ThemeContext';
import Web3 from 'web3';
import { ethers } from 'ethers';

export default function Header({ connected, address, handleConnect }) {
  const { theme } = useContext(ThemeContext);

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
            <ConnectButton color="primary" variant="contained" onClick={handleConnect} size="large" disabled={connected}>
              {!connected ? "CONNECT" : "0x" + address.slice(2, 4) + "..." + address.slice(38, 42)}
            </ConnectButton>
          </div>
        </div>
      </Container>
    </div>
  )
}