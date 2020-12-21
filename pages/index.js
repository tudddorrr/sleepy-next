import Head from 'next/head'
import Games from '../components/Games'

const Home = ({ games }) => {
  return (
    <main id='main' className='content'>
      <Head>
        <title>Sleepy Studios</title>
      </Head>

      <Games />
    </main>
  )
}

export default Home
