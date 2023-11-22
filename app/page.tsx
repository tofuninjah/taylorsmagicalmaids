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
            Welcome to Taylors Magical Maids, your professional cleaning service
            provider for homes and offices. We are committed to delivering
            exceptional cleanliness and hygiene solutions that meet your
            specific needs.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2023 Taylors Magical Maids. All rights reserved.</p>
      </footer>
    </div>
  )
}
