import React from 'react'
import styles from "../style";
import Button from "./Button";

const Try = () => (

    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Try our <span class="text-gradient">Chess!</span></h2>
      <p className={`${styles.paragraph} max-w-[870px] mt-5`}>
        Experience the classic game of chess like never before. Our platform offers a seamless and engaging way to play, whether you’re a beginner or a seasoned pro.  
        Challenge your friends, join tournaments, and enjoy the strategic depth of chess in a vibrant community.
        Give it a try and elevate your game!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>

)


export default Try
