import type { NextPage } from 'next'
import { GlobalStyle } from '../styles/global'

import { Header } from '../src/components/Header'
import { InputPassword } from '../src/components/InputPassword'


const title = "Input your password 🔒"

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header title={title}/>
      <InputPassword />
    </>
  )
}

export default Home
