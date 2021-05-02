import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const About = () => (
  <main id='main' className='content'>
    <Head>
      <title>Sleepy Studios - About</title>
    </Head>

    <motion.div
      className='text__content'
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1000, opacity: 0 }}
      transition={{ ease: 'easeIn', duration: 0.35 }}
    >
      <h1>About</h1>

      <p>Hey there, we're two guys making games in our spare time. We're usually making multiplayer games, jam games and most of the time a mix of the two.</p>

      <p>Our latest game is <a href='https://scrunk.sleepystudios.net?utm_source=sleepy+about' target='_blank' rel='noopener'>Scrunk</a> - an online team-based building and raiding game.</p>

      <div className='featured__img'>
        <Image src='/images/games/scrunk.png' alt='Scrunk gameplay' width={767} height={250} quality={100} />
      </div>

      <p>We also made <a href='https://superstatic.sleepystudios.net?utm_source=sleepy+about' target='_blank' rel='noopener'>Superstatic</a> - a top-down shooter where you're given the ability to possess and control your enemies 
        and (way back in the day) <a href='https://crawle.sleepystudios.net?utm_source=sleepy+about' target='_blank' rel='noopener'>Crawle</a> - a sandbox dungeon crawler with a focus on realistic survival.</p>

      <p>
        We regularly participate in a variety of game jams, which have lead to games like: {' '}
        <Link href='/games/no-thing-island'><a>No-thing Island</a></Link> (Ludum Dare 45), {' '}
        <Link href='/games/entropy'><a>Entropy</a></Link> (Ludum Dare 38), and {' '}
        <Link href='/games/vigilante-2084'><a>Vigilante 2084</a></Link> (Cyberpunk Jam).
      </p>

      <p>We're big fans of open source and you can find most of our newer games on <a href='https://github.com/sleepystudios' target='_blank' rel='noopener'>GitHub</a>.</p>

      <h2>Contact us</h2>

      <p>Want to get in touch? Email <span className='highlight'>supportREMOVETHISBIT@sleepystudios.net</span>.</p>
    </motion.div>
  </main>
)

export default About
