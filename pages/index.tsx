import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../src/components/Header'

import { GlobalStyle } from '../styles/global'

const title = "Input your password 🔒"

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header title={title}/>
    </>
  )
}

export default Home
