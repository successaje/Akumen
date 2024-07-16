import styles from "../style";
import { chess, robot } from "../assets";
import Typewriter from "typewriter-effect";
// import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect"
import GetStarted from "./GetStarted";
import React from "react";
// import { Link } from "react-router-dom";


// Text Generate

const Chess = ({ openWalletModal }) => {
  
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

<div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <Typewriter
              options={{
                strings: [
                  'The Future of <span class="text-gradient">Board Games</span>',
                  'Built on <span class="text-gradient">Theta Network</span>'
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
             {/* <TypewriterEffectSmooth words={words} /> */}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            
            {/* <GetStarted /> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          {/* <Link to="/chess"> */}
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Play now
            </button>
          {/* </Link> */}
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm" onClick={openWalletModal}>
            Connect Wallet
          </button>
        </div>
      
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <b>Akumen</b> revolutionises the way you play and enjoy board games. 
        Whether you're a casual player or a competitive enthusiast, our platform 
        offers a seamless experience with interactive features, live streaming, 
        and social connectivity. Challenge friends, join tournaments, and 
        experience the future of board gaming, all in one place.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={chess} alt="billing" className="w-[90%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Chess
