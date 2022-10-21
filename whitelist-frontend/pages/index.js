import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [numOfWhitelisted, setNumOfWhitelisted] = useState(0);
  const web3ModalRef = useRef();

  useEffect(()=>{
    if(!walletConnected){
      web3ModalRef.current = new web3ModalRef({
        network: "goerli",
        providerOptions:{},
        disabledInjectedProvider: false,  
      })
    }
  })

  return (
    <div>
      <Head>
        <title>Whitelist dApp</title>
        <meta name="description" content="Whitelist-Dapp" />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>Welcome to whitlist 101</h1>
        <div className={styles.description}>
          {numOfWhitelisted} have already joined the whitelist
        </div>
        <div>
          <img className={styles.image} src="./crypto-devs.svg" />
        </div>
      </div>
      <footer className={styles.footer}>Powered by Crypto Inc.</footer>
    </div>
  );
}
