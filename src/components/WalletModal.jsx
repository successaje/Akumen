// WalletModal.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content : center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
`;

const WalletButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #6272a4;
  color: white;
  &:hover {
    background-color: #44475a;
  }
`;

const WalletModal = ({ onClose }) => {
  const [error, setError] = useState('');


    const connectWallet = async () => {
        if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            console.log('Connected address:', address);
            onClose(); // Close the modal after successful connection
            
        } catch (err) {
            console.error(err);
            setError('Failed to connect wallet. Please try again.');
        }
        } else {
            console.error("MetaMask is not installed. Please install it to use this feature.")
            setError('MetaMask is not installed. Please install it to use this feature.');
        }
    };


  return (
    <ModalBackground>
      <ModalContainer>
        <h2>Connect Your Wallet</h2>
        <WalletButton onClick={connectWallet}>Connect MetaMask</WalletButton>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <WalletButton onClick={onClose}>Close</WalletButton>
      </ModalContainer>
    </ModalBackground>

  );
};

export default WalletModal;
