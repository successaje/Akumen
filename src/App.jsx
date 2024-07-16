import styles from "./style";
import { Navbar, Subscribe,
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
  Chess } from "./components";
  import Typewriter from "typewriter-effect";

const App = () => (

    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div> 
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Chess />
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
    </div>

);

export default App
