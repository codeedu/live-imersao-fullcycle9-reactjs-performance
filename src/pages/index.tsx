import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button} from '@mui/material';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button variant='contained'>Test</Button>
    </div>
  )
}

export default Home
