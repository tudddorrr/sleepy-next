import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import games from '../data/games'

const Games = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0)

  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.35 }}
    >
      <ul id='games-container' role='list'>
        {games.map((game, idx) => (
          <li key={game.name} className={`game game--${game.class}`}>
            <div className='inner_content'>
              {game.video && imagesLoaded >= idx &&
                <video
                  autoPlay
                  loop
                  muted
                  poster={`/images/games/${game.poster}`}
                  preload='none'
                  src={require(`../public/videos/${game.video}`)} 
                />         
              }

              {(!game.video || imagesLoaded < idx) &&
                <Image
                  width='767'
                  height='250'
                  src={`/images/games/${game.poster}`}
                  alt=''
                  onLoad={() => setImagesLoaded(imagesLoaded + 1)}
                  quality={100}
                />
              }

              <div className='caption'>
                <p className='title'>
                  {game.external &&
                    <a href={game.external} target='_blank' rel='noopener'>{game.name}</a>
                  }
                  {!game.external &&
                    <Link href={`/games/${game.slug}`}>
                      <a>
                        {game.name}
                      </a>
                    </Link>
                  }
                </p>
                <p className='desc'>{game.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Games
