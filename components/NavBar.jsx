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
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const checkWalletConnected = async () => {
      if (typeof window.ethereum !== 'undefined' && typeof window !== 'undefined'){
        // check if Wallet is connected
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        if(web3Instance){
          const accounts = await web3Instance.eth.getAccounts();
          if(accounts.length > 0){
            setAddress(accounts[0]);
            setTextBtn('Wallet Connected');
            setLoading(false);
          }else{
            setLoading(false);
          }
        }
      }else{
        setLoading(false);
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
              <svg width="26px" height="47px" viewBox="0 0 256 417" version="1.1" preserveAspectRatio="xMidYMid">
                <g>
                  <polygon fill="#b97429" points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"/>
                  <polygon fill="#F4BA41" points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"/>
                  <polygon fill="#c58642" points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"/>
                  <polygon fill="#F4BA41" points="127.962 416.9052 127.962 312.1852 0 236.5852"/>
                  <polygon fill="#E28B31" points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"/>
                  <polygon fill="#8f6538" points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

