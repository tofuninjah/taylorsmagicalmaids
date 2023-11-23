import Image from 'next/image'
import Head from 'next/head'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Taylors Magical Maids - Your Trusted Cleaning Partner</title>
        <meta
          name='description'
          content='Professional cleaning services for homes and offices. | Taylors Magical Maids'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <Image
            src='/images/tmm-logo.webp'
            alt='Taylors Magical Maids'
            width='612'
            height='787'
            className={styles.logo}
          />
          <h1 className={styles.title}>Taylors Magical Maids</h1>
          <p className={styles.tagline}>Your Trusted Cleaning Partner</p>
        </header>

        <section className={styles.content}>
          <p>
            Welcome to Taylor&rsquo;s Magical Maids, founded by me, Taylor the
            maid! From humble beginnings to a dream realized in Houston,
            I&rsquo;m thrilled to launch my cleaning company. My mission? To
            help you host unforgettable family gatherings and to kickstart a
            happier, cleaner home life, all at an unbeatable price. I specialize
            in transforming kitchens, bathrooms, and living spaces, bringing a
            touch of sparkle wherever I go. Follow my cleaning journeys on my
            social media soon for insider tips and see the magic unfold. Ready
            for a spotless home? Reach out for a free consultation or book your
            first session today. I&rsquo;m here to make cleanliness a joyful and
            accessible experience for everyone. Can&rsquo;t wait to hear from
            y&rsquo;all!
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2023 Taylors Magical Maids. All rights reserved.</p>
      </footer>
    </div>
  )
}
