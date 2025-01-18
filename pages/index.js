import Head from 'next/head'
import Games from '../components/Games'
import Talo from '../components/Talo'

const Home = () => {
  return (
    <main id='main' className='content'>
      <Head>
        <title>Sleepy Studios</title>
      </Head>

      <Games />

      <Talo />
    </main>
  )
}

export default Home
