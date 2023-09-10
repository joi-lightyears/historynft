"use client"
import Image from 'next/image'
import "../styles/navbar.scss"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Web3 from 'web3';

export default function NavBar() {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [textBtn, setTextBtn] = useState('Connect Wallet');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const checkWalletConnected = async () => {
      if (typeof window.ethereum !== 'undefined' && typeof window !== 'undefined'){
        // check if Wallet is connected
        const web3Instance = new Web3(window.ethereum);
        if(web3Instance){
          const accounts = await web3Instance.eth.getAccounts();
          if(accounts.length > 0){
            setWeb3(web3Instance);
            setAddress(accounts[0]);
            setTextBtn('Wallet Connected');
            setLoading(false);
          }else{
            setLoading(false);
          }
        }
      }
    }
    checkWalletConnected();
  }, []);

  const handleConnectWallet = async () => {
    if (typeof window.ethereum !== 'undefined' && typeof window !== 'undefined') {
      try {
        setLoading(true); // Set loading to true when connecting
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAddress(accounts[0]);
        setTextBtn('Wallet Connected');
        // console.log(address);
        setLoading(false); // Set loading to false after connecting
      } catch (err) {
        console.log(err);
        setLoading(false); // Set loading to false if there's an error
      }
    } else {
      alert('Please install MetaMask!');
      setLoading(false); // Set loading to false if MetaMask is not installed
    }
  }

  return (
    <div className="navContainer">
      <div className="navBar">
        <div className="navBarLeft">
          <div className="navBarLeftLogo">
            <Link href="/">
              <Image src="/img/VSKH_logo_menu.png" width={40} height={40} alt='' />
            </Link>
          </div>
          <div className="navBarLeftLinks">
            <Link href="/projects">
              <span>
                Projects
              </span>
            </Link>
            <Link href="/support">
              <span>
                Supports
              </span>
            </Link>
          </div>
        </div>
        <div className="navBarRight">
          <div className="account">
            <div className="signInContainer">
              <button className="signInBtn" onClick={handleConnectWallet} disabled={loading}>
                {loading ? 'Connecting...' : textBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

