import React from 'react'
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Connect = () => (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Connect <br className="sm:block hidden" /> with your friends & Socialise
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Easily connect with friends, join communities, and share your gaming experiences. 
      Our platform fosters social interactions, allowing you to build lasting connections while enjoying your favorite board games.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[80%] h-[100%]" />
    </div>
  </section>
)

export default Connect
