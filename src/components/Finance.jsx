import React from 'react'
import styles, { layout } from "../style";
import { bill, phrase } from "../assets";



const Finance = () => (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={phrase} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Why <br className="sm:block hidden" /> Blockchain and Theta?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Blockchain technology offers unparalleled security, transparency, and efficiency, making it ideal for secure interactions.
        Theta Network enhances this with its decentralized infrastructure, reducing costs and latency while ensuring high-quality, secure content delivery.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
)

export default Finance
