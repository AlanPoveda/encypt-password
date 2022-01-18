import type { NextPage } from 'next'
import styled from '../../styles/global.module.scss'

import { Header } from '../components/Header'
import { InputPassword } from '../components/InputPassword'


const title = "Input your password 🔒"

const Home: NextPage = () => {
  return (
    <div className={styled.GlobalStyle}>
      
      <Header title={title}/>
      <InputPassword />
    </div>
  )
}

export default Home
