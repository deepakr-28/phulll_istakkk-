import Head from 'next/head'
import {useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {

  const [data, setData] = useState(null)

  const fetchData = async () => {
    axios.get('http://localhost:5000/showTea').then(res => {
      console.log(res.data)
      setData(res.data.message)
    }).catch(err => {console.log(err)})
  }
  console.log("DATA : ", data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{data}</h1>
      <button onClick = {fetchData}>click</button>
    </div>
  )
}
