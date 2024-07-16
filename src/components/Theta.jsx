import React from 'react'
import { clients } from "../constants";
import styles from "../style";

const Theta = () => (
    <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[70px] min-w-[100px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[70px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
)

export default Theta

