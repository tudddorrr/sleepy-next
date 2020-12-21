import '../styles/styles.scss'
import Nav from '../components/Nav'
import Credit from '../components/Credit'
import { AnimatePresence } from 'framer-motion'

function App({ Component, pageProps, router }) {
  const isError = router.route === '/_error'
  
  return (
    <>
      {!isError && <Nav />}

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>

      {!isError && <Credit />}
    </>
  )
}

export default App
