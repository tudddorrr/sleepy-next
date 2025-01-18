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
      id='about'
    >
      <h1>About</h1>

      <p>Hey, we're two guys making games in our spare time. Our last big release was <a href='https://scrunk.sleepystudios.net?utm_source=sleepy+about' target='_blank' rel='noopener'>Scrunk</a> - an online team-based building and raiding game.</p>

      <p>We also made <a href='https://superstatic.sleepystudios.net?utm_source=sleepy+about' target='_blank' rel='noopener'>Superstatic</a> - a top-down shooter where you're given the ability to possess and control your enemies 
        and (way back in the day) <a href='https://crawle.sleepystudios.net?utm_source=sleepy+about' target='_blank' rel='noopener'>Crawle</a> - a sandbox dungeon crawler with a focus on realistic survival.</p>

      <p>
        We regularly participate in a variety of game jams, which have lead to games like: {' '}
        <Link href='/games/depthe'>Depthe</Link> (Ludum Dare 54), {' '}
        <Link href='/games/no-thing-island'>No-thing Island</Link> (Ludum Dare 45) and {' '}
        <Link href='/games/entropy'>Entropy</Link> (Ludum Dare 38).
      </p>

      <p>We're big fans of open source and you can find most of our newer games on <a href='https://github.com/sleepystudios' target='_blank' rel='noopener'>GitHub</a>.</p>

      <div className='featured__img'>
        <Image src='/images/games/scrunk.png' alt='Scrunk gameplay' width={767} height={250} quality={100} />
      </div>

      <h2>Talo, an open source game backend</h2>

      <p>Speaking of open source, we're also building an open source game backend for Godot and Unity.</p>

      <p><a href='https://trytalo.com?utm_source=sleepy-about' target='_blank' rel='noopener'>Talo</a> is designed to help you build your game faster and understand your players better. It's packed full of features like leaderboards, player stats, analytics and more.</p>

      <div className='featured__img'>
        <Link href='https://trytalo.com?utm_source=sleepy-about' target='_blank' rel='noopener'>
          <Image src='https://trytalo.com/opengraph.png' alt='Talo Game Services' width={767} height={403} quality={100} />
        </Link>
      </div>

      <h2>Contact us</h2>

      <p>Want to get in touch? Email <span className='highlight'>supportREMOVETHISBIT@sleepystudios.net</span>.</p>
    </motion.div>
  </main>
)

export default About
