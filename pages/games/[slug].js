import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import games from '../../data/games'

const Game = ({ game }) => {
  const webOnly = game.platforms === 'Web'

  return (
    <main id='main' className='content'>
      <Head>
        <title>Sleepy Studios - {game.name}</title>
        <meta property='og:title' content={`${game.name} by Sleepy Studios`} key='og:title' />
        <meta property='og:description' content={game.desc} key='og:description' />
        <meta property='og:image' content={`https://sleepystudios.net/images/games/${game.poster}`} key='og:image' />
      </Head>

      <motion.div
        className='game__content'
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 1000, opacity: 0 }}
        transition={{ ease: 'easeIn', duration: 0.35 }}
      >
        <div className='featured__img'>
          <Image src={`/images/games/${game.poster}`} alt={`${game.name} gameplay`} width={767} height={250} />
        </div>

        <h1>{game.name}</h1>

        <div className='platforms-release__wrapper'>
          <p>{game.platforms}</p>
          <p>Released {game.published}</p>
        </div>

        <hr/>

        <p>{game.desc}</p>

        <p>{game.longDesc}</p>

        <div className='button-link'>
          <a href={game.download} target='_blank' rel='noopener'>{webOnly ? 'Play' : 'Download'} on itch.io</a>
        </div>
      </motion.div>
    </main>
  )
}

export async function getStaticPaths() {
  const paths = games.map((game) => ({
    params: {
      slug: game.slug
    }
  }))

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const game = games.find((g) => g.slug === context.params.slug)

  return {
    props: {
      game
    }
  }
}

export default Game
