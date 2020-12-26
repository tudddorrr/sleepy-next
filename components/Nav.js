import Head from 'next/head'
import { IconBrandTwitter, IconBrandGithub } from '@tabler/icons'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Nav = () => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <title>Sleepy Studios</title>
      <meta name='description' content='Video games from the developers of Superstatic, Crawle and all your favourite jam games.' />
      <meta name='author' content='Sleepy Studios' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#111318' />
      <meta name='msapplication-TileColor' content='#111318' />
      <meta name='theme-color' content='#ffffff' />
      <meta property='og:title' content='Sleepy Studios' key='og:title' />
      <meta property='og:description' content='Video games from the developers of Superstatic, Crawle and all your favourite jam games' key='og:description' />
      <meta property='og:image' content='https://sleepystudios.net/images/og.png' key='og:image' />

      <script async defer data-domain='sleepystudios.net' src='https://stats.sleepystudios.net/js/plausible.js' />
    </Head>

    
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.5 }}
    >
      <ul>
        <li className='button-link'>
          <Link href='/'><a>Home</a></Link>
        </li>
        <li className='button-link'>
          <Link href='/about'><a>About</a></Link>
        </li>
      </ul>
      <ul>
        <li className='icon-link'>
          <a href='https://twitter.com/sleepystudios' target='_blank' rel='noopener' aria-label='Sleepy Studios on Twitter'>
            <IconBrandTwitter size={32} color='white' />
          </a>
        </li>
        <li className='icon-link'>
          <a href='https://github.com/sleepystudios' target='_blank' rel='noopener' aria-label='Sleepy Studios on GitHub'>
            <IconBrandGithub size={32} color='white' />
          </a>
        </li>
      </ul>
    </motion.nav>

    <motion.div
      id='logo'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.5 }}
    >
      <Link href='/'>
        <a aria-label='Go to homepage'>
          <Image width='400' height='115' src='/images/logo.svg' alt='Sleepy Studios' />
        </a>
      </Link>
    </motion.div>
  </>
)

export default Nav
