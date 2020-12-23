import '../styles/styles.scss'
import Nav from '../components/Nav'
import Credit from '../components/Credit'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

function App({ Component, pageProps, router }) {
  const isError = router.route === '/_error'
  
  return (
    <>
      <Head>
        <script async defer data-domain='sleepystudios.net' src='https://stats.sleepystudios.net/js/plausible.js' />
      </Head>

      {!isError && <Nav />}

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>

      {!isError && <Credit />}
    </>
  )
}

export default App
