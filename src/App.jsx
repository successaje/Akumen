import styles from "./style";
import {
  Navbar,
  Subscribe,
  Stats,
  Game,
  Business,
  Feedback,
  Finance,
  Connect,
  Comments,
  Theta,
  Try,
  Footer,
  WalletModal,
  // Home,
  // ChessGame,
  // Board,
  Chess,
} from "./components";
// import { gameSubject, initGame, resetGame } from './components/ChessGame/Game'
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Typewriter from "typewriter-effect";
import React, { useState } from "react";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Router> */}
          <Navbar />
          {/* <switch>
              <Route path="/" exact component={Home} />
              <Route path="/chess" component={ChessGame} />
            </switch>
          </Router> */}
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <button onClick={handleWalletModalOpen}>Open Wallet</button>
        {isWalletModalOpen && <WalletModal onClose={handleWalletModalClose} />} */}
          <Chess openWalletModal={openModal} />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Finance />
          <Connect />
          <Comments />
          <Theta />
          <Try />
          <Footer />
          {/* <Feedback /> */}
          {/* <GetStarted /> */}
          {/* <Subscribe /> */}
        </div>
      </div>
      {isModalOpen && <WalletModal onClose={closeModal} />}
    </div>
  );
};

export default App;
