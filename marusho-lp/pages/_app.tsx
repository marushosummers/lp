import { AppProps } from 'next/app'
import '../styles/index.css'
import { GoogleAnalytics } from "../lib/gtag";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

