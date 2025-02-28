import Head from 'next/head' 
import { SessionProvider } from 'next-auth/react'
import '@picocss/pico'
import NavBarr from '../components/NavBarr'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' src='favicon.ico' />
        <title>Home</title>
      </Head>
      <SessionProvider>
        <NavBarr />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
