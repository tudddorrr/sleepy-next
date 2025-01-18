import Image from 'next/image'
import Link from 'next/link'

export default function Talo() {
  return (
    <div id='talo'>
      <Link id='talo-img-link' href='https://trytalo.com?utm_source=sleepy-home' target='_blank' rel='noopener'>
        <Image id='talo-img' src='https://trytalo.com/opengraph.png' alt='Talo Game Services' width={320} height={168} quality={100} />
      </Link>

      <div>
        <h2>Our open source game backend</h2>
        <p>Talo is designed to help you build your game faster and understand your players better.</p>
        <p>It's the easiest way to integrate leaderboards, stats, analytics and more into your Godot or Unity game.</p>
        <p><Link href='https://trytalo.com?utm_source=sleepy-home' target='_blank' rel='noopener'>Learn more about Talo</Link></p>
      </div>
    </div>
  )
}
