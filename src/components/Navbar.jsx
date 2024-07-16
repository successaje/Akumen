import {useState} from "react"

import { close, aku, aj, menu } from "../assets";
import { navLinks } from "../constants";
import WalletModal from "./WalletModal";

// import 

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);

  const handleWalletModalOpen = () => {
    setWalletModalOpen(true);
  };

  const handleWalletModalClose = () => {
    setWalletModalOpen(false);
  };

  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setIsConnected(true);
        setWalletModalOpen(false);
      } catch (err) {
        console.error('Failed to connect wallet:', err);
      }
    } else {
      console.error("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={aj} alt="akumen" className="w-[184px] h-[84px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <li className="ml-10">
          <button
            onClick={handleWalletModalOpen}
            className=" w-40 h-10 font-poppins font-normal rounded-xl text-[16px] text-white border border-white" 
          >
            {isConnected ? `Connected: ${account}` : "Connect Wallet"}
          </button>
        </li>

      </ul>

      

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <li>
              <button
                onClick={handleWalletModalOpen}
                className="font-poppins font-medium text-[16px] text-white mt-4"
              >
                {isConnected ? `Connected: ${account}` : "Connect Wallet"}
              </button>
            </li>
          </ul>
        </div>

      </div>
      {isWalletModalOpen && (
        <WalletModal
          onClose={handleWalletModalClose}
        />
      )}

    </nav>
  )
}

export default Navbar
